import type { Metadata } from "next";

const description =
  "Convert length, weight, temperature, volume, speed, and area units instantly with CalcShrwd's free online unit converter.";

export const metadata: Metadata = {
  title: "Unit Converter for Length, Weight, Temperature & More",
  description,
  alternates: {
    canonical: "/tools/unit-converter",
  },
  openGraph: {
    title: "Unit Converter for Length, Weight, Temperature & More | CalcShrwd",
    description,
    url: "/tools/unit-converter",
    siteName: "CalcShrwd",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
