import React, { useState } from 'react';
import {
  Copy,
  Check,
  Code2,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Info
} from 'lucide-react';
import { TOOL_PROMPT_PIPELINES, StagePromptExample } from '../data/promptTheoryAndPipelineData';

interface ToolReproduciblePromptsSectionProps {
  toolId: 'notebooklm' | 'perplexity' | 'copilot' | 'dua';
}

export const ToolReproduciblePromptsSection: React.FC<ToolReproduciblePromptsSectionProps> = ({
  toolId
}) => {
  const [activeStageNumber, setActiveStageNumber] = useState<number>(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const pipeline = TOOL_PROMPT_PIPELINES[toolId];
  if (!pipeline) return null;

  const activeStage: StagePromptExample =
    pipeline.stages.find((s) => s.stageNumber === activeStageNumber) || pipeline.stages[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Tool Brand Identity Styles
  const getBrandStyles = () => {
    switch (toolId) {
      case 'notebooklm':
        return {
          pillBadge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          activeTab: 'bg-slate-900 text-white border-slate-700 ring-2 ring-emerald-400/40 shadow-sm',
          inactiveTab: 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100',
          copyBtn: 'bg-slate-900 hover:bg-slate-800 text-white border-slate-700',
          accentText: 'text-emerald-700',
          kicker: 'text-emerald-700',
          brandTag: 'Google Labs · NotebookLM'
        };
      case 'perplexity':
        return {
          pillBadge: 'bg-teal-100 text-teal-800 border-teal-300',
          activeTab: 'bg-[#13343b] text-white border-[#20808d] ring-2 ring-[#22b8cd]/40 shadow-sm',
          inactiveTab: 'bg-teal-50/40 border-teal-100 text-slate-700 hover:bg-teal-50',
          copyBtn: 'bg-[#13343b] hover:bg-[#1c4750] text-[#22b8cd] border-[#20808d]',
          accentText: 'text-[#20808d]',
          kicker: 'text-[#20808d]',
          brandTag: 'Perplexity AI · Academic Focus'
        };
      case 'copilot':
        return {
          pillBadge: 'bg-sky-100 text-sky-800 border-sky-300',
          activeTab: 'bg-gradient-to-r from-[#004b87] to-[#106ebe] text-white border-[#0078d4] ring-2 ring-sky-400/40 shadow-sm',
          inactiveTab: 'bg-sky-50/40 border-sky-100 text-slate-700 hover:bg-sky-50',
          copyBtn: 'bg-[#0078d4] hover:bg-[#106ebe] text-white',
          accentText: 'text-[#0078d4]',
          kicker: 'text-[#0078d4]',
          brandTag: 'Microsoft 365 Copilot · Word'
        };
      case 'dua':
        return {
          pillBadge: 'bg-blue-100 text-blue-800 border-blue-300',
          activeTab: 'bg-gradient-to-r from-[#0056d2] to-[#0a47a3] text-white border-blue-600 ring-2 ring-amber-300/40 shadow-sm',
          inactiveTab: 'bg-blue-50/40 border-blue-100 text-slate-700 hover:bg-blue-50',
          copyBtn: 'bg-[#0056d2] hover:bg-[#00419e] text-white',
          accentText: 'text-[#0056d2]',
          kicker: 'text-[#0056d2]',
          brandTag: 'Coursera Course Builder & Coach · CAST DUA'
        };
    }
  };

  const brand = getBrandStyles();

  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Header with tool-authentic branding */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1">
            <Code2 className={`w-4 h-4 ${brand.kicker}`} />
            <span className={brand.kicker}>{brand.brandTag}</span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="text-slate-500 font-medium">Guía Práctica de Reproducción Directa</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Prompts Listos para Reproducir en {pipeline.toolName} (Paso a Paso con este Ejemplo)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Copie cada prompt secuencialmente en la herramienta real, contraste el resultado esperado y ejecute la acción crítica docente/estudiantil.
          </p>
        </div>

        <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
          4 etapas secuenciales
        </span>
      </div>

      {/* Stage Selector Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {pipeline.stages.map((stage) => {
          const isSelected = activeStageNumber === stage.stageNumber;
          return (
            <button
              key={stage.stageNumber}
              onClick={() => setActiveStageNumber(stage.stageNumber)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected ? brand.activeTab : brand.inactiveTab
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[11px] font-mono font-bold ${
                    isSelected ? 'text-amber-300' : 'text-slate-500'
                  }`}>
                    PASO 0{stage.stageNumber}
                  </span>
                  {isSelected && (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-white/20 text-white">
                      Activo
                    </span>
                  )}
                </div>
                <div className="text-xs font-bold leading-snug">
                  {stage.stageName.split(': ')[1] || stage.stageName}
                </div>
              </div>
              <div className={`text-[11px] line-clamp-1 mt-2 ${
                isSelected ? 'text-white/80' : 'text-slate-500'
              }`}>
                {stage.stageGoal}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Card */}
      <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-200 pb-3">
          <div>
            <span className={`text-xs font-mono font-bold ${brand.kicker}`}>
              Paso 0{activeStage.stageNumber} de 04
            </span>
            <h4 className="text-base font-bold text-slate-900">{activeStage.stageName}</h4>
            <div className="text-xs text-slate-500">{activeStage.stageGoal}</div>
          </div>

          <button
            onClick={() => handleCopy(activeStage.readyToUsePrompt, `copy-stage-${activeStage.stageNumber}`)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0 shadow-xs ${brand.copyBtn}`}
          >
            {copiedId === `copy-stage-${activeStage.stageNumber}` ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            <span>
              {copiedId === `copy-stage-${activeStage.stageNumber}`
                ? 'Prompt Copiado al Portapapeles'
                : `Copiar Prompt para ${pipeline.toolName}`}
            </span>
          </button>
        </div>

        {/* 3 Columns: 1. Prompt Exacto | 2. Resultado Esperado en la Herramienta | 3. Acción Crítica del Alumno */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
          {/* Col 1: Prompt Exacto */}
          <div className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col justify-between space-y-2">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                <span className="font-bold text-slate-900">1. Prompt Exacto para Pegar:</span>
                <span className={`text-[11px] font-mono font-bold ${brand.accentText}`}>Input</span>
              </div>
              <pre className="p-3 bg-slate-50 rounded-lg font-mono text-[11px] text-slate-800 leading-relaxed whitespace-pre-wrap max-h-80 overflow-y-auto">
                {activeStage.readyToUsePrompt}
              </pre>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Pegar en {pipeline.toolName}</span>
              <button
                onClick={() => handleCopy(activeStage.readyToUsePrompt, `copy-stage-${activeStage.stageNumber}`)}
                className={`font-semibold cursor-pointer ${brand.accentText}`}
              >
                Copiar
              </button>
            </div>
          </div>

          {/* Col 2: Resultado Esperado de la IA */}
          <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200 flex flex-col justify-between space-y-2">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
                <span className="font-bold text-slate-900">2. Resultado Esperado de la IA:</span>
                <span className="text-[11px] text-slate-500 font-mono">Output Simulado</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-800 leading-relaxed text-[11px] max-h-80 overflow-y-auto font-sans">
                {activeStage.expectedAiOutput}
              </div>
            </div>
            <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-600 font-medium">
              Verifique que la IA estructuró la respuesta sin omitir citas o datos.
            </div>
          </div>

          {/* Col 3: Acción Crítica del Estudiante */}
          <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between border-b border-amber-200 pb-2 mb-2">
                <span className="font-bold text-amber-950">3. Acción Crítica del Estudiante:</span>
                <span className="text-[11px] text-amber-800 font-mono">Juicio Humano</span>
              </div>
              <p className="text-slate-800 leading-relaxed font-medium">
                {activeStage.studentCriticalAction}
              </p>

              <div className="mt-3 pt-3 border-t border-amber-200 space-y-1.5">
                <span className="font-bold text-amber-950 block">Lista de Control Evaluativo:</span>
                <ul className="space-y-1 text-slate-700">
                  {activeStage.evaluationChecklist.map((chk, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-snug">{chk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 border-t border-amber-200 text-[11px] text-amber-900 font-semibold">
              Evidencia obligatoria para aprobar la etapa.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
