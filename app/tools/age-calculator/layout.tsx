import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Age Calculator | CalcShrwd",
  description: "Calculate your exact age in years, months, days, and weeks. Find your next birthday countdown and total days lived.",
  alternates: { canonical: "https://www.calcshrwd.com/tools/age-calculator" },
  openGraph: {
    title: "Age Calculator | CalcShrwd",
    description: "Calculate your exact age in years, months, days, and weeks. Find your next birthday countdown and total days lived.",
    url: "https://www.calcshrwd.com/tools/age-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
