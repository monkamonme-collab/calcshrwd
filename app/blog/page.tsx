import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on pay, taxes, GPA, loans, BMI, and tipping — written to help you understand the numbers that affect your everyday life.",
};

const articles = [
  {
    slug: "how-to-calculate-take-home-pay",
    title: "How to Calculate Your Take-Home Pay",
    description:
      "Federal taxes, state taxes, FICA, and 401(k) — understand every deduction on your pay stub and estimate your net paycheck.",
    readTime: "5 min read",
    tool: { label: "Paycheck Calculator", href: "/tools/paycheck-calculator" },
  },
  {
    slug: "what-is-bmi",
    title: "What Is BMI? Understanding Your Body Mass Index",
    description:
      "Learn how BMI is calculated, what the four categories mean, and where the metric falls short.",
    readTime: "4 min read",
    tool: { label: "BMI Calculator", href: "/tools/bmi-calculator" },
  },
  {
    slug: "how-to-calculate-gpa",
    title: "How to Calculate GPA: A Complete Guide",
    description:
      "Unweighted vs. weighted GPA, the 4.0 scale explained, and a worked example using credit hours.",
    readTime: "5 min read",
    tool: { label: "GPA Calculator", href: "/tools/gpa-calculator" },
  },
  {
    slug: "understanding-loan-interest",
    title: "Understanding Loan Interest: How It Really Works",
    description:
      "Simple vs. compound interest, amortization explained, and strategies to pay less interest over the life of a loan.",
    readTime: "5 min read",
    tool: { label: "Loan Calculator", href: "/tools/loan-calculator" },
  },
  {
    slug: "tipping-guide-usa",
    title: "Tipping Guide USA: How Much to Tip in Every Situation",
    description:
      "Standard tip percentages for restaurants, delivery, rideshare, hotels, salons, and more — all in one reference.",
    readTime: "4 min read",
    tool: { label: "Tip Calculator", href: "/tools/tip-calculator" },
  },
  {
    slug: "how-to-calculate-grade",
    title: "How to Calculate Your Grade",
    description:
      "Points-based, weighted categories, and simple average — three methods explained with worked examples, plus how to figure out what you need on the final.",
    readTime: "5 min read",
    tool: { label: "Grade Calculator", href: "/tools/grade-calculator" },
  },
  {
    slug: "how-to-calculate-percentage",
    title: "How to Calculate a Percentage",
    description:
      "The three core percentage formulas — percent of a number, percent change, and what percent one number is of another — with a quick-reference table and real-world tips.",
    readTime: "4 min read",
    tool: { label: "Percentage Calculator", href: "/tools/percentage-calculator" },
  },
  {
        slug: "word-count-guide",
        title: "Word Count Guide: Why It Matters and How to Use It",
        description:
                "Standard word count targets for essays, blog posts, emails, and more. Plus reading time estimates and tips to hit your target.",
        readTime: "4 min read",
        tool: { label: "Word Counter", href: "/tools/word-counter" },
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Blog</h1>
      <p className="text-slate-500 mb-10">
        Practical guides on the numbers that matter in everyday life.
      </p>

      <div className="space-y-6">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="border border-slate-100 rounded-xl p-6 bg-white hover:shadow-md transition-shadow"
          >
            <Link href={`/blog/${article.slug}`} className="group">
              <h2 className="text-lg font-bold text-[#1E3A5F] group-hover:text-[#00B4A6] transition-colors mb-1">
                {article.title}
              </h2>
            </Link>
            <p className="text-slate-400 text-xs mb-3">{article.readTime}</p>
            <p className="text-slate-600 text-sm mb-4">{article.description}</p>
            <div className="flex items-center justify-between">
              <Link
                href={`/blog/${article.slug}`}
                className="text-sm font-medium text-[#00B4A6] hover:underline"
              >
                Read article →
              </Link>
              <Link
                href={article.tool.href}
                className="text-xs bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1 rounded-full hover:bg-[#00B4A6] hover:text-white hover:border-[#00B4A6] transition-colors"
              >
                {article.tool.label}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
