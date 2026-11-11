import { FunnelStage, PrimarySourceAudit } from '../types';

export interface MethodologyComparison {
  dimension: string;
  exploratorySearch: string;
  documentaryReview: string;
  systematicReview: string;
  perplexityRole: string;
}

export const METHODOLOGY_COMPARISONS: MethodologyComparison[] = [
  {
    dimension: 'Finalidad y Pregunta',
    exploratorySearch: 'Mapeo conceptual inicial, familiarización con términos, lluvia de descriptores y descubrimiento de autores clave.',
    documentaryReview: 'Construcción de marco teórico o estado del arte panorámico; enfoque descriptivo y selectivo sin pretensión exhaustiva.',
    systematicReview: 'Responder una pregunta de investigación clínica o educativa acotada (PICO/PICOS), reproducible y con búsqueda exhaustiva sin sesgo de selección.',
    perplexityRole: 'Excelente para descubrimiento rápido y sinónimos booleanos; INSUFICIENTE para la exhaustividad formal.'
  },
  {
    dimension: 'Protocolo Previo a Priori',
    exploratorySearch: 'Inexistente. La búsqueda evoluciona de manera intuitiva e iterativa según los hallazgos inmediatos.',
    documentaryReview: 'Rara vez formalizado. Se orienta por el criterio del autor o la bibliografía recomendada de expertos.',
    systematicReview: 'Obligatorio y registrado antes de iniciar (PROSPERO, Open Science Framework, Cochrane). Invariable durante el estudio.',
    perplexityRole: 'Perplexity no formula ni registra protocolos; solo responde prompts individuales en tiempo real.'
  },
  {
    dimension: 'Ecuaciones y Bases Consultadas',
    exploratorySearch: 'Lenguaje natural y palabras clave simples en motores web generales o índices académicos.',
    documentaryReview: 'Búsqueda no estructurada en Google Scholar, repositorios institucionales y libros de texto reconocidos.',
    systematicReview: 'Ecuaciones booleanas estandarizadas (AND, OR, NOT, MeSH/DeCS, comodines) documentadas en Scopus, Web of Science, PubMed, ERIC.',
    perplexityRole: 'Solo consulta índices web y bases abiertas disponibles; no audita cobertura de Scopus/WoS de pago ni exporta registros RIS.'
  },
  {
    dimension: 'Criterios de Inclusión y Exclusión',
    exploratorySearch: 'Flexibles e implícitos. Se descarta lo que a simple vista no parece relevante.',
    documentaryReview: 'Criterios temáticos y temporales broad seleccionados discrecionalmente por el investigador.',
    systematicReview: 'Criterios estrictos declarados a priori: tipo de diseño (RCT, cuasi-experimental), rango temporal, idioma, población mínima, etc.',
    perplexityRole: 'Puede aplicar filtros superficiales por prompt ("artículos 2020-2024"), pero suele colar blogs, preprints o artículos periféricos.'
  },
  {
    dimension: 'Evaluación del Riesgo de Sesgo',
    exploratorySearch: 'No se evalúa formalmente. Se confía en la aparente credibilidad del sitio o autor.',
    documentaryReview: 'Lectura crítica informal centrada en la coherencia argumentativa del texto.',
    systematicReview: 'Herramientas validadas de riesgo de sesgo (RoB 2, ROBINS-I, CASP, Newcastle-Ottawa) aplicadas de forma independiente por 2 revisores ciegos.',
    perplexityRole: 'NULA. Perplexity no aplica herramientas psicométricas de sesgo metodológico ni evalúa la validez interna del diseño experimental.'
  },
  {
    dimension: 'Extracción y Síntesis de Evidencia',
    exploratorySearch: 'Anotaciones libres o mapa mental de ideas sueltas.',
    documentaryReview: 'Resumen narrativo organizado por subtemas conceptuales en capítulos de tesis o artículos de opinión.',
    systematicReview: 'Formularios estandarizados de extracción de datos cuantitativos/cualitativos, metaanálisis (Forest plots) o síntesis temática PRISMA.',
    perplexityRole: 'Genera resúmenes sintéticos rápidos, pero corre el riesgo de alucinar conclusiones numéricas o tergiversar p-values.'
  }
];

export const FUNNEL_STAGES: FunnelStage[] = [
  {
    step: 1,
    name: 'Consulta Amplia (Descubrimiento)',
    subtitle: 'Horizon scanning y recuperación de candidatos',
    roleOfAI: 'Perplexity formula una respuesta preliminar conectando palabras clave con fuentes web e índices académicos abiertos (Semantic Scholar, CrossRef, arXiv).',
    limitations: 'Genera un alto volumen de falsos positivos, artículos con muestras no representativas y documentos no revisados por pares mezclados con literatura formal.',
    humanVerificationMandate: 'El investigador debe desglosar la respuesta en conceptos clave, identificar los descriptores formales (MeSH/ERIC) y no asumir que la lista es representativa.',
    outputArtifact: 'Listado inicial de 80-150 candidatos potenciales.',
    metrics: { label: 'Tasa de descarte esperada', value: '70% - 85%' }
  },
  {
    step: 2,
    name: 'Filtrado y Criterios de Elegibilidad',
    subtitle: 'Depuración metodológica estricta',
    roleOfAI: 'Asiste en la primera lectura de resúmenes (abstract screening) para descartar temáticas manifiestamente disonantes.',
    limitations: 'La IA carece de comprensión epistemológica para discernir si una "metodología mixta" declarada en el abstract es en realidad un sondeo precario.',
    humanVerificationMandate: 'Aplicar manualmente los criterios de inclusión/exclusión definidos (población diana, diseño cuasiexperimental, contexto socioeducativo equivalente).',
    outputArtifact: 'Muestra cribada de 15-25 estudios candidatos a texto completo.',
    metrics: { label: 'Precisión requerida', value: 'Doble evaluador independiente' }
  },
  {
    step: 3,
    name: 'Fuente Primaria (Verificación de DOI y Texto Íntegro)',
    subtitle: 'Comprobación empírica en el documento original',
    roleOfAI: 'Suministra enlaces a páginas de revistas, DOI e identificadores digitales.',
    limitations: 'Frecuentemente el resumen generado por IA reporta una asociación como causal o amplifica un hallazgo secundario omitiendo las advertencias del autor.',
    humanVerificationMandate: 'Obligatorio abrir el DOI oficial (doi.org/...) y verificar el texto completo: revisar tablas de datos, tamaño muestral real, tasa de abandono y limitaciones explícitas.',
    outputArtifact: 'Documentos a texto completo verificados y cotejados con el DOI.',
    metrics: { label: 'Discrepancia detectada en síntesis IA', value: '~35% de omisión de matices' }
  },
  {
    step: 4,
    name: 'Lectura Crítica & Evaluación de Calidad',
    subtitle: 'Determinación de validez interna, externa y sesgo',
    roleOfAI: 'Puede ayudar a traducir o explicar términos estadísticos complejos del paper.',
    limitations: 'No puede evaluar la integridad ética, el conflicto de interés por financiamiento corporativo ni la adecuación pedagógica al contexto de los estudiantes.',
    humanVerificationMandate: 'Aplicación rigurosa de checklists de calidad metodológica (CASP, MMAT, RoB-2) para juzgar el peso probatorio real de la evidencia.',
    outputArtifact: 'Matriz formal de calidad metodológica y ponderación del riesgo de sesgo.',
    metrics: { label: 'Evidencia utilizable final', value: '6 - 12 estudios robustos' }
  }
];

export const PRIMARY_SOURCE_AUDITS: PrimarySourceAudit[] = [
  {
    id: 'audit-1',
    title: 'Impact of AI-Powered Formative Feedback on Academic Writing in Higher Education',
    doi: '10.1080/08923647.2023.2214981',
    journal: 'American Journal of Distance Education (Vol. 37, Issue 3)',
    perplexitySummary: 'Perplexity sintetiza: "El uso de retroalimentación inmediata por IA mejora de forma concluyente y universal el rendimiento en redacción académica de los estudiantes universitarios con un incremento de calificaciones del 34%".',
    primarySourceFinding: 'En el paper original (Sección Metodología p. 194 y Limitaciones p. 201): El estudio fue un cuasi-experimento en un solo curso de 38 estudiantes de ingeniería angloparlantes de élite. La tasa de abandono fue del 21% y los autores advierten explícitamente que los resultados no pueden generalizarse a redacción crítica en ciencias sociales.',
    discrepancyType: 'conclusiones_exageradas',
    verdict: 'Sesgo de magnificación por la IA: Perplexity transformó un hallazgo acotado de un curso pequeño en una ley universal pedagógica sin advertir el tamaño de muestra ni la baja validez externa.',
    criticalAnalysis: 'Al cotejar el DOI y el PDF íntegro, el investigador descubre que el 34% de mejora fue solo en corrección gramatical mecánica (sintaxis y comas), mientras que en coherencia argumentativa no hubo diferencia estadísticamente significativa (p = 0.42).'
  },
  {
    id: 'audit-2',
    title: 'Generative AI and Student Attrition: A Longitudinal Analysis of Motivation Curves',
    doi: '10.1016/j.compedu.2024.105120',
    journal: 'Computers & Education (Vol. 210, 2024)',
    perplexitySummary: 'Perplexity sintetiza: "El artículo concluye que la IA reduce drásticamente la tasa de deserción estudiantil al sostener la motivación intrínseca durante todo el semestre académico".',
    primarySourceFinding: 'En el paper original (Sección Discusión p. 12-14): Los autores encontraron el efecto conocido como "Novelty Effect" (efecto novedad): la motivación aumentó en las primeras 3 semanas, pero decayó drásticamente en la semana 10, alcanzando una tasa de deserción similar al grupo de control si no mediaba tutoría docente humana.',
    discrepancyType: 'discrepancia_muestra',
    verdict: 'Omisión temporal crítica: La síntesis de la IA omitió el efecto de decaimiento en el tiempo y la condición indispensable de mediación humana reportada por los autores.',
    criticalAnalysis: 'Verificar el texto original es vital: si un docente diseña una política curricular basándose solo en el resumen de Perplexity, implementaría una herramienta asumiendo retención automática cuando en realidad requiere acompañamiento presencial intensivo.'
  },
  {
    id: 'audit-3',
    title: 'Evaluating Grounded Search Performance for Evidence-Based Clinical and Educational Guidelines',
    doi: '10.1186/s12909-024-05331-x',
    journal: 'BMC Medical Education (2024)',
    perplexitySummary: 'Perplexity sintetiza: "Los motores de búsqueda basados en LLMs citan fuentes fidedignas con una tasa de precisión del 88%, facilitando la revisión bibliográfica".',
    primarySourceFinding: 'En el paper original (Resultados p. 6): Aunque el 88% de los enlaces URL eran válidos, el 41% de las citas emparejadas con afirmaciones específicas contenían "atribución errónea" (la fuente existía pero no afirmaba lo que el modelo le atribuía).',
    discrepancyType: 'citacion_precisa',
    verdict: 'Falso sentido de seguridad: Tener un DOI válido no equivale a que la fuente respalde la afirmación sintética que hace el motor de IA.',
    criticalAnalysis: 'Regla de oro metodológica: Nunca citar una fuente basándose en la referencia proporcionada por Perplexity sin haber leído el párrafo exacto en el paper original.'
  }
];
