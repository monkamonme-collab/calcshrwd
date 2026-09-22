import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tip Calculator: Calculate, Split, and Round a Tip",
    description: "Calculate a tip, add optional tax, choose pre-tax or after-tax tipping, split the bill, and round the tip or total.",
    alternates: {
          canonical: "/tools/tip-calculator",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
