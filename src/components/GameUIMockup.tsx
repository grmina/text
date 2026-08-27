import React, { useState } from 'react';
import { 
  Shield, 
  Flame, 
  Zap, 
  Sparkles, 
  Sword, 
  Crosshair, 
  ShoppingBag, 
  Compass, 
  Heart, 
  Activity, 
  Eye, 
  Play, 
  Award,
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface GameUIMockupProps {
  projectId: number;
  interactive?: boolean;
  className?: string;
}

export const GameUIMockup: React.FC<GameUIMockupProps> = ({ projectId, interactive = false, className = '' }) => {
  // Interactive state for testing features in the modal
  const [selectedSkill, setSelectedSkill] = useState<number>(0);
  const [hp, setHp] = useState<number>(84);
  const [gachaCount, setGachaCount] = useState<number>(10);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  // Project 1: Mobile RPG Battle HUD
  if (projectId === 1) {
    return (
      <div className={`relative w-full h-full bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#090d16] flex flex-col justify-between p-4 select-none overflow-hidden ${className}`}>
        {/* Ambient background grid / glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#6366f115_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Battle HUD Bar */}
        <div className="relative z-10 flex items-center justify-between bg-black/40 backdrop-blur-md px-3 py-2 rounded-xl border border-indigo-500/20 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-indigo-600 p-[1.5px] shadow-sm">
              <div className="w-full h-full bg-slate-900 rounded-[7px] flex items-center justify-center font-bold text-xs text-amber-400">
                Lv.78
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200 tracking-wide flex items-center gap-1.5">
                <span>에픽 기사단장 아서</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">STAGE 12-4</span>
              </div>
              <div className="w-36 h-2 bg-slate-800 rounded-full mt-1 overflow-hidden p-[1px] border border-slate-700/50">
                <div className="h-full bg-gradient-to-r from-red-500 to-emerald-400 rounded-full transition-all duration-300" style={{ width: `${hp}%` }} />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-2 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>TURN 03</span>
            </div>
            <div className="px-2 py-1 rounded-md bg-indigo-500/20 border border-indigo-500/40 text-indigo-200 text-[11px] font-bold">
              AUTO 2x
            </div>
          </div>
        </div>

        {/* Center Battle Field Preview / Action Timeline */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm mb-3">
            <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Action Order</span>
            <div className="flex items-center gap-1.5">
              {['A', 'B', 'Boss', 'C', 'D'].map((char, i) => (
                <div key={i} className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${i === 0 ? 'bg-indigo-600 border-amber-400 text-white scale-110 shadow-md ring-2 ring-indigo-400/40' : 'bg-slate-800 border-slate-600 text-slate-300'}`}>
                  {char}
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <span className="text-xs text-indigo-300/80 font-medium tracking-wide bg-indigo-950/60 px-3 py-1 rounded-md border border-indigo-500/20">
              ⚡ 전투 조작 대기중 - 스킬을 선택하세요
            </span>
          </div>
        </div>

        {/* Bottom Thumb Zone Action Dock */}
        <div className="relative z-10 bg-slate-950/80 backdrop-blur-md p-3 rounded-2xl border border-indigo-500/30 shadow-2xl">
          <div className="flex items-center justify-between gap-2">
            {/* Party Mini Avatars */}
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map((member) => (
                <div 
                  key={member}
                  onClick={() => interactive && setHp((prev) => (prev > 30 ? prev - 15 : 100))}
                  className={`w-11 h-12 rounded-lg bg-slate-900 border flex flex-col items-center justify-between p-1 transition-all ${member === 1 ? 'border-indigo-400 ring-2 ring-indigo-500/30' : 'border-slate-700 opacity-70'} ${interactive ? 'cursor-pointer hover:border-indigo-300' : ''}`}
                >
                  <span className="text-[9px] font-bold text-slate-400">P{member}</span>
                  <div className="w-full h-1 bg-emerald-500 rounded-full" />
                </div>
              ))}
            </div>

            {/* Skill Buttons */}
            <div className="flex items-center gap-2">
              {[
                { name: '일반 공격', cost: '0', icon: Sword, color: 'from-slate-700 to-slate-900', border: 'border-slate-600' },
                { name: '화염 강타', cost: '2', icon: Flame, color: 'from-amber-600 to-red-700', border: 'border-amber-500' },
                { name: '성스러운 방벽', cost: '3', icon: Shield, color: 'from-indigo-600 to-purple-800', border: 'border-indigo-400' },
                { name: '필살기 (궁극)', cost: 'MAX', icon: Zap, color: 'from-amber-400 via-rose-500 to-indigo-600', border: 'border-amber-300 ring-2 ring-amber-400/50 animate-pulse' }
              ].map((skill, idx) => {
                const IconComponent = skill.icon;
                const isSelected = selectedSkill === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => interactive && setSelectedSkill(idx)}
                    className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} p-[1px] shadow-lg transition-transform active:scale-95 ${isSelected ? 'scale-105 ring-2 ring-white/60' : ''} ${interactive ? 'cursor-pointer hover:scale-105' : ''}`}
                  >
                    <div className="w-full h-full rounded-[11px] bg-slate-950/40 flex flex-col items-center justify-center relative">
                      <IconComponent className="w-5 h-5 text-white drop-shadow-sm" />
                      <span className="absolute bottom-0.5 right-1 text-[8px] font-mono font-bold text-amber-300 bg-black/60 px-1 rounded">
                        {skill.cost}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Project 2: PC MMORPG HUD Design
  if (projectId === 2) {
    return (
      <div className={`relative w-full h-full bg-[#0a0d14] flex flex-col justify-between p-4 select-none overflow-hidden ${className}`}>
        {/* Dark Metallic Texture Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        {/* Top Right Mini-Map & System Bar */}
        <div className="relative z-10 flex justify-between items-start">
          <div className="flex items-center gap-2 bg-slate-900/90 border border-blue-500/30 px-3 py-1.5 rounded-lg shadow-xl">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-blue-200">CH. 04 엘리시온 성채</span>
            <span className="text-[10px] text-slate-400 font-mono">60 FPS | 18ms</span>
          </div>

          <div className="w-24 h-24 rounded-full bg-slate-950 border-2 border-blue-500/40 p-1 relative shadow-2xl flex items-center justify-center">
            <Compass className="w-16 h-16 text-blue-500/20 absolute animate-spin" style={{ animationDuration: '60s' }} />
            <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa]" />
            <div className="absolute top-1 text-[8px] font-bold text-blue-300">N</div>
            <div className="absolute bottom-1 text-[8px] font-mono text-slate-400">X:142 Y:88</div>
          </div>
        </div>

        {/* Center Target Status */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-slate-950/80 border border-red-500/30 px-4 py-1.5 rounded-lg backdrop-blur-md flex items-center gap-3">
            <div className="text-xs font-bold text-red-400 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-red-500" />
              <span>심연의 군주 발록 (Boss)</span>
            </div>
            <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden border border-red-900/50">
              <div className="h-full bg-gradient-to-r from-red-600 to-amber-500 w-3/4 rounded-full" />
            </div>
            <span className="text-[10px] font-mono text-red-300">75.4%</span>
          </div>
        </div>

        {/* Bottom PC Action Bar & Hotkeys (1-8, Q, E, R) */}
        <div className="relative z-10 flex flex-col items-center gap-1.5">
          {/* Player Vitals (HP / MP / Stamina) */}
          <div className="flex items-center gap-3 bg-slate-950/90 border border-slate-700/60 px-4 py-1.5 rounded-t-xl">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-red-400">HP</span>
              <div className="w-28 h-2.5 bg-slate-900 rounded border border-red-900 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-600 to-rose-400 w-[90%]" />
              </div>
              <span className="text-[9px] font-mono text-slate-300">14,250 / 15,800</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-blue-400">MP</span>
              <div className="w-28 h-2.5 bg-slate-900 rounded border border-blue-900 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 w-[85%]" />
              </div>
              <span className="text-[9px] font-mono text-slate-300">8,500 / 10,000</span>
            </div>
          </div>

          {/* Quickslot Keys */}
          <div className="flex items-center gap-1 bg-slate-950/95 p-1.5 rounded-b-xl border border-slate-700/80 shadow-2xl">
            {['1', '2', '3', '4', '5', 'Q', 'E', 'R'].map((key, i) => (
              <div
                key={key}
                className={`w-9 h-9 rounded bg-slate-900 border flex flex-col items-center justify-between p-0.5 relative transition-all ${i === 2 ? 'border-amber-400 bg-amber-950/30' : 'border-slate-700'}`}
              >
                <span className="text-[8px] font-mono font-bold text-slate-400 self-start px-0.5">{key}</span>
                <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-blue-500/40 to-indigo-600/40 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-blue-300" />
                </div>
                <div className="w-full h-0.5 bg-blue-500/80 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Project 3: Casual Survival Game GUI
  if (projectId === 3) {
    return (
      <div className={`relative w-full h-full bg-gradient-to-b from-[#064e3b] via-[#022c22] to-[#041a14] flex flex-col justify-between p-4 select-none overflow-hidden ${className}`}>
        {/* Top EXP progress bar */}
        <div className="relative z-10">
          <div className="flex items-center justify-between text-xs font-bold text-emerald-200 mb-1">
            <span className="bg-emerald-800/80 px-2 py-0.5 rounded-full border border-emerald-400/40 text-[10px]">LV. 24 SURVIVOR</span>
            <span className="font-mono text-[11px] text-amber-300">⏱️ 14:32 | 💀 1,420 KILLS</span>
          </div>
          <div className="w-full h-3 bg-slate-900/90 rounded-full border-2 border-emerald-400/50 p-0.5 shadow-inner">
            <div className="h-full bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 rounded-full shadow-[0_0_8px_#34d399] w-[78%]" />
          </div>
        </div>

        {/* Center Level-up Card Selection UI Modal */}
        <div className="relative z-10 bg-slate-900/95 border-2 border-emerald-400/60 rounded-2xl p-3 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-2.5">
            <span className="text-xs font-black text-amber-300 tracking-wider bg-amber-500/20 px-3 py-0.5 rounded-full border border-amber-400/40 uppercase">
              ✨ LEVEL UP! 스킬 선택 ✨
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { title: '홀리 바이블', desc: '회전하는 신성한 성서 소환', tier: 'EPIC', star: '★★★★', color: 'from-amber-500/30 to-amber-900/40 border-amber-400' },
              { title: '썬더볼트', desc: '무작위 적에게 번개 타격', tier: 'RARE', star: '★★★', color: 'from-blue-500/30 to-blue-900/40 border-blue-400' },
              { title: '갈릭 오라', desc: '주변 적 지속 피해 및 넉백', tier: 'NORMAL', star: '★★', color: 'from-emerald-500/30 to-emerald-900/40 border-emerald-400' }
            ].map((card, i) => (
              <div 
                key={i}
                className={`bg-gradient-to-b ${card.color} border-2 rounded-xl p-2 flex flex-col items-center text-center transition-all hover:scale-105 cursor-pointer shadow-lg`}
              >
                <span className="text-[8px] font-black font-mono text-amber-300">{card.tier}</span>
                <div className="w-8 h-8 rounded-lg bg-black/40 border border-white/20 my-1 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </div>
                <h4 className="text-[10px] font-bold text-white line-clamp-1">{card.title}</h4>
                <p className="text-[8px] text-slate-300 leading-tight mt-0.5 line-clamp-2">{card.desc}</p>
                <span className="text-[8px] text-amber-400 mt-1">{card.star}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Currency & Controls */}
        <div className="relative z-10 flex items-center justify-between bg-black/60 px-3 py-1.5 rounded-xl border border-emerald-500/30">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold text-amber-300 font-mono">🪙 48,250</span>
            <span className="text-[11px] font-bold text-cyan-300 font-mono">💎 320</span>
          </div>
          <button type="button" className="px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-[10px] font-bold text-white shadow-md">
            PAUSE
          </button>
        </div>
      </div>
    );
  }

  // Project 4: Sci-Fi FPS Tactical Crosshair & Visor UI
  if (projectId === 4) {
    return (
      <div className={`relative w-full h-full bg-[#030712] flex flex-col justify-between p-4 select-none overflow-hidden ${className}`}>
        {/* Hologram scanlines & cyan grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#06b6d415_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-transparent to-cyan-950/30 pointer-events-none" />

        {/* Top Compass Heading Strip */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-64 h-6 bg-cyan-950/60 border border-cyan-500/40 rounded flex items-center justify-around px-2 text-[9px] font-mono text-cyan-300">
            <span>240</span>
            <span>255</span>
            <span className="font-bold text-cyan-100 bg-cyan-500/30 px-1 rounded border border-cyan-400">W (270)</span>
            <span>285</span>
            <span>300</span>
          </div>
          <div className="w-0.5 h-2 bg-cyan-400 mt-0.5" />
        </div>

        {/* Center Dynamic Crosshair Reticle & Hit Indicators */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center">
          <div className="relative w-28 h-28 flex items-center justify-center">
            {/* Outer Circular Reticle with Recoil Markers */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40 animate-spin" style={{ animationDuration: '40s' }} />
            <div className="absolute w-20 h-20 rounded-full border border-cyan-500/60" />
            
            {/* Crosshair Lines */}
            <div className="absolute w-6 h-0.5 bg-cyan-400 left-1 shadow-[0_0_6px_#22d3ee]" />
            <div className="absolute w-6 h-0.5 bg-cyan-400 right-1 shadow-[0_0_6px_#22d3ee]" />
            <div className="absolute w-0.5 h-6 bg-cyan-400 top-1 shadow-[0_0_6px_#22d3ee]" />
            <div className="absolute w-0.5 h-6 bg-cyan-400 bottom-1 shadow-[0_0_6px_#22d3ee]" />

            {/* Center Dot */}
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9]" />

            {/* Target Distance Lock */}
            <div className="absolute bottom-1 text-[8px] font-mono text-cyan-300 bg-black/60 px-1 rounded border border-cyan-500/40">
              LOCK 48m
            </div>
          </div>
        </div>

        {/* Bottom Weapon Ammo & Health Visor */}
        <div className="relative z-10 flex items-end justify-between">
          {/* Player Vital Visor */}
          <div className="bg-cyan-950/80 border border-cyan-500/40 p-2 rounded-lg backdrop-blur-md">
            <div className="text-[9px] font-mono text-cyan-300 uppercase mb-1">SHIELD & HEALTH</div>
            <div className="flex items-center gap-1.5">
              <div className="w-20 h-2 bg-slate-900 rounded overflow-hidden border border-cyan-800">
                <div className="h-full bg-cyan-400 w-full" />
              </div>
              <span className="text-[9px] font-mono font-bold text-cyan-200">100</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="w-20 h-2 bg-slate-900 rounded overflow-hidden border border-red-900">
                <div className="h-full bg-red-500 w-4/5" />
              </div>
              <span className="text-[9px] font-mono font-bold text-red-300">80</span>
            </div>
          </div>

          {/* Weapon Ammo Counter */}
          <div className="bg-cyan-950/90 border border-cyan-400/60 p-2.5 rounded-lg text-right backdrop-blur-md shadow-[0_0_12px_#06b6d430]">
            <div className="text-[9px] font-mono text-cyan-300">AR-57 PULSE RIFLE</div>
            <div className="text-xl font-black font-mono text-cyan-100 flex items-baseline justify-end gap-1">
              <span className="text-2xl text-cyan-300 drop-shadow-[0_0_8px_#22d3ee]">30</span>
              <span className="text-xs text-slate-400">/ 180</span>
            </div>
            <div className="text-[8px] font-mono text-amber-400 font-bold mt-0.5">SEMI-AUTO • 5.56mm</div>
          </div>
        </div>
      </div>
    );
  }

  // Project 5: Anime Style Gacha Shop UI
  if (projectId === 5) {
    return (
      <div className={`relative w-full h-full bg-gradient-to-br from-[#1e1b4b] via-[#311042] to-[#180a29] flex flex-col justify-between p-4 select-none overflow-hidden ${className}`}>
        {/* Glittering sparkles */}
        <div className="absolute top-4 right-8 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-6 left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Currency & Pity Guarantee Bar */}
        <div className="relative z-10 flex items-center justify-between bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-pink-500/30">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-pink-300 bg-pink-500/20 px-2 py-0.5 rounded-full border border-pink-400/40">
              픽업 소환
            </span>
            <span className="text-[11px] font-bold text-white">「별빛의 서약」 스텔라</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-pink-200">
              <span>💎 12,450</span>
            </div>
            <div className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
              천장: 72/90
            </div>
          </div>
        </div>

        {/* Center Banner Artwork Presentation */}
        <div className="relative z-10 my-auto flex flex-col items-center text-center">
          <div className="relative px-6 py-3 bg-slate-950/60 rounded-2xl border border-pink-400/40 backdrop-blur-md shadow-2xl">
            <span className="text-[10px] font-black text-amber-300 tracking-widest uppercase">★★★★★ SSR PICKUP</span>
            <h3 className="text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-amber-200 mt-0.5">
              성흔의 계승자 스텔라
            </h3>
            <p className="text-[9px] text-pink-200/80 mt-1">픽업 기간 한정 5성 출현 확률 UP! (1.5%)</p>
          </div>
        </div>

        {/* Bottom Gacha Summon Buttons (1x / 10x) */}
        <div className="relative z-10 flex items-center justify-center gap-3">
          <button 
            type="button"
            className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 text-xs font-bold shadow-lg hover:border-pink-400 transition-all flex flex-col items-center"
          >
            <span>1회 소환</span>
            <span className="text-[9px] font-mono text-pink-300">💎 160</span>
          </button>

          <button 
            type="button"
            onClick={() => interactive && setGachaCount((prev) => prev + 10)}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 border border-pink-300/80 text-white text-xs font-bold shadow-[0_0_16px_#ec489950] hover:scale-105 transition-all flex flex-col items-center ring-2 ring-pink-400/40"
          >
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              10회 연속 소환
            </span>
            <span className="text-[9px] font-mono text-amber-300">💎 1,600 (4성 이상 확정)</span>
          </button>
        </div>
      </div>
    );
  }

  // Project 6: Dark Fantasy Skill & Equipment Icon Kit
  const ICONS = [
    { name: '화염구 (Fireball)', element: 'Fire', color: 'from-amber-600 to-red-700', border: 'border-amber-500', icon: Flame },
    { name: '서리폭풍 (Frost Nova)', element: 'Ice', color: 'from-cyan-600 to-blue-800', border: 'border-cyan-400', icon: Zap },
    { name: '암흑수확 (Shadow Drain)', element: 'Dark', color: 'from-purple-800 to-slate-950', border: 'border-purple-500', icon: Sword },
    { name: '신성방벽 (Holy Aegis)', element: 'Holy', color: 'from-amber-400 to-yellow-600', border: 'border-yellow-300', icon: Shield },
    { name: '용비늘 방패 (Dragon Shield)', element: 'Epic', color: 'from-rose-700 to-red-950', border: 'border-rose-400', icon: Shield },
    { name: '고대 마도서 (Ancient Grimoire)', element: 'Relic', color: 'from-indigo-600 to-purple-900', border: 'border-indigo-400', icon: Sparkles }
  ];

  return (
    <div className={`relative w-full h-full bg-[#0b0c10] flex flex-col justify-between p-4 select-none overflow-hidden ${className}`}>
      {/* Gothic stone rune border */}
      <div className="relative z-10 flex items-center justify-between border-b border-purple-500/20 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
          <span className="text-xs font-bold text-purple-200 tracking-wider">다크 판타지 아이콘 120종 에셋 킷</span>
        </div>
        <span className="text-[10px] font-mono text-slate-400">1024x1024 Master Sprite Sheet</span>
      </div>

      {/* Center 6-Icon Grid Preview */}
      <div className="relative z-10 grid grid-cols-3 gap-2.5 my-auto">
        {ICONS.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIcon(item.name)}
              onMouseLeave={() => setHoveredIcon(null)}
              className={`group relative bg-gradient-to-br ${item.color} p-[2px] rounded-xl border ${item.border} shadow-lg transition-transform hover:scale-105 cursor-pointer`}
            >
              <div className="w-full h-14 bg-slate-950/70 rounded-[10px] flex flex-col items-center justify-center relative overflow-hidden">
                <IconComp className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                <span className="text-[8px] font-bold text-slate-200 mt-1 line-clamp-1 px-1">
                  {item.element}
                </span>
                
                {/* Ornate corner runes */}
                <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-amber-400/80" />
                <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 border-t border-r border-amber-400/80" />
                <div className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 border-b border-l border-amber-400/80" />
                <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 border-b border-r border-amber-400/80" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Tooltip Information */}
      <div className="relative z-10 bg-slate-950/90 border border-purple-500/30 px-3 py-1.5 rounded-lg flex items-center justify-between">
        <span className="text-[10px] text-purple-300 font-medium truncate">
          {hoveredIcon ? `선택됨: ${hoveredIcon}` : '아이콘에 마우스를 올려 디테일 룬 프레임을 확인하세요'}
        </span>
        <span className="text-[9px] font-mono text-slate-400">4 Tier Frames</span>
      </div>
    </div>
  );
};
