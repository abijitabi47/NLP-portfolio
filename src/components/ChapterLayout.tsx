"use client";

import React from "react";
import { ChevronLeft, ChevronRight, List } from "lucide-react";
import { ChapterMeta, CHAPTERS } from "@/data/chapters";

interface ChapterLayoutProps {
  chapter: ChapterMeta;
  onSelectChapter: (id: number | null) => void;
  children: React.ReactNode;
}

export default function ChapterLayout({
  chapter,
  onSelectChapter,
  children,
}: ChapterLayoutProps) {
  const total = CHAPTERS.length;

  return (
    <article className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="journal-page relative overflow-hidden rounded-[2.25rem] p-6 sm:p-10 lg:p-14">
        {/* Chapter Header Banner */}
        <header className="border-b-2 border-gold-400/35 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-xl border border-gold-400/50 bg-gold-400/15 px-4 py-1.5 font-mono text-[14px] font-bold uppercase tracking-[0.22em] text-gold-300">
              {chapter.code} • FOLIO {chapter.number} OF 08
            </span>
            <span className="font-mono text-[14px] text-lavender-200">
              CSI4001 • NATURAL LANGUAGE PROCESSING & COMPUTATIONAL LINGUISTICS
            </span>
          </div>

          <h1 className="mt-5 font-serif text-[38px] font-bold leading-[1.12] text-ivory-50 sm:text-[46px] lg:text-[52px]">
            {chapter.title}
          </h1>
          <p className="mt-3 font-serif text-[22px] italic text-gold-300 sm:text-[26px]">
            {chapter.subtitle}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {chapter.keywords.map((kw) => (
              <span
                key={kw}
                className="rounded-lg border border-lavender-300/30 bg-royal-900/70 px-3 py-1 font-mono text-[13px] text-lavender-200"
              >
                {kw}
              </span>
            ))}
          </div>
        </header>

        {/* Chapter Body Content */}
        <div className="mt-10">{children}</div>

        {/* Bottom Folio Page-Turn Bar */}
        <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-gold-400/30 pt-8">
          <button
            type="button"
            onClick={() =>
              chapter.id > 1 ? onSelectChapter(chapter.id - 1) : onSelectChapter(null)
            }
            className="inline-flex items-center gap-2 rounded-xl border border-ivory-100/25 bg-navy-900 px-5 py-3 text-[15px] font-semibold text-ivory-50 transition hover:border-gold-400"
          >
            <ChevronLeft className="h-5 w-5 text-gold-300" />
            <span>
              {chapter.id > 1
                ? `Previous: Chapter 0${chapter.id - 1}`
                : "Return to Table of Contents"}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onSelectChapter(null)}
            className="inline-flex items-center gap-2 rounded-xl border border-gold-400/40 bg-gold-400/10 px-5 py-3 text-[15px] font-semibold text-gold-300 transition hover:bg-gold-400/20"
          >
            <List className="h-5 w-5" />
            <span>Table of Contents</span>
          </button>

          {chapter.id < total && (
            <button
              type="button"
              onClick={() => onSelectChapter(chapter.id + 1)}
              className="inline-flex items-center gap-2 rounded-xl border border-gold-400 bg-gold-400 px-6 py-3 text-[15px] font-bold text-navy-950 transition hover:bg-gold-300"
            >
              <span>Next: Chapter 0{chapter.id + 1}</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </footer>
      </div>
    </article>
  );
}
