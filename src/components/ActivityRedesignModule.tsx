import React, { useState } from 'react';
import {
  FileText,
  Download,
  Copy,
  Check,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  RefreshCw,
  LayoutTemplate,
  Monitor,
  PenTool,
  GraduationCap,
  Layers,
  ArrowRight,
  UserCheck,
  Cpu,
  BookOpen
} from 'lucide-react';
import { AugmentedActivityDesign } from '../types';
import {
  OBSERVABLE_VERBS,
  PRESET_ACTIVITIES,
  EMPTY_ACTIVITY_DESIGN,
  EVIDENCE_PATTERNS,
  downloadActivityAsWord
} from '../data/activityRedesignData';

export const ActivityRedesignModule: React.FC = () => {
  const [design, setDesign] = useState<AugmentedActivityDesign>(PRESET_ACTIVITIES[0]);
  const [activePresetId, setActivePresetId] = useState<string>(PRESET_ACTIVITIES[0].id);
  const [activeTab, setActiveTab] = useState<'editor' | 'slide_preview' | 'stress_test' | 'audit'>('editor');
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false);
  const [showVerbGuide, setShowVerbGuide] = useState<boolean>(false);

  // Field update handler
  const handleFieldChange = (field: keyof AugmentedActivityDesign, value: string) => {
    setDesign((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSelectPreset = (preset: AugmentedActivityDesign) => {
    setDesign({ ...preset });
    setActivePresetId(preset.id);
  };

  const handleResetToBlank = () => {
    setDesign({ ...EMPTY_ACTIVITY_DESIGN });
    setActivePresetId('blank');
  };

  const handleCopyMarkdown = () => {
    const md = `# ${design.activityTitle}
**Cátedra:** ${design.courseName} | **Nivel:** ${design.academicLevel}
**Institución:** ${design.institution} | **Docente:** ${design.authorName}

---

## 1. LAS CUATRO PREGUNTAS GUÍA
- **¿Qué capacidad importa?** [Verbo: ${design.observableVerb}] ${design.capacityTarget}
- **¿Cuál es el reto?** ${design.challengeSummary}
- **¿Cuál es el papel de la IA?** ${design.aiRoleBoundary}
- **¿Cuál es la evidencia?** ${design.evidenceSummary}

---

## 2. LA ANATOMÍA DE LAS SEIS DECISIONES
1. **El Reto:** ${design.decisionChallenge}
2. **El Rol:** ${design.decisionRole}
3. **Las Fuentes:** ${design.decisionSources}
4. **La Interacción con IA:** ${design.decisionAiInteraction}
5. **El Producto:** ${design.decisionProduct}
6. **La Evidencia:** ${design.decisionEvidence}

---

## 3. LA PRUEBA DE RESISTENCIA (STRESS TEST)
- **Veredicto:** ${design.stressTestVerdict === 'pass' ? 'APROBADA (Resistente)' : 'VULNERABLE'}
- **¿Sigue siendo valiosa si la IA falla o sesga?** ${design.stressTestExplanation}
- **Acción del estudiante:** ${design.studentCorrectionAction}

---

## 4. AUDITORÍA ÉTICA Y CURRICULAR
- **Coherencia Capacidad - Evidencia:** ${design.coherenceAnalysis}
- **Privacidad y Datos:** ${design.privacyMeasures}
- **Accesibilidad DUA:** ${design.accessibilityMeasures}
- **Mitigación de Sesgos:** ${design.biasMitigationMeasures}
`;
    navigator.clipboard.writeText(md);
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 2500);
  };

  return (
    <div className="space-y-10">
      {/* 1. Header Banner: Institutional & Pedagogical Framing */}
      <section className="bg-gradient-to-r from-[#003828] via-[#004b36] to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#c59b27]/30">
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#c59b27]">
            <span className="px-2.5 py-0.5 rounded bg-[#003828] border border-[#c59b27]/40 text-[#c59b27]">
              Módulo 01 · Taller de Diseño Curricular
            </span>
            <span aria-hidden="true">·</span>
            <span>Educación Básica y Media</span>
            <span aria-hidden="true">·</span>
            <span>Experiencia de Aprendizaje Aumentada</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
            Rediseña una Actividad Real con Inteligencia Artificial
          </h2>

          {/* Principle Callout */}
          <div className="p-4 rounded-xl bg-black/25 border-l-4 border-[#c59b27] text-white space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#c59b27] font-bold block">
              Principio Didáctico Transferible
            </span>
            <p className="text-sm font-semibold text-emerald-100 leading-snug">
              &ldquo;El estudiante debe hacer algo intelectualmente significativo con la salida de la IA. No basta con recibirla. La evidencia cambia según el patrón: una minuta razonada, un registro del error o una teoría de cambio.&rdquo;
            </p>
          </div>

          <p className="text-sm text-emerald-100/90 leading-relaxed max-w-3xl">
            A través de <strong className="text-[#c59b27]">cuatro preguntas pedagógicas</strong> y <strong className="text-white font-semibold">seis decisiones curriculares</strong>, aprenda a blindar la actividad con una <strong className="text-[#c59b27]">prueba de resistencia</strong> que garantiza que el aprendizaje permanezca aun cuando la IA falle, alucine o sesgue.
          </p>
        </div>
      </section>

      {/* 2. Interactive Evidence Patterns for Basic & Secondary Education */}
      <section className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
          <div>
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider">
              Patrones de Evidencia Pedagógica en Educación Básica y Media
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
              ¿Qué hace el estudiante con la salida de la IA según el área?
            </h3>
          </div>
          <span className="text-xs text-slate-400">
            Haga clic en un patrón para cargar su caso de aplicación
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {EVIDENCE_PATTERNS.map((p, idx) => {
            const correspondingPreset = PRESET_ACTIVITIES[idx] || PRESET_ACTIVITIES[0];
            const isSelected = activePresetId === correspondingPreset.id;
            return (
              <div
                key={p.id}
                onClick={() => handleSelectPreset(correspondingPreset)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-slate-800/95 border-[#c59b27] ring-2 ring-[#c59b27]/40 shadow-sm'
                    : 'bg-slate-800/50 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-[#c59b27] uppercase tracking-wider">
                    {p.area}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#c59b27] animate-pulse" />
                  )}
                </div>
                <div className="text-xs font-bold text-white mb-1 leading-snug">
                  {p.name}
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed mb-2.5">
                  {p.description}
                </p>
                <div className="pt-2 border-t border-slate-700/60 text-[10px] font-medium text-emerald-400">
                  <span className="text-slate-400 block mb-0.5">Evidencia clave:</span>
                  <span>{p.evaluableArtifact.split(':')[0]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Presets Selector & Actions Bar */}
      <section className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Casos Preconfigurados para Básica y Media
            </div>
            <p className="text-xs text-slate-600">
              Seleccione un ejemplo escolar completo o empiece a redactar en blanco para su grado o materia:
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleSelectPreset(PRESET_ACTIVITIES[0])}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer border ${
                activePresetId === PRESET_ACTIVITIES[0].id
                  ? 'bg-[#004b36] text-white border-[#004b36] shadow-xs font-bold'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              🏛️ Historia: Gabinete (Minuta)
            </button>

            <button
              onClick={() => handleSelectPreset(PRESET_ACTIVITIES[1])}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer border ${
                activePresetId === PRESET_ACTIVITIES[1].id
                  ? 'bg-[#004b36] text-white border-[#004b36] shadow-xs font-bold'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              🔬 Ciencias: Error vs. Datos
            </button>

            <button
              onClick={() => handleSelectPreset(PRESET_ACTIVITIES[2])}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer border ${
                activePresetId === PRESET_ACTIVITIES[2].id
                  ? 'bg-[#004b36] text-white border-[#004b36] shadow-xs font-bold'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              🌱 Ciudadanía: Teoría de Cambio
            </button>

            <button
              onClick={() => handleSelectPreset(PRESET_ACTIVITIES[3])}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer border ${
                activePresetId === PRESET_ACTIVITIES[3].id
                  ? 'bg-[#004b36] text-white border-[#004b36] shadow-xs font-bold'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              📊 Estadística: Contexto Próximo
            </button>

            <button
              onClick={handleResetToBlank}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer border flex items-center gap-1.5 ${
                activePresetId === 'blank'
                  ? 'bg-amber-600 text-white border-amber-600 font-bold'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <RefreshCw className="w-3 h-3" />
              <span>Redactar en Blanco</span>
            </button>
          </div>
        </div>

        {/* Global Action Bar */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Vista de trabajo:</span>
            <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50 text-xs font-medium">
              <button
                onClick={() => setActiveTab('editor')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'editor'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <PenTool className="w-3.5 h-3.5 text-[#004b36]" />
                <span>Editor de Rediseño</span>
              </button>
              <button
                onClick={() => setActiveTab('slide_preview')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'slide_preview'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Monitor className="w-3.5 h-3.5 text-indigo-600" />
                <span>Diapositiva Prototipo</span>
              </button>
              <button
                onClick={() => setActiveTab('stress_test')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'stress_test'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Prueba de Resistencia</span>
              </button>
              <button
                onClick={() => setActiveTab('audit')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'audit'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>Auditoría &amp; Ética</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copiedStatus ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedStatus ? 'Copiado' : 'Copiar Markdown'}</span>
            </button>

            <button
              onClick={() => downloadActivityAsWord(design)}
              className="px-4 py-1.5 text-xs font-bold rounded-lg bg-[#004b36] hover:bg-[#003828] text-white shadow-sm transition-all flex items-center gap-2 cursor-pointer border border-[#c59b27]/40"
            >
              <Download className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Descargar en Word (.doc)</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Main Workspace depending on activeTab */}
      {activeTab === 'editor' && (
        <div className="space-y-8">
          {/* Section 1: General Info & The 4 Questions */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-semibold text-[#004b36] uppercase tracking-wider">
                Fase 1 · Delimitación Conceptual
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Las Cuatro Preguntas Guía del Rediseño
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Responda a estas cuatro preguntas para transformar una consigna pasiva en un reto de pensamiento crítico.
              </p>
            </div>

            {/* Basic Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Título de la Actividad:
                </label>
                <input
                  type="text"
                  value={design.activityTitle}
                  onChange={(e) => handleFieldChange('activityTitle', e.target.value)}
                  className="w-full text-xs font-medium p-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004b36]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Asignatura / Cátedra:
                </label>
                <input
                  type="text"
                  value={design.courseName}
                  onChange={(e) => handleFieldChange('courseName', e.target.value)}
                  className="w-full text-xs font-medium p-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004b36]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nivel Académico:
                </label>
                <input
                  type="text"
                  value={design.academicLevel}
                  onChange={(e) => handleFieldChange('academicLevel', e.target.value)}
                  className="w-full text-xs font-medium p-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004b36]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Docente / Diseñador:
                </label>
                <input
                  type="text"
                  value={design.authorName}
                  onChange={(e) => handleFieldChange('authorName', e.target.value)}
                  className="w-full text-xs font-medium p-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004b36]"
                />
              </div>
            </div>

            {/* The 4 Questions Inputs */}
            <div className="space-y-5">
              {/* Question 1: Capacidad Observable */}
              <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#004b36] text-white flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <label className="text-sm font-bold text-slate-900">
                      ¿Qué capacidad importa? (Verbo Observable)
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowVerbGuide(!showVerbGuide)}
                    className="text-xs font-semibold text-[#004b36] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{showVerbGuide ? 'Ocultar banco de verbos' : 'Ver banco de verbos observables'}</span>
                  </button>
                </div>

                {showVerbGuide && (
                  <div className="p-3 bg-white rounded-lg border border-emerald-200 text-xs grid grid-cols-2 sm:grid-cols-4 gap-2 my-2">
                    {OBSERVABLE_VERBS.map((v) => (
                      <button
                        key={v.verb}
                        type="button"
                        onClick={() => {
                          handleFieldChange('observableVerb', v.verb);
                          if (!design.capacityTarget.includes(v.verb)) {
                            handleFieldChange('capacityTarget', `${v.verb} ${design.capacityTarget.replace(/^[A-Z][a-z]+ /, '')}`);
                          }
                        }}
                        className="p-2 text-left rounded border border-slate-200 hover:border-[#004b36] hover:bg-emerald-50 transition-colors cursor-pointer"
                      >
                        <span className="font-bold text-[#004b36] block">{v.verb}</span>
                        <span className="text-[10px] text-slate-500">{v.category}</span>
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex gap-2">
                  <div className="w-36 shrink-0">
                    <input
                      type="text"
                      placeholder="Verbo"
                      value={design.observableVerb}
                      onChange={(e) => handleFieldChange('observableVerb', e.target.value)}
                      className="w-full text-xs font-bold p-2.5 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#004b36]"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Describa la capacidad concreta que el estudiante demostrará..."
                      value={design.capacityTarget}
                      onChange={(e) => handleFieldChange('capacityTarget', e.target.value)}
                      className="w-full text-xs font-medium p-2.5 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#004b36]"
                    />
                  </div>
                </div>
                <p className="text-[11px] text-slate-500">
                  Evite términos difusos como &ldquo;conocer&rdquo; o &ldquo;aprender&rdquo;. Use verbos observables: auditar, contrastar, dictaminar, diseñar, refutar o modelar.
                </p>
              </div>

              {/* Question 2: Reto */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#004b36] text-white flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  <label className="text-sm font-bold text-slate-900">
                    ¿Cuál es el reto que hace visible esa capacidad en una situación concreta?
                  </label>
                </div>
                <textarea
                  rows={2}
                  value={design.challengeSummary}
                  onChange={(e) => handleFieldChange('challengeSummary', e.target.value)}
                  className="w-full text-xs font-medium p-2.5 bg-slate-50/50 rounded-lg border border-slate-300 focus:bg-white focus:ring-2 focus:ring-[#004b36]"
                  placeholder="Sitúe al estudiante ante una situación profesional, dilema público o problema real no resuelto..."
                />
                <p className="text-[11px] text-slate-500">
                  El reto define el problema que moviliza el aprendizaje y sitúa la urgencia epistémica de la tarea.
                </p>
              </div>

              {/* Question 3: Papel de la IA */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#004b36] text-white flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  <label className="text-sm font-bold text-slate-900">
                    ¿Cuál es el papel de la IA? (Explorar, simular, objetar o retroalimentar)
                  </label>
                </div>
                <textarea
                  rows={2}
                  value={design.aiRoleBoundary}
                  onChange={(e) => handleFieldChange('aiRoleBoundary', e.target.value)}
                  className="w-full text-xs font-medium p-2.5 bg-slate-50/50 rounded-lg border border-slate-300 focus:bg-white focus:ring-2 focus:ring-[#004b36]"
                  placeholder="Defina qué hace la IA y estipule qué decisión central queda reservada exclusivamente al juicio humano..."
                />
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-700 bg-amber-50 p-2 rounded-md border border-amber-200/80">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>Principio de No Delegación: La IA puede asistir o polemizar, pero jamás emitir la decisión o juicio central.</span>
                </div>
              </div>

              {/* Question 4: Evidencia */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#004b36] text-white flex items-center justify-center text-xs font-bold">
                    4
                  </span>
                  <label className="text-sm font-bold text-slate-900">
                    ¿Cuál es la evidencia que permite reconocer proceso y comprensión?
                  </label>
                </div>
                <textarea
                  rows={2}
                  value={design.evidenceSummary}
                  onChange={(e) => handleFieldChange('evidenceSummary', e.target.value)}
                  className="w-full text-xs font-medium p-2.5 bg-slate-50/50 rounded-lg border border-slate-300 focus:bg-white focus:ring-2 focus:ring-[#004b36]"
                  placeholder="Especifique qué artefacto, trazabilidad o contraste demostrará que el estudiante comprendió y transfirió el saber..."
                />
                <p className="text-[11px] text-slate-500">
                  La evidencia no es un texto generado por la IA, sino la matriz comentada, el control de cambios o la defensa oral donde el estudiante audita la salida.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: The Six Decisions of an Augmented Experience */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-semibold text-[#c59b27] uppercase tracking-wider">
                Fase 2 · Arquitectura Curricular
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                La Anatomía de las Seis Decisiones
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Una experiencia aumentada integra seis decisiones articuladas. Redacte el detalle de cada componente:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Decision 1: Reto */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <span className="w-5 h-5 rounded-md bg-[#004b36] text-[#c59b27] flex items-center justify-center text-[10px]">
                    01
                  </span>
                  <span>1. El Reto</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Define el problema auténtico que moviliza y da sentido al aprendizaje.
                </p>
                <textarea
                  rows={3}
                  value={design.decisionChallenge}
                  onChange={(e) => handleFieldChange('decisionChallenge', e.target.value)}
                  className="w-full text-xs p-2.5 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#004b36]"
                />
              </div>

              {/* Decision 2: Rol */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <span className="w-5 h-5 rounded-md bg-[#004b36] text-[#c59b27] flex items-center justify-center text-[10px]">
                    02
                  </span>
                  <span>2. El Rol</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Sitúa al estudiante y le permite actuar desde una perspectiva profesional o ciudadana.
                </p>
                <textarea
                  rows={3}
                  value={design.decisionRole}
                  onChange={(e) => handleFieldChange('decisionRole', e.target.value)}
                  className="w-full text-xs p-2.5 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#004b36]"
                />
              </div>

              {/* Decision 3: Fuentes */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <span className="w-5 h-5 rounded-md bg-[#004b36] text-[#c59b27] flex items-center justify-center text-[10px]">
                    03
                  </span>
                  <span>3. Las Fuentes</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Delimitan qué materiales sostienen el análisis y cómo se validan (corpus cerrado, DOI, microdatos).
                </p>
                <textarea
                  rows={3}
                  value={design.decisionSources}
                  onChange={(e) => handleFieldChange('decisionSources', e.target.value)}
                  className="w-full text-xs p-2.5 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#004b36]"
                />
              </div>

              {/* Decision 4: Interacción con IA */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <span className="w-5 h-5 rounded-md bg-[#004b36] text-[#c59b27] flex items-center justify-center text-[10px]">
                    04
                  </span>
                  <span>4. La Interacción con IA</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Aclara para qué se utilizará la herramienta y qué límites tendrá (prompting, control de límites).
                </p>
                <textarea
                  rows={3}
                  value={design.decisionAiInteraction}
                  onChange={(e) => handleFieldChange('decisionAiInteraction', e.target.value)}
                  className="w-full text-xs p-2.5 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#004b36]"
                />
              </div>

              {/* Decision 5: Producto */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <span className="w-5 h-5 rounded-md bg-[#004b36] text-[#c59b27] flex items-center justify-center text-[10px]">
                    05
                  </span>
                  <span>5. El Producto</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Expresa el resultado esperado tangible elaborado por el estudiante.
                </p>
                <textarea
                  rows={3}
                  value={design.decisionProduct}
                  onChange={(e) => handleFieldChange('decisionProduct', e.target.value)}
                  className="w-full text-xs p-2.5 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#004b36]"
                />
              </div>

              {/* Decision 6: Evidencia */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <span className="w-5 h-5 rounded-md bg-[#004b36] text-[#c59b27] flex items-center justify-center text-[10px]">
                    06
                  </span>
                  <span>6. La Evidencia</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Muestra cómo se verificará el aprendizaje, el proceso crítico y la transferencia cognitiva.
                </p>
                <textarea
                  rows={3}
                  value={design.decisionEvidence}
                  onChange={(e) => handleFieldChange('decisionEvidence', e.target.value)}
                  className="w-full text-xs p-2.5 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#004b36]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Tab: Slide Preview (Diapositiva Prototipo) */}
      {activeTab === 'slide_preview' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
              <div>
                <span className="text-xs font-bold text-[#004b36] uppercase tracking-wider">
                  Prototipo Sintético en Diapositiva
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  Ficha de Resumen Ejecutivo de la Actividad
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Visualice el diseño articulado en formato diapositiva para socializar con pares docentes o comités curriculares.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => downloadActivityAsWord(design)}
                  className="px-3.5 py-2 text-xs font-bold rounded-lg bg-[#004b36] hover:bg-[#003828] text-white flex items-center gap-1.5 cursor-pointer shadow-xs border border-[#c59b27]/40"
                >
                  <Download className="w-3.5 h-3.5 text-[#c59b27]" />
                  <span>Exportar a Word</span>
                </button>
              </div>
            </div>

            {/* The Slide Prototype Canvas (16:9 Inspired Framing) */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-[#004b36] relative overflow-hidden">
              {/* Background watermark */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Slide Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#c59b27] uppercase tracking-wider">
                    <span>Universidad Externado de Colombia</span>
                    <span>·</span>
                    <span>{design.courseName}</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-white mt-1">
                    {design.activityTitle}
                  </h4>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#003828] text-[#c59b27] font-mono text-[10px] font-bold border border-[#c59b27]/30">
                    DIAPOSITIVA PROTOTIPO
                  </span>
                  <div className="text-[11px] text-slate-400 mt-1">{design.academicLevel}</div>
                </div>
              </div>

              {/* 6 Blocks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1. Propósito */}
                <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                      1. Propósito
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono font-bold">
                      {design.observableVerb}
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {design.capacityTarget}
                  </p>
                </div>

                {/* 2. Reto */}
                <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#c59b27]">
                    2. Reto
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {design.decisionChallenge || design.challengeSummary}
                  </p>
                </div>

                {/* 3. Rol */}
                <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                    3. Rol del Estudiante
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {design.decisionRole}
                  </p>
                </div>

                {/* 4. IA */}
                <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    4. Papel de la IA (Límites)
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {design.decisionAiInteraction || design.aiRoleBoundary}
                  </p>
                </div>

                {/* 5. Producto */}
                <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
                    5. Producto Tangible
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {design.decisionProduct}
                  </p>
                </div>

                {/* 6. Evidencia */}
                <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                    6. Evidencia de Aprendizaje
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {design.decisionEvidence || design.evidenceSummary}
                  </p>
                </div>
              </div>

              {/* Slide Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-300">Docente:</span>
                  <span>{design.authorName}</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-medium">
                    Prueba de Resistencia:{' '}
                    {design.stressTestVerdict === 'pass' ? 'Aprobada (Resistente)' : 'En revisión'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Tab: Stress Test (Prueba de Resistencia) */}
      {activeTab === 'stress_test' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Control de Calidad del Diseño</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                La Prueba de Resistencia de la Actividad
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                La prueba de resistencia sintetiza la calidad del diseño: ¿la experiencia sigue siendo valiosa si la salida de la IA es incompleta, sesgada o incorrecta?
              </p>
            </div>

            {/* Core Epistemic Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#004b36]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Si la respuesta es SÍ (Diseño Aumentado Robusto)</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  El estudiante <strong className="text-slate-900">puede detectar, verificar y corregir</strong>. La falla de la IA se convierte en un objeto pedagógico de análisis crítico, donde el estudiante demuestra maestría al refutar al modelo.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/60 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-rose-800">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Si la respuesta es NO (Diseño Vulnerable)</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Probablemente la actividad <strong className="text-slate-900">depende demasiado de la herramienta</strong> y el estudiante se limitará a copiar y pegar sin comprender. Debe rediseñar el reto o cambiar la evidencia requerida.
                </p>
              </div>
            </div>

            {/* Interactive Verdict Selector */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-2">
                  1. Dictamen de Resistencia de su Actividad:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => handleFieldChange('stressTestVerdict', 'pass')}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      design.stressTestVerdict === 'pass'
                        ? 'bg-emerald-100/90 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/30'
                        : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 mb-0.5">
                      <Check className="w-3.5 h-3.5" />
                      <span>SÍ: Resistente (Aprobada)</span>
                    </div>
                    <span className="text-[11px] text-slate-600 block">
                      El estudiante audita y corrige el error algorítmico.
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleFieldChange('stressTestVerdict', 'fail')}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      design.stressTestVerdict === 'fail'
                        ? 'bg-rose-100/90 border-rose-500 text-rose-950 font-bold ring-2 ring-rose-500/30'
                        : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 mb-0.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>NO: Dependiente (Vulnerable)</span>
                    </div>
                    <span className="text-[11px] text-slate-600 block">
                      Sin IA válida el estudiante no puede resolver la tarea.
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleFieldChange('stressTestVerdict', 'in_progress')}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      design.stressTestVerdict === 'in_progress'
                        ? 'bg-amber-100/90 border-amber-500 text-amber-950 font-bold ring-2 ring-amber-500/30'
                        : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 mb-0.5">
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>En Calibración / Prototipo</span>
                    </div>
                    <span className="text-[11px] text-slate-600 block">
                      Ajustando los límites de interacción de la IA.
                    </span>
                  </button>
                </div>
              </div>

              {/* Justification Inputs */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  2. Justificación: ¿Por qué la experiencia sigue siendo valiosa si la IA alucina o sesga?
                </label>
                <textarea
                  rows={3}
                  value={design.stressTestExplanation}
                  onChange={(e) => handleFieldChange('stressTestExplanation', e.target.value)}
                  className="w-full text-xs font-medium p-2.5 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#004b36]"
                  placeholder="Explique el valor formativo de la contradicción o limitación de la IA..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">
                  3. Acción del Estudiante: ¿Cómo detecta, verifica y corrige la respuesta de la IA?
                </label>
                <textarea
                  rows={3}
                  value={design.studentCorrectionAction}
                  onChange={(e) => handleFieldChange('studentCorrectionAction', e.target.value)}
                  className="w-full text-xs font-medium p-2.5 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#004b36]"
                  placeholder="Describa el protocolo de verificación (cotejo con fuente primaria, cálculo en hoja, contraste normativo)..."
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. Tab: Audit (Auditoría de Coherencia y Ética) */}
      {activeTab === 'audit' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                Auditoría Curricular &amp; Ética
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Revisión de Coherencia, Privacidad, Accesibilidad y Sesgos
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Antes de llevar la actividad al aula, asegure la alineación constructiva y las salvaguardas éticas requeridas.
              </p>
            </div>

            <div className="space-y-4">
              {/* Coherencia */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>1. Coherencia entre Capacidad Observable y Evidencia Exigida</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Verifique que la evidencia evalúe con precisión el verbo formulado (ej. si la capacidad es &ldquo;auditar&rdquo;, la evidencia no puede ser responder un test de opción múltiple).
                </p>
                <textarea
                  rows={2}
                  value={design.coherenceAnalysis}
                  onChange={(e) => handleFieldChange('coherenceAnalysis', e.target.value)}
                  className="w-full text-xs p-2.5 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#004b36]"
                />
              </div>

              {/* Privacidad */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  <span>2. Protocolo de Privacidad y Salvaguarda de Datos Sensibles</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Compruebe si se prohíbe explícitamente introducir datos personales, historias clínicas, secretos industriales o información institucional clasificada en la IA.
                </p>
                <textarea
                  rows={2}
                  value={design.privacyMeasures}
                  onChange={(e) => handleFieldChange('privacyMeasures', e.target.value)}
                  className="w-full text-xs p-2.5 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#004b36]"
                />
              </div>

              {/* Accesibilidad DUA */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span>3. Anticipación de Accesibilidad e Inclusión (Marco DUA)</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  ¿La actividad ofrece múltiples formas de representación (texto, audio, esquema) y de acción/expresión para estudiantes con diferentes perfiles de aprendizaje?
                </p>
                <textarea
                  rows={2}
                  value={design.accessibilityMeasures}
                  onChange={(e) => handleFieldChange('accessibilityMeasures', e.target.value)}
                  className="w-full text-xs p-2.5 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#004b36]"
                />
              </div>

              {/* Sesgos */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>4. Detección y Mitigación de Sesgos Algorítmicos</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  ¿Cómo se instruye al estudiante para detectar sesgos demográficos, culturales, de género o de centralismo geográfico en las respuestas del modelo?
                </p>
                <textarea
                  rows={2}
                  value={design.biasMitigationMeasures}
                  onChange={(e) => handleFieldChange('biasMitigationMeasures', e.target.value)}
                  className="w-full text-xs p-2.5 bg-white rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#004b36]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. Bottom Download Bar */}
      <section className="bg-gradient-to-r from-slate-900 via-[#003828] to-[#004b36] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md border border-[#c59b27]/30">
        <div>
          <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider">
            Entregable del Taller
          </span>
          <h4 className="text-lg font-bold text-white mt-0.5">
            Descargue su Diseño Completo en Formato Word (.doc)
          </h4>
          <p className="text-xs text-emerald-100/80 mt-1 max-w-xl">
            Incluye la ficha técnica institucional de la Universidad Externado, la diapositiva prototipo, las 6 decisiones, el dictamen de la prueba de resistencia y la matriz de auditoría ética.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleCopyMarkdown}
            className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/20"
          >
            {copiedStatus ? 'Copiado' : 'Copiar Texto'}
          </button>
          <button
            onClick={() => downloadActivityAsWord(design)}
            className="px-5 py-2.5 text-xs font-extrabold rounded-lg bg-[#c59b27] hover:bg-[#d6aa32] text-slate-950 transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-102"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>Descargar en Word (.doc)</span>
          </button>
        </div>
      </section>
    </div>
  );
};
