import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "How to Calculate GPA | Step-by-Step Guide",
  description: "Learn how to calculate your GPA using the 4.0 scale. Covers unweighted and weighted GPA with a full grade table and worked examples.",
};

export default function HowToCalculateGPAArticle() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>
        {" / "}
        <span className="text-slate-600">How to Calculate GPA</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">
        How to Calculate GPA: Unweighted and Weighted
      </h1>
      <p className="text-slate-400 text-sm mb-8">Updated June 2026 - 5 min read</p>

      <p className="text-slate-600 mb-6">
        GPA - Grade Point Average - is a single number that summarizes your academic performance
        across all your courses. Most US colleges and high schools use either a 4.0 (unweighted)
        or a 5.0 (weighted) scale. Understanding how GPA is calculated helps you set realistic
        goals and track your progress.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">The Grade Scale (4.0 System)</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="px-4 py-2 text-left">Letter Grade</th>
              <th className="px-4 py-2 text-left">Percentage</th>
              <th className="px-4 py-2 text-left">Grade Points</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="px-4 py-2">A+</td><td className="px-4 py-2">97-100%</td><td className="px-4 py-2">4.0</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">A</td><td className="px-4 py-2">93-96%</td><td className="px-4 py-2">4.0</td></tr>
            <tr className="border-b"><td className="px-4 py-2">A-</td><td className="px-4 py-2">90-92%</td><td className="px-4 py-2">3.7</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">B+</td><td className="px-4 py-2">87-89%</td><td className="px-4 py-2">3.3</td></tr>
            <tr className="border-b"><td className="px-4 py-2">B</td><td className="px-4 py-2">83-86%</td><td className="px-4 py-2">3.0</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">B-</td><td className="px-4 py-2">80-82%</td><td className="px-4 py-2">2.7</td></tr>
            <tr className="border-b"><td className="px-4 py-2">C+</td><td className="px-4 py-2">77-79%</td><td className="px-4 py-2">2.3</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">C</td><td className="px-4 py-2">73-76%</td><td className="px-4 py-2">2.0</td></tr>
            <tr className="border-b"><td className="px-4 py-2">C-</td><td className="px-4 py-2">70-72%</td><td className="px-4 py-2">1.7</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">D+</td><td className="px-4 py-2">67-69%</td><td className="px-4 py-2">1.3</td></tr>
            <tr className="border-b"><td className="px-4 py-2">D</td><td className="px-4 py-2">63-66%</td><td className="px-4 py-2">1.0</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">D-</td><td className="px-4 py-2">60-62%</td><td className="px-4 py-2">0.7</td></tr>
            <tr><td className="px-4 py-2">F</td><td className="px-4 py-2">Below 60%</td><td className="px-4 py-2">0.0</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Unweighted GPA Formula</h2>
      <p className="text-slate-600 mb-4">
        Unweighted GPA treats every course equally, regardless of difficulty. The formula is:
      </p>
      <div className="bg-slate-100 rounded p-4 mb-4 font-mono text-sm">
        GPA = Total Grade Points / Number of Courses
      </div>
      <p className="text-slate-600 mb-6">
        Example: If you earned A (4.0), B+ (3.3), A- (3.7), C (2.0), and B (3.0) in five classes,
        your GPA = (4.0 + 3.3 + 3.7 + 2.0 + 3.0) / 5 = 16.0 / 5 = 3.20
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Weighted GPA (Credit Hours)</h2>
      <p className="text-slate-600 mb-4">
        When courses carry different credit values, multiply each grade by its credits:
      </p>
      <div className="bg-slate-100 rounded p-4 mb-4 font-mono text-sm">
        GPA = Sum of (Grade Points x Credits) / Sum of Credits
      </div>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="px-4 py-2 text-left">Course</th>
              <th className="px-4 py-2 text-left">Grade</th>
              <th className="px-4 py-2 text-left">Credits</th>
              <th className="px-4 py-2 text-left">Points x Credits</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="px-4 py-2">Math</td><td className="px-4 py-2">A (4.0)</td><td className="px-4 py-2">4</td><td className="px-4 py-2">16.0</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">English</td><td className="px-4 py-2">B+ (3.3)</td><td className="px-4 py-2">3</td><td className="px-4 py-2">9.9</td></tr>
            <tr className="border-b"><td className="px-4 py-2">History</td><td className="px-4 py-2">A- (3.7)</td><td className="px-4 py-2">3</td><td className="px-4 py-2">11.1</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">PE</td><td className="px-4 py-2">A (4.0)</td><td className="px-4 py-2">1</td><td className="px-4 py-2">4.0</td></tr>
            <tr className="font-semibold border-t-2"><td className="px-4 py-2">Total</td><td className="px-4 py-2"></td><td className="px-4 py-2">11</td><td className="px-4 py-2">41.0</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-slate-600 mb-6">GPA = 41.0 / 11 = 3.73</p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">AP and Honors Courses</h2>
      <p className="text-slate-600 mb-6">
        For weighted GPA that rewards course difficulty, AP courses add 1.0 and Honors courses add 0.5
        to the grade point. So an A in AP calculus counts as 5.0 instead of 4.0. Check your school&apos;s
        policy, as weighting rules vary.
      </p>

      <div className="bg-[#E8F8F7] border border-[#00B4A6] rounded-lg p-5">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">Calculate Your GPA Instantly</h3>
        <p className="text-slate-600 mb-3">
          Add your courses, grades, and credit hours to get your cumulative GPA in seconds.
        </p>
        <Link
          href="/tools/gpa-calculator"
          className="inline-block bg-[#00B4A6] text-white font-semibold px-5 py-2 rounded hover:bg-[#009d90] transition-colors"
        >
          Use the GPA Calculator
        </Link>
      </div>
    </article>
  );
}
