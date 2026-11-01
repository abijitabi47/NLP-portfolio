"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Github, GraduationCap, Sparkles } from "lucide-react";
import { CHAPTERS, STUDENT_INFO } from "@/data/chapters";
import AcademicCover from "@/components/AcademicCover";
import BookNavigation from "@/components/BookNavigation";
import TableOfContents from "@/components/TableOfContents";
import ChapterLayout from "@/components/ChapterLayout";
import StarRecognition from "@/components/StarRecognition";
import LegalProject from "@/components/LegalProject";
import HandsOnSession from "@/components/HandsOnSession";
import MediumPublication from "@/components/MediumPublication";
import CreativeExplorations from "@/components/CreativeExplorations";
import HistoricalNLP from "@/components/HistoricalNLP";
import UniphoreStudy from "@/components/UniphoreStudy";
import ClassMemories from "@/components/ClassMemories";

const BookAnimation = dynamic(() => import("@/components/BookAnimation"), {
  ssr: false,
});

export default function HomePage() {
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState<number | null>(null);

  const handleOpenJournal = () => {
    setIsJournalOpen(true);
    setCurrentChapter(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectChapter = (chapterId: number | null) => {
    setIsJournalOpen(true);
    setCurrentChapter(chapterId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeChapterMeta =
    currentChapter !== null
      ? CHAPTERS.find((c) => c.id === currentChapter) || CHAPTERS[0]
      : null;

  return (
    <div className="relative min-h-screen pb-16">
      <BookAnimation isOpen={isJournalOpen} />

      {!isJournalOpen ? (
        <AcademicCover onOpenJournal={handleOpenJournal} />
      ) : (
        <>
          <BookNavigation
            currentChapter={currentChapter}
            onSelectChapter={handleSelectChapter}
            onReturnToCover={() => {
              setIsJournalOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />

          {currentChapter === null ? (
            <TableOfContents onSelectChapter={(id) => handleSelectChapter(id)} />
          ) : (
            activeChapterMeta && (
              <ChapterLayout
                chapter={activeChapterMeta}
                onSelectChapter={handleSelectChapter}
              >
                {currentChapter === 1 && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                      <div className="space-y-5 lg:col-span-8">
                        <div className="inline-flex items-center gap-2 rounded-lg border border-gold-400/40 bg-gold-400/10 px-3.5 py-1 font-mono text-[13px] font-bold uppercase tracking-widest text-gold-300">
                          <GraduationCap className="h-4 w-4" />
                          ACADEMIC RESEARCHER PROFILE
                        </div>
                        <h2 className="font-serif text-[36px] font-bold text-ivory-50 sm:text-[42px]">
                          {STUDENT_INFO.studentName}
                        </h2>
                        <p className="text-[20px] font-medium text-gold-300">
                          Integrated M.Tech student in Computer Science and Engineering at Vellore Institute of Technology, Vellore.
                        </p>
                        <p className="text-[18px] leading-relaxed text-ivory-100/90">
                          This digital research journal documents my academic work, semantic retrieval engineering, hands-on NLP laboratory implementations, editorial writing, cross-lingual translation evaluations, and research explorations completed for{" "}
                          <strong className="text-ivory-50">
                            Natural Language Processing and Computational Linguistics (CSI4001)
                          </strong>{" "}
                          during{" "}
                          <strong className="text-ivory-50">
                            {STUDENT_INFO.semester}
                          </strong>{" "}
                          under the guidance of{" "}
                          <strong className="text-gold-300">
                            {STUDENT_INFO.faculty}
                          </strong>
                          .
                        </p>
                      </div>

                      <div className="rounded-3xl border border-gold-400/35 bg-navy-950/90 p-6 lg:col-span-4">
                        <div className="font-mono text-[13px] uppercase tracking-wider text-gold-300">
                          ACADEMIC DOSSIER
                        </div>
                        <dl className="mt-4 space-y-3 text-[16px]">
                          <div className="flex justify-between border-b border-ivory-100/10 pb-2">
                            <dt className="text-lavender-300">Name</dt>
                            <dd className="font-semibold text-ivory-50">{STUDENT_INFO.studentName}</dd>
                          </div>
                          <div className="flex justify-between border-b border-ivory-100/10 pb-2">
                            <dt className="text-lavender-300">Reg. No.</dt>
                            <dd className="font-mono font-bold text-gold-300">{STUDENT_INFO.registrationNumber}</dd>
                          </div>
                          <div className="flex justify-between border-b border-ivory-100/10 pb-2">
                            <dt className="text-lavender-300">Course Code</dt>
                            <dd className="font-mono font-bold text-ivory-50">{STUDENT_INFO.courseCode}</dd>
                          </div>
                          <div className="flex justify-between border-b border-ivory-100/10 pb-2">
                            <dt className="text-lavender-300">Faculty</dt>
                            <dd className="font-semibold text-ivory-50">{STUDENT_INFO.faculty}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-lavender-300">Semester</dt>
                            <dd className="font-semibold text-ivory-50">{STUDENT_INFO.semester}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    {/* Core Research Interests */}
                    {/* <div className="rounded-3xl border border-ivory-100/15 bg-navy-900/80 p-7">
                      <div className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.2em] text-gold-300">
                        <Sparkles className="h-4 w-4" />
                        CORE RESEARCH & ACADEMIC INTERESTS
                      </div>
                      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {activeChapterMeta.keywords.map((interest, idx) => (
                          <div
                            key={interest}
                            className="rounded-2xl border border-gold-400/30 bg-navy-950/85 p-4"
                          >
                            <div className="font-mono text-[12px] text-gold-300">
                              DOMAIN 0{idx + 1}
                            </div>
                            <div className="mt-1 font-serif text-[23px] font-bold text-ivory-50">
                              {interest}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div> */}

                    <StarRecognition />
                  </div>
                )}

                {currentChapter === 2 && <LegalProject />}
                {currentChapter === 3 && <HandsOnSession />}
                {currentChapter === 4 && <MediumPublication />}
                {currentChapter === 5 && <CreativeExplorations />}
                {currentChapter === 6 && <HistoricalNLP />}
                {currentChapter === 7 && <UniphoreStudy />}
                {currentChapter === 8 && <ClassMemories />}
              </ChapterLayout>
            )
          )}
        </>
      )}

      {/* Minimal Academic Colophon Footer (No Contact Form / Section) */}
      {/* <footer className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-ivory-100/10 bg-navy-950/80 px-6 py-4 text-[14px] text-lavender-300">
          <div>
            <strong>{STUDENT_INFO.websiteTitle}</strong> • {STUDENT_INFO.courseNameTitleCase} ({STUDENT_INFO.courseCode}) • {STUDENT_INFO.studentName} ({STUDENT_INFO.registrationNumber})
          </div>
          <a
            href="https://github.com/abijitabi47/NLP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-gold-300 hover:underline"
          >
            <Github className="h-4 w-4" />
            <span>github.com/abijitabi47/NLP</span>
          </a>
        </div>
      </footer> */}
    </div>
  );
}
