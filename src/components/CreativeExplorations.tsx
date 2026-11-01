"use client";

import React, { useState } from "react";
import { Sparkles, Music, Scale, Layers } from "lucide-react";

const TIGER_DIMENSIONS = [
  {
    attribute: "Strength",
    interpretation:
      "Commands deep conceptual rigor across mathematical linguistics, neural architectures, and algorithmic foundations.",
  },
  {
    attribute: "Confidence",
    interpretation:
      "Demonstrates decisive clarity when navigating complex syntactic ambiguity, transformer mechanics, and research critiques.",
  },
  {
    attribute: "Intensity",
    interpretation:
      "Brings high intellectual energy and focused scholarly discipline that motivates students to push beyond superficial learning.",
  },
  {
    attribute: "Expertise",
    interpretation:
      "Embodies mastery at the apex of the domain—akin to an apex predator in its natural habitat of Computational Linguistics.",
  },
  {
    attribute: "Authority",
    interpretation:
      "Sets rigorous academic standards and guides classroom discourse with respected scholarly leadership.",
  },
];

export default function CreativeExplorations() {
  const [selectedTrait, setSelectedTrait] = useState(0);
  const [highlightDiffs, setHighlightDiffs] = useState(true);

  return (
    <div className="space-y-14">
      {/* SUBSECTION A: Metaphor Exploration */}
      <section className="rounded-3xl border border-gold-400/40 bg-navy-900/90 p-7 sm:p-10">
        <div className="inline-flex items-center gap-2 rounded-lg border border-gold-400/40 bg-gold-400/10 px-3.5 py-1 font-mono text-[13px] font-bold uppercase tracking-widest text-gold-300">
          <Sparkles className="h-4 w-4" />
          SUBSECTION A • METAPHOR EXPLORATION
        </div>
        <h2 className="mt-3 font-serif text-[34px] font-bold text-ivory-50 sm:text-[42px]">
          &ldquo;My Teacher Is a Tiger in NLP&rdquo;
        </h2>
        <p className="mt-3 max-w-3xl text-[18px] text-lavender-200">
          In computational semantics and cognitive linguistics, a nominal metaphor maps salient attributes from a{" "}
          <strong className="text-ivory-50">source domain (&ldquo;Tiger&rdquo;)</strong> onto a{" "}
          <strong className="text-ivory-50">target domain (&ldquo;Teacher in NLP&rdquo;)</strong>. Literal biological predicates are suppressed while high-salience relational properties—strength, confidence, intensity, expertise, and authority—are projected based on academic context.
        </p>

        {/* Focus Areas Pills */}
        <div className="mt-5 flex flex-wrap gap-2.5">
          {[
            "Figurative language",
            "Metaphor interpretation",
            "Contextual meaning",
            "Semantic understanding",
          ].map((area) => (
            <span
              key={area}
              className="rounded-xl border border-lavender-300/35 bg-royal-800/70 px-4 py-1.5 font-mono text-[13px] font-semibold text-ivory-50"
            >
              {area}
            </span>
          ))}
        </div>

        {/* Interactive 5-Attribute Semantic Projection Explorer */}
        {/* <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-5">
          {TIGER_DIMENSIONS.map((item, idx) => (
            <button
              key={item.attribute}
              type="button"
              onClick={() => setSelectedTrait(idx)}
              className={`rounded-2xl border p-4 text-left transition-all ${
                selectedTrait === idx
                  ? "border-gold-400 bg-gold-400/20 shadow-lg -translate-y-1"
                  : "border-ivory-100/15 bg-navy-950/75 hover:border-gold-400/40"
              }`}
            >
              <div className="font-mono text-[12px] uppercase tracking-wider text-gold-300">
                DIMENSION 0{idx + 1}
              </div>
              <div className="mt-1 font-serif text-[24px] font-bold text-ivory-50">
                {item.attribute}
              </div>
            </button>
          ))}
        </div> */}

        {/* <div className="mt-5 rounded-2xl border border-gold-400/35 bg-navy-950 p-6">
          <div className="font-mono text-[13px] uppercase tracking-wider text-gold-300">
            CONTEXTUAL SEMANTIC PROJECTION: {TIGER_DIMENSIONS[selectedTrait].attribute.toUpperCase()}
          </div>
          <p className="mt-2 text-[18px] text-ivory-50">
            {TIGER_DIMENSIONS[selectedTrait].interpretation}
          </p>
        </div> */}
      </section>

      {/* SUBSECTION B: Song Translation and Semantic Comparison */}
      <section className="rounded-3xl border border-gold-400/40 bg-navy-900/90 p-7 sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-gold-400/40 bg-gold-400/10 px-3.5 py-1 font-mono text-[13px] font-bold uppercase tracking-widest text-gold-300">
              <Music className="h-4 w-4" />
              SUBSECTION B • SONG TRANSLATION & SEMANTIC COMPARISON
            </div>
            <h2 className="mt-3 font-serif text-[34px] font-bold text-ivory-50 sm:text-[42px]">
              Cross-Lingual Analysis: &ldquo;Aaradhike&rdquo; (Malayalam → English)
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setHighlightDiffs((prev) => !prev)}
            className="rounded-xl border border-gold-400/50 bg-gold-400/15 px-4 py-2.5 font-mono text-[13px] font-bold uppercase tracking-wider text-gold-300 transition hover:bg-gold-400 hover:text-navy-950"
          >
            {highlightDiffs ? "Hide Lexical Highlights" : "Highlight Lexical Differences"}
          </button>
        </div>

        {/* Metadata Strip */}
        <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-ivory-100/15 bg-navy-950/80 p-5 sm:grid-cols-3 lg:grid-cols-6">
          <div>
            <div className="font-mono text-[12px] uppercase text-lavender-300">Song</div>
            <div className="text-[17px] font-bold text-ivory-50">Aaradhike</div>
          </div>
          <div>
            <div className="font-mono text-[12px] uppercase text-lavender-300">Film</div>
            <div className="text-[17px] font-bold text-ivory-50">Ambili</div>
          </div>
          <div>
            <div className="font-mono text-[12px] uppercase text-lavender-300">Year</div>
            <div className="text-[17px] font-bold text-ivory-50">2019</div>
          </div>
          <div>
            <div className="font-mono text-[12px] uppercase text-lavender-300">Lyricist</div>
            <div className="text-[17px] font-bold text-ivory-50">Vinayak Sasikumar</div>
          </div>
          <div>
            <div className="font-mono text-[12px] uppercase text-lavender-300">Composer</div>
            <div className="text-[17px] font-bold text-ivory-50">Vishnu Vijay</div>
          </div>
          <div>
            <div className="font-mono text-[12px] uppercase text-lavender-300">Language</div>
            <div className="text-[17px] font-bold text-gold-300">Malayalam</div>
          </div>
        </div>

        {/* Original Malayalam Lyrics */}
        <div className="mt-6 rounded-2xl border border-gold-400/35 bg-gradient-to-r from-navy-950 via-royal-900/60 to-navy-950 p-6 text-center">
          <div className="font-mono text-[13px] uppercase tracking-[0.2em] text-gold-300">
            ORIGINAL MALAYALAM LYRICS
          </div>
          <p className="mt-3 font-serif text-[26px] font-semibold leading-relaxed text-ivory-50 sm:text-[30px]">
            ആരാധികേ മനസ്സിനരികെ
            <br />
            അഴകേ അഴകേ
            <br />
            നീയെന്റെ ഉള്ളിൽ വന്നില്ലേ?
          </p>
        </div>

        {/* Side-by-Side Translations Comparison */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ivory-100/20 bg-navy-950/90 p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[13px] font-bold uppercase tracking-wider text-lavender-200">
                TRANSLATION A — CHATGPT
              </span>
              <span className="rounded-lg bg-gold-400/20 px-3 py-1 font-mono text-[15px] font-bold text-gold-300">
                Score: 8.5 / 10
              </span>
            </div>
            <p className="mt-4 font-serif text-[24px] italic leading-relaxed text-ivory-50">
              &ldquo;O{" "}
              <span className={highlightDiffs ? "rounded bg-gold-400/25 px-1.5 text-gold-300" : ""}>
                beloved
              </span>
              , close to my heart,{" "}
              <span className={highlightDiffs ? "rounded bg-gold-400/25 px-1.5 text-gold-300" : ""}>
                beautiful one, beautiful one
              </span>
              , haven&apos;t you{" "}
              <span className={highlightDiffs ? "rounded bg-gold-400/25 px-1.5 text-gold-300" : ""}>
                entered my heart
              </span>
              ?&rdquo;
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gold-400/60 bg-navy-950/90 p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[13px] font-bold uppercase tracking-wider text-gold-300">
                TRANSLATION B — ALTERNATIVE ENGLISH TRANSLATION
              </span>
              <span className="rounded-lg bg-gold-400 px-3 py-1 font-mono text-[15px] font-bold text-navy-950">
                Score: 9 / 10
              </span>
            </div>
            <p className="mt-4 font-serif text-[24px] italic leading-relaxed text-ivory-50">
              &ldquo;O{" "}
              <span className={highlightDiffs ? "rounded bg-royal-700/70 px-1.5 text-lavender-200" : ""}>
                my beloved
              </span>
              , so close to my heart,{" "}
              <span className={highlightDiffs ? "rounded bg-royal-700/70 px-1.5 text-lavender-200" : ""}>
                so beautiful
              </span>
              , haven&apos;t you{" "}
              <span className={highlightDiffs ? "rounded bg-royal-700/70 px-1.5 text-lavender-200" : ""}>
                found a place within me
              </span>
              ?&rdquo;
            </p>
          </div>
        </div>

        {/* Lexical (Jaccard) & Semantic (Cosine) Qualitative Analysis */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-ivory-100/15 bg-navy-950/75 p-6">
            <div className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider text-gold-300">
              <Layers className="h-4 w-4" />
              LEXICAL DIFFERENCE — JACCARD SIMILARITY
            </div>
            <ul className="mt-3 space-y-2 text-[17px] text-ivory-50">
              <li>• &ldquo;beloved&rdquo; versus &ldquo;my beloved&rdquo;</li>
              <li>• &ldquo;entered my heart&rdquo; versus &ldquo;found a place within me&rdquo;</li>
              <li>• &ldquo;beautiful one&rdquo; versus &ldquo;so beautiful&rdquo;</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-ivory-100/15 bg-navy-950/75 p-6">
            <div className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider text-gold-300">
              <Scale className="h-4 w-4" />
              SEMANTIC SIMILARITY — COSINE SIMILARITY
            </div>
            <p className="mt-3 text-[17px] leading-relaxed text-ivory-50">
              Both translations express affection and admiration. Translation B uses a more natural romantic expression, while Translation A stays closer to the original wording.
            </p>
          </div>
        </div>

        {/* Evaluation Rubric Table */}
        <div className="mt-8 overflow-x-auto rounded-2xl border border-gold-400/35 bg-navy-950">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gold-400/30 bg-navy-900/90 font-mono text-[13px] uppercase tracking-wider text-gold-300">
                <th className="py-4 px-6">Criteria</th>
                <th className="py-4 px-6 text-right">Max Marks</th>
                <th className="py-4 px-6 text-right">Translation A (ChatGPT)</th>
                <th className="py-4 px-6 text-right">Translation B (Alternative)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ivory-100/10 text-[17px]">
              <tr>
                <td className="py-4 px-6 font-semibold text-ivory-50">Accuracy / Fidelity</td>
                <td className="py-4 px-6 text-right font-mono text-lavender-200">4</td>
                <td className="py-4 px-6 text-right font-mono text-ivory-50">3.5 / 4</td>
                <td className="py-4 px-6 text-right font-mono text-gold-300">3.5 / 4</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-ivory-50">Fluency / Naturalness</td>
                <td className="py-4 px-6 text-right font-mono text-lavender-200">3</td>
                <td className="py-4 px-6 text-right font-mono text-ivory-50">2.5 / 3</td>
                <td className="py-4 px-6 text-right font-mono font-bold text-gold-300">3 / 3</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-ivory-50">Cultural Context</td>
                <td className="py-4 px-6 text-right font-mono text-lavender-200">3</td>
                <td className="py-4 px-6 text-right font-mono text-ivory-50">2.5 / 3</td>
                <td className="py-4 px-6 text-right font-mono text-gold-300">2.5 / 3</td>
              </tr>
              <tr className="bg-gold-400/10 font-bold">
                <td className="py-4 px-6 text-gold-300">Total</td>
                <td className="py-4 px-6 text-right font-mono text-gold-300">10</td>
                <td className="py-4 px-6 text-right font-mono text-ivory-50">8.5 / 10</td>
                <td className="py-4 px-6 text-right font-mono text-gold-300">9 / 10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
