import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tip Calculator: Split a Bill & Calculate Tips",
    description: "Free tip calculator to calculate a restaurant tip, split a bill, and see what each person pays. Includes a US tipping guide and quick 15%, 18%, and 20% tip calculations.",
    alternates: {
          canonical: "/tools/tip-calculator",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
