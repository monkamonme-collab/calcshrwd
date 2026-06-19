import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tipping Guide USA: How Much to Tip in Every Situation | CalcShrwd",
  description:
    "Standard tip percentages for restaurants, delivery, rideshare, hotels, salons, and more -- all in one reference.",
};

export default function TippingGuideUsaPage() {
  const tipData = [
    { category: "Sit-down restaurant", range: "18-20%", notes: "15% for mediocre service; 20-25% for excellent" },
    { category: "Buffet restaurant", range: "10%", notes: "Staff still refills drinks and clears plates" },
    { category: "Takeout / counter service", range: "0-10%", notes: "Optional; tip if the order was complex" },
    { category: "Food delivery", range: "15-20%", notes: "Minimum $3-5 on small orders; tip in cash if possible" },
    { category: "Bartender", range: "$1-2 per drink", notes: "Or 15-20% of the tab at a sit-down bar" },
    { category: "Coffee shop", range: "0-15%", notes: "Optional for simple drip coffee; more for complex drinks" },
    { category: "Rideshare (Uber/Lyft)", range: "10-15%", notes: "Tip in the app; 20% for exceptional drivers" },
    { category: "Taxi", range: "15-20%", notes: "Round up at minimum; tip more for help with luggage" },
    { category: "Hotel housekeeping", range: "$3-5/night", notes: "Leave daily; staff may change each day" },
    { category: "Hotel bellhop / porter", range: "$2-5 per bag", notes: "More for heavy or numerous bags" },
    { category: "Hotel concierge", range: "$5-20", notes: "For booking hard-to-get reservations or special requests" },
    { category: "Hair salon", range: "15-20%", notes: "Tip the stylist; $3-5 for the shampoo assistant" },
    { category: "Nail salon", range: "15-20%", notes: "Cash is preferred so the technician keeps it directly" },
    { category: "Spa / massage", range: "15-20%", notes: "Skip if gratuity is already included in the bill" },
    { category: "Tattoo artist", range: "15-20%", notes: "On a large piece, 10% is acceptable" },
    { category: "Movers", range: "$20-50 per mover", notes: "For a full-day move; provide drinks and lunch too" },
    { category: "Grocery / furniture delivery", range: "$5-20", notes: "More for large or heavy items" },
  ];

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>
        {" / "}
        <span>Tipping Guide USA</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">
        Tipping Guide USA: How Much to Tip in Every Situation
      </h1>
      <p className="text-slate-400 text-sm mb-8">Updated June 2026 &middot; 4 min read</p>

      <p className="text-slate-700 mb-6">
        Tipping in the U.S. is expected in many service industries, but the right amount
        varies by context. This guide covers standard tip percentages and amounts for
        every common situation so you never have to guess.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-4">
        Quick Reference: Tip Amounts by Service
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="px-4 py-2 text-left">Service</th>
              <th className="px-4 py-2 text-left">Typical Tip</th>
              <th className="px-4 py-2 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            {tipData.map(({ category, range, notes }, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-4 py-2 border border-slate-200 font-medium">{category}</td>
                <td className="px-4 py-2 border border-slate-200 whitespace-nowrap">{range}</td>
                <td className="px-4 py-2 border border-slate-200 text-slate-500">{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Why Tipping Exists</h2>
      <p className="text-slate-700 mb-6">
        The U.S. minimum wage for tipped workers is as low as $2.13 per hour federally
        (though many states are higher). Tips make up the bulk of income for servers,
        bartenders, and many other service workers. When you tip well, you are directly
        supplementing take-home pay that employers are not required to provide.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">
        How to Calculate a Tip Quickly
      </h2>
      <p className="text-slate-700 mb-4">
        Two easy mental-math tricks:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
        <li>
          <strong>20% tip:</strong> Move the decimal one place left to get 10%, then
          double it. A $48 bill: 10% = $4.80, doubled = <strong>$9.60</strong>.
        </li>
        <li>
          <strong>15% tip:</strong> Find 10% (move the decimal), then add half of that
          for the remaining 5%. A $48 bill: $4.80 + $2.40 = <strong>$7.20</strong>.
        </li>
      </ul>
      <p className="text-slate-700 mb-6">
        For splitting among multiple people, divide the total bill (including tip) by
        the number of diners. If six people share a $180 bill with a 20% tip,
        the total is $216 and each person owes $36.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">When Not to Tip</h2>
      <p className="text-slate-700 mb-6">
        It is appropriate to skip the tip (or reduce it) when gratuity is already
        included in the bill -- look for &quot;service charge&quot; or &quot;gratuity included&quot; in the
        total. In self-serve situations where no service was provided, tipping is truly
        optional. You are never obligated to tip for rude or negligent service, though
        speaking to a manager is often more effective.
      </p>

      <div className="mt-10 bg-[#1E3A5F] text-white rounded-xl p-6 text-center">
        <h3 className="text-lg font-bold mb-2">Calculate Your Tip Instantly</h3>
        <p className="text-slate-300 text-sm mb-4">
          Enter your bill, pick a percentage, and optionally split the total -- done
          in seconds.
        </p>
        <Link
          href="/tools/tip-calculator"
          className="inline-block bg-[#00B4A6] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#009e91] transition-colors"
        >
          Use the Tip Calculator &#8594;
        </Link>
      </div>
    </main>
  );
}
