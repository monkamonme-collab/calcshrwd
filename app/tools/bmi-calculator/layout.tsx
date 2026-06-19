import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMI Calculator",
  description: "Calculate your Body Mass Index and understand your healthy weight range.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
