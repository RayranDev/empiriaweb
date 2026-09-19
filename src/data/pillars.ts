export interface Pillar {
  id: string;
  title: string;
  description: string;
  iconName: "UserCheck" | "HeartHandshake" | "School" | "Award";
  highlight: string;
}

export const pillarsData: Pillar[] = [
  {
    id: "atencion-personalizada",
    title: "Atención personalizada",
    description:
      "Cada sesión es individual. Diseñamos el proceso terapéutico según el ritmo, las necesidades y los intereses particulares de cada niño.",
    highlight: "Sesiones 1 a 1 sin intervenciones grupales estandarizadas.",
    iconName: "UserCheck",
  },
  {
    id: "familia-en-el-proceso",
    title: "Familia como parte del proceso",
    description:
      "El acompañamiento de la familia es fundamental. Compartimos avances y orientamos sobre cómo acompañar desde casa.",
    highlight: "Espacio de retroalimentación en cada sesión y pautas claras.",
    iconName: "HeartHandshake",
  },
  {
    id: "articulacion-colegio",
    title: "Articulación con el colegio",
    description:
      "Cuando es necesario, articulamos el trabajo con el entorno educativo del niño para unificar metas pedagógicas.",
    highlight: "Reuniones e informes colaborativos con docentes y orientación.",
    iconName: "School",
  },
  {
    id: "enfoque-humano",
    title: "Enfoque humano y profesional",
    description:
      "Combinamos calidez, empatía y rigurosidad profesional, generando un entorno seguro donde cada niño florece a su tiempo.",
    highlight: "Ambiente cálido, libre de presiones y con fundamento clínico.",
    iconName: "Award",
  },
];
