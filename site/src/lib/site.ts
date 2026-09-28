export const site = {
  name: "TecnicaIE",
  url: "https://www.tecnicaie.es",
  title: "TecnicaIE | Ingeniería estructural y asistencia técnica en obra",
  description:
    "Cálculo y rehabilitación estructural, peritajes, informes técnicos y asistencia en obra. Santiago Zarazo Torres, Ingeniero Técnico Industrial colegiado (Col. Nº 2976 COITIVIGO).",
  email: "szarazo@tecnicaie.es",
  phone: "+34661538638",
  phoneDisplay: "+34 661 538 638",
  person: {
    name: "Santiago Zarazo Torres",
    role: "Ingeniero Técnico Industrial",
    license: "Col. Nº 2976 COITIVIGO",
    licenseUrl: "https://coitivigo.es",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/santiago-zarazo-76a18831/",
    instagram: "https://www.instagram.com/tecnica_ingenieria/",
  },
} as const;

// TODO: Sustituir por Formspree cuando se active el formulario.
const mailBody = [
  "Hola Santiago,",
  "",
  "Tipo de encargo (cálculo, rehabilitación, peritaje, asistencia en obra):",
  "Ubicación de la obra:",
  "Plazo aproximado:",
  "",
  "Breve descripción:",
  "",
].join("\n");

export const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Consulta de proyecto desde la web",
)}&body=${encodeURIComponent(mailBody)}`;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: `${site.url}/`,
  logo: `${site.url}/icon.svg`,
  image: `${site.url}/opengraph-image`,
  description:
    "Ingeniería estructural y asistencia técnica en obra: cálculo, rehabilitación, peritajes e informes técnicos.",
  email: site.email,
  telephone: site.phone,
  areaServed: ["ES", "EU"],
  knowsAbout: [
    "Cálculo estructural",
    "Rehabilitación estructural",
    "Peritajes",
    "Informes técnicos",
    "Asistencia técnica en obra",
    "Código Técnico de la Edificación",
    "Código Estructural",
    "Eurocódigos",
  ],
  founder: {
    "@type": "Person",
    name: site.person.name,
    jobTitle: site.person.role,
    identifier: site.person.license,
  },
  sameAs: [site.social.linkedin, site.social.instagram],
};
