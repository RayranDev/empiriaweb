export interface StageItem {
  id: string;
  range: string;
  title: string;
  description: string;
  emphasis: string[];
  note?: string;
  badgeColor: string;
}

export const stagesData: StageItem[] = [
  {
    id: "primera-infancia",
    range: "0 – 3 años",
    title: "Primera Infancia",
    description:
      "Período crítico para sentar las bases de la comunicación, la intención compartida y los primeros vínculos afectivos a través del balbuceo, gestos y primeras palabras.",
    emphasis: [
      "Desarrollo temprano del lenguaje",
      "Aparición y enriquecimiento de las primeras palabras",
      "Comunicación intencional y gestual",
      "Interacción social y reciprocidad con cuidadores",
      "Orientación y acompañamiento sensible a la familia",
    ],
    badgeColor: "bg-[#E8E4F7] text-[#5B4B9E]",
  },
  {
    id: "desarrollo-infantil",
    range: "4 – 6 años",
    title: "Desarrollo Infantil",
    description:
      "Etapa de explosión léxica, estructuración sintáctica y refinamiento fonético, preparatoria para la inserción armónica en la vida escolar.",
    emphasis: [
      "Claridad e inteligibilidad en la articulación del habla",
      "Estructuración de oraciones completas y narración",
      "Habilidades pragmáticas y juego cooperativo",
      "Conciencia fonológica (juegos con rimas y sílabas)",
      "Preparación integral para los retos escolares",
    ],
    badgeColor: "bg-[#A8C5E8]/30 text-[#2D2D3A]",
  },
  {
    id: "etapa-escolar",
    range: "7 – 10 años",
    title: "Etapa Escolar",
    description:
      "Consolidación de las herramientas académicas esenciales para el aprendizaje formal, la autonomía en tareas y la confianza personal.",
    emphasis: [
      "Afianzamiento y fluidez en lectura y escritura",
      "Comprensión de textos de complejidad creciente",
      "Organización y expresión escrita",
      "Habilidades de comunicación y razonamiento verbal",
      "Atención, concentración y autorregulación del aprendizaje",
    ],
    badgeColor: "bg-[#C3B8E8]/35 text-[#5B4B9E]",
  },
  {
    id: "mayores-10-anos",
    range: "Mayores de 10 años",
    title: "Población Infantil y Juvenil",
    description:
      "Evaluamos cada situación de manera individualizada, adaptando la intervención a las exigencias académicas y personales de cada joven.",
    emphasis: [
      "Comprensión lectora profunda y técnicas de estudio",
      "Fluidez verbal y habilidades discursivas avanzadas",
      "Comunicación social en entornos entre pares",
      "Estrategias de aprendizaje compensatorio",
    ],
    note: "Los rangos etarios representan marcos orientativos de desarrollo y nunca un criterio diagnóstico rígido.",
    badgeColor: "bg-[#B4C4EA]/30 text-[#2D2D3A]",
  },
];
