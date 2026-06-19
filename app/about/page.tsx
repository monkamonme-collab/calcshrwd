import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | CalcShrwd",
  description:
    "CalcShrwd builds free, fast calculators and practical guides for everyday financial and academic decisions.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-6">About CalcShrwd</h1>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">Our Mission</h2>
        <p className="text-slate-700 mb-4">
          CalcShrwd exists to make everyday math effortless. Whether you are splitting
          a restaurant bill, estimating your paycheck, planning a loan, or checking
          your GPA, you deserve a tool that gives you an accurate answer instantly --
          without dark patterns or paywalls.
        </p>
        <p className="text-slate-700">
          We build free, fast, privacy-respecting tools supported by non-intrusive
          display advertising. No login required. No data stored.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">Our Tools</h2>
        <ul className="space-y-2 text-slate-700">
          {[
            { label: "Tip Calculator", href: "/tools/tip-calculator" },
            { label: "Paycheck Calculator", href: "/tools/paycheck-calculator" },
            { label: "GPA Calculator", href: "/tools/gpa-calculator" },
            { label: "BMI Calculator", href: "/tools/bmi-calculator" },
            { label: "Loan Calculator", href: "/tools/loan-calculator" },
            { label: "Grade Calculator", href: "/tools/grade-calculator" },
            { label: "Percentage Calculator", href: "/tools/percentage-calculator" },
            { label: "Word Counter", href: "/tools/word-counter" },
          ].map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className="text-[#00B4A6] hover:underline font-medium">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">Our Commitment</h2>
        <p className="text-slate-700 mb-4">
          Every calculator on CalcShrwd is built and reviewed for accuracy. Our blog
          articles are written to explain the math behind the tools. When we find an
          error or outdated information, we fix it.
        </p>
        <p className="text-slate-700">
          We are a small independent project. Feedback from users -- bug reports,
          suggestions, or corrections -- is genuinely appreciated and read.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-3">Contact</h2>
        <p className="text-slate-700">
          Questions or feedback? Reach us at{" "}
          <a
            href="mailto:monkamonme@gmail.com"
            className="text-[#00B4A6] hover:underline"
          >
            monkamonme@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
