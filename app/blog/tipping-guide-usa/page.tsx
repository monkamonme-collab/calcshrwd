import type { Metadata } from "next";
import Link from "next/link";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Tipping Guide USA: How Much to Tip by Service",
  description:
    "A practical U.S. tipping guide for restaurants, bars, delivery, hotels, taxis, rideshares, salons, and more, with common reference ranges.",
  alternates: { canonical: "https://www.calcshrwd.com/blog/tipping-guide-usa" },
};

const tipData = [
  { service: "Sit-down restaurant", range: "15–20%", notes: "A common reference is the pre-tax bill; check for a service charge." },
  { service: "Bar", range: "$1–2 per drink or 15–20%", notes: "The tab percentage can be easier for several drinks." },
  { service: "Food delivery", range: "10–15% or $2–5", notes: "Order size and delivery conditions can affect the choice." },
  { service: "Coffee or counter service", range: "Optional", notes: "A tip jar or payment prompt does not make a tip mandatory." },
  { service: "Taxi or rideshare", range: "15–20% for taxis; rideshare varies", notes: "Check the app prompt and local practice for rideshare." },
  { service: "Hotel housekeeping", range: "$2–5 per day", notes: "Leaving it daily can help when staff changes." },
  { service: "Bellhop", range: "$2 for the first bag; $1 additional", notes: "A per-bag reference is common for luggage assistance." },
  { service: "Valet", range: "$2–5", notes: "A flat amount is a common reference when the car is returned." },
  { service: "Hair, salon, or nail service", range: "15–20%", notes: "Ask whether it should be split among people who served you." },
];

const faqs = [
  {
    question: "Is there one correct tip percentage in the US?",
    answer:
      "No. Tipping customs differ by service, city, and venue. The ranges in this guide are common references, not rules or legal requirements.",
  },
  {
    question: "What is the difference between a service charge and a tip?",
    answer:
      "A service charge or automatic gratuity is a listed charge on the bill. Check what it covers before deciding whether to add an optional additional tip.",
  },
  {
    question: "Should I tip before or after tax?",
    answer:
      "Both approaches are used. If you want to follow a pre-tax subtotal, use it consistently; if you use the total for simplicity, the difference is usually modest.",
  },
  {
    question: "What should I check before adding a tip?",
    answer:
      "Look for an automatic gratuity or service charge, especially for groups. Read the bill carefully before adding an additional amount.",
  },
];

export default function TippingGuideUSAArticle() {
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
    <article className="max-w-2xl mx-auto px-6 py-10">
      <ArticleJsonLd headline="Tipping Guide USA: How Much to Tip by Service" description="A practical U.S. tipping guide for restaurants, delivery, hotels, rides, salons, and more." url="https://www.calcshrwd.com/blog/tipping-guide-usa" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>
        {" / "}
        <span className="text-slate-600" aria-current="page">Tipping Guide USA</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">
        Tipping Guide USA: How Much to Tip by Service
      </h1>
      <p className="text-slate-400 text-sm mb-8">Updated September 2026 · 4 min read</p>

      <p className="text-slate-600 mb-6">
        Tipping practices in the United States are shaped by local custom, venue policy, and the kind of service.
        This is a practical reference, not a mandatory rulebook. For the arithmetic behind any percentage, examples,
        and mental math, <Link href="/blog/how-to-calculate-a-tip" className="text-[#008f85] underline">learn how to calculate a tip</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Common U.S. tipping reference ranges</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="px-4 py-2 text-left">Service</th>
              <th className="px-4 py-2 text-left">Common reference</th>
              <th className="px-4 py-2 text-left">Keep in mind</th>
            </tr>
          </thead>
          <tbody>
            {tipData.map((row, i) => (
              <tr key={row.service} className={"border-b" + (i % 2 ? " bg-slate-50" : "")}>
                <td className="px-4 py-2 font-medium">{row.service}</td>
                <td className="px-4 py-2 text-[#1E3A5F] font-semibold">{row.range}</td>
                <td className="px-4 py-2 text-slate-500">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="-mt-4 mb-8 text-sm text-slate-500">Reference: <a className="underline hover:text-[#00B4A6]" href="https://emilypost.com/advice/general-tipping-guide">Emily Post&apos;s general tipping guide</a>. These are common references, not legal requirements; customs and service charges vary by location and situation.</p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Before you pay</h2>
      <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
        <li>Check whether gratuity, service, delivery, or resort fees are already included.</li>
        <li>Decide whether you are tipping on the pre-tax subtotal or the after-tax total.</li>
        <li>For a group, agree whether shared items and fees are split evenly before calculating an optional tip.</li>
        <li>When in doubt, ask the venue how a listed charge is handled.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">When a range may differ</h2>
      <p className="text-slate-600 mb-6">The service, location, included charges, and the way a business handles tips can all affect the choice. If a service charge or automatic gratuity appears on the bill, read the description before adding another amount.</p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Frequently asked questions</h2>
      <div className="text-slate-600 mb-8">
        {faqs.map((faq) => (
          <section key={faq.question} className="mb-5">
            <h3 className="font-bold text-[#1E3A5F]">{faq.question}</h3>
            <p>{faq.answer}</p>
          </section>
        ))}
      </div>

      <div className="bg-[#E8F8F7] border border-[#00B4A6] rounded-lg p-5">
          <h2 className="text-lg font-bold text-[#1E3A5F] mb-2">Calculate your tip</h2>
        <p className="text-slate-600 mb-3">
          Enter the bill, choose a percentage, and see the tip, total, and per-person split together.
        </p>
        <Link href="/tools/tip-calculator" className="inline-block bg-[#00B4A6] text-white font-semibold px-5 py-2 rounded hover:bg-[#009d90] transition-colors">
          Calculate your tip
        </Link>
      </div>
    </article>
  );
}
