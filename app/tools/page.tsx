import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Free Online Calculators & Converters",
  description: "Browse all free calculators and converters on CalcShrwd — tip, paycheck, GPA, BMI, loan, mortgage, calorie, unit converter, and more.",
};

const tools = [
  { title: "Tip Calculator", description: "Split the bill and calculate the right tip.", href: "/tools/tip-calculator", icon: "🍽️" },
  { title: "Paycheck Calculator", description: "Estimate take-home pay after taxes.", href: "/tools/paycheck-calculator", icon: "💰" },
  { title: "Percentage Calculator", description: "Find percentages, discounts, and changes.", href: "/tools/percentage-calculator", icon: "📊" },
  { title: "GPA Calculator", description: "Calculate GPA from letter grades.", href: "/tools/gpa-calculator", icon: "🎓" },
  { title: "Grade Calculator", description: "Find out what grade you need to pass.", href: "/tools/grade-calculator", icon: "📚" },
  { title: "Loan Calculator", description: "Estimate monthly payments and total interest.", href: "/tools/loan-calculator", icon: "🏦" },
  { title: "Mortgage Calculator", description: "Estimate monthly mortgage payments.", href: "/tools/mortgage-calculator", icon: "🏠" },
  { title: "Calorie Calculator", description: "Calculate your daily calorie needs.", href: "/tools/calorie-calculator", icon: "🥗" },
  { title: "BMI Calculator", description: "Calculate your Body Mass Index.", href: "/tools/bmi-calculator", icon: "⚖️" },
  { title: "Age Calculator", description: "Calculate exact age from a birthdate.", href: "/tools/age-calculator", icon: "🎂" },
  { title: "Word Counter", description: "Count words, characters, and reading time.", href: "/tools/word-counter", icon: "✍️" },
  { title: "Compound Interest Calculator", description: "See how your money grows with compound interest.", href: "/tools/compound-interest-calculator", icon: "📈" },
  { title: "Unit Converter", description: "Convert length, weight, temperature, volume, speed, and area.", href: "/tools/unit-converter", icon: "📐" },
];

export default function ToolsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">All Calculators & Converters</h1>
      <p className="text-slate-500 mb-10">Free, accurate tools for everyday needs.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href}
            className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md hover:border-[#00B4A6] transition-all group">
            <div className="text-3xl mb-3">{tool.icon}</div>
            <h2 className="font-semibold text-[#1E3A5F] mb-2 group-hover:text-[#00B4A6] transition-colors">{tool.title}</h2>
            <p className="text-sm text-slate-500">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
