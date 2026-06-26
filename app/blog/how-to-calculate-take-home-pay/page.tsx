import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Calculate Take-Home Pay | Paycheck Guide",
  description: "Understand what is deducted from your paycheck. Learn about federal taxes, FICA, state taxes, and voluntary deductions to estimate your net pay.",
  alternates: {
    canonical: "https://www.calcshrwd.com/blog/how-to-calculate-take-home-pay",
  },
};

export default function HowToCalculateTakeHomePayArticle() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>
        {" / "}
        <span className="text-slate-600">How to Calculate Take-Home Pay</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">
        How to Calculate Take-Home Pay
      </h1>
      <p className="text-slate-400 text-sm mb-8">Updated June 2026 - 5 min read</p>

      <p className="text-slate-600 mb-6">
        Your gross pay is what your employer agrees to pay you. Your take-home pay - or net pay -
        is what actually lands in your bank account after all deductions. The gap between the two
        can be significant, and understanding each deduction helps you budget more accurately.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Step 1: Start with Gross Pay</h2>
      <p className="text-slate-600 mb-6">
        Gross pay is your salary before any deductions. For hourly workers it is your hourly rate
        multiplied by hours worked, plus any overtime. For salaried workers it is your annual
        salary divided by the number of pay periods (26 for biweekly, 24 for semi-monthly, 12 for monthly).
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Step 2: Federal Income Tax</h2>
      <p className="text-slate-600 mb-6">
        Federal income tax is withheld based on your W-4 elections and the IRS withholding tables.
        The US uses a progressive tax system - income is taxed at different rates in different brackets.
        For 2025, the brackets range from 10% to 37%. Your employer withholds based on your filing
        status and allowances.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Step 3: FICA Taxes (Social Security and Medicare)</h2>
      <p className="text-slate-600 mb-4">
        FICA stands for Federal Insurance Contributions Act. These are mandatory:
      </p>
      <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
        <li><strong>Social Security:</strong> 6.2% of gross wages, up to the annual wage base ($168,600 for 2024)</li>
        <li><strong>Medicare:</strong> 1.45% of all wages, plus an additional 0.9% for wages over $200,000</li>
        <li>Your employer matches the 6.2% and 1.45%, so the total FICA contribution is 15.3% of your gross pay</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Step 4: State and Local Taxes</h2>
      <p className="text-slate-600 mb-6">
        Most US states have their own income tax, ranging from 0% (no state tax in Texas, Florida, Nevada,
        and others) to over 13% in California. Some cities also levy local income taxes. Check your
        state tax agency for current rates and brackets.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Step 5: Pre-Tax Deductions</h2>
      <p className="text-slate-600 mb-6">
        Contributions to 401(k), HSA, FSA, and certain health insurance premiums are deducted
        before taxes are calculated. This reduces your taxable income and therefore your tax bill.
        A $200 per paycheck 401(k) contribution might only reduce your take-home by $140 after
        accounting for the tax savings.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Step 6: Post-Tax Deductions</h2>
      <p className="text-slate-600 mb-6">
        Roth 401(k) contributions, union dues, life insurance premiums, and wage garnishments
        are deducted after taxes. These do not reduce your taxable income.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Quick Example (Biweekly)</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="px-4 py-2 text-left">Item</th>
              <th className="px-4 py-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="px-4 py-2">Gross pay</td><td className="px-4 py-2 text-right">$3,846</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">Federal income tax (22%)</td><td className="px-4 py-2 text-right">-$846</td></tr>
            <tr className="border-b"><td className="px-4 py-2">Social Security (6.2%)</td><td className="px-4 py-2 text-right">-$238</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">Medicare (1.45%)</td><td className="px-4 py-2 text-right">-$56</td></tr>
            <tr className="border-b"><td className="px-4 py-2">State income tax (5%)</td><td className="px-4 py-2 text-right">-$192</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">401(k) pre-tax</td><td className="px-4 py-2 text-right">-$200</td></tr>
            <tr className="border-b"><td className="px-4 py-2">Health insurance premium</td><td className="px-4 py-2 text-right">-$150</td></tr>
            <tr className="font-bold border-t-2"><td className="px-4 py-2">Take-home pay</td><td className="px-4 py-2 text-right">$2,164</td></tr>
          </tbody>
        </table>
      </div>

      <div className="bg-[#E8F8F7] border border-[#00B4A6] rounded-lg p-5">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">Estimate Your Take-Home Pay</h3>
        <p className="text-slate-600 mb-3">
          Enter your salary, filing status, state, and deductions to see your net pay instantly.
        </p>
        <Link
          href="/tools/paycheck-calculator"
          className="inline-block bg-[#00B4A6] text-white font-semibold px-5 py-2 rounded hover:bg-[#009d90] transition-colors"
        >
          Use the Paycheck Calculator
        </Link>
      </div>
    </article>
  );
}
