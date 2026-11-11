import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Printer,
  BookOpen,
  Layers,
  Search,
  FileText,
  Compass,
  ExternalLink,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Sliders,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Cpu,
  Brain
} from 'lucide-react';

interface PedagogicalGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ToolInfo {
  id: string;
  name: string;
  provider: string;
  url: string;
  accentColor: string;
  badgeBg: string;
  icon: React.ElementType;
  utility: string;
  features: string[];
  ethicalLimits: string;
}

const TOOLS_CATALOG: ToolInfo[] = [
  {
    id: 'notebooklm',
    name: 'Google NotebookLM',
    provider: 'Google Labs',
    url: 'https://notebooklm.google.com/',
    accentColor: 'border-emerald-600 text-emerald-800',
    badgeBg: 'bg-slate-900 text-emerald-300',
    icon: Layers,
    utility: 'Entorno de conversación e interpelación crítica con un corpus cerrado y curado por el docente o estudiante. No sustituye la lectura; promueve la formulación de preguntas comparativas, identificación de acuerdos, tensiones y vacíos temáticos.',
    features: [
      'Grounding estricto: Respuestas generadas exclusivamente a partir de las fuentes subidas por el usuario (PDFs, Docs, diapositivas o enlaces).',
      'Citas interactivas contextualizadas [1], [2] con visor lateral que resalta el párrafo original.',
      'Generación de guías de estudio, preguntas de debate, esquemas y matrices comparativas.',
      'Audio Overview: Generación de podcasts explicativos con dos voces de IA que debaten las ideas centrales del material.'
    ],
    ethicalLimits: 'Riesgo de ilusión de comprensión; el estudiante debe auditar cada cita y construir una matriz comentada con su propia ampliación crítica.'
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    provider: 'Perplexity AI Inc.',
    url: 'https://www.perplexity.ai/',
    accentColor: 'border-[#20808d] text-[#13343b]',
    badgeBg: 'bg-[#13343b] text-[#22b8cd]',
    icon: Search,
    utility: 'Motor de respuesta conversacional para búsqueda exploratoria y descubrimiento bibliográfico. Modela el embudo de evidencia académica y la trazabilidad de fuentes con identificadores persistentes.',
    features: [
      'Modo Academic Focus: Filtra búsquedas priorizando artículos científicos revisados por pares (CrossRef, PubMed, arXiv).',
      'Citación directa y enlaces a fuentes primarias mediante Digital Object Identifier (DOI).',
      'Síntesis comparativa en tiempo real estructurada con viñetas, tablas y preguntas de profundización.',
      'Collections con System Prompts para organizar líneas de indagación con formatos bibliográficos específicos (APA 7, Vancouver).'
    ],
    ethicalLimits: 'Apoya el descubrimiento exploratorio pero NO reemplaza el protocolo formal de una revisión sistemática (PRISMA 2020), la evaluación de riesgo de sesgo ni la lectura analítica del texto completo.'
  },
  {
    id: 'copilot',
    name: 'Microsoft Copilot en Word & M365',
    provider: 'Microsoft Corporation',
    url: 'https://copilot.microsoft.com/',
    accentColor: 'border-[#0078d4] text-[#004b87]',
    badgeBg: 'bg-gradient-to-r from-[#004b87] to-[#3a1d6e] text-white',
    icon: FileText,
    utility: 'Asistente de productividad curricular integrado en Microsoft Word para prototipar casos de estudio, rúbricas socioformativas y secuencias didácticas a partir de datos públicos agregados.',
    features: [
      'Integración nativa en el procesador de texto: redacta borradores, reformula tono y sintetiza documentos extensos.',
      'Referenciación de archivos organizacionales: invoca materiales de OneDrive con el comando "/" para cruzarlos con el borrador.',
      'Conversión de objetivos cognitivos (Taxonomía de Bloom) en casos simulados con tablas analíticas de evaluación.',
      'Commercial Data Protection (escudo verde Protected): protege la propiedad intelectual institucional garantizando que los datos no entrenan modelos públicos.'
    ],
    ethicalLimits: 'Productividad no significa publicar el primer borrador; exige aplicar la rutina de revisión en 5 dimensiones (cifras, tono, Bloom, sesgos y rúbrica). Prohibido estrictamente ingresar datos sensibles de estudiantes o expedientes confidenciales.'
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    provider: 'OpenAI',
    url: 'https://chatgpt.com/',
    accentColor: 'border-emerald-600 text-emerald-900',
    badgeBg: 'bg-emerald-950 text-emerald-300',
    icon: Brain,
    utility: 'Entorno de ideación, modelado socrático y andamiaje cognitivo. Permite diversificar explicaciones, simular contrapartes dialógicas y generar alternativas multinivel para atender la neurodiversidad bajo el marco DUA.',
    features: [
      'Capacidades multimodales avanzadas: procesamiento y análisis de texto, gráficos, esquemas y audio.',
      'Custom GPTs y prompts de rol: configuración de tutores socráticos disciplinarios, detractores escépticos y evaluadores de estilo.',
      'Generación de andamiajes cognitivos: analogías accesibles, reformulaciones conceptuales y glosarios interactivos.',
      'Soporte completo para estructuras complejas de prompting (Rol, Contexto, Operación, Delimitadores y Formato).'
    ],
    ethicalLimits: 'Exige supervisión humana obligatoria frente a posibles alucinaciones o respuestas plausibles pero erróneas; debe auditarse la presencia de sesgos culturales, de género o demográficos.'
  },
  {
    id: 'coursera',
    name: 'Coursera & Coursera Coach',
    provider: 'Coursera Inc.',
    url: 'https://www.coursera.org/',
    accentColor: 'border-[#0056d2] text-[#003e9c]',
    badgeBg: 'bg-[#003e9c] text-amber-300',
    icon: Compass,
    utility: 'Plataforma líder de formación virtual a escala estructurada según principios de microaprendizaje accesible e inclusión curricular (CAST). Incorpora tutoría adaptativa 24/7 mediante Coursera Coach.',
    features: [
      'Coursera Course Builder: Generación asistida por IA de estructuras curriculares modulares, objetivos y lecciones de microaprendizaje (7 a 9 min).',
      'Coursera Coach socrático: Tutor inteligente que brinda pistas reflexivas y retroalimentación formativa inmediata sin dar la respuesta final.',
      'Accesibilidad Universal (DUA): Videos subtitulados en múltiples lenguas, transcripciones interactivas WebVTT descargables y audiorresúmenes.',
      'Múltiples formas de evaluación: Quizzes formativos intercalados, proyectos prácticos aplicados y autoevaluación guiada.'
    ],
    ethicalLimits: 'La IA del tutor virtual debe calibrarse para promover la autorregulación y la perseverancia del estudiante, evitando atajos cognitivos que impidan la apropiación profunda.'
  }
];

export const PedagogicalGuideModal: React.FC<PedagogicalGuideModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState<'tools_catalog' | 'modules_guide' | 'prompt_theory'>('tools_catalog');

  if (!isOpen) return null;

  const fullGuideMarkdown = `# HACKEA EL APRENDIZAJE: REDISEÑA EXPERIENCIAS EDUCATIVAS CON IA
## Manual Metodológico Integral y Directorio de Herramientas
**Universidad Externado de Colombia · Cátedra de Innovación Pedagógica con IA**

---

### DIRECTORIO DE HERRAMIENTAS Y ENLACES OFICIALES

1. **Google NotebookLM**: https://notebooklm.google.com/
   - *Utilidad*: Entorno dialógico con corpus cerrado curado (grounding estricto). No sustituye la lectura; promueve preguntas comparativas, identificación de acuerdos, tensiones y vacíos.
   - *Funcionalidades clave*: Ingesta de hasta 50 fuentes, citas interactivas [1], [2] con visor lateral de texto original, guías de estudio y Audio Overview en podcast.

2. **Perplexity AI**: https://www.perplexity.ai/
   - *Utilidad*: Apoyo al descubrimiento exploratorio y modelado del embudo de evidencia científica.
   - *Funcionalidades clave*: Modo Academic Focus (CrossRef/PubMed), verificación de identificadores DOI, consultas booleanas y Collections con System Prompts.

3. **Microsoft Copilot (Word & M365)**: https://copilot.microsoft.com/
   - *Utilidad*: Prototipado curricular rápido en Word a partir de datos públicos agregados con rutina de revisión en 5 dimensiones.
   - *Funcionalidades clave*: Redacción en Word, referenciación cruzada con "/", Commercial Data Protection (escudo Protected) y diseño de rúbricas analíticas.

4. **ChatGPT (OpenAI)**: https://chatgpt.com/
   - *Utilidad*: Ideación, simulación dialógica y andamiaje cognitivo bajo el marco DUA.
   - *Funcionalidades clave*: Multimodalidad, Custom GPTs, tutores socráticos disciplinarios y generación de analogías multinivel.

5. **Coursera & Coursera Coach**: https://www.coursera.org/
   - *Utilidad*: Cursos virtuales inclusivos con microaprendizaje (7-9 min) y tutoría adaptativa 24/7 sin dar la respuesta final.
   - *Funcionalidades clave*: Coursera Course Builder, Coursera Coach con andamiaje socrático, transcripciones WebVTT interactivas y accesibilidad DUA (CAST).

---

### MÓDULO 1. REDISEÑO DE UNA ACTIVIDAD REAL (EDUCACIÓN BÁSICA Y MEDIA)
- **Principio Didáctico Transferible**:
  > *«El estudiante debe hacer algo intelectualmente significativo con la salida de la IA. No basta con recibirla. La evidencia cambia según el patrón: una minuta razonada, un registro del error o una teoría de cambio.»*
- **Patrones de Evidencia según el Área**:
  1. *Historia (Gabinete de Crisis)*: Deliberación con fuentes primarias y defensa fundamentada -> **Minuta Razonada**.
  2. *Ciencias (Física / Biología / Química)*: Predicción de IA vs. datos experimentales -> **Registro del Error y Discrepancia Empírica**.
  3. *Ciudadanía y Ética (Intervención Comunitaria)*: Plan de convivencia sometido al detractor de la IA -> **Teoría de Cambio Auditada**.
  4. *Estadística (Entorno Próximo)*: Microdatos reales de la comunidad escolar -> **Auditoría de Inferencia y Detección de Falacias**.
- **Las Cuatro Preguntas Guía**:
  1. ¿Qué capacidad importa? (Verbo observable: deliberar, contrastar, diseñar, inferir, auditar).
  2. ¿Cuál es el reto auténtico? (Situación concreta que moviliza el aprendizaje).
  3. ¿Cuál es el papel de la IA? (Explorar, simular, objetar, retroalimentar; sin delegar la decisión central).
  4. ¿Cuál es la evidencia? (Proceso y comprensión reconocibles).
- **Las Seis Decisiones**: Reto, Rol, Fuentes, Interacción IA, Producto y Evidencia.
- **Prueba de Resistencia (Stress Test)**: ¿Sigue siendo valiosa la experiencia si la IA alucina, sesga o se equivoca? Si SÍ: el estudiante detecta, verifica y corrige.
- **Auditoría Ética**: Coherencia Capacidad-Evidencia, Privacidad de menores, Accesibilidad DUA y Mitigación de Sesgos.
- **Entregables**: Prototipo en Diapositiva (16:9) y Exportación en Word (.doc).

---

### MÓDULO 2. NOTEBOOKLM: DIÁLOGO CON CORPUS CERRADO
- Grounding estricto frente a alucinaciones de la web abierta.
- Identificación rigurosa de Acuerdos, Tensiones y Vacíos epistémicos.
- Matriz comentada donde el estudiante califica la fidelidad de la IA (Fiel, Parcial, Sesgada, Descontextualizada) y la enmienda.

---

### MÓDULO 3. PERPLEXITY: EL EMBUDO DE EVIDENCIA
- Diferenciación: Búsqueda Exploratoria vs. Revisión Documental vs. Revisión Sistemática (PRISMA 2020).
- Embudo metodológico: Consulta amplia -> Filtrado con criterios de inclusión -> Verificación obligatoria de DOI y texto íntegro -> Lectura crítica de sesgo (CASP/RoB-2).

---

### MÓDULO 4. MICROSOFT COPILOT: PROTOTIPADO Y GOBERNANZA
- Productividad como acortamiento de ciclos de prototipado, manteniendo la responsabilidad final.
- Salvaguarda estricta de privacidad: prohibición de subir datos de estudiantes o expedientes confidenciales.
- Rutina de revisión humana en 5 dimensiones: 1) Cifras oficiales, 2) Tono académico, 3) Nivel de Bloom, 4) Representación social y 5) Rúbrica analítica.

---

### MÓDULO 5. CHATGPT & COURSERA: DISEÑO UNIVERSAL PARA EL APRENDIZAJE (DUA)
- Marco CAST: Las tres redes neuronales cerebrales:
  1. Redes Afectivas (Compromiso): Tutoría socrática con Coursera Coach y opciones contextuales.
  2. Redes de Reconocimiento (Representación): Micro-lecciones de 7-9 min, transcripciones WebVTT interactivas y glosarios visuales.
  3. Redes Estratégicas (Acción y Expresión): Evaluaciones diversificadas equivalentes y listas ejecutivas.

---

### TALLER DE PROMPTS Y SETUP (UNIVERSIDAD EXTERNADO DE COLOMBIA)
- Anatomía R-C-O-D-F: Rol, Contexto, Operación cognitiva, Delimitadores éticos y Formato de salida.
- Pipeline secuencial en 4 fases: Exploración -> Formulación -> Contraste -> Evaluación.
- Protocolo de Triangulación en 4 cuadrantes: IA primaria vs. IA secundaria vs. Fuentes autorizadas vs. Juicio experto.
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullGuideMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header Modal */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50/70 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#004b36] flex items-center justify-center text-[#c59b27] shadow-xs shrink-0 border border-[#c59b27]/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#004b36] uppercase tracking-wider">
                <span>HACKEA EL APRENDIZAJE</span>
                <span>·</span>
                <span>Universidad Externado</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                Guía Metodológica Integral &amp; Directorio de Herramientas
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
              title="Imprimir guía"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado' : 'Copiar Guía'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub-Nav Bar inside Modal */}
        <div className="border-b border-slate-200 px-6 py-2.5 bg-white flex items-center gap-3 text-xs font-semibold">
          <button
            onClick={() => setActiveModalTab('tools_catalog')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeModalTab === 'tools_catalog'
                ? 'bg-[#004b36] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>1. Enlaces y Fichas de Herramientas</span>
          </button>

          <button
            onClick={() => setActiveModalTab('modules_guide')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeModalTab === 'modules_guide'
                ? 'bg-[#004b36] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>2. Metodología por Módulos (1 a 5)</span>
          </button>

          <button
            onClick={() => setActiveModalTab('prompt_theory')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeModalTab === 'prompt_theory'
                ? 'bg-[#004b36] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Sliders className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>3. Prompts y Triangulación</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* TAB 1: TOOLS CATALOG & DIRECT ACCESS LINKS */}
          {activeModalTab === 'tools_catalog' && (
            <div className="space-y-6">
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4 text-xs text-emerald-950">
                <div className="flex items-center gap-1.5 font-bold mb-1 text-[#004b36]">
                  <Sparkles className="w-4 h-4 text-[#c59b27]" />
                  <span>Directorio Oficial de Acceso y Funcionalidades Pedagógicas</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Acceda directamente a cada una de las herramientas propuestas en la aplicación. Cada ficha resume su <strong>utilidad pedagógica</strong>, sus <strong>principales funcionalidades técnicas</strong> y los <strong>límites éticos indispensables</strong> para la docencia y la investigación universitaria y escolar.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {TOOLS_CATALOG.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.id}
                      className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition-all space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tool.badgeBg} shrink-0`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-base font-bold text-slate-900">{tool.name}</h4>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
                                {tool.provider}
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-500 font-medium">{tool.url}</span>
                          </div>
                        </div>

                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-[#004b36] rounded-lg transition-colors cursor-pointer shrink-0 shadow-xs"
                        >
                          <span>Abrir {tool.name.split(' ')[0]}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#c59b27]" />
                        </a>
                      </div>

                      {/* Utilidad */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block mb-1">
                          Utilidad Pedagógica:
                        </span>
                        <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/70">
                          {tool.utility}
                        </p>
                      </div>

                      {/* Funcionalidades */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block mb-1.5">
                          Principales Funcionalidades Clave:
                        </span>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                          {tool.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 bg-white p-2 rounded-md border border-slate-100">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="text-slate-700">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Límites éticos */}
                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold">Límites y Recomendaciones: </strong>
                          <span>{tool.ethicalLimits}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: METHODOLOGY BY MODULES (1 to 5) */}
          {activeModalTab === 'modules_guide' && (
            <div className="space-y-6">
              {/* Módulo 1 */}
              <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#004b36] font-bold text-xs uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4" />
                    <span>Módulo 01 · Rediseño de una Actividad Real (Básica y Media)</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#004b36] text-[#c59b27] font-mono text-[10px] font-bold">
                    TALLER ACTIVO
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  La experiencia de aprendizaje aumentada: 4 preguntas, 6 decisiones y la prueba de resistencia
                </h4>
                <div className="p-3 bg-white rounded-lg border border-emerald-200 text-xs text-slate-700 space-y-1">
                  <span className="font-bold text-[#004b36] block">Principio Didáctico Transferible:</span>
                  <p className="italic">
                    &ldquo;El estudiante debe hacer algo intelectualmente significativo con la salida de la IA. No basta con recibirla. La evidencia cambia según el patrón: una minuta razonada, un registro del error o una teoría de cambio.&rdquo;
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Las 4 Preguntas:</strong>
                    <ol className="list-decimal pl-4 space-y-0.5 text-slate-600">
                      <li>¿Qué capacidad importa? (Verbo observable: deliberar, contrastar, diseñar, inferir).</li>
                      <li>¿Cuál es el reto auténtico? (Situación escolar o comunitaria).</li>
                      <li>¿Cuál es el papel de la IA? (Límites: sin delegar decisión).</li>
                      <li>¿Cuál es la evidencia? (Proceso y comprensión reconocibles).</li>
                    </ol>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Patrones de Evidencia Escolar:</strong>
                    <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                      <li><strong>Historia:</strong> Minuta razonada de gabinete con fuentes primarias.</li>
                      <li><strong>Ciencias:</strong> Registro de discrepancia empírica (patio vs. IA).</li>
                      <li><strong>Ciudadanía:</strong> Teoría de cambio ante contraparte escéptica.</li>
                      <li><strong>Estadística:</strong> Auditoría de inferencia y falacias en datos locales.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Módulo 2 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-3">
                <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>Módulo 02 · NotebookLM: Diálogo con Corpus Cerrado</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Epistemología del grounding estricto: no sustituye la lectura, dinamiza el contraste
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  NotebookLM restringe su síntesis al corpus cargado por el estudiante. El rigor formativo reside en la <strong>matriz comentada</strong>: el alumno identifica qué acuerdos existen entre los autores, dónde hay tensiones epistemológicas no resueltas y qué vacíos omite el documento, auditando cada cita interactiva con el visor lateral.
                </p>
              </div>

              {/* Módulo 3 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-3">
                <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
                  <Search className="w-4 h-4" />
                  <span>Módulo 03 · Perplexity AI: El Embudo de Evidencia Científica</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Diferenciación entre descubrimiento exploratorio y revisión sistemática formal
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Una consulta amplia genera candidatos; el filtrado aplica criterios de inclusión; la fuente primaria permite constatar el DOI oficial y el texto íntegro; y la lectura crítica evalúa el riesgo de sesgo (RoB-2, CASP). Perplexity apoya el descubrimiento inicial, pero nunca reemplaza un protocolo sistemático como PRISMA 2020.
                </p>
              </div>

              {/* Módulo 4 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-3">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>Módulo 04 · Microsoft Copilot: Prototipado Curricular en Word</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Productividad como acortamiento de ciclos y rutina de revisión en 5 dimensiones
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  El ahorro de tiempo solo es real si existe una rutina humana estructurada: verificación de cifras contra datos públicos (DANE, CEPAL), ajuste de lenguaje académico, elevación de preguntas memorísticas hacia análisis causal (Bloom), detección de sesgos de representación y calibración de la rúbrica analítica.
                </p>
              </div>

              {/* Módulo 5 */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-3">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Módulo 05 · ChatGPT &amp; Coursera con DUA</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Las tres redes cerebrales de CAST aplicadas al diseño universal del aprendizaje
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Diseñar para la neurodiversidad requiere múltiples formas de <strong>Implicación</strong> (redes afectivas: tutoría socrática con Coursera Coach), múltiples formas de <strong>Representación</strong> (redes de reconocimiento: videos de 7-9 min, audios, esquemas y transcripciones WebVTT) y múltiples formas de <strong>Acción y Expresión</strong> (redes estratégicas: ensayos, podcasts o tableros evaluados con rúbrica equivalente).
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: PROMPTS AND TRIANGULATION */}
          {activeModalTab === 'prompt_theory' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
                <div className="flex items-center gap-2 text-[#c59b27] font-bold text-xs uppercase tracking-wider">
                  <Sliders className="w-4 h-4" />
                  <span>Anatomía del Prompt Pedagógico: Fórmula R-C-O-D-F</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Un prompt en educación no es una orden casual a un buscador; es un artefacto de mediación didáctica que programa el marco epistemológico y el nivel cognitivo de la respuesta.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-2 text-[11px]">
                  <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                    <span className="font-bold text-emerald-400 block">[R] Rol</span>
                    <span className="text-slate-400">Identidad disciplinar experta y exigente.</span>
                  </div>
                  <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                    <span className="font-bold text-emerald-400 block">[C] Contexto</span>
                    <span className="text-slate-400">Fuentes autorizadas, marco curricular y población.</span>
                  </div>
                  <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                    <span className="font-bold text-emerald-400 block">[O] Operación</span>
                    <span className="text-slate-400">Verbo observable de orden superior (Bloom/DUA).</span>
                  </div>
                  <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                    <span className="font-bold text-emerald-400 block">[D] Delimitación</span>
                    <span className="text-slate-400">Restricciones éticas y cláusulas anti-alucinación.</span>
                  </div>
                  <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                    <span className="font-bold text-emerald-400 block">[F] Formato</span>
                    <span className="text-slate-400">Tabla, minuta, rúbrica o citas obligatorias.</span>
                  </div>
                </div>
              </div>

              {/* Protocolo de Triangulación */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-3">
                <div className="flex items-center gap-2 text-[#004b36] font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#c59b27]" />
                  <span>Protocolo de Triangulación Metodológica en 4 Cuadrantes</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Cuadrante A: IA Primaria (Generación)</strong>
                    <span className="text-slate-600">Primer borrador de síntesis en NotebookLM o Copilot.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Cuadrante B: IA Secundaria (Contraste)</strong>
                    <span className="text-slate-600">Verificación cruzada en Perplexity Academic o ChatGPT como abogado del diablo.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Cuadrante C: Fuentes Primarias (Grounding)</strong>
                    <span className="text-slate-600">Cotejo manual contra el documento original con DOI y datos oficiales (DANE).</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Cuadrante D: Juicio Crítico Humano (Evaluación)</strong>
                    <span className="text-slate-600">Minuta razonada, registro del error o teoría de cambio elaborada por el estudiante.</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500 rounded-b-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="font-medium text-slate-700">HACKEA EL APRENDIZAJE · Universidad Externado de Colombia</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 font-bold text-white bg-[#004b36] hover:bg-[#003828] rounded-lg transition-colors cursor-pointer shadow-xs border border-[#c59b27]/30"
          >
            Cerrar Guía
          </button>
        </div>
      </div>
    </div>
  );
};
