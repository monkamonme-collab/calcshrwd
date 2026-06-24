import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tip Calculator",
    description: "Calculate the right tip amount and split the bill among your group.",
    alternates: {
          canonical: "/tools/tip-calculator",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
