"use client";

import { useState } from "react";
import Link from "next/link";

type Activity = "sedentary" | "light" | "moderate" | "active" | "very_active";

const activityLabels: Record<Activity, string> = {
sedentary: "Sedentary (little or no exercise)",
light: "Lightly active (1–3 days/week)",
moderate: "Moderately active (3–5 days/week)",
active: "Active (6–7 days/week)",
very_active: "Very active (hard exercise twice daily)",
};

const activityMultipliers: Record<Activity, number> = {
sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, very_active: 1.9,
};

export default function CalorieCalculator() {
const [unit, setUnit] = useState<"imperial" | "metric">("imperial");
const [sex, setSex] = useState<"male" | "female">("male");
const [age, setAge] = useState("");
const [heightFt, setHeightFt] = useState("");
const [heightIn, setHeightIn] = useState("");
const [heightCm, setHeightCm] = useState("");
const [weightLbs, setWeightLbs] = useState("");
const [weightKg, setWeightKg] = useState("");
const [activity, setActivity] = useState<Activity>("moderate");

const result = (() => {
const a = parseFloat(age);
if (!a || a <= 0 || a > 120) return null;
let weightKgVal: number;
let heightCmVal: number;
if (unit === "imperial") {
const lbs = parseFloat(weightLbs);
const ft = parseFloat(heightFt) || 0;
const inc = parseFloat(heightIn) || 0;
if (!lbs || lbs <= 0) return null;
weightKgVal = lbs * 0.453592;
heightCmVal = (ft * 12 + inc) * 2.54;
} else {
const kg = parseFloat(weightKg);
const cm = parseFloat(heightCm);
if (!kg || !cm || kg <= 0 || cm <= 0) return null;
weightKgVal = kg;
heightCmVal = cm;
}
if (heightCmVal <= 0) return null;
const bmr = sex === "male"
? 10 * weightKgVal + 6.25 * heightCmVal - 5 * a + 5
: 10 * weightKgVal + 6.25 * heightCmVal - 5 * a - 161;
const tdee = bmr * activityMultipliers[activity];
return { bmr: Math.round(bmr), tdee: Math.round(tdee), lose: Math.round(tdee - 500), gain: Math.round(tdee + 500), loseFast: Math.round(tdee - 1000) };
})();

const faqItems = [
{ q: "How many calories do I need per day?", a: "Daily calorie needs depend on your age, sex, height, weight, and activity level. Most adults need between 1,600 and 3,000 calories per day. This calculator uses the Mifflin-St Jeor equation — considered the most accurate for most people — to estimate your Total Daily Energy Expenditure (TDEE)." },
{ q: "What is BMR vs TDEE?", a: "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest — just to keep your organs functioning. TDEE (Total Daily Energy Expenditure) is your BMR multiplied by an activity factor, representing total calories burned including movement, exercise, and daily activity." },
{ q: "How many calories should I eat to lose weight?", a: "A 500 calorie/day deficit below your TDEE leads to approximately 1 lb of fat loss per week. A 1,000 calorie deficit leads to ~2 lbs/week, which is generally considered the safe maximum. Going below 1,200 calories/day (women) or 1,500 calories/day (men) is not recommended without medical supervision." },
{ q: "What is the Mifflin-St Jeor equation?", a: "The Mifflin-St Jeor equation calculates BMR: For men: BMR = 10W + 6.25H - 5A + 5. For women: BMR = 10W + 6.25H - 5A - 161. Where W = weight in kg, H = height in cm, A = age in years. Studies show it is more accurate than the older Harris-Benedict equation for most people." },
{ q: "How many calories do I burn just by existing?", a: "Your BMR - the calories burned at rest - is typically 1,400-1,800 for women and 1,600-2,200 for men. This accounts for 60-75% of your total daily calorie burn. Organs like the liver, brain, and kidneys are responsible for most of this energy use." },
{ q: "Does muscle burn more calories than fat?", a: "Yes. Muscle tissue burns approximately 6 calories per pound per day at rest, compared to about 2 calories per pound for fat. This is why people with more muscle mass have a higher BMR and can generally eat more without gaining weight." }
];

return (
<>
<div className="max-w-xl mx-auto px-6 py-10">
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.calcshrwd.com/"}, {"@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.calcshrwd.com/tools"}, {"@type": "ListItem", "position": 3, "name": "Calorie Calculator", "item": "https://www.calcshrwd.com/tools/calorie-calculator"}]})
}}
/>
<nav className="text-sm text-slate-400 mb-6">
<Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
<Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
<span className="text-slate-600">Calorie Calculator</span>
</nav>
<div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6">
<img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&h=400&fit=crop&fm=webp" alt="Calorie calculator — healthy food and nutrition" className="w-full h-full object-cover" />
<div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/80 to-[#1E3A5F]/20" />
</div>
<h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Calorie Calculator</h1>
<p className="text-slate-500 mb-8">Calculate your daily calorie needs (TDEE) based on the Mifflin-St Jeor equation.</p>
<div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Units</label>
<div className="flex gap-2">
{(["imperial", "metric"] as const).map((u) => (
<button key={u} onClick={() => setUnit(u)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${unit === u ? "bg-[#1E3A5F] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
{u === "imperial" ? "Imperial (ft, lbs)" : "Metric (cm, kg)"}
</button>
))}
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Sex</label>
<div className="flex gap-2">
{(["male", "female"] as const).map((s) => (
<button key={s} onClick={() => setSex(s)} className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${sex === s ? "bg-[#1E3A5F] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
{s.charAt(0).toUpperCase() + s.slice(1)}
</button>
))}
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Age</label>
<input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="e.g. 30" min="15" max="80" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Height</label>
{unit === "imperial" ? (
<div className="flex gap-3">
<input type="number" value={heightFt} onChange={(e) => setHeightFt(e.target.value)} placeholder="Feet" className="flex-1 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
<input type="number" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} placeholder="Inches" min="0" max="11" className="flex-1 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
</div>
) : (
<input type="number" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} placeholder="Height in cm" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
)}
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Weight ({unit === "imperial" ? "lbs" : "kg"})</label>
{unit === "imperial" ? (
<input type="number" value={weightLbs} onChange={(e) => setWeightLbs(e.target.value)} placeholder="e.g. 160" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
) : (
<input type="number" value={weightKg} onChange={(e) => setWeightKg(e.target.value)} placeholder="e.g. 70" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
)}
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Activity Level</label>
<select value={activity} onChange={(e) => setActivity(e.target.value as Activity)} className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6] bg-white">
{(Object.keys(activityLabels) as Activity[]).map((k) => <option key={k} value={k}>{activityLabels[k]}</option>)}
</select>
</div>
{result ? (
<>
<div className="bg-[#1E3A5F] text-white rounded-xl p-5 text-center">
<p className="text-slate-300 text-sm mb-1">Maintenance Calories (TDEE)</p>
<p className="text-5xl font-bold text-[#00B4A6]">{result.tdee.toLocaleString()}</p>
<p className="text-slate-400 text-xs mt-1">calories / day</p>
</div>
<div className="space-y-2">
{[
{ label: "BMR (at rest)", value: result.bmr, color: "bg-slate-50 border-slate-200", textColor: "text-slate-700" },
{ label: "Lose weight (500 cal/day ~ 1 lb/week)", value: result.lose, color: "bg-blue-50 border-blue-200", textColor: "text-blue-700" },
{ label: "Lose faster (1000 cal/day ~ 2 lbs/week)", value: result.loseFast, color: "bg-blue-100 border-blue-300", textColor: "text-blue-800" },
{ label: "Gain weight (+500 cal/day ~ +1 lb/week)", value: result.gain, color: "bg-amber-50 border-amber-200", textColor: "text-amber-700" },
].map(({ label, value, color, textColor }) => (
<div key={label} className={`flex justify-between items-center rounded-xl px-4 py-3 border ${color}`}>
<span className="text-sm text-slate-600">{label}</span>
<span className={`font-bold text-lg ${textColor}`}>{value.toLocaleString()} cal</span>
</div>
))}
</div>
<p className="text-xs text-slate-400">Based on the Mifflin-St Jeor equation. These are estimates. Consult a dietitian for personalized advice.</p>
</>
) : (
<p className="text-center text-sm text-slate-400">Fill in all fields above to calculate your daily calorie needs.</p>
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
<div className="mt-10 pt-8 border-t border-slate-200">
<h2 className="text-lg font-semibold text-slate-700 mb-4">Related Calculators</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<Link href="/tools/bmi-calculator" className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all">
  <span className="text-sm font-medium text-[#1E3A5F]">BMI Calculator</span>
</Link>
<Link href="/tools/age-calculator" className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all">
  <span className="text-sm font-medium text-[#1E3A5F]">Age Calculator</span>
</Link>
<Link href="/tools/tip-calculator" className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all">
  <span className="text-sm font-medium text-[#1E3A5F]">Tip Calculator</span>
</Link>
</div>
</div>

</div>
</>
);
}
