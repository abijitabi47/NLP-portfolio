"use client";

import React, { useState } from "react";
import {
  FileText,
  Cpu,
  Database,
  ExternalLink,
  Video,
  Presentation,
  Users,
  CheckCircle2,
  Terminal,
  BookOpen,
  Layers,
} from "lucide-react";
import { LEGAL_PROJECT_DATA } from "@/data/projects";

export default function LegalProject() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="space-y-12">
      {/* Motivation & Existing Gap Editorial Split */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-gold-400/35 bg-navy-900/90 p-7">
          <div className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-gold-300">
            01 • RESEARCH MOTIVATION
          </div>
          <h2 className="mt-2 font-serif text-[28px] font-bold text-ivory-50">
            Semantic Meaning Over Exact Keywords
          </h2>
          <p className="mt-3 text-[18px] leading-relaxed text-ivory-100/90">
            {LEGAL_PROJECT_DATA.motivation}
          </p>
        </div>

        <div className="rounded-2xl border border-lavender-300/35 bg-royal-900/60 p-7">
          <div className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-lavender-200">
            02 • EXISTING GAP ADDRESSED
          </div>
          <h2 className="mt-2 font-serif text-[28px] font-bold text-ivory-50">
            Overcoming Lexical Mismatch in Case Law
          </h2>
          <p className="mt-3 text-[18px] leading-relaxed text-ivory-100/90">
            {LEGAL_PROJECT_DATA.existingGap}
          </p>
        </div>
      </div>

      {/* Interactive System Architecture Diagram */}
      <section className="rounded-3xl border border-gold-400/40 bg-navy-950/90 p-7 sm:p-9">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-gold-300">
              INTERACTIVE SYSTEM ARCHITECTURE
            </span>
            <h2 className="mt-1 font-serif text-[32px] font-bold text-ivory-50">
              End-to-End Semantic Legal Retrieval Flow
            </h2>
          </div>
          <span className="font-mono text-[13px] text-lavender-200">
            Click any stage to inspect technical execution
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {LEGAL_PROJECT_DATA.architectureStages.map((stage, idx) => {
            const selected = activeStage === idx;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`flex flex-col justify-between rounded-2xl border p-4 text-left transition-all ${
                  selected
                    ? "border-gold-400 bg-gold-400/20 shadow-[0_0_25px_rgba(212,175,55,0.3)] -translate-y-1"
                    : "border-ivory-100/15 bg-navy-900/80 hover:border-gold-400/50"
                }`}
              >
                <span className="font-mono text-[13px] font-bold text-gold-300">
                  STAGE {stage.step}
                </span>
                <span className="mt-2 font-serif text-[20px] font-bold leading-snug text-ivory-50">
                  {stage.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Inspector */}
        <div className="mt-6 rounded-2xl border border-gold-400/30 bg-royal-900/50 p-6">
          <div className="font-mono text-[13px] font-semibold uppercase tracking-widest text-gold-300">
            ACTIVE STAGE {LEGAL_PROJECT_DATA.architectureStages[activeStage].step} SPECIFICATION
          </div>
          <h3 className="mt-1 font-serif text-[26px] font-bold text-ivory-50">
            {LEGAL_PROJECT_DATA.architectureStages[activeStage].title}
          </h3>
          <p className="mt-2 text-[18px] text-ivory-100/90">
            {LEGAL_PROJECT_DATA.architectureStages[activeStage].detail}
          </p>
        </div>
      </section>

      {/* Dataset Statistics & Technology Stack */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="rounded-3xl border border-gold-400/35 bg-navy-900/85 p-7 lg:col-span-7">
          <div className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.2em] text-gold-300">
            <Database className="h-4 w-4" />
            CORPUS & EMBEDDING METRICS
          </div>
          <h2 className="mt-1 font-serif text-[30px] font-bold text-ivory-50">
            Supreme Court Judgment Dataset
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {LEGAL_PROJECT_DATA.datasetStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-ivory-100/15 bg-navy-950/80 p-5"
              >
                <div className="font-serif text-[38px] font-bold leading-none text-gold-300">
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-[13px] uppercase tracking-wider text-lavender-200">
                  {stat.suffix}
                </div>
                <div className="mt-2 text-[16px] font-medium text-ivory-50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-gold-400/35 bg-navy-900/85 p-7 lg:col-span-5">
          <div className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.2em] text-gold-300">
            <Cpu className="h-4 w-4" />
            TECHNOLOGY STACK
          </div>
          <h2 className="mt-1 font-serif text-[30px] font-bold text-ivory-50">
            Core Frameworks & Models
          </h2>
          <div className="mt-6 space-y-3.5">
            {LEGAL_PROJECT_DATA.techStack.map((item) => (
              <div
                key={item.category}
                className="flex flex-col justify-between rounded-xl border border-ivory-100/15 bg-navy-950/75 px-4 py-3 sm:flex-row sm:items-center"
              >
                <span className="font-mono text-[13px] uppercase tracking-wider text-gold-300">
                  {item.category}
                </span>
                <span className="text-[17px] font-semibold text-ivory-50">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prompt Used */}
      <div className="rounded-3xl border-l-4 border-gold-400 bg-navy-950/95 p-7 shadow-lg">
        <div className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.2em] text-gold-300">
          <Terminal className="h-4 w-4" />
          SYSTEM SPECIFICATION PROMPT USED
        </div>
        <blockquote className="mt-3 font-serif text-[24px] italic leading-relaxed text-ivory-50 sm:text-[26px]">
          {LEGAL_PROJECT_DATA.promptUsed}
        </blockquote>
      </div>

      {/* Visual NLP Pipeline & Implementation Contributions */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-ivory-100/20 bg-navy-900/85 p-7">
          <div className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.2em] text-gold-300">
            <Layers className="h-4 w-4" />
            6-STAGE NLP PIPELINE
          </div>
          <h3 className="mt-1 font-serif text-[28px] font-bold text-ivory-50">
            Connected Processing Stages
          </h3>
          <ol className="mt-6 space-y-4">
            {LEGAL_PROJECT_DATA.pipeline.map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-xl border border-ivory-100/10 bg-navy-950/75 p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-400 font-mono text-[14px] font-bold text-navy-950">
                  0{i + 1}
                </span>
                <span className="text-[17px] text-ivory-50">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-ivory-100/20 bg-navy-900/85 p-7">
            <h3 className="font-serif text-[28px] font-bold text-ivory-50">
              Implementation Contributions
            </h3>
            <ul className="mt-4 space-y-3">
              {LEGAL_PROJECT_DATA.contributions.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[17px] text-ivory-50">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-ivory-100/20 bg-navy-900/85 p-7">
            <div className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider text-gold-300">
              <Users className="h-4 w-4" />
              TARGET USERS, INPUT & OUTPUT
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {LEGAL_PROJECT_DATA.users.map((u) => (
                <span
                  key={u}
                  className="rounded-lg border border-gold-400/40 bg-gold-400/10 px-3.5 py-1.5 text-[15px] font-semibold text-gold-300"
                >
                  {u}
                </span>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-navy-950/80 p-4">
                <div className="font-mono text-[13px] uppercase text-lavender-300">Input</div>
                <div className="mt-1 text-[17px] font-semibold text-ivory-50">
                  {LEGAL_PROJECT_DATA.inputSpec}
                </div>
              </div>
              <div className="rounded-xl bg-navy-950/80 p-4">
                <div className="font-mono text-[13px] uppercase text-lavender-300">Output</div>
                <ul className="mt-1 space-y-1 text-[16px] text-ivory-50">
                  {LEGAL_PROJECT_DATA.outputSpec.map((o) => (
                    <li key={o}>• {o}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separate Subsection: Project Resources */}
      <section className="rounded-3xl border-2 border-gold-400/50 bg-gradient-to-br from-royal-900/80 via-navy-900 to-navy-950 p-7 sm:p-9">
        <div className="font-mono text-[13px] font-bold uppercase tracking-[0.22em] text-gold-300">
          PROJECT RESOURCES • VERIFIED DELIVERABLES
        </div>
        <h3 className="mt-1 font-serif text-[32px] font-bold text-ivory-50">
          Demonstration Video & Technical Presentation
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <a
            href={LEGAL_PROJECT_DATA.resources.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-gold-400/50 bg-navy-950/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-[0_15px_35px_rgba(212,175,55,0.3)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-300">
                <Video className="h-7 w-7" />
              </div>
              <div>
                <div className="font-mono text-[13px] uppercase tracking-wider text-gold-300">
                  GOOGLE DRIVE ARCHIVE
                </div>
                <div className="font-serif text-[26px] font-bold text-ivory-50">
                  Project Video
                </div>
              </div>
            </div>
            <ExternalLink className="h-6 w-6 text-gold-300 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={LEGAL_PROJECT_DATA.resources.pptUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-gold-400/50 bg-navy-950/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-[0_15px_35px_rgba(212,175,55,0.3)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royal-700/40 text-lavender-200">
                <Presentation className="h-7 w-7" />
              </div>
              <div>
                <div className="font-mono text-[13px] uppercase tracking-wider text-lavender-200">
                  GOOGLE DRIVE ARCHIVE
                </div>
                <div className="font-serif text-[26px] font-bold text-ivory-50">
                  Project Presentation (PPT)
                </div>
              </div>
            </div>
            <ExternalLink className="h-6 w-6 text-gold-300 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Academic References */}
      <section className="rounded-3xl border border-ivory-100/15 bg-navy-950/80 p-7">
        <div className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.2em] text-gold-300">
          <BookOpen className="h-4 w-4" />
          ACADEMIC BIBLIOGRAPHY & REFERENCES
        </div>
        <ol className="mt-4 space-y-3">
          {LEGAL_PROJECT_DATA.references.map((ref) => (
            <li
              key={ref.id}
              className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-ivory-100/10 bg-navy-900/60 px-4 py-3 text-[16px]"
            >
              <span className="text-ivory-50">
                <strong className="font-mono text-gold-300">[{ref.id}]</strong>{" "}
                {ref.citation}
              </span>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[14px] text-gold-300 underline hover:text-gold-400"
              >
                <span>{ref.url}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
