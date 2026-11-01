"use client";

import React from "react";
import { ArrowUpRight, BookOpenCheck, Clock } from "lucide-react";
import { CHAPTERS, STUDENT_INFO } from "@/data/chapters";
import StarRecognition from "./StarRecognition";

interface TableOfContentsProps {
  onSelectChapter: (id: number) => void;
}

export default function TableOfContents({ onSelectChapter }: TableOfContentsProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="journal-page rounded-[2rem] p-6 sm:p-10 lg:p-12">
        <div className="border-b border-gold-400/30 pb-6">
          <div className="font-mono text-[14px] uppercase tracking-[0.25em] text-gold-300">
            {STUDENT_INFO.courseName} • {STUDENT_INFO.courseCode}
          </div>
          <h2 className="mt-2 font-serif text-[40px] font-bold text-ivory-50 sm:text-[48px]">
            Interactive Table of Contents
          </h2>
          <p className="mt-2 max-w-3xl text-[18px] text-lavender-200">
            Select any chapter below to open the corresponding research section, interactive architecture, linguistic experiment, or industry case study.
          </p>
        </div>

        {/* Prominent 10 Stars Recognition */}
        <StarRecognition />

        {/* 8 Chapters Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CHAPTERS.map((chapter) => (
            <button
              key={chapter.id}
              type="button"
              onClick={() => onSelectChapter(chapter.id)}
              className="group relative flex flex-col justify-between rounded-2xl border border-gold-400/30 bg-navy-900/85 p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400 hover:bg-navy-800/90 hover:shadow-[0_20px_45px_rgba(0,0,0,0.65)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-lg border border-gold-400/40 bg-gold-400/10 px-3 py-1 font-mono text-[13px] font-bold uppercase tracking-widest text-gold-300">
                    {chapter.code}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[13px] text-lavender-300">
                    <Clock className="h-3.5 w-3.5 text-gold-400" />
                    {chapter.readingTime}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-[28px] font-bold leading-snug text-ivory-50 group-hover:text-gold-300 sm:text-[32px]">
                  {chapter.title}
                </h3>
                <p className="mt-1 font-serif text-[19px] italic text-lavender-200">
                  {chapter.subtitle}
                </p>
                <p className="mt-3 text-[16px] leading-relaxed text-ivory-100/85">
                  {chapter.summary}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-ivory-100/10 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {chapter.keywords.slice(0, 3).map((kw) => (
                    <span
                      key={kw}
                      className="rounded-md bg-royal-800/80 px-2.5 py-0.5 font-mono text-[12px] text-lavender-200"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 font-mono text-[13px] font-bold uppercase tracking-wider text-gold-300 group-hover:translate-x-1">
                  <BookOpenCheck className="h-4 w-4" />
                  Read Chapter
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
