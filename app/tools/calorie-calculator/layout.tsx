import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calorie Calculator | CalcShrwd",
  description: "Calculate your daily calorie needs (TDEE) using the Mifflin-St Jeor equation. Find out how many calories to eat to lose, maintain, or gain weight.",
  alternates: { canonical: "https://www.calcshrwd.com/tools/calorie-calculator" },
  openGraph: {
    title: "Calorie Calculator | CalcShrwd",
    description: "Calculate your daily calorie needs (TDEE) using the Mifflin-St Jeor equation.",
    url: "https://www.calcshrwd.com/tools/calorie-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
