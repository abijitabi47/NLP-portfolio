"use client";

import React, { useState } from "react";
import { Star, Award, Sparkles } from "lucide-react";

export default function StarRecognition() {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(true);

  return (
    <section
      aria-label="Class Activity Recognition"
      className="relative my-8 overflow-hidden rounded-3xl border-2 border-gold-400/45 bg-gradient-to-r from-navy-900/95 via-royal-900/90 to-navy-900/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] md:p-8"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-3.5 py-1 text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-300">
            <Award className="h-4 w-4 text-gold-400" />
            Course Distinction • CSI4001
          </div>
          <h2 className="font-serif text-[32px] font-bold leading-tight text-ivory-50 md:text-[38px]">
            Class Activity Recognition
          </h2>
          <p className="max-w-2xl text-[17px] text-lavender-200/95">
            Recognized for consistent academic engagement, interactive problem-solving, and classroom contributions throughout{" "}
            <span className="font-semibold text-ivory-50">
              Natural Language Processing and Computational Linguistics (CSI4001)
            </span>
            .
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 lg:items-end">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-gold-400/60 bg-gradient-to-r from-gold-500/20 via-gold-400/15 to-gold-500/20 px-5 py-3 shadow-lg">
            <Sparkles className="h-6 w-6 text-gold-300" />
            <span className="font-serif text-[28px] font-bold tracking-wide text-gold-300 md:text-[34px]">
              10 Stars Earned
            </span>
          </div>

          <button
            type="button"
            onClick={() => setRevealed((prev) => !prev)}
            className="text-[13px] font-medium uppercase tracking-wider text-lavender-300 underline decoration-gold-400/50 underline-offset-4 hover:text-gold-300"
          >
            Replay Star-Reveal Animation
          </button>
        </div>
      </div>

      {/* 10 Interactive 3D Gold Stars Row */}
      <div className="relative z-10 mt-6 grid grid-cols-5 gap-3 sm:grid-cols-10">
        {Array.from({ length: 10 }).map((_, index) => {
          const starNum = index + 1;
          const isHighlighted = hoveredStar !== null ? starNum <= hoveredStar : revealed;
          return (
            <div
              key={starNum}
              onMouseEnter={() => setHoveredStar(starNum)}
              onMouseLeave={() => setHoveredStar(null)}
              style={{
                transitionDelay: `${index * 45}ms`,
              }}
              className={`group flex flex-col items-center justify-center rounded-2xl border p-3 transition-all duration-300 ${
                isHighlighted
                  ? "border-gold-400/60 bg-gold-400/15 shadow-[0_8px_20px_rgba(212,175,55,0.22)] -translate-y-1"
                  : "border-ivory-100/10 bg-navy-950/60 opacity-60"
              }`}
            >
              <Star
                className={`h-7 w-7 transition-transform duration-300 group-hover:scale-125 ${
                  isHighlighted
                    ? "fill-gold-400 text-gold-300 drop-shadow-[0_0_10px_rgba(212,175,55,0.65)]"
                    : "text-lavender-300"
                }`}
              />
              <span className="mt-1.5 font-mono text-[12px] font-semibold text-gold-300">
                #{starNum.toString().padStart(2, "0")}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
