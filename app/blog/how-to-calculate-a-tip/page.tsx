import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Calculate a Tip: Formula, Examples & Bill Splitting",
  description:
    "Learn how to calculate a tip with a simple formula, quick 15%, 18%, and 20% examples, and an easy way to split the total bill.",
  alternates: {
    canonical: "https://www.calcshrwd.com/blog/how-to-calculate-a-tip",
  },
};

const faqs = [
  {
    question: "How do I calculate a 20% tip quickly?",
    answer:
      "Move the decimal point in the bill one place to the left to find 10%, then double that amount. On a $48 bill, 10% is $4.80, so 20% is $9.60.",
  },
  {
    question: "Do I calculate a tip before or after tax?",
    answer:
      "Local customs vary. If you have a preference, use the subtotal or total that matches it; the important part is being clear when splitting a group bill.",
  },
  {
    question: "How do I split a bill with a tip?",
    answer:
      "Add the selected tip to the bill total, then divide by the number of people. If people ordered very different amounts, calculate each person’s share first and apply the same percentage to each share.",
  },
];

export default function HowToCalculateATipPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-600">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-slate-900">Blog</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">How to Calculate a Tip</span>
        </nav>

        <header>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Money basics</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            How to Calculate a Tip: A Simple Formula, Examples, and Bill-Splitting Guide
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Tip math is straightforward once you have one reliable formula. Use this guide for quick percentages,
            everyday restaurant bills, and splitting a total with friends.
          </p>
          <p className="mt-4 text-sm text-slate-500">Updated September 5, 2026 · 5 min read</p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1555243896-c709bfa0b564?w=1200&h=675&fit=crop&fm=webp"
          alt="Friends calculating and splitting a restaurant bill and tip"
          className="mt-8 aspect-video w-full rounded-2xl object-cover shadow-sm"
        />

        <div className="prose prose-slate mt-10 max-w-none prose-headings:tracking-tight prose-a:text-blue-700">
          <h2>The tip formula</h2>
          <p>
            The basic calculation is:
          </p>
          <p className="rounded-xl bg-slate-50 px-5 py-4 text-center text-lg font-semibold text-slate-900">
            Tip amount = bill amount × tip percentage
          </p>
          <p>
            Write the percentage as a decimal before multiplying. For example, 18% becomes 0.18 and 20% becomes 0.20.
            Add the tip amount back to the bill to get the final total.
          </p>

          <h2>15%, 18%, and 20% examples</h2>
          <p>
            Suppose the bill is $48.00. Here is what common percentage choices look like:
          </p>
          <ul>
            <li><strong>15%:</strong> $48 × 0.15 = $7.20 tip; final total $55.20.</li>
            <li><strong>18%:</strong> $48 × 0.18 = $8.64 tip; final total $56.64.</li>
            <li><strong>20%:</strong> $48 × 0.20 = $9.60 tip; final total $57.60.</li>
          </ul>
          <p>
            There is no universal percentage that fits every place or situation. Check the bill for an included service
            charge, and choose an amount that makes sense for your local customs and experience.
          </p>

          <h2>Fast mental math</h2>
          <p>
            To estimate 20%, find 10% and double it. On a $48 bill, moving the decimal one place left gives $4.80;
            doubling it gives $9.60. For 15%, take 10% and add half of that amount: $4.80 + $2.40 = $7.20.
          </p>
          <p>
            Rounding the bill first can make this easier. A $47.60 bill is close to $48, so a 20% tip is roughly $9.60.
            Use the exact total when you are ready to pay if precision matters.
          </p>

          <h2>How to split a bill with a tip</h2>
          <p>
            If everyone shared the bill evenly, add the tip before dividing. For a $96 bill with a 20% tip, the final
            total is $115.20. Four people would each pay $28.80.
          </p>
          <p>
            When orders are different, a fairer approach is to calculate each person’s food and drink subtotal, apply
            the same percentage to each subtotal, then add the results. This also makes it easy to see whether tax,
            a service charge, or a shared item needs its own agreement.
          </p>

          <h2>Use a calculator when the bill gets complicated</h2>
          <p>
            A calculator is especially helpful for custom percentages, group bills, and uneven shares. Our{" "}
            <Link href="/tools/tip-calculator">Tip Calculator</Link> shows the tip, total, and per-person amount
            together so you can check the numbers before paying.
          </p>

          <h2>Frequently asked questions</h2>
          {faqs.map((faq) => (
            <section key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </section>
          ))}

          <h2>A quick reminder</h2>
          <p>
            This guide explains the arithmetic, not a rule for how much anyone should tip. Policies, service charges,
            and expectations vary by venue and location. Review the bill and make the choice that feels appropriate.
          </p>
        </div>

        <aside className="mt-12 rounded-2xl bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-slate-900">Ready to check your total?</h2>
          <p className="mt-2 text-slate-700">
            Enter the bill, select a percentage, and see the final amount and group split in seconds.
          </p>
          <Link
            href="/tools/tip-calculator"
            className="mt-4 inline-flex rounded-lg bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800"
          >
            Open the Tip Calculator
          </Link>
        </aside>
      </article>
    </main>
  );
}
