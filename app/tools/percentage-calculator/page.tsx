"use client";

import { useState } from "react";
import Link from "next/link";

type Mode = "whatPercent" | "percentOf" | "percentChange";

export default function PercentageCalculator() {
  const [mode, setMode] = useState<Mode>("percentOf");
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const result = (() => {
    const av = parseFloat(a);
    const bv = parseFloat(b);
    if (isNaN(av) || isNaN(bv)) return null;
    if (mode === "percentOf") {
      // What is A% of B?
      return { label: `${av}% of ${bv} =`, value: (av / 100) * bv };
    } else if (mode === "whatPercent") {
      // A is what % of B?
      if (bv === 0) return null;
      return { label: `${av} is what % of ${bv} =`, value: (av / bv) * 100 };
    } else {
      // % change from A to B
      if (av === 0) return null;
      const change = ((bv - av) / Math.abs(av)) * 100;
      return { label: `% change from ${av} to ${bv} =`, value: change };
    }
  })();

  const modes: { key: Mode; label: string; aLabel: string; bLabel: string }[] = [
    { key: "percentOf", label: "% of a Number", aLabel: "Percentage (%)", bLabel: "Number" },
    { key: "whatPercent", label: "What % is X of Y?", aLabel: "Value (X)", bLabel: "Total (Y)" },
    { key: "percentChange", label: "% Change", aLabel: "Original Value", bLabel: "New Value" },
  ];

  const current = modes.find((m) => m.key === mode)!;

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
        <Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
        <span className="text-slate-600">Percentage Calculator</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Percentage Calculator</h1>
      <p className="text-slate-500 mb-8">
        Calculate percentages, find what percent one number is of another, or compute percent change.
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-5">
        {/* Mode selector */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Calculator Type</label>
          <div className="flex flex-col gap-2">
            {modes.map((m) => (
              <button key={m.key} onClick={() => { setMode(m.key); setA(""); setB(""); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium text-left transition-colors ${mode === m.key ? "bg-[#1E3A5F] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{current.aLabel}</label>
          <input type="number" value={a} onChange={(e) => setA(e.target.value)}
            placeholder="e.g. 20"
            className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">{current.bLabel}</label>
          <input type="number" value={b} onChange={(e) => setB(e.target.value)}
            placeholder="e.g. 150"
            className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
        </div>

        {result && (
          <div className="bg-[#1E3A5F] text-white rounded-xl p-5 text-center">
            <p className="text-slate-300 text-sm mb-1">{result.label}</p>
            <p className="text-3xl font-bold text-[#00B4A6]">
              {result.value.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 4 })}
              {mode !== "percentOf" ? "%" : ""}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
