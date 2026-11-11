import React, { useState } from 'react';
import {
  Sliders,
  Sparkles,
  Settings,
  ShieldCheck,
  AlertTriangle,
  Copy,
  Check,
  ChevronRight,
  Code2,
  Layers,
  Search,
  FileText,
  Compass,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  GitCompare,
  Lightbulb,
  Workflow,
  HelpCircle
} from 'lucide-react';
import { PROMPT_AND_CONFIG_DATA, ToolPromptArchitecture } from '../data/promptsAndConfigData';
import {
  PROMPT_THEORY_DATA,
  TOOL_PROMPT_PIPELINES,
  StagePromptExample
} from '../data/promptTheoryAndPipelineData';
import { ToolTab } from '../types';

interface PromptEngineeringAndSetupLabProps {
  initialTool?: ToolTab;
}

export const PromptEngineeringAndSetupLab: React.FC<PromptEngineeringAndSetupLabProps> = ({
  initialTool = 'notebooklm'
}) => {
  const [selectedTool, setSelectedTool] = useState<ToolTab>(initialTool === 'prompts_config' ? 'notebooklm' : initialTool);
  const [activeMainTab, setActiveMainTab] = useState<'fundamentos' | 'pipeline' | 'triangulacion' | 'config' | 'builder'>('fundamentos');
  const [activePipelineStage, setActivePipelineStage] = useState<number>(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Dynamic Prompt Builder State
  const [builderTopic, setBuilderTopic] = useState('Políticas de Inclusión y Brechas Digitales');
  const [builderRole, setBuilderRole] = useState('Diseñador Curricular e Investigador Senior');
  const [builderSources, setBuilderSources] = useState('Informes UNESCO 2024 y CEPAL 2024');
  const [builderRestriction, setBuilderRestriction] = useState('Prohibido inventar datos; citar página y párrafo exacto');
  const [builderCognitiveLevel, setBuilderCognitiveLevel] = useState('Análisis Crítico y Evaluación de Políticas (Bloom Nivel 4-5)');
  const [builderDuaFocus, setBuilderDuaFocus] = useState('Compromiso afectivo con 3 casos situados a elección');

  const currentArch: ToolPromptArchitecture = PROMPT_AND_CONFIG_DATA[selectedTool];
  const currentPipeline = TOOL_PROMPT_PIPELINES[selectedTool];
  const currentStage: StagePromptExample = currentPipeline.stages.find(s => s.stageNumber === activePipelineStage) || currentPipeline.stages[0];

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const generateCustomPrompt = (): string => {
    if (selectedTool === 'notebooklm') {
      return `Actúa como ${builderRole} en educación superior.
Con base EXCLUSIVA en las siguientes fuentes cargadas en este cuaderno: [${builderSources}]:
1. Pregunta Pedagógica: ¿Cómo se aborda el fenómeno de "${builderTopic}"?
2. Estructura tu respuesta en 3 secciones críticas obligatorias:
   - Un Acuerdo: Punto de convergencia conceptual o empírica respaldado por ambos textos.
   - Una Tensión: Discrepancia metodológica, axiológica o de prioridades sin resolver.
   - Un Vacío: Aspecto fundamental o población omitida en ambas fuentes.
3. Respaldo Documental: Inserta citas exactas entre corchetes con [Autor, Sección, Pág.] para cada afirmación.
4. Restricción Estricta: ${builderRestriction}. Si no hay evidencia en las fuentes, responde: "Dato no disponible en el corpus seleccionado".`;
    }

    if (selectedTool === 'perplexity') {
      return `Focus: Academic.
Actúa como ${builderRole} especializado en revisiones bibliográficas formativas.
Pregunta de Investigación: ¿Cuál es el estado del arte y la evidencia empírica reciente sobre "${builderTopic}"?

Filtros Metodológicos Obligatorios:
1. Recupera únicamente estudios publicados entre 2021 y 2026 en revistas arbitradas por pares (Scopus / WoS / PubMed).
2. Para cada estudio, reporta:
   - Cita formal y DOI activo resoluble (https://doi.org/...).
   - Diseño metodológico (¿ensayo experimental, cuasiexperimento, correlacional o cualitativo?).
   - Tamaño muestral real (N=..., características de la población diana).
   - Hallazgo estadístico central reportado en Resultados.
   - Limitaciones explícitas admitidas por los autores en la Discusión.
3. Regla Anti-Alucinación: ${builderRestriction}. Excluye preprints no validados y blogs comerciales.`;
    }

    if (selectedTool === 'copilot') {
      return `Actúa como ${builderRole} para redactar un caso de estudio universitario en formato Microsoft Word.
Tema: "${builderTopic}".
Nivel Cognitivo: ${builderCognitiveLevel}.

Estructura requerida en Word:
1. Narrativa del Caso (500 palabras): Basada exclusivamente en datos públicos agregados de libre acceso [${builderSources}]. Contrasta dos escenarios o municipios sin inventar porcentajes ficticios.
2. Batería de 4 Preguntas de Indagación Progresiva:
   - Pregunta 1: Modelado descriptivo de los datos.
   - Preguntas 2 y 3: Análisis causal, evaluación institucional y dilemas de gestión.
   - Pregunta 4: Propuesta situada de intervención o diseño de política.
3. Rúbrica Analítica en Tabla: 3 criterios ponderados con descriptores observables para niveles Inicial, Competente y Estratégico.
4. Blindaje de Gobernanza: ${builderRestriction}. NO utilices datos sensibles de estudiantes ni personas físicas identificables.`;
    }

    // DUA / ChatGPT & Coursera
    return `Actúa como ${builderRole} experto en DUA (Diseño Universal para el Aprendizaje de CAST) y Coursera Course Builder.
Tema Curricular: "${builderTopic}".
Foco DUA Prioritario: ${builderDuaFocus}.

Instrucciones de Diseño Instruccional:
1. Redes Afectivas (Compromiso): Plantea 3 opciones contextualizadas para que el estudiante elija su estudio de caso aplicado.
2. Redes de Reconocimiento (Representación): Descompón el tema en micro-lecciones de 7 a 9 minutos con subtítulos, transcripciones completas y un glosario visual interactivo.
3. Redes Estratégicas (Acción y Expresión): Diseña una evaluación auténtica con 3 vías de entrega equivalentes (ensayo, podcast explicativo o infografía de datos) evaluadas con una rúbrica analítica única.
4. Configuración para Coursera Coach: Redacta el System Prompt para el tutor virtual, asegurando que guíe con preguntas socráticas graduadas y NUNCA entregue la solución directa de las actividades.
5. Regla de Accesibilidad: ${builderRestriction}.`;
  };

  return (
    <div className="space-y-10">
      {/* 1. Header with Universidad Externado Collegiate Visual Identity */}
      <section className="relative overflow-hidden rounded-2xl border border-emerald-900/30 bg-[#004b36] text-white shadow-xl">
        {/* Background Image with Scrim for WCAG AA compliance */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/externado_campus_academic_1794415748636.jpg"
            alt="Campus de la Universidad Externado de Colombia en los cerros orientales de Bogotá"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003828] via-[#004b36]/90 to-[#002d20]/80" />
        </div>

        <div className="relative z-10 p-6 sm:p-10 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold tracking-wider uppercase bg-[#c59b27] text-slate-950 font-mono shadow-xs">
              TALLER ACTIVO
            </span>
            <span className="text-xs font-bold text-emerald-200 tracking-wide uppercase">
              Universidad Externado de Colombia
            </span>
            <span className="text-emerald-400" aria-hidden="true">·</span>
            <span className="text-xs text-emerald-300 font-medium">
              Cátedra de Innovación Pedagógica
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display">
            Hackea el Aprendizaje: Ingeniería de Prompts, Pipeline por Etapas y Triangulación
          </h2>

          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-3xl">
            Un prompt en educación superior no es una simple consulta de búsqueda; es un <strong className="text-white font-semibold">dispositivo de mediación cognitiva</strong>. Este taller modela la lógica profunda de formulación para las cuatro herramientas, provee prompts secuenciados reproducibles de forma directa con sus resultados esperados, y establece el protocolo institucional de triangulación de resultados y evaluación del aprendizaje.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-emerald-200/80 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]" />
              Formulación Rigurosa
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]" />
              Pipelines Listos para Copiar
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]" />
              Triangulación de Fuentes y Métodos
            </span>
          </div>
        </div>
      </section>

      {/* 2. Master Navigation Bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveMainTab('fundamentos')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
            activeMainTab === 'fundamentos'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>1. Fundamentos: ¿Qué es un Prompt?</span>
        </button>

        <button
          onClick={() => setActiveMainTab('pipeline')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
            activeMainTab === 'pipeline'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
          }`}
        >
          <Workflow className="w-3.5 h-3.5" />
          <span>2. Prompts por Etapas (Uso Directo)</span>
        </button>

        <button
          onClick={() => setActiveMainTab('triangulacion')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
            activeMainTab === 'triangulacion'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
          }`}
        >
          <GitCompare className="w-3.5 h-3.5" />
          <span>3. Triangulación y Evaluación</span>
        </button>

        <button
          onClick={() => setActiveMainTab('config')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
            activeMainTab === 'config'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
          }`}
        >
          <Settings className="w-3.5 h-3.5" />
          <span>4. Configuración y Setup Técnico</span>
        </button>

        <button
          onClick={() => setActiveMainTab('builder')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
            activeMainTab === 'builder'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>5. Generador Dinámico</span>
        </button>
      </div>

      {/* =========================================================================
          TAB 1: FUNDAMENTOS DEL PROMPT EN EDUCACIÓN
         ========================================================================= */}
      {activeMainTab === 'fundamentos' && (
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Aparte Teórico Introductorio
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              ¿Qué es un Prompt, cuál es su Finalidad y cómo se Construye en Educación?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              Comprender la diferencia epistemológica entre buscar información en un navegador y articular un prompt estructurado como andamiaje formativo.
            </p>
          </div>

          {/* Definitions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">Definición Técnica:</span>
              <p className="text-slate-600 leading-relaxed">
                {PROMPT_THEORY_DATA.definition.technical}
              </p>
            </div>

            <div className="p-5 bg-indigo-50/70 rounded-xl border border-indigo-200 space-y-2">
              <span className="font-bold text-indigo-950 text-sm block">Definición Pedagógica en Educación:</span>
              <p className="text-indigo-900 leading-relaxed">
                {PROMPT_THEORY_DATA.definition.pedagogical}
              </p>
            </div>
          </div>

          {/* Analogy Box */}
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="block text-sm">La Analogía: Pregunta a Google vs. Prompt Pedagógico</strong>
              <p className="leading-relaxed text-slate-700">
                {PROMPT_THEORY_DATA.definition.notAQuestionAnalogy}
              </p>
            </div>
          </div>

          {/* 4 Pedagogical Purposes in Higher Education */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Las 4 Finalidades Didácticas del Prompt en la Universidad
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {PROMPT_THEORY_DATA.pedagogicalPurposes.map((purp, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-slate-900 mb-1 leading-snug">{purp.title}</div>
                    <p className="text-slate-600 leading-relaxed mb-2">{purp.description}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-[11px] text-indigo-700 font-medium">
                    Impacto en el aula: {purp.classroomImpact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparative Educational Examples Table */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Contraste de Ejemplos en Educación: Prompt Débil vs. Prompt Transformador
            </h4>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                    <th className="p-3 w-32">Herramienta</th>
                    <th className="p-3 w-40">Contexto Didáctico</th>
                    <th className="p-3 w-1/4">Prompt Débil Tradicional</th>
                    <th className="p-3 w-1/3 bg-indigo-50/40">Prompt Pedagógico Transformador</th>
                    <th className="p-3">Por Qué Transforma el Aprendizaje</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {PROMPT_THEORY_DATA.educationalExamplesByTool.map((ex, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 font-bold text-slate-900 align-top">
                        {ex.tool}
                      </td>
                      <td className="p-3 text-slate-600 align-top">
                        {ex.educationalContext}
                      </td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 bg-rose-50/30 align-top leading-relaxed">
                        "{ex.traditionalWeakPrompt}"
                      </td>
                      <td className="p-3 font-mono text-[11px] text-indigo-900 bg-indigo-50/20 align-top leading-relaxed">
                        "{ex.pedagogicalStrongPrompt}"
                      </td>
                      <td className="p-3 text-slate-600 text-[11px] align-top leading-relaxed">
                        {ex.whyItTransformsLearning}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* The 5-Step Logic of Construction */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              La Lógica de Construcción en 5 Pasos Metodológicos
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 text-xs">
              {PROMPT_THEORY_DATA.constructionLogicSteps.map((s) => (
                <div key={s.step} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 flex flex-col justify-between">
                  <div>
                    <span className="font-mono font-bold text-indigo-600 block text-[11px]">PASO 0{s.step}</span>
                    <div className="font-bold text-slate-900 mt-0.5 leading-snug">{s.name}</div>
                    <p className="text-slate-600 mt-1 text-[11px] leading-relaxed">{s.description}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 italic">
                    Pregunta guía: "{s.guidingQuestion}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          TAB 2: PIPELINE DE PROMPTS POR ETAPAS (USO DIRECTO PARA ESTUDIANTES)
         ========================================================================= */}
      {activeMainTab === 'pipeline' && (
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Herramientas y Etapas Secuenciales
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Pipeline de Prompts Listos para Copiar: {currentPipeline.toolName}
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                {currentPipeline.pedagogicalRole}
              </p>
            </div>

            {/* Tool Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
              <button
                onClick={() => {
                  setSelectedTool('notebooklm');
                  setActivePipelineStage(1);
                }}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedTool === 'notebooklm' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                NotebookLM
              </button>
              <button
                onClick={() => {
                  setSelectedTool('perplexity');
                  setActivePipelineStage(1);
                }}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedTool === 'perplexity' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Perplexity
              </button>
              <button
                onClick={() => {
                  setSelectedTool('copilot');
                  setActivePipelineStage(1);
                }}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedTool === 'copilot' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Copilot
              </button>
              <button
                onClick={() => {
                  setSelectedTool('dua');
                  setActivePipelineStage(1);
                }}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedTool === 'dua' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ChatGPT &amp; DUA
              </button>
            </div>
          </div>

          {/* 4 Sequential Stage Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {currentPipeline.stages.map((stage) => {
              const isSelected = activePipelineStage === stage.stageNumber;
              return (
                <button
                  key={stage.stageNumber}
                  onClick={() => setActivePipelineStage(stage.stageNumber)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-indigo-50/80 border-indigo-400 shadow-xs ring-1 ring-indigo-400/30'
                      : 'bg-slate-50/60 border-slate-200 hover:bg-slate-100/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-mono font-bold text-indigo-700">
                        ETAPA 0{stage.stageNumber}
                      </span>
                      {isSelected && <span className="text-[10px] font-bold text-indigo-800">Activa</span>}
                    </div>
                    <div className="text-xs font-bold text-slate-900 leading-snug">
                      {stage.stageName.split(': ')[1] || stage.stageName}
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-1 mt-2">
                    {stage.stageGoal}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Breakdown Sandbox */}
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-600">
                  Etapa 0{currentStage.stageNumber} de 04
                </span>
                <h4 className="text-base font-bold text-slate-900">{currentStage.stageName}</h4>
                <div className="text-xs text-slate-500">{currentStage.stageGoal}</div>
              </div>

              <button
                onClick={() => handleCopyText(currentStage.readyToUsePrompt, `stage-prompt-${currentStage.stageNumber}`)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer shrink-0 shadow-xs"
              >
                {copiedId === `stage-prompt-${currentStage.stageNumber}` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === `stage-prompt-${currentStage.stageNumber}` ? 'Prompt Copiado' : 'Copiar Prompt para la Herramienta'}</span>
              </button>
            </div>

            {/* 3 Columns: 1. Prompt Listo para Usar | 2. Resultado Esperado IA | 3. Acción Crítica del Estudiante */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
              {/* Col 1: Prompt */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2 font-bold text-slate-900">
                    <span>1. Prompt Exacto a Ingresar:</span>
                    <span className="text-[11px] text-indigo-600 font-mono">Input</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg font-mono text-[11px] text-slate-800 leading-relaxed whitespace-pre-wrap max-h-80 overflow-y-auto">
                    {currentStage.readyToUsePrompt}
                  </div>
                </div>
                <div className="pt-2 text-[11px] text-slate-500 italic">
                  Pegar directamente en {currentPipeline.toolName}.
                </div>
              </div>

              {/* Col 2: Expected Output */}
              <div className="p-4 bg-indigo-50/40 rounded-xl border border-indigo-200 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-indigo-100 pb-2 mb-2 font-bold text-indigo-950">
                    <span>2. Resultado Esperado de la IA:</span>
                    <span className="text-[11px] text-indigo-700 font-mono">Output Simulado</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg text-slate-800 leading-relaxed text-[11px] max-h-80 overflow-y-auto">
                    {currentStage.expectedAiOutput}
                  </div>
                </div>
                <div className="pt-2 text-[11px] text-indigo-900 font-medium">
                  Verificar que la IA respete la estructura solicitada.
                </div>
              </div>

              {/* Col 3: Student Critical Action */}
              <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-amber-200 pb-2 mb-2 font-bold text-amber-950">
                    <span>3. Tarea Crítica del Estudiante:</span>
                    <span className="text-[11px] text-amber-800 font-mono">Juicio Humano</span>
                  </div>
                  <p className="text-slate-800 leading-relaxed font-medium">
                    {currentStage.studentCriticalAction}
                  </p>

                  <div className="mt-3 pt-3 border-t border-amber-200 space-y-1.5">
                    <span className="font-bold text-amber-950 block">Lista de Control Evaluativo:</span>
                    <ul className="space-y-1 text-slate-700">
                      {currentStage.evaluationChecklist.map((chk, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-snug">{chk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-amber-900 font-semibold">
                  Evidencia requerida para aprobar la etapa.
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          TAB 3: PROTOCOLO DE TRIANGULACIÓN Y EVALUACIÓN DE RESULTADOS
         ========================================================================= */}
      {activeMainTab === 'triangulacion' && (
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Rigor Epistemológico y Control de Calidad
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Protocolo de Triangulación de Resultados y Evaluación Formativa
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              Cómo cruzar sistemáticamente fuentes, herramientas y evaluadores para impedir que las alucinaciones algorítmicas se consoliden como evidencias de aprendizaje.
            </p>
          </div>

          {/* 3 Pillars of Triangulation in AI Era */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {PROMPT_THEORY_DATA.triangulationPrinciples.map((princ, idx) => (
              <div key={idx} className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-indigo-600 font-bold block text-[11px]">PILAR 0{idx + 1}</span>
                  <div className="font-bold text-slate-900 text-sm mt-0.5 mb-1 leading-snug">{princ.title}</div>
                  <div className="text-[11px] text-slate-500 italic mb-2">{princ.subtitle}</div>
                  <p className="text-slate-600 leading-relaxed mb-3">{princ.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-1.5">
                  <span className="font-bold text-slate-800 block text-[11px]">Pasos Operativos:</span>
                  <ul className="space-y-1 text-slate-600 text-[11px]">
                    {princ.protocolSteps.map((st, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <ArrowRight className="w-3 h-3 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Triangulation Protocol Matrix for Selected Tool */}
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <h4 className="text-sm font-bold text-slate-900">
                Protocolo de Triangulación Aplicado a {currentPipeline.toolName}
              </h4>
              <span className="text-xs text-slate-500 font-mono">Rúbrica Formativa de Proceso</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1.5">
                <strong className="text-slate-900 block">Fuentes a Cruzar Obligatoriamente:</strong>
                <ul className="space-y-1 text-slate-600">
                  {currentPipeline.triangulationProtocol.dataSourcesToCross.map((src, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <span className="text-indigo-600 font-bold">·</span>
                      <span>{src}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1.5">
                <strong className="text-slate-900 block">Método de Verificación:</strong>
                <p className="text-slate-600 leading-relaxed">
                  {currentPipeline.triangulationProtocol.verificationMethod}
                </p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1.5">
                <strong className="text-slate-900 block">Rol del Juicio Humano Docente:</strong>
                <p className="text-slate-600 leading-relaxed">
                  {currentPipeline.triangulationProtocol.humanJudgmentRole}
                </p>
              </div>
            </div>

            {/* Rubric for Triangulation Evaluation */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-2">
                Criterios de Evaluación Procesual (Rúbrica de la Evidencia Triangulada):
              </span>
              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-white border-b border-slate-200 text-slate-800 font-semibold">
                      <th className="p-2.5 w-48">Dimensión Evaluada</th>
                      <th className="p-2.5 w-24">Peso</th>
                      <th className="p-2.5">Evidencia Observable Requerida</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                    {currentPipeline.triangulationProtocol.rubricCriteria.map((rc, rIdx) => (
                      <tr key={rIdx}>
                        <td className="p-2.5 font-bold text-slate-900">{rc.dimension}</td>
                        <td className="p-2.5 font-mono text-indigo-700">{rc.weight}</td>
                        <td className="p-2.5 text-slate-600 leading-relaxed">{rc.observableEvidence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          TAB 4: CONFIGURACIÓN TÉCNICA Y SETUP PASO A PASO
         ========================================================================= */}
      {activeMainTab === 'config' && (
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Gobernanza Institucional &amp; Perímetro de Seguridad
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Guía de Configuración Técnica: {currentArch.toolName}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
              <button
                onClick={() => setSelectedTool('notebooklm')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedTool === 'notebooklm' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                NotebookLM
              </button>
              <button
                onClick={() => setSelectedTool('perplexity')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedTool === 'perplexity' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Perplexity
              </button>
              <button
                onClick={() => setSelectedTool('copilot')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedTool === 'copilot' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Copilot
              </button>
              <button
                onClick={() => setSelectedTool('dua')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedTool === 'dua' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ChatGPT &amp; DUA
              </button>
            </div>
          </div>

          {/* Version Banner */}
          <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Entorno y Licencia Recomendada:</span>
            </div>
            <div className="text-sm font-bold text-white">
              {currentArch.setupGuide.recommendedVersion}
            </div>
            <p className="text-slate-300 leading-relaxed">
              {currentArch.setupGuide.governanceAndPrivacy}
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentArch.setupGuide.stepByStepConfig.map((st) => (
              <div key={st.stepNumber} className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2 flex flex-col justify-between">
                <div>
                  <span className="font-mono font-bold text-indigo-700">PASO 0{st.stepNumber}</span>
                  <div className="font-bold text-slate-900 text-sm mt-0.5 mb-1">{st.title}</div>
                  <p className="text-slate-600 leading-relaxed">{st.action}</p>
                </div>
                <div className="pt-2 border-t border-slate-200 space-y-1 text-[11px]">
                  <div className="text-slate-500">
                    <strong>Ajuste en:</strong> {st.settingLocation}
                  </div>
                  {st.criticalWarning && (
                    <div className="p-2 bg-amber-50 rounded text-amber-900 font-medium flex items-start gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span>{st.criticalWarning}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Best Practices vs Anti-Patterns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
              <div className="font-bold text-emerald-950 uppercase flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-700" />
                <span>Buenas Prácticas de Configuración:</span>
              </div>
              <ul className="space-y-1.5 text-slate-700">
                {currentArch.setupGuide.bestPractices.map((bp, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-bold shrink-0">·</span>
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl space-y-2">
              <div className="font-bold text-rose-950 uppercase flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-700" />
                <span>Anti-Patrones a Evitar:</span>
              </div>
              <ul className="space-y-1.5 text-slate-700">
                {currentArch.setupGuide.antiPatternsToAvoid.map((ap, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-rose-700 font-bold shrink-0">·</span>
                    <span>{ap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          TAB 5: GENERADOR DINÁMICO DE PROMPTS
         ========================================================================= */}
      {activeMainTab === 'builder' && (
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Personalización de Variables
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Generador de Prompt Dinámico para {currentArch.toolName}
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Modifique los parámetros para obtener la instrucción exacta según su cátedra o seminario.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Form */}
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3.5 text-xs">
              <div className="font-bold text-slate-900 uppercase">Parámetros del Prompt:</div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tema / Objeto de Indagación:</label>
                <input
                  type="text"
                  value={builderTopic}
                  onChange={(e) => setBuilderTopic(e.target.value)}
                  className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-indigo-500 text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Rol y Postura del Interlocutor:</label>
                <input
                  type="text"
                  value={builderRole}
                  onChange={(e) => setBuilderRole(e.target.value)}
                  className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-indigo-500 text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Fuentes de Datos / Corpus Requerido:</label>
                <input
                  type="text"
                  value={builderSources}
                  onChange={(e) => setBuilderSources(e.target.value)}
                  className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-indigo-500 text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Regla de Restricción y Anti-Alucinación:</label>
                <input
                  type="text"
                  value={builderRestriction}
                  onChange={(e) => setBuilderRestriction(e.target.value)}
                  className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-indigo-500 text-xs"
                />
              </div>

              {selectedTool === 'copilot' && (
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nivel Cognitivo de Bloom:</label>
                  <input
                    type="text"
                    value={builderCognitiveLevel}
                    onChange={(e) => setBuilderCognitiveLevel(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-indigo-500 text-xs"
                  />
                </div>
              )}

              {selectedTool === 'dua' && (
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Foco DUA Específico:</label>
                  <input
                    type="text"
                    value={builderDuaFocus}
                    onChange={(e) => setBuilderDuaFocus(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-indigo-500 text-xs"
                  />
                </div>
              )}
            </div>

            {/* Assembled Output */}
            <div className="p-5 bg-slate-900 text-slate-100 rounded-xl border border-slate-800 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                  <span className="text-xs font-mono font-bold text-indigo-400">
                    Prompt Ensamblado para Copiar
                  </span>
                  <span className="text-xs text-slate-400">Listo para producción</span>
                </div>
                <pre className="text-xs text-slate-200 font-mono leading-relaxed whitespace-pre-wrap p-3 bg-slate-950/80 rounded-lg border border-slate-800 max-h-96 overflow-y-auto">
                  {generateCustomPrompt()}
                </pre>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Fórmula {currentArch.formulaName.split('(')[0].trim()}
                </span>
                <button
                  onClick={() => handleCopyText(generateCustomPrompt(), 'custom-prompt-builder')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedId === 'custom-prompt-builder' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'custom-prompt-builder' ? 'Copiado al Portapapeles' : 'Copiar Prompt Generado'}</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
