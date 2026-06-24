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
    <div className="max-w-xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
        <Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
        <span className="text-slate-600">Loan Calculator</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Loan Calculator</h1>
      <p className="text-slate-500 mb-8">
        Estimate your monthly payment and total interest for any loan — auto, mortgage, personal, or student.
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Loan Amount ($)</label>
          <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)}
            placeholder="e.g. 25000"
            className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Annual Interest Rate (%)</label>
          <input type="number" value={rate} onChange={(e) => setRate(e.target.value)}
            placeholder="e.g. 6.5" step="0.01"
            className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Loan Term</label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input type="number" value={termYears} onChange={(e) => setTermYears(e.target.value)}
                placeholder="Years (e.g. 5)"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
            </div>
            <div>
              <input type="number" value={termMonths} onChange={(e) => setTermMonths(e.target.value)}
                placeholder="Extra months"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
            </div>
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            {[12, 24, 36, 48, 60, 84, 120, 180, 360].map((m) => (
              <button key={m} onClick={() => { setTermYears(String(Math.floor(m / 12))); setTermMonths(String(m % 12)); }}
                className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-600 hover:bg-[#1E3A5F] hover:text-white transition-colors">
                {m >= 12 ? `${m / 12}yr` : `${m}mo`}
              </button>
            ))}
          </div>
        </div>

        {!results && (
          <p className="text-center text-sm text-slate-400">Enter loan amount, rate, and term above to see your payment.</p>
        )}

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
  );
}
