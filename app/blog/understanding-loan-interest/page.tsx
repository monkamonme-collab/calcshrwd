import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Understanding Loan Interest: Simple vs Compound | CalcShrwd",
  description: "Learn the difference between simple and compound interest, how amortization works, and strategies to pay off loans faster.",
};

export default function UnderstandingLoanInterestArticle() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>
        {" / "}
        <span className="text-slate-600">Understanding Loan Interest</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">
        Understanding Loan Interest: Simple vs Compound
      </h1>
      <p className="text-slate-400 text-sm mb-8">Updated June 2026 - 6 min read</p>

      <p className="text-slate-600 mb-6">
        Interest is the cost of borrowing money. Whether you are taking out a mortgage, auto loan,
        student loan, or personal loan, understanding how interest is calculated helps you compare
        offers, estimate your true cost, and find strategies to pay less over time.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Simple Interest</h2>
      <p className="text-slate-600 mb-4">
        Simple interest is calculated only on the original principal balance:
      </p>
      <div className="bg-slate-100 rounded p-4 mb-4 font-mono text-sm">
        Interest = Principal x Rate x Time
      </div>
      <p className="text-slate-600 mb-6">
        Example: A $10,000 loan at 5% per year for 3 years accumulates
        $10,000 x 0.05 x 3 = $1,500 in interest. Simple interest is common for short-term personal loans.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Compound Interest</h2>
      <p className="text-slate-600 mb-4">
        Compound interest charges interest on both the principal and any accumulated interest.
        It grows faster than simple interest:
      </p>
      <div className="bg-slate-100 rounded p-4 mb-4 font-mono text-sm">
        A = P x (1 + r/n)^(n x t)
      </div>
      <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-1">
        <li>A = final amount</li>
        <li>P = principal</li>
        <li>r = annual interest rate (decimal)</li>
        <li>n = compounding periods per year</li>
        <li>t = time in years</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">How Mortgage Amortization Works</h2>
      <p className="text-slate-600 mb-4">
        Most mortgages and installment loans use amortization - fixed monthly payments that
        cover both interest and principal. Your monthly payment M is calculated as:
      </p>
      <div className="bg-slate-100 rounded p-4 mb-4 font-mono text-sm">
        M = P x [r(1+r)^n] / [(1+r)^n - 1]
      </div>
      <p className="text-slate-600 mb-6">
        In early payments, most of your money goes to interest. Over time, more goes to
        principal. This is why paying even a small extra amount each month can save thousands
        in interest.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">APR vs Interest Rate</h2>
      <p className="text-slate-600 mb-6">
        The interest rate is just the cost of borrowing the principal. APR (Annual Percentage Rate)
        includes the interest rate plus fees, points, and other loan costs expressed as a yearly
        rate. Always compare APRs when shopping for loans - not just the interest rate.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Strategies to Pay Less Interest</h2>
      <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
        <li><strong>Make extra principal payments.</strong> Even $50 extra per month on a 30-year mortgage can save years of payments.</li>
        <li><strong>Refinance when rates drop.</strong> A 1% rate reduction on a $300,000 mortgage saves roughly $170/month.</li>
        <li><strong>Choose a shorter loan term.</strong> A 15-year mortgage carries a lower rate than a 30-year, and you pay far less total interest.</li>
        <li><strong>Improve your credit score.</strong> Better credit means lower rates. Even a 0.5% improvement on a large loan saves thousands.</li>
        <li><strong>Make biweekly payments.</strong> Paying half your monthly payment every two weeks results in one extra full payment per year.</li>
      </ul>

      <div className="bg-[#E8F8F7] border border-[#00B4A6] rounded-lg p-5">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">Calculate Your Loan Payments</h3>
        <p className="text-slate-600 mb-3">
          See your monthly payment, total interest, and full amortization schedule instantly.
        </p>
        <Link
          href="/tools/loan-calculator"
          className="inline-block bg-[#00B4A6] text-white font-semibold px-5 py-2 rounded hover:bg-[#009d90] transition-colors"
        >
          Use the Loan Calculator
        </Link>
      </div>
    </article>
  );
}
