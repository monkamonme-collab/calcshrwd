"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoanCalculator() {
const [principal, setPrincipal] = useState("");
const [rate, setRate] = useState("");
const [termYears, setTermYears] = useState("");
const [termMonths, setTermMonths] = useState("");

const results = (() => {
const P = parseFloat(principal);
const annualRate = parseFloat(rate);
const years = parseFloat(termYears) || 0;
const months = parseFloat(termMonths) || 0;
const totalMonths = years * 12 + months;
if (P <= 0 || annualRate < 0 || totalMonths <= 0) return null;
const r = annualRate / 100 / 12;
const n = totalMonths;
let monthlyPayment: number;
if (r === 0) {
monthlyPayment = P / n;
} else {
monthlyPayment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}
const totalPaid = monthlyPayment * n;
const totalInterest = totalPaid - P;
return { monthlyPayment, totalPaid, totalInterest, totalMonths };
})();

const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

return (
<>

<div className="max-w-xl mx-auto px-6 py-10">
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.calcshrwd.com/"}, {"@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.calcshrwd.com/tools"}, {"@type": "ListItem", "position": 3, "name": "Loan Calculator", "item": "https://www.calcshrwd.com/tools/loan-calculator"}]})
}}
/>
<nav className="text-sm text-slate-400 mb-6">
<Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
<Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
<span className="text-slate-600">Loan Calculator</span>
</nav>

<div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6">
<img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=400&fit=crop&fm=webp" alt="Loan and finance concept" className="w-full h-full object-cover" />
<div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/80 to-[#1E3A5F]/20" />
</div>
<h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Loan Calculator</h1>
<p className="text-slate-500 mb-8">Estimate your monthly payment and total interest for any loan.</p>

<div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Loan Amount ($)</label>
<input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder="e.g. 25000" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Annual Interest Rate (%)</label>
<input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="e.g. 6.5" step="0.01" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Loan Term</label>
<div className="grid grid-cols-2 gap-3">
<input type="number" value={termYears} onChange={(e) => setTermYears(e.target.value)} placeholder="Years (e.g. 5)" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
<input type="number" value={termMonths} onChange={(e) => setTermMonths(e.target.value)} placeholder="Extra months" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
</div>
<div className="flex gap-2 mt-2 flex-wrap">
{[12, 24, 36, 48, 60, 84, 120, 180, 360].map((m) => (
<button key={m} onClick={() => { setTermYears(String(Math.floor(m / 12))); setTermMonths(String(m % 12)); }} className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-600 hover:bg-[#1E3A5F] hover:text-white transition-colors">
{m >= 12 ? `${m / 12}yr` : `${m}mo`}
</button>
))}
</div>
</div>
{!results && <p className="text-center text-sm text-slate-400">Enter loan amount, rate, and term above to see your payment.</p>}
{results && (
<div className="space-y-3 mt-2">
<div className="bg-[#1E3A5F] text-white rounded-xl p-5 text-center">
<p className="text-slate-300 text-sm">Monthly Payment</p>
<p className="text-4xl font-bold text-[#00B4A6]">${fmt(results.monthlyPayment)}</p>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100">
<p className="text-slate-500 text-xs mb-1">Total Amount Paid</p>
<p className="text-xl font-bold text-[#1E3A5F]">${fmt(results.totalPaid)}</p>
</div>
<div className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100">
<p className="text-slate-500 text-xs mb-1">Total Interest</p>
<p className="text-xl font-bold text-amber-600">${fmt(results.totalInterest)}</p>
</div>
</div>
</div>
)}
</div>
</div>

{/* FAQ Section */}
<div className="max-w-xl mx-auto px-6 pb-16">
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type":"Question","name":"How is a monthly loan payment calculated?","acceptedAnswer":{"@type":"Answer","text":"Monthly payment = P x [r(1+r)^n] / [(1+r)^n - 1], where P is the principal, r is monthly interest rate, and n is number of payments."}},{"@type":"Question","name":"What is the difference between APR and interest rate?","acceptedAnswer":{"@type":"Answer","text":"The interest rate is the cost of borrowing the principal. APR includes the interest rate plus other fees, giving a more complete picture of the loan's total cost."}},{"@type":"Question","name":"How do I pay off a loan faster?","acceptedAnswer":{"@type":"Answer","text":"Make extra payments toward principal, pay biweekly instead of monthly, or round up your payment. Even small extra amounts save significant interest."}},{"@type":"Question","name":"What credit score do I need for a personal loan?","acceptedAnswer":{"@type":"Answer","text":"Most lenders require 580-640 minimum. A score above 700 qualifies for best rates."}},{"@type":"Question","name":"How much does a $10,000 loan cost per month?","acceptedAnswer":{"@type":"Answer","text":"At 7% APR over 3 years: ~$309/month. At 15% APR over 5 years: ~$238/month with much more interest paid."}},{"@type":"Question","name":"What is an amortization schedule?","acceptedAnswer":{"@type":"Answer","text":"A breakdown of each payment into principal and interest over the loan's life. Early payments are mostly interest; later payments are mostly principal."}}] }) }} />
<h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 mt-10">Frequently Asked Questions</h2>
<div className="space-y-4">
{[
{ q: "How is a monthly loan payment calculated?", a: "Monthly payment = P x [r(1+r)^n] / [(1+r)^n - 1], where P is the principal, r is the monthly interest rate (annual rate / 12), and n is the number of payments." },
{ q: "What is the difference between APR and interest rate?", a: "The interest rate is the cost of borrowing the principal. APR includes the interest rate plus other fees and costs, giving a more complete picture of the loan's total cost." },
{ q: "How do I pay off a loan faster?", a: "Make extra payments directly toward the principal, pay biweekly instead of monthly, or round up your monthly payment. Even small extra amounts can save significant interest." },
{ q: "What credit score do I need for a personal loan?", a: "Most lenders require a minimum credit score of 580-640. A score above 700 typically qualifies for the best interest rates." },
{ q: "How much does a $10,000 loan cost per month?", a: "At 7% APR over 3 years: about $309/month. At 15% APR over 5 years: about $238/month but with much more total interest paid." },
{ q: "What is an amortization schedule?", a: "A breakdown of each payment into principal and interest over the loan's life. Early payments are mostly interest; later payments are mostly principal." }
].map(({ q, a }) => (
<details key={q} className="group border border-slate-200 rounded-xl overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer px-5 py-4 bg-white hover:bg-slate-50 font-medium text-[#1E3A5F]">{q}<span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">down</span></summary>
<div className="px-5 py-4 text-slate-600 text-sm bg-slate-50 border-t border-slate-100">{a}</div>
</details>
))}
</div>
</div>

</>
);
}
