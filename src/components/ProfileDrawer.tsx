import React, { useState } from 'react';
import { X, Mail, MapPin, Award, Check, Copy, Layers, ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/projectsData';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileDrawer: React.FC<ProfileDrawerProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-2xl bg-[#121212] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-[#F5F5F5]">
        {/* Editorial Header */}
        <div className="flex items-center justify-between p-6 sm:p-7 border-b border-white/10 bg-[#0e0e0e]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border border-white/20 bg-[#1a1a1a] flex items-center justify-center font-editorial-serif text-2xl text-white">
              홍
            </div>
            <div>
              <div className="text-[10px] font-editorial-mono tracking-[0.25em] text-zinc-400 uppercase">
                CURATOR PROFILE & RESUME
              </div>
              <h2 className="text-2xl font-editorial-serif text-[#F5F5F5] flex items-center gap-2 mt-0.5">
                <span>{DESIGNER_INFO.name}</span>
                <span className="text-xs font-editorial-mono px-2.5 py-0.5 rounded-full bg-white/10 text-zinc-300 font-normal border border-white/10">
                  LEAD DESIGNER
                </span>
              </h2>
              <p className="text-xs text-zinc-400 mt-1 font-editorial-mono">{DESIGNER_INFO.role} • {DESIGNER_INFO.experience}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-white hover:text-black text-zinc-400 flex items-center justify-center transition-all border border-white/15 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-zinc-300 text-sm custom-scrollbar">
          {/* Bio / Philosophy */}
          <div className="bg-[#181818] p-5 rounded-xl border border-white/10">
            <div className="text-[11px] font-editorial-mono text-zinc-400 uppercase tracking-[0.2em] mb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
              <span>DESIGN PHILOSOPHY & STATEMENT</span>
            </div>
            <p className="text-zinc-200 leading-relaxed text-sm sm:text-base font-light">
              {DESIGNER_INFO.bio}
            </p>
          </div>

          {/* Software & Skill Set */}
          <div>
            <div className="text-[11px] font-editorial-mono text-zinc-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>TECHNICAL PROFICIENCY & CAPABILITIES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DESIGNER_INFO.skills.map((skill, idx) => (
                <div key={idx} className="bg-[#181818] p-4 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs sm:text-sm font-semibold text-white">{skill.name}</span>
                    <span className="text-[10px] font-editorial-mono px-2 py-0.5 rounded bg-white/10 text-zinc-200 border border-white/10">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Career */}
          <div>
            <div className="text-[11px] font-editorial-mono text-zinc-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>SELECTED HONORS & MILESTONES</span>
            </div>
            <div className="space-y-2.5">
              {DESIGNER_INFO.awards.map((award, idx) => (
                <div key={idx} className="bg-[#181818] p-4 rounded-xl border border-white/10 flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-light">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with Contact Action */}
        <div className="p-5 bg-[#0e0e0e] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-editorial-mono text-zinc-400 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>{DESIGNER_INFO.location}</span>
          </div>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-editorial-mono font-medium tracking-wider shadow-md transition-all active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>COPIED TO CLIPBOARD</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-black" />
                <span>INQUIRE VIA EMAIL</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
