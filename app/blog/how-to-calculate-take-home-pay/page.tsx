import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Calculate Take-Home Pay | Paycheck Guide",
  description: "Understand what is deducted from your paycheck. Learn about federal taxes, FICA, state taxes, and voluntary deductions to estimate your net pay.",
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
