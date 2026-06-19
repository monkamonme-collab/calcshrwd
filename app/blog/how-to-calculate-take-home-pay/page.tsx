import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Calculate Your Take-Home Pay | CalcShrwd",
  description:
    "Federal taxes, state taxes, FICA, and 401(k) -- understand every deduction on your pay stub and estimate your net paycheck.",
};

export default function HowToCalculateTakeHomePayPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>
        {" / "}
        <span>How to Calculate Take-Home Pay</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">
        How to Calculate Your Take-Home Pay
      </h1>
      <p className="text-slate-400 text-sm mb-8">Updated June 2026 &middot; 5 min read</p>

      <p className="text-slate-700 mb-6">
        Your take-home pay -- also called net pay -- is what actually lands in your bank
        account after every deduction is applied to your gross pay. Understanding each
        line on your pay stub helps you budget accurately and spot errors before they
        cost you money.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">
        Step 1 -- Start With Gross Pay
      </h2>
      <p className="text-slate-700 mb-6">
        Gross pay is the amount your employer agrees to pay you before any deductions.
        If you earn a $60,000 annual salary paid bi-weekly, your gross pay per paycheck
        is $60,000 / 26 = <strong>$2,307.69</strong>. Hourly workers multiply their
        hourly rate by the number of hours worked in the period.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">
        Step 2 -- Subtract Pre-Tax Deductions
      </h2>
      <p className="text-slate-700 mb-6">
        Contributions to a 401(k), traditional IRA, Health Savings Account (HSA), or
        employer-sponsored health insurance premiums are often taken out <em>before</em>{" "}
        taxes are calculated. This lowers your taxable income, which is a key benefit.
        For example, contributing 6% of a $60,000 salary to a 401(k) reduces your
        taxable income by $3,600 per year.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">
        Step 3 -- Federal Income Tax
      </h2>
      <p className="text-slate-700 mb-4">
        The U.S. uses a <strong>progressive tax system</strong>. You do not pay the
        highest rate on all of your income -- only on income above each bracket
        threshold. For 2026 single filers, the brackets start at 10% and rise in
        steps to 37% for income above $626,350. Most middle-income earners face an
        effective federal rate of roughly 12-22%.
      </p>
      <p className="text-slate-700 mb-6">
        Your employer uses your W-4 to determine how much federal tax to withhold each
        pay period. Filing as Single with no adjustments generally results in the most
        withholding.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">
        Step 4 -- FICA Taxes (Social Security &amp; Medicare)
      </h2>
      <p className="text-slate-700 mb-4">
        FICA stands for the Federal Insurance Contributions Act. Every employee pays:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-4">
        <li><strong>Social Security:</strong> 6.2% on wages up to $176,100 (2026 limit)</li>
        <li><strong>Medicare:</strong> 1.45% on all wages, plus an extra 0.9% on wages above $200,000</li>
      </ul>
      <p className="text-slate-700 mb-6">
        Your employer matches these contributions -- so the total FICA cost to your
        employer is 15.3%.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">
        Step 5 -- State Income Tax
      </h2>
      <p className="text-slate-700 mb-6">
        State taxes vary enormously. Florida, Texas, Nevada, and six other states charge
        no income tax at all. California tops out at 13.3% for high earners. Most states
        fall somewhere in the 3-6% range for middle-income workers. Your employer
        withholds state tax based on the state form you filed when you were hired.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">
        Step 6 -- Post-Tax Deductions
      </h2>
      <p className="text-slate-700 mb-6">
        After taxes, you may also have post-tax deductions such as Roth 401(k)
        contributions, life insurance premiums, disability insurance, or wage
        garnishments. These come out after taxes are calculated, so they do not
        reduce your taxable income.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Quick Example</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="px-4 py-2 text-left">Item</th>
              <th className="px-4 py-2 text-right">Amount (bi-weekly)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Gross Pay",               "+$2,307.69"],
              ["401(k) (6%)",             "-$138.46"],
              ["Health Insurance",        "-$150.00"],
              ["Federal Tax (~18%)",      "-$365.14"],
              ["Social Security (6.2%)",  "-$143.08"],
              ["Medicare (1.45%)",        "-$33.46"],
              ["State Tax (5%)",          "-$101.00"],
              ["Take-Home Pay",           "= $1,376.55"],
            ].map(([item, amt], i) => (
              <tr key={i} className={i === 7 ? "bg-slate-100 font-bold" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-4 py-2 border border-slate-200">{item}</td>
                <td className="px-4 py-2 border border-slate-200 text-right">{amt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-slate-500 text-xs mb-6">
        * Example only. Actual taxes depend on filing status, state, and other factors.
      </p>

      <div className="mt-10 bg-[#1E3A5F] text-white rounded-xl p-6 text-center">
        <h3 className="text-lg font-bold mb-2">Get Your Exact Number</h3>
        <p className="text-slate-300 text-sm mb-4">
          Enter your salary, state, filing status, and 401(k) to see a precise estimate
          in seconds.
        </p>
        <Link
          href="/tools/paycheck-calculator"
          className="inline-block bg-[#00B4A6] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#009e91] transition-colors"
        >
          Use the Paycheck Calculator &#8594;
        </Link>
      </div>
    </main>
  );
}
