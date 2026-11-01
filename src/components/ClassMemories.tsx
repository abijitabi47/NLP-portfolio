"use client";

import React, { useState } from "react";
import { Maximize2, Users, Sparkles } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

export default function ClassMemories() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.2em] text-gold-300">
            <Users className="h-4 w-4" />
            CSI4001 COHORT ARCHIVE • VIT VELLORE
          </div>
          <h2 className="font-serif text-[32px] font-bold text-ivory-50 sm:text-[38px]">
            The People Behind the Learning
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="inline-flex items-center gap-2 rounded-2xl border border-gold-400/60 bg-gold-400/15 px-5 py-3 font-mono text-[14px] font-bold uppercase tracking-wider text-gold-300 transition hover:bg-gold-400 hover:text-navy-950"
        >
          <Maximize2 className="h-4 w-4" />
          <span>Expand Full Photograph Lightbox</span>
        </button>
      </div>

      {/* Wide Elegant 3D Image Frame Preserving Full Proportions */}
      <div
        onClick={() => setLightboxOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-[2rem] border-2 border-gold-400/55 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-950 p-4 shadow-[0_30px_70px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-1"
      >
        <div className="overflow-hidden rounded-[1.4rem] border border-ivory-100/20 bg-navy-950">
          <img
            src="/images/class-photo.jpg"
            alt="CSI4001 Natural Language Processing and Computational Linguistics Class Group Photograph with Faculty Dr. Sharmila Banu at VIT Vellore"
            className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 px-2">
          <div>
            <p className="font-serif text-[22px] font-semibold text-ivory-50">
              Natural Language Processing and Computational Linguistics (CSI4001) — Fall Semester 2026–27
            </p>
            <p className="text-[16px] text-lavender-200">
              Faculty Mentor: <strong className="text-gold-300">Dr. Sharmila Banu</strong> • Vellore Institute of Technology (VIT), Vellore
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-xl bg-gold-400/15 px-4 py-2 font-mono text-[13px] font-semibold text-gold-300">
            <Sparkles className="h-4 w-4" />
            Click image to inspect in full-screen lightbox
          </span>
        </div>
      </div>

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        src="/images/class-photo.jpg"
        alt="CSI4001 Class Group Photograph at VIT Vellore"
        caption="CSI4001 — Natural Language Processing and Computational Linguistics Cohort with Dr. Sharmila Banu at Vellore Institute of Technology, Vellore (Fall Semester 2026–27)."
      />
    </div>
  );
}
