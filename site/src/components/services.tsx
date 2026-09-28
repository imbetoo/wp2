import { ArrowUpRight } from "lucide-react";
import { mailtoHref } from "@/lib/site";
import { MaskLines, Reveal } from "./reveal";

const services = [
  {
    n: "01",
    title: "Cálculo y rehabilitación estructural",
    desc: "Dimensionado de estructuras de cualquier tipo. Análisis de cargas, capacidad portante y viabilidad, con soluciones que tienen en cuenta plazos y coste.",
    tags: ["Dimensionado", "Análisis de cargas", "Capacidad portante", "Viabilidad"],
  },
  {
    n: "02",
    title: "Asistencia técnica en obra",
    desc: "Estudio y seguimiento a pie de obra. Mediciones precisas de estructura, visitas de control y apoyo a la dirección facultativa o a la constructora.",
    tags: ["Mediciones", "Visitas de control", "Apoyo a D.F.", "Constructoras"],
  },
  {
    n: "03",
    title: "Informes técnicos y peritajes",
    desc: "Dictámenes de patologías constructivas, certificados de solidez estructural y documentación técnica lista para tramitaciones administrativas.",
    tags: ["Patologías", "Certificados de solidez", "Dictámenes", "Tramitación"],
  },
];

export function Services() {
  return (
    <section id="servicios" aria-labelledby="services-title" className="border-t border-line">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-4 py-24 sm:px-8 md:py-32 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-eyebrow tracking-[0.14em] text-brand-ink uppercase">
              Servicios
            </p>
            <h2
              id="services-title"
              className="font-display mt-5 text-h2 leading-[1.02] font-semibold tracking-[-0.035em]"
            >
              <MaskLines animateOnView lines={["Tres formas", "de ayudarle."]} />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-[24rem] leading-relaxed text-muted">
                Del primer número del cálculo a la última visita de obra. Con
                un único técnico responsable de principio a fin.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
        <ol>
          {services.map((s) => (
            <Reveal as="li" key={s.n} className="group border-t border-line last:border-b">
              <article className="grid gap-4 py-10 sm:grid-cols-[5rem_1fr] md:py-14">
                <span className="font-mono text-sm text-brand-ink">{s.n}</span>
                <div className="min-w-0">
                  <h3 className="font-display text-h3 leading-tight font-medium tracking-[-0.025em]">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-[36rem] leading-relaxed text-ink-soft">
                    {s.desc}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Incluye">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-3 py-1 text-sm text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
          <Reveal className="pt-10">
            <a
              href={mailtoHref}
              className="link-line inline-flex items-center gap-2 font-medium text-ink"
            >
              Cuéntenos su caso
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
