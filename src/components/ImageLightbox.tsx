"use client";

import React from "react";
import { X, ZoomIn } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption: string;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  src,
  alt,
  caption,
}: ImageLightboxProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-xl sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] max-w-6xl overflow-hidden rounded-3xl border-2 border-gold-400/60 bg-navy-900 p-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider text-gold-300">
            <ZoomIn className="h-4 w-4" />
            <span>FULL-RESOLUTION ARCHIVAL PHOTOGRAPH VIEW</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 rounded-xl border border-gold-400/40 bg-navy-950 px-3.5 py-1.5 font-mono text-[13px] text-ivory-50 hover:border-gold-400"
          >
            <X className="h-4 w-4" />
            <span>Close</span>
          </button>
        </div>

        <div className="overflow-auto rounded-2xl bg-navy-950">
          <img
            src={src}
            alt={alt}
            className="mx-auto max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>

        <p className="mt-3 text-center font-serif text-[19px] italic text-lavender-200">
          {caption}
        </p>
      </div>
    </div>
  );
}
