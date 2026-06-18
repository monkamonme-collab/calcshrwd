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
    const readingTime = Math.ceil(words / (parseFloat(wpm) || 200));
    const speakingTime = Math.ceil(words / 130);
    return { words, chars, charsNoSpaces, sentences, paragraphs, readingTime, speakingTime };
  }, [text, wpm]);

  const formatTime = (mins: number) => {
    if (mins < 1) return "< 1 min";
    if (mins < 60) return `${mins} min`;
    return `${Math.floor(mins / 60)}h ${mins % 60}m`;
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#00B4A6]">Home</Link>{" / "}
        <Link href="/tools" className="hover:text-[#00B4A6]">Tools</Link>{" / "}
        <span className="text-slate-600">Word Counter</span>
      </nav>

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
  );
}
