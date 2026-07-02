import Link from "next/link";

export const metadata = {
  title: "How to Calculate BMI Accurately | calcshrwd",
  description:
    "Learn how to calculate BMI accurately using metric and imperial formulas, understand BMI categories, limitations, and when BMI doesn't tell the whole story.",
  alternates: {
    canonical: "https://www.calcshrwd.com/blog/how-to-calculate-bmi-accurately",
  },
};

export default function HowToCalculateBMIAccurately() {
  const faqItems = [
    {
      q: "What is the BMI formula?",
      a: "The metric BMI formula is: BMI = weight (kg) ÷ height (m)². For imperial units: BMI = [weight (lb) ÷ height (in)²] × 703. Both formulas give identical results when you convert units properly.",
    },
    {
      q: "What is a healthy BMI range?",
      a: "For adults, a BMI between 18.5 and 24.9 is considered healthy weight. Below 18.5 is underweight, 25.0–29.9 is overweight, and 30.0 or above is classified as obese. These thresholds were established by the World Health Organization.",
    },
    {
      q: "Is BMI accurate for everyone?",
      a: "BMI is a population-level screening tool, not a precise individual health measure. It tends to overestimate body fat in very muscular people and underestimate it in those who have lost muscle mass (like older adults). Ethnicity also affects accuracy — Asian populations face higher health risks at lower BMI thresholds.",
    },
    {
      q: "How do I calculate BMI in pounds and inches?",
      a: "Use this formula: BMI = (weight in pounds / height in inches²) × 703. For example, if you weigh 160 lbs and are 5'7\" (67 inches): BMI = (160 / 67²) × 703 = (160 / 4489) × 703 ≈ 25.1.",
    },
    {
      q: "What is BMI for children and teens?",
      a: "For children aged 2–19, BMI is interpreted using age- and sex-specific growth charts called BMI-for-age percentiles. A child at the 5th–84th percentile is healthy weight, 85th–94th is overweight, and 95th or above is obese. The same number means different things at different ages.",
    },
    {
      q: "Can I have a normal BMI but still be unhealthy?",
      a: "Yes. People with a normal BMI can still have excess visceral fat (fat around organs), which significantly raises cardiovascular risk. This is sometimes called 'normal weight obesity' or 'skinny fat.' Waist circumference, body fat percentage, and metabolic markers give a more complete picture.",
    },
    {
      q: "What waist circumference indicates health risk?",
      a: "For women, a waist circumference over 35 inches (88 cm) indicates elevated cardiovascular risk. For men, the threshold is 40 inches (102 cm). These measurements predict metabolic risk independently of BMI.",
    },
    {
      q: "Should I use BMI to track weight loss progress?",
      a: "BMI can be useful for tracking general trends over time, but body weight and waist circumference are often more practical. When you build muscle while losing fat, your BMI may not change much even as your body composition improves significantly.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.calcshrwd.com/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.calcshrwd.com/blog" },
              {
                "@type": "ListItem",
                position: 3,
                name: "How to Calculate BMI Accurately",
                item: "https://www.calcshrwd.com/blog/how-to-calculate-bmi-accurately",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Calculate BMI Accurately",
            description:
              "A complete guide to calculating BMI using metric and imperial formulas, understanding BMI categories, limitations, and complementary health measurements.",
            url: "https://www.calcshrwd.com/blog/how-to-calculate-bmi-accurately",
            author: { "@type": "Organization", name: "calcshrwd" },
            publisher: {
              "@type": "Organization",
              name: "calcshrwd",
              url: "https://www.calcshrwd.com",
            },
            datePublished: "2024-11-01",
            dateModified: "2024-11-01",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-400 mb-6">
          <Link href="/" className="hover:text-[#00B4A6]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-600">How to Calculate BMI Accurately</span>
        </nav>

        {/* Header */}
        <h1 className="text-3xl font-bold text-[#1E3A5F] mb-4">
          How to Calculate BMI Accurately
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          Updated November 2024 · 9 min read
        </p>

        {/* Intro */}
        <p className="text-slate-700 mb-6 leading-relaxed">
          Body Mass Index (BMI) is one of the most widely used health screening tools in the world
          — and one of the most misunderstood. Doctors, researchers, and insurance companies use
          it daily, yet most people have never actually worked through the math. This guide walks
          you through the exact formula, explains what your result means, shows where BMI falls
          short, and tells you what to measure alongside it.
        </p>

        {/* CTA box */}
        <div className="bg-[#E8F7F6] border border-[#00B4A6] rounded-xl p-5 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-semibold text-[#1E3A5F]">Skip the math — use the calculator</p>
            <p className="text-sm text-slate-600 mt-1">
              Get your BMI instantly in metric or imperial units.
            </p>
          </div>
          <Link
            href="/tools/bmi-calculator"
            className="bg-[#00B4A6] text-white px-5 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap hover:bg-[#009e91] transition-colors text-center"
          >
            Calculate My BMI →
          </Link>
        </div>

        {/* Section 1: The Formula */}
        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">
          The BMI Formula (Metric and Imperial)
        </h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          BMI was developed in the 1830s by Belgian mathematician Adolphe Quetelet and is
          remarkably simple: weight divided by height squared. The formula varies only in which
          units you use.
        </p>

        {/* Formula block */}
        <div className="bg-slate-900 rounded-xl p-5 mb-6 font-mono text-sm">
          <p className="text-green-400 mb-1">{"// Metric (kg and meters)"}</p>
          <p className="text-white mb-4">{"BMI = weight (kg) ÷ height (m)²"}</p>
          <p className="text-green-400 mb-1">{"// Imperial (pounds and inches)"}</p>
          <p className="text-white">{"BMI = [weight (lb) ÷ height (in)²] × 703"}</p>
        </div>

        <p className="text-slate-700 mb-6 leading-relaxed">
          The 703 conversion factor accounts for the difference between kilograms/meters and
          pounds/inches. Both formulas yield the same BMI when you input equivalent measurements.
        </p>

        {/* Worked Example: Metric */}
        <h3 className="text-xl font-semibold text-[#1E3A5F] mt-8 mb-3">
          Step-by-Step Example (Metric)
        </h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Suppose you weigh <strong>75 kg</strong> and are <strong>1.75 m</strong> tall.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-6">
          <li>Square your height: 1.75 × 1.75 = 3.0625</li>
          <li>Divide weight by result: 75 ÷ 3.0625 = <strong>24.5</strong></li>
          <li>BMI = 24.5 → falls in the <strong>Normal Weight</strong> category</li>
        </ol>

        {/* Worked Example: Imperial */}
        <h3 className="text-xl font-semibold text-[#1E3A5F] mt-8 mb-3">
          Step-by-Step Example (Imperial)
        </h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Suppose you weigh <strong>160 lbs</strong> and are <strong>5'7"</strong> (67 inches) tall.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-6">
          <li>Square your height in inches: 67 × 67 = 4,489</li>
          <li>Divide weight: 160 ÷ 4,489 = 0.03565</li>
          <li>Multiply by 703: 0.03565 × 703 = <strong>25.1</strong></li>
          <li>BMI = 25.1 → just above the <strong>Overweight</strong> threshold</li>
        </ol>

        {/* Section 2: BMI Categories */}
        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">
          BMI Categories for Adults (WHO Standard)
        </h2>
        <p className="text-slate-700 mb-5 leading-relaxed">
          The World Health Organization defines the following BMI categories for adults aged 20
          and older. These apply regardless of age or sex for adults.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1E3A5F] text-white">
                <th className="px-4 py-3 text-left font-semibold">BMI Range</th>
                <th className="px-4 py-3 text-left font-semibold">Category</th>
                <th className="px-4 py-3 text-left font-semibold">Health Risk</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Below 18.5", "Underweight", "Increased (malnutrition, bone loss)"],
                ["18.5 – 24.9", "Normal Weight", "Minimal"],
                ["25.0 – 29.9", "Overweight", "Increased"],
                ["30.0 – 34.9", "Obese Class I", "High"],
                ["35.0 – 39.9", "Obese Class II", "Very High"],
                ["40.0 and above", "Obese Class III (Severe)", "Extremely High"],
              ].map(([range, cat, risk], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 border-b border-slate-200 font-mono font-medium text-[#1E3A5F]">{range}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{cat}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600">{risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Asian-American thresholds */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-amber-800 mb-2">⚠️ Note on Ethnicity-Adjusted Thresholds</p>
          <p className="text-sm text-amber-700 leading-relaxed">
            Research shows that people of South Asian, East Asian, and Southeast Asian descent face
            higher cardiometabolic risk at lower BMI values. Several health organizations recommend
            screening for health risks starting at BMI ≥ 23.0 (overweight) and ≥ 27.5 (obese) for
            these populations rather than the standard 25 and 30 thresholds.
          </p>
        </div>

        {/* Section 3: BMI by Height/Weight Table */}
        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">
          BMI Reference Table by Height and Weight
        </h2>
        <p className="text-slate-700 mb-5 leading-relaxed">
          The table below shows example BMI values across common heights and weights. Use it as a
          quick reference before or after using the calculator.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1E3A5F] text-white">
                <th className="px-4 py-3 text-left font-semibold">Height</th>
                <th className="px-4 py-3 text-left font-semibold">120 lbs</th>
                <th className="px-4 py-3 text-left font-semibold">150 lbs</th>
                <th className="px-4 py-3 text-left font-semibold">180 lbs</th>
                <th className="px-4 py-3 text-left font-semibold">210 lbs</th>
                <th className="px-4 py-3 text-left font-semibold">240 lbs</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["5'0\" (60 in)", "23.4", "29.3", "35.2", "41.0", "46.9"],
                ["5'3\" (63 in)", "21.3", "26.6", "31.9", "37.2", "42.5"],
                ["5'5\" (65 in)", "20.0", "25.0", "30.0", "35.0", "40.0"],
                ["5'7\" (67 in)", "18.8", "23.5", "28.2", "32.9", "37.6"],
                ["5'10\" (70 in)", "17.2", "21.5", "25.8", "30.2", "34.5"],
                ["6'0\" (72 in)", "16.3", "20.3", "24.4", "28.5", "32.6"],
                ["6'2\" (74 in)", "15.5", "19.3", "23.1", "27.0", "30.9"],
              ].map(([h, ...vals], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 border-b border-slate-200 font-medium text-slate-700">{h}</td>
                  {vals.map((v, j) => {
                    const num = parseFloat(v);
                    const color =
                      num < 18.5
                        ? "text-blue-600"
                        : num < 25
                        ? "text-green-600"
                        : num < 30
                        ? "text-amber-600"
                        : "text-red-600";
                    return (
                      <td key={j} className={`px-4 py-3 border-b border-slate-200 font-mono font-semibold ${color}`}>
                        {v}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-slate-400 mt-2">
            Color key: <span className="text-blue-600 font-medium">blue</span> = underweight ·{" "}
            <span className="text-green-600 font-medium">green</span> = normal ·{" "}
            <span className="text-amber-600 font-medium">amber</span> = overweight ·{" "}
            <span className="text-red-600 font-medium">red</span> = obese
          </p>
        </div>

        {/* Section 4: BMI for Children */}
        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">
          BMI for Children and Teens (Ages 2–19)
        </h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          The BMI formula is the same for children as for adults — but the interpretation is
          completely different. Instead of fixed cutoffs, children's BMI is compared against CDC
          growth charts using <strong>percentiles</strong> that account for both age and sex, since
          normal body fat changes dramatically as children grow.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1E3A5F] text-white">
                <th className="px-4 py-3 text-left font-semibold">Percentile Range</th>
                <th className="px-4 py-3 text-left font-semibold">Weight Category</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Below 5th percentile", "Underweight"],
                ["5th to less than 85th percentile", "Healthy Weight"],
                ["85th to less than 95th percentile", "Overweight"],
                ["95th percentile and above", "Obese"],
              ].map(([range, cat], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 border-b border-slate-200 font-mono font-medium text-[#1E3A5F]">{range}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{cat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-slate-700 mb-6 leading-relaxed">
          A 10-year-old with a BMI of 22 might be at the 95th percentile (obese for their age),
          while an adult with the same BMI would be in the healthy-weight range. Never interpret
          a child's BMI using adult cutoffs.
        </p>

        {/* Section 5: Limitations */}
        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">
          5 Key Limitations of BMI You Should Know
        </h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          BMI was designed as a tool for studying populations, not diagnosing individual health.
          These five limitations matter when you're interpreting your own number.
        </p>

        <div className="space-y-4 mb-8">
          {[
            {
              title: "1. It Can't Distinguish Fat from Muscle",
              body: "BMI measures weight relative to height, not body composition. A professional athlete and a sedentary person of the same height and weight will have identical BMIs, even if their body fat percentages differ by 20 or 30 percentage points. This is why BMI often categorizes athletes as overweight or even obese.",
            },
            {
              title: "2. It Ignores Fat Distribution",
              body: "Where you carry fat matters enormously. Visceral fat stored around the abdominal organs raises cardiovascular and metabolic risk far more than subcutaneous fat stored under the skin. Two people with the same BMI can have very different risk profiles depending on their fat distribution.",
            },
            {
              title: "3. It's Less Accurate for Older Adults",
              body: "As people age, they typically lose muscle mass and gain fat — a process called sarcopenic obesity. An older adult may have a normal BMI while having high body fat and very low muscle, which is associated with frailty and poor metabolic health. BMI won't catch this.",
            },
            {
              title: "4. Sex Differences Aren't Captured",
              body: "Women naturally carry more body fat than men at the same BMI. A BMI of 22 represents a meaningfully different body composition depending on whether the person is male or female, yet the same cutoffs apply to both.",
            },
            {
              title: "5. It Wasn't Designed for All Ethnicities",
              body: "The original BMI thresholds were derived from studies of European populations. People of Asian descent tend to have higher body fat percentages and greater cardiometabolic risk at lower BMI values. The 25/30 cutoffs may not be appropriate screening thresholds for everyone.",
            },
          ].map(({ title, body }, i) => (
            <div key={i} className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-[#1E3A5F] mb-2">{title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Section 6: What to Measure Instead */}
        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">
          What to Measure Alongside BMI
        </h2>
        <p className="text-slate-700 mb-5 leading-relaxed">
          BMI is a useful starting point, but combining it with additional measurements gives a
          much more accurate picture of your health.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1E3A5F] text-white">
                <th className="px-4 py-3 text-left font-semibold">Measurement</th>
                <th className="px-4 py-3 text-left font-semibold">What It Tells You</th>
                <th className="px-4 py-3 text-left font-semibold">Risk Threshold</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Waist Circumference", "Abdominal (visceral) fat — most dangerous type", "Men > 40 in (102 cm); Women > 35 in (88 cm)"],
                ["Waist-to-Hip Ratio", "Fat distribution pattern", "Men > 0.90; Women > 0.85"],
                ["Body Fat Percentage", "Actual fat vs. lean mass", "Varies by age and sex; ideally 10–20% (men), 18–28% (women)"],
                ["Fasting Blood Glucose", "Insulin resistance / prediabetes", "> 100 mg/dL = prediabetes; > 126 = diabetes"],
                ["Blood Pressure", "Cardiovascular strain", "> 130/80 mm Hg = elevated"],
                ["Resting Heart Rate", "Cardiovascular fitness", "> 100 bpm (tachycardia) warrants investigation"],
              ].map(([m, what, threshold], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 border-b border-slate-200 font-medium text-[#1E3A5F]">{m}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{what}</td>
                  <td className="px-4 py-3 border-b border-slate-200 text-slate-600 text-xs">{threshold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-slate-700 mb-8 leading-relaxed">
          In clinical practice, a BMI reading is typically followed by blood pressure measurement,
          fasting glucose, and lipid panels to build a complete metabolic picture. If your BMI is
          in a borderline range, these additional metrics will tell you far more about your
          actual health risk than the BMI number alone.
        </p>

        {/* Section 7: Accurate BMI Tips */}
        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">
          How to Measure BMI as Accurately as Possible
        </h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          The formula itself is exact — but the inputs determine your result's accuracy. Here's
          how to get the most precise BMI calculation:
        </p>

        <ul className="space-y-3 mb-8 text-slate-700">
          {[
            "Weigh yourself first thing in the morning, after using the bathroom, without clothing or shoes. Body weight fluctuates by 2–5 lbs throughout the day.",
            "Measure your height in the evening if possible — you're slightly shorter later in the day due to spinal compression. A single consistent measurement time matters most for tracking.",
            "Use a digital scale calibrated on a hard, flat floor. Carpets cause readings up to 3 lbs higher than actual weight.",
            "Measure height with your back against a wall, heels together, eyes forward. Use a book or flat object resting on the top of your head to mark the wall.",
            "Convert units carefully before calculating. 1 meter = 3.281 feet = 39.37 inches. Mixed units are the most common calculation error.",
          ].map((tip, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#00B4A6] text-white text-xs flex items-center justify-center font-bold">
                {i + 1}
              </span>
              <span className="leading-relaxed">{tip}</span>
            </li>
          ))}
        </ul>

        {/* Second CTA */}
        <div className="bg-[#E8F7F6] border border-[#00B4A6] rounded-xl p-5 mb-10">
          <p className="font-semibold text-[#1E3A5F] mb-2">
            Try the calcshrwd BMI Calculator
          </p>
          <p className="text-sm text-slate-600 mb-4">
            Enter your weight and height in metric or imperial — get your BMI, category, and
            what it means instantly.
          </p>
          <Link
            href="/tools/bmi-calculator"
            className="inline-block bg-[#00B4A6] text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-[#009e91] transition-colors"
          >
            Open BMI Calculator →
          </Link>
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 mb-10">
          {faqItems.map(({ q, a }, i) => (
            <details
              key={i}
              className="border border-slate-200 rounded-xl overflow-hidden group"
            >
              <summary className="px-5 py-4 cursor-pointer font-medium text-[#1E3A5F] hover:bg-slate-50 list-none flex justify-between items-center">
                {q}
                <span className="text-[#00B4A6] text-xl font-light group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-5 pb-4 text-slate-700 text-sm leading-relaxed">{a}</div>
            </details>
          ))}
        </div>

        {/* Related Calculators */}
        <div className="mt-10 pt-8 border-t border-slate-200">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Related Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              ["/tools/calorie-calculator", "Calorie Calculator"],
              ["/tools/age-calculator", "Age Calculator"],
              ["/tools/tip-calculator", "Tip Calculator"],
            ].map(([href, name]) => (
              <Link
                key={href}
                href={href}
                className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all"
              >
                <span className="text-sm font-medium text-[#1E3A5F]">{name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* More from the blog */}
        <div className="mt-10 pt-8 border-t border-slate-200">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">More from the blog</h2>
          <div className="space-y-3">
            {[
              ["/blog/how-to-calculate-take-home-pay", "How to Calculate Take-Home Pay After Taxes"],
              ["/blog/what-is-bmi", "What Is BMI and Why Does It Matter?"],
              ["/blog/how-to-calculate-compound-interest", "How to Calculate Compound Interest"],
            ].map(([href, title]) => (
              <Link
                key={href}
                href={href}
                className="block text-[#00B4A6] hover:text-[#1E3A5F] font-medium text-sm transition-colors"
              >
                → {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
