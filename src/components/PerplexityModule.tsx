import React, { useState } from 'react';
import {
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  Database,
  FileCheck,
  Check,
  Info
} from 'lucide-react';
import {
  METHODOLOGY_COMPARISONS,
  FUNNEL_STAGES,
  PRIMARY_SOURCE_AUDITS
} from '../data/perplexityData';
import { ToolReproduciblePromptsSection } from './ToolReproduciblePromptsSection';

export const PerplexityModule: React.FC = () => {
  const [activeFunnelStep, setActiveFunnelStep] = useState<number>(1);
  const [activeAuditIndex, setActiveAuditIndex] = useState<number>(0);
  const [verifiedDoiIds, setVerifiedDoiIds] = useState<string[]>([]);

  const currentAudit = PRIMARY_SOURCE_AUDITS[activeAuditIndex];
  const isCurrentDoiVerified = verifiedDoiIds.includes(currentAudit.id);

  const handleVerifyDoi = (id: string) => {
    if (!verifiedDoiIds.includes(id)) {
      setVerifiedDoiIds([...verifiedDoiIds, id]);
    }
  };

  return (
    <div className="space-y-12">
      {/* 1. Fundamental Principle */}
      <section className="bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-8">
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span>Metodología de la Investigación</span>
              <span aria-hidden="true">·</span>
              <span>Descubrimiento vs. Protocolo</span>
            </div>
            <a
              href="https://www.perplexity.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#20808d] hover:bg-[#1b6d78] text-white font-bold text-xs shadow-xs transition-colors shrink-0"
            >
              <span>Abrir Perplexity Oficial</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-200" />
            </a>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Perplexity: Herramienta de Descubrimiento, No Sustituto del Protocolo Científico
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Perplexity destaca como un motor de búsqueda conversacional que indexa la web y provee referencias en tiempo real. Es sumamente útil para el <strong className="text-white font-semibold">descubrimiento exploratorio</strong> y la familiarización temática. Sin embargo,{' '}
            <strong className="text-white font-semibold">no reemplaza en ningún caso un protocolo formal de investigación, la evaluación del riesgo de sesgo, la extracción sistemática ni la síntesis metodológica</strong>.
          </p>

          <div className="pt-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
              <span className="font-semibold text-slate-200 block mb-1">Lo que Sí Hace Perplexity</span>
              <span className="text-slate-400">Recupera candidatos preliminares, sugiere palabras clave y enlaza a fuentes públicas abiertas.</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
              <span className="font-semibold text-slate-200 block mb-1">Lo que NO Puede Hacer</span>
              <span className="text-slate-400">No formula protocolos a priori, no audita bases de suscripción (Scopus/WoS) ni evalúa la validez interna del diseño experimental.</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
              <span className="font-semibold text-slate-200 block mb-1">Mandato Metodológico</span>
              <span className="text-slate-400">Obligación inexcusable de abrir el DOI oficial y cotejar los datos numéricos en el texto completo.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt Engineering & Setup Reference Banner */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
              Metodología de Formulación &amp; Setup Técnico
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Cómo Construir el Prompt en Perplexity: Estructura D.O.I.-F.I.L.T.E.R.
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            Setup: Perplexity Academic Focus + Collections
          </span>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          Para forzar a Perplexity a consultar únicamente revistas arbitradas por pares e incluir identificadores de trazabilidad, el prompt debe parametrizarse con: <strong>D</strong>escriptores MeSH/DeCS, <strong>O</strong>peradores booleanos, <strong>I</strong>ndicador de Focus Academic, <strong>F</strong>uente primaria con DOI activo, <strong>I</strong>nclusión temporal (2021-2026), <strong>L</strong>ectura crítica de muestra N, y <strong>E</strong>xclusión de blogs comerciales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900">1. Activar Focus: Academic</div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Restringe la indexación a Semantic Scholar, CrossRef, PubMed y arXiv, excluyendo páginas web comerciales y foros.
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900">2. Exigir DOI y Diseño Metodológico</div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Solicitar explícitamente: "¿Cuál fue el diseño (RCT, cuasi, cualitativo) y el tamaño muestral N real en Resultados?".
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900">3. System Prompt en Collections</div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Configurar un espacio temático con la instrucción fija: "Cita en APA 7, nunca asumas causalidad y reporta limitaciones".
            </p>
          </div>
        </div>
      </section>

      {/* Reproducible Prompts Pipeline for Students */}
      <ToolReproduciblePromptsSection toolId="perplexity" />

      {/* 2. Three-Way Taxonomy Comparison */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Diferenciación Epistemológica</div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Búsqueda Exploratoria vs. Revisión Documental vs. Revisión Sistemática
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Confundir una búsqueda rápida en Perplexity con una revisión sistemática es una falta de rigor que invalida el proceso investigativo.
          </p>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3.5 w-40">Dimensión Metodológica</th>
                <th className="p-3.5 w-60">1. Búsqueda Exploratoria</th>
                <th className="p-3.5 w-64">2. Revisión Documental / Narrativa</th>
                <th className="p-3.5 w-72 bg-indigo-50/50">3. Revisión Sistemática (PRISMA)</th>
                <th className="p-3.5 w-56">Alcance Real de Perplexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {METHODOLOGY_COMPARISONS.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900 align-top">
                    {row.dimension}
                  </td>
                  <td className="p-3.5 leading-relaxed align-top">
                    {row.exploratorySearch}
                  </td>
                  <td className="p-3.5 leading-relaxed align-top">
                    {row.documentaryReview}
                  </td>
                  <td className="p-3.5 leading-relaxed align-top bg-indigo-50/30 font-medium text-slate-900">
                    {row.systematicReview}
                  </td>
                  <td className="p-3.5 text-slate-600 align-top text-[11px] leading-relaxed">
                    {row.perplexityRole}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. The Interactive Research Evidence Funnel */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Arquitectura de Filtrado Crítico
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            El Embudo: Desde el Descubrimiento hasta la Evidencia Utilizable
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
            Una consulta amplia produce decenas de candidatos no contrastados; el filtrado aplica criterios metodológicos; la fuente primaria permite verificar el DOI y texto original; y la lectura crítica determina la calidad y pertinencia.
          </p>
        </div>

        {/* Funnel Progress Indicator */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {FUNNEL_STAGES.map((stage) => {
            const isActive = activeFunnelStep === stage.step;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveFunnelStep(stage.step)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-sky-50/80 border-sky-400 shadow-xs'
                    : 'bg-slate-50/60 border-slate-200 hover:bg-slate-100/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-slate-500">
                    ETAPA 0{stage.step}
                  </span>
                  {isActive && <span className="text-xs font-bold text-sky-700">Inspeccionando</span>}
                </div>
                <div className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                  {stage.name}
                </div>
                <div className="text-xs text-slate-500 line-clamp-1">
                  {stage.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Funnel Stage Breakdown */}
        {(() => {
          const currentStage = FUNNEL_STAGES.find((s) => s.step === activeFunnelStep) || FUNNEL_STAGES[0];
          return (
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 pb-3">
                <div>
                  <span className="text-xs font-mono font-bold text-sky-700">Paso {currentStage.step} de 4</span>
                  <h4 className="text-base font-bold text-slate-900">{currentStage.name}</h4>
                  <div className="text-xs text-slate-500">{currentStage.subtitle}</div>
                </div>
                <div className="text-xs text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                  <span className="text-slate-500">{currentStage.metrics.label}:</span>{' '}
                  <span className="font-semibold text-slate-900">{currentStage.metrics.value}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Search className="w-4 h-4 text-sky-600" />
                    <span>Rol de la IA (Perplexity)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {currentStage.roleOfAI}
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Límite Estructural de la IA</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {currentStage.limitations}
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-indigo-600" />
                    <span>Mandato Humano Ineludible</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {currentStage.humanVerificationMandate}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-indigo-50/70 border border-indigo-200/80 rounded-lg text-xs text-indigo-950 flex items-center justify-between">
                <span><strong>Artefacto metodológico resultante:</strong> {currentStage.outputArtifact}</span>
                <span className="text-indigo-700 font-semibold text-[11px]">Control de Calidad Académico</span>
              </div>
            </div>
          );
        })()}
      </section>

      {/* 4. Interactive DOI & Primary Source Verification Lab */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Laboratorio de Auditoría Empírica
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Verificación de DOI y Texto Original: Desarmando la Síntesis de IA
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Coteje lo que sintetizó Perplexity frente a lo que realmente reportó la fuente primaria con DOI oficial.
            </p>
          </div>
          <div className="text-xs text-slate-500">
            {verifiedDoiIds.length} de {PRIMARY_SOURCE_AUDITS.length} fuentes auditadas
          </div>
        </div>

        {/* Case Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {PRIMARY_SOURCE_AUDITS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveAuditIndex(idx)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer border ${
                activeAuditIndex === idx
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Caso 0{idx + 1}: {item.journal.split('(')[0].trim()}
            </button>
          ))}
        </div>

        {/* Side-by-Side Audit Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left: What Perplexity Claimed */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-2 mb-3">
                <span className="font-bold text-slate-700">1. Afirmación Sintética en Perplexity</span>
                <span className="text-slate-500">Sinopsis de IA</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                {currentAudit.title}
              </h4>
              <div className="text-xs text-slate-500 mb-3">
                Publicado en: {currentAudit.journal}
              </div>
              <div className="p-3.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed italic">
                {currentAudit.perplexitySummary}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-500">DOI: {currentAudit.doi}</span>
              <button
                onClick={() => handleVerifyDoi(currentAudit.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors cursor-pointer"
              >
                {isCurrentDoiVerified ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <ExternalLink className="w-3.5 h-3.5" />}
                <span>{isCurrentDoiVerified ? 'DOI Auditado' : 'Abrir y Cotejar DOI'}</span>
              </button>
            </div>
          </div>

          {/* Right: What the Primary Document Actually Discloses */}
          <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs text-amber-900 border-b border-amber-200 pb-2 mb-3">
                <span className="font-bold text-amber-950">2. Realidad Empírica en Fuente Primaria</span>
                <span className="font-mono text-[11px] text-amber-700">Texto Completo</span>
              </div>

              <div className="p-3.5 bg-white rounded-lg border border-amber-200 text-xs text-slate-800 leading-relaxed">
                <strong className="block text-slate-900 mb-1">Hallazgo real en el paper:</strong>
                {currentAudit.primarySourceFinding}
              </div>

              <div className="mt-3 p-3 bg-amber-100/70 rounded-lg text-xs text-amber-950 space-y-1">
                <div className="font-bold">Diagnóstico Crítico:</div>
                <p className="leading-relaxed">{currentAudit.verdict}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-amber-200 text-xs text-slate-600">
              <strong className="text-slate-900">Lección investigativa: </strong>
              {currentAudit.criticalAnalysis}
            </div>
          </div>
        </div>

        {/* 5. Systematic Review Mandatory Protocol Checklist */}
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-indigo-600" />
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              Checklist de una Verdadera Revisión Sistemática (Ineludible para Investigadores)
            </h4>
          </div>
          <p className="text-xs text-slate-600">
            Si su trabajo pretende valor probatorio sistemático, verifique que estos 6 componentes existan fuera de Perplexity:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs pt-1">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <span className="font-semibold text-slate-900 block">1. Protocolo Registrado</span>
              <span className="text-slate-500">Inscrito previamente en PROSPERO, OSF o Cochrane sin modificaciones ad-hoc.</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <span className="font-semibold text-slate-900 block">2. Bases Formales</span>
              <span className="text-slate-500">Consulta sistemática documentada en Scopus, Web of Science, PubMed, ERIC o SciELO.</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <span className="font-semibold text-slate-900 block">3. Ecuaciones Booleanas</span>
              <span className="text-slate-500">Sintaxis auditable y reproducible con descriptores MeSH/DeCS y operadores AND/OR.</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <span className="font-semibold text-slate-900 block">4. Criterios PICOS</span>
              <span className="text-slate-500">Población, Intervención, Comparador, Resultado (Outcomes) y Diseños definidos a priori.</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <span className="font-semibold text-slate-900 block">5. Evaluación del Sesgo</span>
              <span className="text-slate-500">Herramientas estandarizadas (RoB-2, CASP, Newcastle-Ottawa) aplicadas a doble ciego.</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <span className="font-semibold text-slate-900 block">6. Síntesis Formal</span>
              <span className="text-slate-500">Diagrama de flujo PRISMA 2020 con registro transparente de motivos de exclusión.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
