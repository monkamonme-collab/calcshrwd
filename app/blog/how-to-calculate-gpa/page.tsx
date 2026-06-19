import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Calculate GPA: A Complete Guide | CalcShrwd",
  description:
    "Learn how to calculate unweighted and weighted GPA on the 4.0 scale, with worked examples using credit hours and grade points.",
};

export default function GpaArticle() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>
        {" / "}
        <span>How to Calculate GPA</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">
        How to Calculate GPA: A Complete Guide
      </h1>
      <p className="text-slate-400 text-sm mb-8">5 min read</p>

      <p className="text-slate-700 mb-6">
        GPA (Grade Point Average) is one of the most widely used metrics in
        academic life, but many students are unsure exactly how it is
        calculated. This guide walks through the 4.0 scale, unweighted vs.
        weighted GPA, and a step-by-step worked example.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">
        The 4.0 Grade Scale
      </h2>
      <p className="text-slate-700 mb-4">
        Most U.S. high schools and colleges use a 4.0 scale to convert letter
        grades into grade points.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="px-4 py-2 text-left">Letter Grade</th>
              <th className="px-4 py-2 text-left">Percentage Range</th>
              <th className="px-4 py-2 text-left">Grade Points (4.0)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              ["A+", "97â100%", "4.0"],
              ["A",  "93â96%",  "4.0"],
              ["Aâ", "90â92%", "3.7"],
              ["B+", "87â89%", "3.3"],
              ["B",  "83â86%", "3.0"],
              ["Bâ", "80â82%", "2.7"],
              ["C+", "77â79%", "2.3"],
              ["C",  "73â76%", "2.0"],
              ["Câ", "70â72%", "1.7"],
              ["D+", "67â69%", "1.3"],
              ["D",  "63â66%", "1.0"],
              ["Dâ", "60â62%", "0.7"],
              ["F",  "Below 60%", "0.0"],
            ].map(([letter, pct, pts], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-4 py-2 font-medium">{letter}</td>
                <td className="px-4 py-2 text-slate-600">{pct}</td>
                <td className="px-4 py-2 text-slate-600">{pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">
        Unweighted GPA
      </h2>
      <p className="text-slate-700 mb-4">
        An unweighted GPA treats all courses equally, regardless of difficulty.
        The formula is:
      </p>
      <div className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 mb-4 font-mono text-sm text-slate-700">
        GPA = Sum of (Grade Points) / Number of Courses
      </div>
      <p className="text-slate-700 mb-6">
        For example, if you earn A (4.0), B+ (3.3), Aâ (3.7), and B (3.0)
        across four courses, your GPA is (4.0 + 3.3 + 3.7 + 3.0) / 4 ={" "}
        <strong>3.50</strong>.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">
        Weighted GPA (Credit Hours)
      </h2>
      <p className="text-slate-700 mb-4">
        Colleges typically weight GPA by credit hours so that a 4-credit class
        has more impact than a 1-credit elective. The formula is:
      </p>
      <div className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 mb-4 font-mono text-sm text-slate-700">
        GPA = Sum of (Grade Points x Credit Hours) / Sum of Credit Hours
      </div>

      <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">
        Worked Example
      </h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="px-4 py-2 text-left">Course</th>
              <th className="px-4 py-2 text-left">Grade</th>
              <th className="px-4 py-2 text-left">Points</th>
              <th className="px-4 py-2 text-left">Credits</th>
              <th className="px-4 py-2 text-left">Points x Credits</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              ["Calculus", "A", "4.0", "4", "16.0"],
              ["English Comp", "B+", "3.3", "3", "9.9"],
              ["History", "Aâ", "3.7", "3", "11.1"],
              ["PE", "A", "4.0", "1", "4.0"],
            ].map(([course, grade, pts, credits, total], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-4 py-2">{course}</td>
                <td className="px-4 py-2 font-medium">{grade}</td>
                <td className="px-4 py-2">{pts}</td>
                <td className="px-4 py-2">{credits}</td>
                <td className="px-4 py-2 font-medium">{total}</td>
              </tr>
            ))}
            <tr className="bg-[#1E3A5F] text-white font-bold">
              <td className="px-4 py-2" colSpan={3}>Total</td>
              <td className="px-4 py-2">11</td>
              <td className="px-4 py-2">41.0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-slate-700 mb-6">
        GPA = 41.0 / 11 = <strong>3.73</strong>
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">
        GPA Benchmarks
      </h2>
      <p className="text-slate-700 mb-4">
        Here is how GPA ranges are generally interpreted:
      </p>
      <ul className="space-y-2 mb-6 text-slate-700">
        <li><strong>3.7 â 4.0</strong> â Summa cum laude / Dean&apos;s List range</li>
        <li><strong>3.5 â 3.69</strong> â Magna cum laude range</li>
        <li><strong>3.0 â 3.49</strong> â Solid academic standing</li>
        <li><strong>2.0 â 2.99</strong> â Meets minimum requirements</li>
        <li><strong>Below 2.0</strong> â Academic probation risk</li>
      </ul>

      <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">
        Tips to Raise Your GPA
      </h2>
      <ul className="space-y-2 mb-8 text-slate-700">
        <li>Focus grade-point effort on high-credit courses â they move the needle most.</li>
        <li>Retake courses where your school allows grade replacement.</li>
        <li>Use pass/fail options strategically for electives outside your major.</li>
        <li>Aim for consistent B+ or better rather than mixing A&apos;s and C&apos;s.</li>
      </ul>

      <div className="bg-[#F0FDFB] border border-[#00B4A6] rounded-xl p-6 text-center">
        <p className="text-slate-700 mb-3">
          Want to calculate your GPA instantly?
        </p>
        <Link
          href="/tools/gpa-calculator"
          className="inline-block bg-[#00B4A6] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#009e91] transition-colors"
        >
          Try the GPA Calculator
        </Link>
      </div>
    </main>
  );
}
