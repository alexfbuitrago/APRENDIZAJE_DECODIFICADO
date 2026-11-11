import React, { useState } from 'react';
import {
  FileText,
  Quote,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Plus,
  Trash2,
  Copy,
  Check,
  ChevronRight,
  ExternalLink,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import {
  AUTHORIZED_DOCUMENTS,
  COMPARATIVE_QUERIES,
  INITIAL_ANNOTATED_MATRIX
} from '../data/notebookData';
import { SourceDocument, AnnotatedMatrixRow } from '../types';
import { ToolReproduciblePromptsSection } from './ToolReproduciblePromptsSection';

export const NotebookLMModule: React.FC = () => {
  const [selectedDocs, setSelectedDocs] = useState<string[]>(['unesco-2024', 'ocde-2023', 'cepal-2024']);
  const [activeQueryIndex, setActiveQueryIndex] = useState<number>(0);
  const [activeCitationNumber, setActiveCitationNumber] = useState<number | null>(1);
  const [inspectingDocId, setInspectingDocId] = useState<string | null>(null);
  const [matrixRows, setMatrixRows] = useState<AnnotatedMatrixRow[]>(INITIAL_ANNOTATED_MATRIX);
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false);
  const [showNewRowForm, setShowNewRowForm] = useState<boolean>(false);

  // New row form state
  const [newThematicAxis, setNewThematicAxis] = useState('');
  const [newAiSynthesis, setNewAiSynthesis] = useState('');
  const [newCitationRef, setNewCitationRef] = useState('');
  const [newFidelityStatus, setNewFidelityStatus] = useState<AnnotatedMatrixRow['fidelityStatus']>('parcial');
  const [newCorrection, setNewCorrection] = useState('');
  const [newEpistemicNote, setNewEpistemicNote] = useState('');

  const currentQuery = COMPARATIVE_QUERIES[activeQueryIndex];

  const activeCitation = currentQuery.citations.find(
    (c) => c.number === activeCitationNumber
  ) || currentQuery.citations[0];

  const citationDoc = AUTHORIZED_DOCUMENTS.find(
    (d) => d.id === activeCitation.docId
  );

  const citationExcerpt = citationDoc?.excerpts.find(
    (e) => e.id === activeCitation.excerptId
  );

  const toggleDocSelection = (docId: string) => {
    if (selectedDocs.includes(docId)) {
      if (selectedDocs.length > 1) {
        setSelectedDocs(selectedDocs.filter((id) => id !== docId));
      }
    } else {
      setSelectedDocs([...selectedDocs, docId]);
    }
  };

  const handleAddMatrixRow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newThematicAxis || !newAiSynthesis) return;

    const newRow: AnnotatedMatrixRow = {
      id: `custom-row-${Date.now()}`,
      thematicAxis: newThematicAxis,
      aiSynthesis: newAiSynthesis,
      citationRef: newCitationRef || 'Referencia cotejada',
      fidelityStatus: newFidelityStatus,
      studentCorrection: newCorrection || 'Revisión y contraste manual por el estudiante.',
      epistemicNote: newEpistemicNote || 'Verificado en fuente primaria.',
      author: 'Estudiante / Investigador'
    };

    setMatrixRows([...matrixRows, newRow]);
    setNewThematicAxis('');
    setNewAiSynthesis('');
    setNewCitationRef('');
    setNewCorrection('');
    setNewEpistemicNote('');
    setShowNewRowForm(false);
  };

  const handleDeleteRow = (id: string) => {
    setMatrixRows(matrixRows.filter((r) => r.id !== id));
  };

  const handleCopyMatrixMarkdown = () => {
    let md = `# Matriz Crítica Comentada: Auditoría de Síntesis en NotebookLM\n\n`;
    md += `| Eje Temático | Afirmación de la IA | Cita de Respaldo | Fidelidad | Corrección / Ampliación Crítica | Nota Epistemológica |\n`;
    md += `|---|---|---|---|---|---|\n`;
    matrixRows.forEach((r) => {
      md += `| ${r.thematicAxis} | ${r.aiSynthesis} | ${r.citationRef} | ${r.fidelityStatus.toUpperCase()} | ${r.studentCorrection} | ${r.epistemicNote} |\n`;
    });

    navigator.clipboard.writeText(md);
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 2500);
  };

  return (
    <div className="space-y-12">
      {/* 1. Fundamental Principle Box */}
      <section className="bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-8">
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
              <span>Epistemología del Corpus Cerrado</span>
              <span aria-hidden="true">·</span>
              <span>Grounding Estricto</span>
            </div>
            <a
              href="https://notebooklm.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition-colors shrink-0"
            >
              <span>Abrir NotebookLM Oficial</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-200" />
            </a>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            NotebookLM como Entorno de Diálogo con Corpus, No Sustituto de Lectura
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            NotebookLM restringe su generación estrictamente a las fuentes que el usuario carga (grounding cerrado), reduciendo drásticamente las alucinaciones de la web abierta. Sin embargo,{' '}
            <strong className="text-white font-semibold">delegar la lectura a una síntesis algorítmica empobrece el juicio crítico</strong>. El aprendizaje real no ocurre cuando la IA resume tres libros, sino cuando el estudiante dialoga con ese resumen, comprueba cada cita contra el texto original, detecta acuerdos empíricos, tensiones no resueltas y vacíos de conocimiento.
          </p>

          <div className="pt-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
              <span className="font-semibold text-slate-200 block mb-1">Riesgo: Ilusión de Comprensión</span>
              <span className="text-slate-400">Creer que se comprende un debate académico por haber leído un resumen sintético de 200 palabras.</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
              <span className="font-semibold text-slate-200 block mb-1">Rol Correcto: Sparring Dialógico</span>
              <span className="text-slate-400">Usar la herramienta para interpelar el texto, formular preguntas comparativas y localizar fragmentos clave.</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
              <span className="font-semibold text-slate-200 block mb-1">Evidencia Pedagógica: Matriz</span>
              <span className="text-slate-400">El producto evaluable es la matriz donde el estudiante corrige, califica y expande los hallazgos.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt Engineering & Setup Reference Banner */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
              Metodología de Formulación &amp; Setup Técnico
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Cómo Construir el Prompt en NotebookLM: Fórmula C.O.R.P.U.S.
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            Setup: Google Workspace for Education
          </span>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          Para evitar que NotebookLM devuelva un resumen plano, la instrucción debe desglosarse en 5 bloques: <strong>C</strong>orpus delimitado, <strong>O</strong>bjetivo analítico, <strong>R</strong>elación tripartita (acuerdo, tensión, vacío), <strong>P</strong>rueba textual obligatoria con número de cita, y <strong>U</strong>mbral de ignorancia (declarar "dato no disponible" en vez de inventar).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900">1. Delimitar el Corpus Activo</div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Marcar solo las 2 o 3 fuentes específicas en el panel izquierdo para evitar interferencia de notas desordenadas.
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900">2. Exigir Tensión no Resuelta</div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Instruir al modelo a no armonizar falsamente datos porcentuales opuestos entre autores.
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900">3. Control de Privacidad</div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              En cuentas educativas Workspace, las fuentes no entrenan modelos comerciales de Google.
            </p>
          </div>
        </div>
      </section>

      {/* Reproducible Prompts Pipeline for Students */}
      <ToolReproduciblePromptsSection toolId="notebooklm" />

      {/* 2. Interactive Demonstration Workbench */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Demostración Guiada</div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              01. Carga de Corpus Autorizado y Pregunta Comparativa
            </h3>
          </div>
          <div className="text-xs text-slate-500">
            {selectedDocs.length} de {AUTHORIZED_DOCUMENTS.length} fuentes activas en el corpus
          </div>
        </div>

        {/* Corpus Documents Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {AUTHORIZED_DOCUMENTS.map((doc) => {
            const isSelected = selectedDocs.includes(doc.id);
            return (
              <div
                key={doc.id}
                className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-indigo-300 shadow-xs'
                    : 'bg-slate-50/70 border-slate-200 opacity-60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-indigo-700">
                      {doc.institution} ({doc.year})
                    </span>
                    <button
                      onClick={() => toggleDocSelection(doc.id)}
                      className="text-xs font-medium text-slate-500 hover:text-slate-900 cursor-pointer"
                    >
                      {isSelected ? 'Desactivar' : 'Activar'}
                    </button>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug mb-1.5">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                    {doc.fullTextSummary}
                  </p>
                  <div className="text-xs text-slate-500">
                    <span>{doc.authors}</span>
                    <span className="mx-1.5" aria-hidden="true">·</span>
                    <span>DOI: {doc.doiOrUrl}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{doc.excerpts.length} fragmentos cotejables</span>
                  <button
                    onClick={() => setInspectingDocId(inspectingDocId === doc.id ? null : doc.id)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{inspectingDocId === doc.id ? 'Cerrar Visor' : 'Inspeccionar'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Document Excerpt Inspector Drawer if opened */}
        {inspectingDocId && (
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            {(() => {
              const doc = AUTHORIZED_DOCUMENTS.find((d) => d.id === inspectingDocId);
              if (!doc) return null;
              return (
                <>
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Fragmentos Autorizados de {doc.institution} ({doc.year})
                    </div>
                    <button
                      onClick={() => setInspectingDocId(null)}
                      className="text-xs text-slate-500 hover:text-slate-900 cursor-pointer"
                    >
                      Ocultar
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {doc.excerpts.map((exc) => (
                      <div key={exc.id} className="p-3 bg-white rounded-lg border border-slate-200 text-xs">
                        <div className="flex items-center justify-between text-slate-500 font-medium mb-1">
                          <span>{exc.section}</span>
                          <span className="font-mono">Página {exc.page}</span>
                        </div>
                        <p className="text-slate-700 italic leading-relaxed">
                          "{exc.text}"
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        )}

        {/* 3. The Comparative Inquiry & Citing Engine */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Pregunta Comparativa Formulada al Corpus
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900">
              "{currentQuery.question}"
            </div>
            <div className="mt-1 text-xs text-slate-500">
              Foco analítico: {currentQuery.comparativeFocus}
            </div>
          </div>

          {/* AI Synthesis with Clickable Citation Badges */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Synthetic Response */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-2">
                <span className="font-semibold text-slate-700">Respuesta Generada por NotebookLM</span>
                <span>Haga clic en las citas [1], [2], [3] para auditar la fuente</span>
              </div>

              <div className="text-sm text-slate-700 leading-relaxed space-y-3 whitespace-pre-line font-sans">
                {/* Parse the response and make [1], [2], [3] clickable */}
                {currentQuery.aiResponse.split('\n\n').map((paragraph, pIdx) => {
                  // Replace [1], [2], etc. with buttons
                  const parts = paragraph.split(/(\[\d+\])/g);
                  return (
                    <p key={pIdx}>
                      {parts.map((part, partIdx) => {
                        const match = part.match(/\[(\d+)\]/);
                        if (match) {
                          const num = parseInt(match[1], 10);
                          const isActive = activeCitationNumber === num;
                          return (
                            <button
                              key={partIdx}
                              onClick={() => setActiveCitationNumber(num)}
                              title={`Abrir cita [${num}] en el documento original`}
                              className={`inline-flex items-center justify-center font-mono font-semibold text-xs px-1.5 py-0.5 mx-0.5 rounded cursor-pointer transition-colors ${
                                isActive
                                  ? 'bg-indigo-600 text-white shadow-xs'
                                  : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
                              }`}
                            >
                              [{num}]
                            </button>
                          );
                        }
                        return <span key={partIdx}>{part}</span>;
                      })}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Grounded Citation Inspector */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div className="flex items-center gap-1.5">
                  <Quote className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Visor de Cita [ {activeCitation.number} ]
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  Página {citationExcerpt?.page || 'S/N'}
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-900">
                  {citationDoc?.title}
                </div>
                <div className="text-xs text-slate-500">
                  {citationDoc?.institution} ({citationDoc?.year}) · {citationExcerpt?.section}
                </div>
              </div>

              <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-lg text-xs leading-relaxed text-amber-950 font-serif">
                "{citationExcerpt?.text}"
              </div>

              <div className="pt-2 border-t border-slate-200/80 space-y-1">
                <div className="text-xs font-semibold text-slate-700">Por qué respalda la afirmación:</div>
                <p className="text-xs text-slate-600 leading-normal">
                  {activeCitation.relevance}
                </p>
              </div>

              <div className="text-xs text-slate-500 flex items-center justify-between pt-1">
                <span>DOI oficial: {citationDoc?.doiOrUrl}</span>
                <span className="text-emerald-700 font-medium">Cotejo verificado</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Guided Critical Analysis: Agreement, Tension, Void */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-5">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Actividad Crítica Guiada
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Identificación de un Acuerdo, una Tensión y un Vacío
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              La evidencia de comprensión lectora profunda exige al estudiante no aceptar la síntesis pasivamente, sino estructurar las fuerzas conceptuales en juego.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Agreement */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                  A
                </div>
                <span className="text-sm font-bold text-slate-900">1. Un Acuerdo</span>
              </div>
              <div className="text-xs font-semibold text-emerald-700">
                {currentQuery.criticalAnalysis.agreement.claim}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentQuery.criticalAnalysis.agreement.sourceSupport}
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 italic">
                {currentQuery.criticalAnalysis.agreement.reflection}
              </div>
            </div>

            {/* Tension */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0">
                  T
                </div>
                <span className="text-sm font-bold text-slate-900">2. Una Tensión</span>
              </div>
              <div className="text-xs font-semibold text-amber-800">
                {currentQuery.criticalAnalysis.tension.claim}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentQuery.criticalAnalysis.tension.divergence}
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 italic">
                {currentQuery.criticalAnalysis.tension.reflection}
              </div>
            </div>

            {/* Void */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs shrink-0">
                  V
                </div>
                <span className="text-sm font-bold text-slate-900">3. Un Vacío</span>
              </div>
              <div className="text-xs font-semibold text-rose-700">
                {currentQuery.criticalAnalysis.void.claim}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentQuery.criticalAnalysis.void.omittedAspect}
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 italic">
                {currentQuery.criticalAnalysis.void.reflection}
              </div>
            </div>
          </div>
        </div>

        {/* 5. Annotated Matrix: The Final Learning Evidence */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Evidencia de Aprendizaje Evaluada
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Matriz Comentada: El Estudiante Corrige y Amplía la Síntesis
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Instrumento procesual donde el alumno audita las afirmaciones de NotebookLM, clasifica su fidelidad y añade correcciones fundamentadas.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowNewRowForm(!showNewRowForm)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Añadir Fila de Auditoría</span>
              </button>
              <button
                onClick={handleCopyMatrixMarkdown}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                {copiedStatus ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedStatus ? 'Copiada en Markdown' : 'Exportar Matriz'}</span>
              </button>
            </div>
          </div>

          {/* New row form if expanded */}
          {showNewRowForm && (
            <form onSubmit={handleAddMatrixRow} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="text-xs font-bold text-slate-700 uppercase">Nueva Fila de Auditoría</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Eje Temático (ej. Evaluación Formativa)"
                  value={newThematicAxis}
                  onChange={(e) => setNewThematicAxis(e.target.value)}
                  className="px-3 py-2 text-xs bg-white rounded-lg border border-slate-300 focus:outline-indigo-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Referencia de Cita (ej. UNESCO p.32 [4])"
                  value={newCitationRef}
                  onChange={(e) => setNewCitationRef(e.target.value)}
                  className="px-3 py-2 text-xs bg-white rounded-lg border border-slate-300 focus:outline-indigo-500"
                />
              </div>
              <textarea
                placeholder="Afirmación generada por la IA..."
                value={newAiSynthesis}
                onChange={(e) => setNewAiSynthesis(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300 focus:outline-indigo-500"
                rows={2}
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Veredicto de Fidelidad:</label>
                  <select
                    value={newFidelityStatus}
                    onChange={(e) => setNewFidelityStatus(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300 focus:outline-indigo-500"
                  >
                    <option value="fiel">Fiel al texto original</option>
                    <option value="parcial">Parcial / Incompleto</option>
                    <option value="sesgada">Sesgada / Unilateral</option>
                    <option value="descontextualizada">Descontextualizada</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-600 mb-1">Corrección o Ampliación del Estudiante:</label>
                  <input
                    type="text"
                    placeholder="El texto en realidad señala que..."
                    value={newCorrection}
                    onChange={(e) => setNewCorrection(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewRowForm(false)}
                  className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-800 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg cursor-pointer"
                >
                  Guardar en Matriz
                </button>
              </div>
            </form>
          )}

          {/* Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                  <th className="p-3 w-36">Eje Temático</th>
                  <th className="p-3 w-56">Afirmación de la IA</th>
                  <th className="p-3 w-32">Cita / Fuente</th>
                  <th className="p-3 w-28">Fidelidad</th>
                  <th className="p-3">Corrección y Ampliación Crítica del Estudiante</th>
                  <th className="p-3 w-12 text-center">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {matrixRows.map((row) => {
                  let statusBadgeClass = 'text-emerald-700 font-semibold';
                  let statusLabel = 'Fiel';

                  if (row.fidelityStatus === 'parcial') {
                    statusBadgeClass = 'text-amber-700 font-semibold';
                    statusLabel = 'Parcial';
                  } else if (row.fidelityStatus === 'sesgada') {
                    statusBadgeClass = 'text-rose-700 font-semibold';
                    statusLabel = 'Sesgada';
                  } else if (row.fidelityStatus === 'descontextualizada') {
                    statusBadgeClass = 'text-purple-700 font-semibold';
                    statusLabel = 'Descontextualizada';
                  }

                  return (
                    <tr key={row.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-3 font-semibold text-slate-900 align-top">
                        {row.thematicAxis}
                      </td>
                      <td className="p-3 leading-relaxed text-slate-700 align-top">
                        "{row.aiSynthesis}"
                      </td>
                      <td className="p-3 text-slate-500 font-mono align-top">
                        {row.citationRef}
                      </td>
                      <td className="p-3 align-top whitespace-nowrap">
                        <span className={statusBadgeClass}>{statusLabel}</span>
                      </td>
                      <td className="p-3 space-y-1 align-top">
                        <div className="text-slate-900 font-medium leading-relaxed">
                          {row.studentCorrection}
                        </div>
                        <div className="text-slate-500 text-[11px] italic">
                          Nota epistémica: {row.epistemicNote}
                        </div>
                      </td>
                      <td className="p-3 text-center align-top">
                        <button
                          onClick={() => handleDeleteRow(row.id)}
                          title="Eliminar fila"
                          className="text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
