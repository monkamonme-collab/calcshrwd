import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Compound Interest Calculator",
    description: "See how your money grows over time with compound interest and regular contributions. Free, instant results.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
