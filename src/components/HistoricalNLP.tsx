"use client";

import React, { useState } from "react";
import { Network, Compass, Sparkles } from "lucide-react";
import { HISTORICAL_NLP_NODES } from "@/data/projects";

export default function HistoricalNLP() {
  const [selectedId, setSelectedId] = useState<number>(1);
  const activeNode =
    HISTORICAL_NLP_NODES.find((n) => n.id === selectedId) || HISTORICAL_NLP_NODES[0];

  return (
    <div className="space-y-10">
      {/* Research Disclaimer Banner */}
      <div className="rounded-2xl border border-gold-400/45 bg-royal-900/60 p-6">
        <div className="flex items-center gap-2 font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-gold-300">
          <Compass className="h-4 w-4" />
          RESEARCH EXPLORATION & POTENTIAL CBDB APPLICATIONS
        </div>
        <p className="mt-2 text-[18px] text-ivory-50">
          This chapter presents a structured research exploration of 13 Natural Language Processing methodologies and their potential applications to historical Chinese corpora and the{" "}
          <strong className="text-gold-300">China Biographical Database (CBDB)</strong>. These represent scholarly research directions and methodological blueprints rather than claimed prior implementations.
        </p>
      </div>

      {/* Interactive 13-Node Knowledge Map Selector & Inspector */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left: 13 Interactive Connected Nodes */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
          {HISTORICAL_NLP_NODES.map((node) => {
            const isSelected = node.id === selectedId;
            const isConnected = activeNode.connectedTo.includes(node.id);
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedId(node.id)}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  isSelected
                    ? "border-gold-400 bg-gold-400/20 shadow-[0_0_25px_rgba(212,175,55,0.3)] -translate-y-0.5"
                    : isConnected
                    ? "border-lavender-300/50 bg-royal-900/50"
                    : "border-ivory-100/15 bg-navy-900/80 hover:border-gold-400/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-gold-300">
                    NODE {node.id.toString().padStart(2, "0")} • {node.category}
                  </span>
                  {isConnected && !isSelected && (
                    <span className="rounded bg-lavender-300/20 px-2 py-0.5 font-mono text-[11px] text-lavender-200">
                      Connected
                    </span>
                  )}
                </div>
                <div className="mt-1.5 font-serif text-[22px] font-bold text-ivory-50">
                  {node.title}
                </div>
                <p className="mt-1 text-[15px] text-ivory-100/80">{node.description}</p>
              </button>
            );
          })}
        </div>

        {/* Right: Deep Node Inspector */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 rounded-3xl border-2 border-gold-400/55 bg-navy-950/95 p-7 shadow-2xl">
            <div className="flex items-center gap-2 font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-gold-300">
              <Network className="h-4 w-4" />
              KNOWLEDGE NODE {activeNode.id.toString().padStart(2, "0")} OF 13
            </div>
            <h3 className="mt-2 font-serif text-[32px] font-bold text-ivory-50">
              {activeNode.title}
            </h3>
            <div className="mt-1 font-mono text-[13px] text-lavender-300">
              {activeNode.category}
            </div>

            <div className="mt-6 rounded-2xl border border-ivory-100/15 bg-navy-900/90 p-5">
              <div className="font-mono text-[12px] uppercase tracking-wider text-gold-300">
                Core Methodological Purpose
              </div>
              <p className="mt-1.5 text-[18px] font-medium text-ivory-50">
                {activeNode.description}
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-gold-400/30 bg-royal-900/40 p-5">
              <div className="flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-wider text-gold-300">
                <Sparkles className="h-3.5 w-3.5" />
                Potential Application in CBDB & Classical Corpora
              </div>
              <p className="mt-2 text-[17px] leading-relaxed text-ivory-100/90">
                {activeNode.cbdbApplication}
              </p>
            </div>

            <div className="mt-6">
              <div className="font-mono text-[12px] uppercase tracking-wider text-lavender-300">
                Connected Pipeline Nodes (Click to Traverse)
              </div>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {activeNode.connectedTo.map((cid) => {
                  const target = HISTORICAL_NLP_NODES.find((n) => n.id === cid);
                  if (!target) return null;
                  return (
                    <button
                      key={cid}
                      type="button"
                      onClick={() => setSelectedId(cid)}
                      className="rounded-xl border border-gold-400/40 bg-gold-400/10 px-3 py-1.5 font-mono text-[13px] text-gold-300 transition hover:bg-gold-400 hover:text-navy-950"
                    >
                      #{cid.toString().padStart(2, "0")} {target.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
