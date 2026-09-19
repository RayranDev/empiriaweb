export interface ContactInfo {
  name: string;
  tagline: string;
  specialty: string;
  phoneRaw: string;
  phoneFormatted: string;
  whatsAppUrl: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    country: string;
    full: string;
  };
  schedule: {
    weekdays: string;
    saturdays: string;
    sundays: string;
  };
  social: {
    instagram: string;
    instagramUrl: string;
  };
  defaultWhatsAppMessage: string;
}

export const contactData: ContactInfo = {
  name: "Centro Terapéutico Empiria",
  tagline: "Fonoaudiología infantil con un enfoque humano, personalizado y profesional.",
  specialty: "Fonoaudiología infantil",
  phoneRaw: "573127366606",
  phoneFormatted: "+57 312 736 6606",
  whatsAppUrl: "https://wa.me/573127366606",
  email: "centroterapeuticoempiria@gmail.com",
  address: {
    street: "Avenida Calle 24 #74-55",
    neighborhood: "Barrio Modelia",
    city: "Bogotá",
    country: "Colombia",
    full: "Avenida Calle 24 #74-55, Barrio Modelia, Bogotá, Colombia",
  },
  schedule: {
    weekdays: "Lunes a viernes: 9:00 a.m. – 6:00 p.m.",
    saturdays: "Sábados: 9:00 a.m. – 5:00 p.m.",
    sundays: "Domingos: Cerrado",
  },
  social: {
    instagram: "@centrot.empiria",
    instagramUrl: "https://instagram.com/centrot.empiria",
  },
  defaultWhatsAppMessage:
    "Hola, quisiera recibir información sobre el proceso de valoración fonoaudiológica infantil en Centro Terapéutico Empiria.",
};

export const getWhatsAppLink = (customMessage?: string) => {
  const text = customMessage || contactData.defaultWhatsAppMessage;
  return `https://wa.me/${contactData.phoneRaw}?text=${encodeURIComponent(text)}`;
};
