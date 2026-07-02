"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export default function CompoundInterestCalculator() {
const [principal, setPrincipal] = useState("10000");
const [rate, setRate] = useState("7");
const [years, setYears] = useState("10");
const [compound, setCompound] = useState("12");
const [contribution, setContribution] = useState("0");

const result = useMemo(() => {
const p = parseFloat(principal) || 0;
const r = (parseFloat(rate) || 0) / 100;
const n = parseFloat(compound) || 12;
const t = parseFloat(years) || 0;
const pmt = parseFloat(contribution) || 0;

if (p <= 0 && pmt <= 0) return null;
if (r < 0 || t <= 0) return null;

const futureValuePrincipal = p * Math.pow(1 + r / n, n * t);
const futureValueContributions = pmt * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));
const total = futureValuePrincipal + (r > 0 ? futureValueContributions : pmt * n * t);
const totalContributed = p + pmt * n * t;
const interestEarned = total - totalContributed;

return { total, totalContributed, interestEarned };
}, [principal, rate, years, compound, contribution]);

const fmt = (n: number) =>
n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const compoundOptions = [
{ label: "Annually (1x/year)", value: "1" },
{ label: "Semi-annually (2x/year)", value: "2" },
{ label: "Quarterly (4x/year)", value: "4" },
{ label: "Monthly (12x/year)", value: "12" },
{ label: "Daily (365x/year)", value: "365" },
];

return (
<div className="max-w-2xl mx-auto px-6 py-10">
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [
{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.calcshrwd.com/"},
{"@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.calcshrwd.com/tools"},
{"@type": "ListItem", "position": 3, "name": "Compound Interest Calculator", "item": "https://www.calcshrwd.com/tools/compound-interest-calculator"}
]
})
}}
/>
<nav className="text-sm text-slate-400 mb-6">
<Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
<Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
<span className="text-slate-600">Compound Interest Calculator</span>
</nav>

<div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6">
<img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=400&fit=crop&fm=webp" alt="Compound interest calculator — investment growth" className="w-full h-full object-cover" />
<div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/80 to-[#1E3A5F]/20" />
</div>
<h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Compound Interest Calculator</h1>
<p className="text-slate-500 mb-8">See how your money grows over time with compound interest and regular contributions.</p>

<div className="space-y-5 bg-white border border-slate-100 rounded-xl p-6 shadow-sm mb-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Initial Principal ($)</label>
<input
type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)}
className="w-full border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00B4A6]"
placeholder="10000" min="0"
/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Annual Interest Rate (%)</label>
<input
type="number" value={rate} onChange={(e) => setRate(e.target.value)}
className="w-full border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00B4A6]"
placeholder="7" min="0" step="0.1"
/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Time Period (years)</label>
<input
type="number" value={years} onChange={(e) => setYears(e.target.value)}
className="w-full border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00B4A6]"
placeholder="10" min="1" max="50"
/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Compound Frequency</label>
<select
value={compound} onChange={(e) => setCompound(e.target.value)}
className="w-full border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00B4A6]"
>
{compoundOptions.map((o) => (
<option key={o.value} value={o.value}>{o.label}</option>
))}
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Monthly Contribution ($) <span className="text-slate-400 font-normal">optional</span></label>
<input
type="number" value={contribution} onChange={(e) => setContribution(e.target.value)}
className="w-full border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00B4A6]"
placeholder="0" min="0"
/>
</div>
</div>

{result && (
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
<div className="bg-[#1E3A5F] text-white rounded-xl p-5 text-center">
<p className="text-xs text-slate-300 mb-1">Future Value</p>
<p className="text-2xl font-bold">{fmt(result.total)}</p>
</div>
<div className="bg-white border border-slate-100 rounded-xl p-5 text-center shadow-sm">
<p className="text-xs text-slate-500 mb-1">Total Contributed</p>
<p className="text-2xl font-bold text-[#1E3A5F]">{fmt(result.totalContributed)}</p>
</div>
<div className="bg-[#E8F8F7] border border-[#00B4A6] rounded-xl p-5 text-center">
<p className="text-xs text-slate-600 mb-1">Interest Earned</p>
<p className="text-2xl font-bold text-[#00B4A6]">{fmt(result.interestEarned)}</p>
</div>
</div>
)}

<div className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-sm text-slate-600">
<p className="font-medium text-slate-700 mb-1">How it works</p>
<p>Formula: A = P(1 + r/n)^(nt) where P = principal, r = annual rate, n = compounds per year, t = years. Monthly contributions use the future value of an annuity formula.</p>
</div>
<div className="mt-10 pt-8 border-t border-slate-200">
<h2 className="text-lg font-semibold text-slate-700 mb-4">Related Calculators</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<Link href="/tools/loan-calculator" className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all">
  <span className="text-sm font-medium text-[#1E3A5F]">Loan Calculator</span>
</Link>
<Link href="/tools/mortgage-calculator" className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all">
  <span className="text-sm font-medium text-[#1E3A5F]">Mortgage Calculator</span>
</Link>
<Link href="/tools/paycheck-calculator" className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all">
  <span className="text-sm font-medium text-[#1E3A5F]">Paycheck Calculator</span>
</Link>
</div>
</div>

</div>
);
}
