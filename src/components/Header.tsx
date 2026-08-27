import React, { useState } from 'react';
import { Mail, User, Check, Copy, ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/projectsData';

interface HeaderProps {
  onOpenProfile: () => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  totalProjects: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenProfile,
  selectedCategory,
  onSelectCategory,
  totalProjects
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = [
    { id: 'all', label: 'ALL WORKS', sub: '전체 프로젝트', count: totalProjects },
    { id: '모바일', label: 'MOBILE UI', sub: '모바일 인터페이스' },
    { id: 'PC', label: 'PC / CONSOLE', sub: 'HUD & 시스템' },
    { id: '아이콘', label: 'ASSETS & ICONS', sub: '에셋 & 아이콘' }
  ];

  return (
    <header className="mb-14 text-left">
      {/* 1. Top Editorial Banner / Monograph Bar */}
      <div className="flex items-center justify-between py-3 border-b border-white/10 text-[10px] sm:text-[11px] font-editorial-mono tracking-[0.25em] text-zinc-400 uppercase">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/70"></span>
          <span>MONOGRAPH ARCHIVE — VOL. 2025</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>GAME UI / UX DESIGN PORTFOLIO</span>
          <span>SEOUL, KR</span>
        </div>
      </div>

      {/* 2. Main Editorial Title Section */}
      <div className="pt-8 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10">
        <div className="max-w-2xl">
          {/* Issue Eyebrow */}
          <div className="flex items-center gap-3 text-[11px] font-editorial-mono tracking-[0.25em] text-zinc-400 uppercase mb-3">
            <span>COLLECTION 01 / 06</span>
            <span className="text-zinc-600">—</span>
            <span className="text-zinc-300">CURATED WORKS</span>
          </div>

          {/* Designer Name in Elegant Editorial Serif */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial-serif tracking-tight text-[#F5F5F5] font-normal leading-[1.08]">
            {DESIGNER_INFO.name}
            <span className="block text-2xl sm:text-3xl lg:text-4xl italic text-zinc-400 font-light mt-1">
              Game UI & Interaction Design
            </span>
          </h1>

          {/* Editorial Descriptor Statement */}
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-xl">
            몰입감 넘치는 게임 플레이를 위한 시각적 계층 구조와 정밀한 인터랙션 시스템을 설계합니다.
            AAA급 콘솔 HUD부터 서브컬처 모바일 UI까지 완성도 높은 게임 경험을 구축합니다.
          </p>
        </div>

        {/* Quick Actions & Contact in Editorial Framing */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
          <div className="flex items-center gap-2 text-[11px] font-editorial-mono tracking-wider text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>AVAILABLE FOR SELECTED PROJECTS</span>
          </div>

          <div className="flex items-center gap-2.5 mt-1 flex-wrap">
            <button
              type="button"
              id="copy-email-btn"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#141414] hover:bg-white hover:text-black border border-white/20 text-zinc-300 text-xs font-editorial-mono tracking-wider transition-all duration-200 cursor-pointer"
              title="이메일 복사"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400 group-hover:text-black" />
                  <span className="text-emerald-400">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5" />
                  <span>{DESIGNER_INFO.email}</span>
                  <Copy className="w-3 h-3 opacity-60" />
                </>
              )}
            </button>

            <button
              type="button"
              id="view-profile-btn"
              onClick={onOpenProfile}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F5F5] hover:bg-zinc-300 text-black text-xs font-editorial-mono font-medium tracking-wider transition-all duration-200 cursor-pointer shadow-sm"
            >
              <User className="w-3.5 h-3.5 text-black" />
              <span>CURATOR BIO & CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Editorial Category Filter Bar */}
      <div className="flex items-center justify-between gap-4 pt-6 overflow-x-auto pb-2 no-scrollbar">
        <div className="flex items-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-editorial-mono tracking-[0.15em] transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'bg-[#141414] hover:bg-[#202020] text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                <span>{cat.label}</span>
                {cat.count !== undefined && (
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isActive ? 'bg-black text-white' : 'bg-zinc-800 text-zinc-400'}`}>
                    0{cat.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-2 text-zinc-400 text-xs font-editorial-mono tracking-widest">
          <span>INDEX / 06 ENTRIES</span>
        </div>
      </div>
    </header>
  );
};
