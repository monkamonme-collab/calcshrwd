"use client";

import { useState } from "react";
import Link from "next/link";

const STATE_TAXES: Record<string, number> = {
  "No State Tax": 0,
  Alabama: 5.0, Alaska: 0, Arizona: 2.5, Arkansas: 4.4, California: 9.3,
  Colorado: 4.4, Connecticut: 5.0, Delaware: 6.6, Florida: 0, Georgia: 5.49,
  Hawaii: 8.25, Idaho: 5.8, Illinois: 4.95, Indiana: 3.05, Iowa: 3.8,
  Kansas: 5.7, Kentucky: 4.0, Louisiana: 4.25, Maine: 7.15, Maryland: 5.75,
  Massachusetts: 5.0, Michigan: 4.25, Minnesota: 9.85, Mississippi: 4.7,
  Missouri: 4.7, Montana: 6.75, Nebraska: 6.64, Nevada: 0, "New Hampshire": 0,
  "New Jersey": 10.75, "New Mexico": 5.9, "New York": 10.9, "North Carolina": 4.5,
  "North Dakota": 2.5, Ohio: 3.99, Oklahoma: 4.75, Oregon: 9.9,
  Pennsylvania: 3.07, "Rhode Island": 5.99, "South Carolina": 6.4,
  "South Dakota": 0, Tennessee: 0, Texas: 0, Utah: 4.65, Vermont: 8.75,
  Virginia: 5.75, Washington: 0, "West Virginia": 6.5, Wisconsin: 7.65,
  Wyoming: 0,
};

export default function PaycheckCalculator() {
  const [salary, setSalary] = useState("");
  const [payType, setPayType] = useState<"annual" | "hourly">("annual");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [payFreq, setPayFreq] = useState<"weekly" | "biweekly" | "semimonthly" | "monthly">("biweekly");
  const [state, setState] = useState("No State Tax");
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");
  const [retirement401k, setRetirement401k] = useState("");

  const annualGross = (() => {
    const val = Math.max(0, parseFloat(salary) || 0);
    if (payType === "annual") return val;
    return val * Math.max(0, parseFloat(hoursPerWeek) || 40) * 52;
  })();

  const periodsMap = { weekly: 52, biweekly: 26, semimonthly: 24, monthly: 12 };
  const periods = periodsMap[payFreq];
  const grossPerPeriod = annualGross / periods;

  const retirementAmt = (annualGross * (parseFloat(retirement401k) || 0)) / 100;
  const federalTaxableIncome = Math.max(0, annualGross - retirementAmt);

  const federalTax = (() => {
    const brackets = filingStatus === "single"
      ? [[11925, 0.10], [48475, 0.12], [103350, 0.22], [197300, 0.24], [250525, 0.32], [626350, 0.35], [Infinity, 0.37]]
      : [[23850, 0.10], [96950, 0.12], [206700, 0.22], [394600, 0.24], [501050, 0.32], [751600, 0.35], [Infinity, 0.37]];
    let tax = 0;
    let prev = 0;
    for (const [limit, rate] of brackets) {
      if (federalTaxableIncome <= prev) break;
      tax += (Math.min(federalTaxableIncome, limit as number) - prev) * (rate as number);
      prev = limit as number;
    }
    return tax;
  })();

  const stateTax = federalTaxableIncome * (STATE_TAXES[state] / 100);
  const socialSecurity = Math.min(annualGross, 176100) * 0.062;
  const medicare = annualGross * 0.0145;
  const totalDeductions = federalTax + stateTax + socialSecurity + medicare + retirementAmt;
  const annualNet = annualGross - totalDeductions;
  const netPerPeriod = annualNet / periods;

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
        <Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
        <span className="text-slate-600">Paycheck Calculator</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Paycheck Calculator</h1>
      <p className="text-slate-500 mb-8">
        Estimate your take-home pay after federal taxes, state taxes, and FICA deductions.
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Pay Type</label>
          <div className="flex gap-2">
            {(["annual", "hourly"] as const).map((t) => (
              <button key={t} onClick={() => setPayType(t)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${payType === t ? "bg-[#1E3A5F] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            {payType === "annual" ? "Annual Salary ($)" : "Hourly Rate ($)"}
          </label>
          <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)}
            placeholder={payType === "annual" ? "e.g. 65000" : "e.g. 22"}
            className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
        </div>

        {payType === "hourly" && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Hours Per Week</label>
            <input type="number" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Pay Frequency</label>
          <select value={payFreq} onChange={(e) => setPayFreq(e.target.value as typeof payFreq)}
            className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]">
            <option value="weekly">Weekly (52x/year)</option>
            <option value="biweekly">Bi-weekly (26x/year)</option>
            <option value="semimonthly">Semi-monthly (24x/year)</option>
            <option value="monthly">Monthly (12x/year)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Filing Status</label>
          <div className="flex gap-2">
            {(["single", "married"] as const).map((s) => (
              <button key={s} onClick={() => setFilingStatus(s)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${filingStatus === s ? "bg-[#1E3A5F] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">State</label>
          <select value={state} onChange={(e) => setState(e.target.value)}
            className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]">
            {Object.keys(STATE_TAXES).sort().map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            401(k) Contribution (% of gross)
          </label>
          <input type="number" value={retirement401k} onChange={(e) => setRetirement401k(e.target.value)}
            placeholder="e.g. 6" min={0} max={100}
            className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4A6]" />
        </div>
      </div>

      {annualGross > 0 && (
        <div className="mt-6 space-y-4">
          <div className="bg-[#1E3A5F] text-white rounded-xl p-6 grid grid-cols-2 gap-4">
            <div>
              <p className="text-slate-300 text-sm">Gross Per Paycheck</p>
              <p className="text-2xl font-bold">${grossPerPeriod.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div>
              <p className="text-slate-300 text-sm">Take-Home Per Paycheck</p>
              <p className="text-2xl font-bold text-[#00B4A6]">${netPerPeriod.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div>
              <p className="text-slate-300 text-sm">Annual Gross</p>
              <p className="text-lg font-semibold">${annualGross.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div>
              <p className="text-slate-300 text-sm">Annual Take-Home</p>
              <p className="text-lg font-semibold text-[#00B4A6]">${annualNet.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-100 p-5 text-sm space-y-2">
            <p className="font-semibold text-[#1E3A5F] mb-3">Annual Deductions Breakdown</p>
            {[
              ["Federal Income Tax", federalTax],
              ["State Income Tax", stateTax],
              ["Social Security (6.2%)", socialSecurity],
              ["Medicare (1.45%)", medicare],
              ...(retirementAmt > 0 ? [["401(k) Contribution", retirementAmt]] : []),
            ].map(([label, val]) => (
              <div key={label as string} className="flex justify-between text-slate-600">
                <span>{label as string}</span>
                <span className="font-medium">${(val as number).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10 border-t border-slate-100 pt-8">
        <h2 className="text-lg font-semibold text-[#1E3A5F] mb-3">Learn More</h2>
        <Link href="/blog/how-to-read-your-paycheck"
          className="block bg-white border border-slate-100 rounded-lg p-4 hover:border-[#00B4A6] transition-colors">
          <p className="font-medium text-slate-700">How to Read Your Paycheck & Pay Stub</p>
          <p className="text-sm text-slate-400 mt-1">Understand every line item on your paycheck - gross pay, deductions, and net pay explained.</p>
        </Link>
      </div>
    </div>
  );
}
