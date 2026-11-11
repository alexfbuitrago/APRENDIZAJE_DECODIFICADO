export type ToolTab = 'activity_redesign' | 'notebooklm' | 'perplexity' | 'copilot' | 'dua' | 'prompts_config';

export interface AugmentedActivityDesign {
  id: string;
  activityTitle: string;
  courseName: string;
  academicLevel: string;
  authorName: string;
  institution: string;
  
  // 1. Las Cuatro Preguntas Guía
  capacityTarget: string;
  observableVerb: string;
  challengeSummary: string;
  aiRoleBoundary: string;
  evidenceSummary: string;

  // 2. Las Seis Decisiones de la Experiencia Aumentada
  decisionChallenge: string;      // 1. El reto: problema que moviliza el aprendizaje
  decisionRole: string;           // 2. El rol: perspectiva desde la cual actúa el estudiante
  decisionSources: string;        // 3. Las fuentes: materiales que sostienen y cómo se validan
  decisionAiInteraction: string;  // 4. Interacción con IA: para qué se usa y límites expresos
  decisionProduct: string;        // 5. El producto: resultado esperado tangible
  decisionEvidence: string;       // 6. La evidencia: verificación de aprendizaje y transferencia

  // 3. La Prueba de Resistencia (Stress Test)
  stressTestVerdict: 'pass' | 'fail' | 'in_progress';
  stressTestExplanation: string;  // ¿Sigue siendo valiosa si la IA falla, alucina o sesga?
  studentCorrectionAction: string;// Cómo el estudiante detecta, verifica y enmienda

  // 4. Evaluación y Auditoría del Diseño
  coherenceAnalysis: string;      // Coherencia entre capacidad y evidencia
  privacyMeasures: string;        // Anticipación de privacidad y datos sensibles
  accessibilityMeasures: string;  // Anticipación de accesibilidad DUA
  biasMitigationMeasures: string; // Anticipación y mitigación de sesgos
}

export interface SourceDocument {
  id: string;
  title: string;
  institution: string;
  year: number;
  authors: string;
  doiOrUrl: string;
  excerptCount: number;
  tags: string[];
  fullTextSummary: string;
  excerpts: {
    id: string;
    section: string;
    page: number;
    text: string;
    topic: string;
  }[];
}

export interface ComparativeQuery {
  id: string;
  question: string;
  comparativeFocus: string;
  aiResponse: string;
  citations: {
    number: number;
    docId: string;
    excerptId: string;
    snippet: string;
    relevance: string;
  }[];
  criticalAnalysis: {
    agreement: {
      claim: string;
      sourceSupport: string;
      reflection: string;
    };
    tension: {
      claim: string;
      divergence: string;
      reflection: string;
    };
    void: {
      claim: string;
      omittedAspect: string;
      reflection: string;
    };
  };
}

export interface AnnotatedMatrixRow {
  id: string;
  thematicAxis: string;
  aiSynthesis: string;
  citationRef: string;
  fidelityStatus: 'fiel' | 'parcial' | 'sesgada' | 'descontextualizada';
  studentCorrection: string;
  epistemicNote: string;
  author: string;
}

export interface FunnelStage {
  step: number;
  name: string;
  subtitle: string;
  roleOfAI: string;
  limitations: string;
  humanVerificationMandate: string;
  outputArtifact: string;
  metrics: {
    label: string;
    value: string;
  };
}

export interface PrimarySourceAudit {
  id: string;
  title: string;
  doi: string;
  journal: string;
  perplexitySummary: string;
  primarySourceFinding: string;
  discrepancyType: 'discrepancia_muestra' | 'conclusiones_exageradas' | 'citacion_precisa';
  verdict: string;
  criticalAnalysis: string;
}

export interface ReviewDimension {
  id: string;
  name: string;
  question: string;
  whatAiMisses: string;
  humanAction: string;
  exampleFinding: string;
  status: 'passed' | 'warning' | 'needs_edit';
}

export interface DuaNetwork {
  id: 'engagement' | 'representation' | 'action_expression';
  name: string;
  brainNetwork: string;
  subtitle: string;
  neuroscienceBasis: string;
  coreQuestion: string;
  colorTheme: string;
  guidelines: {
    tier: string;
    title: string;
    description: string;
    chatGptCourseraPrompt: string;
    concreteExample: string;
  }[];
}

export interface CourseModuleAudited {
  id: string;
  unitTitle: string;
  traditionalFormat: {
    materials: string;
    delivery: string;
    evaluation: string;
    barriersIdentified: string[];
  };
  duaTransformation: {
    engagementSolution: string;
    representationSolution: string;
    actionExpressionSolution: string;
    courseraCoachRole: string;
  };
}
