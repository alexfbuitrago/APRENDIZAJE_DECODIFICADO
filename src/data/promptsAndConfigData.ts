export interface ToolPromptArchitecture {
  toolId: 'notebooklm' | 'perplexity' | 'copilot' | 'dua';
  toolName: string;
  formulaName: string;
  formulaDescription: string;
  formulaComponents: {
    name: string;
    description: string;
    pedagogicalPurpose: string;
    exampleSnippet: string;
  }[];
  productionPrompts: {
    id: string;
    title: string;
    scenario: string;
    promptText: string;
    breakdownExplanation: string;
  }[];
  setupGuide: {
    recommendedVersion: string;
    governanceAndPrivacy: string;
    stepByStepConfig: {
      stepNumber: number;
      title: string;
      action: string;
      settingLocation: string;
      criticalWarning?: string;
    }[];
    bestPractices: string[];
    antiPatternsToAvoid: string[];
  };
}

export const PROMPT_AND_CONFIG_DATA: Record<string, ToolPromptArchitecture> = {
  notebooklm: {
    toolId: 'notebooklm',
    toolName: 'NotebookLM',
    formulaName: 'Estructura C.O.R.P.U.S. (Corpus, Objetivo, Relación, Prueba, Umbral, Síntesis)',
    formulaDescription: 'Para forzar a NotebookLM a actuar como sparring dialógico y no como resumen plano, el prompt debe delimitar los autores a contrastar, el nivel de exigencia de citas textuales y la prohibición expresa de inventar información externa.',
    formulaComponents: [
      {
        name: '1. Delimitación del Corpus (C)',
        description: 'Especificar qué documentos activos del cuaderno deben responder.',
        pedagogicalPurpose: 'Evita que el modelo mezcle notas personales no revisadas con literatura autorizada.',
        exampleSnippet: 'Basándote exclusivamente en las fuentes [UNESCO 2024] y [CEPAL 2024] cargadas en este cuaderno...'
      },
      {
        name: '2. Objetivo Epistemológico (O)',
        description: 'Indicar la tarea analítica concreta (contrastar, identificar discrepancias, aislar supuestos).',
        pedagogicalPurpose: 'Impide respuestas descriptivas pasivas tipo "libro de texto".',
        exampleSnippet: 'Analiza la divergencia conceptual sobre la soberanía tecnológica...'
      },
      {
        name: '3. Relación Tripartita (R)',
        description: 'Exigir la identificación de acuerdos, tensiones y vacíos.',
        pedagogicalPurpose: 'Entrena al estudiante a no buscar una verdad monolítica, sino debates vivos.',
        exampleSnippet: 'Estructura tu respuesta en tres apartados obligatorios: 1) Un punto de convergencia empírica, 2) Una tensión de enfoque no resuelta, y 3) Un vacío temático u omisión en ambas fuentes.'
      },
      {
        name: '4. Prueba y Cita Exacta (P)',
        description: 'Exigir marcadores de cita con página o sección del documento.',
        pedagogicalPurpose: 'Permite la verificación manual inmediata por el alumno.',
        exampleSnippet: 'Cada afirmación debe estar respaldada por su cita de fuente entre corchetes indicando página o capítulo exacto.'
      },
      {
        name: '5. Umbral de Ignorancia / Restricción (U)',
        description: 'Instruir qué hacer si el corpus no contiene la respuesta.',
        pedagogicalPurpose: 'Erradica la alucinación plausible.',
        exampleSnippet: 'Si el corpus seleccionado no contiene información empírica sobre este aspecto, declara expresamente "Dato no disponible en el corpus seleccionado". NO completes con conocimiento web general.'
      }
    ],
    productionPrompts: [
      {
        id: 'nlm-p1',
        title: 'Contraste Dialógico de Autores en Políticas Educativas',
        scenario: 'Seminario de políticas públicas para comparar marcos internacionales de IA.',
        promptText: `Actúa como interlocutor epistemológico crítico para un seminario de posgrado.
Con base EXCLUSIVA en las fuentes [UNESCO 2024] y [OCDE 2023] seleccionadas:
1. Formula una tabla comparativa respecto a la "autonomía del docente frente a los sistemas de recomendación algorítmica".
2. Identifica con precisión:
   - Un Acuerdo: En qué coinciden ambos organismos respecto al riesgo de sobredependencia cognitiva.
   - Una Tensión: En qué difieren respecto a la medición de la productividad docente (eficiencia de tiempo vs mediación humana).
   - Un Vacío: Qué condición sociolaboral del profesorado es omitida en ambos reportes.
3. Inserta citas explícitas [Fuente, Sección, Pág.] para cada premisa.
4. Si las fuentes discrepan en sus datos porcentuales, no los armonices: expón la contradicción abierta.
Restricción: Si un punto no está en las fuentes, indica "No abordado en el corpus".`,
        breakdownExplanation: 'Obliga al modelo a mantener la tensión sin armonizar falsamente los consensos, señalando citas para que el alumno pueda cotejar de inmediato en el visor.'
      },
      {
        id: 'nlm-p2',
        title: 'Auditoría de Sesgos y Vacíos en Metodologías de Aprendizaje',
        scenario: 'Taller de metodología de investigación formativa.',
        promptText: `Examina las notas y documentos del cuaderno correspondientes a [Tema].
Genera una guía de lectura crítica de 400 palabras que responda:
- ¿Cuáles son las tres afirmaciones centrales con mayor soporte empírico en el texto? (Acompaña cada una con su cita textual literal corta).
- ¿Qué metodología utilizaron los autores y qué limitaciones explícitas declaran ellos mismos en sus apéndices?
- ¿Qué poblaciones o variables socioeconómicas fueron excluidas del estudio?
Concluye con dos preguntas provocadoras que desafíen los supuestos del autor principal para ser discutidas en el aula.`,
        breakdownExplanation: 'Desplaza la atención del estudiante del contenido memorístico a las limitaciones metodológicas y exclusiones del propio autor.'
      }
    ],
    setupGuide: {
      recommendedVersion: 'NotebookLM Web Workspace (versión oficial de Google Labs con cuenta institucional Workspace for Education)',
      governanceAndPrivacy: 'En cuentas institucionales de Google Workspace for Education, los datos y documentos cargados en NotebookLM NO se utilizan para entrenar los modelos públicos de Google y permanecen bajo los acuerdos de privacidad del centro universitario.',
      stepByStepConfig: [
        {
          stepNumber: 1,
          title: 'Creación de Cuaderno Temático Monográfico',
          action: 'Crear un cuaderno independiente por unidad curricular o proyecto de investigación (ej. "Seminario_Desigualdades_2026"). No mezclar temas dispares en un mismo cuaderno.',
          settingLocation: 'Botón "+ Nuevo Cuaderno" en la pantalla de inicio de NotebookLM.'
        },
        {
          stepNumber: 2,
          title: 'Curaduría y Carga de Documentos Autorizados',
          action: 'Cargar únicamente documentos en PDF con capa de texto OCR limpia, Google Docs o archivos de texto plano. Asegurar que los PDFs contengan tablas de contenido claras y numeración de páginas legible.',
          settingLocation: 'Panel lateral "Fuentes" -> "Añadir fuentes" (Google Drive, PDF, texto copiado).',
          criticalWarning: 'Evitar PDFs escaneados como imagen sin OCR; NotebookLM no podrá indexar el texto ni generar citas precisas.'
        },
        {
          stepNumber: 3,
          title: 'Selección Selectiva del Corpus por Consulta',
          action: 'Antes de formular una pregunta, marcar o desmarcar fuentes específicas con las casillas de verificación en el panel lateral para forzar al modelo a responder con un subconjunto específico.',
          settingLocation: 'Casillas de verificación al lado del nombre de cada fuente en el panel izquierdo.'
        },
        {
          stepNumber: 4,
          title: 'Fijación de la Guía del Cuaderno (Notebook Guide)',
          action: 'Revisar el resumen generado automáticamente por NotebookLM y generar la "Guía de estudio" (Study Guide) o "Preguntas frecuentes" para verificar que el modelo comprendió los ejes principales.',
          settingLocation: 'Pestaña "Guía del cuaderno" en la esquina superior del panel de chat.'
        }
      ],
      bestPractices: [
        'Limitar el corpus a un rango manejable (5 a 15 documentos de alta calidad) en lugar de saturar con 50 fuentes secundarias.',
        'Convertir apuntes personales de clase en Google Docs limpios antes de cargarlos para evitar confusiones léxicas.',
        'Comprobar siempre el número de cita al pie antes de aceptar cualquier conclusión.'
      ],
      antiPatternsToAvoid: [
        'Pedir "Escribe un ensayo completo sobre el tema" (fomenta el plagio y la desconexión cognitiva).',
        'Cargar diapositivas con viñetas inconexas sin prosa articulada.',
        'Creer que el resumen es el texto: el estudiante debe abrir la cita original para contextualizar.'
      ]
    }
  },

  perplexity: {
    toolId: 'perplexity',
    toolName: 'Perplexity AI',
    formulaName: 'Estructura D.O.I.-F.I.L.T.E.R. (Descriptor, Operador, Índice, Fuente primaria, Inclusión, Límite temporal, Texto original, Exclusión, Riesgo)',
    formulaDescription: 'Para transformar a Perplexity de un motor de búsqueda superficial a un asistente de descubrimiento académico riguroso, el prompt debe forzar el modo académico, restringir el tipo de literatura e imponer la verificación del identificador DOI.',
    formulaComponents: [
      {
        name: '1. Descriptores Académicos Específicos (D)',
        description: 'Usar terminología formal controlada (MeSH, DeCS, Tesauro UNESCO, ERIC) en lugar de jerga cotidiana.',
        pedagogicalPurpose: 'Eleva la calidad de los artículos indexados recuperados.',
        exampleSnippet: '"adaptive learning systems" AND "higher education attrition" AND "formative feedback"'
      },
      {
        name: '2. Enfoque / Modo de Búsqueda (O)',
        description: 'Configurar explícitamente el espacio de búsqueda en literatura revisada por pares.',
        pedagogicalPurpose: 'Bloquea entradas de blogs corporativos, noticias y sitios de relaciones públicas.',
        exampleSnippet: 'Focus: Academic (Semantic Scholar, PubMed, arXiv, CrossRef)...'
      },
      {
        name: '3. Mandato de Identificador DOI (I)',
        description: 'Exigir que cada fuente citada incluya su DOI resoluble (https://doi.org/...).',
        pedagogicalPurpose: 'Garantiza la trazabilidad inmediata hasta la revista indexada.',
        exampleSnippet: 'Para cada estudio citado, proporciona obligatoriamente: 1) Título completo, 2) Autores y revista, 3) DOI activo resoluble, y 4) Diseño metodológico exacto.'
      },
      {
        name: '4. Criterios de Inclusión y Exclusión (F/I/L/E)',
        description: 'Definir ventana de años (ej. 2020-2026), idioma, diseño de estudio y exclusión de ensayos no controlados.',
        pedagogicalPurpose: 'Emula los filtros de elegibilidad de una revisión metodológica formal.',
        exampleSnippet: 'Filtros: Publicaciones de 2021 a 2026 en revistas Scopus Q1/Q2 o WoS. Excluye artículos de opinión y preprints sin arbitraje.'
      },
      {
        name: '5. Mandato Anti-Exageración de Hallazgos (R)',
        description: 'Instruir a la IA a reportar el tamaño muestral (n), la tasa de deserción y el valor de significancia estadística (p-value / effect size).',
        pedagogicalPurpose: 'Evita que correlaciones débiles se presenten como relaciones causales concluyentes.',
        exampleSnippet: 'Reporta explícitamente el tamaño de la muestra (N=...), la población diana y si el efecto reportado fue estadísticamente significativo o si los propios autores señalaron bajo poder explicativo.'
      }
    ],
    productionPrompts: [
      {
        id: 'ppx-p1',
        title: 'Búsqueda Exploratoria Estructurada para Mapeo de Literatura',
        scenario: 'Fase inicial de formulación del marco teórico de una tesis o artículo de investigación.',
        promptText: `Configuración: Academic Focus.
Actúa como metodólogo senior en investigación educativa.
Pregunta de investigación: ¿Cuál es el impacto empírico medido de la retroalimentación formativa asistida por IA en la autorregulación del aprendizaje de estudiantes universitarios?

Requisitos de búsqueda:
1. Recupera 6 estudios empíricos publicados entre 2021 y 2026 en revistas con revisión por pares.
2. Para cada estudio, estructura una ficha que contenga estrictamente:
   - Cita APA 7 y DOI oficial enlazable.
   - Diseño de investigación (¿ensayo controlado aleatorizado, cuasiexperimento, estudio de caso cualitativo?).
   - Muestra real (N=..., país, disciplina, nivel de pregrado o posgrado).
   - Hallazgo numérico exacto (tamaño del efecto, p-value o porcentaje reportado en la sección de Resultados).
   - Principal limitación metodológica reconocida por los autores en la Discusión.
3. Alerta de Rigor: NO generalices conclusiones de cursos pequeños (N<50) a contextos universitarios masivos. Si una muestra es limitada, decláralo expresamente.`,
        breakdownExplanation: 'Fuerza a Perplexity a extraer el diseño metodológico y las limitaciones, evitando que se quede en las afirmaciones triunfalistas del abstract.'
      },
      {
        id: 'ppx-p2',
        title: 'Detección de Brechas de Investigación y Discrepancias Metodológicas',
        scenario: 'Identificación de la justificación de novedad en un proyecto de investigación.',
        promptText: `Modo Academic.
A partir de la literatura académica reciente (2022-2026) sobre "[Tema]":
1. Identifica qué metodologías predominan en la literatura (ej. cuantitativa por encuestas de percepción vs experimentos longitudinales).
2. Señala dos aspectos donde los resultados de distintos autores sean abiertamente contradictorios (Autores A vs Autores B con sus respectivos DOIs).
3. ¿Qué contextos geográficos están subrepresentados en las bases indexadas para esta temática? (ej. ¿se investiga solo en Norteamérica y Europa, o hay evidencia en América Latina?).
4. Concluye con tres preguntas de investigación aún no resueltas que requieran un estudio con diseño experimental robusto.`,
        breakdownExplanation: 'Permite al investigador pasar del simple consumo bibliográfico al análisis de vacíos de conocimiento y sesgos geográficos de publicación.'
      }
    ],
    setupGuide: {
      recommendedVersion: 'Perplexity Pro (con acceso a modelos avanzados Claude 3.5 Sonnet / GPT-4o y Focus Academic)',
      governanceAndPrivacy: 'En Perplexity, desactivar la opción de "AI Data Retention" en la configuración de la cuenta si se consultan datos sensibles de proyectos no patentados.',
      stepByStepConfig: [
        {
          stepNumber: 1,
          title: 'Activación del Focus "Academic"',
          action: 'Antes de escribir la consulta, hacer clic en el botón "Focus" debajo de la barra de búsqueda y seleccionar "Academic" (investigación académica en Semantic Scholar, PubMed, CrossRef y arXiv).',
          settingLocation: 'Botón "Focus" en la barra de consulta de Perplexity.',
          criticalWarning: 'Si se deja en Focus "All" (Web General), Perplexity mezclará blogs de marketing de empresas de software con literatura científica arbitrada.'
        },
        {
          stepNumber: 2,
          title: 'Configuración de "Collections" / Espacios Temáticos',
          action: 'Crear una Colección para el proyecto de investigación e insertar un System Prompt predeterminado que obligue a la IA a citar siempre en formato APA 7 y con DOI.',
          settingLocation: 'Barra lateral izquierda -> "Collections" -> "+ New Collection".'
        },
        {
          stepNumber: 3,
          title: 'Instrucciones del Sistema para el Perfil de Colección',
          action: 'Pegar el siguiente System Prompt en la Colección: "Eres un asistente de investigación académica riguroso. Siempre cita con DOI resoluble, indica el diseño de estudio (RCT, cuasi, cualitativo) y el tamaño muestral N. Nunca confundas correlación con causalidad."',
          settingLocation: 'Configuración de la Colección -> Campo "AI Prompt".'
        },
        {
          stepNumber: 4,
          title: 'Verificación Inmediata en CrossRef o PubMed',
          action: 'Al recibir la respuesta con citas numeradas, hacer clic en cada enlace para confirmar que el DOI existe, que el PDF es accesible y que el resumen de Perplexity no distorsionó la conclusión.',
          settingLocation: 'Pestaña de fuentes / citas al inicio de la respuesta en Perplexity.'
        }
      ],
      bestPractices: [
        'Utilizar los operadores booleanos clásicos dentro del prompt (AND, OR, NOT) para delimitar la búsqueda.',
        'Contrastar los hallazgos de Perplexity con una búsqueda de control directa en Scopus o Web of Science.',
        'Exportar los enlaces a un gestor bibliográfico (Zotero, Mendeley) y leer siempre la sección de Resultados y Discusión del PDF completo.'
      ],
      antiPatternsToAvoid: [
        'Copiar y pegar referencias bibliográficas de Perplexity en una tesis sin haber abierto el archivo PDF original.',
        'Afirmar en una tesis que se realizó una "revisión sistemática" utilizando únicamente Perplexity.',
        'Ignorar las limitaciones metodológicas declaradas por los propios autores del estudio.'
      ]
    }
  },

  copilot: {
    toolId: 'copilot',
    toolName: 'Microsoft Copilot',
    formulaName: 'Estructura R.E.P.R.O. (Rol, Evidencia pública, Problema Bloom, Rúbrica analítica, Obligación de privacidad)',
    formulaDescription: 'Para generar casos pedagógicos rigurosos en Word sin vulnerar la privacidad de datos ni publicar borradores alucinados, el prompt debe definir el nivel taxonómico de Bloom, obligar al uso de datos públicos agregados y parametrizar la rúbrica.',
    formulaComponents: [
      {
        name: '1. Rol Docente Senior y Disciplinar (R)',
        description: 'Situar a Copilot como experto en diseño curricular universitario en el área de especialidad.',
        pedagogicalPurpose: 'Ajusta el registro léxico y el rigor conceptual.',
        exampleSnippet: 'Actúa como diseñador curricular universitario senior y profesor titular de Políticas Públicas...'
      },
      {
        name: '2. Evidencia Pública Abierta (E)',
        description: 'Exigir el uso exclusivo de datos públicos oficiales (DANE, INE, Banco Mundial, CEPAL, ministerios).',
        pedagogicalPurpose: 'Evita alucinaciones estadísticas y protege la privacidad.',
        exampleSnippet: 'Utiliza únicamente cifras oficiales agregadas de libre acceso del DANE (Censo 2018 / GEIH 2023) y la Superintendencia de Servicios Públicos...'
      },
      {
        name: '3. Problema Situado y Nivel Bloom (P)',
        description: 'Plantear un dilema auténtico que exija niveles de análisis, evaluación y diseño.',
        pedagogicalPurpose: 'Evita que el caso sea un simple ejercicio de memorización o copia.',
        exampleSnippet: 'Escribe un caso de 500 palabras comparando dos municipios con asimetrías fiscales. Incluye 4 preguntas escalonadas: 1 descriptiva, 2 de análisis causal y 1 de propuesta de política pública.'
      },
      {
        name: '4. Rúbrica Analítica con Descriptores Observables (R)',
        description: 'Especificar una tabla con criterios de fondo, ponderaciones porcentuales y descriptores de desempeño.',
        pedagogicalPurpose: 'Elimina juicios subjetivos vagos como "excelente comprensión".',
        exampleSnippet: 'Genera una rúbrica analítica en tabla Word con 3 criterios (Uso de evidencia 30%, Análisis institucional 40%, Viabilidad 30%) desglosados en 3 niveles de desempeño observables.'
      },
      {
        name: '5. Obligación de Privacidad y Anonimización (O)',
        description: 'Recordatorio explícito de no solicitar ni inventar datos de personas naturales identificables.',
        pedagogicalPurpose: 'Blindaje ético y legal frente a leyes de protección de datos.',
        exampleSnippet: 'Restricción: No incluyas nombres de personas naturales ni datos confidenciales. Emplea datos agregados territoriales.'
      }
    ],
    productionPrompts: [
      {
        id: 'cpt-p1',
        title: 'Generación de Caso Situado de Estudio en Word con Rúbrica',
        scenario: 'Creación de material didáctico para evaluación de competencias en pregrado.',
        promptText: `Actúa como diseñador instruccional universitario en Economía y Políticas Públicas.
Redacta en formato Microsoft Word una actividad de aprendizaje basada en casos:

1. Resultado de Aprendizaje: "Evaluar el impacto de la informalidad laboral y la precarización en la recaudación fiscal municipal utilizando datos empíricos agregados".
2. Narrativa del Caso (500 palabras):
   - Contrasta dos ciudades intermedias utilizando datos agregados públicos del DANE (GEIH 2023).
   - Explica el dilema que enfrenta la secretaría de hacienda local entre fiscalización coercitiva e incentivos de formalización.
   - Prohibido inventar cifras: cita la tasa de informalidad real y la composición del recaudo tributario local.
3. Batería de 4 Preguntas de Indagación:
   - Pregunta 1 (Comprensión): Modelado espacial de la tasa de informalidad vs recaudo per cápita.
   - Pregunta 2 y 3 (Análisis y Evaluación): Identificación de trampas de informalidad y costos de transacción institucionales.
   - Pregunta 4 (Propuesta/Creación): Diseño de un instrumento fiscal progresivo adaptado al perfil productivo local.
4. Rúbrica Analítica en Tabla:
   - 3 criterios ponderados (Evidencia empírica 30%, Diagnóstico institucional 40%, Viabilidad de la propuesta 30%).
   - Descriptores concretos para: Nivel Inicial (insuficiente), Nivel Autónomo (competente) y Nivel Estratégico (ejemplar).
5. Restricción de Gobernanza: NO utilices nombres de empresas reales ni datos de personas físicas protegidas.`,
        breakdownExplanation: 'Estructura el caso completo en Word listo para pasar a la rutina de revisión humana docente en 5 dimensiones.'
      },
      {
        id: 'cpt-p2',
        title: 'Prompt de Auditoría Humana y Refinamiento de Borrador',
        scenario: 'Segunda pasada de revisión de un caso didáctico ya redactado en Word.',
        promptText: `Tengo el siguiente borrador de caso y rúbrica generado previamente:
[Pegar texto del borrador]

Audita el texto aplicando la siguiente lista de control de 5 dimensiones:
1. Cifras: Identifica si alguna cifra no cuenta con fuente verificable del DANE/CEPAL o si parece un porcentaje alucinado.
2. Lenguaje y Tono: Señala cualquier adjetivo melodramático, sensacionalista o paternalista y propón su sustitución por vocabulario de las ciencias sociales.
3. Nivel de Bloom: Analiza si las preguntas 1 a 4 exigen pensamiento crítico o si el alumno las puede resolver copiando y pegando fragmentos del texto. Sugiere redacciones más desafiantes.
4. Sesgos: Alerta si el caso estigmatiza a las poblaciones vulnerables como meros sujetos pasivos sin capacidad organizativa.
5. Rúbrica: Reemplaza descriptores vagos como "buena redacción" o "excelente comprensión" por evidencias observables de aprendizaje.
Entrega la versión mejorada con los cambios resaltados en formato editable.`,
        breakdownExplanation: 'Acelera el ciclo de revisión humana sin renunciar a la verificación de cifras ni a la coherencia curricular.'
      }
    ],
    setupGuide: {
      recommendedVersion: 'Microsoft Copilot for Microsoft 365 con Licencia Educativa (A3 / A5) y Protección de Datos Comerciales activa',
      governanceAndPrivacy: 'Verificar siempre la presencia del escudo verde "Protected" en la esquina superior del panel de Copilot en Word. Esto certifica que las consultas no son leídas por Microsoft, no quedan registradas en modelos públicos y respetan el perímetro de seguridad institucional (FERPA / RGPD).',
      stepByStepConfig: [
        {
          stepNumber: 1,
          title: 'Verificación de la Licencia Educativa Institucional',
          action: 'Iniciar sesión en Microsoft Word con la cuenta de correo institucional de la universidad (@universidad.edu). Verificar el icono de escudo verde que indica "Commercial Data Protection: Active".',
          settingLocation: 'Esquina superior derecha de la aplicación de escritorio Word o Word Online.',
          criticalWarning: 'Nunca utilizar cuentas personales gratuitas (@outlook.com o @hotmail.com) para procesar contenidos curriculares con datos no públicos, ya que no cuentan con blindaje institucional.'
        },
        {
          stepNumber: 2,
          title: 'Despliegue del Panel Lateral vs Menú Contextual',
          action: 'Para la generación inicial del caso, abrir el panel lateral de Copilot (Ctrl + I o icono Copilot en la barra de herramientas). Para pulir párrafos existentes, seleccionar el texto y usar el menú flotante "Rewrite with Copilot".',
          settingLocation: 'Pestaña "Inicio" -> Botón "Copilot" en la cinta de opciones de Word.'
        },
        {
          stepNumber: 3,
          title: 'Configuración del Historial y Privacidad',
          action: 'Asegurarse de que las directivas de la universidad mantengan desactivada la opción de compartir transcripciones de reuniones o historiales de chat fuera de la organización.',
          settingLocation: 'Portal de administración de Microsoft 365 / Centro de Confianza de Word.'
        },
        {
          stepNumber: 4,
          title: 'Rutina Sistemática de Revisión en 5 Pasos',
          action: 'Establecer como protocolo de cátedra que ningún material pedagógico generado con Copilot se publique a los estudiantes sin antes pasar por la lista de verificación de 5 dimensiones.',
          settingLocation: 'Protocolo de buenas prácticas de la facultad o departamento académico.'
        }
      ],
      bestPractices: [
        'Aprovechar la función de "Referenciar un archivo" de Copilot en Word para enlazar el programa oficial de la asignatura o las bases del DANE guardadas en OneDrive institucional.',
        'Prototipar tres versiones alternativas de rúbrica en minutos para que el equipo docente elija la más pertinente.',
        'Guardar los prompts más eficaces en una plantilla de Word compartida del departamento.'
      ],
      antiPatternsToAvoid: [
        'Introducir listas de estudiantes con nombres, identificaciones o notas para pedir que Copilot redacte retroalimentaciones automáticas (violación de privacidad).',
        'Imprimir el primer borrador sin cotejar las cifras numéricas en los portales oficiales.',
        'Dejar que Copilot asigne los pesos porcentuales de la evaluación sin consultar la matriz de competencias de la carrera.'
      ]
    }
  },

  dua: {
    toolId: 'dua',
    toolName: 'ChatGPT & Coursera Course Builder / Coach',
    formulaName: 'Estructura D.U.A.-C.A.S.T. (Diseño accesible, Universalidad cognitiva, Afecto y propósito, Andamiaje Coursera Coach, Síntesis multimodal, Tareas diversificadas)',
    formulaDescription: 'Para crear cursos virtuales en plataformas como Coursera que apliquen rigurosamente las pautas de CAST, el prompt debe parametrizar las tres redes cerebrales (Afectivas, Reconocimiento, Estratégicas) y configurar el Coursera Coach como tutor socrático.',
    formulaComponents: [
      {
        name: '1. Redes Afectivas (Compromiso / El "Por qué")',
        description: 'Diseñar opciones para captar el interés, sostener el esfuerzo y promover la autorregulación.',
        pedagogicalPurpose: 'Previene la apatía y la deserción temprana en cursos MOOC autogestionados.',
        exampleSnippet: 'Ofrece al estudiante 3 casos de aplicación contextualizada a elegir (sector salud, medioambiente o finanzas) y diseña una rúbrica de autoevaluación semanal.'
      },
      {
        name: '2. Redes de Reconocimiento (Representación / El "Qué")',
        description: 'Descomponer los contenidos en formatos perceptuales múltiples (audio, video corto, infografía, glosario dinámico, texto accesible).',
        pedagogicalPurpose: 'Garantiza la comprensión de estudiantes con neurodivergencias o estilos de procesamiento variados.',
        exampleSnippet: 'Divide la lección en 3 micro-cápsulas de 7 minutos con transcripciones descargables completas, diagramas conceptuales Mermaid y glosario de términos clave.'
      },
      {
        name: '3. Redes Estratégicas (Acción y Expresión / El "Cómo")',
        description: 'Brindar múltiples vías equivalentes para demostrar el aprendizaje con rúbrica unificada.',
        pedagogicalPurpose: 'Evalúa la competencia profunda y no la destreza memorística o mecánica en un formato rígido.',
        exampleSnippet: 'El estudiante puede entregar la evidencia final en formato: A) Ensayo ejecutivo de 1000 palabras, B) Podcast grabado de 5 minutos, o C) Infografía explicativa, calificados con la misma rúbrica.'
      },
      {
        name: '4. System Prompt del Coursera Coach (Andamiaje)',
        description: 'Instrucción de sistema para el asistente de IA del curso: ser socrático, no dar respuestas directas y brindar pistas conceptuales.',
        pedagogicalPurpose: 'Sostiene la autonomía del estudiante sin resolverle los problemas evaluativos.',
        exampleSnippet: 'Actúa como tutor socrático. Cuando el alumno cometa un error, resalta el paso metodológico exacto donde se desvió y hazle una pregunta que lo guíe a corregirse.'
      },
      {
        name: '5. Accesibilidad Universal WCAG AAA',
        description: 'Exigir contrastes de color, texto alternativo descriptivo en imágenes y compatibilidad con lectores de pantalla.',
        pedagogicalPurpose: 'Inclusión material efectiva para estudiantes con discapacidad sensorial o motriz.',
        exampleSnippet: 'Asegura que todos los recursos cuenten con texto alternativo enriquecido, atajos de teclado completos y cumplimiento de accesibilidad WCAG 2.2 AA.'
      }
    ],
    productionPrompts: [
      {
        id: 'dua-p1',
        title: 'Rediseño de Módulo Virtual Completo bajo Pautas DUA',
        scenario: 'Transformación de un módulo rígido de curso virtual hacia el estándar Coursera DUA.',
        promptText: `Actúa como diseñador instruccional senior experto en DUA (Diseño Universal para el Aprendizaje de CAST) y Coursera Course Builder.
Tengo el siguiente tema curricular denso: "[Nombre del Tema, ej. Estructura de Datos y Árboles Binarios]".

Rediseña este módulo aplicando estrictamente las tres redes cerebrales del DUA:
1. Múltiples Formas de Compromiso (Redes Afectivas):
   - Plantea 3 contextos auténticos diferentes para que el alumno elija su proyecto aplicado.
   - Diseña un momento de verificación formativa a mitad del módulo que refuerce la perseverancia con retroalimentación motivacional.
2. Múltiples Formas de Representación (Redes de Reconocimiento):
   - Descompón el tema en 3 micro-lecciones de máximo 8 minutos cada una con su guión audiovisual esquematizado.
   - Proporciona un glosario visual con metáforas cotidianas para clarificar los 5 conceptos más abstractos.
   - Incluye un organizador gráfico conceptual en código Mermaid para mapear las relaciones del sistema.
3. Múltiples Formas de Acción y Expresión (Redes Estratégicas):
   - Plantea una evaluación auténtica con 3 opciones de entrega equivalentes en rigor (código comentado, screencast explicativo de 4 min o informe técnico comparativo).
   - Diseña la rúbrica analítica unificada neutral al formato con descriptores observables.
4. Accesibilidad: Especifica el texto alternativo descriptivo de cada diagrama para lectores de pantalla.`,
        breakdownExplanation: 'Garantiza que el curso virtual no sea un repositorio pasivo de PDFs, sino un entorno de aprendizaje inclusivo y multimodal.'
      },
      {
        id: 'dua-p2',
        title: 'System Prompt Pedagógico para Coursera Coach (Tutor Socrático)',
        scenario: 'Configuración del asistente conversacional de un curso virtual en plataforma.',
        promptText: `Eres el "Coursera Coach" del curso virtual "[Nombre del Curso]".
Tu objetivo pedagógico es acompañar a los estudiantes a construir su propio conocimiento sin darles jamás la respuesta directa a los problemas evaluables.

Reglas de Comportamiento Pedagógico:
1. Regla de Oro: NUNCA resuelvas ejercicios de código, problemas matemáticos ni des la respuesta correcta a preguntas de evaluación formativa. Si el alumno te dice "Dime la respuesta de la pregunta 3", responde amablemente: "Mi rol es ayudarte a descubrir la solución por ti mismo. Veamos juntos qué pistas tenemos en la lección...".
2. Andamiaje Gradual (Scaffolding):
   - Si el estudiante hace una pregunta conceptual amplia, respóndele con una analogía simple y pregúntale cómo aplicaría esa analogía a su ejercicio.
   - Si el estudiante muestra su código o cálculo erróneo, no lo corrijas; indícale la línea o etapa metodológica donde ocurrió la inconsistencia y pídele que reflexione sobre qué regla se está vulnerando.
3. Dimensión Afectiva DUA:
   - Valora el esfuerzo y la curiosidad antes de señalar un error ("¡Excelente intento! Estás muy cerca de la solución...").
   - Si detectas frustración o bloqueo cognitivo, sugiere una pausa de descanso o recomienda revisar la micro-lección audiovisual en la marca de tiempo específica [04:15].
4. Cierre Metacognitivo: Siempre concluye tus intervenciones con una breve pregunta que invite al estudiante a verbalizar su estrategia de aprendizaje.`,
        breakdownExplanation: 'Transforma al chatbot genérico en un tutor empático y socrático alineado con los principios neuroeducativos del DUA.'
      }
    ],
    setupGuide: {
      recommendedVersion: 'Coursera Course Builder (herramienta de autoría institucional) + ChatGPT Plus / Enterprise para diseño instruccional',
      governanceAndPrivacy: 'En Coursera Coach, los prompts del sistema se configuran a nivel de curso por el equipo docente de la universidad socia. Las interacciones de los alumnos se monitorean en agregación sin exponer datos de contacto privados.',
      stepByStepConfig: [
        {
          stepNumber: 1,
          title: 'Configuración del Blueprint en Coursera Course Builder',
          action: 'Al iniciar la creación del curso en Course Builder, cargar el Sílabo oficial y definir la duración máxima por video (7 a 9 minutos) para evitar la sobrecarga cognitiva en la red de reconocimiento.',
          settingLocation: 'Coursera Authoring Platform -> "Course Blueprint" -> "Structure & Video Length Caps".'
        },
        {
          stepNumber: 2,
          title: 'Inserción del System Prompt en Coursera Coach',
          action: 'Acceder a la configuración de IA del curso e insertar las directivas pedagógicas del Coach (Tutor Socrático, no dar respuestas directas, andamiaje DUA).',
          settingLocation: 'Pestaña "Learner Tools" -> "Coursera Coach Settings" -> "Pedagogical Persona & System Prompt".',
          criticalWarning: 'Si no se personaliza el System Prompt, el Coach funcionará como un solucionador directo de tareas, anulando el esfuerzo cognitivo del estudiante.'
        },
        {
          stepNumber: 3,
          title: 'Activación de Subtítulos y Transcripciones Interactivas',
          action: 'Verificar que la plataforma genere automáticamente transcripciones sincronizadas en formato WebVTT y habilitar la descarga en formato PDF accesible para estudiantes con baja conectividad.',
          settingLocation: 'Configuración de Video -> "Transcripts & Multi-language Captions".'
        },
        {
          stepNumber: 4,
          title: 'Diseño de Evaluaciones Formativas con Coursera In-Video Questions',
          action: 'Configurar preguntas formativas intercaladas en los minutos 3 y 6 de cada video, asociadas a retroalimentación inmediata orientada al proceso y no a la calificación penalizadora.',
          settingLocation: 'Editor de video -> "Add In-Video Question (Ungraded Practice)".'
        }
      ],
      bestPractices: [
        'Proveer siempre un "Audio-Only Track" descargable para estudiantes que aprenden durante desplazamientos en transporte público.',
        'Diseñar las tareas evaluables con una matriz de opciones (ensayo, podcast o infografía) evaluadas con la misma rúbrica de fondo.',
        'Revisar periódicamente los logs agregados de dudas frecuentes en el Coursera Coach para actualizar los videos que causen confusión recurrente.'
      ],
      antiPatternsToAvoid: [
        'Cargar clases magistrales grabadas de 90 minutos continuos sin cortes ni descansos visuales.',
        'Limitar la evaluación de un curso virtual exclusivamente a exámenes memorísticos de opción múltiple con tiempo límite estresante.',
        'Dejar el asistente de IA sin reglas de comportamiento ético, permitiendo que escriba las respuestas completas de las tareas de los alumnos.'
      ]
    }
  }
};
