import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ActivityRedesignModule } from './components/ActivityRedesignModule';
import { NotebookLMModule } from './components/NotebookLMModule';
import { PerplexityModule } from './components/PerplexityModule';
import { CopilotModule } from './components/CopilotModule';
import { DuaModule } from './components/DuaModule';
import { PedagogicalGuideModal } from './components/PedagogicalGuideModal';
import { PromptEngineeringAndSetupLab } from './components/PromptEngineeringAndSetupLab';
import { ToolTab } from './types';
import { BookOpen } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ToolTab>('activity_redesign');
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* 1. Header adhering strictly to Top Bar Contract */}
      <Header
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* 2. Hero Section */}
      <Hero
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 280, behavior: 'smooth' });
        }}
      />

      {/* 3. Main Workspace Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeTab === 'activity_redesign' && <ActivityRedesignModule />}
        {activeTab === 'notebooklm' && <NotebookLMModule />}
        {activeTab === 'perplexity' && <PerplexityModule />}
        {activeTab === 'copilot' && <CopilotModule />}
        {activeTab === 'dua' && <DuaModule />}
        {activeTab === 'prompts_config' && <PromptEngineeringAndSetupLab />}
      </main>

      {/* 4. Quiet, Domain-Native Footer without fake telemetry */}
      <footer className="bg-white border-t border-slate-200 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-indigo-600 flex items-center justify-center text-white shrink-0">
              <BookOpen className="w-3 h-3" />
            </div>
            <span className="font-semibold text-slate-800">HACKEA EL APRENDIZAJE</span>
            <span aria-hidden="true">·</span>
            <span>Rediseña experiencias educativas con inteligencia artificial</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => setIsGuideOpen(true)}
              className="hover:text-indigo-600 transition-colors cursor-pointer"
            >
              Manual Metodológico
            </button>
            <span aria-hidden="true">·</span>
            <span>Basado en directrices UNESCO, OCDE, CEPAL y CAST</span>
          </div>
        </div>
      </footer>

      {/* 5. Pedagogical Guide Modal */}
      <PedagogicalGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
