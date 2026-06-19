import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paycheck Calculator",
  description: "Estimate your take-home pay after federal taxes, state taxes, and deductions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
