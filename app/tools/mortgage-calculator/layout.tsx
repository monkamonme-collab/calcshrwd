import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Calculator",
  description: "Calculate your monthly mortgage payment, total interest, and see the full amortization schedule. Supports 10 to 30-year loans.",
  alternates: { canonical: "https://www.calcshrwd.com/tools/mortgage-calculator" },
  openGraph: {
    title: "Mortgage Calculator | CalcShrwd",
    description: "Calculate your monthly mortgage payment, total interest, and see the full amortization schedule.",
    url: "https://www.calcshrwd.com/tools/mortgage-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
