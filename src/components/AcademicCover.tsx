"use client";

import React from "react";
import { BookOpen, Sparkles, GraduationCap, Calendar, UserCheck, Hash, Building2 } from "lucide-react";
import { STUDENT_INFO } from "@/data/chapters";
import Profile3D from "./Profile3D";
import StarRecognition from "./StarRecognition";

interface AcademicCoverProps {
  onOpenJournal: () => void;
}

export default function AcademicCover({ onOpenJournal }: AcademicCoverProps) {
  return (
    <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Main 3D Hardcover Journal Binding Container */}
      <div className="journal-page relative overflow-hidden rounded-[2.25rem] p-6 sm:p-10 lg:p-14">
        {/* Book Spine Left Edge Highlight */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-3 bg-gradient-to-r from-gold-500/60 via-gold-300/25 to-transparent" />

        {/* Top Editorial Masthead */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gold-400/30 pb-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-3 w-3 rounded-full bg-gold-400 shadow-[0_0_12px_#D4AF37]" />
            <span className="font-mono text-[14px] font-semibold uppercase tracking-[0.28em] text-gold-300">
              ACADEMIC RESEARCH JOURNAL • DIGITAL EDITION
            </span>
          </div>
          <div className="font-mono text-[14px] text-lavender-200">
            VELLORE INSTITUTE OF TECHNOLOGY • FALL SEMESTER 2026–27
          </div>
        </div>

        {/* Cover Main Grid: Left Academic Hierarchy + Right 3D Portrait */}
        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Section — Strict Visual Hierarchy */}
          <div className="space-y-6 lg:col-span-7">
            {/* 1. Website Title: NLP PORTFOLIO (68-88px desktop) */}
            <div>
              <span className="inline-block rounded-lg border border-gold-400/40 bg-gold-400/10 px-3.5 py-1 font-mono text-[13px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                VOLUME I • COMPUTATIONAL LINGUISTICS ARCHIVE
              </span>
              <h1 className="mt-3 font-serif text-[52px] font-bold leading-[1.02] tracking-tight text-ivory-50 sm:text-[68px] lg:text-[80px]">
                {STUDENT_INFO.websiteTitle}
              </h1>
            </div>

            {/* 2 & 3. Course Name (36-48px) and Course Code CSI4001 (44-58px) — Highest Visual Priority */}
            <div className="rounded-3xl border-2 border-gold-400/55 bg-gradient-to-br from-royal-900/90 via-navy-800/95 to-navy-900 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.55)] sm:p-7">
              <div className="font-mono text-[13px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                COURSE SPECIFICATION & ACADEMIC ARCHIVE
              </div>
              <h2 className="mt-2 font-serif text-[30px] font-bold uppercase leading-[1.15] tracking-wide text-ivory-50 sm:text-[38px] lg:text-[44px]">
                {STUDENT_INFO.courseName}
              </h2>
              <div className="mt-4 flex flex-wrap items-baseline gap-4 border-t border-gold-400/30 pt-4">
                <span className="font-mono text-[14px] uppercase tracking-[0.2em] text-lavender-200">
                  COURSE CODE:
                </span>
                <span className="font-serif text-[42px] font-extrabold leading-none tracking-wider text-gold-300 drop-shadow-[0_2px_18px_rgba(212,175,55,0.45)] sm:text-[50px] lg:text-[56px]">
                  {STUDENT_INFO.courseCode}
                </span>
              </div>
            </div>

            {/* 4 to 8. Student Name (32-42px), Institution, Semester, Faculty, Registration Number */}
            <div className="space-y-4 rounded-2xl border border-ivory-100/15 bg-navy-900/75 p-6">
              <div className="border-b border-ivory-100/10 pb-4">
                <div className="font-mono text-[13px] uppercase tracking-[0.2em] text-gold-300">
                  AUTHORED & RESEARCHED BY
                </div>
                <div className="mt-1 font-serif text-[32px] font-bold leading-tight text-ivory-50 sm:text-[38px]">
                  {STUDENT_INFO.studentName}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Building2 className="mt-1 h-5 w-5 shrink-0 text-gold-400" />
                  <div>
                    <div className="font-mono text-[13px] uppercase tracking-wider text-lavender-300">
                      Institution
                    </div>
                    <div className="text-[17px] font-semibold text-ivory-50">
                      {STUDENT_INFO.institutionShort}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="mt-1 h-5 w-5 shrink-0 text-gold-400" />
                  <div>
                    <div className="font-mono text-[13px] uppercase tracking-wider text-lavender-300">
                      Semester
                    </div>
                    <div className="text-[17px] font-semibold text-ivory-50">
                      {STUDENT_INFO.semester}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <UserCheck className="mt-1 h-5 w-5 shrink-0 text-gold-400" />
                  <div>
                    <div className="font-mono text-[13px] uppercase tracking-wider text-lavender-300">
                      Faculty
                    </div>
                    <div className="text-[17px] font-semibold text-gold-300">
                      {STUDENT_INFO.faculty}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Hash className="mt-1 h-5 w-5 shrink-0 text-gold-400" />
                  <div>
                    <div className="font-mono text-[13px] uppercase tracking-wider text-lavender-300">
                      Registration Number
                    </div>
                    <div className="font-mono text-[17px] font-bold text-ivory-50">
                      {STUDENT_INFO.registrationNumber}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Interaction: OPEN MY JOURNAL */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenJournal}
                className="group relative inline-flex w-full items-center justify-center gap-4 overflow-hidden rounded-2xl border-2 border-gold-300 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 px-8 py-5 text-[20px] font-bold uppercase tracking-[0.18em] text-navy-950 shadow-[0_15px_40px_rgba(212,175,55,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(212,175,55,0.65)] sm:w-auto"
              >
                <BookOpen className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
                <span>OPEN MY JOURNAL</span>
                <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              </button>
            </div>
          </div>

          {/* Right Section — 3D Personal Portrait Presentation */}
          <div className="lg:col-span-5">
            <Profile3D />
          </div>
        </div>

        {/* Dedicated Class Activity Recognition — 10 Stars Earned */}
        <StarRecognition />
      </div>
    </div>
  );
}
