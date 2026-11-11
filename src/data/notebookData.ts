import { SourceDocument, ComparativeQuery, AnnotatedMatrixRow } from '../types';

export const AUTHORIZED_DOCUMENTS: SourceDocument[] = [
  {
    id: 'unesco-2024',
    title: 'Orientaciones para la IA Generativa en la Educación y la Investigación',
    institution: 'UNESCO',
    year: 2024,
    authors: 'Miao, F., & Holmes, W. (División de Políticas y Aprendizaje a lo Largo de Toda la Vida)',
    doiOrUrl: '10.54675/YYCS8277',
    excerptCount: 4,
    tags: ['Ética', 'Gobernanza', 'Autonomía Docente', 'Inclusión'],
    fullTextSummary: 'Establece directrices globales para priorizar la agencia humana, la soberanía de datos y la equidad pedagógica frente a la adopción precipitada de modelos fundacionales.',
    excerpts: [
      {
        id: 'unesco-p18',
        section: '3.1 Agencia Humana y Juicio Crítico',
        page: 18,
        text: 'La adopción de herramientas de IA generativa no debe mermar las capacidades humanas de pensamiento crítico ni reemplazar la interacción pedagógica genuina. Los docentes deben salvaguardar la deliberación reflexiva de los estudiantes frente a las respuestas automatizadas que proyectan una falsa certeza epistemológica.',
        topic: 'Agencia y pensamiento crítico'
      },
      {
        id: 'unesco-p24',
        section: '4.2 Brecha Digital de Segunda Generación',
        page: 24,
        text: 'La brecha de IA agrava las asimetrías existentes no solo por falta de hardware o ancho de banda, sino por la desigualdad en las competencias de alfabetización crítica sobre datos y la dependencia de infraestructuras cerradas controladas por monopolios del Norte Global.',
        topic: 'Equidad estructural y soberanía tecnológica'
      },
      {
        id: 'unesco-p32',
        section: '5.4 Evaluación y Validez de Aprendizajes',
        page: 32,
        text: 'Las instituciones de educación superior deben transitar de evaluaciones estandarizadas basadas en el producto final (ensayos tradicionales memorísticos) hacia evaluaciones procesuales y dialógicas donde el estudiante justifique su metodología, contraste fuentes primarias y audite explícitamente los borradores de IA.',
        topic: 'Transformación de la evaluación'
      },
      {
        id: 'unesco-p41',
        section: '6.1 Ética de Datos y Propiedad Intelectual',
        page: 41,
        text: 'Bajo ningún concepto los datos académicos de los estudiantes, producciones intelectuales no publicadas o registros evaluativos deben transferirse a servicios comerciales abiertos sin consentimiento informado explícito y mecanismos de anonimización garantizados.',
        topic: 'Privacidad y protección de datos'
      }
    ]
  },
  {
    id: 'ocde-2023',
    title: 'Digital Education Outlook 2023: Mapping the Global Educational Frontier',
    institution: 'OCDE (OECD Publishing)',
    year: 2023,
    authors: 'Vincent-Lancrin, S., & van der Vlies, R.',
    doiOrUrl: '10.1787/b787f714-en',
    excerptCount: 3,
    tags: ['Eficacia Didáctica', 'Analítica de Aprendizaje', 'Personalización', 'Mercado Laboral'],
    fullTextSummary: 'Analiza el impacto macroeconómico y de productividad de la IA adaptativa en los sistemas educativos de los países miembros, promoviendo la personalización algorítmica.',
    excerpts: [
      {
        id: 'ocde-p12',
        section: 'Chapter 1: The Promise of Adaptive Learning Systems',
        page: 12,
        text: 'Adaptive tutors and automated feedback systems can reduce formative grading time by up to 38%, allowing instructors to allocate higher-value office hours to targeted socio-emotional mentoring and specialized collaborative inquiry.',
        topic: 'Eficiencia y ahorro de tiempo docente'
      },
      {
        id: 'ocde-p35',
        section: 'Chapter 3: Skill Convergence & Cognitive Offloading',
        page: 35,
        text: 'The risk of cognitive offloading is acute when learners use language models as question-answering engines rather than conversational sparring partners. Empirical benchmarks show that students who actively dispute synthetic answers demonstrate 22% higher long-term conceptual retention than passive consumers.',
        topic: 'Sobredependencia cognitiva vs diálogo activo'
      },
      {
        id: 'ocde-p56',
        section: 'Chapter 5: Digital Infrastructure Investments',
        page: 56,
        text: 'Closing the algorithmic readiness gap requires state-subsidized compute vouchers and enterprise licensing for tertiary institutions to ensure equitable institutional deployment, mitigating disparities between elite research universities and vocational colleges.',
        topic: 'Inversión en infraestructura y licencias'
      }
    ]
  },
  {
    id: 'cepal-2024',
    title: 'Transformación Digital y Educación en América Latina: Desafíos para la Equidad',
    institution: 'CEPAL / OEI',
    year: 2024,
    authors: 'Bello, M., Trucco, D., & Morales, F.',
    doiOrUrl: '10.18356/9789210029871',
    excerptCount: 3,
    tags: ['Desigualdad Estructural', 'Conectividad Rural', 'Pedagogía Situada', 'Sur Global'],
    fullTextSummary: 'Examina la realidad sociotécnica latinoamericana donde el 42% de los hogares en zonas rurales carece de conectividad estable, cuestionando las premisas de soluciones universales basadas en IA.',
    excerpts: [
      {
        id: 'cepal-p14',
        section: 'Capítulo 2: Brechas Territoriales y Exclusión Silenciosa',
        page: 14,
        text: 'En América Latina, diseñar estrategias educativas que presuponen acceso ilimitado a asistentes de IA sincrónicos profundiza la exclusión territorial. El 43.6% de los centros educativos en zonas rurales carece de ancho de banda suficiente para soportar plataformas basadas en la nube continua.',
        topic: 'Brecha de conectividad material'
      },
      {
        id: 'cepal-p29',
        section: 'Capítulo 4: Pertinencia Curricular y Colonialidad del Saber',
        page: 29,
        text: 'Los modelos fundacionales de lenguaje reproducen un sesgo eurocéntrico y anglosajón en sus representaciones culturales y conceptuales. Sin una mediación pedagógica situada que confronte las respuestas sintéticas con realidades comunitarias locales, la IA actúa como vector de homogeneización epistemológica.',
        topic: 'Sesgo cultural y pertinencia local'
      },
      {
        id: 'cepal-p48',
        section: 'Capítulo 6: Docencia como Mediación Comunitaria',
        page: 48,
        text: 'El valor irreductible del educador en la región reside en su capacidad de tejer vínculos pedagógicos comunitarios y contextualizar el conocimiento, una dimensión afectiva y política que ningún tutor algorítmico automatizado puede reemplazar.',
        topic: 'Rol docente como mediador social'
      }
    ]
  }
];

export const COMPARATIVE_QUERIES: ComparativeQuery[] = [
  {
    id: 'query-1',
    question: '¿Qué convergencias y tensiones existen entre la OCDE, la UNESCO y la CEPAL respecto a la equidad de acceso y el impacto de la IA en la labor docente?',
    comparativeFocus: 'Equidad estructural, rol docente y soberanía pedagógica',
    aiResponse: `Al analizar el corpus integrado por la UNESCO (2024), la OCDE (2023) y la CEPAL (2024), se identifican patrones convergentes y marcadas discrepancias:

1. **Rechazo unánime al consumo pasivo (Convergencia)**:
Tanto la UNESCO como la OCDE coinciden en que la IA generativa no debe actuar como un sustituto directo de la lectura ni del juicio reflexivo del estudiante [1]. La OCDE documenta que los estudiantes que interpelan y discuten con el modelo retienen un 22% más de conceptos que quienes consumen pasivamente la respuesta sintética [2], alineándose con la exigencia de la UNESCO de preservar la deliberación humana frente a la "falsa certeza" de los modelos [1].

2. **Tensión sobre el rol docente y productividad**:
La OCDE enfatiza una narrativa de optimización y eficiencia, señalando que la automatización de la calificación formativa puede liberar hasta un 38% del tiempo docente para mentorías focalizadas [3]. En contraste, la CEPAL alerta que en el Sur Global la labor del maestro es ante todo una mediación socio-afectiva y política irreductible a métricas de eficiencia productivista [4].

3. **Discrepancia en la concepción de la brecha**:
Mientras la OCDE propone la superación de la brecha mediante inversión en licencias y vouchers estatales de cómputo [5], la CEPAL y la UNESCO advierten que la brecha es de infraestructura material y soberanía epistemológica: el 43.6% de las escuelas rurales carece de conectividad básica para sostener estas tecnologías [6], y los modelos actuales reproducen sesgos culturales ajenos a las comunidades locales [7].`,
    citations: [
      {
        number: 1,
        docId: 'unesco-2024',
        excerptId: 'unesco-p18',
        snippet: 'La adopción de herramientas de IA generativa no debe mermar las capacidades humanas de pensamiento crítico...',
        relevance: 'Respalda la necesidad de preservar la deliberación humana contra la falsa certeza epistemológica.'
      },
      {
        number: 2,
        docId: 'ocde-2023',
        excerptId: 'ocde-p35',
        snippet: 'Students who actively dispute synthetic answers demonstrate 22% higher long-term conceptual retention...',
        relevance: 'Aporta evidencia cuantitativa sobre el beneficio del diálogo crítico frente al consumo pasivo.'
      },
      {
        number: 3,
        docId: 'ocde-2023',
        excerptId: 'ocde-p12',
        snippet: 'Adaptive tutors and automated feedback systems can reduce formative grading time by up to 38%...',
        relevance: 'Fundamenta la postura de la OCDE orientada a la optimización del tiempo docente.'
      },
      {
        number: 4,
        docId: 'cepal-2024',
        excerptId: 'cepal-p48',
        snippet: 'El valor irreductible del educador en la región reside en su capacidad de tejer vínculos pedagógicos comunitarios...',
        relevance: 'Contrasta la visión productivista con la dimensión comunitaria y política del educador.'
      },
      {
        number: 5,
        docId: 'ocde-2023',
        excerptId: 'ocde-p56',
        snippet: 'Closing the algorithmic readiness gap requires state-subsidized compute vouchers and enterprise licensing...',
        relevance: 'Muestra la solución orientada a subsidios de mercado y licencias corporativas propuesta por la OCDE.'
      },
      {
        number: 6,
        docId: 'cepal-2024',
        excerptId: 'cepal-p14',
        snippet: 'El 43.6% de los centros educativos en zonas rurales carece de ancho de banda suficiente...',
        relevance: 'Aporta datos empíricos sobre la inviabilidad material de herramientas en la nube en el campo.'
      },
      {
        number: 7,
        docId: 'cepal-2024',
        excerptId: 'cepal-p29',
        snippet: 'Los modelos fundacionales de lenguaje reproducen un sesgo eurocéntrico y anglosajón...',
        relevance: 'Expone la colonialidad del saber y la homogeneización cultural producida por los LLM.'
      }
    ],
    criticalAnalysis: {
      agreement: {
        claim: 'La IA no puede reemplazar el juicio epistémico ni la lectura profunda del estudiante.',
        sourceSupport: 'Convergencia explícita entre UNESCO (p. 18) y OCDE (p. 35): el valor didáctico reside en el cuestionamiento activo del texto, no en la adopción acrítica del resumen.',
        reflection: 'Para la docencia, esto implica que solicitar un resumen a NotebookLM sin confrontar las fuentes primarias degrada el aprendizaje a una ilusión de dominio.'
      },
      tension: {
        claim: 'Medición de valor: ¿Eficiencia de tiempo/mercado vs. Mediación afectiva y soberanía pedagógica?',
        divergence: 'La OCDE enmarca el éxito en el ahorro porcentual de tiempo de corrección (38%), mientras CEPAL y UNESCO advierten que subordinar la pedagogía a la productividad olvida la dimensión comunitaria y acentúa la dependencia tecnológica de corporaciones extranjeras.',
        reflection: 'La postura docente no debe asumir la neutralidad de la herramienta: automatizar feedback sin criterio deshumaniza la relación pedagógica.'
      },
      void: {
        claim: 'Omisión de las condiciones de trabajo docente y la carga de conectividad en zonas no metropolitanas.',
        omittedAspect: 'Ninguno de los informes de la OCDE detalla cómo un docente con sobrecarga horaria en instituciones públicas sin conectividad puede verificar manualmente los sesgos de los modelos sin precarizar aún más su jornada laboral.',
        reflection: 'Los marcos de políticas a menudo presuponen un "docente ideal con tiempo ilimitado" para auditar IA, ignorando las condiciones laborales reales en Latinoamérica.'
      }
    }
  }
];

export const INITIAL_ANNOTATED_MATRIX: AnnotatedMatrixRow[] = [
  {
    id: 'row-1',
    thematicAxis: 'Agencia del Estudiante',
    aiSynthesis: 'La UNESCO y la OCDE concuerdan en que la IA debe usarse como interlocutor dialógico y no como sustituto de la lectura.',
    citationRef: 'UNESCO p.18 [1] / OCDE p.35 [2]',
    fidelityStatus: 'fiel',
    studentCorrection: 'La síntesis es fiel, pero omite que la OCDE midió esto experimentalmente con retención conceptual (+22%), mientras la UNESCO lo fundamenta desde los derechos humanos.',
    epistemicNote: 'Comprobado en página 18 de la fuente UNESCO. El término clave es "evitar la falsa certeza epistemológica".',
    author: 'Dra. Elena Ramos (Cátedra de Pedagogía)'
  },
  {
    id: 'row-2',
    thematicAxis: 'Productividad Docente vs Carga Laboral',
    aiSynthesis: 'La IA reduce en 38% el tiempo de evaluación formativa según la OCDE, beneficiando directamente a todos los docentes.',
    citationRef: 'OCDE p.12 [3]',
    fidelityStatus: 'descontextualizada',
    studentCorrection: 'Corrección necesaria: La OCDE señala "hasta un 38%" en sistemas adaptativos específicos, no en cualquier uso de IA. Además, la CEPAL demuestra que en escuelas rurales sin conectividad no hay tal ahorro, sino una brecha adicional.',
    epistemicNote: 'Alerta de sobregeneralización: la IA no ahorra tiempo por sí misma si la verificación docente consume el doble de horas.',
    author: 'Msc. Carlos Méndez (Investigador)'
  },
  {
    id: 'row-3',
    thematicAxis: 'Condiciones de Acceso Territorial',
    aiSynthesis: 'La brecha digital se resuelve proporcionando licencias y vouchers de cómputo a las universidades.',
    citationRef: 'OCDE p.56 [5]',
    fidelityStatus: 'sesgada',
    studentCorrection: 'Esta es la visión exclusiva de la OCDE (enfoque de subsidio de mercado). La CEPAL (p. 14) demuestra que el 43.6% de escuelas rurales ni siquiera tiene cableado eléctrico o señal 4G, por lo que las licencias son inútiles sin infraestructura base.',
    epistemicNote: 'Sesgo de mercado: la síntesis asumió la receta de la OCDE como verdad universal, invisibilizando la advertencia de CEPAL.',
    author: 'Prof. Andrea Ruiz (Sociología de la Educación)'
  }
];
