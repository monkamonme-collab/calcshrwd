import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | CalcShrwd",
  description: "CalcShrwd provides free, accurate online calculators for everyday American needs. No sign-up, no ads bloating the page.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">About CalcShrwd</h1>

      <p className="mb-4">
        CalcShrwd is a free collection of online calculators built for everyday American needs.
        Whether you need to figure out your take-home pay, calculate a tip, check your GPA, or
        understand a loan, we have a simple tool that gives you the answer in seconds.
      </p>

      <p className="mb-4">
        We built CalcShrwd because most calculator sites are slow, cluttered with ads, and require
        you to scroll past irrelevant content just to get a number. We wanted something fast,
        clean, and accurate.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Tools</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-sm">
        <li><Link href="/tools/tip-calculator" className="text-blue-600 underline">Tip Calculator</Link> - Calculate the right tip for any bill</li>
        <li><Link href="/tools/paycheck-calculator" className="text-blue-600 underline">Paycheck Calculator</Link> - Estimate your take-home pay after taxes</li>
        <li><Link href="/tools/gpa-calculator" className="text-blue-600 underline">GPA Calculator</Link> - Calculate your GPA on the 4.0 scale</li>
        <li><Link href="/tools/bmi-calculator" className="text-blue-600 underline">BMI Calculator</Link> - Calculate your Body Mass Index</li>
        <li><Link href="/tools/loan-calculator" className="text-blue-600 underline">Loan Calculator</Link> - Estimate monthly payments and total interest</li>
        <li><Link href="/tools/grade-calculator" className="text-blue-600 underline">Grade Calculator</Link> - Find your final grade or needed exam score</li>
        <li><Link href="/tools/percentage-calculator" className="text-blue-600 underline">Percentage Calculator</Link> - Quick percentage math</li>
        <li><Link href="/tools/word-counter" className="text-blue-600 underline">Word Counter</Link> - Count words, characters, and reading time</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
      <p className="mb-4">
        All of our calculators are free to use with no account required. Results are computed
        entirely in your browser - we do not store your inputs or share them with anyone.
      </p>
      <p className="mb-4">
        We strive to keep our tools accurate and up to date. If you notice a calculation error
        or have a suggestion for a new tool, we welcome your feedback.
      </p>

      <p className="mt-8 text-sm text-gray-500">
        Questions? Reach us at{" "}
        <a href="mailto:hello@calcshrwd.com" className="text-blue-600 underline">
          hello@calcshrwd.com
        </a>
      </p>
    </main>
  );
}
