import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Understanding Loan Interest: How It Really Works | CalcShrwd",
  description:
    "Learn the difference between simple and compound interest, how amortization works, and how to calculate how much interest you will actually pay over the life of a loan.",
};

export default function UnderstandingLoanInterestArticle() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>{" / "}
        <span className="text-slate-600">Understanding Loan Interest</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">
        Understanding Loan Interest: How It Really Works
      </h1>
      <p className="text-slate-400 text-sm mb-8">Updated June 2026 Â· 5 min read</p>

      <p className="text-slate-600 mb-6">
        When you borrow money, you pay back more than you borrowed. The extra amount is interest â the
        lender&apos;s compensation for letting you use their money. Understanding exactly how interest
        accumulates can save you thousands of dollars over the life of a loan.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Simple vs. Compound Interest</h2>
      <p className="text-slate-600 mb-4">
        <strong>Simple interest</strong> is calculated only on the original principal. If you borrow
        $10,000 at 5% simple interest for 3 years, you pay $10,000 Ã 5% Ã 3 = $1,500 in interest total.
        Most personal installment loans, car loans, and mortgages use simple interest on the remaining
        balance.
      </p>
      <p className="text-slate-600 mb-6">
        <strong>Compound interest</strong> accrues on both the principal and the accumulated interest.
        This is how credit card balances grow so fast â unpaid interest gets added to your balance, and
        next month you pay interest on interest. The more frequent the compounding period (daily vs.
        monthly vs. annually), the faster the balance grows.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">How Amortization Works</h2>
      <p className="text-slate-600 mb-4">
        Most installment loans â mortgages, auto loans, personal loans â use an <strong>amortizing</strong> repayment
        schedule. Every payment is the same dollar amount, but early payments are mostly interest; later payments
        are mostly principal.
      </p>
      <p className="text-slate-600 mb-4">
        The formula for a fixed monthly payment is:
      </p>
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 mb-6 font-mono text-sm text-slate-700">
        <p>M = P Ã [r(1+r)â¿] Ã· [(1+r)â¿ â 1]</p>
        <p className="font-sans text-slate-500 mt-2 text-xs">
          Where P = principal, r = monthly rate (annual rate Ã· 12), n = total payments
        </p>
      </div>
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 mb-8 text-sm text-slate-700">
        <p className="font-semibold mb-2">Example: $20,000 auto loan at 6% for 5 years</p>
        <div className="space-y-1">
          <div className="flex justify-between"><span>Monthly rate (r)</span><span>0.06 Ã· 12 = 0.005</span></div>
          <div className="flex justify-between"><span>Total payments (n)</span><span>60</span></div>
          <div className="flex justify-between"><span>Monthly payment</span><span>$386.66</span></div>
          <div className="flex justify-between"><span>Total paid</span><span>$23,199.60</span></div>
          <div className="flex justify-between font-bold border-t border-slate-200 pt-2 mt-2">
            <span>Total interest paid</span><span className="text-red-500">$3,199.60</span>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Why Early Payments Are Mostly Interest</h2>
      <p className="text-slate-600 mb-6">
        In month 1 of that $20,000 loan, you owe interest on the full $20,000: $20,000 Ã 0.5% = $100.
        Your $386.66 payment covers that $100 in interest first, leaving only $286.66 to reduce your
        balance. By month 30, your balance is lower, so interest is around $55 â meaning $331 goes to
        principal. This is why making even one extra payment per year can cut years off a mortgage.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">APR vs. Interest Rate</h2>
      <p className="text-slate-600 mb-6">
        The <strong>interest rate</strong> is the base cost of borrowing. The <strong>APR (Annual
        Percentage Rate)</strong> includes the interest rate plus any fees â origination fees, points,
        mortgage insurance â expressed as a single annual percentage. Always compare APRs when shopping
        for loans, not just interest rates. A loan advertised at 5.5% with $3,000 in fees might have a
        higher APR than one advertised at 5.75% with no fees.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Strategies to Pay Less Interest</h2>
      <ul className="list-disc list-inside text-slate-600 mb-8 space-y-2">
        <li><strong>Make extra principal payments.</strong> Any amount above the minimum goes directly to principal, reducing future interest charges.</li>
        <li><strong>Refinance when rates drop.</strong> Even a 1% rate reduction on a large mortgage saves tens of thousands over the loan term.</li>
        <li><strong>Choose a shorter loan term.</strong> A 15-year mortgage has a higher monthly payment than a 30-year, but you pay far less total interest.</li>
        <li><strong>Put more down upfront.</strong> A larger down payment means a smaller loan and lower total interest.</li>
      </ul>

      <div className="bg-[#1E3A5F] text-white rounded-xl p-6 text-center">
        <p className="text-lg font-semibold mb-2">See Your Total Interest Before You Borrow</p>
        <p className="text-slate-300 text-sm mb-4">
          Enter any loan amount, interest rate, and term to see your monthly payment and total interest paid.
        </p>
        <Link href="/tools/loan-calculator"
          className="inline-block bg-[#00B4A6] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#009d91] transition-colors">
          Use the Loan Calculator â
        </Link>
      </div>
    </article>
  );
}
