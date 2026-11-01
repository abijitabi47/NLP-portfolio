"use client";

import React from "react";
import { BookOpen, ExternalLink, Quote } from "lucide-react";

export default function MediumPublication() {
  return (
    <div className="ivory-editorial-sheet relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-14">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-navy-900/15 pb-6">
        <span className="rounded-full bg-navy-900 px-4 py-1.5 font-mono text-[13px] font-bold uppercase tracking-[0.22em] text-gold-300">
          MEDIUM PUBLICATION • PRAGMATICS & HUMAN COMMUNICATION
        </span>
        <span className="font-mono text-[14px] font-semibold text-navy-800">
          By Abijit I B (@abijit.ib2023)
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
          <h2 className="font-serif text-[38px] font-bold leading-[1.12] text-navy-950 sm:text-[48px]">
            The Silent Language of Passive Aggression: Understanding What People Don&apos;t Say
          </h2>

          <p className="text-[19px] leading-relaxed text-navy-800">
            Human language operates on multiple layers: what is explicitly uttered at the surface level and what is pragmatically implied beneath it. This article examines the subtle linguistic markers, conversational pauses, and indirect phrasing through which passive aggression communicates unspoken tension.
          </p>

          <p className="text-[18px] leading-relaxed text-navy-800/90">
            Through the lens of discourse pragmatics and interpersonal communication, the essay explores why speakers resort to veiled expressions, how listeners decode concealed intent, and why recognizing what remains unsaid is essential both for human empathy and for deeper pragmatic modeling in language systems.
          </p>

          <div className="pt-4">
            <a
              href="https://medium.com/@abijit.ib2023/the-silent-language-of-passive-aggression-understanding-what-people-dont-say-3a40d6077e3b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-navy-950 px-8 py-4 text-[17px] font-bold uppercase tracking-wider text-gold-300 shadow-xl transition hover:bg-royal-900"
            >
              <BookOpen className="h-5 w-5" />
              <span>Read Article on Medium</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-navy-900/15 bg-ivory-200/70 p-7 lg:col-span-4">
          <Quote className="h-10 w-10 text-gold-600" />
          <p className="my-6 font-serif text-[24px] italic leading-snug text-navy-950">
            &ldquo;The most complex meaning in human dialogue often resides not in the tokens spoken, but in the deliberate silences and indirect framing between them.&rdquo;
          </p>
          <div className="border-t border-navy-900/15 pt-4 font-mono text-[13px] uppercase tracking-wider text-navy-800">
            PUBLISHED ON MEDIUM • PRAGMATICS & DISCOURSE
          </div>
        </div>
      </div>
    </div>
  );
}
