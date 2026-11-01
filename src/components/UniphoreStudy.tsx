"use client";

import React from "react";
import { Building2, Users2, Layers, Target, Cpu, Sparkles, ExternalLink } from "lucide-react";

export default function UniphoreStudy() {
  return (
    <div className="space-y-10">
      {/* Assignment Framing Banner */}
      <div className="rounded-2xl border border-gold-400/45 bg-navy-900/90 p-6">
        <div className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-gold-300">
          ACADEMIC INDUSTRY CASE STUDY • ASSIGNMENT SCOPE
        </div>
        <p className="mt-2 text-[18px] text-ivory-50">
          A study of <strong className="text-gold-300">Uniphore</strong>, exploring its evolution from an Indian speech technology startup into a global NLP and enterprise AI company. The original academic assignment required researching an Indian or international NLP startup meeting an assignment threshold of generating annual revenue of ₹5 Crores or more.
        </p>
      </div>

      {/* 6 Research Dimensions Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-ivory-100/20 bg-navy-900/85 p-7">
          <div className="flex items-center gap-3 text-gold-300">
            <Building2 className="h-6 w-6" />
            <span className="font-mono text-[13px] font-bold uppercase tracking-widest">
              01 • COMPANY ORIGIN
            </span>
          </div>
          <h3 className="mt-3 font-serif text-[28px] font-bold text-ivory-50">
            IIT Madras Incubation to Global AI Leader
          </h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ivory-100/90">
            Founded in 2008 and incubated at the Indian Institute of Technology (IIT) Madras in Chennai, India, Uniphore began with a focus on vernacular speech recognition and voice biometrics for rural and emerging markets before expanding its global headquarters to Palo Alto, California.
          </p>
        </div>

        <div className="rounded-3xl border border-ivory-100/20 bg-navy-900/85 p-7">
          <div className="flex items-center gap-3 text-gold-300">
            <Users2 className="h-6 w-6" />
            <span className="font-mono text-[13px] font-bold uppercase tracking-widest">
              02 • FOUNDERS
            </span>
          </div>
          <h3 className="mt-3 font-serif text-[28px] font-bold text-ivory-50">
            Umesh Sachdev & Ravi Saraogi
          </h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ivory-100/90">
            Co-founded by <strong className="text-ivory-50">Umesh Sachdev</strong> (Chief Executive Officer) and{" "}
            <strong className="text-ivory-50">Ravi Saraogi</strong> (Co-founder and President, APAC), who envisioned bridging the human-machine communication divide across diverse global languages and dialects.
          </p>
        </div>

        <div className="rounded-3xl border border-ivory-100/20 bg-navy-900/85 p-7">
          <div className="flex items-center gap-3 text-gold-300">
            <Layers className="h-6 w-6" />
            <span className="font-mono text-[13px] font-bold uppercase tracking-widest">
              03 • PRODUCTS AND SERVICES
            </span>
          </div>
          <h3 className="mt-3 font-serif text-[28px] font-bold text-ivory-50">
            Business AI Cloud, X Platform, U & Q Suites
          </h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ivory-100/90">
            Early flagship speech analytics and virtual assistant products (<strong className="text-ivory-50">auMina, Akeira, amVoice</strong>) evolved into the unified <strong className="text-ivory-50">X Platform</strong> and <strong className="text-ivory-50">Business AI Cloud</strong>—powering contact-center automation (<strong className="text-ivory-50">U-Self Serve, U-Assist</strong>), sales intelligence (<strong className="text-ivory-50">Q for Sales</strong>), and composable enterprise AI agents.
          </p>
        </div>

        <div className="rounded-3xl border border-ivory-100/20 bg-navy-900/85 p-7">
          <div className="flex items-center gap-3 text-gold-300">
            <Target className="h-6 w-6" />
            <span className="font-mono text-[13px] font-bold uppercase tracking-widest">
              04 • TARGET CUSTOMERS
            </span>
          </div>
          <h3 className="mt-3 font-serif text-[28px] font-bold text-ivory-50">
            Global Enterprises & Regulated Sectors
          </h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ivory-100/90">
            Serves large-scale enterprises across banking and financial services, telecommunications, healthcare, insurance, logistics, and public services (including organizations such as JPMorgan Chase, Verizon, Vodafone, DHL, UPS, and NTT DATA).
          </p>
        </div>

        <div className="rounded-3xl border border-ivory-100/20 bg-navy-900/85 p-7">
          <div className="flex items-center gap-3 text-gold-300">
            <Cpu className="h-6 w-6" />
            <span className="font-mono text-[13px] font-bold uppercase tracking-widest">
              05 • TECHNOLOGIES USED
            </span>
          </div>
          <h3 className="mt-3 font-serif text-[28px] font-bold text-ivory-50">
            Conversational NLP, Speech & Multimodal AI
          </h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ivory-100/90">
            Combines Automatic Speech Recognition (ASR), Natural Language Understanding (NLU), tonal and video Emotion AI, computer vision, Small and Large Language Models (SLMs/LLMs), knowledge graphs, and Robotic Process Automation (RPA).
          </p>
        </div>

        <div className="rounded-3xl border border-ivory-100/20 bg-navy-900/85 p-7">
          <div className="flex items-center gap-3 text-gold-300">
            <Sparkles className="h-6 w-6" />
            <span className="font-mono text-[13px] font-bold uppercase tracking-widest">
              06 • KEY INNOVATIONS
            </span>
          </div>
          <h3 className="mt-3 font-serif text-[28px] font-bold text-ivory-50">
            Multilingual Speech & Multimodal Emotion AI
          </h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ivory-100/90">
            Pioneered vernacular Indian and global multilingual speech analytics, real-time acoustic + facial emotion analysis in video interactions (via Emotion Research Lab and Hexagone), and sovereign zero-copy enterprise agentic AI orchestration.
          </p>
        </div>
      </div>

      {/* Sources Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-ivory-100/15 bg-navy-950/80 px-6 py-4 text-[15px]">
        <span className="text-lavender-200">
          Verified Company Sources: Uniphore Official Profile & Historical Overview
        </span>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.uniphore.com/our-team/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-gold-300 underline"
          >
            <span>uniphore.com</span>
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Uniphore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-gold-300 underline"
          >
            <span>Wikipedia: Uniphore</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
