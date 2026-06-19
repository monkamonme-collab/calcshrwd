import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grade Calculator",
  description: "Calculate your final grade from assignments, tests, and weighted categories.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
