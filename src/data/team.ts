export interface Professional {
  id: string;
  name: string;
  role: string;
  specialty?: string;
  education: string[];
  experience: string;
  bio: string[];
  focusAreas: string[];
  photoPlaceholder: string;
}

export const teamData: Professional[] = [
  {
    id: "johanna-gomez",
    name: "Johanna Gómez",
    role: "Fonoaudióloga",
    education: ["Fonoaudióloga egresada de la Corporación Universitaria Iberoamericana"],
    experience: "Más de cinco años de experiencia en intervención y valoración fonoaudiológica con niños, jóvenes y adultos.",
    bio: [
      "Soy fonoaudióloga egresada de la Corporación Universitaria Iberoamericana, con más de cinco años de experiencia en intervención y valoración fonoaudiológica con niños, jóvenes y adultos.",
      "Mi trayectoria profesional me ha permitido desarrollar una mirada integral sobre los procesos de comunicación, con especial interés y experiencia en el abordaje del lenguaje y la lectoescritura en población infantil.",
      "Mi práctica se caracteriza por brindar una atención cálida, cercana y respetuosa, basada en las necesidades y particularidades de cada persona. En el trabajo con niños y niñas, considero fundamental crear espacios seguros y de confianza que favorezcan su participación y aprendizaje.",
    ],
    focusAreas: [
      "Valoración e intervención fonoaudiológica",
      "Abordaje del lenguaje en población infantil",
      "Procesos de lectoescritura",
      "Acompañamiento cálido y centrado en la familia",
    ],
    photoPlaceholder: "JG",
  },
  {
    id: "lina-rodriguez",
    name: "Lina Rodríguez",
    role: "Fonoaudióloga",
    specialty: "Especialista en Neuropsicología Escolar",
    education: [
      "Fonoaudióloga egresada de la Institución Universitaria Escuela Colombiana de Rehabilitación (ECR)",
      "Especialista en Neuropsicología Escolar del Politécnico Grancolombiano",
    ],
    experience: "Más de tres años de experiencia en procesos de valoración e intervención dirigidos a niños y jóvenes.",
    bio: [
      "Soy fonoaudióloga egresada de la Institución Universitaria Escuela Colombiana de Rehabilitación y especialista en Neuropsicología Escolar del Politécnico Grancolombiano.",
      "Cuento con más de tres años de experiencia en procesos de valoración e intervención dirigidos a niños y jóvenes, con énfasis en el área de habla y lenguaje.",
      "Mi formación en neuropsicología escolar me permite abordar cada proceso terapéutico desde una comprensión integral del desarrollo y el aprendizaje.",
    ],
    focusAreas: [
      "Énfasis en el área de habla y lenguaje",
      "Neuropsicología escolar y procesos de aprendizaje",
      "Valoración e intervención en niños y jóvenes",
      "Comprensión integral del desarrollo cognitivo",
    ],
    photoPlaceholder: "LR",
  },
];
