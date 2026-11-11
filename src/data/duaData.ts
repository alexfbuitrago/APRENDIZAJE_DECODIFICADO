import { DuaNetwork, CourseModuleAudited } from '../types';

export const DUA_NETWORKS: DuaNetwork[] = [
  {
    id: 'engagement',
    name: 'Múltiples Formas de Compromiso',
    brainNetwork: 'Redes Afectivas',
    subtitle: 'El "POR QUÉ" del aprendizaje',
    neuroscienceBasis: 'Ubicadas en el centro del cerebro (sistema límbico). Regulan la motivación, las emociones, el interés intrínseco y la asignación de significado personal a los contenidos.',
    coreQuestion: '¿Por qué esto le importa al estudiante? ¿Cómo sostenemos su curiosidad y perseverancia frente a la frustración?',
    colorTheme: 'amber',
    guidelines: [
      {
        tier: 'Acceso (Pautas Iniciales)',
        title: 'Proporcionar opciones para captar el interés',
        description: 'Optimizar la elección individual y la autonomía. Ofrecer opciones en el nivel de desafío, el contexto de las tareas y los temas de aplicación real para evitar la apatía.',
        chatGptCourseraPrompt: 'Genera tres escenarios contextuales distintos para la misma lección de cálculo: uno orientado a modelación ambiental, otro a finanzas personales y otro a diseño de videojuegos, para que el estudiante elija cuál resolver.',
        concreteExample: 'En Coursera Course Builder: En lugar de un único caso impuesto, ofrecer tres estudios de caso contextualizados a diferentes regiones o sectores productivos.'
      },
      {
        tier: 'Construcción (Pautas Intermedias)',
        title: 'Proporcionar opciones para mantener el esfuerzo y la persistencia',
        description: 'Resaltar la relevancia de las metas, fomentar la colaboración entre pares y ofrecer retroalimentación formativa oportuna orientada al proceso y no solo a la nota final.',
        chatGptCourseraPrompt: 'Crea una guía de retroalimentación formativa de 4 pasos para que el Coursera Coach no dé la respuesta directa al estudiante, sino que formule preguntas guía socráticas que destraben su bloqueo conceptual.',
        concreteExample: 'Coursera Coach configurado con "Pedagogical Socratic Scaffolding": cuando el alumno duda en un ejercicio de programación, el coach señala el error de lógica con una pista conceptual.'
      },
      {
        tier: 'Internalización (Meta Final)',
        title: 'Proporcionar opciones para la autorregulación',
        description: 'Promover expectativas y creencias que optimicen la motivación; facilitar habilidades y estrategias de afrontamiento y desarrollar la autoevaluación reflexiva.',
        chatGptCourseraPrompt: 'Diseña una rúbrica de metacognición interactiva donde el estudiante evalúe su propio nivel de concentración, las estrategias que utilizó para superar una dificultad y su plan de mejora para la siguiente unidad.',
        concreteExample: 'Diario de aprendizaje digital al cierre de cada módulo con 3 preguntas breves de autoevaluación procesual.'
      }
    ]
  },
  {
    id: 'representation',
    name: 'Múltiples Formas de Representación',
    brainNetwork: 'Redes de Reconocimiento',
    subtitle: 'El "QUÉ" del aprendizaje',
    neuroscienceBasis: 'Ubicadas en la parte posterior del cerebro (lóbulos occipital, temporal y parietal). Identifican y categorizan información, patrones, sonidos, palabras y conceptos abstractos.',
    coreQuestion: '¿Cómo percibe y procesa la información el estudiante? ¿Qué alternativas existen para quienes no aprenden solo leyendo texto plano o escuchando un audio?',
    colorTheme: 'sky',
    guidelines: [
      {
        tier: 'Acceso (Pautas Iniciales)',
        title: 'Proporcionar opciones para la percepción',
        description: 'Ofrecer la información en modalidades sensoriales alternativas: texto equivalente para audio, descripciones para imágenes/gráficos y contraste visual ajustable.',
        chatGptCourseraPrompt: 'Genera el texto descriptivo accesible (Alt-Text enriquecido) para este gráfico de barras de distribución del ingreso, detallando los ejes, las tendencias clave y la conclusión principal.',
        concreteExample: 'En Coursera: Cada video incluye subtítulos sincronizados, transcripción descargable completa con marcas de tiempo y opción de velocidad de reproducción (0.75x a 2x).'
      },
      {
        tier: 'Construcción (Pautas Intermedias)',
        title: 'Proporcionar opciones para el lenguaje y los símbolos',
        description: 'Aclarar vocabulario y símbolos, explicitar sintaxis y estructura, apoyar la decodificación de notaciones complejas e ilustrar conceptos mediante recursos multimedia interactivos.',
        chatGptCourseraPrompt: 'Diseña un glosario dinámico y un mapa conceptual en sintaxis Mermaid que desglose visualmente los términos técnicos: "Superávit Primario", "Curva de Laffer" y "Efecto Desplazamiento".',
        concreteExample: 'Tooltips interactivos en el texto del curso virtual que despliegan la definición simple y un ejemplo cotidiano al pasar el cursor sobre términos técnicos.'
      },
      {
        tier: 'Internalización (Meta Final)',
        title: 'Proporcionar opciones para la comprensión',
        description: 'Activar conocimientos previos, destacar patrones, ideas fuerza y relaciones causales, y guiar el procesamiento y la transferencia a nuevos contextos.',
        chatGptCourseraPrompt: 'Escribe un organizador de avance (Advanced Organizer) que conecte lo aprendido sobre oferta y demanda básica con las fallas de mercado que se verán en este nuevo módulo.',
        concreteExample: 'Infografía síntesis descargable al inicio de la semana que resume la arquitectura conceptual de los temas con códigos de color unificados.'
      }
    ]
  },
  {
    id: 'action_expression',
    name: 'Múltiples Formas de Acción y Expresión',
    brainNetwork: 'Redes Estratégicas',
    subtitle: 'El "CÓMO" del aprendizaje',
    neuroscienceBasis: 'Ubicadas en la parte anterior del cerebro (corteza prefrontal y área motora). Planifican, ejecutan, secuencian y monitorean acciones, destrezas motrices e ideas organizadas.',
    coreQuestion: '¿Cómo demuestra el estudiante lo que sabe? ¿Tiene alternativas al examen memorístico de opción múltiple o al ensayo escrito tradicional?',
    colorTheme: 'emerald',
    guidelines: [
      {
        tier: 'Acceso (Pautas Iniciales)',
        title: 'Proporcionar opciones para la interacción física',
        description: 'Variar los métodos de respuesta y navegación; optimizar el acceso a herramientas y tecnologías de apoyo (teclado, lectores de pantalla, comandos de voz).',
        chatGptCourseraPrompt: 'Verifica que la actividad interactiva propuesta pueda completarse 100% mediante navegación por teclado y atajos universales sin requerir interacción exclusiva de ratón.',
        concreteExample: 'Formularios y quizes virtuales compatibles con tecnologías de asistencia y contraste WCAG AAA.'
      },
      {
        tier: 'Construcción (Pautas Intermedias)',
        title: 'Proporcionar opciones para la expresión y la comunicación',
        description: 'Usar múltiples medios de comunicación (texto escrito, podcast, infografía, código, video explicativo, modelado físico) y proporcionar andamios para la práctica graduada.',
        chatGptCourseraPrompt: 'Diseña las instrucciones para una entrega final donde el estudiante demuestre el análisis del caso mediante una de tres vías equivalentes: A) Ensayo analítico de 1200 palabras, B) Podcast grabado de 6 minutos con guión adjunto, o C) Infografía interactiva con justificación metodológica.',
        concreteExample: 'Sistema de entrega multimodal en plataforma: la rúbrica evalúa la profundidad del argumento y el uso de evidencia empírica, independientemente del formato de entrega.'
      },
      {
        tier: 'Internalización (Meta Final)',
        title: 'Proporcionar opciones para las funciones ejecutivas',
        description: 'Guiar el establecimiento adecuado de metas, apoyar la planificación y desarrollo de estrategias, facilitar la gestión de información y mejorar la capacidad de monitoreo.',
        chatGptCourseraPrompt: 'Genera un cronograma de trabajo desglosado con listas de verificación semanales intermedias (Checklists) y una plantilla de gestión de proyecto para la tarea integradora del curso.',
        concreteExample: 'Barra de progreso procesual en Coursera que descompone la entrega final en 4 micro-entregables con fechas autogestionadas.'
      }
    ]
  }
];

export const AUDITED_COURSE_MODULE: CourseModuleAudited = {
  id: 'module-fiscal-policy',
  unitTitle: 'Unidad 4: Política Fiscal, Gasto Público y Redistribución del Ingreso',
  traditionalFormat: {
    materials: 'Un PDF de 48 páginas escaneado en escala de grises con tipografía pequeña (sin OCR ni capas de texto), un video de 75 minutos grabado en plano fijo con audio de baja calidad y diapositivas saturadas de texto.',
    delivery: 'Lectura obligatoria pasiva seguida de visualización lineal del video sin divisiones ni marcas de tiempo.',
    evaluation: 'Cuestionario sumativo de 20 preguntas cerradas de opción múltiple con límite de tiempo de 25 minutos, centrado en memorizar definiciones literales y fechas de leyes fiscales.',
    barriersIdentified: [
      'Barrera de Compromiso: Contenido descontextualizado que genera apatía; evaluación punitiva de alta ansiedad que no permite aprender del error.',
      'Barrera de Representación: Inaccesible para personas con discapacidad visual o auditiva; nula flexibilidad perceptual; PDF no leíble por lectores de pantalla; sobrecarga cognitiva por texto denso.',
      'Barrera de Acción/Expresión: Formato evaluativo único (cuestionario memorístico) que evalúa velocidad de lectura y memoria mecánica, no comprensión conceptual ni capacidad de análisis fiscal.'
    ]
  },
  duaTransformation: {
    engagementSolution: 'Se ofrece a los estudiantes elegir entre tres casos prácticos situados (Reforma a las pensiones, Impuestos a bebidas azucaradas, o Subsidio al transporte público). Se introduce el Coursera Coach configurado para brindar pistas reflexivas y retroalimentación formativa inmediata en los ejercicios de práctica.',
    representationSolution: 'La materia se divide en 3 micro-cápsulas de 7-10 minutos con subtitulado profesional, transcripciones interactivas con hipervínculos, un glosario visual interactivo (esquemas de flujo fiscal) y un audio-resumen narrado en podcast para escuchar en desplazamientos.',
    actionExpressionSolution: 'La evaluación final se transforma en una "Propuesta de Dictamen Fiscal": los estudiantes pueden entregar A) Ensayo ejecutivo estructurado, B) Audiovisual / Podcast explicativo de 5 minutos, o C) Tablero de datos con informe interpretativo. Se suministra una plantilla de planificación con rúbrica analítica transparente.',
    courseraCoachRole: 'El asistente de IA (Coursera Coach) actúa como interlocutor socrático: cuando el estudiante plantea una hipótesis fiscal errónea, el Coach no califica con "Incorrecto", sino que le pide simular el impacto en la recaudación si la elasticidad precio-demanda es inelástica.'
  }
};

export const COURSERA_PROMPT_PATTERNS = [
  {
    category: 'Diseño de Micro-lecciones Multimodales (Representación)',
    title: 'Deconstrucción de conceptos densos en píldoras DUA',
    prompt: `Actúa como diseñador instruccional experto en DUA para Coursera. Transforma el siguiente capítulo técnico de 20 páginas sobre "[Tema]" en:
1. Una micro-lección de 8 minutos con guión audiovisual dividido en 3 bloques conceptuales.
2. Un glosario visual con definiciones en lenguaje claro y analogías cotidianas.
3. Un organizador gráfico en código Mermaid para mapear las relaciones causa-efecto.
Asegura que el vocabulario técnico complejo incluya andamiaje explícito.`
  },
  {
    category: 'Configuración del Coursera Coach (Compromiso y Andamiaje)',
    title: 'Prompt de sistema para tutor socrático no sustitutivo',
    prompt: `Eres el Asistente Pedagógico (Coach) del curso virtual "[Nombre del Curso]". Tu misión es apoyar el aprendizaje autónomo sin dar jamás la respuesta directa a los problemas evaluables.
Reglas de comportamiento:
1. Siempre responde con una pregunta reflexiva que active los conocimientos previos del estudiante.
2. Si el estudiante comete un error de cálculo o concepto, resalta el paso metodológico exacto donde se desvió y ofrece una pista conceptual.
3. Celebra el esfuerzo y la persistencia antes de corregir.
4. Si detectas frustración, sugiere una pausa de descanso o un recurso alternativo en formato audiovisual.`
  },
  {
    category: 'Evaluación Multimodal Flexible (Acción y Expresión)',
    title: 'Generación de opciones evaluativas equivalentes con rúbrica unificada',
    prompt: `Diseña una actividad de evaluación auténtica basada en el DUA para medir el resultado de aprendizaje: "[Resultado]".
Genera:
1. Tres opciones de entrega de evidencia equivalentes en rigor (escrita, audiovisual/oral, visual/infográfica).
2. Una rúbrica analítica única basada en criterios de fondo (argumentación, rigor empírico, viabilidad) que sea neutral respecto al formato de entrega elegido.
3. Una lista de verificación de autoevaluación paso a paso que el estudiante complete antes de enviar su trabajo.`
  }
];
