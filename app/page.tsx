import Link from "next/link";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CalcShrwd",
  "url": "https://www.calcshrwd.com",
  "description": "Free online calculators for everyday life — tip, paycheck, GPA, BMI, mortgage, loan, age, calorie, and more.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.calcshrwd.com/tools/{search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const tools = [
  { href: "/tools/tip-calculator", emoji: "💵", label: "Tip Calculator" },
  { href: "/tools/paycheck-calculator", emoji: "💼", label: "Paycheck Calculator" },
  { href: "/tools/gpa-calculator", emoji: "🎓", label: "GPA Calculator" },
  { href: "/tools/bmi-calculator", emoji: "⚖️", label: "BMI Calculator" },
  { href: "/tools/loan-calculator", emoji: "🏦", label: "Loan Calculator" },
  { href: "/tools/grade-calculator", emoji: "📝", label: "Grade Calculator" },
  { href: "/tools/percentage-calculator", emoji: "📊", label: "Percentage Calculator" },
  { href: "/tools/word-counter", emoji: "📄", label: "Word Counter" },
  { href: "/tools/compound-interest-calculator", emoji: "📈", label: "Compound Interest" },
  { href: "/tools/age-calculator", emoji: "🎂", label: "Age Calculator" },
  { href: "/tools/mortgage-calculator", emoji: "🏠", label: "Mortgage Calculator" },
  { href: "/tools/calorie-calculator", emoji: "🥗", label: "Calorie Calculator" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main className="min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free Online Calculators for Everyday Life
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Smart, free calculators for Americans — tip, paycheck, GPA, BMI, loan, mortgage, age, calorie, and more.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-3xl mb-2">{tool.emoji}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 text-center">
                  {tool.label}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CalcShrwd – Free Online Calculators for Everyday Life",
  description:
    "Smart, free calculators for Americans — tip, paycheck, GPA, BMI, loan, mortgage, calorie, age, and more. Get instant, accurate results.",
};

const tools = [
  { title: "Tip Calculator", description: "Calculate the right tip for any bill, split among friends.", href: "/tools/tip-calculator", icon: "🍽️" },
  { title: "Paycheck Calculator", description: "Estimate your take-home pay after federal and state taxes.", href: "/tools/paycheck-calculator", icon: "💰" },
  { title: "Percentage Calculator", description: "Quickly find percentages, discounts, and percent change.", href: "/tools/percentage-calculator", icon: "📊" },
  { title: "GPA Calculator", description: "Calculate your GPA from letter grades or percentages.", href: "/tools/gpa-calculator", icon: "🎓" },
  { title: "Grade Calculator", description: "Find out what grade you need to pass or hit your target.", href: "/tools/grade-calculator", icon: "📚" },
  { title: "Loan Calculator", description: "Estimate monthly payments and total interest on any loan.", href: "/tools/loan-calculator", icon: "🏦" },
  { title: "Word Counter", description: "Count words, characters, sentences, and reading time.", href: "/tools/word-counter", icon: "✍️" },
  { title: "BMI Calculator", description: "Calculate your Body Mass Index using US standard units.", href: "/tools/bmi-calculator", icon: "⚖️" },
  { title: "Compound Interest Calculator", description: "See how your money grows over time with compound interest and regular contributions.", href: "/tools/compound-interest-calculator", icon: "📈" },
  { title: "Age Calculator", description: "Find your exact age in years, months, days, and total days lived.", href: "/tools/age-calculator", icon: "🎂" },
  { title: "Mortgage Calculator", description: "Calculate monthly mortgage payments and see the full amortization schedule.", href: "/tools/mortgage-calculator", icon: "🏠" },
  { title: "Calorie Calculator", description: "Find your daily calorie needs (TDEE) based on age, weight, height, and activity.", href: "/tools/calorie-calculator", icon: "🥗" },
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
