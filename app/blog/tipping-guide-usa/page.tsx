import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tipping Guide USA: Common Ranges for Everyday Services",
  description:
    "A practical US tipping reference for restaurants, delivery, hotels, rides, salons, and more. See common ranges, service-charge reminders, and a free calculator.",
  alternates: { canonical: "https://www.calcshrwd.com/blog/tipping-guide-usa" },
};

const tipData = [
  { service: "Sit-down restaurant", range: "Often 15–20%", notes: "Check the bill for an included service charge." },
  { service: "Fast casual / counter service", range: "Optional", notes: "Practices vary by location and service." },
  { service: "Bar", range: "Often $1–2 per drink or a percentage", notes: "Consider the service and local norms." },
  { service: "Coffee shop", range: "Optional", notes: "A tip jar does not necessarily mean a tip is expected." },
  { service: "Food delivery", range: "Often a percentage or flat amount", notes: "Distance, weather, and order size can affect the choice." },
  { service: "Rideshare or taxi", range: "Optional; common ranges vary", notes: "Review in-app prompts and local practice." },
  { service: "Hotel housekeeping", range: "Varies", notes: "Some guests leave a daily amount; policies differ." },
  { service: "Salon, barber, or nail service", range: "Often a percentage", notes: "Check whether a service fee is already included." },
  { service: "Mover or valet", range: "Varies", notes: "A flat amount is common in some locations." },
];

const faqs = [
  {
    question: "Is there one correct tip percentage in the US?",
    answer:
      "No. Tipping customs differ by service, city, and venue. The ranges in this guide are common references, not rules or legal requirements.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>
        {" / "}
        <span className="text-slate-600" aria-current="page">Tipping Guide USA</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">
        Tipping Guide USA: Common Ranges for Everyday Services
      </h1>
      <p className="text-slate-400 text-sm mb-8">Updated September 2026 · 4 min read</p>

      <p className="text-slate-600 mb-6">
        Tipping practices in the United States are shaped by local custom, venue policy, and the kind of service.
        This is a practical reference, not a mandatory rulebook. For step-by-step percentages, examples, and bill
        splitting, see <Link href="/blog/how-to-calculate-a-tip" className="text-[#008f85] underline">How to Calculate a Tip</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Common reference ranges</h2>
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

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Before you pay</h2>
      <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
        <li>Check whether gratuity, service, delivery, or resort fees are already included.</li>
        <li>Use the subtotal or final total that matches your preference; both are commonly used.</li>
        <li>For a group, agree whether shared items and fees are split evenly before calculating the tip.</li>
        <li>When in doubt, ask the venue how a listed charge is handled.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Quick tip math</h2>
      <p className="text-slate-600 mb-6">
        To estimate 20%, find 10% of the bill by moving the decimal one place left, then double it. For a 15%
        estimate, add half of the 10% amount. A calculator is useful for custom percentages, exact totals, and
        uneven group splits.
      </p>

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
        <h2 className="text-lg font-bold text-[#1E3A5F] mb-2">Calculate the exact total</h2>
        <p className="text-slate-600 mb-3">
          Enter the bill, choose a percentage, and see the tip, total, and per-person split together.
        </p>
        <Link href="/tools/tip-calculator" className="inline-block bg-[#00B4A6] text-white font-semibold px-5 py-2 rounded hover:bg-[#009d90] transition-colors">
          Use the Tip Calculator
        </Link>
      </div>
    </article>
  );
}
