import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://calcshrwd.com";
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
  ];
}
