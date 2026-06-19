import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "CalcShrwd \u2013 Smart Calculators for Smarter Decisions",
    template: "%s | CalcShrwd",
  },
  description:
    "Free online calculators for everyday American needs \u2014 tip, paycheck, GPA, BMI, loan, and more.",
  metadataBase: new URL("https://www.calcshrwd.com"),
  openGraph: {
    siteName: "CalcShrwd",
    locale: "en_US",
    type: "website",
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
      <head>
        <meta charSet="utf-8" />
        <Script
          id="aclib"
          src="//acscdn.com/script/aclib.js"
          strategy="afterInteractive"
        />
        <Script id="adcash-autotag" strategy="afterInteractive">{`
          if (typeof aclib !== 'undefined') {
            aclib.runAutoTag({ zoneId: 'wdtixytpvy' });
          }
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-slate-800">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
