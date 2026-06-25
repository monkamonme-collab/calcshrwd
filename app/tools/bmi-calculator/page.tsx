"use client";

import { useState } from "react";
import Link from "next/link";

type Unit = "imperial" | "metric";

export default function BMICalculator() {
  const [unit, setUnit] = useState<Unit>("imperial");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [cm, setCm] = useState("");
  const [weight, setWeight] = useState("");

  const bmi = (() => {
    const w = parseFloat(weight);
    if (!w || w <= 0) return null;
    if (unit === "imperial") {
      const ft = parseFloat(feet) || 0;
      const inc = parseFloat(inches) || 0;
      const totalInches = ft * 12 + inc;
      if (totalInches <= 0) return null;
      return (703 * w) / (totalInches * totalInches);
    } else {
      const h = parseFloat(cm);
      if (!h || h <= 0) return null;
      return w / ((h / 100) * (h / 100));
    }
  })();

  const category = (b: number) => {
    if (b < 18.5) return { label: "Underweight", color: "text-blue-400" };
    if (b < 25) return { label: "Normal weight", color: "text-[#00B4A6]" };
    if (b < 30) return { label: "Overweight", color: "text-amber-500" };
    return { label: "Obese", color: "text-red-400" };
  };

  const cat = bmi ? category(bmi) : null;

  const ranges = [
    { range: "< 18.5", label: "Underweight", color: "bg-blue-100 text-blue-700" },
    { range: "18.5 - 24.9", label: "Normal", color: "bg-emerald-100 text-emerald-700" },
    { range: "25 - 29.9", label: "Overweight", color: "bg-amber-100 text-amber-700" },
    { range: ">= 30", label: "Obese", color: "bg-red-100 text-red-700" },
  ];

  return (
    <>
      <div className="max-w-xl mx-auto px-6 py-10">
        <nav className="text-sm text-slate-400 mb-6">
          <Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
          <Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
          <span className="text-slate-600">BMI Calculator</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">BMI Calculator</h1>
        <p className="text-slate-500 mb-8">Calculate your Body Mass Index (BMI) using imperial or metric measurements.</p>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Units</label>
            <div className="flex gap-2">
              {(["imperial", "metric"] as Unit[]).map((u) => (
                <button key={u} onClick={() => setUnit(u)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${unit === u ? "bg-[#1E3A5F] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                  {u === "imperial" ? "Imperial (ft, lbs)" : "Metric (cm, kg)"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Height</label>
            {unit === "imperial" ? (
              <div className="flex gap-3">
                <div className="flex-1">
                  <input type="number" value={feet} onChange={(e) => setFeet(e.target.value)}
                    placeholder="Feet"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
                </div>
                <div className="flex-1">
                  <input type="number" value={inches} onChange={(e) => setInches(e.target.value)}
                    placeholder="Inches" min="0" max="11"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
                </div>
              </div>
            ) : (
              <input type="number" value={cm} onChange={(e) => setCm(e.target.value)}
                placeholder="Height in cm"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Weight ({unit === "imperial" ? "lbs" : "kg"})
            </label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)}
              placeholder={unit === "imperial" ? "e.g. 160" : "e.g. 70"}
              className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
          </div>

          {bmi && cat ? (
            <div className="bg-[#1E3A5F] text-white rounded-xl p-5 text-center">
              <p className="text-slate-300 text-sm mb-1">Your BMI</p>
              <p className={`text-5xl font-bold ${cat.color}`}>{bmi.toFixed(1)}</p>
              <p className={`text-lg font-semibold mt-2 ${cat.color}`}>{cat.label}</p>
            </div>
          ) : (
            <p className="text-center text-sm text-slate-400">Enter your height and weight above to see your BMI.</p>
          )}

          <div className="grid grid-cols-2 gap-2 pt-2">
            {ranges.map((r) => (
              <div key={r.label} className={`rounded-lg px-3 py-2 text-sm ${r.color}`}>
                <span className="font-semibold">{r.range}</span> - {r.label}
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400">
            BMI is a screening tool, not a diagnostic. Consult a healthcare provider for a full assessment.
          </p>
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
                {
                  "@type": "Question",
                  "name": "What is BMI and how is it calculated?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BMI (Body Mass Index) is calculated by dividing your weight in kilograms by your height in meters squared. In imperial units: BMI = (weight in lbs × 703) ÷ (height in inches)². It provides a simple numeric measure of body size."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is a healthy BMI range for adults?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For adults, a BMI between 18.5 and 24.9 is considered normal weight. Under 18.5 is underweight, 25–29.9 is overweight, and 30 or above is classified as obese. These ranges apply to most adults but may vary by age and ethnicity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is BMI accurate for women over 50?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BMI is less accurate for women over 50 because it does not account for changes in muscle mass and fat distribution that come with age and menopause. A healthcare provider may recommend additional measurements like waist circumference or body fat percentage for a more complete picture."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What BMI is considered obese?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A BMI of 30 or higher is classified as obese. This is further divided into Class 1 (30–34.9), Class 2 (35–39.9), and Class 3 or severe obesity (40 and above)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can athletes have a high BMI and still be healthy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Athletes with high muscle mass often have a BMI in the overweight or obese range despite having very low body fat. This is a well-known limitation of BMI as a health measure."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I lower my BMI?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Lowering BMI typically involves a combination of reducing caloric intake and increasing physical activity. Aim for at least 150 minutes of moderate aerobic exercise per week and a balanced diet. Always consult a healthcare provider before starting a weight-loss plan."
                  }
                }
              ]
            })
          }}
        />
        <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 mt-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is BMI and how is it calculated?",
              a: "BMI (Body Mass Index) is calculated by dividing your weight in kilograms by your height in meters squared. In imperial units: BMI = (weight in lbs × 703) ÷ (height in inches)². It provides a simple numeric measure of body size."
            },
            {
              q: "What is a healthy BMI range for adults?",
              a: "For adults, a BMI between 18.5 and 24.9 is considered normal weight. Under 18.5 is underweight, 25–29.9 is overweight, and 30 or above is classified as obese."
            },
            {
              q: "Is BMI accurate for women over 50?",
              a: "BMI is less accurate for women over 50 because it does not account for changes in muscle mass and fat distribution that come with age and menopause. A healthcare provider may recommend waist circumference or body fat percentage for a more complete picture."
            },
            {
              q: "What BMI is considered obese?",
              a: "A BMI of 30 or higher is classified as obese — Class 1 (30–34.9), Class 2 (35–39.9), and Class 3 or severe obesity (40 and above)."
            },
            {
              q: "Can athletes have a high BMI and still be healthy?",
              a: "Yes. Athletes with high muscle mass often have a BMI in the overweight range despite having very low body fat. This is a well-known limitation of BMI."
            },
            {
              q: "How do I lower my BMI?",
              a: "Lowering BMI typically involves reducing caloric intake and increasing physical activity. Aim for 150+ minutes of moderate exercise per week and a balanced diet. Consult a healthcare provider before starting."
            }
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
