import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word Counter",
  description: "Count words, characters, sentences, and reading time instantly.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
