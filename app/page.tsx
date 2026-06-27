import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CalcShrwd – Free Online Calculators for Everyday Life",
  description: "Smart, free calculators for Americans — tip, paycheck, GPA, BMI, loan, mortgage, calorie, age, and more.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CalcShrwd",
  "url": "https://www.calcshrwd.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "https://www.calcshrwd.com/tools/{search_term_string}" },
    "query-input": "required name=search_term_string"
  }
};

const tools = [
  { title: "Tip Calculator", description: "Calculate the right tip for any bill.", href: "/tools/tip-calculator", icon: "🍽️", img: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=200&fit=crop&fm=webp" },
  { title: "Paycheck Calculator", description: "Estimate your take-home pay after taxes.", href: "/tools/paycheck-calculator", icon: "💰", img: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=200&fit=crop&fm=webp" },
  { title: "Percentage Calculator", description: "Quickly find percentages and discounts.", href: "/tools/percentage-calculator", icon: "📊", img: "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?w=400&h=200&fit=crop&fm=webp" },
  { title: "GPA Calculator", description: "Calculate your GPA from letter grades.", href: "/tools/gpa-calculator", icon: "🎓", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=200&fit=crop&fm=webp" },
  { title: "Grade Calculator", description: "Find what grade you need to pass.", href: "/tools/grade-calculator", icon: "📚", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=200&fit=crop&fm=webp" },
  { title: "Loan Calculator", description: "Estimate monthly payments on any loan.", href: "/tools/loan-calculator", icon: "🏦", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=200&fit=crop&fm=webp" },
  { title: "Word Counter", description: "Count words, characters, and reading time.", href: "/tools/word-counter", icon: "✍️", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=200&fit=crop&fm=webp" },
  { title: "BMI Calculator", description: "Calculate your Body Mass Index.", href: "/tools/bmi-calculator", icon: "⚖️", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop&fm=webp" },
  { title: "Compound Interest", description: "See how your savings grow over time.", href: "/tools/compound-interest-calculator", icon: "📈", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop&fm=webp" },
  { title: "Age Calculator", description: "Find your exact age in years, months, days.", href: "/tools/age-calculator", icon: "🎂", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop&fm=webp" },
  { title: "Mortgage Calculator", description: "Calculate monthly payments and amortization.", href: "/tools/mortgage-calculator", icon: "🏠", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop&fm=webp" },
  { title: "Calorie Calculator", description: "Find your daily calorie needs (TDEE).", href: "/tools/calorie-calculator", icon: "🥗", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=200&fit=crop&fm=webp" },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <section className="bg-[#1E3A5F] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Smart Calculators for <span className="text-[#00B4A6]">Smarter Decisions</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Free, accurate online calculators for everyday American needs. No sign-up. Just answers.
          </p>
          <Link href="/tools" className="inline-block bg-[#00B4A6] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#009d91] transition-colors">
            Browse All Tools
          </Link>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 text-center">Popular Calculators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href}
              className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:border-[#00B4A6] transition-all group">
              <div className="w-full h-32 overflow-hidden bg-slate-100">
                <img
                  src={tool.img}
                  alt={tool.title}
                  width={400}
                  height={128}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="text-2xl mb-2">{tool.icon}</div>
                <h3 className="font-semibold text-[#1E3A5F] mb-1 group-hover:text-[#00B4A6] transition-colors">{tool.title}</h3>
                <p className="text-sm text-slate-500">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
