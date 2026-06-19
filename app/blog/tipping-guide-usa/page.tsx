import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tipping Guide USA: How Much to Tip in Every Situation",
  description:
    "A complete American tipping guide â restaurants, bars, hotels, rideshare, delivery, salons, and more. Know the standard tip percentage for every service.",
};

export default function TippingGuideArticle() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>{" / "}
        <span className="text-slate-600">Tipping Guide USA</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">
        Tipping Guide USA: How Much to Tip in Every Situation
      </h1>
      <p className="text-slate-400 text-sm mb-8">Updated June 2026 Â· 4 min read</p>

      <p className="text-slate-600 mb-6">
        Tipping in the United States is a de facto part of the service economy. Many service workers
        earn a reduced hourly wage with the expectation that tips make up the difference. Knowing the
        standard tip for each situation helps you show appreciation appropriately â and avoid awkward
        moments at the payment screen.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Quick Reference: Standard Tip Percentages</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="px-4 py-2 text-left rounded-tl-lg">Service</th>
              <th className="px-4 py-2 text-left">Standard</th>
              <th className="px-4 py-2 text-left rounded-tr-lg">Exceptional</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Sit-down restaurant (server)", "18â20%", "25%+"],
              ["Bar (drinks)", "15â20% or $1â2/drink", "20%+"],
              ["Buffet or counter service", "10%", "15%"],
              ["Coffee shop / cafÃ©", "10â15%", "20%"],
              ["Food delivery", "15â20%", "20%+"],
              ["Rideshare (Uber, Lyft)", "10â15%", "20%"],
              ["Taxi", "15â20%", "20%+"],
              ["Hotel bellhop (per bag)", "$1â2/bag", "$3â5/bag"],
              ["Hotel housekeeping (per night)", "$2â5/night", "$5â10/night"],
              ["Hair salon / barber", "15â20%", "25%"],
              ["Nail salon", "15â20%", "20%+"],
              ["Massage therapist", "15â20%", "20%+"],
              ["Moving company", "5â10% of total bill", "15%"],
              ["Pizza delivery", "$3â5 flat or 15%", "20%"],
            ].map(([service, standard, exceptional], i) => (
              <tr key={service} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-4 py-2 text-slate-700">{service}</td>
                <td className="px-4 py-2 text-slate-600">{standard}</td>
                <td className="px-4 py-2 text-[#00B4A6] font-medium">{exceptional}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Restaurants: The Full Picture</h2>
      <p className="text-slate-600 mb-4">
        The standard tip at a full-service restaurant is <strong>18â20% of the pre-tax bill</strong>.
        Calculating on the pre-tax total is the traditional approach, though many people now tip on
        the full amount since the difference is small.
      </p>
      <p className="text-slate-600 mb-6">
        Tips are typically split in many restaurants. The server may share with busboys, food runners,
        and hosts â so a 20% tip may not all go to your waiter. This is a reason many diners tip on
        the higher end.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">Delivery Apps: Are You Tipping Enough?</h2>
      <p className="text-slate-600 mb-6">
        Food delivery apps typically suggest a dollar amount rather than a percentage â often $2â3 as the
        default. On a $50 order, that is just 4â6%. Most delivery workers prefer at least 15â20% or a
        $5 minimum. They typically use their own vehicle and pay for gas, so the base pay from the app
        alone is often very low.
      </p>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">When You Do Not Have to Tip</h2>
      <p className="text-slate-600 mb-4">
        Tipping is genuinely optional (though expected) in the following situations:
      </p>
      <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
        <li>Counter or fast-food service where you order and pick up your own food</li>
        <li>Self-checkout at a grocery store</li>
        <li>Buying a takeout order you carry out yourself (though 10% is appreciated)</li>
        <li>Professional services like doctors, lawyers, or accountants</li>
      </ul>

      <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-3">How to Calculate a Tip Quickly</h2>
      <p className="text-slate-600 mb-4">
        A reliable mental-math shortcut: move the decimal one place left to get 10%, then adjust.
      </p>
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 mb-8 text-sm text-slate-700">
        <p className="font-semibold mb-2">Bill: $47.50</p>
        <div className="space-y-1">
          <div className="flex justify-between"><span>10% of $47.50</span><span>= $4.75</span></div>
          <div className="flex justify-between"><span>15% (10% + half of 10%)</span><span>= $7.13</span></div>
          <div className="flex justify-between"><span>20% (10% Ã 2)</span><span>= $9.50</span></div>
          <div className="flex justify-between font-bold border-t border-slate-200 pt-2 mt-2">
            <span>Total at 20%</span><span className="text-[#00B4A6]">$57.00</span>
          </div>
        </div>
      </div>

      <div className="bg-[#1E3A5F] text-white rounded-xl p-6 text-center">
        <p className="text-lg font-semibold mb-2">Calculate Your Tip Instantly</p>
        <p className="text-slate-300 text-sm mb-4">
          Enter your bill, pick a percentage, and optionally split the total â done in seconds.
        </p>
        <Link href="/tools/tip-calculator"
          className="inline-block bg-[#00B4A6] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#009d91] transition-colors">
          Use the Tip Calculator â
        </Link>
      </div>
    </article>
  );
}
