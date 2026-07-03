import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is BMI? Body Mass Index Explained Simply",
  description: "BMI (Body Mass Index) explained clearly — what it stands for, how to calculate it, what your number means, its limitations, and when BMI doesn't apply. Free BMI calculator included.",
  alternates: {
    canonical: "https://www.calcshrwd.com/blog/what-is-bmi",
  },
};

export default function WhatIsBMIArticle() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What does BMI stand for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BMI stands for Body Mass Index. It is a numerical value calculated from a person's height and weight. The formula was developed in the 1830s by Belgian mathematician Adolphe Quetelet and has been widely adopted by public health organizations as a screening tool for weight-related health risks.",
                },
              },
              {
                "@type": "Question",
                name: "How do I calculate my BMI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In imperial units: BMI = 703 × weight (lbs) ÷ height (inches)². In metric: BMI = weight (kg) ÷ height (m)². For example, a person 5 feet 9 inches tall (69 inches) who weighs 160 lbs has a BMI of about 23.6.",
                },
              },
              {
                "@type": "Question",
                name: "What is a healthy BMI range?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A BMI between 18.5 and 24.9 is considered normal or healthy weight for adults. Below 18.5 is underweight, 25 to 29.9 is overweight, and 30 or above is classified as obese according to standard WHO categories.",
                },
              },
              {
                "@type": "Question",
                name: "What does BMI measure exactly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BMI measures the ratio of your weight to your height squared. It is a proxy for body fatness at the population level, but it does not directly measure body fat, muscle mass, bone density, or fat distribution. Two people with the same BMI can have very different body compositions.",
                },
              },
              {
                "@type": "Question",
                name: "Can you explain BMI in simple terms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BMI is a single number that estimates whether your weight is appropriate for your height. Think of it as a quick weight check: below 18.5 means you may be underweight, 18.5–24.9 is the healthy range, 25–29.9 is overweight, and 30+ is obese. It's a starting point for health conversations, not a definitive diagnosis.",
                },
              },
              {
                "@type": "Question",
                name: "Is BMI accurate for athletes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BMI is less accurate for athletes because it does not distinguish muscle from fat. A muscular athlete may fall in the overweight BMI category despite having very low body fat. Body fat percentage or waist-to-height ratio are more informative measures for people with high muscle mass.",
                },
              },
              {
                "@type": "Question",
                name: "Does BMI work the same for everyone?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standard BMI categories apply to adults over 20. For children and teens, BMI is interpreted using age- and gender-specific growth charts. Research also shows that people of Asian descent face higher health risks at lower BMI thresholds — some guidelines recommend using 23 as the overweight cutoff for Asian adults.",
                },
              },
              {
                "@type": "Question",
                name: "What is a good BMI for my age?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The standard healthy BMI range (18.5–24.9) applies to adults of all ages, but older adults (65+) may do better with a BMI slightly higher — around 22–27 — because some extra weight helps protect against frailty and bone loss. For people under 20, BMI is interpreted using age-specific percentile charts, not the adult categories.",
                },
              },
            ],
          }),
        }}
      />

      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>
        {" / "}
        <span className="text-slate-600">What Is BMI?</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">
        What Is BMI? Body Mass Index Explained Simply
      </h1>
      <p className="text-slate-400 text-sm mb-8">Updated July 2026 · 8 min read</p>

      {/* Quick answer */}
      <div className="bg-[#E8F8F7] border border-[#00B4A6] rounded-lg p-5 mb-8">
        <p className="font-semibold text-[#1E3A5F] mb-1">Quick answer</p>
        <p className="text-slate-700 text-sm leading-relaxed">
          <strong>BMI (Body Mass Index)</strong> is a number calculated from your height and weight.
          A BMI of 18.5–24.9 is considered healthy. It's a useful screening tool but doesn't measure
          body fat directly, so it has real limitations for athletes, older adults, and certain ethnicities.
        </p>
      </div>

      {/* What does BMI stand for */}
      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">What Does BMI Stand For?</h2>
      <p className="text-slate-600 mb-4">
        BMI stands for <strong>Body Mass Index</strong>. The "index" part is key — it's not a direct
        measurement of body fat, but an index (a ratio) that correlates with body fatness across most
        of the population. It was created in the 1830s by Belgian mathematician Adolphe Quetelet,
        who was trying to describe the "average man" statistically. The medical community adopted it
        in the 1970s as a convenient population-level screening tool.
      </p>
      <p className="text-slate-600 mb-6">
        The World Health Organization (WHO) and most national health agencies use BMI to classify
        weight status in adults. It appears in virtually every routine physical exam as one of the
        first numbers a doctor checks.
      </p>

      {/* BMI explained simply */}
      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">BMI Explained in Simple Terms</h2>
      <p className="text-slate-600 mb-4">
        Imagine BMI as a quick snapshot of whether your weight is in proportion to your height.
        If you're very short and very heavy, your BMI will be high. If you're very tall and lean,
        your BMI will be low. The formula takes weight and adjusts it for height — specifically,
        for the <em>square</em> of your height, because body volume scales in three dimensions
        while height is one-dimensional.
      </p>
      <p className="text-slate-600 mb-6">
        A useful way to think about it: BMI is like the fuel-efficiency rating of a car. It gives
        you a quick useful number for comparison, but it doesn't tell you everything — just as mpg
        doesn't tell you about the car's safety rating or comfort. Similarly, BMI tells you roughly
        whether weight might be a health concern, but it doesn't measure fitness, body fat, or
        overall health.
      </p>

      {/* How calculated */}
      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">How Is BMI Calculated?</h2>
      <p className="text-slate-600 mb-4">
        The formula differs slightly depending on which measurement system you use:
      </p>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4">
        <p className="font-semibold text-slate-800 mb-3">BMI Formulas</p>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-slate-700 mb-1">Imperial (pounds and inches):</p>
            <code className="block bg-white border border-slate-300 rounded px-3 py-2 text-sm text-[#1E3A5F]">
              BMI = 703 × weight (lbs) ÷ height (in)²
            </code>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700 mb-1">Metric (kilograms and meters):</p>
            <code className="block bg-white border border-slate-300 rounded px-3 py-2 text-sm text-[#1E3A5F]">
              BMI = weight (kg) ÷ height (m)²
            </code>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
        <p className="font-semibold text-slate-800 mb-2">Worked example</p>
        <p className="text-slate-600 text-sm leading-relaxed">
          Person: 5&apos;9&quot; tall (69 inches), 160 lbs<br />
          <span className="text-slate-500">Step 1:</span> 69 × 69 = 4,761 (height squared)<br />
          <span className="text-slate-500">Step 2:</span> 703 × 160 = 112,480<br />
          <span className="text-slate-500">Step 3:</span> 112,480 ÷ 4,761 = <strong className="text-[#1E3A5F]">23.6</strong> → Normal weight
        </p>
      </div>
      <p className="text-slate-600 mb-6">
        Don't want to do the math?{" "}
        <Link href="/tools/bmi-calculator" className="text-[#00B4A6] underline font-medium">
          Use the BMI calculator
        </Link>{" "}
        — enter your height and weight and get an instant result.
      </p>

      {/* Categories */}
      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">What Do the BMI Categories Mean?</h2>
      <p className="text-slate-600 mb-4">
        The WHO defines four standard weight categories for adults based on BMI:
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="px-4 py-2 text-left">BMI Range</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Health Implication</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-blue-50">
              <td className="px-4 py-2 font-medium">Below 18.5</td>
              <td className="px-4 py-2">Underweight</td>
              <td className="px-4 py-2 text-slate-600">May indicate malnutrition, eating disorder, or underlying illness</td>
            </tr>
            <tr className="border-b bg-green-50">
              <td className="px-4 py-2 font-medium">18.5 – 24.9</td>
              <td className="px-4 py-2">Normal / Healthy weight</td>
              <td className="px-4 py-2 text-slate-600">Associated with lowest disease risk in most studies</td>
            </tr>
            <tr className="border-b bg-yellow-50">
              <td className="px-4 py-2 font-medium">25.0 – 29.9</td>
              <td className="px-4 py-2">Overweight</td>
              <td className="px-4 py-2 text-slate-600">Modest increased risk for diabetes, heart disease</td>
            </tr>
            <tr className="bg-red-50">
              <td className="px-4 py-2 font-medium">30.0 and above</td>
              <td className="px-4 py-2">Obese</td>
              <td className="px-4 py-2 text-slate-600">Significantly higher risk for multiple chronic conditions</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-slate-500 text-xs mb-6">
        Note: Some guidelines further subdivide obesity into Class I (30–34.9), Class II (35–39.9),
        and Class III (40+) to reflect increasing health risk.
      </p>

      {/* BMI by age */}
      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Does a "Healthy" BMI Change with Age?</h2>
      <p className="text-slate-600 mb-4">
        The standard adult categories (18.5–24.9 for healthy) technically apply to all adults over 20,
        but there's nuance:
      </p>
      <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2 text-sm">
        <li>
          <strong>Older adults (65+):</strong> Research suggests a slightly higher BMI (22–27)
          may be protective against frailty, falls, and bone loss. A BMI in the low-normal range
          may actually be associated with worse outcomes in this group.
        </li>
        <li>
          <strong>Adults under 20:</strong> BMI is plotted on age- and sex-specific percentile
          charts. A BMI of 22 means something different for a 14-year-old than a 35-year-old.
        </li>
        <li>
          <strong>Pregnant women:</strong> Standard BMI categories don't apply during pregnancy.
          Weight gain recommendations are based on pre-pregnancy BMI, not current BMI.
        </li>
      </ul>

      {/* Limitations */}
      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">The Real Limitations of BMI</h2>
      <p className="text-slate-600 mb-4">
        BMI is a blunt instrument. Here's where it genuinely fails:
      </p>
      <div className="space-y-3 mb-6">
        {[
          {
            title: "It can't see muscle vs. fat",
            text: "A 200-lb person with 10% body fat and a 200-lb person with 35% body fat have the same BMI. The first is an athlete; the second may be at serious health risk. BMI can't tell the difference.",
          },
          {
            title: "It ignores where fat is stored",
            text: "Abdominal (visceral) fat wrapped around your organs is far more dangerous than fat stored in hips and thighs. BMI doesn't capture fat distribution at all. Two people with identical BMIs can have dramatically different cardiovascular risk.",
          },
          {
            title: "It's less accurate across ethnicities",
            text: "Asian populations experience increased metabolic risk at lower BMI values. Some guidelines recommend a healthy BMI ceiling of 23 (rather than 25) for people of East Asian descent. The original BMI thresholds were derived largely from studies of white European populations.",
          },
          {
            title: "It doesn't account for age-related muscle loss",
            text: "Older adults naturally lose muscle mass (sarcopenia) while fat mass stays similar or increases. An older adult may have a 'normal' BMI while actually having high body fat and low muscle — a condition that's associated with real health risks.",
          },
          {
            title: "It misclassifies short people",
            text: "Because height is squared in the formula, very short people tend to get slightly inflated BMIs. Very tall people tend to get slightly deflated BMIs. The formula works best for people of average height (5'4\"–5'11\").",
          },
        ].map(({ title, text }, i) => (
          <div key={i} className="border border-slate-200 rounded-lg p-4">
            <p className="font-semibold text-slate-800 mb-1 text-sm">⚠️ {title}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* Better alternatives */}
      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Better Measures to Use Alongside BMI</h2>
      <p className="text-slate-600 mb-4">
        Most doctors and researchers recommend using BMI in combination with at least one other metric:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="px-4 py-2 text-left">Measure</th>
              <th className="px-4 py-2 text-left">What It Tells You</th>
              <th className="px-4 py-2 text-left">Healthy Range</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2 font-medium">Waist circumference</td>
              <td className="px-4 py-2 text-slate-600">Abdominal fat (visceral risk)</td>
              <td className="px-4 py-2 text-slate-600">&lt;35 in (women), &lt;40 in (men)</td>
            </tr>
            <tr className="border-b bg-slate-50">
              <td className="px-4 py-2 font-medium">Waist-to-height ratio</td>
              <td className="px-4 py-2 text-slate-600">Fat distribution relative to height</td>
              <td className="px-4 py-2 text-slate-600">&lt;0.5 (waist less than half your height)</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-medium">Body fat percentage</td>
              <td className="px-4 py-2 text-slate-600">Actual fat vs. lean mass ratio</td>
              <td className="px-4 py-2 text-slate-600">18–24% (women), 10–17% (men) for athletes</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="px-4 py-2 font-medium">Blood panels</td>
              <td className="px-4 py-2 text-slate-600">Metabolic health markers</td>
              <td className="px-4 py-2 text-slate-600">HbA1c, LDL, blood pressure, fasting glucose</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Why BMI still matters */}
      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Why BMI Still Matters</h2>
      <p className="text-slate-600 mb-4">
        Despite its flaws, BMI remains a useful first filter. Large population studies consistently
        show that people with BMI above 30 have meaningfully higher rates of type 2 diabetes,
        cardiovascular disease, sleep apnea, certain cancers, and joint problems. People with BMI
        below 18.5 face elevated risks from nutrient deficiency, immune dysfunction, and bone loss.
      </p>
      <p className="text-slate-600 mb-6">
        The key is using BMI as a starting point for conversation — not a verdict. If your BMI
        is outside the normal range, that's a prompt to dig deeper with your doctor, not a
        definitive statement about your health.
      </p>

      {/* Calculator CTA */}
      <div className="bg-[#E8F8F7] border border-[#00B4A6] rounded-lg p-5 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">Calculate Your BMI Now</h3>
        <p className="text-slate-600 mb-3 text-sm">
          Enter your height and weight in imperial or metric units. Get your BMI number,
          category, and what it means for you — instantly, no sign-up required.
        </p>
        <Link
          href="/tools/bmi-calculator"
          className="inline-block bg-[#00B4A6] text-white font-semibold px-5 py-2 rounded hover:bg-[#009d90] transition-colors text-sm"
        >
          Use the Free BMI Calculator →
        </Link>
      </div>

      {/* Related */}
      <div className="border-t border-slate-200 pt-6">
        <p className="text-sm font-semibold text-slate-500 mb-3">Related calculators</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/tools/bmi-calculator" className="text-sm text-[#00B4A6] underline">BMI Calculator</Link>
          <Link href="/tools/calorie-calculator" className="text-sm text-[#00B4A6] underline">Calorie Calculator</Link>
          <Link href="/tools/body-fat-calculator" className="text-sm text-[#00B4A6] underline">Body Fat Calculator</Link>
        </div>
      </div>
    </article>
  );
}
