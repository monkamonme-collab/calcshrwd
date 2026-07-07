"use client";

import { useState } from "react";
import Link from "next/link";

type Category = "length" | "weight" | "temperature" | "volume" | "speed" | "area";

const categories: { id: Category; label: string; icon: string }[] = [
  { id: "length", label: "Length", icon: "📏" },
  { id: "weight", label: "Weight", icon: "⚖️" },
  { id: "temperature", label: "Temperature", icon: "🌡️" },
  { id: "volume", label: "Volume", icon: "🧪" },
  { id: "speed", label: "Speed", icon: "🚀" },
  { id: "area", label: "Area", icon: "▦" },
];

const units: Record<Category, { id: string; label: string; toBase: (v: number) => number; fromBase: (v: number) => number }[]> = {
  length: [
    { id: "m",   label: "Meters (m)",       toBase: v => v,        fromBase: v => v },
    { id: "km",  label: "Kilometers (km)",   toBase: v => v * 1000, fromBase: v => v / 1000 },
    { id: "cm",  label: "Centimeters (cm)",  toBase: v => v / 100,  fromBase: v => v * 100 },
    { id: "mm",  label: "Millimeters (mm)",  toBase: v => v / 1000, fromBase: v => v * 1000 },
    { id: "mi",  label: "Miles (mi)",        toBase: v => v * 1609.344, fromBase: v => v / 1609.344 },
    { id: "yd",  label: "Yards (yd)",        toBase: v => v * 0.9144,   fromBase: v => v / 0.9144 },
    { id: "ft",  label: "Feet (ft)",         toBase: v => v * 0.3048,   fromBase: v => v / 0.3048 },
    { id: "in",  label: "Inches (in)",       toBase: v => v * 0.0254,   fromBase: v => v / 0.0254 },
  ],
  weight: [
    { id: "kg",  label: "Kilograms (kg)",    toBase: v => v,        fromBase: v => v },
    { id: "g",   label: "Grams (g)",         toBase: v => v / 1000, fromBase: v => v * 1000 },
    { id: "mg",  label: "Milligrams (mg)",   toBase: v => v / 1e6,  fromBase: v => v * 1e6 },
    { id: "lb",  label: "Pounds (lb)",       toBase: v => v * 0.453592, fromBase: v => v / 0.453592 },
    { id: "oz",  label: "Ounces (oz)",       toBase: v => v * 0.0283495, fromBase: v => v / 0.0283495 },
    { id: "t",   label: "Metric Tons (t)",   toBase: v => v * 1000, fromBase: v => v / 1000 },
    { id: "st",  label: "Stone (st)",        toBase: v => v * 6.35029, fromBase: v => v / 6.35029 },
  ],
  temperature: [
    { id: "c",  label: "Celsius (°C)",    toBase: v => v,               fromBase: v => v },
    { id: "f",  label: "Fahrenheit (°F)", toBase: v => (v - 32) * 5/9,  fromBase: v => v * 9/5 + 32 },
    { id: "k",  label: "Kelvin (K)",      toBase: v => v - 273.15,      fromBase: v => v + 273.15 },
  ],
  volume: [
    { id: "l",    label: "Liters (L)",          toBase: v => v,         fromBase: v => v },
    { id: "ml",   label: "Milliliters (mL)",     toBase: v => v / 1000,  fromBase: v => v * 1000 },
    { id: "m3",   label: "Cubic Meters (m³)",    toBase: v => v * 1000,  fromBase: v => v / 1000 },
    { id: "gal",  label: "US Gallons (gal)",     toBase: v => v * 3.78541, fromBase: v => v / 3.78541 },
    { id: "qt",   label: "US Quarts (qt)",       toBase: v => v * 0.946353, fromBase: v => v / 0.946353 },
    { id: "pt",   label: "US Pints (pt)",        toBase: v => v * 0.473176, fromBase: v => v / 0.473176 },
    { id: "cup",  label: "US Cups",              toBase: v => v * 0.236588, fromBase: v => v / 0.236588 },
    { id: "floz", label: "Fl. Ounces (fl oz)",   toBase: v => v * 0.0295735, fromBase: v => v / 0.0295735 },
  ],
  speed: [
    { id: "mps",  label: "Meters/sec (m/s)",  toBase: v => v,           fromBase: v => v },
    { id: "kph",  label: "Km/hour (km/h)",    toBase: v => v / 3.6,     fromBase: v => v * 3.6 },
    { id: "mph",  label: "Miles/hour (mph)",  toBase: v => v * 0.44704, fromBase: v => v / 0.44704 },
    { id: "kn",   label: "Knots (kn)",        toBase: v => v * 0.514444, fromBase: v => v / 0.514444 },
    { id: "fps",  label: "Feet/sec (ft/s)",   toBase: v => v * 0.3048,  fromBase: v => v / 0.3048 },
  ],
  area: [
    { id: "m2",   label: "Sq. Meters (m²)",   toBase: v => v,           fromBase: v => v },
    { id: "km2",  label: "Sq. Kilometers (km²)", toBase: v => v * 1e6,  fromBase: v => v / 1e6 },
    { id: "cm2",  label: "Sq. Centimeters (cm²)", toBase: v => v / 1e4, fromBase: v => v * 1e4 },
    { id: "ha",   label: "Hectares (ha)",      toBase: v => v * 1e4,    fromBase: v => v / 1e4 },
    { id: "ac",   label: "Acres (ac)",         toBase: v => v * 4046.86, fromBase: v => v / 4046.86 },
    { id: "ft2",  label: "Sq. Feet (ft²)",     toBase: v => v * 0.092903, fromBase: v => v / 0.092903 },
    { id: "mi2",  label: "Sq. Miles (mi²)",    toBase: v => v * 2.59e6, fromBase: v => v / 2.59e6 },
  ],
};

const conversionRef = [
  { from: "1 mile", to: "1.609 km", category: "Length" },
  { from: "1 inch", to: "2.54 cm", category: "Length" },
  { from: "1 foot", to: "30.48 cm", category: "Length" },
  { from: "1 kg", to: "2.205 lb", category: "Weight" },
  { from: "1 lb", to: "453.6 g", category: "Weight" },
  { from: "1 oz", to: "28.35 g", category: "Weight" },
  { from: "0°C", to: "32°F", category: "Temperature" },
  { from: "100°C", to: "212°F", category: "Temperature" },
  { from: "1 US gallon", to: "3.785 L", category: "Volume" },
  { from: "1 liter", to: "33.81 fl oz", category: "Volume" },
  { from: "60 mph", to: "96.56 km/h", category: "Speed" },
  { from: "1 acre", to: "4,047 m²", category: "Area" },
];

function formatResult(value: number): string {
  if (!isFinite(value)) return "—";
  if (value === 0) return "0";
  const abs = Math.abs(value);
  if (abs >= 1e9) return value.toExponential(4);
  if (abs < 0.0001 && abs > 0) return value.toExponential(4);
  if (abs >= 1000) return value.toLocaleString(undefined, { maximumFractionDigits: 4 });
  return value.toPrecision(6).replace(/\.?0+$/, "");
}

export default function UnitConverter() {
  const [category, setCategory] = useState<Category>("length");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("ft");
  const [inputValue, setInputValue] = useState("1");

  const currentUnits = units[category];

  const handleCategoryChange = (cat: Category) => {
    setCategory(cat);
    setFromUnit(units[cat][0].id);
    setToUnit(units[cat][1].id);
    setInputValue("1");
  };

  const swap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const fromUnitDef = currentUnits.find(u => u.id === fromUnit)!;
  const toUnitDef = currentUnits.find(u => u.id === toUnit)!;
  const numInput = parseFloat(inputValue);
  const result = isNaN(numInput) ? NaN : toUnitDef.fromBase(fromUnitDef.toBase(numInput));

  return (
    <>
      <div className="max-w-2xl mx-auto px-6 py-10">
        {/* BreadcrumbList schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.calcshrwd.com/" },
                { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.calcshrwd.com/tools" },
                { "@type": "ListItem", "position": 3, "name": "Unit Converter", "item": "https://www.calcshrwd.com/tools/unit-converter" }
              ]
            })
          }}
        />

        <nav className="text-sm text-slate-400 mb-6">
          <Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
          <Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
          <span className="text-slate-600">Unit Converter</span>
        </nav>

        <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=400&fit=crop&fm=webp"
            alt="Unit converter — measurement tools"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/80 to-[#1E3A5F]/20" />
        </div>

        <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Unit Converter</h1>
        <p className="text-slate-500 mb-6">
          Convert between length, weight, temperature, volume, speed, and area units instantly.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat.id
                  ? "bg-[#1E3A5F] text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Converter Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          {/* From */}
          <div className="mb-4">
            <label className="block text-xs text-slate-500 mb-1 font-medium uppercase tracking-wide">From</label>
            <div className="flex gap-3">
              <input
                type="number"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-[#00B4A6] text-slate-700"
                placeholder="Enter value"
              />
              <select
                value={fromUnit}
                onChange={e => setFromUnit(e.target.value)}
                className="border border-slate-200 rounded-xl px-3 py-3 focus:outline-none focus:border-[#00B4A6] text-slate-700 bg-white"
              >
                {currentUnits.map(u => (
                  <option key={u.id} value={u.id}>{u.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center my-3">
            <button
              onClick={swap}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#00B4A6] hover:text-white transition-colors flex items-center justify-center text-slate-500 font-bold text-lg"
              title="Swap units"
            >
              ⇅
            </button>
          </div>

          {/* To */}
          <div>
            <label className="block text-xs text-slate-500 mb-1 font-medium uppercase tracking-wide">To</label>
            <div className="flex gap-3">
              <div className="flex-1 border border-slate-100 rounded-xl px-4 py-3 bg-slate-50 text-lg font-semibold text-[#1E3A5F]">
                {isNaN(result) ? "—" : formatResult(result)}
              </div>
              <select
                value={toUnit}
                onChange={e => setToUnit(e.target.value)}
                className="border border-slate-200 rounded-xl px-3 py-3 focus:outline-none focus:border-[#00B4A6] text-slate-700 bg-white"
              >
                {currentUnits.map(u => (
                  <option key={u.id} value={u.id}>{u.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Formula */}
          {!isNaN(numInput) && !isNaN(result) && (
            <p className="mt-4 text-center text-sm text-slate-500">
              {formatResult(numInput)} {fromUnitDef.label} = <strong className="text-[#1E3A5F]">{formatResult(result)} {toUnitDef.label}</strong>
            </p>
          )}
        </div>

        {/* Quick Reference Table */}
        <div className="mt-10 border-t border-slate-100 pt-8">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Common Unit Conversions</h2>
          <p className="text-slate-600 mb-5">
            Quick reference for the most frequently used unit conversions across categories.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1E3A5F] text-white">
                  <th className="px-4 py-2 text-left">From</th>
                  <th className="px-4 py-2 text-left">Equals</th>
                  <th className="px-4 py-2 text-left hidden sm:table-cell">Category</th>
                </tr>
              </thead>
              <tbody>
                {conversionRef.map((row, i) => (
                  <tr
                    key={i}
                    className={"border-b border-slate-100" + (i % 2 === 1 ? " bg-slate-50" : " bg-white")}
                  >
                    <td className="px-4 py-2 font-medium text-slate-700">{row.from}</td>
                    <td className="px-4 py-2 text-[#1E3A5F] font-semibold">{row.to}</td>
                    <td className="px-4 py-2 text-slate-500 hidden sm:table-cell">{row.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-8 border-t border-slate-100 pt-8">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">How Unit Conversion Works</h2>
          <p className="text-slate-600 mb-4">
            Every conversion is done by first converting the input to a <strong>base unit</strong>, then
            converting from that base unit to the target. For example, all length conversions go through
            meters, all weight conversions through kilograms, and all temperatures through Celsius.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-700 space-y-1">
            <p><strong>Length base:</strong> Meters (m)</p>
            <p><strong>Weight base:</strong> Kilograms (kg)</p>
            <p><strong>Temperature base:</strong> Celsius (°C)</p>
            <p><strong>Volume base:</strong> Liters (L)</p>
            <p><strong>Speed base:</strong> Meters per second (m/s)</p>
            <p><strong>Area base:</strong> Square meters (m²)</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-2xl mx-auto px-6 pb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do you convert Celsius to Fahrenheit?",
                  "acceptedAnswer": { "@type": "Answer", "text": "To convert Celsius to Fahrenheit, multiply by 9/5 and add 32. Formula: °F = (°C × 9/5) + 32. For example, 20°C = (20 × 9/5) + 32 = 68°F." }
                },
                {
                  "@type": "Question",
                  "name": "How many feet are in a meter?",
                  "acceptedAnswer": { "@type": "Answer", "text": "There are 3.28084 feet in one meter. Conversely, 1 foot equals 0.3048 meters. So to convert meters to feet, multiply by 3.28084." }
                },
                {
                  "@type": "Question",
                  "name": "How many kilograms are in a pound?",
                  "acceptedAnswer": { "@type": "Answer", "text": "1 pound equals 0.453592 kilograms. To convert pounds to kilograms, multiply by 0.4536. To convert kilograms to pounds, multiply by 2.2046." }
                },
                {
                  "@type": "Question",
                  "name": "How many liters are in a gallon?",
                  "acceptedAnswer": { "@type": "Answer", "text": "1 US gallon equals 3.78541 liters. 1 UK (imperial) gallon equals 4.54609 liters. This converter uses the US gallon." }
                },
                {
                  "@type": "Question",
                  "name": "How do you convert mph to km/h?",
                  "acceptedAnswer": { "@type": "Answer", "text": "To convert miles per hour (mph) to kilometers per hour (km/h), multiply by 1.60934. For example, 60 mph × 1.60934 = 96.56 km/h." }
                },
                {
                  "@type": "Question",
                  "name": "How many square feet are in an acre?",
                  "acceptedAnswer": { "@type": "Answer", "text": "1 acre equals 43,560 square feet, or 4,046.86 square meters. An acre is roughly the size of a football field (without the end zones)." }
                }
              ]
            })
          }}
        />
        <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 mt-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How do you convert Celsius to Fahrenheit?",
              a: "To convert Celsius to Fahrenheit, multiply by 9/5 and add 32. Formula: °F = (°C × 9/5) + 32. For example, 20°C = (20 × 9/5) + 32 = 68°F."
            },
            {
              q: "How many feet are in a meter?",
              a: "There are 3.28084 feet in one meter. Conversely, 1 foot equals 0.3048 meters. So to convert meters to feet, multiply by 3.28084."
            },
            {
              q: "How many kilograms are in a pound?",
              a: "1 pound equals 0.453592 kilograms. To convert pounds to kilograms, multiply by 0.4536. To convert kilograms to pounds, multiply by 2.2046."
            },
            {
              q: "How many liters are in a gallon?",
              a: "1 US gallon equals 3.78541 liters. 1 UK (imperial) gallon equals 4.54609 liters. This converter uses the US gallon."
            },
            {
              q: "How do you convert mph to km/h?",
              a: "To convert miles per hour (mph) to kilometers per hour (km/h), multiply by 1.60934. For example, 60 mph × 1.60934 = 96.56 km/h."
            },
            {
              q: "How many square feet are in an acre?",
              a: "1 acre equals 43,560 square feet, or 4,046.86 square meters. An acre is roughly the size of a football field (without the end zones)."
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

        <div className="mt-10 pt-8 border-t border-slate-200">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Related Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/tools/percentage-calculator"
              className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium text-[#1E3A5F]">Percentage Calculator</span>
            </Link>
            <Link
              href="/tools/bmi-calculator"
              className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium text-[#1E3A5F]">BMI Calculator</span>
            </Link>
            <Link
              href="/tools/age-calculator"
              className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium text-[#1E3A5F]">Age Calculator</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
