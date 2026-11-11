import { AugmentedActivityDesign } from '../types';

export const OBSERVABLE_VERBS = [
  { verb: 'Deliberar', category: 'Pensamiento Histórico y Social', description: 'Examinar pros, contras y fuentes primarias para consensuar o defender una decisión pública' },
  { verb: 'Contrastar', category: 'Indagación Científica', description: 'Identificar discrepancias y acuerdos entre datos experimentales observados y predicciones de la IA' },
  { verb: 'Diseñar', category: 'Resolución de Problemas', description: 'Construir una teoría de cambio o intervención viable para responder a un reto del entorno' },
  { verb: 'Inferir', category: 'Razonamiento Estadístico', description: 'Deducir relaciones válidas a partir de datos del entorno escolar sin confundir correlación con causalidad' },
  { verb: 'Auditar', category: 'Evaluación Crítica', description: 'Revisar la salida algorítmica contra fuentes empíricas para detectar sesgos, alucinaciones o anacronismos' },
  { verb: 'Refutar', category: 'Argumentación', description: 'Desmontar afirmaciones infundadas o supuestos erróneos generados por la IA con evidencias concretas' },
  { verb: 'Modelar', category: 'Matemática y Ciencias', description: 'Representar fenómenos reales y comprobar los límites de simplificación de las fórmulas' },
  { verb: 'Diagnosticar', category: 'Investigación Escolar', description: 'Reconocer causas profundas de un fenómeno a partir de síntomas, registros y testimonios locales' }
];

export interface EvidencePattern {
  id: string;
  name: string;
  area: string;
  description: string;
  whatStudentDoesWithAi: string;
  evaluableArtifact: string;
}

export const EVIDENCE_PATTERNS: EvidencePattern[] = [
  {
    id: 'minuta_razonada',
    name: '1. Minuta Razonada y Deliberación',
    area: 'Historia y Ciencias Sociales',
    description: 'La simulación de un gabinete exige fuentes, deliberación y defensa de decisiones ante posiciones antagónicas simuladas.',
    whatStudentDoesWithAi: 'Usa la IA como asesor o contradictor histórico; detecta anacronismos y sesgos temporales en su discurso.',
    evaluableArtifact: 'Minuta razonada con votación justificada, fuentes primarias citadas y refutación a los argumentos de la IA.'
  },
  {
    id: 'registro_error',
    name: '2. Registro del Error y Discrepancia Empírica',
    area: 'Ciencias Naturales y Experimentales',
    description: 'Comparar una predicción teórica de la IA con datos observados en el laboratorio escolar convierte la discrepancia en objeto de análisis.',
    whatStudentDoesWithAi: 'Solicita a la IA predecir un resultado; contrasta la predicción con los datos reales recogidos y explica el desfase físico/biológico.',
    evaluableArtifact: 'Bitácora de discrepancias con tabla comparativa (predicción IA vs. dato real) y explicación causal del error del modelo.'
  },
  {
    id: 'teoria_cambio',
    name: '3. Teoría de Cambio y Revisión de Supuestos',
    area: 'Formación Ciudadana, Ética y Proyectos',
    description: 'Diseñar una intervención escolar o comunitaria y someterla a perspectivas críticas permite revisar supuestos ocultos y viabilidad.',
    whatStudentDoesWithAi: 'La IA actúa como "abogado del diablo" o contraparte escéptica que cuestiona costos, tiempos y rechazos culturales.',
    evaluableArtifact: 'Matriz de Teoría de Cambio (Insumos -> Actividades -> Productos -> Impacto) con ajustes fundamentados ante las objeciones.'
  },
  {
    id: 'auditoria_inferencia',
    name: '4. Auditoría de Inferencia en Entorno Próximo',
    area: 'Matemáticas y Estadística Aplicada',
    description: 'Aplicación en contextos cercanos (hábitos de vida, uso de pantallas, alimentación) para lograr comprensión conceptual más allá de memorizar fórmulas.',
    whatStudentDoesWithAi: 'Pide a la IA interpretar un conjunto de datos recolectados; audita si la IA confunde correlación con causalidad o ignora valores atípicos.',
    evaluableArtifact: 'Reporte de inferencia estadística comentada con gráficos corregidos y advertencia de falacias detectadas en la IA.'
  }
];

export const PRESET_ACTIVITIES: AugmentedActivityDesign[] = [
  {
    id: 'preset-historia-gabinete',
    activityTitle: 'Gabinete de Crisis Histórica: Deliberación y Toma de Decisiones en la Campaña Libertadora (1819)',
    courseName: 'Ciencias Sociales e Historia de Colombia',
    academicLevel: 'Educación Básica Secundaria y Media (Grados 8° a 10°)',
    authorName: 'Área de Ciencias Sociales y Competencias Ciudadanas',
    institution: 'Colegio / Institución de Educación Básica y Media',
    
    // 4 Preguntas
    capacityTarget: 'Deliberar y defender con fuentes primarias una postura política o militar ante una crisis histórica, evaluando consecuencias éticas y sociales.',
    observableVerb: 'Deliberar',
    challengeSummary: 'Julio de 1819: El ejército patriota acaba de cruzar el Páramo de Pisba en condiciones deplorables. El gabinete ministerial y el consejo militar deben decidir si avanzar de inmediato hacia Tunja y Boyacá o esperar refuerzos en Socha con riesgo de ser interceptados por Barreiro.',
    aiRoleBoundary: 'La IA simula tres ministros y generales con intereses antagónicos (un militar pragmático que exige pausa, un político civil temeroso y un general audaz). La IA NO toma la decisión de Estado ni redacta el desenlace.',
    evidenceSummary: 'Una minuta razonada del gabinete donde el estudiante registra la deliberación, cita fragmentos de cartas históricas reales y defiende su resolución final refutando los contraargumentos de la IA.',

    // 6 Decisiones
    decisionChallenge: 'Resolver el dilema militar, logístico y humano del paso de los Andes antes de la Batalla del Pantano de Vargas sin contar con certezas absolutas.',
    decisionRole: 'Miembro del Consejo de Gobierno y Asesor Civil con voz y voto en la mesa de deliberación de la campaña.',
    decisionSources: 'Diario de campaña de Simón Bolívar, cartas del General Santander, testimonios de pobladores locales y mapa orográfico de Boyacá de la época.',
    decisionAiInteraction: 'Se formula un prompt donde la IA asume roles históricos cerrados. Queda prohibido que la IA dé consejos morales modernos o anacronismos.',
    decisionProduct: 'Minuta razonada y decreto de acción del gabinete suscrito por el equipo de estudiantes tras el debate en el aula.',
    decisionEvidence: 'La minuta comentada con control de cambios: el estudiante debe marcar qué argumentos de la IA contenían anacronismos o vacíos logísticos y cómo los rebatió con las fuentes históricas.',

    // Prueba de Resistencia
    stressTestVerdict: 'pass',
    stressTestExplanation: '¿La experiencia sigue siendo valiosa si la salida de la IA es incompleta, sesgada o incorrecta? SÍ: si la IA inventa un dato falso o introduce conceptos modernos del siglo XXI (anacronismos), el estudiante gana puntos demostrando el error mediante el cotejo con las cartas primarias del archivo histórico escolar.',
    studentCorrectionAction: 'Identificar citas falsas o terminología anacrónica en la simulación de la IA, tacharlas en la minuta y sustituirlas por evidencia documental de las cartas originales.',

    // Auditoría
    coherenceAnalysis: 'Correspondencia directa: la capacidad de deliberar se evalúa a través de la minuta razonada y la defensa argumentada frente a posiciones contrarias.',
    privacyMeasures: 'No se introducen datos personales de los estudiantes; se utilizan perfiles y roles de personajes históricos del dominio público.',
    accessibilityMeasures: 'DUA: El gabinete puede realizarse mediante simulación teatral en vivo, registro en audio (podcast histórico) o documento escrito con organizadores gráficos.',
    biasMitigationMeasures: 'Se instruye a los estudiantes a contrastar la visión centralista de la historia oficial con el papel de las mujeres (heroínas de la Independencia) y las poblaciones campesinas/indígenas silenciadas por la IA.'
  },
  {
    id: 'preset-ciencias-error',
    activityTitle: 'Laboratorio de Indagación: Predicción de la IA vs. Datos Observados de Caída Libre con Fricción del Aire',
    courseName: 'Ciencias Naturales y Física',
    academicLevel: 'Educación Media (Grados 10° y 11°)',
    authorName: 'Departamento de Ciencias Naturales y Experimentación',
    institution: 'Colegio / Institución de Educación Básica y Media',

    // 4 Preguntas
    capacityTarget: 'Contrastar datos experimentales reales con modelos predictivos de IA, convirtiendo la discrepancia empírica en objeto de análisis de variables.',
    observableVerb: 'Contrastar',
    challengeSummary: 'Los estudiantes dejan caer simultáneamente una pelota de tenis y un filtro de café desde 3 metros de altura, cronometrando con sensores o video análisis en cámara lenta. La IA afirma que "todos los cuerpos caen al mismo tiempo según la ley de gravedad universal".',
    aiRoleBoundary: 'Generar la predicción teórica y resolver las ecuaciones ideales de caída libre. La IA NO analiza los datos recolectados por los estudiantes en su propio laboratorio.',
    evidenceSummary: 'Un registro del error y discrepancia empírica: tabla comparativa donde el estudiante demuestra por qué el modelo de la IA falló en la atmósfera real del colegio y formula la variable de resistencia aerodinámica.',

    // 6 Decisiones
    decisionChallenge: 'Explicar científicamente por qué la predicción de la IA no se cumple en el patio escolar y construir un modelo físico que incluya la viscosidad y fricción del aire.',
    decisionRole: 'Investigador escolar de física experimental reportando ante el semillero de ciencias.',
    decisionSources: 'Mediciones directas en clase con cronómetro y video a 120 fps, tabla de coeficientes de arrastre (drag coefficient) y texto escolar de física clásica.',
    decisionAiInteraction: 'Se solicita a la IA: "Predice el tiempo de caída para ambos objetos en Bogotá (2.600 msnm)". El estudiante inspecciona qué supuestos simplificó la máquina.',
    decisionProduct: 'Gráfico superpuesto (Curva teórica de la IA vs. Puntos de dispersión medidos por el estudiante) y reporte de discrepancia física.',
    decisionEvidence: 'Bitácora del error: el estudiante debe señalar explícitamente el supuesto irreal de la IA (vacío absoluto) y calcular el porcentaje de error experimental.',

    // Prueba de Resistencia
    stressTestVerdict: 'pass',
    stressTestExplanation: '¿La experiencia sigue siendo valiosa si la IA da una predicción equivocada o idealizada? SÍ, esa es precisamente la riqueza didáctica: la discrepancia entre el cálculo ideal de la IA y la realidad observada en el patio del colegio obliga al estudiante a pensar como científico y no como consumidor pasivo.',
    studentCorrectionAction: 'El estudiante mide la discrepancia en milisegundos, formula la hipótesis del rozamiento del aire y recalcula la velocidad límite que la IA omitió.',

    // Auditoría
    coherenceAnalysis: 'La capacidad de contrastar se evidencia en la comparación matemática y conceptual entre los datos del laboratorio y la predicción algorítmica.',
    privacyMeasures: 'Las grabaciones de video se enfocan exclusivamente en los objetos en caída; no se publican rostros de menores de edad.',
    accessibilityMeasures: 'DUA: El registro de datos se apoya en interfaces táctiles, cronómetros audibles y representación tanto en tabla numérica como en gráfico visual.',
    biasMitigationMeasures: 'Se discute el sesgo de las IAs al asumir condiciones ideales de laboratorio anglosajón o nivel del mar sin calibrar la presión atmosférica local.'
  },
  {
    id: 'preset-ciudadania-teoria-cambio',
    activityTitle: 'Diseño de Intervención Escolar: Convivencia y Manejo Participativo de Residuos en el Entorno Educativo',
    courseName: 'Formación Ciudadana, Ética y Proyecto Ambiental Escolar (PRAE)',
    academicLevel: 'Educación Básica Secundaria (Grados 8° y 9°)',
    authorName: 'Comité de Convivencia y Proyectos Transversales',
    institution: 'Colegio / Institución de Educación Básica y Media',

    // 4 Preguntas
    capacityTarget: 'Diseñar una propuesta comunitaria viable para un problema escolar real, sometiendo sus supuestos al escrutinio crítico de la IA para revisar viabilidad.',
    observableVerb: 'Diseñar',
    challengeSummary: 'Durante el descanso se generan botaderos improvisados en las zonas verdes del colegio y existen roces entre cursos mayores y menores. Los estudiantes deben diseñar un plan de intervención que no dependa de sanciones policiales ni llamados de atención vacíos.',
    aiRoleBoundary: 'Actuar como "Detractor Escéptico" (simular un estudiante apático que se niega a colaborar y un directivo preocupado por el presupuesto). La IA cuestiona los supuestos optimistas del plan pero NO diseña la solución.',
    evidenceSummary: 'Una Teoría de Cambio auditada: matriz lógica (Insumos -> Acciones -> Resultados -> Impacto) que incorpora ajustes concretos tras resistir el cuestionamiento de la IA.',

    // 6 Decisiones
    decisionChallenge: 'Transformar una cultura escolar de indiferencia hacia el entorno compartido en un acuerdo de corresponsabilidad sin recurrir al castigo punitivo.',
    decisionRole: 'Líder del comité de convivencia escolar o mediador juvenil de paz.',
    decisionSources: 'Censo de basuras elaborado en la institución, Manual de Convivencia, entrevistas breves al personal de servicios generales y literatura sobre economía del comportamiento (nudges/empujoncitos).',
    decisionAiInteraction: 'Se alimenta a la IA con el borrador de la idea y se le exige: "Encuentra 4 razones realistas por las cuales los estudiantes de 9° ignorarán esta campaña".',
    decisionProduct: 'Plan de acción escolar con cronograma, presupuesto cero y protocolo de mediación entre pares.',
    decisionEvidence: 'La matriz de Teoría de Cambio con una sección de "Objeciones de la IA vs. Respuestas Viables de los Estudiantes", demostrando revisión crítica de supuestos.',

    // Prueba de Resistencia
    stressTestVerdict: 'pass',
    stressTestExplanation: '¿La experiencia sigue siendo valiosa si la IA presenta objeciones cínicas o destructivas? SÍ: el estudiante aprende que toda política social enfrenta resistencia; usar las objeciones de la IA le permite anticipar problemas antes de gastar recursos o frustrarse en el aula.',
    studentCorrectionAction: 'El estudiante analiza cada crítica de la IA, descarta las que son prejuicios sin fundamento y adapta su plan para solucionar las que evidencian fallas logísticas reales.',

    // Auditoría
    coherenceAnalysis: 'La capacidad de diseñar se evidencia de forma transparente en la evolución del plan desde el borrador inicial ingenuo hasta la propuesta blindada.',
    privacyMeasures: 'Las opiniones del personal y de los compañeros se recopilan de forma 100% anonimizada sin nombres propios.',
    accessibilityMeasures: 'DUA: Presentación del proyecto mediante afiches infográficos, dramatización socrática o plan escrito en lenguaje claro y accesible.',
    biasMitigationMeasures: 'Evitar el sesgo de estigmatizar a los cursos menores o al personal de aseo como "culpables", enfocando el diseño en incentivos del entorno físico.'
  },
  {
    id: 'preset-estadistica-entorno',
    activityTitle: 'Estadística en el Entorno Próximo: Hábitos de Sueño, Rendimiento y Uso de Pantallas en Nuestra Comunidad',
    courseName: 'Matemáticas y Estadística Aplicada',
    academicLevel: 'Educación Media (Grados 10° y 11°)',
    authorName: 'Área de Matemáticas y Razonamiento Cuantitativo',
    institution: 'Colegio / Institución de Educación Básica y Media',

    // 4 Preguntas
    capacityTarget: 'Inferir conclusiones cuantitativas contextualizadas a partir de microdatos propios, auditando y refutando falacias estadísticas sugeridas por la IA.',
    observableVerb: 'Inferir',
    challengeSummary: 'Los estudiantes aplican una encuesta anónima en su jornada escolar sobre horas de sueño, uso de celulares después de las 10:00 p.m. y niveles de atención en clase. Al ingresar los datos a la IA, esta concluye apresuradamente: "El celular es el único culpable directo de que los estudiantes reprueben matemáticas".',
    aiRoleBoundary: 'Procesar los datos tabulares para generar medidas de tendencia central y gráficos preliminares. La IA NO puede redactar la conclusión final sin supervisión.',
    evidenceSummary: 'Un informe de inferencia estadística contextualizada y registro de falacias: el estudiante desmonta la confusión entre correlación y causalidad de la IA, identifica variables intervinientes (ruido nocturno, transporte largo, trabajo informal) y recalcula la mediana ante valores atípicos.',

    // 6 Decisiones
    decisionChallenge: 'Desarrollar una comprensión conceptual profunda de la dispersión, la correlación y la causalidad más allá de la memorización mecánica de fórmulas.',
    decisionRole: 'Analista de datos del observatorio de bienestar estudiantil de la institución.',
    decisionSources: 'Base de datos generada por el grupo (n=120 estudiantes, variables cuantitativas discretas y continuas), encuestas DANE de uso del tiempo infantil.',
    decisionAiInteraction: 'Se solicita a la IA: "Analiza la correlación entre las dos columnas y propón un titular para la comunidad". El estudiante analiza la trampa metodológica.',
    decisionProduct: 'Informe estadístico en lenguaje claro para el consejo académico con diagramas de caja y bigotes (boxplot) y advertencia de variables de confusión.',
    decisionEvidence: 'Cuadro de auditoría de inferencia: comparación entre la conclusión simplista de la IA ("causalidad directa") vs. el análisis multifactorial del estudiante ("correlación con terceras variables").',

    // Prueba de Resistencia
    stressTestVerdict: 'pass',
    stressTestExplanation: '¿La experiencia sigue siendo valiosa si la IA calcula mal la mediana o comete la falacia de correlación=causalidad? SÍ, es el mayor triunfo formativo: el estudiante se siente empoderado al descubrir que la máquina confunde asociación con causa, demostrando maestría epistémica.',
    studentCorrectionAction: 'Identificar el valor atípico (outlier) que distorsionó el promedio en la respuesta de la IA, reemplazarlo por la mediana y justificar la no causalidad con argumentos empíricos.',

    // Auditoría
    coherenceAnalysis: 'La capacidad de inferir se evalúa directamente en la distinción entre correlación estadística y causalidad social.',
    privacyMeasures: 'Encuesta absolutamente anónima sin preguntas de identificación personal o familiar sensible.',
    accessibilityMeasures: 'DUA: Los datos se representan con visualizaciones de color de alto contraste, tablas sonoras y resúmenes ejecutivos comprensibles.',
    biasMitigationMeasures: 'Identificar el sesgo de auto-reporte en encuestas y sesgos socioeconómicos derivados de estudiantes que carecen de conectividad o dispositivos en casa.'
  }
];

export const EMPTY_ACTIVITY_DESIGN: AugmentedActivityDesign = {
  id: 'custom-student-design',
  activityTitle: 'Rediseño de Actividad: [Escriba el título de su actividad aquí]',
  courseName: '[Asignatura de Básica / Media o Cátedra]',
  academicLevel: 'Educación Básica Secundaria o Media',
  authorName: 'Prof. [Su Nombre o Equipo Docente]',
  institution: 'Institución Educativa / Colegio',
  
  // 4 Preguntas
  capacityTarget: 'Definir qué capacidad importa y expresarla con un verbo observable (deliberar, contrastar, diseñar, inferir, auditar).',
  observableVerb: 'Deliberar',
  challengeSummary: 'Formular un reto contextualizado en un problema del entorno escolar, comunitario o dilema histórico auténtico.',
  aiRoleBoundary: 'Delimitar el papel exacto de la IA (explorar, simular, objetar o retroalimentar) y estipular claramente qué decisión central NO puede delegarse.',
  evidenceSummary: 'Establecer la evidencia de aprendizaje según el patrón: minuta razonada, registro del error o teoría de cambio.',

  // 6 Decisiones
  decisionChallenge: 'El problema auténtico que moviliza la motivación y el pensamiento complejo del estudiante en su contexto próximo.',
  decisionRole: 'La perspectiva desde la cual el estudiante toma decisiones, investiga o delibera.',
  decisionSources: 'Fuentes primarias, datos empíricos de laboratorio, registros locales o documentos autorizados.',
  decisionAiInteraction: 'Herramienta elegida, instrucciones precisas (prompts) y límites éticos de uso.',
  decisionProduct: 'El artefacto o resultado esperado que elaborará el estudiante.',
  decisionEvidence: 'El mecanismo que permite al docente verificar si hubo apropiación real y qué hizo el estudiante intelectualmente con la salida de la IA.',

  // Prueba de Resistencia
  stressTestVerdict: 'pass',
  stressTestExplanation: '¿La experiencia sigue siendo valiosa si la salida de la IA es incompleta, sesgada o incorrecta? Explique por qué el estudiante puede detectar, verificar y corregir el error.',
  studentCorrectionAction: 'Acciones obligatorias del estudiante frente al borrador o respuesta de la IA (cotejo empírico, refutación de anacronismos, ajuste de supuestos).',

  // Auditoría
  coherenceAnalysis: 'Análisis de correspondencia unívoca entre la capacidad observable formulada y la evidencia exigida.',
  privacyMeasures: 'Protocolo de protección de datos: prohibición de datos confidenciales, institucionales o personales en la IA.',
  accessibilityMeasures: 'Opciones de implicación, representación y expresión contempladas según el marco DUA.',
  biasMitigationMeasures: 'Identificación de sesgos potenciales del modelo y directrices para que el estudiante los audite.'
};

/**
 * Utility to generate and download a clean, professional Word document (.doc)
 * containing the full student redesign, slide prototype, and audit matrix.
 */
export const downloadActivityAsWord = (design: AugmentedActivityDesign) => {
  const verdictText = design.stressTestVerdict === 'pass' 
    ? 'APROBADA (Resistente a fallos de IA)' 
    : design.stressTestVerdict === 'fail' 
      ? 'NO APROBADA (Excesiva dependencia de la IA)' 
      : 'EN REVISIÓN / EN DESARROLLO';

  const verdictBg = design.stressTestVerdict === 'pass' ? '#e6f4ea' : '#fce8e6';
  const verdictColor = design.stressTestVerdict === 'pass' ? '#137333' : '#c5221f';

  const htmlContent = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset='utf-8'>
  <title>${escapeXml(design.activityTitle)}</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    body {
      font-family: 'Calibri', 'Arial', sans-serif;
      font-size: 11pt;
      color: #1e293b;
      line-height: 1.5;
      margin: 1.5in 1in 1in 1in;
    }
    h1 {
      font-size: 20pt;
      color: #004b36;
      margin-bottom: 4pt;
      font-weight: bold;
    }
    h2 {
      font-size: 14pt;
      color: #004b36;
      border-bottom: 2pt solid #c59b27;
      padding-bottom: 4pt;
      margin-top: 18pt;
      margin-bottom: 8pt;
    }
    h3 {
      font-size: 12pt;
      color: #0f172a;
      margin-top: 12pt;
      margin-bottom: 4pt;
    }
    .header-box {
      background-color: #004b36;
      color: #ffffff;
      padding: 16pt;
      border-radius: 6pt;
      margin-bottom: 20pt;
    }
    .header-box h1 {
      color: #ffffff;
      margin: 0 0 6pt 0;
      font-size: 18pt;
    }
    .header-box p {
      color: #e2e8f0;
      margin: 2pt 0;
      font-size: 10pt;
    }
    .principle-banner {
      background-color: #f0fdf4;
      border: 1.5pt solid #16a34a;
      color: #14532d;
      padding: 10pt 14pt;
      border-radius: 4pt;
      margin: 12pt 0;
      font-size: 10.5pt;
      font-weight: bold;
    }
    .badge-gold {
      background-color: #c59b27;
      color: #ffffff;
      padding: 3pt 8pt;
      font-weight: bold;
      font-size: 9pt;
      border-radius: 3pt;
      display: inline-block;
    }
    .slide-prototype {
      border: 2pt solid #004b36;
      background-color: #f8fafc;
      padding: 14pt;
      margin: 16pt 0;
      border-radius: 6pt;
    }
    .slide-prototype-title {
      font-size: 12pt;
      font-weight: bold;
      color: #004b36;
      text-transform: uppercase;
      letter-spacing: 1pt;
      margin-bottom: 10pt;
      border-bottom: 1pt solid #cbd5e1;
      padding-bottom: 4pt;
    }
    table.data-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10pt;
      margin-bottom: 16pt;
    }
    table.data-table th, table.data-table td {
      border: 1pt solid #cbd5e1;
      padding: 8pt 10pt;
      text-align: left;
      vertical-align: top;
      font-size: 10pt;
    }
    table.data-table th {
      background-color: #f1f5f9;
      color: #0f172a;
      font-weight: bold;
      width: 25%;
    }
    .stress-box {
      background-color: ${verdictBg};
      border-left: 5pt solid ${verdictColor};
      padding: 12pt;
      margin: 12pt 0;
    }
    .stress-verdict {
      font-weight: bold;
      color: ${verdictColor};
      font-size: 11pt;
      margin-bottom: 4pt;
    }
    .callout {
      background-color: #f8fafc;
      border-left: 4pt solid #004b36;
      padding: 8pt 12pt;
      margin: 10pt 0;
      font-style: italic;
    }
    .footer-note {
      font-size: 8.5pt;
      color: #64748b;
      margin-top: 30pt;
      border-top: 1pt solid #e2e8f0;
      padding-top: 8pt;
      text-align: center;
    }
  </style>
</head>
<body>

  <!-- Encabezado Institucional -->
  <div class='header-box'>
    <span class='badge-gold'>HACKEA EL APRENDIZAJE · MÓDULO 1</span>
    <h1>Diseño de Experiencia de Aprendizaje Aumentada con IA</h1>
    <p><strong>Institución:</strong> ${escapeXml(design.institution)} · <strong>Área / Asignatura:</strong> ${escapeXml(design.courseName)}</p>
    <p><strong>Nivel Académico:</strong> ${escapeXml(design.academicLevel)} · <strong>Docente / Diseñador:</strong> ${escapeXml(design.authorName)}</p>
    <p><strong>Fecha de Generación:</strong> ${new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
  </div>

  <div class='principle-banner'>
    PRINCIPIO DIDÁCTICO TRANSFERIBLE:<br/>
    &ldquo;El estudiante debe hacer algo intelectualmente significativo con la salida de la IA. No basta con recibirla. La evidencia cambia según el patrón: una minuta razonada, un registro del error o una teoría de cambio.&rdquo;
  </div>

  <h2>1. Título y Ficha de la Actividad</h2>
  <p><strong>Título de la Actividad:</strong> ${escapeXml(design.activityTitle)}</p>
  <p><strong>Capacidad Central Observable:</strong> <span style='color: #004b36; font-weight: bold;'>${escapeXml(design.observableVerb)}</span> — ${escapeXml(design.capacityTarget)}</p>

  <!-- 2. Prototipo Resumido en Diapositiva -->
  <h2>2. Prototipo Resumido en Diapositiva (Slide de Síntesis)</h2>
  <div class='slide-prototype'>
    <div class='slide-prototype-title'>Ficha Prototipo de la Actividad Aumentada (Básica y Media)</div>
    <table class='data-table'>
      <tr>
        <th>1. PROPÓSITO</th>
        <td>${escapeXml(design.capacityTarget)}</td>
      </tr>
      <tr>
        <th>2. RETO</th>
        <td>${escapeXml(design.decisionChallenge || design.challengeSummary)}</td>
      </tr>
      <tr>
        <th>3. ROL DEL ESTUDIANTE</th>
        <td>${escapeXml(design.decisionRole)}</td>
      </tr>
      <tr>
        <th>4. PAPEL DE LA IA</th>
        <td>${escapeXml(design.decisionAiInteraction || design.aiRoleBoundary)}</td>
      </tr>
      <tr>
        <th>5. PRODUCTO ESPERADO</th>
        <td>${escapeXml(design.decisionProduct)}</td>
      </tr>
      <tr>
        <th>6. EVIDENCIA DE APRENDIZAJE</th>
        <td>${escapeXml(design.decisionEvidence || design.evidenceSummary)}</td>
      </tr>
    </table>
  </div>

  <!-- 3. Las Cuatro Preguntas Guía del Rediseño -->
  <h2>3. Las Cuatro Preguntas Guía del Rediseño</h2>
  <table class='data-table'>
    <tr>
      <th>1. ¿Qué capacidad importa?</th>
      <td><strong>Verbo observable:</strong> ${escapeXml(design.observableVerb)}<br/>${escapeXml(design.capacityTarget)}</td>
    </tr>
    <tr>
      <th>2. ¿Cuál es el reto auténtico?</th>
      <td>${escapeXml(design.challengeSummary)}</td>
    </tr>
    <tr>
      <th>3. ¿Cuál es el papel de la IA?</th>
      <td>${escapeXml(design.aiRoleBoundary)}</td>
    </tr>
    <tr>
      <th>4. ¿Cuál es la evidencia?</th>
      <td>${escapeXml(design.evidenceSummary)}</td>
    </tr>
  </table>

  <!-- 4. La Anatomía de las Seis Decisiones -->
  <h2>4. La Anatomía de las Seis Decisiones de la Experiencia Aumentada</h2>
  <table class='data-table'>
    <tr>
      <th>1. El Reto</th>
      <td>${escapeXml(design.decisionChallenge)}</td>
    </tr>
    <tr>
      <th>2. El Rol</th>
      <td>${escapeXml(design.decisionRole)}</td>
    </tr>
    <tr>
      <th>3. Las Fuentes</th>
      <td>${escapeXml(design.decisionSources)}</td>
    </tr>
    <tr>
      <th>4. La Interacción con IA</th>
      <td>${escapeXml(design.decisionAiInteraction)}</td>
    </tr>
    <tr>
      <th>5. El Producto</th>
      <td>${escapeXml(design.decisionProduct)}</td>
    </tr>
    <tr>
      <th>6. La Evidencia</th>
      <td>${escapeXml(design.decisionEvidence)}</td>
    </tr>
  </table>

  <!-- 5. La Prueba de Resistencia (Stress Test) -->
  <h2>5. La Prueba de Resistencia de la Actividad (Stress Test)</h2>
  <div class='stress-box'>
    <div class='stress-verdict'>Dictamen de Resistencia: ${verdictText}</div>
    <p><strong>Pregunta Clave:</strong> ¿La experiencia sigue siendo valiosa si la salida de la IA es incompleta, sesgada o incorrecta?</p>
    <p><strong>Justificación del Diseñador:</strong> ${escapeXml(design.stressTestExplanation)}</p>
    <p><strong>Acción de Detección, Verificación y Corrección del Estudiante:</strong> ${escapeXml(design.studentCorrectionAction)}</p>
  </div>

  <!-- 6. Auditoría de Coherencia y Ética -->
  <h2>6. Evaluación y Auditoría del Diseño Curricular</h2>
  <table class='data-table'>
    <tr>
      <th>Coherencia Capacidad - Evidencia</th>
      <td>${escapeXml(design.coherenceAnalysis)}</td>
    </tr>
    <tr>
      <th>Gobernanza de Privacidad y Protección de Menores</th>
      <td>${escapeXml(design.privacyMeasures)}</td>
    </tr>
    <tr>
      <th>Accesibilidad e Inclusión (DUA)</th>
      <td>${escapeXml(design.accessibilityMeasures)}</td>
    </tr>
    <tr>
      <th>Prevención y Detección de Sesgos</th>
      <td>${escapeXml(design.biasMitigationMeasures)}</td>
    </tr>
  </table>

  <div class='footer-note'>
    Documento pedagógico generado desde la plataforma <strong>HACKEA EL APRENDIZAJE</strong> · Cátedra de Innovación y Rigor Pedagógico con IA · Orientaciones para Educación Básica y Media.
  </div>

</body>
</html>
`;

  const blob = new Blob([htmlContent], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  const cleanTitle = design.activityTitle.replace(/[^a-zA-Z0-9_\u00C0-\u00FF-]/g, '_').substring(0, 45);
  downloadLink.download = `Diseno_Actividad_Aumentada_${cleanTitle || 'Basica_Media'}.doc`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);
};

function escapeXml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
