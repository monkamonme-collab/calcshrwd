import type { Metadata } from "next";
import Script from "next/script";
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
  },
  twitter: {
    card: "summary_large_image",
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
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1GZXG63CVH');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1GZXG63CVH"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
