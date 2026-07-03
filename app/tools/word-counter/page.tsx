"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const wordCountRef = [
  { type: "Tweet / X post", range: "≤ 280 chars (~40–50 words)", notes: "Under the character limit" },
  { type: "LinkedIn post", range: "150–300 words", notes: "Sweet spot for engagement" },
  { type: "Email", range: "50–200 words", notes: "Shorter = higher read rate" },
  { type: "Blog post (short)", range: "500–800 words", notes: "Quick reads, good for news" },
  { type: "Blog post (standard)", range: "1,000–1,500 words", notes: "Most common format" },
  { type: "Blog post (long-form)", range: "2,000–3,000 words", notes: "Best for SEO" },
  { type: "High school essay", range: "500–1,000 words", notes: "Varies by assignment" },
  { type: "College application essay", range: "250–650 words", notes: "Common App max: 650" },
  { type: "College term paper", range: "1,500–5,000 words", notes: "Depends on course level" },
  { type: "Short story", range: "1,000–10,000 words", notes: "Flash fiction: under 1,000" },
  { type: "Novella", range: "20,000–50,000 words", notes: "Between short story and novel" },
  { type: "Novel", range: "70,000–100,000 words", notes: "Genre varies ±20k" },
  { type: "1-minute speech", range: "~130 words", notes: "Average speaking rate" },
  { type: "5-minute speech", range: "~650 words", notes: "At 130 WPM" },
  { type: "10-minute speech", range: "~1,300 words", notes: "At 130 WPM" },
];

export default function WordCounter() {
  const [text, setText] = useState("");
  const [wpm, setWpm] = useState("200");

  const stats = useMemo(() => {
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, "").length;
    const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
    const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;
    const readingTime = Math.ceil(words / Math.max(1, parseFloat(wpm) || 200));
    const speakingTime = Math.ceil(words / 130);
    return { words, chars, charsNoSpaces, sentences, paragraphs, readingTime, speakingTime };
  }, [text, wpm]);

  const formatTime = (mins: number) => {
    if (mins < 1) return "< 1 min";
    if (mins < 60) return `${mins} min`;
    return `${Math.floor(mins / 60)}h ${mins % 60}m`;
  };

  return (
    <>
      <div className="max-w-2xl mx-auto px-6 py-10">
        {/* BreadcrumbList schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.calcshrwd.com/" },
                { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.calcshrwd.com/tools" },
                { "@type": "ListItem", "position": 3, "name": "Word Counter", "item": "https://www.calcshrwd.com/tools/word-counter" }
              ]
            })
          }}
        />

        <nav className="text-sm text-slate-400 mb-6">
          <Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
          <Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
          <span className="text-slate-600">Word Counter</span>
        </nav>

        <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=400&fit=crop&fm=webp"
            alt="Typing and writing — word count tool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/80 to-[#1E3A5F]/20" />
        </div>

        <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Word Counter</h1>
        <p className="text-slate-500 mb-6">
          Paste or type your text to instantly count words, characters, sentences, and estimate reading time.
        </p>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your text here..."
          rows={10}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00B4A6] text-slate-700 resize-y"
        />

        {text.trim() && (
          <button
            onClick={() => setText("")}
            className="mt-2 text-xs text-slate-400 hover:text-red-400 transition-colors"
          >
            Clear text
          </button>
        )}

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Words", value: stats.words.toLocaleString() },
            { label: "Characters", value: stats.chars.toLocaleString() },
            { label: "Chars (no spaces)", value: stats.charsNoSpaces.toLocaleString() },
            { label: "Sentences", value: stats.sentences.toLocaleString() },
            { label: "Paragraphs", value: stats.paragraphs.toLocaleString() },
            { label: "Reading Time", value: formatTime(stats.readingTime) },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white border border-slate-100 rounded-xl p-4 text-center shadow-sm">
              <p className="text-slate-500 text-xs mb-1">{label}</p>
              <p className="text-2xl font-bold text-[#1E3A5F]">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
          <span className="text-sm text-slate-600">Reading speed:</span>
          <input
            type="number"
            value={wpm}
            onChange={(e) => setWpm(e.target.value)}
            className="w-20 border border-slate-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-[#00B4A6]"
          />
          <span className="text-sm text-slate-600">WPM</span>
        </div>

        {/* Word Count Quick Reference */}
        <div className="mt-10 border-t border-slate-100 pt-8">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Word Count Quick Reference</h2>
          <p className="text-slate-600 mb-5">
            Not sure if your piece is the right length? Use this table to quickly compare common writing
            formats and their typical word count ranges.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1E3A5F] text-white">
                  <th className="px-4 py-2 text-left">Writing Type</th>
                  <th className="px-4 py-2 text-left">Typical Range</th>
                  <th className="px-4 py-2 text-left hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {wordCountRef.map((row, i) => (
                  <tr
                    key={i}
                    className={"border-b border-slate-100" + (i % 2 === 1 ? " bg-slate-50" : " bg-white")}
                  >
                    <td className="px-4 py-2 font-medium text-slate-700">{row.type}</td>
                    <td className="px-4 py-2 text-[#1E3A5F] font-semibold">{row.range}</td>
                    <td className="px-4 py-2 text-slate-500 hidden sm:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reading & Speaking Speed */}
        <div className="mt-8 border-t border-slate-100 pt-8">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Reading Speed & Speaking Time</h2>
          <p className="text-slate-600 mb-4">
            The average adult reads <strong>200–250 words per minute</strong> for non-fiction and about
            <strong> 300 WPM</strong> for light fiction. Speaking out loud averages <strong>130 WPM</strong>{" "}
            for presentations and speeches.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-700">
            <p><strong>Reading time</strong> = Word count ÷ Reading speed (WPM)</p>
            <p className="mt-1"><strong>Speaking time</strong> = Word count ÷ 130 WPM</p>
            <p className="mt-2 text-slate-500">Example: a 1,500-word blog post → 7–8 min read · 11–12 min speech</p>
          </div>
        </div>

        {/* Learn More */}
        <div className="mt-8 border-t border-slate-100 pt-8">
          <h2 className="text-lg font-semibold text-[#1E3A5F] mb-3">Learn More</h2>
          <Link
            href="/blog/word-count-guide"
            className="block bg-white border border-slate-100 rounded-lg p-4 hover:border-[#00B4A6] transition-colors"
          >
            <p className="font-medium text-slate-700">Word Count Guide: How Long Should Your Writing Be?</p>
            <p className="text-sm text-slate-400 mt-1">
              Ideal lengths for blog posts, essays, emails, novels, speeches, and social posts — with SEO word count tips.
            </p>
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-2xl mx-auto px-6 pb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How many words is a 5-paragraph essay?", "acceptedAnswer": { "@type": "Answer", "text": "A 5-paragraph essay is typically 500–800 words. Each paragraph is about 100–150 words: an introduction, three body paragraphs, and a conclusion." } },
                { "@type": "Question", "name": "How many words per page double-spaced?", "acceptedAnswer": { "@type": "Answer", "text": "A standard double-spaced page (12pt Times New Roman, 1-inch margins) holds approximately 250–275 words. So a 5-page paper is roughly 1,250–1,375 words." } },
                { "@type": "Question", "name": "How long does it take to read 1,000 words?", "acceptedAnswer": { "@type": "Answer", "text": "At an average reading speed of 200 WPM, 1,000 words takes about 5 minutes to read. At 250 WPM it takes 4 minutes." } },
                { "@type": "Question", "name": "How many words is a 1-minute speech?", "acceptedAnswer": { "@type": "Answer", "text": "At an average speaking rate of 130 words per minute, a 1-minute speech is approximately 130 words. A 5-minute speech is about 650 words." } },
                { "@type": "Question", "name": "How many words is a college application essay?", "acceptedAnswer": { "@type": "Answer", "text": "The Common App personal essay has a maximum of 650 words. Most admissions counselors recommend 500–650 words. Shorter submissions under 250 words are generally too brief to be competitive." } },
                { "@type": "Question", "name": "What is the ideal blog post length for SEO?", "acceptedAnswer": { "@type": "Answer", "text": "For SEO, long-form blog posts of 1,500–2,500 words tend to rank better because they cover topics comprehensively. However, the content should match what the reader actually needs — a 600-word post that fully answers a simple question outperforms a padded 2,000-word post." } }
              ]
            })
          }}
        />
        <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 mt-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How many words is a 5-paragraph essay?", a: "A 5-paragraph essay is typically 500–800 words. Each paragraph is about 100–150 words: an introduction, three body paragraphs, and a conclusion." },
            { q: "How many words per page double-spaced?", a: "A standard double-spaced page (12pt Times New Roman, 1-inch margins) holds approximately 250–275 words. So a 5-page paper is roughly 1,250–1,375 words." },
            { q: "How long does it take to read 1,000 words?", a: "At an average reading speed of 200 WPM, 1,000 words takes about 5 minutes to read. At 250 WPM it takes 4 minutes." },
            { q: "How many words is a 1-minute speech?", a: "At an average speaking rate of 130 words per minute, a 1-minute speech is approximately 130 words. A 5-minute speech is about 650 words." },
            { q: "How many words is a college application essay?", a: "The Common App personal essay has a maximum of 650 words. Most admissions counselors recommend 500–650 words. Shorter submissions under 250 words are generally too brief to be competitive." },
            { q: "What is the ideal blog post length for SEO?", a: "For SEO, long-form blog posts of 1,500–2,500 words tend to rank better because they cover topics comprehensively. However, the content should match what the reader actually needs — a 600-word post that fully answers a simple question outperforms a padded 2,000-word post." }
          ].map(({ q, a }) => (
            <details key={q} className="group border border-slate-200 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer px-5 py-4 bg-white hover:bg-slate-50 font-medium text-[#1E3A5F]">
                {q}
                <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 py-4 text-slate-600 text-sm bg-slate-50 border-t border-slate-100">{a}</div>
            </details>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Related Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/tools/grade-calculator"
              className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium text-[#1E3A5F]">Grade Calculator</span>
            </Link>
            <Link
              href="/tools/gpa-calculator"
              className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium text-[#1E3A5F]">GPA Calculator</span>
            </Link>
            <Link
              href="/tools/percentage-calculator"
              className="block p-4 rounded-xl border border-slate-200 hover:border-[#00B4A6] hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium text-[#1E3A5F]">Percentage Calculator</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
