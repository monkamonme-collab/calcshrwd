"use client";

import { useState } from "react";
import Link from "next/link";

const tipTable = [
  { service: "Sit-down restaurant", range: "18–20%", notes: "20% is standard for good service" },
  { service: "Fast casual / counter service", range: "0–10%", notes: "Optional; tip for exceptional service" },
  { service: "Buffet restaurant", range: "5–10%", notes: "Server refills drinks and clears plates" },
  { service: "Bar (drinks)", range: "$1–2 per drink or 15–20%", notes: "Higher for complex cocktails" },
  { service: "Coffee shop", range: "Optional $0.50–$1", notes: "Tip jar; not required" },
  { service: "Food delivery", range: "15–20% (min $3–5)", notes: "More for bad weather or large orders" },
  { service: "Rideshare (Uber/Lyft)", range: "10–20%", notes: "Tip in-app after the ride" },
  { service: "Taxi", range: "15–20%", notes: "Round up for short trips" },
  { service: "Hotel housekeeping", range: "$2–5 per night", notes: "Leave daily; staff may change each day" },
  { service: "Hotel bellhop / valet", range: "$2–5 per bag", notes: "Tip when receiving the car" },
  { service: "Hair salon", range: "15–20%", notes: "Tip the stylist directly" },
  { service: "Barber", range: "15–20%", notes: "Same as salon" },
  { service: "Nail salon", range: "15–20%", notes: "Tip each technician separately if different" },
  { service: "Massage therapist", range: "15–20%", notes: "Even at medical spas" },
  { service: "Movers", range: "$20–50 per mover", notes: "More for long or difficult moves" },
];

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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.calcshrwd.com/" },
                { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.calcshrwd.com/tools" },
                { "@type": "ListItem", "position": 3, "name": "Tip Calculator", "item": "https://www.calcshrwd.com/tools/tip-calculator" }
              ]
            })
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
          Calculate the right tip amount and split the bill among your group instantly.
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

        {/* How to Calculate a Tip */}
        <div className="mt-10 border-t border-slate-100 pt-8">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">How to Calculate a Tip</h2>
          <p className="text-slate-600 mb-4">
            The formula for a tip is straightforward: multiply your bill by the tip percentage, then
            divide by 100. To find how much each person owes, divide the total (bill + tip) by the
            number of people.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4 font-mono text-sm text-slate-700">
            <p>Tip amount = Bill × (Tip% ÷ 100)</p>
            <p className="mt-1">Total = Bill + Tip amount</p>
            <p className="mt-1">Per person = Total ÷ Number of people</p>
          </div>
          <p className="text-slate-600 mb-2 font-medium">Worked example — dinner for 3, bill $87, 20% tip:</p>
          <ul className="text-slate-600 text-sm space-y-1 pl-4 list-disc">
            <li>Tip = $87 × 0.20 = <strong>$17.40</strong></li>
            <li>Total = $87 + $17.40 = <strong>$104.40</strong></li>
            <li>Per person = $104.40 ÷ 3 = <strong>$34.80</strong></li>
          </ul>
          <p className="text-slate-500 text-sm mt-3">
            <strong>Quick mental math trick:</strong> Find 10% by moving the decimal one place left
            ($87 → $8.70), then double it for 20% ($17.40). Add half for 15% instead ($8.70 + $4.35
            = $13.05).
          </p>
        </div>

        {/* US Tipping Quick Reference */}
        <div className="mt-8 border-t border-slate-100 pt-8">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">US Tipping Quick Reference</h2>
          <p className="text-slate-600 mb-5">
            Tipping norms vary by situation. Use this table to quickly find the expected tip for
            the most common service scenarios in the United States.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1E3A5F] text-white">
                  <th className="px-4 py-2 text-left">Service</th>
                  <th className="px-4 py-2 text-left">Typical Range</th>
                  <th className="px-4 py-2 text-left hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {tipTable.map((row, i) => (
                  <tr key={i} className={"border-b border-slate-100" + (i % 2 === 1 ? " bg-slate-50" : " bg-white")}>
                    <td className="px-4 py-2 font-medium text-slate-700">{row.service}</td>
                    <td className="px-4 py-2 text-[#1E3A5F] font-semibold">{row.range}</td>
                    <td className="px-4 py-2 text-slate-500 hidden sm:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-8">
          <h2 className="text-lg font-semibold text-[#1E3A5F] mb-3">Learn More</h2>
          <Link
            href="/blog/tipping-guide-usa"
            className="block bg-white border border-slate-100 rounded-lg p-4 hover:border-[#00B4A6] transition-colors"
          >
            <p className="font-medium text-slate-700">Tipping Guide USA: How Much to Tip in Every Situation</p>
            <p className="text-sm text-slate-400 mt-1">
              Tipping etiquette for restaurants, hotels, rideshare, salons, and more — with mental math tricks.
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
