import { ReviewDimension } from '../types';

export interface CopilotCaseStudy {
  curricularGoal: string;
  targetAudience: string;
  sourceOfData: string;
  wordPromptUsed: string;
  rawAiDraft: {
    caseTitle: string;
    narrative: string;
    inquiryQuestions: string[];
    rubricCriteria: {
      criterion: string;
      weight: string;
      descriptors: {
        insufficient: string;
        proficient: string;
        exemplary: string;
      };
    }[];
  };
  humanAuditedVersion: {
    caseTitle: string;
    narrative: string;
    adjustmentsMade: string[];
    inquiryQuestions: string[];
    rubricCriteria: {
      criterion: string;
      weight: string;
      descriptors: {
        insufficient: string;
        proficient: string;
        exemplary: string;
      };
    }[];
  };
}

export const COPILOT_CASE_STUDY: CopilotCaseStudy = {
  curricularGoal: 'Analizar las desigualdades socioeconómicas y la segregación territorial en el acceso a bienes públicos esenciales (agua potable y saneamiento) a partir de evidencia empírica contrastada.',
  targetAudience: 'Estudiantes de pregrado universitario en Ciencias Sociales, Economía o Políticas Públicas (4º a 6º semestre).',
  sourceOfData: 'Cifras oficiales de libre acceso: DANE (Censo Nacional de Población y Vivienda 2018 / GEIH 2023), Superintendencia de Servicios Públicos Domiciliarios y CEPAL (Base CEPALSTAT).',
  wordPromptUsed: `Actúa como diseñador curricular universitario senior en políticas públicas. Redacta en formato Word un caso pedagógico de 500 palabras para estudiantes de 5º semestre sobre brechas territoriales en agua potable en la cuenca del Magdalena, utilizando únicamente datos públicos agregados del DANE y la SSPD. Incluye: 1) Contexto socioeconómico con dos municipios comparados; 2) Batería de 4 preguntas de indagación progresiva (desde análisis descriptivo hasta propuesta de política); 3) Una rúbrica analítica en tabla con 3 criterios y 3 niveles de desempeño. NO inventes cifras y mantén un tono académico neutral.`,
  rawAiDraft: {
    caseTitle: 'Borrador 1 (Generado por Copilot en Word): El Dilema del Agua en San Mateo y Villa Esperanza',
    narrative: `En la cuenca media del río Magdalena se ubican dos municipios vecinos: San Mateo (cabecera urbana consolidada con 85.000 habitantes) y Villa Esperanza (municipio rural ribereño con 24.000 habitantes). A pesar de compartir la misma fuente hídrica, la calidad de vida de sus poblaciones es dramáticamente opuesta.

Según reportes recientes, mientras San Mateo disfruta de un 98% de cobertura de agua potable las 24 horas del día con un Índice de Riesgo de la Calidad del Agua (IRCA) de 1.2% (Agua Apta para Consumo Humano), en Villa Esperanza solo el 28% de las familias cuenta con tubería y el agua llega únicamente tres días por semana sin tratamiento adecuado (IRCA del 44%, riesgo alto). Las comunidades de Villa Esperanza han protagonizado bloqueos viales exigiendo al alcalde una solución inmediata. Las familias más pobres destinan hasta el 18% de sus ingresos mensuales a la compra de agua en pimpinas a camiones cisterna privados no regulados, perpetuando un círculo vicioso de pobreza y enfermedades gastrointestinales que afectan la asistencia escolar.`,
    inquiryQuestions: [
      '1. ¿Cuál es el porcentaje de cobertura de agua en San Mateo frente a Villa Esperanza?',
      '2. Explique por qué el agua es un derecho humano según la ONU.',
      '3. Si usted fuera el alcalde de Villa Esperanza, ¿qué haría para solucionar el problema?',
      '4. Redacte un ensayo de 2 páginas proponiendo un plan de inversión municipal.'
    ],
    rubricCriteria: [
      {
        criterion: 'Identificación de datos',
        weight: '30%',
        descriptors: {
          insufficient: 'No menciona las cifras del caso.',
          proficient: 'Menciona las coberturas de ambos municipios.',
          exemplary: 'Compara detalladamente todas las cifras del texto.'
        }
      },
      {
        criterion: 'Comprensión del problema',
        weight: '40%',
        descriptors: {
          insufficient: 'El análisis es superficial.',
          proficient: 'Explica las causas de la falta de agua.',
          exemplary: 'Demuestra excelente comprensión del caso.'
        }
      },
      {
        criterion: 'Redacción y ortografía',
        weight: '30%',
        descriptors: {
          insufficient: 'Tiene más de 5 errores ortográficos.',
          proficient: 'Buena redacción general.',
          exemplary: 'Redacción impecable y formato prolijo.'
        }
      }
    ]
  },
  humanAuditedVersion: {
    caseTitle: 'Versión Curada por el Docente (Post-Revisión Crítica v2): Segregación Territorial e Institucionalidad en el Acceso al Agua',
    narrative: `En el departamento del Magdalena, el análisis comparado entre la cabecera distrital de Santa Marta y el municipio ribereño de Puebloviejo permite examinar cómo las asimetrías de capacidad fiscal y diseño institucional reproducen trampas de pobreza.

Con base en datos abiertos del DANE (Censo 2018) y el Sistema Único de Información (SUI-SSPD 2023):
- Santa Marta (Urbano): Cobertura formal del 84.2%, continuidad promedio de 16.4 horas/día, IRCA de 4.8% (Sin Riesgo). Recaudo por tarifa del 76% y subsidios cruzados estratos 5 y 6 hacia estratos 1 y 2.
- Puebloviejo (Rural/Anfibio): Cobertura por red del 31.4%, continuidad de 6.2 horas/semana, IRCA de 38.6% (Riesgo Alto). El 68.3% de la población se encuentra en pobreza multidimensional (IPM), y el gasto de bolsillo en agua no tratada representa el 14.2% del ingreso de los hogares en el decil 1 (DANE-GEIH).

El caso no responde a una simple "desidia del alcalde local", sino a factores estructurales: dispersión poblacional en palafitos, degradación de la Ciénaga Grande, baja capacidad de formulación de proyectos ante el Sistema General de Regalías (SGR) y fragilidad financiera de la empresa pública prestadora.`,
    adjustmentsMade: [
      'Corrección de datos alucinados: La IA inventó municipios ficticios con cifras extremas (98% vs 28%); el docente sustituyó con municipios reales y cifras empíricas verificadas en el SUI-DANE.',
      'Elevación del nivel cognitivo de Bloom: De preguntas memorísticas ("¿Cuál es el porcentaje?") a preguntas de análisis causal y diseño de instrumentos fiscales.',
      'Rúbrica profesionalizada: Eliminación de criterios ambiguos ("excelente comprensión") por descriptores analíticos observables con foco en evidencia.',
      'Desarticulación de sesgos: Se eliminó el tono estigmatizante que reducía el problema a "protestas y culpa del alcalde", introduciendo variables institucionales (SGR, capacidad fiscal, estratificación).'
    ],
    inquiryQuestions: [
      '1. (Análisis Descriptivo-Espacial): A partir de las cifras del DANE y SUI, elabore una tabla que relacione la continuidad del servicio con el Índice de Pobreza Multidimensional (IPM). ¿Qué correlación estructural se evidencia?',
      '2. (Causalidad Institucional): ¿Por qué el mecanismo de subsidios cruzados (estratos 5 y 6 subvencionando estratos 1 y 2) resulta inviable en municipios como Puebloviejo en comparación con Santa Marta? Justifique con base en la composición socioeconómica de los usuarios.',
      '3. (Evaluación de Política Pública): Analice críticamente las restricciones que enfrenta el municipio de Puebloviejo para apalancar recursos del Sistema General de Regalías (SGR) u OCAD Paz para obras de acueducto rural.',
      '4. (Propuesta Situada): Formule una estrategia viable de política pública que contemple soluciones descentralizadas (cosecha de agua de lluvia o plantas comunitarias) frente a la extensión tradicional de redes convencionales de acueducto.'
    ],
    rubricCriteria: [
      {
        criterion: 'Uso e Interpretación de Evidencia Empírica (30%)',
        weight: '30%',
        descriptors: {
          insufficient: 'Se limita a transcribir los datos sin establecer relaciones causales entre continuidad, IRCA y pobreza multidimensional.',
          proficient: 'Interpreta las métricas oficiales identificando cómo la baja continuidad y el alto IRCA afectan desproporcionadamente al decil 1.',
          exemplary: 'Modela rigurosamente la correlación empírica, calculando elasticidades o contrastando la carga del gasto de bolsillo frente al umbral de asequibilidad de la OMS/ONU (<3% del ingreso).'
        }
      },
      {
        criterion: 'Análisis Institucional y Fiscal (40%)',
        weight: '40%',
        descriptors: {
          insufficient: 'Atribuye la problemática exclusivamente a factores individuales, morales o coyunturales ("corrupción" o "desidia"), sin análisis normativo.',
          proficient: 'Identifica la falla del esquema de subsidios cruzados de la Ley 142/94 en municipios con base tributaria precaria y alta informalidad.',
          exemplary: 'Articula un diagnóstico exhaustivo conectando la Ley de Servicios Públicos, la rigidez del SGR, la capacidad de cofinanciación municipal y las limitaciones de la gobernanza comunitaria.'
        }
      },
      {
        criterion: 'Viabilidad y Pertinencia de la Propuesta (30%)',
        weight: '30%',
        descriptors: {
          insufficient: 'Propone soluciones genéricas descontextualizadas (ej. "construir una mega-represa") sin estimación de costos ni consideración territorial.',
          proficient: 'Plantea alternativas técnicas y de gestión pertinentes (acueductos veredales, tecnologías apropiadas) con fuentes plausibles de financiamiento.',
          exemplary: 'Diseña una propuesta multinivel que combina soluciones descentralizadas adaptadas a zonas anfibias, esquema tarifario progresivo y mecanismos de veeduría ciudadana comunitaria.'
        }
      }
    ]
  }
};

export const REVIEW_DIMENSIONS: ReviewDimension[] = [
  {
    id: 'dim-data',
    name: '1. Verificación de Cifras y Datos Empíricos',
    question: '¿Las cifras citadas provienen de censos, registros administrativos u observatorios oficiales, o son alucinaciones plausibles generadas por el modelo?',
    whatAiMisses: 'Copilot inventa números verosímiles pero falsos para dar fuerza retórica al texto (ej. "el 98% tiene agua" o "el 18% del ingreso"), sin respaldo de una base de datos real.',
    humanAction: 'Cotejar con el portal de datos abiertos del DANE, Banco Mundial o CEPAL. Reemplazar estimaciones genéricas por registros con año y metodología citable.',
    exampleFinding: 'En el borrador 1, Copilot inventó municipios ficticios con brechas caricaturescas. El docente los sustituyó por datos reales de Santa Marta y Puebloviejo del DANE 2018.',
    status: 'needs_edit'
  },
  {
    id: 'dim-language',
    name: '2. Lenguaje, Tono y Registro Académico',
    question: '¿El texto mantiene un tono de análisis académico neutral o recurre al sensacionalismo dramático o la prosa burocrática vacía?',
    whatAiMisses: 'La IA tiende a usar clichés narrativos melodramáticos ("viven en condiciones infrahumanas", "círculo vicioso dramático") o paternalismo condescendiente.',
    humanAction: 'Ajustar el registro hacia conceptos sociológicos precisos: "segregación socio-espacial", "trampa de pobreza", "incapacidad fiscal", "costos de transacción".',
    exampleFinding: 'Se eliminaron frases efectistas de crónica periodística para sustituirlas por indicadores formales de Pobreza Multidimensional y gasto de bolsillo.',
    status: 'passed'
  },
  {
    id: 'dim-cognition',
    name: '3. Nivel Cognitivo y Dificultad (Taxonomía de Bloom)',
    question: '¿Las preguntas movilizan procesos de análisis, evaluación y diseño, o se limitan a la recuperación memorística de datos ya dados en el párrafo?',
    whatAiMisses: 'Copilot genera preguntas obvias y literales ("¿Cuál es el porcentaje de agua?") que el estudiante responde con simple copiar y pegar sin pensar.',
    humanAction: 'Reescribir las preguntas exigiendo formulación de hipótesis, contraste de políticas públicas alternativas y justificación con teoría de la disciplina.',
    exampleFinding: 'Se transformó la pregunta "¿Qué haría si fuera alcalde?" en un reto de análisis de viabilidad fiscal sobre subsidios cruzados y SGR.',
    status: 'needs_edit'
  },
  {
    id: 'dim-bias',
    name: '4. Detección de Sesgos y Representación Social',
    question: '¿El caso estigmatiza a las poblaciones vulnerables presentándolas únicamente como víctimas pasivas o actores violentos de bloqueos?',
    whatAiMisses: 'Los modelos asocian automáticamente pobreza rural con caos, ignorancia o revuelta violenta, invisibilizando las formas organizativas comunitarias legítimas.',
    humanAction: 'Integrar la agencia de las organizaciones comunitarias de acueductos veredales y señalar las barreras institucionales en lugar de culpar a las víctimas.',
    exampleFinding: 'Se recontextualizó el conflicto: el problema no es "desidia vecinal", sino una falla estructural de diseño de la Ley de Servicios Públicos.',
    status: 'passed'
  },
  {
    id: 'dim-curriculum',
    name: '5. Coherencia Curricular y Criterios Evaluativos',
    question: '¿La rúbrica evalúa con precisión el resultado de aprendizaje previsto de la asignatura o gasta el 30% del peso en ortografía superficial?',
    whatAiMisses: 'Copilot asigna descriptores genéricos inoperables ("demuestra excelente comprensión", "buena redacción") que no sirven para dar retroalimentación formativa.',
    humanAction: 'Construir descriptores de desempeño observables y desglosar el puntaje hacia el razonamiento analítico y el uso de evidencia empírica.',
    exampleFinding: 'Se reemplazó la categoría vaga "comprensión del problema" por "Uso e interpretación de evidencia empírica (30%)" y "Análisis institucional (40%)".',
    status: 'passed'
  }
];

export const DATA_PRIVACY_GUIDELINES = [
  {
    level: 'PROHIBIDO (Riesgo Crítico / Violación Legal)',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    icon: 'AlertOctagon',
    items: [
      'Nombres completos, documentos de identidad o expedientes académicos de estudiantes reales.',
      'Calificaciones individuales protegidas por normativas de privacidad (FERPA, Ley de Protección de Datos Personales).',
      'Actas de comités disciplinarios, evaluaciones psicológicas o informes de bienestar estudiantil.',
      'Datos de investigaciones en curso no publicadas, patentes o proyectos bajo acuerdo de confidencialidad (NDA).'
    ]
  },
  {
    level: 'RESTRINGIDO (Requiere Anonimización y Permiso Institucional)',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    icon: 'AlertTriangle',
    items: [
      'Ejercicios o respuestas de exámenes de estudiantes previos para usarlos como muestras de entrenamiento (deben ser 100% anonimizados y con consentimiento).',
      'Encuestas de satisfacción docente internas no publicadas.',
      'Borradores de diseño curricular en proceso de acreditación ante ministerios de educación.'
    ]
  },
  {
    level: 'PERMITIDO Y RECOMENDADO (Datos Abiertos y Públicos)',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    icon: 'CheckCircle2',
    items: [
      'Censos y estadísticas públicas oficiales agregadas (DANE, INE, Banco Mundial, CEPAL, OCDE).',
      'Artículos académicos publicados en revistas Open Access con DOI.',
      'Normativa, leyes, decretos y jurisprudencia pública.',
      'Objetivos pedagógicos, competencias de programas y temarios aprobados de asignaturas.'
    ]
  }
];
