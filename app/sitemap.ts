import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.calcshrwd.com";
  const tools = [
    "tip-calculator",
    "paycheck-calculator",
    "gpa-calculator",
    "bmi-calculator",
    "loan-calculator",
    "grade-calculator",
    "percentage-calculator",
    "word-counter",
    "compound-interest-calculator",
    "unit-converter",
    "age-calculator",
    "mortgage-calculator",
    "calorie-calculator",
  ];
  const blogs = [
    "how-to-calculate-gpa",
    "how-to-calculate-take-home-pay",
    "tipping-guide-usa",
    "understanding-loan-interest",
    "what-is-bmi",
    "how-to-calculate-grade",
    "how-to-calculate-percentage",
    "word-count-guide",
  ];
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: base + "/tools", changeFrequency: "weekly", priority: 0.9 },
    { url: base + "/blog", changeFrequency: "weekly", priority: 0.8 },
    { url: base + "/about", changeFrequency: "monthly", priority: 0.5 },
    { url: base + "/privacy-policy", changeFrequency: "monthly", priority: 0.3 },
    { url: base + "/terms", changeFrequency: "monthly", priority: 0.3 },
    ...tools.map((t) => ({
      url: base + "/tools/" + t,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogs.map((b) => ({
      url: base + "/blog/" + b,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
