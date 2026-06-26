import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Word Count Guide: Why It Matters and How to Use It",
  description: "Learn what word count means for essays, articles, and emails. Includes standard length guidelines for common document types and tips to hit your target.",
  alternates: {
    canonical: "https://www.calcshrwd.com/blog/word-count-guide",
  },
};

export default function WordCountGuideArticle() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-[#00B4A6]">Blog</Link>
        {" / "}
        <span className="text-slate-600">Word Count Guide</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">
        Word Count Guide: Why It Matters and How to Use It
      </h1>
      <p className="text-slate-400 text-sm mb-8">Updated June 2026 - 4 min read</p>

      <p className="text-slate-600 mb-6">
        Word count is more than a number at the bottom of your screen. Teachers use it to set
        assignment scope, editors use it to fit articles into layouts, and SEO writers use it to
        signal depth to search engines. Knowing the right target for your document type saves time
        and helps you write with intention from the first sentence.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Standard Word Count Guidelines</h2>
      <p className="text-slate-600 mb-4">
        Different documents have different expectations. Here is a quick reference for the most
        common writing situations:
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="px-4 py-2 text-left">Document Type</th>
              <th className="px-4 py-2 text-left">Typical Word Count</th>
              <th className="px-4 py-2 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="px-4 py-2">High school essay</td><td className="px-4 py-2">500 - 800</td><td className="px-4 py-2">Follow teacher instructions</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">College essay (application)</td><td className="px-4 py-2">250 - 650</td><td className="px-4 py-2">Stay within the stated limit</td></tr>
            <tr className="border-b"><td className="px-4 py-2">College term paper</td><td className="px-4 py-2">1,500 - 5,000</td><td className="px-4 py-2">Varies by course level</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">Blog post (short)</td><td className="px-4 py-2">300 - 600</td><td className="px-4 py-2">News updates, quick tips</td></tr>
            <tr className="border-b"><td className="px-4 py-2">Blog post (standard)</td><td className="px-4 py-2">1,000 - 1,500</td><td className="px-4 py-2">Most informational posts</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">Long-form article / guide</td><td className="px-4 py-2">2,000 - 4,000</td><td className="px-4 py-2">Comprehensive coverage</td></tr>
            <tr className="border-b"><td className="px-4 py-2">Professional email</td><td className="px-4 py-2">50 - 200</td><td className="px-4 py-2">Shorter gets more replies</td></tr>
            <tr className="border-b bg-slate-50"><td className="px-4 py-2">Resume</td><td className="px-4 py-2">400 - 800</td><td className="px-4 py-2">One page for most candidates</td></tr>
            <tr className="border-b"><td className="px-4 py-2">Short story</td><td className="px-4 py-2">1,000 - 7,500</td><td className="px-4 py-2">Varies by publication</td></tr>
            <tr className="bg-slate-50"><td className="px-4 py-2">Novel</td><td className="px-4 py-2">70,000 - 100,000</td><td className="px-4 py-2">Genre affects the range</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Reading Time and Word Count</h2>
      <p className="text-slate-600 mb-4">
        The average adult reads about 200 to 250 words per minute silently. Speaking aloud runs
        slower at around 130 words per minute. Use these benchmarks to estimate how long your
        content takes to consume:
      </p>
      <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
        <li><strong>500 words</strong> = roughly 2 minutes of reading, 4 minutes spoken</li>
        <li><strong>1,000 words</strong> = roughly 4 minutes of reading, 8 minutes spoken</li>
        <li><strong>2,500 words</strong> = roughly 10 minutes of reading, 19 minutes spoken</li>
        <li><strong>5,000 words</strong> = roughly 20 minutes of reading, 38 minutes spoken</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Tips to Hit Your Word Count Target</h2>
      <p className="text-slate-600 mb-4">
        Whether you are over or under your target, these strategies help:
      </p>
      <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
        <li><strong>Too short:</strong> Add a real example, a comparison table, or a section addressing a common objection. Do not pad with filler phrases like &quot;It is important to note that...&quot;</li>
        <li><strong>Too long:</strong> Cut adverbs, redundant transitions, and throat-clearing introductions. Start with your main point instead of building up to it.</li>
        <li><strong>Stuck on zero:</strong> Write a messy first draft without counting. Edit to target length afterward.</li>
        <li><strong>Academic limits:</strong> If a professor says &quot;maximum 500 words,&quot; treat it as a constraint, not a goal. Tight, precise writing is usually rewarded.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">Characters vs. Words</h2>
      <p className="text-slate-600 mb-6">
        Some platforms limit by character rather than word count. Social media posts, SMS messages,
        and certain form fields use character limits because they control storage and display space
        directly. As a rough guide, the average English word is about 5 characters plus one space,
        so a 280-character tweet fits around 45 words. When in doubt, paste your text into a word
        counter that tracks both metrics at once.
      </p>

      <div className="bg-[#E8F8F7] border border-[#00B4A6] rounded-lg p-5">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">Count Words Instantly</h3>
        <p className="text-slate-600 mb-3">
          Paste your text to see word count, character count, sentence count, and estimated reading time in one click.
        </p>
        <Link
          href="/tools/word-counter"
          className="inline-block bg-[#00B4A6] text-white font-semibold px-5 py-2 rounded hover:bg-[#009d90] transition-colors"
        >
          Use the Word Counter
        </Link>
      </div>
    </article>
  );
}
