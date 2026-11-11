import React from 'react';
import { BookOpen, Download, Sparkles } from 'lucide-react';
import { ToolTab } from '../types';

interface HeaderProps {
  activeTab: ToolTab;
  onSelectTab: (tab: ToolTab) => void;
  onOpenGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab, onOpenGuide }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text wordmark */}
          <button
            onClick={() => onSelectTab('notebooklm')}
            className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-700 via-teal-800 to-slate-900 flex items-center justify-center text-amber-300 shadow-sm group-hover:scale-105 transition-transform shrink-0 border border-emerald-500/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 font-display">
                HACKEA EL APRENDIZAJE
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide -mt-0.5">
                Rediseña con IA
              </span>
            </div>
          </button>

          {/* Zone 2: Nav links matching 3-zone contract */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-600">
            <button
              onClick={() => onSelectTab('activity_redesign')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'activity_redesign'
                  ? 'border-[#004b36] text-[#004b36] font-bold'
                  : 'border-transparent text-slate-600 hover:border-slate-300'
              }`}
            >
              01. Rediseño Aumentado
            </button>
            <button
              onClick={() => onSelectTab('notebooklm')}
              className={`hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'notebooklm'
                  ? 'border-indigo-600 text-indigo-700 font-semibold'
                  : 'border-transparent text-slate-600 hover:border-slate-300'
              }`}
            >
              02. NotebookLM
            </button>
            <button
              onClick={() => onSelectTab('perplexity')}
              className={`hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'perplexity'
                  ? 'border-teal-600 text-teal-800 font-semibold'
                  : 'border-transparent text-slate-600 hover:border-slate-300'
              }`}
            >
              03. Perplexity
            </button>
            <button
              onClick={() => onSelectTab('copilot')}
              className={`hover:text-sky-700 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'copilot'
                  ? 'border-sky-600 text-sky-800 font-semibold'
                  : 'border-transparent text-slate-600 hover:border-slate-300'
              }`}
            >
              04. Copilot
            </button>
            <button
              onClick={() => onSelectTab('dua')}
              className={`hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'dua'
                  ? 'border-blue-600 text-blue-800 font-semibold'
                  : 'border-transparent text-slate-600 hover:border-slate-300'
              }`}
            >
              05. ChatGPT &amp; DUA
            </button>
            <button
              onClick={() => onSelectTab('prompts_config')}
              className={`hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 flex items-center gap-1 ${
                activeTab === 'prompts_config'
                  ? 'border-[#c59b27] text-[#004b36] font-extrabold'
                  : 'border-transparent text-slate-600 hover:border-slate-300'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]" />
              <span>Taller Prompts</span>
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Guía Metodológica</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
