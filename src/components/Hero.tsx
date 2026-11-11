import React from 'react';
import { Sparkles, Layers, Search, FileText, Compass, Sliders, GraduationCap } from 'lucide-react';
import { ToolTab } from '../types';

interface HeroProps {
  activeTab: ToolTab;
  onSelectTab: (tab: ToolTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ activeTab, onSelectTab }) => {
  return (
    <div className="bg-white border-b border-slate-200 pt-8 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2.5">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
          <span>Innovación Pedagógica Universitaria</span>
          <span aria-hidden="true">·</span>
          <span>Cátedra de Inteligencia Artificial</span>
          <span aria-hidden="true">·</span>
          <span>Rigor Epistemológico</span>
        </div>

        {/* Display Headline with balanced wrap */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-display max-w-4xl text-balance">
          HACKEA EL APRENDIZAJE
        </h1>

        <p className="mt-2 text-lg sm:text-xl font-medium text-emerald-900/90 max-w-3xl leading-relaxed">
          Rediseña experiencias educativas con inteligencia artificial.
        </p>

        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          La inteligencia artificial no sustituye la lectura profunda, el protocolo de investigación ni el juicio pedagógico humano. Esta plataforma modela cómo interactuar críticamente con cuatro herramientas esenciales para la docencia universitaria y la investigación formativa.
        </p>

        {/* Interactive Segmented Selector with Tool-Authentic Colors */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Seleccione el entorno formativo:
            </span>
            <span className="text-xs text-slate-400">
              Colores y flujos nativos de cada herramienta
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
            {/* 1. MÓDULO 1: Rediseño de Actividad Aumentada (Externado Forest Green & Gold) */}
            <button
              onClick={() => onSelectTab('activity_redesign')}
              className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer relative overflow-hidden group ${
                activeTab === 'activity_redesign'
                  ? 'bg-[#004b36] text-white border-[#c59b27] shadow-lg ring-2 ring-[#c59b27]/60'
                  : 'bg-emerald-50/60 border-emerald-200 hover:border-[#004b36] hover:bg-emerald-100/50 text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                    activeTab === 'activity_redesign' ? 'bg-[#003828] text-[#c59b27]' : 'bg-[#004b36] text-[#c59b27]'
                  }`}>
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold tracking-wide ${
                    activeTab === 'activity_redesign' ? 'text-[#c59b27]' : 'text-[#004b36]'
                  }`}>
                    TALLER REAL
                  </span>
                </div>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  activeTab === 'activity_redesign'
                    ? 'bg-[#003828] text-[#c59b27] border border-[#c59b27]/40'
                    : 'bg-[#004b36] text-white'
                }`}>
                  01
                </span>
              </div>
              <div className="text-sm font-bold mb-1 leading-snug">Rediseño Aumentado</div>
              <div className={`text-xs leading-snug ${
                activeTab === 'activity_redesign' ? 'text-emerald-100/90' : 'text-slate-600'
              }`}>
                Básica y media: historia, ciencias, ciudadanía y estadística. Minuta y teoría de cambio.
              </div>
              <div className={`mt-3 pt-2 border-t flex items-center justify-between text-[11px] font-semibold ${
                activeTab === 'activity_redesign' ? 'border-emerald-800/60 text-[#c59b27]' : 'border-emerald-200 text-[#004b36]'
              }`}>
                <span>Básica &amp; Media</span>
                <span className="font-mono text-[10px]">Word .doc</span>
              </div>
            </button>

            {/* 2. NotebookLM (Google Charcoal & Sage/Blue) */}
            <button
              onClick={() => onSelectTab('notebooklm')}
              className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer relative overflow-hidden group ${
                activeTab === 'notebooklm'
                  ? 'bg-slate-900 text-white border-slate-700 shadow-md ring-2 ring-emerald-400/40'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                    activeTab === 'notebooklm' ? 'bg-slate-800 text-emerald-300' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold tracking-wide ${
                    activeTab === 'notebooklm' ? 'text-emerald-300' : 'text-slate-500'
                  }`}>
                    GOOGLE LABS
                  </span>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  02
                </span>
              </div>
              <div className="text-sm font-bold mb-1 leading-snug">NotebookLM</div>
              <div className={`text-xs leading-snug ${
                activeTab === 'notebooklm' ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Corpus cerrado, no sustituto de lectura. Citas respaldadas y matriz comentada.
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/40 flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                <span>Diálogo con Fuentes</span>
              </div>
            </button>

            {/* 3. Perplexity (Deep Teal & Cyan) */}
            <button
              onClick={() => onSelectTab('perplexity')}
              className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer relative overflow-hidden group ${
                activeTab === 'perplexity'
                  ? 'bg-[#13343b] text-white border-[#20808d] shadow-md ring-2 ring-[#22b8cd]/40'
                  : 'bg-white border-slate-200 hover:border-teal-200 hover:bg-teal-50/30 text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                    activeTab === 'perplexity' ? 'bg-[#1c4750] text-[#22b8cd]' : 'bg-teal-50 text-teal-700'
                  }`}>
                    <Search className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold tracking-wide ${
                    activeTab === 'perplexity' ? 'text-[#22b8cd]' : 'text-teal-700'
                  }`}>
                    ACADEMIC
                  </span>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#1c4750] text-teal-200 border border-teal-800">
                  03
                </span>
              </div>
              <div className="text-sm font-bold mb-1 leading-snug">Perplexity AI</div>
              <div className={`text-xs leading-snug ${
                activeTab === 'perplexity' ? 'text-teal-100/80' : 'text-slate-600'
              }`}>
                Descubrimiento vs. revisión sistemática. Embudo de evidencia y verificación DOI.
              </div>
              <div className="mt-3 pt-2 border-t border-teal-800/40 flex items-center gap-1 text-[11px] font-medium text-[#22b8cd]">
                <span>Trazabilidad DOI</span>
              </div>
            </button>

            {/* 4. Microsoft Copilot (Cobalt Blue & Violet Gradient) */}
            <button
              onClick={() => onSelectTab('copilot')}
              className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer relative overflow-hidden group ${
                activeTab === 'copilot'
                  ? 'bg-gradient-to-br from-[#004b87] to-[#3a1d6e] text-white border-[#0078d4] shadow-md ring-2 ring-sky-400/40'
                  : 'bg-white border-slate-200 hover:border-sky-200 hover:bg-sky-50/30 text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                    activeTab === 'copilot' ? 'bg-white/10 text-sky-300' : 'bg-sky-50 text-[#0078d4]'
                  }`}>
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold tracking-wide ${
                    activeTab === 'copilot' ? 'text-sky-300' : 'text-[#0078d4]'
                  }`}>
                    M365 WORD
                  </span>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-950/60 text-sky-200 border border-sky-800">
                  04
                </span>
              </div>
              <div className="text-sm font-bold mb-1 leading-snug">Microsoft Copilot</div>
              <div className={`text-xs leading-snug ${
                activeTab === 'copilot' ? 'text-sky-100/80' : 'text-slate-600'
              }`}>
                Prototipado en Word, gobernanza de datos y rutina de revisión en 5 dimensiones.
              </div>
              <div className="mt-3 pt-2 border-t border-sky-800/40 flex items-center gap-1 text-[11px] font-medium text-sky-300">
                <span>Protección Comercial</span>
              </div>
            </button>

            {/* 5. ChatGPT & Coursera (Coursera Royal Blue & DUA Amber) */}
            <button
              onClick={() => onSelectTab('dua')}
              className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer relative overflow-hidden group ${
                activeTab === 'dua'
                  ? 'bg-gradient-to-br from-[#003e9c] to-[#0d5c46] text-white border-[#0056d2] shadow-md ring-2 ring-amber-300/40'
                  : 'bg-white border-slate-200 hover:border-blue-200 hover:bg-blue-50/30 text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                    activeTab === 'dua' ? 'bg-white/10 text-amber-300' : 'bg-amber-50 text-amber-700'
                  }`}>
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold tracking-wide ${
                    activeTab === 'dua' ? 'text-amber-300' : 'text-amber-800'
                  }`}>
                    COURSERA DUA
                  </span>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-950/60 text-amber-200 border border-blue-800">
                  05
                </span>
              </div>
              <div className="text-sm font-bold mb-1 leading-snug">ChatGPT &amp; DUA</div>
              <div className={`text-xs leading-snug ${
                activeTab === 'dua' ? 'text-blue-100/80' : 'text-slate-600'
              }`}>
                Diseño Universal para el Aprendizaje, 3 redes cerebrales y Coursera Coach.
              </div>
              <div className="mt-3 pt-2 border-t border-blue-800/40 flex items-center gap-1 text-[11px] font-medium text-amber-300">
                <span>Inclusión CAST</span>
              </div>
            </button>

            {/* 6. TALLER DE PROMPTS & SETUP (Universidad Externado de Colombia) */}
            <button
              onClick={() => onSelectTab('prompts_config')}
              className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer relative overflow-hidden group ${
                activeTab === 'prompts_config'
                  ? 'bg-slate-900 text-white border-[#c59b27] shadow-lg ring-2 ring-[#c59b27]/50'
                  : 'bg-gradient-to-b from-[#f7f9f8] to-[#edf3f0] border-emerald-300/80 hover:border-[#004b36] text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                    activeTab === 'prompts_config' ? 'bg-[#003828] text-[#c59b27]' : 'bg-[#004b36] text-[#c59b27]'
                  }`}>
                    <Sliders className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-[10px] font-mono font-extrabold tracking-wide ${
                    activeTab === 'prompts_config' ? 'text-[#c59b27]' : 'text-[#004b36]'
                  }`}>
                    LAB EXTERNO
                  </span>
                </div>
                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                  activeTab === 'prompts_config'
                    ? 'bg-[#003828] text-[#c59b27] border border-[#c59b27]/40'
                    : 'bg-[#c59b27] text-slate-950 font-bold'
                }`}>
                  SETUP
                </span>
              </div>
              <div className="text-sm font-extrabold mb-1 leading-snug">Prompts &amp; Setup</div>
              <div className={`text-xs leading-snug ${
                activeTab === 'prompts_config' ? 'text-emerald-100/90' : 'text-slate-700'
              }`}>
                Fórmulas de prompt engineering, pipeline por etapas y triangulación metodológica.
              </div>
              <div className={`mt-3 pt-2 border-t flex items-center justify-between text-[11px] font-semibold ${
                activeTab === 'prompts_config'
                  ? 'border-emerald-800/60 text-[#c59b27]'
                  : 'border-emerald-200 text-[#004b36]'
              }`}>
                <span>Campus Externado</span>
                <span className="font-mono text-[10px]">Configuración</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
