import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPA Calculator",
  description: "Calculate your unweighted or weighted GPA on the 4.0 scale.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
