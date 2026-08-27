/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { ProfileDrawer } from './components/ProfileDrawer';
import { PROJECTS_DATA, DESIGNER_INFO } from './data/projectsData';
import { Project } from './types';
import { ArrowUpRight } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter projects based on category selection
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return PROJECTS_DATA;
    if (selectedCategory === '모바일') {
      return PROJECTS_DATA.filter((p) => p.badge.includes('Mobile') || p.category.includes('모바일') || p.category.includes('서브컬처'));
    }
    if (selectedCategory === 'PC') {
      return PROJECTS_DATA.filter((p) => p.badge.includes('PC') || p.category.includes('PC') || p.category.includes('FPS'));
    }
    if (selectedCategory === '아이콘') {
      return PROJECTS_DATA.filter((p) => p.category.includes('아이콘') || p.badge.includes('Assets') || p.category.includes('캐주얼'));
    }
    return PROJECTS_DATA;
  }, [selectedCategory]);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex > 0) {
      setSelectedProject(PROJECTS_DATA[currentIndex - 1]);
    }
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex < PROJECTS_DATA.length - 1) {
      setSelectedProject(PROJECTS_DATA[currentIndex + 1]);
    }
  };

  const currentProjectIndex = selectedProject
    ? PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id)
    : -1;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-editorial-sans antialiased selection:bg-white selection:text-black">
      {/* Editorial Subtle Grid Guides */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Main Container - max-w-1200px */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 py-8 sm:py-12">
        {/* 1. Header (Name, Monograph Bar, Editorial Filter Tabs) */}
        <Header
          onOpenProfile={() => setIsProfileOpen(true)}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          totalProjects={PROJECTS_DATA.length}
        />

        {/* 2. Project Grid (3 columns on PC, 2 on Tablet, 1 on Mobile, 4:3 Ratio Cards) */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={handleOpenModal}
            />
          ))}
        </main>

        {/* 3. Bottom Monograph Footer */}
        <footer className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-zinc-400 font-editorial-mono">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-semibold text-zinc-300 uppercase tracking-widest">
              {DESIGNER_INFO.name} — GAME INTERFACE ARCHIVE
            </span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="text-zinc-400 tracking-wider">
              ALL RIGHTS RESERVED © {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setIsProfileOpen(true)}
              className="text-zinc-400 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer"
            >
              <span>CURATOR PROFILE</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
            <span className="text-zinc-700">/</span>
            <a
              href={`mailto:${DESIGNER_INFO.email}`}
              className="text-zinc-400 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1"
            >
              <span>{DESIGNER_INFO.email}</span>
            </a>
          </div>
        </footer>
      </div>

      {/* 4. Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
        onPrev={handlePrevProject}
        onNext={handleNextProject}
        hasPrev={currentProjectIndex > 0}
        hasNext={currentProjectIndex < PROJECTS_DATA.length - 1}
      />

      {/* 5. Designer Profile & Skills Drawer */}
      <ProfileDrawer
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </div>
  );
}
