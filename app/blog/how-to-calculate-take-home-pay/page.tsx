import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Calculate Your Take-Home Pay",
  description:
    "Learn how federal taxes, state taxes, Social Security, Medicare, and 401(k) contributions affect your paycheck. Use our free paycheck calculator to get an instant estimate.",
};

export default function TakeHomePayArticle() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>{" / "}
        <span className="text-slate-600">How to Calculate Your Take-Home Pay</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">
        How to Calculate Your Take-Home Pay
      </h1>
      <p className="text-slate-400 text-sm mb-8">Updated June 2026 Â· 5 min read</p>

      <p className="text-slate-600 mb-6">
        Your gross salary and your take-home pay are rarely the same number. Between federal income tax,
        state income tax, Social Security, Medicare, and any pre-tax deductions, it is common to see 20â35%
        of your paycheck withheld before a single dollar hits your bank account. Understanding each piece
        helps you budget more accurately and spot errors on your pay stub.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Step 1 â Start With Gross Pay</h2>
      <p className="text-slate-600 mb-6">
        Gross pay is the amount your employer agrees to pay you before any deductions. If you earn a
        $60,000 annual salary paid bi-weekly, your gross pay per paycheck is $60,000 Ã· 26 = <strong>$2,307.69</strong>.
        Hourly workers multiply their hourly rate by the number of hours worked in the period.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Step 2 â Subtract Pre-Tax Deductions</h2>
      <p className="text-slate-600 mb-4">
        Contributions to a 401(k), traditional IRA, Health Savings Account (HSA), or employer-sponsored health
        insurance premiums are often taken out <em>before</em> taxes are calculated. This lowers your taxable
        income, which is a key benefit. For example, contributing 6% of a $60,000 salary to a 401(k)
        reduces your taxable income by $3,600 per year.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Step 3 â Federal Income Tax</h2>
      <p className="text-slate-600 mb-4">
        The U.S. uses a <strong>progressive tax system</strong>. You do not pay the highest rate on all of your
        income â only on income above each bracket threshold. For 2026 single filers, the brackets start at
        10% and rise in steps to 37% for income above $626,350. Most middle-income earners face an effective
        federal rate of roughly 12â22%.
      </p>
      <p className="text-slate-600 mb-6">
        Your employer uses your W-4 to determine how much federal tax to withhold each pay period. Filing
        as Single with no adjustments generally results in the most withholding.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Step 4 â FICA Taxes (Social Security &amp; Medicare)</h2>
      <p className="text-slate-600 mb-6">
        FICA stands for the Federal Insurance Contributions Act. Every employee pays:
      </p>
      <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
        <li><strong>Social Security:</strong> 6.2% on wages up to $176,100 (2026 limit)</li>
        <li><strong>Medicare:</strong> 1.45% on all wages, plus an extra 0.9% on wages above $200,000</li>
      </ul>
      <p className="text-slate-600 mb-6">
        Your employer matches these contributions â so the total FICA cost to your employer is 15.3%.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Step 5 â State Income Tax</h2>
      <p className="text-slate-600 mb-6">
        State taxes vary enormously. Florida, Texas, Nevada, and six other states charge <strong>no income tax</strong>.
        California tops the list at 13.3% for high earners. Most states fall in the 3â6% range. Check your
        state&apos;s Department of Revenue website for current brackets.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Quick Example</h2>
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 mb-8 text-sm text-slate-700">
        <p className="font-semibold mb-2">Scenario: Single filer in Texas, $60,000/year, bi-weekly pay, 6% 401(k)</p>
        <div className="space-y-1">
          <div className="flex justify-between"><span>Gross per paycheck</span><span>$2,307.69</span></div>
          <div className="flex justify-between"><span>â 401(k) (6%)</span><span>â $138.46</span></div>
          <div className="flex justify-between"><span>= Taxable wages</span><span>$2,169.23</span></div>
          <div className="flex justify-between"><span>â Federal income tax (est. 12%)</span><span>â $260.31</span></div>
          <div className="flex justify-between"><span>â Social Security (6.2%)</span><span>â $143.09</span></div>
          <div className="flex justify-between"><span>â Medicare (1.45%)</span><span>â $33.45</span></div>
          <div className="flex justify-between"><span>â State income tax (TX = 0%)</span><span>$0.00</span></div>
          <div className="flex justify-between font-bold border-t border-slate-200 pt-2 mt-2">
            <span>Estimated take-home</span><span className="text-[#00B4A6]">â $1,732</span>
          </div>
        </div>
      </div>

      <div className="bg-[#1E3A5F] text-white rounded-xl p-6 text-center">
        <p className="text-lg font-semibold mb-2">Get Your Exact Number</p>
        <p className="text-slate-300 text-sm mb-4">
          Enter your salary, state, filing status, and 401(k) to see a precise estimate in seconds.
        </p>
        <Link href="/tools/paycheck-calculator"
          className="inline-block bg-[#00B4A6] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#009d91] transition-colors">
          Use the Paycheck Calculator â
        </Link>
      </div>
    </article>
  );
}
