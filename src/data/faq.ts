export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Sesiones" | "Proceso" | "Familias";
}

export const faqData: FAQItem[] = [
  {
    id: "remision-medica",
    question: "¿Necesito una remisión médica?",
    answer:
      "No es necesaria ninguna remisión para solicitar la valoración. El servicio es particular y las familias pueden consultar de forma directa cuando identifiquen dudas sobre el habla, lenguaje o aprendizaje.",
    category: "General",
  },
  {
    id: "duracion-sesion",
    question: "¿Cuánto dura una sesión?",
    answer:
      "Cada sesión tiene una duración de 45 minutos e incluye un espacio de retroalimentación con los padres o cuidadores al finalizar, donde se comparten avances y orientaciones.",
    category: "Sesiones",
  },
  {
    id: "frecuencia-sesiones",
    question: "¿Con qué frecuencia son las sesiones?",
    answer:
      "La frecuencia se define de manera conjunta según las necesidades identificadas durante la valoración fonoaudiológica inicial y la disponibilidad de la familia (comúnmente una o dos veces por semana).",
    category: "Sesiones",
  },
  {
    id: "duracion-proceso",
    question: "¿Cuánto dura el proceso?",
    answer:
      "No existe una duración estándar ni garantizada. Cada proceso depende de las necesidades específicas, la regularidad en la asistencia, el ritmo particular de desarrollo del niño y el acompañamiento familiar en casa.",
    category: "Proceso",
  },
  {
    id: "mayores-10-anos",
    question: "¿Atienden niños mayores de 10 años?",
    answer:
      "Sí. Aunque el enfoque principal está dirigido a primera infancia y edad escolar, cada caso se evalúa individualmente dentro de la población infantil y juvenil.",
    category: "General",
  },
  {
    id: "seguimiento-e-informes",
    question: "¿Cómo se realiza el seguimiento?",
    answer:
      "Después de la valoración inicial se entrega un informe con hallazgos y recomendaciones. Durante el proceso se brinda retroalimentación constante a los padres y, cuando es necesario, se realizan informes o reuniones de articulación con el colegio.",
    category: "Proceso",
  },
  {
    id: "participacion-padres",
    question: "¿Los padres pueden entrar a la sesión?",
    answer:
      "En primera infancia (0 a 3 años) o en momentos de adaptación, la presencia del cuidador suele ser muy beneficiosa. Conforme el niño gana autonomía, trabajamos individualmente y dedicamos los minutos finales de cada sesión para conversar a fondo con la familia.",
    category: "Familias",
  },
  {
    id: "convenios-eps",
    question: "¿Tienen convenio con EPS o medicina prepagada?",
    answer:
      "Nuestros servicios se prestan en modalidad particular e independiente. Emitimos los comprobantes e informes necesarios en caso de que su póliza de salud o seguro ofrezca modalidad de reembolso.",
    category: "General",
  },
];
