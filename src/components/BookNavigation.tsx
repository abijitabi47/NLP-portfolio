"use client";

import React from "react";
import { ChevronLeft, ChevronRight, List, BookMarked, Library } from "lucide-react";
import { CHAPTERS } from "@/data/chapters";

interface BookNavigationProps {
  currentChapter: number | null; // null = Table of Contents
  onSelectChapter: (chapterId: number | null) => void;
  onReturnToCover: () => void;
}

export default function BookNavigation({
  currentChapter,
  onSelectChapter,
  onReturnToCover,
}: BookNavigationProps) {
  const totalChapters = CHAPTERS.length;
  const progressPercent =
    currentChapter === null ? 10 : Math.round((currentChapter / totalChapters) * 100);

  const activeMeta =
    currentChapter !== null
      ? CHAPTERS.find((c) => c.id === currentChapter)
      : null;

  return (
    <header className="sticky top-0 z-40 border-b border-gold-400/30 bg-navy-950/90 backdrop-blur-xl">
      {/* Reading Progress Bar */}
      <div className="h-1.5 w-full bg-navy-800">
        <div
          className="h-full bg-gradient-to-r from-gold-500 via-gold-300 to-lavender-400 transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Left: Cover + Contents Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onReturnToCover}
            className="inline-flex items-center gap-2 rounded-xl border border-gold-400/40 bg-navy-900 px-3.5 py-2 text-[14px] font-semibold text-gold-300 transition hover:bg-gold-400/15"
          >
            <Library className="h-4 w-4" />
            <span>Journal Cover</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectChapter(null)}
            className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-[14px] font-semibold transition ${
              currentChapter === null
                ? "border-gold-400 bg-gold-400 text-navy-950"
                : "border-ivory-100/20 bg-navy-900 text-ivory-50 hover:border-gold-400/50"
            }`}
          >
            <List className="h-4 w-4" />
            <span>Return to Contents</span>
          </button>
        </div>

        {/* Center: Current Chapter Indicator */}
        <div className="hidden items-center gap-2.5 md:flex">
          <BookMarked className="h-4 w-4 text-gold-400" />
          <span className="font-mono text-[14px] uppercase tracking-wider text-lavender-200">
            {activeMeta
              ? `${activeMeta.code} — ${activeMeta.title} (${currentChapter} / ${totalChapters})`
              : "INTERACTIVE TABLE OF CONTENTS"}
          </span>
        </div>

        {/* Right: Previous & Next Chapter Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={currentChapter === null || currentChapter <= 1}
            onClick={() =>
              currentChapter !== null && currentChapter > 1
                ? onSelectChapter(currentChapter - 1)
                : onSelectChapter(null)
            }
            className="inline-flex items-center gap-1.5 rounded-xl border border-ivory-100/20 bg-navy-900 px-3.5 py-2 text-[14px] font-semibold text-ivory-50 transition hover:border-gold-400/50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous Chapter</span>
          </button>

          <button
            type="button"
            disabled={currentChapter !== null && currentChapter >= totalChapters}
            onClick={() => {
              if (currentChapter === null) {
                onSelectChapter(1);
              } else if (currentChapter < totalChapters) {
                onSelectChapter(currentChapter + 1);
              }
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-gold-400/60 bg-gold-400/20 px-3.5 py-2 text-[14px] font-semibold text-gold-300 transition hover:bg-gold-400 hover:text-navy-950 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span>Next Chapter</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
