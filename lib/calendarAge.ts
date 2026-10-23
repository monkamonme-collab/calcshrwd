export interface CalendarAge {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalMonths: number;
}

interface CalendarDate {
  year: number;
  month: number;
  day: number;
}

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function utcTimestamp(date: CalendarDate): number {
  // Date.UTC treats years 0–99 as 1900–1999. setUTCFullYear does not.
  const value = new Date(0);
  value.setUTCHours(0, 0, 0, 0);
  value.setUTCFullYear(date.year, date.month - 1, date.day);
  return value.getTime();
}

function daysInMonth(year: number, month: number): number {
  const last = new Date(0);
  last.setUTCHours(0, 0, 0, 0);
  last.setUTCFullYear(year, month, 0);
  return last.getUTCDate();
}

function parseCalendarDate(value: string): CalendarDate | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (year < 1 || month < 1 || month > 12 || day < 1 || day > daysInMonth(year, month)) {
    return null;
  }
  return { year, month, day };
}

function addMonthsClamped(date: CalendarDate, months: number): CalendarDate {
  const absoluteMonth = date.year * 12 + date.month - 1 + months;
  const year = Math.floor(absoluteMonth / 12);
  const month = absoluteMonth - year * 12 + 1;
  return { year, month, day: Math.min(date.day, daysInMonth(year, month)) };
}

function addYearsClamped(date: CalendarDate, years: number): CalendarDate {
  const year = date.year + years;
  return { year, month: date.month, day: Math.min(date.day, daysInMonth(year, date.month)) };
}

/**
 * Whole years and months use clamped calendar anniversaries: January 31 + 1 month
 * is February 28/29; February 29 + 1 year is February 28 in a non-leap year.
 * Day counts use UTC calendar dates so local DST cannot change the result.
 */
export function calculateCalendarAge(birthIso: string, targetIso: string): CalendarAge | null {
  const birth = parseCalendarDate(birthIso);
  const target = parseCalendarDate(targetIso);
  if (!birth || !target) return null;
  const start = utcTimestamp(birth);
  const end = utcTimestamp(target);
  if (start > end) return null;

  let years = target.year - birth.year;
  if (utcTimestamp(addYearsClamped(birth, years)) > end) years -= 1;
  const yearAnchor = addYearsClamped(birth, years);
  let months = (target.year - yearAnchor.year) * 12 + target.month - yearAnchor.month;
  if (utcTimestamp(addMonthsClamped(yearAnchor, months)) > end) months -= 1;
  const monthAnchor = addMonthsClamped(yearAnchor, months);
  const days = Math.round((end - utcTimestamp(monthAnchor)) / MS_PER_DAY);
  const totalDays = Math.round((end - start) / MS_PER_DAY);
  return { years, months, days, totalDays, totalWeeks: Math.floor(totalDays / 7), totalMonths: years * 12 + months };
}

/** Days until the next calendar birthday, relative to the selected comparison date. */
export function daysUntilNextBirthday(birthIso: string, targetIso: string): number | null {
  const birth = parseCalendarDate(birthIso);
  const target = parseCalendarDate(targetIso);
  if (!birth || !target || utcTimestamp(birth) > utcTimestamp(target)) return null;
  let anniversary = addYearsClamped(birth, target.year - birth.year);
  if (utcTimestamp(anniversary) < utcTimestamp(target)) {
    anniversary = addYearsClamped(birth, target.year - birth.year + 1);
  }
  return Math.round((utcTimestamp(anniversary) - utcTimestamp(target)) / MS_PER_DAY);
}

export function formatLocalDate(date: Date): string {
  const year = String(date.getFullYear()).padStart(4, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return [year, month, day].join("-");
}
