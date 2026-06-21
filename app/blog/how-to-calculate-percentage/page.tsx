import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "How to Calculate Percentages",
  description: "Learn how to calculate percentages quickly and easily. Covers percentage of a number, percentage change, and what percent one number is of another.",
};

export default function HowToCalculatePercentage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <article>
        <h1 className="text-3xl font-bold mb-4">How to Calculate Percentages</h1>
        <p className="text-gray-500 text-sm mb-8">Updated June 2025 · 5 min read</p>

        <p className="mb-6">
          Percentages show up everywhere, from sale prices and tax rates to test scores and statistics.
          Once you understand the three core percentage calculations, you can handle almost any
          percentage problem you encounter in daily life.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Three Core Percentage Calculations</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>What is X% of Y?</strong> Find a percentage of a number (e.g., what is 20% of 80?).</li>
          <li><strong>X is what percent of Y?</strong> Find what percentage one number is of another.</li>
          <li><strong>Percentage change.</strong> How much did something increase or decrease in percent terms?</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Calculation 1: What Is X% of Y?</h2>
        <p className="mb-4">
          This is the most common percentage calculation. You want to find a specific portion of a number.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="font-semibold mb-2">Formula:</p>
          <p className="font-mono text-sm mb-4">Result = (Percentage / 100) x Number</p>
          <p className="font-semibold mb-2">Examples:</p>
          <ul className="text-sm space-y-2">
            <li>What is 20% of 80? = (20 / 100) x 80 = 0.20 x 80 = <strong>16</strong></li>
            <li>What is 15% tip on a $45 meal? = 0.15 x 45 = <strong>$6.75</strong></li>
            <li>What is 7% sales tax on $120? = 0.07 x 120 = <strong>$8.40</strong></li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Calculation 2: X Is What Percent of Y?</h2>
        <p className="mb-4">
          Here you already have two numbers and want to express their relationship as a percentage.
          Divide the part by the whole, then multiply by 100.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="font-semibold mb-2">Formula:</p>
          <p className="font-mono text-sm mb-4">Percentage = (Part / Whole) x 100</p>
          <p className="font-semibold mb-2">Examples:</p>
          <ul className="text-sm space-y-2">
            <li>30 is what percent of 150? = (30 / 150) x 100 = <strong>20%</strong></li>
            <li>You scored 47/50 on a quiz. What is your percentage? = (47 / 50) x 100 = <strong>94%</strong></li>
            <li>A store sold 320 of 400 items. What percent sold? = (320 / 400) x 100 = <strong>80%</strong></li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Calculation 3: Percentage Change</h2>
        <p className="mb-4">
          Use this when something has increased or decreased and you want to express the change
          as a percentage of the original value.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="font-semibold mb-2">Formula:</p>
          <p className="font-mono text-sm mb-4">
            Percentage Change = ((New Value - Old Value) / Old Value) x 100
          </p>
          <p className="font-semibold mb-2">Examples:</p>
          <ul className="text-sm space-y-2">
            <li>Price went from $50 to $65. Change = ((65 - 50) / 50) x 100 = <strong>+30%</strong> (increase)</li>
            <li>Subscribers dropped from 1,200 to 900. Change = ((900 - 1200) / 1200) x 100 = <strong>-25%</strong> (decrease)</li>
            <li>Your grade went from 72 to 90. Change = ((90 - 72) / 72) x 100 = <strong>+25%</strong></li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Finding the Original Value</h2>
        <p className="mb-4">
          Sometimes you know the result and the percentage but need to find the original number.
          Divide by the decimal form of the percentage.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="font-semibold mb-2">Formula:</p>
          <p className="font-mono text-sm mb-4">Original = Result / (Percentage / 100)</p>
          <p className="font-semibold mb-2">Example:</p>
          <p className="text-sm">
            A price after a 20% discount is $64. What was the original price?<br/>
            After a 20% discount, you paid 80% of the original.<br/>
            Original = 64 / 0.80 = <strong>$80</strong>
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Quick Reference: Common Percentages</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left">Percentage</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Decimal</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Fraction</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Example (of 200)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["10%", "0.10", "1/10", "20"],
                ["15%", "0.15", "3/20", "30"],
                ["20%", "0.20", "1/5", "40"],
                ["25%", "0.25", "1/4", "50"],
                ["33%", "0.33", "1/3", "66"],
                ["50%", "0.50", "1/2", "100"],
                ["75%", "0.75", "3/4", "150"],
              ].map(([pct, dec, frac, ex]) => (
                <tr key={pct}>
                  <td className="border border-gray-200 px-4 py-2 font-semibold">{pct}</td>
                  <td className="border border-gray-200 px-4 py-2">{dec}</td>
                  <td className="border border-gray-200 px-4 py-2">{frac}</td>
                  <td className="border border-gray-200 px-4 py-2">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Percentage Tips and Tricks</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3">
          <li>
            <strong>10% trick:</strong> To find 10% of any number, just move the decimal point one
            place to the left. 10% of 340 = 34. Then double it for 20%, halve it for 5%, etc.
          </li>
          <li>
            <strong>Reverse the order:</strong> X% of Y always equals Y% of X. So 8% of 50 equals
            50% of 8, which is just 4. Use whichever version is easier to calculate.
          </li>
          <li>
            <strong>Increase vs. markup:</strong> A 25% increase on $100 gives $125. But to mark
            something up so the profit is 25% of the selling price (not cost), divide by 0.75
            instead: $100 / 0.75 = $133.33.
          </li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
          <p className="font-semibold mb-2">Skip the math</p>
          <p className="text-sm mb-3">
            Use our{" "}
            <Link href="/tools/percentage-calculator" className="text-blue-600 underline">
              Percentage Calculator
            </Link>{" "}
            to instantly solve any of the three core percentage problems, including percentage change
            and finding the original value.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Related Calculators</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1 text-sm">
          <li>
            <Link href="/tools/grade-calculator" className="text-blue-600 underline">
              Grade Calculator
            </Link>{" "}
            - Find your grade as a percentage
          </li>
          <li>
            <Link href="/tools/tip-calculator" className="text-blue-600 underline">
              Tip Calculator
            </Link>{" "}
            - Calculate tip percentages on any bill
          </li>
          <li>
            <Link href="/tools/loan-calculator" className="text-blue-600 underline">
              Loan Calculator
            </Link>{" "}
            - Understand interest rates and monthly payments
          </li>
        </ul>
      </article>
    </main>
  );
}
