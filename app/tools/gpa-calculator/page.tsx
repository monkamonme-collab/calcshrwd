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
      const c = parseFloat(r.credits) || 0;
      const p = GRADE_POINTS[r.grade] ?? 0;
      points += c * p;
      credits += c;
    }
    return { gpa: credits > 0 ? points / credits : 0, totalCredits: credits };
  })();

  const gpaColor = gpa >= 3.7 ? "text-[#00B4A6]" : gpa >= 3.0 ? "text-blue-400" : gpa >= 2.0 ? "text-yellow-400" : "text-red-400";

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
        <Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
        <span className="text-slate-600">GPA Calculator</span>
      </nav>

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
  );
}
