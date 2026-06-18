import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#1E3A5F] text-white shadow-md">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Calc<span className="text-[#00B4A6]">Shrwd</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/tools" className="hover:text-[#00B4A6] transition-colors">All Tools</Link>
          <Link href="/blog" className="hover:text-[#00B4A6] transition-colors">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
