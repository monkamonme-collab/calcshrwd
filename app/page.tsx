import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CalcShrwd – Free Online Calculators for Everyday Life",
  description:
    "Smart, free calculators for Americans — tip, paycheck, GPA, BMI, loan, percentage, and more. Get instant, accurate results.",
};

const tools = [
  { title: "Tip Calculator", description: "Calculate the right tip for any bill, split among friends.", href: "/tools/tip-calculator", icon: "\uD83C\uDF7D\uFE0F" },
  { title: "Paycheck Calculator", description: "Estimate your take-home pay after federal and state taxes.", href: "/tools/paycheck-calculator", icon: "\uD83D\uDCB0" },
  { title: "Percentage Calculator", description: "Quickly find percentages, discounts, and percent change.", href: "/tools/percentage-calculator", icon: "\uD83D\uDCCA" },
  { title: "GPA Calculator", description: "Calculate your GPA from letter grades or percentages.", href: "/tools/gpa-calculator", icon: "\uD83C\uDF93" },
  { title: "Grade Calculator", description: "Find out what grade you need to pass or hit your target.", href: "/tools/grade-calculator", icon: "\uD83D\uDCDA" },
  { title: "Loan Calculator", description: "Estimate monthly payments and total interest on any loan.", href: "/tools/loan-calculator", icon: "\uD83C\uDFE6" },
  { title: "Word Counter", description: "Count words, characters, sentences, and reading time.", href: "/tools/word-counter", icon: "\u270D\uFE0F" },
  { title: "BMI Calculator", description: "Calculate your Body Mass Index using US standard units.", href: "/tools/bmi-calculator", icon: "\u2696\uFE0F" },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-[#1E3A5F] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Smart Calculators for <span className="text-[#00B4A6]">Smarter Decisions</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Free, accurate online calculators built for everyday American needs. No sign-up. No ads bloating the page. Just answers.
          </p>
          <Link href="/tools" className="inline-block bg-[#00B4A6] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#009d91] transition-colors">
            Browse All Tools →
          </Link>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 text-center">Popular Calculators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href}
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md hover:border-[#00B4A6] transition-all group">
              <div className="text-3xl mb-3">{tool.icon}</div>
              <h3 className="font-semibold text-[#1E3A5F] mb-2 group-hover:text-[#00B4A6] transition-colors">{tool.title}</h3>
              <p className="text-sm text-slate-500">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-white border-y border-slate-100 py-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-500 text-sm">Trusted by Americans for quick, accurate calculations — from splitting the dinner bill to planning your next loan.</p>
        </div>
      </section>
    </>
  );
}
