"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-[#1E3A5F] text-white shadow-md">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight" onClick={closeMenu}>
          Calc<span className="text-[#00B4A6]">Shrwd</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Primary navigation">
          <Link href="/tools" className="hover:text-[#00B4A6] transition-colors">All Tools</Link>
          <Link href="/blog" className="hover:text-[#00B4A6] transition-colors">Blog</Link>
        </nav>
        <button type="button" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00B4A6]" aria-expanded={isMenuOpen} aria-controls="mobile-primary-navigation" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setIsMenuOpen((open) => !open)}>
          <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {isMenuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      <nav id="mobile-primary-navigation" hidden={!isMenuOpen} className="md:hidden border-t border-white/15 px-6 py-3" aria-label="Mobile primary navigation">
        <div className="max-w-5xl mx-auto flex flex-col gap-1 text-sm">
          <Link href="/tools" onClick={closeMenu} className="rounded-md px-3 py-3 font-medium hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00B4A6]">All Tools</Link>
          <Link href="/blog" onClick={closeMenu} className="rounded-md px-3 py-3 font-medium hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00B4A6]">Blog</Link>
        </div>
      </nav>
    </header>
  );
}
