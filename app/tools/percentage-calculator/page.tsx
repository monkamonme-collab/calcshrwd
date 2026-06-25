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
      return { label: `${av}% of ${bv} =`, value: (av / 100) * bv };
    } else if (mode === "whatPercent") {
      if (bv === 0) return null;
      return { label: `${av} is what % of ${bv} =`, value: (av / bv) * 100 };
    } else {
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
    <>
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

          {!result && (a !== "" || b !== "") && (
            <p className="text-center text-sm text-amber-500">Invalid input — please check for zero divisor or missing values.</p>
          )}

          {!result && a === "" && b === "" && (
            <p className="text-center text-sm text-slate-400">Enter values above to calculate.</p>
          )}

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

      {/* FAQ Section */}
      <div className="max-w-xl mx-auto px-6 pb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How do I calculate the percentage of a number?", "acceptedAnswer": { "@type": "Answer", "text": "To find X% of a number, multiply the number by X and divide by 100. For example, 20% of 150 = 150 × 20 ÷ 100 = 30." } },
                { "@type": "Question", "name": "How do I find what percentage one number is of another?", "acceptedAnswer": { "@type": "Answer", "text": "Divide the part by the whole, then multiply by 100. For example, 30 is what percent of 150? → (30 ÷ 150) × 100 = 20%." } },
                { "@type": "Question", "name": "How do I calculate percentage increase or decrease?", "acceptedAnswer": { "@type": "Answer", "text": "Percentage change = ((New Value − Old Value) ÷ Old Value) × 100. A positive result is an increase; a negative result is a decrease." } },
                { "@type": "Question", "name": "What is 20% of 100?", "acceptedAnswer": { "@type": "Answer", "text": "20% of 100 is 20. You can find this by multiplying 100 × 0.20 = 20." } },
                { "@type": "Question", "name": "How do I calculate a tip percentage?", "acceptedAnswer": { "@type": "Answer", "text": "Multiply the bill amount by the tip percentage divided by 100. For an 18% tip on a $50 bill: $50 × 0.18 = $9." } },
                { "@type": "Question", "name": "What is the percentage difference between two numbers?", "acceptedAnswer": { "@type": "Answer", "text": "Percentage difference = |Value1 − Value2| ÷ ((Value1 + Value2) ÷ 2) × 100. This is used when neither value is a reference point." } }
              ]
            })
          }}
        />
        <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 mt-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How do I calculate the percentage of a number?", a: "To find X% of a number, multiply the number by X and divide by 100. For example, 20% of 150 = 150 × 20 ÷ 100 = 30." },
            { q: "How do I find what percentage one number is of another?", a: "Divide the part by the whole, then multiply by 100. For example, 30 is what percent of 150? → (30 ÷ 150) × 100 = 20%." },
            { q: "How do I calculate percentage increase or decrease?", a: "Percentage change = ((New Value − Old Value) ÷ Old Value) × 100. A positive result is an increase; a negative result is a decrease." },
            { q: "What is 20% of 100?", a: "20% of 100 is 20. You can find this by multiplying 100 × 0.20 = 20." },
            { q: "How do I calculate a tip percentage?", a: "Multiply the bill amount by the tip percentage divided by 100. For an 18% tip on a $50 bill: $50 × 0.18 = $9." },
            { q: "What is the percentage difference between two numbers?", a: "Percentage difference = |Value1 − Value2| ÷ ((Value1 + Value2) ÷ 2) × 100. This is used when neither value is a reference point." }
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
