import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Calculator",
  description: "Calculate monthly payments and total interest on any loan.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
