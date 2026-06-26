import { MetadataRoute } from "next";

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
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tools`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ...tools.map((t) => ({
      url: `${base}/tools/${t}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogs.map((b) => ({
      url: `${base}/blog/${b}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://www.calcshrwd.com";
    const now = new Date();
    return [
      { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
      { url: base + "/tools/tip-calculator", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: base + "/tools/paycheck-calculator", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: base + "/tools/gpa-calculator", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: base + "/tools/bmi-calculator", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: base + "/tools/loan-calculator", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: base + "/tools/grade-calculator", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: base + "/tools/percentage-calculator", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: base + "/tools/word-counter", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: base + "/blog", lastModified: now, changeFrequency: "weekly", priority: 0.7 },
      { url: base + "/blog/how-to-calculate-gpa", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
      { url: base + "/blog/how-to-calculate-take-home-pay", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
      { url: base + "/blog/tipping-guide-usa", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
      { url: base + "/blog/understanding-loan-interest", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
      { url: base + "/blog/what-is-bmi", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
      { url: base + "/blog/how-to-calculate-grade", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
      { url: base + "/blog/how-to-calculate-percentage", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: base + "/blog/word-count-guide", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: base + "/tools", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: base + "/about", lastModified: now, changeFrequency: "yearly", priority: 0.4 },
        { url: base + "/privacy-policy", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
        { url: base + "/terms", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
        { url: base + "/tools/compound-interest-calculator", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        ];
}
