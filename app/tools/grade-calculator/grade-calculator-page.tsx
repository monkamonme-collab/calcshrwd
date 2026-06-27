"use client";

import { useState } from "react";
import Link from "next/link";

type Item = { name: string; score: string; total: string; weight: string };

export default function GradeCalculator() {
const [items, setItems] = useState<Item[]>([
{ name: "Homework", score: "90", total: "100", weight: "20" },
{ name: "Midterm", score: "78", total: "100", weight: "30" },
{ name: "Final Exam", score: "", total: "100", weight: "50" },
]);

const update = (i: number, field: keyof Item, val: string) =>
setItems(items.map((r, idx) => idx === i ? { ...r, [field]: val } : r));
const addRow = () => setItems([...items, { name: "", score: "", total: "100", weight: "" }]);
const removeRow = (i: number) => setItems(items.filter((_, idx) => idx !== i));

const { finalGrade, totalWeight, isComplete } = (() => {
let weightedSum = 0, totalW = 0;
for (const item of items) {
const s = parseFloat(item.score);
const t = Math.max(0.01, parseFloat(item.total) || 100);
const w = parseFloat(item.weight) || 0;
if (!isNaN(s) && w > 0) {
weightedSum += (s / t) * w;
totalW += w;
}
}
return {
finalGrade: totalW > 0 ? (weightedSum / totalW) * 100 : 0,
totalWeight: items.reduce((sum, r) => sum + (parseFloat(r.weight) || 0), 0),
isComplete: totalW > 0,
};
})();

const letterGrade = (pct: number) => {
if (pct >= 93) return "A";
if (pct >= 90) return "A-";
if (pct >= 87) return "B+";
if (pct >= 83) return "B";
if (pct >= 80) return "B-";
if (pct >= 77) return "C+";
if (pct >= 73) return "C";
if (pct >= 70) return "C-";
if (pct >= 67) return "D+";
if (pct >= 60) return "D";
return "F";
};

const faqItems = [
{ q: "How do I calculate my weighted grade?", a: "Multiply each assignment's percentage score by its weight, sum all those values, then divide by the total weight. For example, if a midterm worth 30% scores 80% and homework worth 20% scores 95%, the weighted contribution is (80×30 + 95×20) ÷ 50 = 86%." },
{ q: "What is a good GPA in high school?", a: "A GPA of 3.5 or higher (roughly a B+/A- average) is generally considered strong for college admissions. Top universities typically look for GPAs of 3.7–4.0+. However, GPA requirements vary widely by institution." },
{ q: "What grade percentage is a B?", a: "On the standard US scale: A = 93–100%, A- = 90–92%, B+ = 87–89%, B = 83–86%, B- = 80–82%, C+ = 77–79%, C = 73–76%, C- = 70–72%, D = 60–69%, F = below 60%. Some schools use slightly different cutoffs." },
{ q: "How do I raise my grade before the end of the semester?", a: "Identify which remaining assignments carry the most weight and focus your effort there. Missing a high-weight final exam has far more impact than missing low-weight homework. Use this calculator to model 'what if' scenarios — enter hypothetical scores to see what final grade you need on remaining work." },
{ q: "Do all assignments count equally toward my final grade?", a: "Not always. Most courses use weighted grading where exams, projects, and homework count for different percentages of your total grade. Always check your syllabus for the weighting breakdown before calculating your grade." },
{ q: "What score do I need on the final exam to pass?", a: "Enter your current grades and weights, then for the final exam enter the minimum passing score (e.g., 60%) to see the projected total. Adjust the score field to find the exact threshold needed to achieve your target grade." },
];

return (
<>
<div className="max-w-2xl mx-auto px-6 py-10">
<nav className="text-sm text-slate-400 mb-6">
<Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
<Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
<span className="text-slate-600">Grade Calculator</span>
</nav>

<div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6">
<img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=400&fit=crop&fm=webp" alt="Books and studying" className="w-full h-full object-cover" />
<div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/80 to-[#1E3A5F]/20" />
</div>
<h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Grade Calculator</h1>
<p className="text-slate-500 mb-8">
Enter your assignments, tests, and their weights to calculate your weighted final grade.
</p>

<div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
<div className="grid grid-cols-12 gap-2 text-xs font-semibold text-slate-500 uppercase mb-2 px-1">
<div className="col-span-4">Assignment</div>
<div className="col-span-2">Score</div>
<div className="col-span-2">Out of</div>
<div className="col-span-3">Weight (%)</div>
<div className="col-span-1"></div>
</div>

<div className="space-y-2">
{items.map((r, i) => (
<div key={i} className="grid grid-cols-12 gap-2 items-center">
<input value={r.name} onChange={(e) => update(i, "name", e.target.value)}
placeholder={`Item ${i + 1}`}
className="col-span-4 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#00B4A6]" />
<input type="number" value={r.score} onChange={(e) => update(i, "score", e.target.value)}
placeholder="e.g. 85"
className="col-span-2 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#00B4A6]" />
<input type="number" value={r.total} onChange={(e) => update(i, "total", e.target.value)}
className="col-span-2 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#00B4A6]" />
<input type="number" value={r.weight} onChange={(e) => update(i, "weight", e.target.value)}
placeholder="e.g. 20"
className="col-span-3 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#00B4A6]" />
<button onClick={() => removeRow(i)} className="col-span-1 text-slate-300 hover:text-red-400 text-lg font-bold transition-colors">×</button>
</div>
))}
</div>

<div className="flex items-center justify-between mt-4">
<button onClick={addRow} className="text-sm text-[#00B4A6] hover:text-[#1E3A5F] font-medium transition-colors">
+ Add Item
</button>
<span className={`text-sm font-medium ${totalWeight === 100 ? "text-[#00B4A6]" : "text-amber-500"}`}>
Total weight: {totalWeight}%{totalWeight !== 100 ? " (should be 100%)" : ""}
</span>
</div>

{isComplete && (
<div className="mt-6 bg-[#1E3A5F] text-white rounded-xl p-5 grid grid-cols-2 gap-4 text-center">
<div>
<p className="text-slate-300 text-sm">Weighted Grade</p>
<p className="text-4xl font-bold text-[#00B4A6]">{finalGrade.toFixed(1)}%</p>
</div>
<div>
<p className="text-slate-300 text-sm">Letter Grade</p>
<p className="text-4xl font-bold">{letterGrade(finalGrade)}</p>
</div>
</div>
)}
</div>
</div>

{/* FAQ Section */}
<div className="max-w-2xl mx-auto px-6 pb-16">
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": faqItems.map(({ q, a }) => ({
"@type": "Question",
"name": q,
"acceptedAnswer": { "@type": "Answer", "text": a }
}))
})
}}
/>
<h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 mt-10">Frequently Asked Questions</h2>
<div className="space-y-4">
{faqItems.map(({ q, a }) => (
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
