"use client";

import { useState } from "react";
import Link from "next/link";

export default function MortgageCalculator() {
  const [home, setHome] = useState("");
  const [down, setDown] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("30");
  const [showSchedule, setShowSchedule] = useState(false);

  const result = (() => {
    const price = parseFloat(home);
    const dp = parseFloat(down) || 0;
    const r = parseFloat(rate);
    const y = parseInt(years);
    if (!price || !r || !y || price <= 0 || r <= 0) return null;
    const principal = price - dp;
    if (principal <= 0) return null;
    const monthlyRate = r / 100 / 12;
    const n = y * 12;
    const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    const totalPayment = payment * n;
    const totalInterest = totalPayment - principal;
    return { payment, totalPayment, totalInterest, principal, monthlyRate, n };
  })();

  const schedule = (() => {
    if (!result) return [];
    let balance = result.principal;
    const rows = [];
    for (let i = 1; i <= result.n; i++) {
      const interest = balance * result.monthlyRate;
      const principalPaid = result.payment - interest;
      balance -= principalPaid;
      if (i % 12 === 0 || i === 1) {
        rows.push({ month: i, payment: result.payment, principal: principalPaid, interest, balance: Math.max(0, balance) });
      }
    }
    return rows;
  })();

  const fmt = (v: number) => v.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const fmtD = (v: number) => v.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const presets = ["10", "15", "20", "25", "30"];

  const faqItems = [
    { q: "How is a monthly mortgage payment calculated?", a: "Monthly payment = P × [r(1+r)^n] / [(1+r)^n − 1], where P is the loan principal, r is the monthly interest rate (annual rate ÷ 12), and n is the total number of payments (years × 12). This formula gives the fixed payment needed to fully pay off the loan." },
    { q: "What is included in a mortgage payment?", a: "This calculator shows principal and interest only (P&I). Your actual monthly payment may also include property taxes, homeowners insurance, and PMI (private mortgage insurance if your down payment is under 20%). Add roughly $200–$600/month for taxes and insurance depending on your location." },
    { q: "Is a 15-year or 30-year mortgage better?", a: "A 15-year mortgage saves significantly on total interest (often 50–60% less) and builds equity faster, but monthly payments are 30–40% higher. A 30-year mortgage has lower monthly payments and more cash flow flexibility. Most financial advisors suggest the 30-year if the payment difference is invested in a retirement account." },
    { q: "How much down payment do I need?", a: "The standard recommendation is 20% to avoid PMI (private mortgage insurance). However, many loans allow 3–5% down — FHA loans require as little as 3.5%. A higher down payment means a smaller loan, lower monthly payments, and less total interest paid." },
    { q: "What is amortization?", a: "Amortization is the process of paying off a loan through regular payments over time. In a mortgage, early payments are mostly interest, and later payments are mostly principal. The full amortization schedule shows exactly how much of each payment goes to interest vs. principal over the life of the loan." },
    { q: "How does the interest rate affect my mortgage payment?", a: "Even a 1% difference in rate has a large impact. On a $400,000 30-year mortgage, a rate of 6% gives a monthly payment of ~$2,398; at 7% it's ~$2,661 — a difference of $263/month or $94,680 over 30 years." }
  ];

  return (
    <>
      <div className="max-w-xl mx-auto px-6 py-10">
        <script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.calcshrwd.com/"}, {"@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.calcshrwd.com/tools"}, {"@type": "ListItem", "position": 3, "name": "Mortgage Calculator", "item": "https://www.calcshrwd.com/tools/mortgage-calculator"}]})
}}
/>
<nav className="text-sm text-slate-400 mb-6">
          <Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
          <Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
          <span className="text-slate-600">Mortgage Calculator</span>
        </nav>
<div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=400&fit=crop&fm=webp" alt="House and home mortgage" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/80 to-[#1E3A5F]/20" />
              </div>
                      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Mortgage Calculator</h1>
        <p className="text-slate-500 mb-8">Calculate your monthly mortgage payment and see the full amortization schedule.</p>
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Home Price ($)</label>
            <input type="number" value={home} onChange={(e) => setHome(e.target.value)} placeholder="e.g. 400000" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Down Payment ($)</label>
            <input type="number" value={down} onChange={(e) => setDown(e.target.value)} placeholder="e.g. 80000" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
            {home && down && parseFloat(home) > 0 && (
              <p className="text-xs text-slate-400 mt-1">
                {((parseFloat(down) / parseFloat(home)) * 100).toFixed(1)}% down
                {parseFloat(down) / parseFloat(home) < 0.2 && " — PMI may apply"}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Annual Interest Rate (%)</label>
            <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="e.g. 6.75" step="0.01" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Loan Term (years)</label>
            <div className="flex gap-2 flex-wrap">
              {presets.map((p) => (
                <button key={p} onClick={() => setYears(p)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${years === p ? "bg-[#1E3A5F] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                  {p} yr
                </button>
              ))}
            </div>
          </div>
          {result ? (
            <>
              <div className="bg-[#1E3A5F] text-white rounded-xl p-5 text-center">
                <p className="text-slate-300 text-sm mb-1">Monthly Payment</p>
                <p className="text-5xl font-bold text-[#00B4A6]">{fmtD(result.payment)}</p>
                <p className="text-slate-400 text-xs mt-1">Principal & Interest only</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Loan Amount", value: fmt(result.principal) },
                  { label: "Total Interest", value: fmt(result.totalInterest) },
                  { label: "Total Cost", value: fmt(result.totalPayment) },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-slate-50 rounded-xl p-4 text-center border border-slate-200">
                    <p className="text-lg font-bold text-[#1E3A5F]">{value}</p>
                    <p className="text-xs text-slate-500 mt-1">{label}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => setShowSchedule(!showSchedule)} className="w-full text-sm text-[#00B4A6] font-medium hover:underline text-left">
                {showSchedule ? "▲ Hide" : "▼ Show"} amortization schedule
              </button>
              {showSchedule && (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="px-3 py-2 text-left text-slate-600 font-semibold">Month</th>
                        <th className="px-3 py-2 text-right text-slate-600 font-semibold">Principal</th>
                        <th className="px-3 py-2 text-right text-slate-600 font-semibold">Interest</th>
                        <th className="px-3 py-2 text-right text-slate-600 font-semibold">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.map((row, i) => (
                        <tr key={row.month} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="px-3 py-2 text-slate-700">{row.month === 1 ? "Month 1" : `Year ${row.month / 12}`}</td>
                          <td className="px-3 py-2 text-right text-slate-700">{fmtD(row.principal)}</td>
                          <td className="px-3 py-2 text-right text-slate-700">{fmtD(row.interest)}</td>
                          <td className="px-3 py-2 text-right text-slate-700">{fmt(row.balance)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-sm text-slate-400">Enter home price and interest rate to calculate your payment.</p>
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
        <Link href="/tools/loan-calculator" className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all">
          <span className="text-sm font-medium text-[#1E3A5F]">Loan Calculator</span>
        </Link>
        <Link href="/tools/compound-interest-calculator" className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all">
          <span className="text-sm font-medium text-[#1E3A5F]">Compound Interest Calculator</span>
        </Link>
        <Link href="/tools/paycheck-calculator" className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all">
          <span className="text-sm font-medium text-[#1E3A5F]">Paycheck Calculator</span>
        </Link>
        </div>
      </div>
      </div>
    </>
  );
}
