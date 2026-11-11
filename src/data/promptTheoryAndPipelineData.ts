export interface StagePromptExample {
  stageNumber: number;
  stageName: string;
  stageGoal: string;
  readyToUsePrompt: string;
  expectedAiOutput: string;
  studentCriticalAction: string;
  evaluationChecklist: string[];
}

export interface ToolPromptPipeline {
  toolId: 'notebooklm' | 'perplexity' | 'copilot' | 'dua';
  toolName: string;
  pedagogicalRole: string;
  stages: StagePromptExample[];
  triangulationProtocol: {
    dataSourcesToCross: string[];
    verificationMethod: string;
    humanJudgmentRole: string;
    rubricCriteria: {
      dimension: string;
      weight: string;
      observableEvidence: string;
    }[];
  };
}

export interface PromptTheoryData {
  definition: {
    technical: string;
    pedagogical: string;
    notAQuestionAnalogy: string;
  };
  pedagogicalPurposes: {
    title: string;
    description: string;
    classroomImpact: string;
  }[];
  educationalExamplesByTool: {
    tool: string;
    educationalContext: string;
    traditionalWeakPrompt: string;
    pedagogicalStrongPrompt: string;
    whyItTransformsLearning: string;
  }[];
  constructionLogicSteps: {
    step: number;
    name: string;
    description: string;
    guidingQuestion: string;
  }[];
  triangulationPrinciples: {
    title: string;
    subtitle: string;
    description: string;
    protocolSteps: string[];
  }[];
}

export const PROMPT_THEORY_DATA: PromptTheoryData = {
  definition: {
    technical: 'Un prompt es un conjunto estructurado de directivas, restricciones de contexto, parámetros de rol y especificaciones de salida en lenguaje natural que orienta el espacio probabilístico de un modelo de lenguaje hacia un objetivo epistémico determinado.',
    pedagogical: 'En educación, un prompt NO es una pregunta a un oráculo para obtener una respuesta cerrada; es un instrumento didáctico de mediación cognitiva. Define el marco epistemológico con el que el estudiante dialoga, delimita qué fuentes tienen autoridad y establece qué nivel de pensamiento crítico se exige en la respuesta.',
    notAQuestionAnalogy: 'Mientras que buscar en Google es pedir: "Dime la capital de Francia", un prompt pedagógico equivale a: "Actúa como historiador de la Revolución Francesa. Contrasta los decretos de la Asamblea Nacional de 1789 con las proclamas campesinas del Gran Miedo. Cita fuentes primarias y señala una tensión no resuelta sobre la propiedad agraria".'
  },
  pedagogicalPurposes: [
    {
      title: '1. Activador y Desestabilizador Cognitivo (Sparring)',
      description: 'Obligar al estudiante a confrontar sus propios sesgos e hipótesis previas frente a una síntesis estructurada que expone contradicciones.',
      classroomImpact: 'Pasa del consumo pasivo a la interpelación dialógica del texto.'
    },
    {
      title: '2. Andamiaje Gradual (Scaffolding)',
      description: 'Proveer pistas metodológicas escalonadas que sostienen la resolución de problemas complejos sin dar la respuesta final.',
      classroomImpact: 'Fomenta la persistencia y la autonomía autorregulada (zona de desarrollo próximo de Vygotsky).'
    },
    {
      title: '3. Reducción de la Carga de Prototipado',
      description: 'Generar primeros borradores estructurados (casos didácticos, rúbricas analíticas, esquemas curriculares) para que el tiempo docente se concentre en la auditoría y calibración experta.',
      classroomImpact: 'Acorta el tiempo mecánico de redacción y maximiza la deliberación cualitativa.'
    },
    {
      title: '4. Amplificador de Inclusión y Flexibilidad (DUA)',
      description: 'Generar alternativas multimodales de representación (guiones de audio, glosarios visuales, transcripciones) y formatos de evaluación diversificados.',
      classroomImpact: 'Elimina barreras de acceso sensorial y cognitivo para estudiantes neurodivergentes.'
    }
  ],
  educationalExamplesByTool: [
    {
      tool: 'NotebookLM',
      educationalContext: 'Lectura Crítica Comparada de Literatura Académica',
      traditionalWeakPrompt: 'Hazme un resumen de los tres documentos de la carpeta sobre educación.',
      pedagogicalStrongPrompt: 'Con base EXCLUSIVA en las fuentes [UNESCO 2024] y [OCDE 2023] seleccionadas, elabora una matriz comparativa sobre autonomía docente. Identifica un punto de acuerdo empírico con citas textuales y una tensión metodológica no resuelta. Si un dato no está en el texto, indica "No abordado en el corpus".',
      whyItTransformsLearning: 'El prompt débil genera un resumen genérico que fomenta la ilusión de saber; el prompt pedagógico fuerza el cotejo de citas y la identificación de vacíos en las fuentes primarias.'
    },
    {
      tool: 'Perplexity',
      educationalContext: 'Búsqueda Exploratoria y Revisión de Literatura',
      traditionalWeakPrompt: 'Cuáles son los mejores papers sobre IA en universidades.',
      pedagogicalStrongPrompt: 'Focus: Academic. Recupera 5 estudios empíricos (2021-2026) en revistas arbitradas sobre el impacto de la IA en la retención universitaria. Para cada estudio reporta: autores, DOI resoluble, diseño metodológico exacto, tamaño muestral N y la principal limitación que los autores admiten en la Discusión.',
      whyItTransformsLearning: 'El prompt débil devuelve artículos de blog y notas de relaciones públicas; el prompt pedagógico obliga a extraer datos metodológicos y el identificador DOI verificable.'
    },
    {
      tool: 'Microsoft Copilot',
      educationalContext: 'Diseño de Casos Didácticos y Rúbricas en Word',
      traditionalWeakPrompt: 'Escribe un caso sobre pobreza en Colombia y haz una rúbrica.',
      pedagogicalStrongPrompt: 'Actúa como diseñador curricular en políticas públicas. Redacta un caso de 500 palabras sobre la brecha urbano-rural en agua potable en la cuenca del Magdalena utilizando únicamente datos públicos agregados del DANE (Censo 2018 / SUI 2023). Formula 4 preguntas escalonadas (desde análisis descriptivo hasta formulación de política) y una rúbrica analítica en tabla con 3 criterios y 3 niveles de desempeño observables. No inventes cifras ni uses datos confidenciales.',
      whyItTransformsLearning: 'El prompt débil genera cifras ficticias melodramáticas y preguntas memorísticas; el prompt pedagógico genera un artefacto empírico alineado a la taxonomía de Bloom listo para revisión humana.'
    },
    {
      tool: 'ChatGPT & Coursera',
      educationalContext: 'Diseño Instruccional Inclusivo con DUA',
      traditionalWeakPrompt: 'Hazme un examen de 10 preguntas de opción múltiple para mi curso online de finanzas.',
      pedagogicalStrongPrompt: 'Aplica las tres redes del DUA al módulo "Política Fiscal". Diseña: 1) Opciones afectivas: 3 casos situados a elección del estudiante; 2) Representación: desglose en 3 micro-lecciones de 8 minutos con glosario visual y guión; 3) Acción y Expresión: evaluación auténtica con 3 vías de entrega equivalentes (ensayo, podcast o infografía) con rúbrica unificada neutral al formato; 4) System prompt para el Coursera Coach como tutor socrático que no dé respuestas directas.',
      whyItTransformsLearning: 'El prompt débil perpetúa la exclusión memorística; el prompt pedagógico abre opciones perceptuales, motivacionales y de expresión para la diversidad del aula.'
    }
  ],
  constructionLogicSteps: [
    {
      step: 1,
      name: 'Definición de la Intención Epistémica',
      description: 'Determinar qué proceso cognitivo de orden superior se busca activar (describir, contrastar, evaluar validez metodológica, diseñar política pública).',
      guidingQuestion: '¿Qué debe aprender o cuestionar el estudiante con esta interacción, y por qué un resumen simple no es suficiente?'
    },
    {
      step: 2,
      name: 'Delimitación del Contexto y Autoridad de Fuentes',
      description: 'Declarar expresamente qué corpus, bases de datos o normativas tienen validez en la respuesta, y cuáles quedan vetadas.',
      guidingQuestion: '¿De dónde debe extraer la información el modelo: corpus cerrado (NotebookLM), índices académicos (Perplexity) o estadísticas oficiales (Copilot)?'
    },
    {
      step: 3,
      name: 'Asignación de Rol y Postura Dialógica',
      description: 'Situar al modelo en una identidad disciplinar exigente (interlocutor socrático, revisor de pares ciego, metodólogo estadístico).',
      guidingQuestion: '¿Qué estándar de rigor debe asumir la IA para no caer en respuestas complacientes o condescendientes?'
    },
    {
      step: 4,
      name: 'Establecimiento de Restricciones y Anti-Alucinación',
      description: 'Formular cláusulas de exclusión ("si el dato no está en el texto, declara que no está disponible", "no utilices adjetivos melodramáticos", "no inventes porcentajes").',
      guidingQuestion: '¿Qué trampas comunes de los LLM debo bloquear explícitamente antes de que genere la respuesta?'
    },
    {
      step: 5,
      name: 'Parametrización del Formato de Salida y Citas',
      description: 'Especificar la arquitectura del producto final: tabla comparativa, matriz analítica, marcadores de cita con página o secciones fijas.',
      guidingQuestion: '¿En qué estructura exacta debe organizarse la evidencia para facilitar la auditoría humana posterior?'
    }
  ],
  triangulationPrinciples: [
    {
      title: 'Triangulación de Fuentes (Cotejo de Autoridad)',
      subtitle: 'Contraste entre síntesis sintética, corpus cerrado y registro primario',
      description: 'Ninguna afirmación generada por una IA debe darse por válida hasta ser contrastada con el documento fuente original y con datos de bases oficiales.',
      protocolSteps: [
        'Paso A: Extraer la afirmación clave y el marcador de cita generado por la herramienta.',
        'Paso B: Abrir el documento primario mediante el DOI oficial o el visor de NotebookLM y localizar el párrafo exacto.',
        'Paso C: Evaluar si el contexto del párrafo respalda la afirmación o si la IA incurrió en atribución errónea o magnificación de resultados.'
      ]
    },
    {
      title: 'Triangulación de Herramientas (Contraste Inter-Modelo)',
      subtitle: 'Validación cruzada entre motores con diferentes arquitecturas',
      description: 'Someter la misma pregunta de investigación a herramientas con distintos entornos de datos para identificar sesgos algorítmicos.',
      protocolSteps: [
        'Paso A: Formular la pregunta comparativa en NotebookLM (grounding estricto en fuentes seleccionadas).',
        'Paso B: Formular la búsqueda de literatura reciente en Perplexity Academic (búsqueda abierta en CrossRef/Semantic Scholar).',
        'Paso C: Contrastar: ¿Qué autores identifica Perplexity que el corpus de NotebookLM no contemplaba? ¿Qué matices metodológicos preservó NotebookLM que Perplexity aplanó?'
      ]
    },
    {
      title: 'Triangulación de Evaluadores (Juicio Pedagógico Colegiado)',
      subtitle: 'Autoevaluación del alumno, coevaluación entre pares y auditoría docente',
      description: 'La evaluación del aprendizaje asistido por IA no puede basarse en calificar el texto final, sino en auditar la bitácora de prompts, las correcciones del alumno y su defensa oral.',
      protocolSteps: [
        'Paso A (Autoevaluación): El estudiante entrega su matriz comentada señalando qué corrigió de la IA y por qué.',
        'Paso B (Coevaluación): Un compañero audita dos citas de la matriz verificando si el alumno cotejó fielmente el DOI en el PDF original.',
        'Paso C (Auditoría Docente): El profesor evalúa la profundidad del juicio crítico y la capacidad de detectar tensiones epistemológicas.'
      ]
    }
  ]
};

export const TOOL_PROMPT_PIPELINES: Record<string, ToolPromptPipeline> = {
  notebooklm: {
    toolId: 'notebooklm',
    toolName: 'NotebookLM',
    pedagogicalRole: 'Entorno de Conversación y Lectura Dialógica con Corpus Cerrado',
    stages: [
      {
        stageNumber: 1,
        stageName: 'Etapa 1: Mapeo y Lectura Estructural del Corpus',
        stageGoal: 'Obtener un panorama analítico de los documentos activos identificando sus tesis centrales y metodologías sin delegar la lectura comprensiva.',
        readyToUsePrompt: `Actúa como asistente de lectura dialógica para posgrado.
Con base EXCLUSIVA en las fuentes seleccionadas en este cuaderno:
1. Identifica la tesis central de cada autor respecto a [Tema, ej. Inteligencia Artificial y Equidad Educativa].
2. Señala qué tipo de evidencia empírica utiliza cada documento (ej. encuestas a docentes, estadísticas macroeconómicas de conectividad, marcos de derechos humanos).
3. Elabora una tabla que sintetice: Documento | Autor | Tesis Principal | Tipo de Evidencia | Año.
Restricción: Cita la sección o página exacta entre corchetes para cada tesis. Si una fuente no presenta evidencia empírica directa, indícalo expresamente.`,
        expectedAiOutput: `Generación de una tabla estructurada de 3 columnas que desglosa a la UNESCO (2024, enfoque de derechos humanos y soberanía de datos), a la OCDE (2023, analítica cuantitativa de retención y productividad) y a la CEPAL (2024, brechas territoriales y de infraestructura material). Cada afirmación va acompañada de su cita [UNESCO p. 18], [OCDE p. 12], [CEPAL p. 14].`,
        studentCriticalAction: 'El estudiante debe abrir cada cita numerada en el visor lateral del cuaderno para verificar que la "tesis central" reportada por NotebookLM no esté descontextualizada ni confunda una opinión del autor con un hallazgo comprobado.',
        evaluationChecklist: [
          '¿Cada tesis está vinculada a una cita directa con página?',
          '¿Se diferenció entre marcos ético-normativos y estudios empíricos cuantitativos?',
          '¿El estudiante comprobó al menos 2 citas abriendo el documento fuente?'
        ]
      },
      {
        stageNumber: 2,
        stageName: 'Etapa 2: Contraste Dialógico y Detección de Discrepancias',
        stageGoal: 'Forzar al modelo a aislar puntos donde los autores entran en conflicto o sostienen prioridades incompatibles.',
        readyToUsePrompt: `Analiza las fuentes [UNESCO 2024] y [OCDE 2023].
Pregunta de Contraste: ¿Cómo definen y evalúan ambos organismos el "ahorro de tiempo docente" y la "productividad" mediante sistemas de IA?
Estructura de respuesta obligatoria:
- Punto de Convergencia: ¿En qué advertencia pedagógica coinciden ambos textos?
- Tensión / Conflicto Abierto: ¿En qué difieren respecto al valor irreductible del tiempo de interacción humana vs la automatización de la evaluación?
- Citas de Respaldo: Incluye citas textuales breves de ambos autores con número de página.
Restricción: NO intentes conciliar las posturas. Si un organismo prioriza la eficiencia de mercado y el otro la mediación afectiva, resalta esa contradicción de fondo.`,
        expectedAiOutput: `La IA identifica que mientras la OCDE reporta que la IA puede reducir hasta un 38% el tiempo de evaluación formativa para redirigirlo a mentorías (OCDE p. 12), la UNESCO advierte que automatizar la evaluación pone en riesgo la deliberación reflexiva y promueve una falsa certeza epistemológica (UNESCO p. 32). Concluye destacando la tensión entre eficiencia económica y soberanía pedagógica.`,
        studentCriticalAction: 'El estudiante debe formular una reflexión personal en su matriz: ¿Es deseable automatizar la retroalimentación al 38%? ¿Qué dimensiones humanas se pierden en esa automatización?',
        evaluationChecklist: [
          '¿Se identificó una tensión genuina de principios y no solo una diferencia de palabras?',
          '¿Se evitaron los resúmenes armonizadores que borran el conflicto académico?',
          '¿Las citas textuales reflejan fielmente el espíritu del capítulo correspondiente?'
        ]
      },
      {
        stageNumber: 3,
        stageName: 'Etapa 3: Identificación de Vacíos Epistémicos y Sesgos',
        stageGoal: 'Detectar lo que los autores NO dicen: omisiones metodológicas, sesgos geográficos o poblaciones desatendidas.',
        readyToUsePrompt: `Examina con lupa crítica las tres fuentes del cuaderno ([UNESCO], [OCDE], [CEPAL]).
Responde las siguientes tres preguntas de omisión:
1. ¿Qué condiciones laborales concretas del profesorado universitario (sobrecarga horaria, falta de formación previa, precarización salarial) son omitidas al asumir que el docente auditará permanentemente las respuestas de la IA?
2. ¿Qué sesgos geográficos o de financiamiento corporativo se evidencian en los estudios empíricos citados por la OCDE frente a la realidad rural descrita por la CEPAL?
3. Formula dos preguntas críticas que un investigador del Sur Global debería plantear a estos documentos para no adoptar sus conclusiones acríticamente.`,
        expectedAiOutput: `La IA reconoce que los informes de la OCDE presuponen una infraestructura ideal y docentes con tiempo disponible para la personalización, ignorando que en muchas universidades públicas los profesores atienden a más de 200 estudiantes sin apoyo técnico. Señala además que el 43.6% de las escuelas rurales carece de internet estable (CEPAL p. 14), invalidando la premisa de adopción universal de modelos en la nube.`,
        studentCriticalAction: 'El estudiante redacta el apartado "Vacío Epistémico" en su matriz comentada, proponiendo una variable que los organismos internacionales pasaron por alto.',
        evaluationChecklist: [
          '¿Se identificó al menos una población o contexto material excluido de los estudios?',
          '¿Se cuestionaron los supuestos tecnológicos implícitos de los organismos del Norte Global?',
          '¿Las preguntas formuladas demuestran pensamiento crítico de nivel superior?'
        ]
      },
      {
        stageNumber: 4,
        stageName: 'Etapa 4: Construcción de la Matriz Crítica Comentada',
        stageGoal: 'Consolidar la evidencia de aprendizaje final donde el alumno califica la fidelidad de la IA y amplía el análisis.',
        readyToUsePrompt: `Genera una tabla de síntesis procesual para ser auditada por un estudiante de posgrado.
Columnas requeridas:
1. Eje Temático (ej. Agencia del Estudiante, Eficiencia Docente, Brecha Territorial).
2. Afirmación Sintética generada por la IA.
3. Referencia del Corpus [Autor, Pág.].
4. Veredicto sugerido de Fidelidad (Fiel / Parcial / Sesgada).
5. Pregunta Guía para que el estudiante corrija o amplíe la afirmación basándose en su lectura del texto completo.`,
        expectedAiOutput: `Una matriz tabular de 4 filas con los ejes temáticos centrales, afirmaciones directas de la IA y preguntas de interpelación que dejan abierta la columna de corrección humana del estudiante.`,
        studentCriticalAction: 'El estudiante copia la tabla a la sección interactiva de la aplicación o a su procesador de texto, edita la columna "Corrección del Estudiante", aporta argumentos propios y exporta la matriz como evidencia evaluable.',
        evaluationChecklist: [
          '¿El estudiante corrigió o enriqueció al menos una afirmación de la IA?',
          '¿Se evaluó rigurosamente la categoría de fidelidad de cada cita?',
          '¿La matriz demuestra lectura personal del texto y no mera transcripción algorítmica?'
        ]
      }
    ],
    triangulationProtocol: {
      dataSourcesToCross: [
        'Respuesta generada por NotebookLM',
        'Párrafo original en el visor de documentos de NotebookLM (PDF/Doc)',
        'Informe completo oficial descargado de la fuente primaria (UNESCO / OCDE / CEPAL)'
      ],
      verificationMethod: 'Verificación de fidelidad contextual: El evaluador revisa si la cita entre corchetes [1] corresponde efectivamente a la página señalada y si el argumento no fue recortado para acomodar una respuesta artificialmente armónica.',
      humanJudgmentRole: 'El docente no califica el resumen de NotebookLM; califica la calidad de la corrección y ampliación que el estudiante escribió en la columna de la matriz.',
      rubricCriteria: [
        {
          dimension: 'Cotejo y Fidelidad de Citas',
          weight: '30%',
          observableEvidence: 'Las citas indican página exacta y el estudiante detectó si hubo distorsión o simplificación excesiva de la fuente original.'
        },
        {
          dimension: 'Identificación de Tensiones y Vacíos',
          weight: '40%',
          observableEvidence: 'El análisis distingue con claridad acuerdos empíricos de tensiones epistemológicas y formula omisiones metodológicas reales.'
        },
        {
          dimension: 'Ampliación Crítica del Estudiante',
          weight: '30%',
          observableEvidence: 'La columna de corrección humana aporta argumentos teóricos de la disciplina, contextualizando los hallazgos a la realidad local.'
        }
      ]
    }
  },

  perplexity: {
    toolId: 'perplexity',
    toolName: 'Perplexity AI',
    pedagogicalRole: 'Motor de Descubrimiento Exploratorio y Recuperación de Fuentes Primarias con DOI',
    stages: [
      {
        stageNumber: 1,
        stageName: 'Etapa 1: Descubrimiento y Mapeo Conceptual Exploratorio',
        stageGoal: 'Mapear la frontera del conocimiento y las palabras clave indexadas para una pregunta de investigación sin confundirlo con una revisión exhaustiva.',
        readyToUsePrompt: `Focus: Academic.
Actúa como metodólogo de investigación formativa.
Pregunta: ¿Cuáles son las principales líneas de investigación empírica publicadas entre 2022 y 2026 sobre la eficacia de la retroalimentación formativa inmediata generada por IA en educación superior?
Requisitos:
1. Agrupa los hallazgos en tres corrientes conceptuales predominantes.
2. Cita al menos dos artículos clave revisados por pares para cada corriente, incluyendo autores, año y revista indexada.
3. Identifica qué términos MeSH / ERIC se utilizan con mayor frecuencia para indexar estos estudios.
Restricción: No cites artículos de blogs comerciales ni notas de prensa de empresas tecnológicas.`,
        expectedAiOutput: `Perplexity organiza la literatura en 3 corrientes: 1) Corriente psicométrica/rendimiento (mejora en calificaciones inmediatas), 2) Corriente de motivación y autorregulación (efecto novedad vs persistencia a largo plazo), y 3) Corriente de sobrecarga cognitiva y atrofia crítica. Incluye 6 referencias académicas enlazadas con nombres de revistas (Computers & Education, BJET, etc.).`,
        studentCriticalAction: 'El estudiante debe seleccionar los descriptores identificados (ej. "automated formative feedback", "self-regulated learning", "cognitive offloading") para construir su futura ecuación booleana formal.',
        evaluationChecklist: [
          '¿Los resultados provienen de revistas académicas y no de blogs comerciales?',
          '¿Se identificaron descriptores estandarizados para afinar la búsqueda?',
          '¿El estudiante comprende que este es solo un paso de descubrimiento exploratorio?'
        ]
      },
      {
        stageNumber: 2,
        stageName: 'Etapa 2: Extracción Metodológica y Criterios PICOS',
        stageGoal: 'Obligar a Perplexity a reportar los parámetros metodológicos de los artículos candidatos para aplicar criterios de inclusión.',
        readyToUsePrompt: `Focus: Academic.
Para los siguientes temas de investigación: [Tema], recupera 4 estudios empíricos publicados entre 2022 y 2026 en revistas Q1 o Q2 (Scopus / WoS).
Para CADA estudio, extrae obligatoriamente los siguientes componentes del marco PICOS:
- Población (P): ¿Quiénes fueron los participantes (tamaño muestral N, país, carrera universitaria)?
- Intervención (I): ¿Qué herramienta exacta de IA se evaluó y durante cuántas semanas?
- Comparador (C): ¿Existió grupo de control con retroalimentación docente tradicional o no hubo grupo comparativo?
- Resultados (O - Outcomes): ¿Qué variable cuantitativa se midió (calificaciones, retención, deserción) y qué valor p o tamaño de efecto se obtuvo?
- Diseño (S - Study design): ¿Ensayo controlado aleatorizado, cuasiexperimento o estudio descriptivo de percepción?
Incluye obligatoriamente el DOI oficial enlazable de cada estudio.`,
        expectedAiOutput: `Una tabla con 4 estudios desglosados en P, I, C, O, S. Por ejemplo, en el Estudio 1 muestra: N=38 estudiantes de ingeniería (P), tutor de IA durante 4 semanas (I), grupo control con feedback docente (C), incremento de 14% en precisión sintáctica con p=0.03 pero sin cambio en coherencia (O), cuasiexperimento (S), con DOI resoluble.`,
        studentCriticalAction: 'El estudiante evalúa los criterios de elegibilidad: si su propia investigación se enfoca en ciencias sociales con muestras masivas, descarta los estudios que tuvieron muestras pequeñas de ingeniería (N=38).',
        evaluationChecklist: [
          '¿Se extrajeron los 5 componentes PICOS para cada candidato?',
          '¿El estudiante detectó qué estudios carecen de grupo de control?',
          '¿Se verificó que los DOIs correspondan a revistas indexadas formales?'
        ]
      },
      {
        stageNumber: 3,
        stageName: 'Etapa 3: Auditoría de Fuente Primaria y DOI',
        stageGoal: 'Verificar si la síntesis de Perplexity coincide con los datos reales reportados en la sección de Resultados del PDF original.',
        readyToUsePrompt: `Analiza a texto completo el artículo con DOI: [Pegar DOI, ej. 10.1016/j.compedu.2024.105120].
Responde con máxima precisión empírica:
1. ¿Cuál fue la tasa exacta de abandono o deserción de participantes durante el experimento?
2. En la sección de "Limitaciones" o "Discusión", ¿qué advierten textualmente los autores sobre la generalización de sus hallazgos?
3. ¿Hubo algún conflicto de interés reportado por financiamiento corporativo de la herramienta evaluada?
4. Cita textualmente la frase donde los autores definen si el efecto se mantuvo en el tiempo o si decayó al finalizar el semestre.`,
        expectedAiOutput: `Perplexity extrae del texto completo que el estudio sufrió un 21% de abandono de participantes, que los autores declaran que los resultados no son generalizables a humanidades, y que la motivación decayó a partir de la semana 8 (efecto novedad).`,
        studentCriticalAction: 'El estudiante descarga el PDF a través de la biblioteca universitaria o repositorio abierto, busca el párrafo citado y coteja que no haya distorsión interpretativa.',
        evaluationChecklist: [
          '¿Se comprobó la tasa de abandono y las limitaciones en el PDF original?',
          '¿El estudiante detectó discrepancias entre el resumen optimista de la IA y los datos fríos del paper?',
          '¿Se registró el DOI en el gestor bibliográfico institucional?'
        ]
      },
      {
        stageNumber: 4,
        stageName: 'Etapa 4: Síntesis Preliminar y Evaluación del Riesgo de Sesgo',
        stageGoal: 'Aplicar criterios formales de calidad metodológica (CASP / RoB-2) para determinar qué estudios son evidencia utilizable.',
        readyToUsePrompt: `Actúa como auditor de revisiones sistemáticas PRISMA.
A partir de los 4 artículos analizados previamente:
1. Aplica un checklist abreviado de riesgo de sesgo (tipo CASP):
   - ¿El diseño fue ciego o de doble ciego?
   - ¿Se controlaron las variables confusoras (nivel socioeconómico, competencia digital previa)?
   - ¿El instrumento de medición fue validado psicométricamente?
2. Clasifica cada estudio en: [Riesgo de Sesgo Bajo / Moderado / Alto].
3. Conclusión Metodológica: Explica por qué este conjunto de artículos es INSUFICIENTE para formular una política universitaria universal sin antes realizar una réplica local.`,
        expectedAiOutput: `Una matriz de evaluación de calidad que clasifica 2 estudios con "Riesgo Moderado" por falta de asignación aleatoria y 1 estudio con "Riesgo Alto" por muestra por conveniencia autorreferencial. Concluye señalando que la evidencia actual es exploratoria y carece de validez ecológica para justificar compras de software a gran escala.`,
        studentCriticalAction: 'El estudiante redacta el balance metodológico en su trabajo de investigación, justificando por qué no se debe aceptar ciegamente la recomendación de una herramienta de búsqueda como Perplexity.',
        evaluationChecklist: [
          '¿Se aplicó una herramienta estandarizada de riesgo de sesgo?',
          '¿Se evitó transformar correlaciones preliminares en verdades absolutas?',
          '¿El informe final documenta el embudo completo desde el descubrimiento hasta la evidencia filtrada?'
        ]
      }
    ],
    triangulationProtocol: {
      dataSourcesToCross: [
        'Respuesta generada por Perplexity Academic',
        'Registro oficial de metadatos en CrossRef / PubMed / Semantic Scholar',
        'PDF original del artículo a texto completo descargado mediante el DOI',
        'Búsqueda de control en Scopus o Web of Science para verificar cobertura'
      ],
      verificationMethod: 'Auditoría del DOI y de la sección de Resultados: Cotejar que los valores de significancia (p-values) y el tamaño muestral reportados por Perplexity coincidan exactamente con las tablas numéricas del artículo original.',
      humanJudgmentRole: 'El docente evalúa si el estudiante fue capaz de desenmascarar las conclusiones infladas de la IA y descartar estudios metodológicamente débiles.',
      rubricCriteria: [
        {
          dimension: 'Trazabilidad y Verificación de DOIs',
          weight: '30%',
          observableEvidence: 'El 100% de las fuentes cuenta con DOI oficial resoluble y el estudiante comprobó su vigencia en CrossRef.'
        },
        {
          dimension: 'Rigor en la Extracción Metodológica (PICOS)',
          weight: '40%',
          observableEvidence: 'Se reportan con exactitud muestras reales, grupos de control y limitaciones admitidas por los autores sin sesgos de magnificación.'
        },
        {
          dimension: 'Evaluación Crítica del Riesgo de Sesgo',
          weight: '30%',
          observableEvidence: 'El estudiante aplicó una lista de control (CASP/RoB) y justificó por qué ciertos estudios no tienen peso probatorio suficiente.'
        }
      ]
    }
  },

  copilot: {
    toolId: 'copilot',
    toolName: 'Microsoft Copilot en Word',
    pedagogicalRole: 'Asistente de Prototipado Curricular, Casos Didácticos y Rúbricas Analíticas con Gobernanza',
    stages: [
      {
        stageNumber: 1,
        stageName: 'Etapa 1: Prototipado del Caso Didáctico con Datos Públicos',
        stageGoal: 'Generar en Microsoft Word un primer borrador de caso situado basado exclusivamente en estadísticas públicas abiertas agregadas.',
        readyToUsePrompt: `Actúa como diseñador instruccional universitario senior en Ciencias Sociales y Economía.
Redacta en formato Microsoft Word una actividad basada en casos para estudiantes de 5º semestre:
- Resultado de Aprendizaje: "Analizar cómo las desigualdades territoriales y la capacidad fiscal municipal determinan el acceso a bienes públicos esenciales".
- Narrativa del Caso (500 palabras): Contrasta dos municipios de la cuenca del Magdalena (uno urbano consolidado y otro rural anfibio) utilizando ÚNICAMENTE datos públicos agregados de libre acceso del DANE (Censo 2018 / GEIH 2023) y la Superintendencia de Servicios Públicos.
- Regla de Oro: Prohibido inventar cifras de cobertura o ingresos. Cita las métricas oficiales reales (IRCA, continuidad de servicio, índice de pobreza multidimensional IPM).
- Gobernanza de Datos: No utilices nombres de empresas reales ni datos de personas físicas identificables.`,
        expectedAiOutput: `Copilot genera en Word un texto de 500 palabras estructurado en introducción, contraste territorial entre dos municipios y la tensión presupuestaria que enfrenta la alcaldía para financiar obras de acueducto con recursos del Sistema General de Regalías (SGR).`,
        studentCriticalAction: 'El estudiante o docente abre el portal de datos abiertos del DANE o el visor del SUI-SSPD para verificar que las coberturas y porcentajes de pobreza reportados por Copilot coincidan con las tablas oficiales del censo.',
        evaluationChecklist: [
          '¿Los datos provienen de fuentes públicas oficiales verificables?',
          '¿Se evitó el ingreso de información sensible o privada de estudiantes?',
          '¿El caso plantea un problema multidimensional real y no una simplificación caricaturesca?'
        ]
      },
      {
        stageNumber: 2,
        stageName: 'Etapa 2: Formulación de Preguntas de Indagación Progresiva (Bloom)',
        stageGoal: 'Elevar la exigencia cognitiva de las preguntas para movilizar procesos de análisis, evaluación y diseño de políticas.',
        readyToUsePrompt: `Con base en el caso de estudio redactado en el paso anterior:
Formula una batería de 4 preguntas de indagación socrática progresiva calibradas según la Taxonomía de Bloom revisada:
1. Pregunta 1 (Nivel Comprensión/Aplicación): Relacionar espacialmente las variables de continuidad del servicio con el gasto de bolsillo de los hogares más vulnerables.
2. Pregunta 2 (Nivel Análisis Causal): Explicar por qué el esquema de subsidios cruzados de la Ley 142 de 1994 falla en municipios con más del 70% de usuarios en estrato 1 y baja presencia de estratos altos.
3. Pregunta 3 (Nivel Evaluación Crítica): Evaluar las restricciones institucionales y técnicas que impiden a un municipio rural estructurar proyectos viables ante el OCAD Paz o el SGR.
4. Pregunta 4 (Nivel Creación/Propuesta): Diseñar una propuesta viable de solución comunitaria descentralizada que no dependa exclusivamente de la extensión de redes convencionales.
Restricción: Elimina cualquier pregunta cuya respuesta consista simplemente en copiar y pegar un número ya explícito en el texto.`,
        expectedAiOutput: `4 preguntas redactadas con verbos de acción cognitiva de orden superior (Modelar, Justificar causalmente, Evaluar restricciones, Diseñar propuesta situada), desarticulando las preguntas memorísticas superficiales.`,
        studentCriticalAction: 'El estudiante ensaya la resolución de una de las preguntas complejas y verifica si el caso aporta insumos suficientes o si requiere buscar fuentes complementarias de legislación pública.',
        evaluationChecklist: [
          '¿Las preguntas demandan análisis causal y no mera recuperación memorística?',
          '¿Se escalonó la dificultad de forma progresiva?',
          '¿La pregunta de creación exige justificación técnica y fiscal?'
        ]
      },
      {
        stageNumber: 3,
        stageName: 'Etapa 3: Construcción de la Rúbrica Analítica Calibrada',
        stageGoal: 'Generar una matriz de evaluación transparente con descriptores observables y ponderaciones equilibradas.',
        readyToUsePrompt: `Diseña una tabla de Rúbrica Analítica en formato Word para evaluar las respuestas del caso anterior.
Estructura de la tabla:
- Filas: 3 Criterios de fondo ponderados:
  * Criterio 1: Uso e Interpretación de Evidencia Empírica (Ponderación: 30%).
  * Criterio 2: Análisis Institucional y Comprensión Normativa (Ponderación: 40%).
  * Criterio 3: Viabilidad y Pertinencia de la Propuesta de Política (Ponderación: 30%).
- Columnas: 3 Niveles de desempeño cualitativo:
  * Nivel 1: Inicial / Insuficiente (demuestra fallas conceptuales o repite datos sin análisis).
  * Nivel 2: Autónomo / Competente (aplica correctamente los conceptos normativos y fiscables).
  * Nivel 3: Estratégico / Ejemplar (articula evidencia, normativa y propone soluciones viables y contextualizadas).
Restricción: Prohibido usar descriptores vagos como "buena redacción", "excelente trabajo" o "hace un análisis adecuado". Describe conductas observables de aprendizaje.`,
        expectedAiOutput: `Una tabla de rúbrica en Word con descriptores operacionales rigurosos. Por ejemplo, en el nivel Estratégico del Criterio 2 describe: "Articula con precisión la Ley de Servicios Públicos con las restricciones del SGR y calcula la carga del gasto de bolsillo frente al umbral de asequibilidad de la OMS (<3% del ingreso)".`,
        studentCriticalAction: 'El docente verifica si los porcentajes de la rúbrica reflejan los resultados de aprendizaje previstos en el currículo oficial y si los estudiantes pueden autoevaluarse con ella antes de la entrega final.',
        evaluationChecklist: [
          '¿Los descriptores son observables y libres de adjetivos subjetivos vagos?',
          '¿La suma de los criterios ponderados equivale al 100%?',
          '¿La rúbrica premia el razonamiento crítico con evidencia y no el volumen de texto?'
        ]
      },
      {
        stageNumber: 4,
        stageName: 'Etapa 4: Auditoría de 5 Dimensiones y Depuración del Borrador',
        stageGoal: 'Aplicar el protocolo de revisión humana docente antes de publicar el material curricular en el aula.',
        readyToUsePrompt: `Actúa como revisor curricular crítico. Audita el caso y la rúbrica elaborados en los pasos anteriores mediante esta lista de 5 dimensiones:
1. Cifras y Datos: ¿Se deslizó alguna cifra ficticia o porcentaje exagerado no atribuible a fuentes oficiales?
2. Lenguaje y Tono: ¿Existe algún adjetivo melodramático, paternalista o sensacionalista? Sustitúyelo por lenguaje académico neutro de las ciencias sociales.
3. Nivel de Bloom: ¿Alguna pregunta puede resolverse con simple copia mecánica?
4. Sesgos: ¿Se estigmatiza a la población vulnerable presentándola únicamente como receptora pasiva o conflictiva?
5. Coherencia Curricular: ¿La rúbrica califica exactamente lo que las 4 preguntas demandan responder?
Entrega la versión definitiva curada v2 con los ajustes resaltados.`,
        expectedAiOutput: `Copilot entrega el texto depurado, habiendo eliminado expresiones como "condiciones infrahumanas" y reemplazándolas por "indicadores de riesgo IRCA no apto para consumo humano", y ajustando la rúbrica para alinearla estrictamente con las 4 preguntas de indagación.`,
        studentCriticalAction: 'El docente compara la Versión 1 (Borrador bruto de Copilot) frente a la Versión 2 (Curada por el experto humano) e incorpora la rutina en su práctica cotidiana.',
        evaluationChecklist: [
          '¿Se depuraron los clichés sensacionalistas del lenguaje de la IA?',
          '¿Se verificó la coherencia entre las preguntas del caso y los criterios de la rúbrica?',
          '¿El docente asumió la autoría y responsabilidad final del material?'
        ]
      }
    ],
    triangulationProtocol: {
      dataSourcesToCross: [
        'Borrador inicial generado por Copilot en Microsoft Word',
        'Bases oficiales de datos abiertos del DANE, Banco Mundial, CEPAL o ministerios',
        'Programa curricular oficial y resultados de aprendizaje aprobados de la asignatura',
        'Respuestas reales obtenidas de los estudiantes en la primera cohorte de aplicación'
      ],
      verificationMethod: 'Auditoría en 5 Dimensiones (Cifras, Lenguaje, Bloom, Sesgos, Coherencia): Comparación sistemática antes de publicar el documento en el aula virtual.',
      humanJudgmentRole: 'La productividad docente reside en recortar el tiempo de prototipado mecánico para dedicarlo a la calibración de la rúbrica y a la retroalimentación formativa de los estudiantes.',
      rubricCriteria: [
        {
          dimension: 'Verificación Empírica de Datos Abiertos',
          weight: '30%',
          observableEvidence: 'El caso utiliza indicadores oficiales reales (DANE/CEPAL) con año y metodología citables, sin alucinaciones numéricas.'
        },
        {
          dimension: 'Alineación Taxonómica de Bloom',
          weight: '35%',
          observableEvidence: 'Las preguntas exigen formulación de hipótesis, modelado de causalidad y propuesta de políticas fundamentadas.'
        },
        {
          dimension: 'Operatividad de la Rúbrica Analítica',
          weight: '35%',
          observableEvidence: 'Los descriptores de desempeño son observables, eliminan la subjetividad ambigua y permiten la autoevaluación transparente.'
        }
      ]
    }
  },

  dua: {
    toolId: 'dua',
    toolName: 'ChatGPT & Coursera (DUA / CAST)',
    pedagogicalRole: 'Diseño Instruccional Inclusivo, Tutoría Socrática y Arquitectura de Cursos Virtuales Multimodales',
    stages: [
      {
        stageNumber: 1,
        stageName: 'Etapa 1: Diagnóstico de Barreras y Deconstrucción en Micro-Lecciones (Representación)',
        stageGoal: 'Transformar una lección monolítica tradicional densa en píldoras formativas accesibles bajo el principio de múltiples formas de representación.',
        readyToUsePrompt: `Actúa como diseñador instruccional experto en DUA (CAST) y Coursera Course Builder.
Tengo el siguiente tema curricular denso: "[Nombre del Tema, ej. Política Fiscal, Multiplicador Keynesiano y Presupuesto Público]".
1. Diagnostica 3 barreras perceptuales y cognitivas que enfrentaría un estudiante si este tema se presenta únicamente como un PDF de 40 páginas y un video de 60 minutos.
2. Deconstruye el tema en 3 micro-lecciones de máximo 7 a 9 minutos cada una.
3. Para cada micro-lección genera:
   - Título y resultado de aprendizaje específico.
   - Guión esquematizado en 3 bloques conceptuales con marcas de tiempo [00:00 - 03:00], [03:00 - 06:00], [06:00 - 08:30].
   - Dos analogías cotidianas para explicar los términos matemáticos más abstractos.
   - Descripción del texto alternativo accesible (Alt-Text) para los gráficos de curvas fiscales.`,
        expectedAiOutput: `ChatGPT identifica las barreras (fatiga en memoria de trabajo, inaccesibilidad para lectores de pantalla, sobrecarga conceptual) y descompone el tema en 3 cápsulas breves de 8 min: 1) El Flujo Circular y el Gasto Público, 2) La Mecánica del Multiplicador, y 3) Restricciones Presupuestarias y Déficit. Incluye analogías claras (ej. el multiplicador como el efecto dominó en una economía de barrio) y Alt-Text descriptivo para diagramas.`,
        studentCriticalAction: 'El docente o diseñador instruccional carga esta estructura en Coursera Course Builder, asegurando que la duración de los videos no exceda los 9 minutos recomendados.',
        evaluationChecklist: [
          '¿Los videos respetan el tope de 7 a 9 minutos para evitar la fatiga cognitiva?',
          '¿Se incluyeron transcripciones interactivas y textos descriptivos en imágenes?',
          '¿Las analogías facilitan la decodificación de conceptos abstractos?'
        ]
      },
      {
        stageNumber: 2,
        stageName: 'Etapa 2: Creación de Opciones de Compromiso y Autonomía Afectiva',
        stageGoal: 'Diseñar opciones contextuales para captar el interés personal del estudiante y promover la autorregulación.',
        readyToUsePrompt: `Aplica el Principio I del DUA (Múltiples Formas de Compromiso / Redes Afectivas) al curso virtual:
1. Diseña tres contextos auténticos distintos para que el estudiante elija cuál resolver en su proyecto de aplicación:
   - Opción A: Análisis fiscal del sistema de pensiones en un país con envejecimiento demográfico acelerado.
   - Opción B: Impacto económico de impuestos a bebidas azucaradas y alimentos ultraprocesados en la salud pública.
   - Opción C: Subsidios al transporte público masivo y transición energética en ciudades intermedias.
2. Diseña una actividad de autoevaluación metacognitiva semanal de 3 preguntas para que el estudiante monitoree su perseverancia y estrategias de estudio.
3. Formula un mensaje motivacional empático para cuando la plataforma detecte que un alumno lleva 5 días sin ingresar al curso.`,
        expectedAiOutput: `3 escenarios contextualizados con preguntas orientadoras equivalentes en rigor, una plantilla de bitácora de autorregulación de 3 minutos, y un correo automatizado en Coursera centrado en el bienestar del estudiante y no en el tono punitivo.`,
        studentCriticalAction: 'El estudiante ejerce su autonomía eligiendo el tema que mayor significado tenga para su vocación profesional, aumentando su motivación intrínseca.',
        evaluationChecklist: [
          '¿Los tres escenarios son equivalentes en dificultad y rigor analítico?',
          '¿Se incorporaron herramientas de autoevaluación del esfuerzo y la autorregulación?',
          '¿La comunicación fomenta un clima emocional de seguridad para aprender del error?'
        ]
      },
      {
        stageNumber: 3,
        stageName: 'Etapa 3: Configuración del Coursera Coach Socrático',
        stageGoal: 'Parametrizar el tutor de IA de Coursera para que andamie el aprendizaje sin resolver las evaluaciones de los estudiantes.',
        readyToUsePrompt: `Redacta el System Prompt oficial para el "Coursera Coach" del curso.
El Coach debe operar bajo las directivas pedagógicas del DUA:
- Identidad: Tutor socrático empático que celebra la perseverancia y el razonamiento.
- Regla de Oro: NUNCA des la respuesta correcta a ejercicios de práctica ni resuelvas las evaluaciones sumativas. Si el alumno te pregunta "¿Cuál es la respuesta de la pregunta 2?", responde con una pista conceptual que lo remita a la micro-lección correspondiente.
- Andamiaje Gradual:
  * Si el estudiante comete un error, señala la etapa del razonamiento donde se produjo la desviación sin calificar de forma negativa.
  * Formula una pregunta guía breve que le permita darse cuenta de su propio error.
- Tono: Cálido, alentador y centrado en la metacognición. Concluye siempre preguntando: "¿Qué estrategia probaste antes y qué cambiarías ahora?".`,
        expectedAiOutput: `Un bloque de System Prompt de 250 palabras listo para ser pegado en la sección de configuración de Coursera Coach en la consola de autoría de la universidad.`,
        studentCriticalAction: 'El estudiante interactúa con el Coach cuando tiene dudas en un ejercicio, experimentando una guía reflexiva que fortalece su pensamiento crítico en lugar de un atajo que anula el esfuerzo.',
        evaluationChecklist: [
          '¿El Coach respeta la prohibición de dar la respuesta directa?',
          '¿Las pistas que brinda estimulan la metacognición del estudiante?',
          '¿El tono es empático y alineado con las redes afectivas del DUA?'
        ]
      },
      {
        stageNumber: 4,
        stageName: 'Etapa 4: Matriz de Evaluación Multimodal Equivalente (Acción y Expresión)',
        stageGoal: 'Permitir al estudiante demostrar lo que sabe mediante múltiples medios de expresión con una rúbrica analítica unificada neutral al formato.',
        readyToUsePrompt: `Aplica el Principio III del DUA (Múltiples Formas de Acción y Expresión / Redes Estratégicas):
1. Diseña una actividad integradora final donde el estudiante demuestre el dominio del resultado de aprendizaje eligiendo UNA de tres modalidades de entrega equivalentes:
   - Modalidad A (Escrita): Dictamen ejecutivo de política fiscal de 1200 palabras con tablas de datos.
   - Modalidad B (Audiovisual/Oral): Podcast analítico o video explicativo de 5 minutos con guión metodológico adjunto.
   - Modalidad C (Visual/Interactiva): Tablero de datos o infografía analítica estructurada con reporte explicativo de 500 palabras.
2. Elabora una Rúbrica Analítica Única basada exclusivamente en criterios de fondo (profundidad argumentativa, uso de datos empíricos, coherencia de la propuesta) que sea neutral respecto al formato elegido.
3. Diseña una lista de verificación ejecutiva (Checklist) para que el estudiante planifique su tiempo de entrega en 3 hitos intermedios.`,
        expectedAiOutput: `Las instrucciones de entrega multimodal con especificaciones técnicas equivalentes, una rúbrica unificada de 3 criterios con descriptores de fondo, y un cronograma de hitos para la gestión del tiempo y las funciones ejecutivas.`,
        studentCriticalAction: 'El estudiante con dificultades motrices o dislexia puede elegir grabar un podcast de alto rigor, mientras que otro estudiante puede optar por el ensayo o la infografía, siendo evaluados con la misma exigencia de rigor disciplinar.',
        evaluationChecklist: [
          '¿Las tres modalidades de entrega tienen la misma exigencia de aprendizaje?',
          '¿La rúbrica califica el razonamiento disciplinar y no el virtuosismo técnico del formato?',
          '¿Se proporcionaron listas de verificación para apoyar las funciones ejecutivas?'
        ]
      }
    ],
    triangulationProtocol: {
      dataSourcesToCross: [
        'Estructura de micro-lecciones generada en ChatGPT',
        'Analítica de visualización y permanencia en Coursera (retención por video)',
        'Registros agregados de dudas frecuentes y pistas en el Coursera Coach',
        'Evaluaciones entregadas por los estudiantes en las 3 modalidades multimodales'
      ],
      verificationMethod: 'Triangulación de Accesibilidad y Desempeño: Auditar si las tasas de aprobación y satisfacción son equitativas entre quienes entregaron ensayo, podcast o infografía, asegurando que ninguna modalidad otorgue una ventaja artificial.',
      humanJudgmentRole: 'El docente humano revisa periódicamente las transcripciones del Coach para detectar si hay conceptos que requieren un video explicativo de refuerzo, manteniendo la mediación pedagógica central.',
      rubricCriteria: [
        {
          dimension: 'Accesibilidad y Variabilidad Perceptual (Representación)',
          weight: '30%',
          observableEvidence: 'Videos con duración <9 min, transcripciones WebVTT descargables completas y glosarios visuales con Alt-Text.'
        },
        {
          dimension: 'Andamiaje Socrático sin Respuestas Directas (Compromiso)',
          weight: '35%',
          observableEvidence: 'El Coursera Coach orienta con analogías y preguntas reflexivas sin resolver los cuestionarios de los alumnos.'
        },
        {
          dimension: 'Equivalencia en la Evaluación Multimodal (Acción y Expresión)',
          weight: '35%',
          observableEvidence: 'La rúbrica unificada evalúa la evidencia y el análisis fiscal con el mismo rigor en formato escrito, oral o visual.'
        }
      ]
    }
  }
};
