import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is BMI? Understanding Your Body Mass Index | CalcShrwd",
  description:
    "BMI stands for Body Mass Index. Learn what the number means, how it is calculated, and why it is only one piece of the health picture. Calculate yours free.",
};

export default function WhatIsBMIArticle() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>{" / "}
        <span className="text-slate-600">What Is BMI?</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">
        What Is BMI? Understanding Your Body Mass Index
      </h1>
      <p className="text-slate-400 text-sm mb-8">Updated June 2026 Â· 4 min read</p>

      <p className="text-slate-600 mb-6">
        BMI â Body Mass Index â is a simple number calculated from your height and weight. It was developed
        in the 1830s by Belgian mathematician Adolphe Quetelet and has been used by physicians and public
        health researchers ever since as a quick screening tool. It is not a diagnosis, but it can flag
        potential health risks worth discussing with a doctor.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">How Is BMI Calculated?</h2>
      <p className="text-slate-600 mb-4">
        The formula differs depending on which measurement system you use:
      </p>
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 mb-6 font-mono text-sm text-slate-700 space-y-2">
        <p><strong>Imperial:</strong> BMI = 703 Ã weight (lbs) Ã· height (in)Â²</p>
        <p><strong>Metric:</strong> BMI = weight (kg) Ã· height (m)Â²</p>
      </div>
      <p className="text-slate-600 mb-6">
        For example, a person who is 5&apos;9&quot; (69 inches) and weighs 160 lbs has a BMI of:
        703 Ã 160 Ã· (69 Ã 69) = <strong>23.6</strong>
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">What Do the Categories Mean?</h2>
      <div className="grid grid-cols-2 gap-3 mb-8">
        {[
          { range: "Below 18.5", label: "Underweight", color: "bg-blue-50 text-blue-700 border-blue-100" },
          { range: "18.5 â 24.9", label: "Normal weight", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
          { range: "25.0 â 29.9", label: "Overweight", color: "bg-amber-50 text-amber-700 border-amber-100" },
          { range: "30.0 and above", label: "Obese", color: "bg-red-50 text-red-700 border-red-100" },
        ].map((c) => (
          <div key={c.label} className={`rounded-xl border p-4 text-sm ${c.color}`}>
            <p className="font-bold">{c.range}</p>
            <p>{c.label}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Limitations of BMI</h2>
      <p className="text-slate-600 mb-4">
        BMI is a useful starting point, but it has real limitations:
      </p>
      <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
        <li><strong>It does not measure body fat directly.</strong> A muscular athlete can have a &quot;overweight&quot; BMI despite low body fat.</li>
        <li><strong>It does not account for age.</strong> Older adults naturally carry more fat relative to lean mass, so BMI may underestimate their health risk.</li>
        <li><strong>It does not reflect fat distribution.</strong> Belly fat (visceral fat) is riskier than fat stored in the hips or thighs, but BMI cannot distinguish the two.</li>
        <li><strong>It may be less accurate across ethnicities.</strong> Research suggests that people of Asian descent face elevated health risks at lower BMI thresholds.</li>
      </ul>
      <p className="text-slate-600 mb-6">
        For a fuller picture, your doctor may also measure waist circumference, body fat percentage via DEXA
        scan or calipers, blood pressure, and blood lipid panels.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Why BMI Still Matters</h2>
      <p className="text-slate-600 mb-8">
        Despite its limitations, BMI remains widely used because it is free, fast, and reasonably correlated
        with health outcomes at the population level. Studies consistently show that people with a BMI above
        30 have higher rates of type 2 diabetes, cardiovascular disease, certain cancers, and sleep apnea.
        If your BMI falls outside the normal range, it is a prompt to dig deeper â not a verdict.
      </p>

      <div className="bg-[#1E3A5F] text-white rounded-xl p-6 text-center">
        <p className="text-lg font-semibold mb-2">Calculate Your BMI Now</p>
        <p className="text-slate-300 text-sm mb-4">
          Enter your height and weight in imperial or metric units for an instant result.
        </p>
        <Link href="/tools/bmi-calculator"
          className="inline-block bg-[#00B4A6] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#009d91] transition-colors">
          Use the BMI Calculator â
        </Link>
      </div>
    </article>
  );
}
