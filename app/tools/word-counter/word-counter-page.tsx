"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

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

const faqItems = [
{ q: "How do you count words in a text?", a: "Words are counted by splitting the text on whitespace (spaces, tabs, newlines) and counting the resulting segments. This tool counts any sequence of non-whitespace characters as a word, which matches how most word processors count words." },
{ q: "What is average reading speed?", a: "The average adult reads approximately 200–250 words per minute (WPM) for general content. Fast readers reach 300–400 WPM. Speed readers claim 700+ WPM, though comprehension typically decreases at very high speeds. You can adjust the WPM input to match your own reading pace." },
{ q: "How long does it take to read 1,000 words?", a: "At an average reading speed of 200 WPM, 1,000 words takes about 5 minutes to read. At 250 WPM it takes 4 minutes, and at 150 WPM it takes about 6–7 minutes." },
{ q: "What is the ideal word count for a blog post?", a: "For SEO, most experts recommend 1,500–2,500 words for comprehensive blog posts. Short posts (300–600 words) can rank for simple queries. Long-form content (3,000+ words) tends to rank well for competitive keywords and earns more backlinks." },
{ q: "Does character count include spaces?", a: "This tool shows both 'Characters' (including spaces) and 'Chars (no spaces)' so you can see both counts. Social media platforms like Twitter/X count all characters including spaces toward their limits." },
{ q: "How many words is a typical page?", a: "A standard double-spaced page (12pt font, 1-inch margins) contains approximately 250–300 words. Single-spaced pages hold around 500–600 words. A standard novel page is typically 250 words." },
];

return (
<>
<div className="max-w-2xl mx-auto px-6 py-10">
<nav className="text-sm text-slate-400 mb-6">
<Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
<Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
<span className="text-slate-600">Word Counter</span>
</nav>

<div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6">
<img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=400&fit=crop&fm=webp" alt="Typing and writing" className="w-full h-full object-cover" />
<div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/80 to-[#1E3A5F]/20" />
</div>
<h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Word Counter</h1>
<p className="text-slate-500 mb-6">Paste or type your text to instantly count words, characters, sentences, and estimate reading time.</p>

<textarea
value={text}
onChange={(e) => setText(e.target.value)}
placeholder="Paste or type your text here..."
rows={10}
className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00B4A6] text-slate-700 resize-y"
/>

{text.trim() && (
<button onClick={() => setText("")}
className="mt-2 text-xs text-slate-400 hover:text-red-400 transition-colors">
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
<input type="number" value={wpm} onChange={(e) => setWpm(e.target.value)}
className="w-20 border border-slate-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-[#00B4A6]" />
<span className="text-sm text-slate-600">WPM</span>
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
"mainEntity": faqItems.map(({ q, a }) => ({
"@type": "Question",
"name": q,
"acceptedAnswer": { "@type": "Answer", "text": a }
}))
})
}}
/>
<h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 mt-10">Frequently Asked Questions</h2>
<div className="space-y-4">
{faqItems.map(({ q, a }) => (
<details key={q} className="group border border-slate-200 rounded-xl overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer px-5 py-4 bg-white hover:bg-slate-50 font-medium text-[#1E3A5F]">
{q}
<span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
</summary>
<div className="px-5 py-4 text-slate-600 text-sm bg-slate-50 border-t border-slate-100">{a}</div>
</details>
))}
</div>
</div>
</>
);
}
