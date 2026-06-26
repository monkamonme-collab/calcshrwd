import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.calcshrwd.com"),
  title: {
    default: "CalcShrwd - Free Online Calculators for Everyday Life",
    template: "%s | CalcShrwd",
  },
  description:
    "Smart, free calculators for Americans - tip, paycheck, GPA, BMI, loan, percentage, and more. Get instant, accurate results.",
  openGraph: {
    siteName: "CalcShrwd",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CalcShrwd - Free Online Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "iA823s_rZmrxleY5wB5bApzrrOAONJbR8Gqo5kJXWGI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-slate-800">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
