import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tipping Guide USA: How Much to Tip in Every Situation",
  description: "A complete US tipping guide covering restaurants, delivery, hotels, taxis, salons, and more. Includes quick mental math tricks.",
};

const tipData = [
  { service: "Sit-down restaurant", range: "18-20%", notes: "20% is standard for good service" },
  { service: "Fast casual / counter service", range: "0-10%", notes: "Optional; tip for exceptional service" },
  { service: "Buffet restaurant", range: "5-10%", notes: "Server refills drinks and clears plates" },
  { service: "Bar (drinks)", range: "$1-2 per drink or 15-20%", notes: "Higher for complex cocktails" },
  { service: "Coffee shop", range: "Optional $0.50-$1", notes: "Tip jar; not required" },
  { service: "Food delivery", range: "15-20% (min $3-5)", notes: "More for bad weather or large orders" },
  { service: "Rideshare (Uber/Lyft)", range: "10-20%", notes: "Tip in-app after the ride" },
  { service: "Taxi", range: "15-20%", notes: "Round up for short trips" },
  { service: "Hotel housekeeping", range: "$2-5 per night", notes: "Leave daily; staff may change each day" },
  { service: "Hotel bellhop / valet", range: "$2-5 per bag / per retrieval", notes: "Tip when receiving the car" },
  { service: "Hair salon", range: "15-20%", notes: "Tip the stylist directly" },
  { service: "Barber", range: "15-20%", notes: "Same as salon" },
  { service: "Nail salon", range: "15-20%", notes: "Tip each technician separately if different" },
  { service: "Massage therapist", range: "15-20%", notes: "Even at medical spas" },
  { service: "Tattoo artist", range: "15-20%", notes: "More for complex custom work" },
  { service: "Movers", range: "$20-50 per mover", notes: "More for long or difficult moves" },
  { service: "Food truck", range: "10-15%", notes: "Optional but appreciated" },
];

export default function TippingGuideUSAArticle() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>
        {" / "}
        <span className="text-slate-600">Tipping Guide USA</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">
        Tipping Guide USA: How Much to Tip in Every Situation
      </h1>
      <p className="text-slate-400 text-sm mb-8">Updated June 2026 - 5 min read</p>

      <p className="text-slate-600 mb-6">
        Tipping in the US is customary, not legally required - but in many industries it forms
        a significant part of workers&apos; income. This guide covers standard tip amounts for
        the most common service situations so you always know what is expected.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Tip Reference Table</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="px-4 py-2 text-left">Service</th>
              <th className="px-4 py-2 text-left">Typical Range</th>
              <th className="px-4 py-2 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            {tipData.map((row, i) => (
              <tr key={i} className={"border-b" + (i % 2 === 1 ? " bg-slate-50" : "")}>
                <td className="px-4 py-2 font-medium">{row.service}</td>
                <td className="px-4 py-2 text-[#1E3A5F] font-semibold">{row.range}</td>
                <td className="px-4 py-2 text-slate-500">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Quick Mental Math Tricks</h2>
      <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
        <li><strong>20% tip:</strong> Move the decimal one place left (10%), then double it. On a $45 bill: $4.50 x 2 = $9.00.</li>
        <li><strong>15% tip:</strong> Find 10% (move decimal left), then add half. On $60: $6.00 + $3.00 = $9.00.</li>
        <li><strong>Pre-tax or post-tax?</strong> It is customary to tip on the pre-tax subtotal, though many people tip on the total for simplicity.</li>
        <li><strong>Split bills:</strong> Tip on the full bill first, then divide. Splitting the tip before calculating can shortchange the server.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">When It Is OK Not to Tip</h2>
      <p className="text-slate-600 mb-6">
        Tipping is not expected for self-service purchases (grocery stores, gas stations, automated
        checkout kiosks), fast food counters where you order and pick up your own food, and
        professional services billed at full rate (doctors, lawyers, accountants). If a service
        charge is already included in the bill, you do not need to add more - though you can if
        the service was exceptional.
      </p>

      <div className="bg-[#E8F8F7] border border-[#00B4A6] rounded-lg p-5">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">Calculate the Exact Tip Amount</h3>
        <p className="text-slate-600 mb-3">
          Enter your bill total and tip percentage to split it any way you like.
        </p>
        <Link
          href="/tools/tip-calculator"
          className="inline-block bg-[#00B4A6] text-white font-semibold px-5 py-2 rounded hover:bg-[#009d90] transition-colors"
        >
          Use the Tip Calculator
        </Link>
      </div>
    </article>
  );
}
