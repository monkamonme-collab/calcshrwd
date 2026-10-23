import assert from "node:assert/strict";
import { test } from "node:test";
import { calculateCalendarAge, daysUntilNextBirthday, formatLocalDate } from "../lib/calendarAge.ts";

test("January 31 to March 1 does not produce negative days", () => {
  const result = calculateCalendarAge("2000-01-31", "2026-03-01");
  assert.deepEqual([result?.years, result?.months, result?.days], [26, 1, 1]);
});

test("the end of February is a clamped monthly anniversary", () => {
  const result = calculateCalendarAge("2025-01-31", "2025-02-28");
  assert.deepEqual([result?.years, result?.months, result?.days], [0, 1, 0]);
});

test("leap-day birthday in a non-leap year uses February 28", () => {
  const result = calculateCalendarAge("2024-02-29", "2025-03-01");
  assert.deepEqual([result?.years, result?.months, result?.days], [1, 0, 1]);
  assert.equal(daysUntilNextBirthday("2024-02-29", "2025-02-28"), 0);
});

test("returns zero for matching dates", () => {
  assert.deepEqual(calculateCalendarAge("2024-01-01", "2024-01-01"), {
    years: 0, months: 0, days: 0, totalDays: 0, totalWeeks: 0, totalMonths: 0,
  });
});

test("rejects reversed or invalid dates", () => {
  assert.equal(calculateCalendarAge("2024-03-01", "2024-02-29"), null);
  assert.equal(calculateCalendarAge("2025-02-29", "2026-01-01"), null);
  assert.equal(calculateCalendarAge("2024-02-30", "2024-03-01"), null);
});

test("counts leap years and year boundaries correctly", () => {
  assert.equal(calculateCalendarAge("2024-02-28", "2024-03-01")?.totalDays, 2);
  assert.equal(calculateCalendarAge("2025-12-31", "2026-01-01")?.days, 1);
  assert.equal(calculateCalendarAge("2000-02-29", "2001-02-28")?.years, 1);
});

test("remaining birthday days use the selected comparison date", () => {
  assert.equal(daysUntilNextBirthday("2000-10-31", "2026-10-24"), 7);
  assert.equal(daysUntilNextBirthday("2000-10-31", "2026-10-31"), 0);
  assert.equal(daysUntilNextBirthday("2000-10-31", "2026-11-01"), 364);
});

test("calendar decomposition never has negative days in boundary cases", () => {
  const dates = [
    "2023-01-29", "2023-01-30", "2023-01-31", "2023-02-28",
    "2024-01-31", "2024-02-29", "2024-03-01",
    "2025-02-28", "2025-03-01", "2026-03-01",
  ];
  for (const birth of dates) {
    for (const target of dates) {
      const age = calculateCalendarAge(birth, target);
      if (!age) continue;
      assert.ok(age.years >= 0 && age.months >= 0 && age.days >= 0, birth + " → " + target);
      assert.ok(age.months < 12, birth + " → " + target);
    }
  }
});

test("local date formatter uses the local calendar, not UTC", () => {
  const date = new Date(2026, 9, 24, 0, 15, 0);
  assert.equal(formatLocalDate(date), "2026-10-24");
});
