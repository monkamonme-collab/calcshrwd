import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "How to Calculate Your Grade",
  description: "Learn how to calculate your final grade using weighted averages, points-based systems, and category weights. Step-by-step examples included.",
};

export default function HowToCalculateGrade() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <article>
        <h1 className="text-3xl font-bold mb-4">How to Calculate Your Grade</h1>
        <p className="text-gray-500 text-sm mb-8">Updated June 2025 · 6 min read</p>

        <p className="mb-6">
          Whether you are trying to figure out what score you need on a final exam or tracking your
          class standing mid-semester, knowing how to calculate your grade is an essential academic
          skill. This guide covers the three most common grading systems and walks you through each
          with real examples.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Three Main Grading Systems</h2>
        <p className="mb-4">Most teachers use one of these approaches:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Points-based:</strong> Every assignment is worth a set number of points and your score is total points earned divided by total possible points.</li>
          <li><strong>Category weights:</strong> Assignments are grouped (homework, tests, final exam) and each group counts for a percentage of your grade.</li>
          <li><strong>Simple average:</strong> All assignments count equally; your grade is the mean of all scores.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Method 1: Points-Based Grading</h2>
        <p className="mb-4">
          This is the simplest system. Add up all points you earned, divide by total possible points,
          and multiply by 100.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="font-semibold mb-2">Formula:</p>
          <p className="font-mono text-sm mb-4">Grade % = (Points Earned / Total Points Possible) x 100</p>
          <p className="font-semibold mb-2">Example:</p>
          <ul className="text-sm space-y-1">
            <li>Essay: 88/100</li>
            <li>Quiz 1: 18/20</li>
            <li>Quiz 2: 16/20</li>
            <li>Midterm: 74/100</li>
          </ul>
          <p className="text-sm mt-3">
            Total earned: 88 + 18 + 16 + 74 = <strong>196</strong><br/>
            Total possible: 100 + 20 + 20 + 100 = <strong>240</strong><br/>
            Grade: 196 / 240 x 100 = <strong>81.7%</strong>
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Method 2: Weighted Categories</h2>
        <p className="mb-4">
          Many courses weight different types of work differently. Your syllabus might say homework is
          20%, tests are 50%, and the final exam is 30%. In this case, you calculate an average within
          each category, then multiply by the weight.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="font-semibold mb-2">Formula:</p>
          <p className="font-mono text-sm mb-4">Weighted Grade = Sum of (Category Average x Category Weight)</p>
          <p className="font-semibold mb-2">Example:</p>
          <div className="text-sm space-y-1">
            <p>Homework avg: 90% (weight: 20%) = 90 x 0.20 = 18.0</p>
            <p>Tests avg: 78% (weight: 50%) = 78 x 0.50 = 39.0</p>
            <p>Final exam: 85% (weight: 30%) = 85 x 0.30 = 25.5</p>
            <p className="mt-2 font-medium">Final grade: 18.0 + 39.0 + 25.5 = <strong>82.5%</strong></p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Method 3: Simple Average</h2>
        <p className="mb-4">
          If every assignment counts equally, just add up all the percentages and divide by the number
          of assignments.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="font-semibold mb-2">Example:</p>
          <p className="text-sm">
            Scores: 92, 85, 78, 90, 88<br/>
            Sum: 92 + 85 + 78 + 90 + 88 = 433<br/>
            Average: 433 / 5 = <strong>86.6%</strong>
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What Score Do I Need on the Final?</h2>
        <p className="mb-4">
          This is the most common calculation students need. If you know your current grade and what
          the final exam is worth, you can find the minimum score needed to hit a target grade.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="font-semibold mb-2">Formula:</p>
          <p className="font-mono text-sm mb-4">
            Required Score = (Target Grade - Current Grade x (1 - Final Weight)) / Final Weight
          </p>
          <p className="font-semibold mb-2">Example:</p>
          <p className="text-sm">
            Current grade: 80% - Final worth: 30% - Target: 85%<br/>
            Required = (85 - 80 x 0.70) / 0.30<br/>
            Required = (85 - 56) / 0.30<br/>
            Required = 29 / 0.30 = <strong>96.7%</strong>
          </p>
          <p className="text-sm text-gray-500 mt-2">You would need a 97% on the final to end up with an 85%.</p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Grade Scale Reference</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left">Letter Grade</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Percentage Range</th>
                <th className="border border-gray-200 px-4 py-2 text-left">GPA Points</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["A", "90-100%", "4.0"],
                ["B", "80-89%", "3.0"],
                ["C", "70-79%", "2.0"],
                ["D", "60-69%", "1.0"],
                ["F", "Below 60%", "0.0"],
              ].map(([letter, range, gpa]) => (
                <tr key={letter}>
                  <td className="border border-gray-200 px-4 py-2 font-semibold">{letter}</td>
                  <td className="border border-gray-200 px-4 py-2">{range}</td>
                  <td className="border border-gray-200 px-4 py-2">{gpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Note: Exact cutoffs vary by school. Some use 93% for A, 90% for A minus, etc.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Tips for Tracking Your Grade</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Read the syllabus carefully.</strong> Know the exact weights before you start calculating.</li>
          <li><strong>Do not ignore zeros.</strong> A single zero can drag a category average down significantly.</li>
          <li><strong>Check your LMS.</strong> Canvas, Blackboard, and Schoology show running grades, but their calculations may not match the final if assignments are ungraded.</li>
          <li><strong>Ask what is included.</strong> Some teachers drop the lowest quiz grade, which changes the math.</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
          <p className="font-semibold mb-2">Try it instantly</p>
          <p className="text-sm mb-3">
            Use our{" "}
            <Link href="/tools/grade-calculator" className="text-blue-600 underline">
              Grade Calculator
            </Link>{" "}
            to enter your scores and weights and get your grade in seconds, including the minimum
            final exam score you need to hit any target.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Related Calculators</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1 text-sm">
          <li>
            <Link href="/tools/gpa-calculator" className="text-blue-600 underline">
              GPA Calculator
            </Link>{" "}
            - Convert your grades to a 4.0 GPA
          </li>
          <li>
            <Link href="/tools/percentage-calculator" className="text-blue-600 underline">
              Percentage Calculator
            </Link>{" "}
            - Quick percentage math
          </li>
        </ul>
      </article>
    </main>
  );
}
