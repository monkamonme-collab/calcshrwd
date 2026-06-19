import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Percentage Calculator",
  description: "Calculate percentages, increases, decreases, and differences instantly.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
