"use client";

import { useState } from "react";
import Link from "next/link";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [toDate, setToDate] = useState(() => new Date().toISOString().split("T")[0]);

  const age = (() => {
    if (!birthDate || !toDate) return null;
    const birth = new Date(birthDate);
    const to = new Date(toDate);
    if (isNaN(birth.getTime()) || isNaN(to.getTime()) || birth > to) return null;

    let years = to.getFullYear() - birth.getFullYear();
    let months = to.getMonth() - birth.getMonth();
    let days = to.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor((to.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;

    return { years, months, days, totalDays, totalWeeks, totalMonths };
  })();

  const nextBirthday = (() => {
    if (!birthDate) return null;
    const birth = new Date(birthDate);
    const today = new Date();
    let next = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
    if (next <= today) next = new Date(today.getFullYear() + 1, birth.getMonth(), birth.getDate());
    const diff = Math.ceil((next.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return diff;
  })();

  const faqItems = [
    { q: "How is age calculated?", a: "Age is calculated by finding the difference between your birth date and today (or a chosen date). The result accounts for varying month lengths and leap years to give exact years, months, and days." },
    { q: "How do I calculate my exact age in days?", a: "To find your exact age in days, subtract your birth date from today's date. For example, if you were born on January 1, 2000, and today is June 26, 2026, you have lived 9,673 days. This calculator does that math for you instantly." },
    { q: "Does a leap year affect my age calculation?", a: "Leap years add one extra day (February 29) every 4 years. If you were born on February 29, most people celebrate their birthday on February 28 or March 1 in non-leap years. The total-days calculation always accounts for all leap years automatically." },
    { q: "What is the difference between chronological age and biological age?", a: "Chronological age is simply the number of years since your birth. Biological age refers to how old your body appears based on health markers like fitness level, diet, and genetics — it can be younger or older than your chronological age." },
    { q: "How many days old am I if I was born in 1990?", a: "Someone born on January 1, 1990 would be approximately 13,330 days old as of mid-2026. Use this calculator with your exact birth date to get a precise number." },
    { q: "Can I calculate the age difference between two people?", a: "Yes — enter one person's birth date and set the 'Calculate age on' date to the other person's birth date. The result will show the exact age of the first person on that date, which equals the age difference." }
  ];

  return (
    <>
      <div className="max-w-xl mx-auto px-6 py-10">
        <nav className="text-sm text-slate-400 mb-6">
          <Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
          <Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
          <span className="text-slate-600">Age Calculator</span>
        </nav>
<div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6">
          <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&h=400&fit=crop&fm=webp" alt="Age calculator — birthday and time" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/80 to-[#1E3A5F]/20" />
        </div>
        feat: add hero image to age-calculator        <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Age Calculator</h1>
        <p className="text-slate-500 mb-8">Calculate your exact age in years, months, days, weeks, and total days.</p>
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Date of Birth</label>
            <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} max={toDate} className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Calculate Age On</label>
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
          </div>
          {age ? (
            <>
              <div className="bg-[#1E3A5F] text-white rounded-xl p-5 text-center">
                <p className="text-slate-300 text-sm mb-2">Your Age</p>
                <p className="text-4xl font-bold">{age.years} <span className="text-xl font-normal">yrs</span> {age.months} <span className="text-xl font-normal">mos</span> {age.days} <span className="text-xl font-normal">days</span></p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[{ label: "Total Days", value: age.totalDays.toLocaleString() }, { label: "Total Weeks", value: age.totalWeeks.toLocaleString() }, { label: "Total Months", value: age.totalMonths.toLocaleString() }].map(({ label, value }) => (
                  <div key={label} className="bg-slate-50 rounded-xl p-4 text-center border border-slate-200">
                    <p className="text-2xl font-bold text-[#1E3A5F]">{value}</p>
                    <p className="text-xs text-slate-500 mt-1">{label}</p>
                  </div>
                ))}
              </div>
              {nextBirthday !== null && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 text-sm text-amber-800">
                  🎂 Next birthday in <strong>{nextBirthday} day{nextBirthday !== 1 ? "s" : ""}</strong>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-sm text-slate-400">Enter your date of birth above to calculate your age.</p>
          )}
        </div>
      </div>
      <div className="max-w-xl mx-auto px-6 pb-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqItems.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })) }) }} />
        <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 mt-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map(({ q, a }) => (
            <details key={q} className="group border border-slate-200 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer px-5 py-4 bg-white hover:bg-slate-50 font-medium text-[#1E3A5F]">{q}<span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">▼</span></summary>
              <div className="px-5 py-4 text-slate-600 text-sm bg-slate-50 border-t border-slate-100">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
