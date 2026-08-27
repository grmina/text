import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { GameUIMockup } from './GameUIMockup';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <article
      id={`project-card-${project.id}`}
      onClick={() => onOpenModal(project)}
      className="group relative bg-[#141414] hover:bg-[#181818] border border-white/10 hover:border-white/30 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Editorial Aspect Ratio Frame (4:3) */}
      <div 
        className="w-full relative overflow-hidden bg-[#0d0d0d] border-b border-white/10 transition-colors"
        style={{ aspectRatio: '4 / 3' }}
      >
        {/* Game UI Visual Mockup */}
        <div className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <GameUIMockup projectId={project.id} />
        </div>

        {/* Hover Overlay with Editorial Monograph Pill */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 backdrop-blur-[2px]">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-editorial-mono font-medium tracking-wider shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span>VIEW SPECIFICATION</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black" />
          </span>
        </div>

        {/* Top Editorial Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-zinc-300 text-[10px] font-editorial-mono tracking-wider border border-white/15">
            {project.badge}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="w-7 h-7 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-zinc-400 group-hover:text-white border border-white/15 transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Project Information */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header Row: Title & Issue Code */}
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <h2 className="text-lg sm:text-xl font-editorial-serif text-[#F5F5F5] group-hover:text-white transition-colors leading-snug">
              {project.title}
            </h2>
            <span className="text-[11px] font-editorial-mono text-zinc-400 shrink-0 mt-1">
              NO. 0{project.id}
            </span>
          </div>

          {/* Subtitle / Category */}
          <p className="text-xs text-zinc-300 font-medium line-clamp-1">
            {project.category}
          </p>

          <p className="text-[11px] text-zinc-400 font-editorial-mono tracking-wider mt-0.5 uppercase truncate">
            {project.englishCategory}
          </p>
        </div>

        {/* Bottom Metadata & Tools */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 overflow-hidden flex-wrap">
            {project.tools.slice(0, 3).map((tool, idx) => (
              <span
                key={idx}
                className="text-[10px] font-editorial-mono px-2 py-0.5 rounded bg-[#1f1f1f] text-zinc-300 border border-white/10"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="text-[10px] text-zinc-400 font-editorial-mono">
                +{project.tools.length - 3}
              </span>
            )}
          </div>

          <span className="text-[10px] font-editorial-mono text-zinc-400 uppercase tracking-widest shrink-0">
            {project.period.split(' ')[0]}
          </span>
        </div>
      </div>
    </article>
  );
};
