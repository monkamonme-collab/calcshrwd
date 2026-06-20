"use client";

import { useState } from "react";
import Link from "next/link";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPct, setTipPct] = useState(18);
  const [people, setPeople] = useState(1);

  const billNum = parseFloat(bill) || 0;
  const tipAmount = (billNum * tipPct) / 100;
  const total = billNum + tipAmount;
  const perPerson = people > 0 ? total / people : total;
  const tipPerPerson = people > 0 ? tipAmount / people : tipAmount;

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>
        {" / "}
        <Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>
        {" / "}
        <span className="text-slate-600">Tip Calculator</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Tip Calculator</h1>
      <p className="text-slate-500 mb-8">
        Calculate the right tip amount and split the bill among your group.
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-6">
        {/* Bill Amount */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Bill Amount ($)
          </label>
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            placeholder="e.g. 45.00"
            className="w-full border border-slate-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-[#00B4A6]"
          />
        </div>

        {/* Tip Percentage */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Tip Percentage: <span className="text-[#00B4A6] font-bold">{tipPct}%</span>
          </label>
          <div className="flex gap-2 mb-3 flex-wrap">
            {[10, 15, 18, 20, 25].map((pct) => (
              <button
                key={pct}
                onClick={() => setTipPct(pct)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  tipPct === pct
                    ? "bg-[#1E3A5F] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {pct}%
              </button>
            ))}
          </div>
          <input
            type="range"
            min={0}
            max={30}
            value={tipPct}
            onChange={(e) => setTipPct(Number(e.target.value))}
            className="w-full accent-[#00B4A6]"
          />
        </div>

        {/* Number of People */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Split Between (people)
          </label>
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(Math.max(1, parseInt(e.target.value) || 1))}
            min={1}
            className="w-full border border-slate-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-[#00B4A6]"
          />
        </div>
      </div>

      {/* Results */}
      {billNum > 0 && (
        <div className="mt-6 bg-[#1E3A5F] text-white rounded-xl p-6 grid grid-cols-2 gap-4">
          <div>
            <p className="text-slate-300 text-sm">Tip Amount</p>
            <p className="text-2xl font-bold text-[#00B4A6]">${tipAmount.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-slate-300 text-sm">Total Bill</p>
            <p className="text-2xl font-bold">${total.toFixed(2)}</p>
          </div>
          {people > 1 && (
            <>
              <div>
                <p className="text-slate-300 text-sm">Tip Per Person</p>
                <p className="text-2xl font-bold text-[#00B4A6]">${tipPerPerson.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-slate-300 text-sm">Each Person Pays</p>
                <p className="text-2xl font-bold">${perPerson.toFixed(2)}</p>
              </div>
            </>
          )}
        </div>
      )}

      {/* Related Article */}
      <div className="mt-10 border-t border-slate-100 pt-8">
        <h2 className="text-lg font-semibold text-[#1E3A5F] mb-3">Learn More</h2>
        <Link
          href="/blog/how-much-to-tip-in-the-us"
          className="block bg-white border border-slate-100 rounded-lg p-4 hover:border-[#00B4A6] transition-colors"
        >
          <p className="font-medium text-slate-700">How Much to Tip in the US (2026 Guide)</p>
          <p className="text-sm text-slate-400 mt-1">
            Tipping etiquette for restaurants, hotels, delivery, and more.
          </p>
        </Link>
      </div>
    </div>
  );
}
