import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">Calc<span className="text-[#00B4A6]">Shrwd</span></h3>
          <p className="text-slate-300 text-sm">Smart Calculators for Smarter Decisions. Free online tools for everyday American needs.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[#00B4A6]">Popular Tools</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/tools/tip-calculator" className="hover:text-white">Tip Calculator</Link></li>
            <li><Link href="/tools/paycheck-calculator" className="hover:text-white">Paycheck Calculator</Link></li>
            <li><Link href="/tools/gpa-calculator" className="hover:text-white">GPA Calculator</Link></li>
            <li><Link href="/tools/bmi-calculator" className="hover:text-white">BMI Calculator</Link></li>
            <li><Link href="/tools/loan-calculator" className="hover:text-white">Loan Calculator</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[#00B4A6]">Company</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-600 text-center py-4 text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} CalcShrwd. All rights reserved.
      </div>
    </footer>
  );
}
