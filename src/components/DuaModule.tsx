import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  Layers,
  Heart,
  Eye,
  Activity,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Copy,
  Check,
  Brain,
  MonitorPlay,
  FileCheck,
  ExternalLink
} from 'lucide-react';
import {
  DUA_NETWORKS,
  AUDITED_COURSE_MODULE,
  COURSERA_PROMPT_PATTERNS
} from '../data/duaData';
import { DuaNetwork } from '../types';
import { ToolReproduciblePromptsSection } from './ToolReproduciblePromptsSection';

export const DuaModule: React.FC = () => {
  const [activeNetworkId, setActiveNetworkId] = useState<'engagement' | 'representation' | 'action_expression'>('engagement');
  const [activePromptCategoryIndex, setActivePromptCategoryIndex] = useState<number>(0);
  const [copiedPromptIndex, setCopiedPromptIndex] = useState<number | null>(null);
  const [transformationView, setTransformationView] = useState<'before_after' | 'coach_scaffolding'>('before_after');

  const selectedNetwork = DUA_NETWORKS.find((n) => n.id === activeNetworkId) || DUA_NETWORKS[0];

  const handleCopyPrompt = (prompt: string, idx: number) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPromptIndex(idx);
    setTimeout(() => setCopiedPromptIndex(null), 2500);
  };

  return (
    <div className="space-y-12">
      {/* 1. Core Educational Framework */}
      <section className="bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-8">
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <span>Neurociencia y Diseño Instruccional</span>
              <span aria-hidden="true">·</span>
              <span>Inclusión Universal</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://chatgpt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-xs transition-colors shrink-0"
              >
                <span>Abrir ChatGPT</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-200" />
              </a>
              <a
                href="https://www.coursera.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0056d2] hover:bg-[#0047b3] text-white font-bold text-xs shadow-xs transition-colors shrink-0"
              >
                <span>Abrir Coursera</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            ChatGPT y Coursera en Cursos Virtuales: El Marco DUA
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            El <strong className="text-white font-semibold">Diseño Universal para el Aprendizaje (DUA / UDL)</strong>, desarrollado por el Center for Applied Special Technology (CAST), postula que la variabilidad en el aprendizaje es la norma, no la excepción. No existen "estudiantes promedio". Al construir cursos virtuales en plataformas como Coursera mediante ChatGPT y Course Builder, el objetivo de la IA no es generar más texto plano, sino <strong className="text-white font-semibold">eliminar barreras cognitivas y sensoriales</strong> mediante tres redes cerebrales esenciales.
          </p>

          <div className="pt-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-lg bg-slate-800/80 border border-amber-900/40">
              <div className="flex items-center gap-1.5 font-bold text-amber-400 mb-1">
                <Heart className="w-3.5 h-3.5" />
                <span>1. Redes Afectivas</span>
              </div>
              <span className="text-slate-300 font-semibold block mb-0.5">Múltiples Formas de Compromiso</span>
              <span className="text-slate-400">El "Por qué" del aprendizaje: captar interés, sostener persistencia y fomentar autorregulación.</span>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-800/80 border border-sky-900/40">
              <div className="flex items-center gap-1.5 font-bold text-sky-400 mb-1">
                <Eye className="w-3.5 h-3.5" />
                <span>2. Redes de Reconocimiento</span>
              </div>
              <span className="text-slate-300 font-semibold block mb-0.5">Múltiples Formas de Representación</span>
              <span className="text-slate-400">El "Qué" del aprendizaje: percepción multimodal, clarificación de lenguaje y comprensión profunda.</span>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-800/80 border border-emerald-900/40">
              <div className="flex items-center gap-1.5 font-bold text-emerald-400 mb-1">
                <Activity className="w-3.5 h-3.5" />
                <span>3. Redes Estratégicas</span>
              </div>
              <span className="text-slate-300 font-semibold block mb-0.5">Múltiples Formas de Acción y Expresión</span>
              <span className="text-slate-400">El "Cómo" del aprendizaje: interacción física, entregas diversificadas y funciones ejecutivas.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt Engineering & Setup Reference Banner */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
              Metodología de Formulación &amp; Setup Técnico
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Cómo Construir el Prompt en ChatGPT / Coursera: Fórmula D.U.A.-C.A.S.T.
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            Setup: Coursera Course Builder + Coach System Prompt
          </span>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          Para diseñar módulos verdaderamente inclusivos, el prompt para ChatGPT debe contemplar: <strong>D</strong>iseño de opciones afectivas (compromiso), <strong>U</strong>niversalidad de representación (micro-lecciones 7-9 min, transcripciones y glosarios), <strong>A</strong>cción y expresión con evaluación multimodal equivalente, <strong>C</strong>onfiguración socrática para el Coursera Coach, y <strong>T</strong>extos alternativos accesibles WCAG AAA.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900">1. Blueprint en Course Builder</div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Fijar topes de duración máxima por video (7 a 9 minutos) para prevenir la sobrecarga cognitiva en la memoria de trabajo.
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900">2. System Prompt del Coursera Coach</div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Programar la regla estricta: "NUNCA des la respuesta directa; formula pistas conceptuales y resalta el paso donde ocurrió el error".
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900">3. Rúbrica Neutral al Formato</div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Permitir entrega en ensayo, podcast o infografía, evaluando el rigor analítico de fondo con la misma escala.
            </p>
          </div>
        </div>
      </section>

      {/* Reproducible Prompts Pipeline for Students */}
      <ToolReproduciblePromptsSection toolId="dua" />

      {/* 2. The 3 Brain Networks & Guidelines Explorer */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Fundamentos Neurocientíficos del CAST
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Las 3 Redes Cerebrales del DUA y sus Pautas Operativas
            </h3>
          </div>
          <div className="text-xs text-slate-500">
            Nivel: Acceso → Construcción → Internalización
          </div>
        </div>

        {/* Network Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {DUA_NETWORKS.map((network) => {
            const isSelected = activeNetworkId === network.id;
            return (
              <button
                key={network.id}
                onClick={() => setActiveNetworkId(network.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? network.id === 'engagement'
                      ? 'bg-amber-50/80 border-amber-400 shadow-xs'
                      : network.id === 'representation'
                      ? 'bg-sky-50/80 border-sky-400 shadow-xs'
                      : 'bg-emerald-50/80 border-emerald-400 shadow-xs'
                    : 'bg-slate-50/60 border-slate-200 hover:bg-slate-100/60'
                }`}
              >
                <div className="text-xs font-mono font-bold text-slate-500 mb-1">
                  {network.brainNetwork.toUpperCase()}
                </div>
                <div className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                  {network.name}
                </div>
                <div className="text-xs text-slate-600 line-clamp-1">
                  {network.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Network In-Depth Breakdown */}
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-slate-500">
                {selectedNetwork.brainNetwork}
              </span>
              <h4 className="text-base font-bold text-slate-900">
                {selectedNetwork.name} ({selectedNetwork.subtitle})
              </h4>
            </div>
            <div className="text-xs text-slate-600 max-w-md italic">
              "{selectedNetwork.coreQuestion}"
            </div>
          </div>

          <div className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
            <strong className="text-slate-900">Sustrato Neurobiológico: </strong>
            {selectedNetwork.neuroscienceBasis}
          </div>

          {/* Guidelines Cards (Acceso, Construcción, Internalización) */}
          <div className="space-y-4">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Pautas Pedagógicas y Prompts para ChatGPT / Coursera Builder:
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {selectedNetwork.guidelines.map((g, idx) => (
                <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col justify-between space-y-3 text-xs">
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-slate-400 block mb-1">
                      {g.tier}
                    </span>
                    <div className="font-bold text-slate-900 mb-2 leading-snug">
                      {g.title}
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-3">
                      {g.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="p-2.5 bg-slate-50 rounded-lg text-slate-800 font-mono text-[11px] leading-relaxed">
                      <strong className="block text-slate-900 font-sans text-xs mb-1">Prompt ChatGPT:</strong>
                      "{g.chatGptCourseraPrompt}"
                    </div>
                    <div className="text-[11px] text-slate-500">
                      <strong>Ejemplo Coursera:</strong> {g.concreteExample}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Coursera Course Builder & Coach Scaffolding Architecture */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            El Componente Coursera
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Coursera Course Builder &amp; Coursera Coach: Inteligencia Artificial como Andamiaje
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
            En Coursera, la IA no se limita a un generador de texto; se bifurca en dos funciones estratégicas:
            el <strong>Course Builder</strong> (asiste al docente en estructurar el diseño instruccional) y el <strong>Coursera Coach</strong> (acompaña al alumno en tiempo real como tutor socrático adaptativo).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Course Builder Role */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
            <div className="flex items-center gap-2">
              <MonitorPlay className="w-4 h-4 text-indigo-600" />
              <h4 className="font-bold text-slate-900 text-sm">Coursera Course Builder (Autoría Docente)</h4>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Permite a los diseñadores curriculares universitarios generar esqueletos de módulos completos a partir de libros de texto o sílabos existentes.
            </p>
            <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1.5">
              <strong className="text-slate-900 block">Principio DUA a exigir en Course Builder:</strong>
              <p className="text-slate-600">
                Nunca aceptar lecciones monolíticas de video continuo de 60 minutos. Ordenar a la IA que divida el módulo en cápsulas de 6 a 9 minutos intercaladas con verificaciones formativas breves (In-Video Questions) y recursos multimodales complementarios.
              </p>
            </div>
          </div>

          {/* Coursera Coach Role */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-emerald-600" />
              <h4 className="font-bold text-slate-900 text-sm">Coursera Coach (Tutoría Dialógica al Estudiante)</h4>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Un asistente de IA integrado directamente en la interfaz del curso que conversa con el estudiante mientras visualiza los contenidos o intenta los ejercicios.
            </p>
            <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1.5">
              <strong className="text-slate-900 block">Principio DUA de Andamiaje Socrático:</strong>
              <p className="text-slate-600">
                El Coach debe ser configurado con prompts de sistema estrictos para que no entregue la solución directa, sino que diagnostique la fuente de la confusión del estudiante y brinde analogías graduadas o pistas reflexivas.
              </p>
            </div>
          </div>
        </div>

        {/* Tested Prompt Patterns for Instructors */}
        <div className="space-y-4 pt-2">
          <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
            Patrones de Prompt Pedagógicos para Diseñar Cursos con DUA en ChatGPT
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {COURSERA_PROMPT_PATTERNS.map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between space-y-3 text-xs">
                <div>
                  <div className="text-xs font-mono font-semibold text-indigo-700 mb-1">
                    {item.category}
                  </div>
                  <h5 className="font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h5>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-[11px] leading-relaxed text-slate-700 whitespace-pre-line">
                    {item.prompt}
                  </div>
                </div>

                <button
                  onClick={() => handleCopyPrompt(item.prompt, idx)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                >
                  {copiedPromptIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPromptIndex === idx ? 'Prompt Copiado' : 'Copiar Prompt'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Course Redesign Workbench: Monolithic vs. DUA Transformed */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Laboratorio de Transformación Curricular
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Auditoría de un Módulo Real: De la Exclusión Rígida al Diseño Universal
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Analice cómo un módulo tradicional sobre política fiscal saturado de barreras se rediseña con ChatGPT y Coursera aplicando las pautas DUA.
          </p>
        </div>

        <div className="p-4 bg-slate-100 rounded-xl text-xs font-bold text-slate-900">
          Módulo Evaluado: {AUDITED_COURSE_MODULE.unitTitle}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Traditional Format (Monolithic & Barrier-Heavy) */}
          <div className="p-5 rounded-xl bg-rose-50/40 border border-rose-200 flex flex-col justify-between space-y-4 text-xs">
            <div>
              <div className="flex items-center justify-between border-b border-rose-200 pb-2 mb-3">
                <span className="font-bold text-rose-950 uppercase tracking-wide">
                  1. Formato Tradicional Excluyente
                </span>
                <span className="text-rose-700 font-semibold">Alta Barrera</span>
              </div>

              <div className="space-y-3 text-slate-700">
                <div>
                  <strong className="text-slate-900 block mb-0.5">Materiales:</strong>
                  <p>{AUDITED_COURSE_MODULE.traditionalFormat.materials}</p>
                </div>
                <div>
                  <strong className="text-slate-900 block mb-0.5">Metodología de entrega:</strong>
                  <p>{AUDITED_COURSE_MODULE.traditionalFormat.delivery}</p>
                </div>
                <div>
                  <strong className="text-slate-900 block mb-0.5">Evaluación:</strong>
                  <p>{AUDITED_COURSE_MODULE.traditionalFormat.evaluation}</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-rose-200 space-y-2">
                <strong className="text-rose-950 block">Barreras DUA Identificadas:</strong>
                <ul className="space-y-1.5 text-slate-700">
                  {AUDITED_COURSE_MODULE.traditionalFormat.barriersIdentified.map((bar, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                      <span>{bar}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-rose-200 text-rose-800 italic text-[11px]">
              Resultado: Deserción del 45%, fatiga cognitiva y exclusión de estudiantes neurodivergentes o con baja conectividad.
            </div>
          </div>

          {/* DUA Transformed Format */}
          <div className="p-5 rounded-xl bg-emerald-50/40 border border-emerald-200 flex flex-col justify-between space-y-4 text-xs">
            <div>
              <div className="flex items-center justify-between border-b border-emerald-200 pb-2 mb-3">
                <span className="font-bold text-emerald-950 uppercase tracking-wide">
                  2. Transformación DUA con ChatGPT &amp; Coursera
                </span>
                <span className="text-emerald-700 font-semibold">Diseño Universal</span>
              </div>

              <div className="space-y-3.5 text-slate-700">
                <div className="p-3 bg-white rounded-lg border border-emerald-100">
                  <strong className="text-amber-800 block mb-1">Redes Afectivas (Compromiso):</strong>
                  <p className="leading-relaxed">
                    {AUDITED_COURSE_MODULE.duaTransformation.engagementSolution}
                  </p>
                </div>

                <div className="p-3 bg-white rounded-lg border border-emerald-100">
                  <strong className="text-sky-800 block mb-1">Redes de Reconocimiento (Representación):</strong>
                  <p className="leading-relaxed">
                    {AUDITED_COURSE_MODULE.duaTransformation.representationSolution}
                  </p>
                </div>

                <div className="p-3 bg-white rounded-lg border border-emerald-100">
                  <strong className="text-emerald-800 block mb-1">Redes Estratégicas (Acción y Expresión):</strong>
                  <p className="leading-relaxed">
                    {AUDITED_COURSE_MODULE.duaTransformation.actionExpressionSolution}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-emerald-200 text-emerald-950 space-y-1">
              <strong>Rol del Coursera Coach: </strong>
              <p className="text-slate-700 leading-relaxed">
                {AUDITED_COURSE_MODULE.duaTransformation.courseraCoachRole}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
