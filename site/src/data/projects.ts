/**
 * Proyectos destacados de la home.
 *
 * TODO (Santiago): sustituir estos ejemplos por proyectos reales.
 * - `images`: rutas dentro de /public/images/proyectos/ (p. ej. "/images/proyectos/nave-1.jpg").
 *   Si se deja vacío, se muestra el dibujo técnico de la tipología.
 * - `location` y `year` son opcionales: si no se rellenan, no se muestran.
 */
export type ProjectArt = "frame" | "truss" | "slab" | "crack";

export type Project = {
  id: string;
  title: string;
  category: string;
  location?: string;
  year?: string;
  challenge: string;
  solution: string;
  art: ProjectArt;
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    id: "rehabilitacion",
    title: "Rehabilitación de estructura existente",
    category: "Rehabilitación estructural",
    challenge:
      "Forjados con flechas visibles y dudas sobre su capacidad para el nuevo uso del edificio.",
    solution:
      "Inspección, comprobación de la capacidad portante y refuerzo dimensionado para mantener la estructura original.",
    art: "slab",
    images: [],
  },
  {
    id: "nave",
    title: "Nave industrial de estructura metálica",
    category: "Cálculo estructural",
    challenge:
      "Grandes luces sin pilares intermedios, con plazo y presupuesto cerrados desde el principio.",
    solution:
      "Pórticos optimizados según Eurocódigo 3, con perfiles ajustados para reducir acero sin perder margen.",
    art: "truss",
    images: [],
  },
  {
    id: "peritaje",
    title: "Peritaje de patologías en vivienda",
    category: "Informe pericial",
    challenge:
      "Fisuras en muros de carga y una propiedad que necesitaba saber si eran estructurales.",
    solution:
      "Diagnóstico del origen, seguimiento de la fisuración y dictamen técnico válido para la tramitación.",
    art: "crack",
    images: [],
  },
  {
    id: "obra",
    title: "Asistencia técnica en obra de hormigón",
    category: "Asistencia en obra",
    challenge:
      "Cambios en obra que afectaban a la estructura proyectada, con la constructora esperando respuesta.",
    solution:
      "Visitas de control, mediciones en obra y soluciones validadas con la dirección facultativa en días, no semanas.",
    art: "frame",
    images: [],
  },
];
