import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog – Financial & Life Tips",
  description: "Helpful guides for Americans — tipping etiquette, understanding your paycheck, GPA scales, BMI, and more.",
};

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Blog</h1>
      <p className="text-slate-500 mb-10">Helpful guides to go with our calculators.</p>
      <p className="text-slate-400 text-sm">Articles coming soon. Check back shortly.</p>
    </div>
  );
}
