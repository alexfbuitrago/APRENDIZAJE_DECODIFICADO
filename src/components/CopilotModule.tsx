import React, { useState } from 'react';
import {
  FileText,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Check,
  Copy,
  ChevronRight,
  ArrowRight,
  Layers,
  Sparkles,
  Sliders,
  ExternalLink
} from 'lucide-react';
import {
  COPILOT_CASE_STUDY,
  REVIEW_DIMENSIONS,
  DATA_PRIVACY_GUIDELINES
} from '../data/copilotData';
import { ToolReproduciblePromptsSection } from './ToolReproduciblePromptsSection';

export const CopilotModule: React.FC = () => {
  const [activeVersionTab, setActiveVersionTab] = useState<'reviewed' | 'raw' | 'rubric'>('reviewed');
  const [activeDimensionId, setActiveDimensionId] = useState<string>('dim-data');
  const [copiedDraft, setCopiedDraft] = useState<boolean>(false);
  const [completedReviewChecks, setCompletedReviewChecks] = useState<string[]>([
    'dim-data',
    'dim-language',
    'dim-cognition',
    'dim-bias',
    'dim-curriculum'
  ]);

  const toggleCheck = (id: string) => {
    if (completedReviewChecks.includes(id)) {
      setCompletedReviewChecks(completedReviewChecks.filter((item) => item !== id));
    } else {
      setCompletedReviewChecks([...completedReviewChecks, id]);
    }
  };

  const handleCopyCase = () => {
    const textToCopy = `# ${COPILOT_CASE_STUDY.humanAuditedVersion.caseTitle}\n\n` +
      `**Objetivo Curricular:** ${COPILOT_CASE_STUDY.curricularGoal}\n` +
      `**Fuentes de Datos:** ${COPILOT_CASE_STUDY.sourceOfData}\n\n` +
      `## Caso de Estudio:\n${COPILOT_CASE_STUDY.humanAuditedVersion.narrative}\n\n` +
      `## Preguntas de Indagación Socrática:\n` +
      COPILOT_CASE_STUDY.humanAuditedVersion.inquiryQuestions.join('\n') +
      `\n\n## Rúbrica Analítica de Evaluación:\n` +
      COPILOT_CASE_STUDY.humanAuditedVersion.rubricCriteria.map(r =>
        `### ${r.criterion}\n- Insuficiente: ${r.descriptors.insufficient}\n- Competente: ${r.descriptors.proficient}\n- Ejemplar: ${r.descriptors.exemplary}`
      ).join('\n\n');

    navigator.clipboard.writeText(textToCopy);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <div className="space-y-12">
      {/* 1. Core Principle & Governance Banner */}
      <section className="bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-8">
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <span>Productividad Docente &amp; Ética Institucional</span>
              <span aria-hidden="true">·</span>
              <span>Gobernanza de Datos</span>
            </div>
            <a
              href="https://copilot.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0078d4] hover:bg-[#006cbd] text-white font-bold text-xs shadow-xs transition-colors shrink-0"
            >
              <span>Abrir Microsoft Copilot</span>
              <ExternalLink className="w-3.5 h-3.5 text-sky-200" />
            </a>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Microsoft Copilot en Word: Prototipado Curricular y Rutina de Revisión
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Copilot acelera la redacción de casos didácticos y rúbricas analíticas en Microsoft Word. Sin embargo,{' '}
            <strong className="text-white font-semibold">
              la productividad no significa publicar el primer borrador generado por la IA; significa acortar los ciclos de prototipado manteniendo el 100% de la responsabilidad sobre el producto final
            </strong>.
            El ahorro real de tiempo solo se materializa si existe una rutina de revisión sistemática y criterios de calidad explícitos.
          </p>

          <div className="pt-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
              <span className="font-semibold text-slate-200 block mb-1">Axioma de Responsabilidad</span>
              <span className="text-slate-400">El docente es el autor y garante ético del material pedagógico, nunca la herramienta que redactó el borrador.</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
              <span className="font-semibold text-slate-200 block mb-1">Rutina de 5 Dimensiones</span>
              <span className="text-slate-400">Verificación humana obligatoria de cifras, lenguaje, dificultad cognitiva, sesgos y coherencia con el plan de estudios.</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
              <span className="font-semibold text-slate-200 block mb-1">Privacidad Absoluta</span>
              <span className="text-slate-400">Estricta prohibición de ingresar datos sensibles de estudiantes sin consentimiento o autorización institucional.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt Engineering & Setup Reference Banner */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Metodología de Formulación &amp; Setup Técnico
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Cómo Construir el Prompt en Microsoft Copilot: Estructura R.E.P.R.O.
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            Setup: Microsoft 365 Educación (Escudo Verde "Protected")
          </span>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          Para que Copilot redacte casos sólidos en Word con datos fidedignos, el prompt debe articular: <strong>R</strong>ol docente senior, <strong>E</strong>videncia pública oficial (DANE, CEPAL), <strong>P</strong>roblema Bloom (análisis/evaluación), <strong>R</strong>úbrica analítica en tabla con descriptores observables, y <strong>O</strong>bligación de privacidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900">1. Verificar el Escudo Verde</div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Comprobar el icono "Commercial Data Protection: Active" en Word institucional para asegurar que los datos no alimenten modelos públicos.
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900">2. Referenciar Archivos OneDrive</div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Usar el botón "/" o "Referenciar archivo" en Word para enlazar el programa oficial de la asignatura o el censo oficial.
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900">3. Prototipado en 2 Pasadas</div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Pasada 1: Generación del caso y rúbrica preliminar. Pasada 2: Prompt de auditoría humana en las 5 dimensiones.
            </p>
          </div>
        </div>
      </section>

      {/* Reproducible Prompts Pipeline for Students */}
      <ToolReproduciblePromptsSection toolId="copilot" />

      {/* 2. Institutional Privacy & Data Security Semáforo */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-rose-600" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Gobernanza Institucional: ¿Qué Información se Puede y NO se Debe Introducir en Copilot?
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600">
          Los modelos comerciales de IA procesan las indicaciones según acuerdos de servicio. En entornos docentes, violar la privacidad de los estudiantes acarrea responsabilidades legales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          {DATA_PRIVACY_GUIDELINES.map((guide, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3 flex flex-col justify-between text-xs">
              <div>
                <div className="font-bold text-slate-900 mb-2 leading-snug">
                  {guide.level}
                </div>
                <ul className="space-y-2 text-slate-600">
                  {guide.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-1.5 leading-relaxed">
                      <span className="text-slate-400 shrink-0 font-bold">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t border-slate-200/80 text-[11px] font-medium text-slate-500">
                {idx === 0 ? 'Violación legal grave' : idx === 1 ? 'Requiere protocolo ético' : 'Vía de trabajo recomendada'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The 5-Dimension Human Review Routine Simulator */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              La Rutina Experta del Docente
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Las 5 Dimensiones de Revisión Humana Ineludible
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Haga clic en cada dimensión para auditar qué detectó y corrigió el docente en el caso de estudio de desigualdades.
            </p>
          </div>
          <div className="text-xs text-slate-500">
            {completedReviewChecks.length} de {REVIEW_DIMENSIONS.length} dimensiones verificadas
          </div>
        </div>

        {/* Dimension Selector Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {REVIEW_DIMENSIONS.map((dim) => {
            const isSelected = activeDimensionId === dim.id;
            const isChecked = completedReviewChecks.includes(dim.id);
            return (
              <div
                key={dim.id}
                onClick={() => setActiveDimensionId(dim.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-50/80 border-emerald-400 shadow-xs ring-1 ring-emerald-400/30'
                    : 'bg-slate-50/60 border-slate-200 hover:bg-slate-100/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono text-slate-500">{dim.id.split('-')[1].toUpperCase()}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCheck(dim.id);
                      }}
                      className="cursor-pointer p-0.5 rounded hover:bg-slate-200/60 transition-colors"
                      title={isChecked ? 'Marcar como pendiente' : 'Marcar como verificado'}
                    >
                      {isChecked ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <span className="w-3 h-3 rounded-full border border-slate-300 block" />
                      )}
                    </button>
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-snug">
                    {dim.name.split('. ')[1]}
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 mt-2">
                  {isChecked ? 'Auditado' : 'Pendiente'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Dimension Detail Card */}
        {(() => {
          const selectedDim = REVIEW_DIMENSIONS.find((d) => d.id === activeDimensionId) || REVIEW_DIMENSIONS[0];
          return (
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 pb-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-emerald-600" />
                  <span>{selectedDim.name}</span>
                </h4>
                <div className="text-xs text-slate-500 italic">
                  Pregunta guía del evaluador
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs font-medium text-slate-800">
                "{selectedDim.question}"
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-lg space-y-1.5">
                  <div className="font-bold text-amber-950 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-700" />
                    <span>Lo que Copilot pasa por alto o alucina:</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedDim.whatAiMisses}
                  </p>
                </div>

                <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-lg space-y-1.5">
                  <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Acción correctiva del docente experto:</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedDim.humanAction}
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-600">
                <strong className="text-slate-900">Aplicación en este caso concreto: </strong>
                {selectedDim.exampleFinding}
              </div>
            </div>
          );
        })()}
      </section>

      {/* 4. Concrete Example Sandbox: Word Prototyping (Raw Draft vs. Reviewed v2) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Caso Didáctico en Políticas Públicas
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Desigualdades Socioeconómicas en el Acceso al Agua: De la Idea al Aula
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Compare el borrador original generado por Copilot frente a la versión rigurosa curada y ajustada por el docente.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCase}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              {copiedDraft ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedDraft ? 'Copiado al portapapeles' : 'Copiar Caso en Word'}</span>
            </button>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveVersionTab('reviewed')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeVersionTab === 'reviewed'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            Versión Curada por el Docente (v2 Rigurosa)
          </button>
          <button
            onClick={() => setActiveVersionTab('raw')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeVersionTab === 'raw'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            Borrador Inicial de Copilot (v1 Sin Revisar)
          </button>
          <button
            onClick={() => setActiveVersionTab('rubric')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeVersionTab === 'rubric'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            Rúbrica Analítica Comparada
          </button>
        </div>

        {/* Tab 1: Reviewed v2 */}
        {activeVersionTab === 'reviewed' && (
          <div className="space-y-6">
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
              <div className="text-xs font-bold text-emerald-900 uppercase">
                Ajustes Estructurales Realizados por el Docente:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-950">
                {COPILOT_CASE_STUDY.humanAuditedVersion.adjustmentsMade.map((adj, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{adj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h4 className="text-sm font-bold text-slate-900">
                  {COPILOT_CASE_STUDY.humanAuditedVersion.caseTitle}
                </h4>
                <span className="text-xs text-slate-500 font-mono">Datos: DANE / SUI-SSPD 2023</span>
              </div>
              <div className="text-xs text-slate-700 leading-relaxed whitespace-pre-line font-serif">
                {COPILOT_CASE_STUDY.humanAuditedVersion.narrative}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Batería de Preguntas de Indagación Socrática (Nivel Bloom: Analizar / Evaluar)
              </div>
              <div className="space-y-2.5">
                {COPILOT_CASE_STUDY.humanAuditedVersion.inquiryQuestions.map((q, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-800 leading-relaxed">
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Raw Draft v1 */}
        {activeVersionTab === 'raw' && (
          <div className="space-y-6">
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>Advertencia sobre este borrador inicial:</span>
              </div>
              <p className="leading-relaxed">
                Este texto fue generado en Word en 15 segundos. Contiene municipios inventados con cifras caricaturescas (98% vs 28%), un tono melodramático propio de prensa sensacionalista y preguntas memorísticas obvias. Publicar esto directamente daña la credibilidad pedagógica.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-4 opacity-80">
              <h4 className="text-sm font-bold text-slate-900">
                {COPILOT_CASE_STUDY.rawAiDraft.caseTitle}
              </h4>
              <div className="text-xs text-slate-700 leading-relaxed whitespace-pre-line font-serif">
                {COPILOT_CASE_STUDY.rawAiDraft.narrative}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                Preguntas Débiles Generadas por Copilot (Nivel Bloom: Recordar)
              </div>
              <div className="space-y-2">
                {COPILOT_CASE_STUDY.rawAiDraft.inquiryQuestions.map((q, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 line-through">
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Rubric */}
        {activeVersionTab === 'rubric' && (
          <div className="space-y-4">
            <div className="text-xs text-slate-600">
              Rúbrica analítica calibrada para evaluar el razonamiento con evidencia empírica, no la memorización mecánica:
            </div>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
                    <th className="p-3 w-48">Criterio y Peso</th>
                    <th className="p-3 w-1/3">Nivel 1: Inicial / Insuficiente</th>
                    <th className="p-3 w-1/3">Nivel 2: Competente / Autónomo</th>
                    <th className="p-3 w-1/3 bg-emerald-50/40">Nivel 3: Ejemplar / Estratégico</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {COPILOT_CASE_STUDY.humanAuditedVersion.rubricCriteria.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900 align-top">
                        {r.criterion}
                      </td>
                      <td className="p-3 leading-relaxed align-top text-slate-600">
                        {r.descriptors.insufficient}
                      </td>
                      <td className="p-3 leading-relaxed align-top text-slate-800">
                        {r.descriptors.proficient}
                      </td>
                      <td className="p-3 leading-relaxed align-top bg-emerald-50/20 font-medium text-slate-900">
                        {r.descriptors.exemplary}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 5. Post-Implementation Learning Loop */}
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
          <div className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-600" />
            <span>Ciclo de Ajuste Pos-Implementación en Aula</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            La productividad pedagógica culmina cuando el docente recopila las respuestas reales de los estudiantes en la primera cohorte. Al notar qué preguntas causaron confusión o revelaron lagunas imprevistas en finanzas territoriales, el docente regresa a Word para ajustar los descriptores de la rúbrica y redefinir el andamiaje del siguiente ciclo.
          </p>
        </div>
      </section>
    </div>
  );
};
