import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Calculate Percentages",
  description: "Learn how to calculate percentages quickly and easily. Covers percentage of a number, percentage change, and what percent one number is of another.",
  alternates: {
    canonical: "https://www.calcshrwd.com/blog/how-to-calculate-percentage",
  },
};

export default function HowToCalculatePercentage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <article>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I calculate a percentage of a number?","acceptedAnswer":{"@type":"Answer","text":"To find X% of Y, use the formula: Result = (X ÷ 100) × Y. For example, 20% of $85 = (20 ÷ 100) × 85 = $17. A quick shortcut: find 10% by moving the decimal one place left, then multiply or divide to get the percentage you need."}},{"@type":"Question","name":"How do I calculate percentage change?","acceptedAnswer":{"@type":"Answer","text":"Percentage change = ((New Value − Old Value) ÷ Old Value) × 100. A positive result is an increase; negative is a decrease. For example, a price rising from $50 to $65 is a (65 − 50) ÷ 50 × 100 = 30% increase."}},{"@type":"Question","name":"How do I find what percent one number is of another?","acceptedAnswer":{"@type":"Answer","text":"Use the formula: Percentage = (Part ÷ Whole) × 100. For example, to find what percent 45 is of 180: (45 ÷ 180) × 100 = 25%. This is useful for test scores, budget ratios, and conversion rates."}},{"@type":"Question","name":"How do I find the original price before a discount?","acceptedAnswer":{"@type":"Answer","text":"If an item costs $68 after a 15% discount, the original price = Sale Price ÷ (1 − Discount Rate) = 68 ÷ 0.85 = $80. For a price that includes tax, divide by (1 + Tax Rate) instead."}}]}` }}
        />
        <h1 className="text-3xl font-bold mb-4">How to Calculate Percentages</h1>
        <p className="text-gray-500 text-sm mb-8">Updated June 2025 · 5 min read</p>

        <p className="mb-6">
          Percentages show up everywhere — discounts, tips, tax rates, test scores, interest rates.
          Once you understand the three core calculations, you can handle almost any percentage
          problem you will encounter in daily life.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Three Core Percentage Calculations</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">1. What is X% of Y?</h3>
        <p className="mb-4">
          Use this when you want to find a portion of a whole. For example: what is 20% of $85?
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="font-semibold mb-2">Formula:</p>
          <p className="font-mono text-sm mb-4">Result = (Percentage / 100) x Total</p>
          <p className="font-semibold mb-2">Examples:</p>
          <ul className="text-sm space-y-1">
            <li>20% of $85 = (20 / 100) x 85 = <strong>$17.00</strong></li>
            <li>15% tip on $60 = (15 / 100) x 60 = <strong>$9.00</strong></li>
            <li>8.5% sales tax on $120 = (8.5 / 100) x 120 = <strong>$10.20</strong></li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. X is What Percent of Y?</h3>
        <p className="mb-4">
          Use this when you want to express one number as a percentage of another. For example: 45
          is what percent of 180?
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="font-semibold mb-2">Formula:</p>
          <p className="font-mono text-sm mb-4">Percentage = (Part / Whole) x 100</p>
          <p className="font-semibold mb-2">Examples:</p>
          <ul className="text-sm space-y-1">
            <li>45 out of 180 = (45 / 180) x 100 = <strong>25%</strong></li>
            <li>32 correct out of 40 = (32 / 40) x 100 = <strong>80%</strong></li>
            <li>You spent $340 of a $500 budget = (340 / 500) x 100 = <strong>68%</strong></li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Percentage Change</h3>
        <p className="mb-4">
          Use this to calculate how much something increased or decreased relative to the original
          value. Works for price changes, salary raises, population changes, and more.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="font-semibold mb-2">Formula:</p>
          <p className="font-mono text-sm mb-4">
            % Change = ((New Value - Old Value) / Old Value) x 100
          </p>
          <p className="font-semibold mb-2">Examples:</p>
          <ul className="text-sm space-y-1">
            <li>Price went from $50 to $65 → (65 - 50) / 50 x 100 = <strong>+30%</strong></li>
            <li>Salary went from $72k to $68k → (68 - 72) / 72 x 100 = <strong>-5.6%</strong></li>
            <li>Stock went from $120 to $156 → (156 - 120) / 120 x 100 = <strong>+30%</strong></li>
          </ul>
          <p className="text-sm text-gray-500 mt-2">A positive result means an increase; negative means a decrease.</p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Finding the Original Value</h2>
        <p className="mb-4">
          Sometimes you know the result and the percentage, but need to find the original amount.
          For example, if an item costs $68 after a 15% discount, what was the original price?
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="font-semibold mb-2">Formula:</p>
          <p className="font-mono text-sm mb-4">Original = Result / (1 - Discount Rate)</p>
          <p className="font-semibold mb-2">Example:</p>
          <p className="text-sm">
            Sale price $68 after 15% off:<br/>
            Original = 68 / (1 - 0.15) = 68 / 0.85 = <strong>$80.00</strong>
          </p>
          <p className="text-sm mt-3 font-semibold">For a tax-inclusive price:</p>
          <p className="text-sm mt-1">
            Price with 8% tax is $54: Pre-tax = 54 / 1.08 = <strong>$50.00</strong>
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Quick Reference Table</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left">What You Want</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Formula</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["X% of Y", "(X / 100) × Y"],
                ["X is what % of Y", "(X / Y) × 100"],
                ["% change from A to B", "((B − A) / A) × 100"],
                ["Original before % increase", "Result / (1 + rate)"],
                ["Original before % discount", "Result / (1 − rate)"],
              ].map(([want, formula]) => (
                <tr key={want}>
                  <td className="border border-gray-200 px-4 py-2">{want}</td>
                  <td className="border border-gray-200 px-4 py-2 font-mono">{formula}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Common Percentage Shortcuts</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-sm">
          <li><strong>10%</strong> — move the decimal one place left. 10% of 340 = 34.</li>
          <li><strong>5%</strong> — find 10% then divide by 2. 5% of 340 = 17.</li>
          <li><strong>25%</strong> — divide by 4. 25% of 200 = 50.</li>
          <li><strong>50%</strong> — divide by 2. 50% of 90 = 45.</li>
          <li><strong>1%</strong> — move the decimal two places left. 1% of 4,500 = 45.</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
          <p className="font-semibold mb-2">Skip the math</p>
          <p className="text-sm mb-3">
            Use our{" "}
            <Link href="/tools/percentage-calculator" className="text-blue-600 underline">
              Percentage Calculator
            </Link>{" "}
            to instantly solve any of the three percentage types above, plus find original values
            before discounts or markups.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Related Calculators</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1 text-sm">
          <li>
            <Link href="/tools/tip-calculator" className="text-blue-600 underline">
              Tip Calculator
            </Link>{" "}
            - Calculate the right tip amount
          </li>
          <li>
            <Link href="/tools/grade-calculator" className="text-blue-600 underline">
              Grade Calculator
            </Link>{" "}
            - Turn scores into letter grades
          </li>
        </ul>
      </article>
    </main>
  );
}
