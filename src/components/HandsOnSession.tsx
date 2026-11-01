"use client";

import React from "react";
import { Github, ExternalLink, Code2, Terminal, Cpu } from "lucide-react";

export default function HandsOnSession() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-ivory-100/15 bg-navy-900/80 p-6">
          <Code2 className="h-8 w-8 text-gold-400" />
          <h3 className="mt-4 font-serif text-[26px] font-bold text-ivory-50">
            Hands-on NLP Activities
          </h3>
          <p className="mt-2 text-[17px] text-ivory-100/85">
            Structured laboratory notebooks covering tokenization, morphological analysis, POS tagging, syntactic parsing, and vector representations.
          </p>
        </div>

        <div className="rounded-2xl border border-ivory-100/15 bg-navy-900/80 p-6">
          <Terminal className="h-8 w-8 text-gold-400" />
          <h3 className="mt-4 font-serif text-[26px] font-bold text-ivory-50">
            Practical Implementation
          </h3>
          <p className="mt-2 text-[17px] text-ivory-100/85">
            End-to-end Python workflows translating theoretical computational linguistics formulations into reproducible code pipelines.
          </p>
        </div>

        <div className="rounded-2xl border border-ivory-100/15 bg-navy-900/80 p-6">
          <Cpu className="h-8 w-8 text-gold-400" />
          <h3 className="mt-4 font-serif text-[26px] font-bold text-ivory-50">
            Learning & Experimentation
          </h3>
          <p className="mt-2 text-[17px] text-ivory-100/85">
            Iterative experimentation comparing classical statistical text processing with modern transformer-based embeddings.
          </p>
        </div>
      </div>

      {/* 3D Interactive GitHub Repository Panel */}
      <div className="group relative overflow-hidden rounded-3xl border-2 border-gold-400/55 bg-gradient-to-br from-navy-900 via-royal-900/85 to-navy-950 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.65)] transition-all duration-300 hover:-translate-y-1.5">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2.5 rounded-xl border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 font-mono text-[14px] font-semibold text-gold-300">
              <Github className="h-5 w-5" />
              <span>GITHUB REPOSITORY • PRACTICAL NLP LABS</span>
            </div>
            <h2 className="font-serif text-[34px] font-bold text-ivory-50 sm:text-[40px]">
              abijitabi47 / NLP
            </h2>
            <p className="max-w-2xl text-[18px] text-lavender-200">
              Dedicated source repository housing hands-on Natural Language Processing implementations, course laboratory scripts, and computational linguistics experiments for CSI4001.
            </p>
          </div>

          <a
            href="https://github.com/abijitabi47/NLP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-2xl border-2 border-gold-300 bg-gold-400 px-7 py-4 text-[17px] font-bold uppercase tracking-wider text-navy-950 shadow-lg transition hover:bg-gold-300"
          >
            <Github className="h-5 w-5" />
            <span>Visit Repository</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
