import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center px-6 py-20 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#00B4A6]">404 error</p>
      <h1 className="text-3xl font-bold text-[#1E3A5F]">Page Not Found</h1>
      <p className="mt-4 text-slate-600">The page you requested does not exist or may have moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-lg bg-[#1E3A5F] px-5 py-3 font-medium text-white hover:bg-[#16304f]">Home</Link>
        <Link href="/tools" className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium text-[#1E3A5F] hover:border-[#00B4A6] hover:text-[#00B4A6]">All Tools</Link>
      </div>
    </main>
  );
}
