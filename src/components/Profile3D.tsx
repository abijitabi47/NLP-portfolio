"use client";

import React, { useState, useRef } from "react";
import { Sparkles, ShieldCheck, GraduationCap } from "lucide-react";

export default function Profile3D() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 12;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div
      className="relative flex items-center justify-center py-4"
      style={{ perspective: "1400px" }}
    >
      {/* Ambient Purple & Gold Glow Behind Frame */}
      <div className="pointer-events-none absolute -inset-4 rounded-[2.25rem] bg-gradient-to-tr from-royal-700/45 via-gold-400/25 to-lavender-400/30 blur-2xl" />

      <div
        ref={frameRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: "transform 180ms cubic-bezier(0.22, 1, 0.36, 1)",
          transformStyle: "preserve-3d",
        }}
        className="group relative w-full max-w-[390px] cursor-pointer rounded-[2rem] border-2 border-gold-400/50 bg-gradient-to-b from-navy-800/95 via-navy-900 to-navy-950 p-3.5 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)]"
      >
        {/* Outer Gold Filigree Corner Accents */}
        <div className="pointer-events-none absolute -left-1.5 -top-1.5 h-8 w-8 rounded-tl-2xl border-l-2 border-t-2 border-gold-300/80" />
        <div className="pointer-events-none absolute -right-1.5 -top-1.5 h-8 w-8 rounded-tr-2xl border-r-2 border-t-2 border-gold-300/80" />
        <div className="pointer-events-none absolute -bottom-1.5 -left-1.5 h-8 w-8 rounded-bl-2xl border-b-2 border-l-2 border-gold-300/80" />
        <div className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-8 w-8 rounded-br-2xl border-b-2 border-r-2 border-gold-300/80" />

        {/* Inner Layered Bevel Frame */}
        <div className="relative overflow-hidden rounded-[1.5rem] border border-ivory-100/20 bg-navy-950 shadow-inner">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src="/images/profile.jpg"
              alt="Abijit I B — Integrated M.Tech Student at VIT Vellore"
              className="h-full w-full object-cover object-[center_22%] transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Subtle Editorial Vignette & Lighting Overlay */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(212, 175, 55, 0.22) 0%, rgba(107, 70, 193, 0.14) 40%, rgba(7, 11, 25, 0.55) 100%)`,
              }}
            />
          </div>

          {/* Floating Academic Nameplate */}
          <div
            style={{ transform: "translateZ(35px)" }}
            className="border-t border-gold-400/30 bg-navy-950/95 px-5 py-4 backdrop-blur-md"
          >
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-gold-300">
                  RESEARCHER PROFILE • 23MIC0013
                </p>
                <h2 className="font-serif text-[26px] font-bold leading-tight text-ivory-50">
                  Abijit I B
                </h2>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-400/40 bg-gold-400/10 text-gold-300">
                <GraduationCap className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-[13px] text-lavender-200/90">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-gold-400" />
                VIT Vellore
              </span>
              <span className="inline-flex items-center gap-1 text-gold-300">
                <Sparkles className="h-3.5 w-3.5" />
                CSI4001 Scholar
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
