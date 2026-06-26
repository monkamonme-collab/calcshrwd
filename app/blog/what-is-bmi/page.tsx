import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is BMI? Understanding Your Body Mass Index",
  description: "BMI stands for Body Mass Index. Learn what the number means, how it is calculated, and why it is only one piece of the health picture. Calculate yours free.",
  alternates: {
    canonical: "https://www.calcshrwd.com/blog/what-is-bmi",
  },
};

export default function WhatIsBMIArticle() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a healthy BMI range?","acceptedAnswer":{"@type":"Answer","text":"A BMI between 18.5 and 24.9 is considered normal or healthy weight. Below 18.5 is underweight, 25 to 29.9 is overweight, and 30 or above is classified as obese according to standard BMI categories."}},{"@type":"Question","name":"How do I calculate my BMI?","acceptedAnswer":{"@type":"Answer","text":"In imperial units: BMI = 703 × weight (lbs) ÷ height (inches)². In metric: BMI = weight (kg) ÷ height (m)². For example, a person 5 feet 9 inches tall (69 inches) who weighs 160 lbs has a BMI of about 23.6."}},{"@type":"Question","name":"Is BMI accurate for athletes?","acceptedAnswer":{"@type":"Answer","text":"BMI is less accurate for athletes because it does not distinguish muscle from fat. A muscular athlete may fall in the overweight BMI category despite having low body fat. Body fat percentage is a more informative measure for athletes."}},{"@type":"Question","name":"Does BMI work the same for everyone?","acceptedAnswer":{"@type":"Answer","text":"Standard BMI categories apply to adults over 20. For children and teens, BMI is interpreted using age- and gender-specific growth charts. Research also shows that people of Asian descent face higher health risks at lower BMI thresholds than standard categories suggest."}}]}` }}
      />
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>
        {" / "}
        <span className="text-slate-600">What Is BMI?</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">
        What Is BMI? Understanding Your Body Mass Index
      </h1>
      <p className="text-slate-400 text-sm mb-8">Updated June 2026 - 4 min read</p>

      <p className="text-slate-600 mb-6">
        BMI - Body Mass Index - is a simple number calculated from your height and weight. It was developed
        in the 1830s by Belgian mathematician Adolphe Quetelet and has been used by physicians and public
        health researchers ever since as a quick screening tool. It is not a diagnosis, but it can flag
        potential health risks worth discussing with a doctor.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">How Is BMI Calculated?</h2>
      <p className="text-slate-600 mb-4">
        The formula differs depending on which measurement system you use:
      </p>
      <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
        <li><strong>Imperial:</strong> BMI = 703 x weight (lbs) divided by height (in)<sup>2</sup></li>
        <li><strong>Metric:</strong> BMI = weight (kg) divided by height (m)<sup>2</sup></li>
      </ul>
      <p className="text-slate-600 mb-6">
        For example, a person who is 5&apos;9&quot; (69 inches) and weighs 160 lbs has a BMI of:
        703 x 160 divided by (69 x 69) = 23.6
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">What Do the Categories Mean?</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="px-4 py-2 text-left">BMI Range</th>
              <th className="px-4 py-2 text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="px-4 py-2">Below 18.5</td><td className="px-4 py-2">Underweight</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">18.5 to 24.9</td><td className="px-4 py-2">Normal weight</td></tr>
            <tr className="border-b"><td className="px-4 py-2">25.0 to 29.9</td><td className="px-4 py-2">Overweight</td></tr>
            <tr className="bg-slate-50"><td className="px-4 py-2">30.0 and above</td><td className="px-4 py-2">Obese</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Limitations of BMI</h2>
      <p className="text-slate-600 mb-4">
        BMI is a useful starting point, but it has real limitations:
      </p>
      <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
        <li>It does not measure body fat directly. A muscular athlete can have an &quot;overweight&quot; BMI despite low body fat.</li>
        <li>It does not account for age. Older adults naturally carry more fat relative to lean mass.</li>
        <li>It does not reflect fat distribution. Belly fat is riskier than fat stored in hips or thighs, but BMI cannot distinguish the two.</li>
        <li>It may be less accurate across ethnicities. People of Asian descent face elevated health risks at lower BMI thresholds.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Why BMI Still Matters</h2>
      <p className="text-slate-600 mb-6">
        Despite its limitations, BMI remains widely used because it is free, fast, and reasonably correlated
        with health outcomes at the population level. Studies consistently show that people with a BMI above 30
        have higher rates of type 2 diabetes, cardiovascular disease, certain cancers, and sleep apnea.
        If your BMI falls outside the normal range, it is a prompt to dig deeper - not a verdict.
      </p>

      <div className="bg-[#E8F8F7] border border-[#00B4A6] rounded-lg p-5">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">Calculate Your BMI Now</h3>
        <p className="text-slate-600 mb-3">
          Enter your height and weight in imperial or metric units for an instant result.
        </p>
        <Link
          href="/tools/bmi-calculator"
          className="inline-block bg-[#00B4A6] text-white font-semibold px-5 py-2 rounded hover:bg-[#009d90] transition-colors"
        >
          Use the BMI Calculator
        </Link>
      </div>
    </article>
  );
}
