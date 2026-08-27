import React, { useEffect, useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  CheckCircle2, 
  Wrench, 
  Monitor, 
  Layers, 
  Sparkles, 
  Palette, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';
import { Project } from '../types';
import { GameUIMockup } from './GameUIMockup';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'spec' | 'details'>('preview');

  // Keyboard navigation
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      id="modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      {/* Editorial Navigation Arrow Left (Desktop) */}
      {hasPrev && (
        <button
          type="button"
          onClick={onPrev}
          aria-label="이전 프로젝트"
          className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-[#141414] border border-white/20 text-white hover:bg-white hover:text-black items-center justify-center transition-all shadow-2xl duration-200 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Editorial Navigation Arrow Right (Desktop) */}
      {hasNext && (
        <button
          type="button"
          onClick={onNext}
          aria-label="다음 프로젝트"
          className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-[#141414] border border-white/20 text-white hover:bg-white hover:text-black items-center justify-center transition-all shadow-2xl duration-200 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Modal Shell */}
      <div className="relative w-full max-w-4xl bg-[#121212] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-[#F5F5F5]">
        {/* Sticky Editorial Header */}
        <div className="flex items-start justify-between p-6 sm:p-7 border-b border-white/10 bg-[#121212]/95 backdrop-blur-md sticky top-0 z-20">
          <div className="pr-6">
            <div className="flex items-center gap-3 text-[11px] font-editorial-mono tracking-[0.2em] text-zinc-400 uppercase mb-1.5">
              <span>ENTRY NO. 0{project.id}</span>
              <span className="text-zinc-600">/</span>
              <span id="modal-category" className="text-zinc-300">
                {project.category}
              </span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400">{project.badge}</span>
            </div>

            <h2 id="modal-title" className="text-2xl sm:text-3xl font-editorial-serif tracking-tight text-[#F5F5F5] flex flex-wrap items-baseline gap-2">
              <span>{project.title}</span>
              <span className="text-sm sm:text-base font-editorial-mono text-zinc-400 italic">
                — {project.projectTitleName}
              </span>
            </h2>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-white hover:text-black text-zinc-400 flex items-center justify-center transition-all border border-white/15 shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Editorial Tab Switcher */}
        <div className="flex items-center gap-2 px-6 pt-3.5 pb-2.5 border-b border-white/10 bg-[#0e0e0e] overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-1.5 rounded-full text-xs font-editorial-mono tracking-[0.15em] transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'preview'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>01. INTERFACE RUNTIME</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('spec')}
            className={`px-4 py-1.5 rounded-full text-xs font-editorial-mono tracking-[0.15em] transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'spec'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>02. DESIGN SYSTEM & SPECS</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('details')}
            className={`px-4 py-1.5 rounded-full text-xs font-editorial-mono tracking-[0.15em] transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'details'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>03. RATIONALE & UX FLOW</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-7 custom-scrollbar">
          {/* TAB 1: UI Mockup Preview */}
          {activeTab === 'preview' && (
            <div className="space-y-6">
              {/* Interactive Game UI Canvas Preview */}
              <div className="bg-[#0A0A0A] border border-white/15 rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#141414] border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-zinc-400 font-editorial-mono text-[11px] ml-2 tracking-wider">
                      IN-GAME UI ENGINE SIMULATOR
                    </span>
                  </div>
                  <span className="text-[10px] font-editorial-mono text-zinc-300 bg-white/10 border border-white/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Interactive Preview
                  </span>
                </div>
                <div className="w-full h-80 sm:h-96 relative">
                  <GameUIMockup projectId={project.id} interactive={true} />
                </div>
              </div>

              {/* Project Overview Monograph Block */}
              <div className="bg-[#181818] p-5 rounded-xl border border-white/10">
                <div className="text-[11px] font-editorial-mono text-zinc-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
                  <span>PROJECT SYNOPSIS & EXECUTIVE SUMMARY</span>
                </div>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-light">
                  {project.overview}
                </p>
              </div>

              {/* Key Features List in Editorial Style */}
              <div>
                <div className="text-[11px] font-editorial-mono text-zinc-400 uppercase tracking-[0.2em] mb-3">
                  CORE INTERACTION & INTERFACE PILLARS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="bg-[#181818] p-4 rounded-xl border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-zinc-200"
                    >
                      <span className="font-editorial-mono text-[11px] text-zinc-400 font-bold shrink-0 mt-0.5">
                        0{idx + 1}.
                      </span>
                      <span className="leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Design Specs & Tokens */}
          {activeTab === 'spec' && (
            <div className="space-y-6">
              {/* Meta Grid (Period, Contribution, Platform, Tools) in Editorial Two-Tone Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-[#181818] p-4 rounded-xl border border-white/10">
                  <div className="text-[10px] font-editorial-mono tracking-widest text-zinc-400 uppercase mb-1">
                    01 / TIMELINE
                  </div>
                  <div className="text-sm font-semibold text-white">{project.period}</div>
                </div>

                <div className="bg-[#181818] p-4 rounded-xl border border-white/10">
                  <div className="text-[10px] font-editorial-mono tracking-widest text-zinc-400 uppercase mb-1">
                    02 / ROLE & CONTRIBUTION
                  </div>
                  <div className="text-xs font-semibold text-white leading-tight">{project.contribution}</div>
                </div>

                <div className="bg-[#181818] p-4 rounded-xl border border-white/10">
                  <div className="text-[10px] font-editorial-mono tracking-widest text-zinc-400 uppercase mb-1">
                    03 / PLATFORM & RATIO
                  </div>
                  <div className="text-xs font-semibold text-white">{project.designSpec.targetPlatform}</div>
                  <div className="text-[10px] font-editorial-mono text-zinc-400 mt-0.5">{project.designSpec.aspectRatio}</div>
                </div>

                <div className="bg-[#181818] p-4 rounded-xl border border-white/10">
                  <div className="text-[10px] font-editorial-mono tracking-widest text-zinc-400 uppercase mb-1">
                    04 / SOFTWARE STACK
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-[#242424] text-zinc-300 text-[10px] font-editorial-mono border border-white/10">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Design System Color Tokens Swatches */}
              <div className="bg-[#181818] p-5 rounded-xl border border-white/10">
                <div className="text-[11px] font-editorial-mono text-zinc-400 uppercase tracking-[0.2em] mb-3.5 flex items-center gap-2">
                  <Palette className="w-3.5 h-3.5" />
                  <span>DESIGN SYSTEM COLOR TOKENS</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.designSpec.designSystemTokens.map((token, idx) => (
                    <div key={idx} className="bg-[#121212] p-3 rounded-lg border border-white/10 flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded shadow-inner border border-white/20 shrink-0"
                        style={{ backgroundColor: token.value }}
                      />
                      <div className="overflow-hidden">
                        <div className="text-xs font-semibold text-white truncate">{token.name}</div>
                        <div className="text-[10px] font-editorial-mono text-zinc-400 mt-0.5">{token.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key UX Flows */}
              <div className="bg-[#181818] p-5 rounded-xl border border-white/10">
                <div className="text-[11px] font-editorial-mono text-zinc-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5" />
                  <span>INTERACTION & USER NAVIGATION FLOW</span>
                </div>
                <div className="space-y-2">
                  {project.designSpec.keyFlows.map((flow, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[#121212] text-xs font-editorial-mono text-zinc-300 border border-white/10 flex items-center gap-2.5">
                      <span className="text-zinc-400 font-bold">STEP 0{idx + 1} &gt;</span>
                      <span>{flow}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Purpose & Problem Solving */}
          {activeTab === 'details' && (
            <div className="space-y-6">
              {/* Planning Purpose */}
              <div className="bg-[#181818] p-5 rounded-xl border border-white/10">
                <div className="text-[11px] font-editorial-mono text-zinc-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>DESIGN RATIONALE & GOALS</span>
                </div>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-light">
                  {project.purpose}
                </p>
              </div>

              {/* Challenge & Solution Pairs */}
              <div>
                <div className="text-[11px] font-editorial-mono text-zinc-400 uppercase tracking-[0.2em] mb-3">
                  CASE STUDY: OBSTACLES & UX SOLUTIONS
                </div>
                <div className="space-y-3.5">
                  {project.challengesAndSolutions.map((item, idx) => (
                    <div key={idx} className="bg-[#181818] p-5 rounded-xl border border-white/10 space-y-3">
                      <div className="text-xs sm:text-sm font-medium text-rose-300 flex items-start gap-2.5">
                        <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 font-editorial-mono text-[10px] tracking-wider shrink-0 border border-rose-500/20">
                          CHALLENGE
                        </span>
                        <span className="leading-snug">{item.challenge}</span>
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-emerald-300 flex items-start gap-2.5 pt-2.5 border-t border-white/10">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-editorial-mono text-[10px] tracking-wider shrink-0 border border-emerald-500/20">
                          SOLUTION
                        </span>
                        <span className="text-zinc-200 leading-snug font-light">{item.solution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer with Navigation Controls */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-t border-white/10 bg-[#0e0e0e] text-xs">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrev}
              disabled={!hasPrev}
              className={`px-4 py-2 rounded-full border text-xs font-editorial-mono tracking-wider flex items-center gap-2 transition-all ${
                hasPrev
                  ? 'bg-[#181818] hover:bg-white hover:text-black border-white/20 text-white cursor-pointer'
                  : 'bg-black/50 border-white/5 text-zinc-600 cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>PREVIOUS</span>
            </button>

            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext}
              className={`px-4 py-2 rounded-full border text-xs font-editorial-mono tracking-wider flex items-center gap-2 transition-all ${
                hasNext
                  ? 'bg-[#181818] hover:bg-white hover:text-black border-white/20 text-white cursor-pointer'
                  : 'bg-black/50 border-white/5 text-zinc-600 cursor-not-allowed opacity-40'
              }`}
            >
              <span>NEXT</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <span className="text-zinc-400 text-[11px] font-editorial-mono tracking-widest uppercase">
            CATALOGUE {project.id} / 06
          </span>
        </div>
      </div>
    </div>
  );
};
