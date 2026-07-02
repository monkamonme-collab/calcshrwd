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
    <>
      <div className="max-w-2xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.calcshrwd.com/"}, {"@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.calcshrwd.com/tools"}, {"@type": "ListItem", "position": 3, "name": "Tip Calculator", "item": "https://www.calcshrwd.com/tools/tip-calculator"}]})
}}
/>
<nav className="text-sm text-slate-400 mb-6">
          <Link href="/" className="hover:text-[#00B4A6]">Home</Link>
          {" / "}
          <Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>
          {" / "}
          <span className="text-slate-600">Tip Calculator</span>
        </nav>

<div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6">
          <img
            src="https://images.unsplash.com/photo-1555243896-c709bfa0b564?w=1200&h=400&fit=crop&fm=webp"
            alt="Tip calculator — restaurant bill and tip calculation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/80 to-[#1E3A5F]/20" />
        </div>
                <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Tip Calculator</h1>
        <p className="text-slate-500 mb-8">
          Calculate the right tip amount and split the bill among your group.
        </p>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-6">
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

      {/* FAQ Section */}
      <div className="max-w-xl mx-auto px-6 pb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How much should I tip at a restaurant in the USA?", "acceptedAnswer": { "@type": "Answer", "text": "The standard tip at a sit-down restaurant in the USA is 15–20% of the pre-tax bill. For exceptional service, 20–25% is common. Counter service or takeout typically warrants 10–15% or no tip." } },
                { "@type": "Question", "name": "Should I tip on the pre-tax or post-tax amount?", "acceptedAnswer": { "@type": "Answer", "text": "Tipping on the pre-tax amount is technically correct, but many people tip on the total bill for simplicity. The difference is usually small." } },
                { "@type": "Question", "name": "How do I split a tip between multiple people?", "acceptedAnswer": { "@type": "Answer", "text": "Calculate the total tip first (bill × tip%), then divide by the number of people. Our tip calculator handles this automatically when you enter the number of guests." } },
                { "@type": "Question", "name": "What is a good tip for a food delivery driver?", "acceptedAnswer": { "@type": "Answer", "text": "A standard tip for food delivery is 15–20% of the order total, with a minimum of $3–5 for small orders. For large orders or difficult deliveries, tip more generously." } },
                { "@type": "Question", "name": "Do you tip on alcohol at a restaurant?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it is customary to tip on the full bill including alcohol. Bartenders typically expect 15–20% on drink orders as well." } },
                { "@type": "Question", "name": "What is the standard tip for a hotel housekeeper?", "acceptedAnswer": { "@type": "Answer", "text": "The standard tip for hotel housekeeping is $2–5 per night, left daily since different staff may clean your room each day." } }
              ]
            })
          }}
        />
        <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 mt-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How much should I tip at a restaurant in the USA?", a: "The standard tip at a sit-down restaurant in the USA is 15–20% of the pre-tax bill. For exceptional service, 20–25% is common. Counter service or takeout typically warrants 10–15% or no tip." },
            { q: "Should I tip on the pre-tax or post-tax amount?", a: "Tipping on the pre-tax amount is technically correct, but many people tip on the total bill for simplicity. The difference is usually small." },
            { q: "How do I split a tip between multiple people?", a: "Calculate the total tip first (bill × tip%), then divide by the number of people. Our tip calculator handles this automatically when you enter the number of guests." },
            { q: "What is a good tip for a food delivery driver?", a: "A standard tip for food delivery is 15–20% of the order total, with a minimum of $3–5 for small orders. For large orders or difficult deliveries, tip more generously." },
            { q: "Do you tip on alcohol at a restaurant?", a: "Yes, it is customary to tip on the full bill including alcohol. Bartenders typically expect 15–20% on drink orders as well." },
            { q: "What is the standard tip for a hotel housekeeper?", a: "The standard tip for hotel housekeeping is $2–5 per night, left daily since different staff may clean your room each day." }
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
      <div className="mt-10 pt-8 border-t border-slate-200">
        <h2 className="text-lg font-semibold text-slate-700 mb-4">Related Calculators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Link href="/tools/paycheck-calculator" className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all">
          <span className="text-sm font-medium text-[#1E3A5F]">Paycheck Calculator</span>
        </Link>
        <Link href="/tools/percentage-calculator" className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all">
          <span className="text-sm font-medium text-[#1E3A5F]">Percentage Calculator</span>
        </Link>
        <Link href="/tools/calorie-calculator" className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all">
          <span className="text-sm font-medium text-[#1E3A5F]">Calorie Calculator</span>
        </Link>
        </div>
      </div>
      </div>
    </>
  );
}
