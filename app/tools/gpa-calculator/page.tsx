"use client";

import { useState } from "react";
import Link from "next/link";

type Grade = { course: string; credits: string; grade: string };

const GRADE_POINTS: Record<string, number> = {
  "A+": 4.0, "A": 4.0, "A-": 3.7,
  "B+": 3.3, "B": 3.0, "B-": 2.7,
  "C+": 2.3, "C": 2.0, "C-": 1.7,
  "D+": 1.3, "D": 1.0, "D-": 0.7,
  "F": 0.0,
};

export default function GPACalculator() {
  const [rows, setRows] = useState<Grade[]>([
    { course: "", credits: "3", grade: "A" },
    { course: "", credits: "3", grade: "B+" },
    { course: "", credits: "3", grade: "A-" },
  ]);

  const addRow = () => setRows([...rows, { course: "", credits: "3", grade: "A" }]);
  const removeRow = (i: number) => setRows(rows.filter((_, idx) => idx !== i));
  const update = (i: number, field: keyof Grade, val: string) => {
    setRows(rows.map((r, idx) => idx === i ? { ...r, [field]: val } : r));
  };

  const { gpa, totalCredits } = (() => {
    let points = 0, credits = 0;
    for (const r of rows) {
      const c = Math.max(0, parseFloat(r.credits) || 0);
      const p = GRADE_POINTS[r.grade] ?? 0;
      points += c * p;
      credits += c;
    }
    return { gpa: credits > 0 ? points / credits : 0, totalCredits: credits };
  })();

  const gpaColor = gpa >= 3.7 ? "text-[#00B4A6]" : gpa >= 3.0 ? "text-blue-400" : gpa >= 2.0 ? "text-yellow-400" : "text-red-400";

  return (
    <>
  
    <div className="max-w-2xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
        <Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
        <span className="text-slate-600">GPA Calculator</span>
      </nav>

<div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=400&fit=crop&fm=webp" alt="Graduation cap and diploma" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/80 to-[#1E3A5F]/20" />
            </div>
                  <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">GPA Calculator</h1>
      <p className="text-slate-500 mb-8">Enter your courses, credit hours, and letter grades to calculate your GPA.</p>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-slate-500 uppercase mb-2 px-1">
          <div className="col-span-5">Course (optional)</div>
          <div className="col-span-3">Credits</div>
          <div className="col-span-3">Grade</div>
          <div className="col-span-1"></div>
        </div>

        <div className="space-y-2">
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-12 gap-2 items-center">
              <input value={r.course} onChange={(e) => update(i, "course", e.target.value)}
                placeholder={`Course ${i + 1}`}
                className="col-span-5 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#00B4A6]" />
              <input type="number" value={r.credits} onChange={(e) => update(i, "credits", e.target.value)}
                min="0" max="6" step="0.5"
                className="col-span-3 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#00B4A6]" />
              <select value={r.grade} onChange={(e) => update(i, "grade", e.target.value)}
                className="col-span-3 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#00B4A6]">
                {Object.keys(GRADE_POINTS).map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
              <button onClick={() => removeRow(i)}
                className="col-span-1 text-slate-300 hover:text-red-400 text-lg font-bold transition-colors">×</button>
            </div>
          ))}
        </div>

        <button onClick={addRow}
          className="mt-4 text-sm text-[#00B4A6] hover:text-[#1E3A5F] font-medium transition-colors">
          + Add Course
        </button>

        {totalCredits > 0 && (
          <div className="mt-6 bg-[#1E3A5F] text-white rounded-xl p-5 grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-slate-300 text-sm">GPA</p>
              <p className={`text-4xl font-bold ${gpaColor}`}>{gpa.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-slate-300 text-sm">Total Credits</p>
              <p className="text-4xl font-bold">{totalCredits}</p>
            </div>
          </div>
        )}
      </div>
    </div>

      {/* FAQ Section */}
      <div className="max-w-xl mx-auto px-6 pb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
            {
                        "@type": "Question",
                        "name": "How is GPA calculated?",
                        "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "GPA is calculated by multiplying each course grade (on a 4.0 scale) by its credit hours, summing all those values, then dividing by the total credit hours. For example: an A (4.0) in a 3-credit course contributes 12 grade points."
                        }
            },
            {
                        "@type": "Question",
                        "name": "What is a good GPA in college?",
                        "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A GPA of 3.5 or above is generally considered very good and qualifies for Dean's List at most schools. A 3.0 (B average) is typically the minimum for graduate school applications."
                        }
            },
            {
                        "@type": "Question",
                        "name": "How do I calculate GPA with different credit hours?",
                        "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Multiply each grade point value by the number of credit hours for that course. Sum all grade points, then divide by total credit hours. Our GPA calculator handles weighted credit hours automatically."
                        }
            },
            {
                        "@type": "Question",
                        "name": "What is the difference between weighted and unweighted GPA?",
                        "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "An unweighted GPA uses a standard 4.0 scale for all courses. A weighted GPA gives extra points for harder courses like AP or honors classes, allowing scores above 4.0."
                        }
            },
            {
                        "@type": "Question",
                        "name": "How do I raise my GPA?",
                        "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Focus on courses with high credit hours since they impact your GPA more. Retaking courses where you did poorly (if your school allows grade replacement) can also significantly improve your GPA."
                        }
            },
            {
                        "@type": "Question",
                        "name": "What GPA do you need to get into medical school?",
                        "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Most medical schools look for a GPA of 3.5 or higher. The average GPA of accepted medical school students in the US is around 3.7."
                        }
            }
]
            })
          }}
        />
        <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 mt-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How is GPA calculated?", a: "GPA is calculated by multiplying each course grade (on a 4.0 scale) by its credit hours, summing all those values, then dividing by the total credit hours. For example: an A (4.0) in a 3-credit course contributes 12 grade points." },
            { q: "What is a good GPA in college?", a: "A GPA of 3.5 or above is generally considered very good and qualifies for Dean's List at most schools. A 3.0 (B average) is typically the minimum for graduate school applications." },
            { q: "How do I calculate GPA with different credit hours?", a: "Multiply each grade point value by the number of credit hours for that course. Sum all grade points, then divide by total credit hours. Our GPA calculator handles weighted credit hours automatically." },
            { q: "What is the difference between weighted and unweighted GPA?", a: "An unweighted GPA uses a standard 4.0 scale for all courses. A weighted GPA gives extra points for harder courses like AP or honors classes, allowing scores above 4.0." },
            { q: "How do I raise my GPA?", a: "Focus on courses with high credit hours since they impact your GPA more. Retaking courses where you did poorly (if your school allows grade replacement) can also significantly improve your GPA." },
            { q: "What GPA do you need to get into medical school?", a: "Most medical schools look for a GPA of 3.5 or higher. The average GPA of accepted medical school students in the US is around 3.7." }
          ].map(({ q, a }) => (
            <details key={q} className="group border border-slate-200 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer px-5 py-4 bg-white hover:bg-slate-50 font-medium text-[#1E3A5F]">
                {q}
                <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 py-4 text-slate-600 text-sm bg-slate-50 border-t border-slate-100">{a}</div>
            </details>
          ))}
        </div>
      </div>

    </>
  );
}
