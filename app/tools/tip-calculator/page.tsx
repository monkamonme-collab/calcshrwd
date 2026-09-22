"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const quickPercentages = [10, 15, 18, 20, 25];
const quickTipAmounts = [20, 25, 30, 40, 50, 75, 100, 150, 200];
const tablePercentages = [15, 18, 20, 25];

const calculatorFaqs = [
  { question: "Should I tip on the pre-tax subtotal or after-tax total?", answer: "Both approaches are used. This calculator lets you choose the amount to use, so the calculation matches your preference or local custom." },
  { question: "Can I use a custom tip percentage?", answer: "Yes. Enter any non-negative percentage. The quick buttons are only common starting points." },
  { question: "How does the calculator split a tip?", answer: "It calculates the selected tip and total first, then divides both amounts by the number of people you enter." },
];

function parseNonNegativeNumber(value: string) {
  if (value.trim() === "") return null;
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : null;
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
}

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState("18");
  const [people, setPeople] = useState("1");
  const [tax, setTax] = useState("");
  const [tipBase, setTipBase] = useState<"pre-tax" | "after-tax">("pre-tax");
  const [rounding, setRounding] = useState<"none" | "tip" | "total">("none");

  const calculation = useMemo(() => {
    const billAmount = parseNonNegativeNumber(bill);
    const percentage = parseNonNegativeNumber(tipPercentage);
    const taxAmount = tax.trim() === "" ? 0 : parseNonNegativeNumber(tax);
    const peopleAmount = Number(people);
    const validPeople = Number.isInteger(peopleAmount) && peopleAmount >= 1;
    const errors: string[] = [];
    if (bill.trim() !== "" && (billAmount === null || billAmount <= 0)) errors.push("Enter a bill amount greater than zero.");
    if (tipPercentage.trim() !== "" && percentage === null) errors.push("Enter a valid non-negative tip percentage.");
    if (tax.trim() !== "" && taxAmount === null) errors.push("Enter a valid non-negative tax amount.");
    if (people.trim() !== "" && !validPeople) errors.push("Enter a whole number of people, starting at 1.");
    if (billAmount === null || billAmount <= 0 || percentage === null || taxAmount === null || !validPeople) return { errors, result: null };

    const amountUsedForTip = tipBase === "after-tax" ? billAmount + taxAmount : billAmount;
    const unroundedTip = (amountUsedForTip * percentage) / 100;
    let tipAmount = unroundedTip;
    let totalAmount = billAmount + taxAmount + unroundedTip;
    if (rounding === "tip") {
      tipAmount = Math.round(unroundedTip);
      totalAmount = billAmount + taxAmount + tipAmount;
    }
    if (rounding === "total") {
      totalAmount = Math.ceil(totalAmount);
      tipAmount = totalAmount - billAmount - taxAmount;
    }
    return { errors, result: { tipAmount, totalAmount, tipPerPerson: tipAmount / peopleAmount, totalPerPerson: totalAmount / peopleAmount, rounded: rounding !== "none" } };
  }, [bill, people, rounding, tax, tipBase, tipPercentage]);

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: calculatorFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.calcshrwd.com/" }, { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.calcshrwd.com/tools" }, { "@type": "ListItem", position: 3, name: "Tip Calculator", item: "https://www.calcshrwd.com/tools/tip-calculator" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-3xl px-6 py-10">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400"><Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}<Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}<span className="text-slate-600" aria-current="page">Tip Calculator</span></nav>
        <h1 className="mb-2 text-3xl font-bold text-[#1E3A5F]">Tip Calculator</h1>
        <p className="mb-8 text-slate-500">Calculate a tip, add optional tax, split the bill, and choose whether to round the tip or final total.</p>

        <section aria-labelledby="calculator-heading" className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 id="calculator-heading" className="sr-only">Calculate a tip</h2>
          <div className="space-y-6">
            <div><label htmlFor="tip-bill-amount" className="mb-1 block text-sm font-medium text-slate-700">Bill amount</label><input id="tip-bill-amount" type="number" min="0" step="0.01" inputMode="decimal" value={bill} onChange={(event) => setBill(event.target.value)} placeholder="e.g. 45.00" aria-describedby="tip-validation" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-lg focus:border-[#00B4A6] focus:outline-none" /></div>
            <fieldset><legend className="mb-2 block text-sm font-medium text-slate-700">Tip percentage</legend><div className="mb-3 flex flex-wrap gap-2">{quickPercentages.map((percentage) => <button key={percentage} type="button" onClick={() => setTipPercentage(String(percentage))} aria-pressed={tipPercentage === String(percentage)} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00B4A6] ${tipPercentage === String(percentage) ? "bg-[#1E3A5F] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}>{percentage}%</button>)}</div><label htmlFor="tip-percentage" className="mb-1 block text-sm text-slate-600">Custom percentage</label><input id="tip-percentage" type="number" min="0" step="0.01" inputMode="decimal" value={tipPercentage} onChange={(event) => setTipPercentage(event.target.value)} aria-describedby="tip-validation" className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-[#00B4A6] focus:outline-none" /></fieldset>
            <div><label htmlFor="tip-people" className="mb-1 block text-sm font-medium text-slate-700">Number of people</label><input id="tip-people" type="number" min="1" step="1" inputMode="numeric" value={people} onChange={(event) => setPeople(event.target.value)} aria-describedby="tip-validation" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-lg focus:border-[#00B4A6] focus:outline-none" /></div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4"><label htmlFor="tip-tax" className="mb-1 block text-sm font-medium text-slate-700">Tax amount <span className="font-normal text-slate-500">(optional)</span></label><input id="tip-tax" type="number" min="0" step="0.01" inputMode="decimal" value={tax} onChange={(event) => setTax(event.target.value)} placeholder="e.g. 8.00" aria-describedby="tip-validation" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 focus:border-[#00B4A6] focus:outline-none" /><fieldset className="mt-4"><legend className="mb-2 text-sm font-medium text-slate-700">Calculate the tip on</legend><div className="flex flex-col gap-2 sm:flex-row sm:gap-5"><label className="flex items-center gap-2 text-sm text-slate-700"><input type="radio" name="tip-base" value="pre-tax" checked={tipBase === "pre-tax"} onChange={() => setTipBase("pre-tax")} />Pre-tax subtotal</label><label className="flex items-center gap-2 text-sm text-slate-700"><input type="radio" name="tip-base" value="after-tax" checked={tipBase === "after-tax"} onChange={() => setTipBase("after-tax")} />After-tax total</label></div></fieldset></div>
            <fieldset><legend className="mb-2 block text-sm font-medium text-slate-700">Rounding</legend><div className="grid gap-2 sm:grid-cols-3">{[["none", "No rounding"], ["tip", "Round tip"], ["total", "Round total up"]].map(([value, label]) => <label key={value} className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700"><input type="radio" name="tip-rounding" value={value} checked={rounding === value} onChange={() => setRounding(value as "none" | "tip" | "total")} />{label}</label>)}</div></fieldset>
          </div>
          <p id="tip-validation" role={calculation.errors.length ? "alert" : undefined} className="mt-4 text-sm text-rose-700">{calculation.errors.join(" ")}</p>
        </section>

        <section aria-live="polite" aria-atomic="true" className="mt-6 rounded-xl bg-[#1E3A5F] p-6 text-white">
          {calculation.result ? <>
            <h2 className="sr-only">Tip calculation results</h2>
            <div className="grid grid-cols-2 gap-5">
              <div><p className="text-sm text-slate-300">Tip amount</p><p className="text-2xl font-bold text-[#00B4A6]">{formatCurrency(calculation.result.tipAmount)}</p></div>
              <div><p className="text-sm text-slate-300">Total bill</p><p className="text-2xl font-bold">{formatCurrency(calculation.result.totalAmount)}</p></div>
              <div><p className="text-sm text-slate-300">Tip per person</p><p className="text-2xl font-bold text-[#00B4A6]">{formatCurrency(calculation.result.tipPerPerson)}</p></div>
              <div><p className="text-sm text-slate-300">Total per person</p><p className="text-2xl font-bold">{formatCurrency(calculation.result.totalPerPerson)}</p></div>
            </div>
            {Number(people) > 1 && <p className="mt-4 text-sm text-slate-300">Per-person figures are rounded for display, so they can differ from the total by a cent.</p>}
            {calculation.result.rounded && <p className="mt-2 text-sm text-slate-300">The displayed amounts reflect your selected rounding option.</p>}
          </> : <p className="text-slate-200">Enter a bill amount, tip percentage, and number of people to see your result.</p>}
        </section>

        <section className="mt-10 border-t border-slate-100 pt-8"><h2 className="mb-3 text-2xl font-bold text-[#1E3A5F]">How to use this tip calculator</h2><p className="text-slate-600">Enter the bill, choose a percentage, and add tax only when you need it. The calculator can apply your tip before or after tax, then split the result between any number of people.</p><p className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700"><strong>Simple formula:</strong> tip = bill × tip percentage. On an $80 bill, a 20% tip is $16.</p><p className="mt-4 text-slate-600">For mental-math methods and more worked examples, <Link href="/blog/how-to-calculate-a-tip" className="font-medium text-[#008f85] underline">learn the tip formula</Link>.</p></section>
        <section className="mt-10 border-t border-slate-100 pt-8"><h2 className="mb-4 text-2xl font-bold text-[#1E3A5F]">Quick Tip Table</h2><div className="overflow-x-auto rounded-xl border border-slate-200"><table className="w-full min-w-[560px] border-collapse text-sm"><caption className="sr-only">Tip amounts for common bill totals at 15, 18, 20, and 25 percent</caption><thead><tr className="bg-[#1E3A5F] text-white"><th scope="col" className="px-4 py-3 text-left">Bill</th>{tablePercentages.map((percentage) => <th key={percentage} scope="col" className="px-4 py-3 text-right">{percentage}% tip</th>)}</tr></thead><tbody>{quickTipAmounts.map((amount, index) => <tr key={amount} className={index % 2 ? "bg-slate-50" : "bg-white"}><th scope="row" className="px-4 py-3 text-left font-semibold text-slate-700">{formatCurrency(amount)}</th>{tablePercentages.map((percentage) => <td key={percentage} className="px-4 py-3 text-right text-slate-600">{formatCurrency((amount * percentage) / 100)}</td>)}</tr>)}</tbody></table></div></section>
        <section className="mt-10 border-t border-slate-100 pt-8"><h2 className="mb-3 text-2xl font-bold text-[#1E3A5F]">Common tipping percentages</h2><p className="text-slate-600">For a sit-down restaurant, 15%, 18%, and 20% are common reference points. Customs, service charges, and expectations vary by venue and location. For service-by-service context, <Link href="/blog/tipping-guide-usa" className="font-medium text-[#008f85] underline">see the U.S. tipping guide</Link>.</p></section>
        <section className="mt-10 border-t border-slate-100 pt-8" aria-labelledby="tip-faq-heading"><h2 id="tip-faq-heading" className="mb-5 text-2xl font-bold text-[#1E3A5F]">Frequently asked questions</h2><div className="space-y-3">{calculatorFaqs.map((faq) => <details key={faq.question} className="rounded-xl border border-slate-200"><summary className="cursor-pointer px-5 py-4 font-medium text-[#1E3A5F]">{faq.question}</summary><p className="border-t border-slate-100 bg-slate-50 px-5 py-4 text-sm text-slate-600">{faq.answer}</p></details>)}</div></section>
        <section className="mt-10 border-t border-slate-100 pt-8"><h2 className="mb-3 text-lg font-semibold text-[#1E3A5F]">Related resources</h2><div className="grid gap-3 sm:grid-cols-2"><Link href="/blog/how-to-calculate-a-tip" className="rounded-xl border border-slate-200 p-4 hover:border-[#00B4A6]"><span className="font-medium text-[#1E3A5F]">How to Calculate a Tip</span><span className="mt-1 block text-sm text-slate-500">Formula, mental math, and examples.</span></Link><Link href="/blog/tipping-guide-usa" className="rounded-xl border border-slate-200 p-4 hover:border-[#00B4A6]"><span className="font-medium text-[#1E3A5F]">Tipping Guide USA</span><span className="mt-1 block text-sm text-slate-500">Common ranges by service and context.</span></Link><Link href="/tools/percentage-calculator" className="rounded-xl border border-slate-200 p-4 hover:border-[#00B4A6]"><span className="font-medium text-[#1E3A5F]">Percentage Calculator</span><span className="mt-1 block text-sm text-slate-500">Calculate a percentage for any amount.</span></Link></div></section>
      </div>
    </main>
  );
}
