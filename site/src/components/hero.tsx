import { ArrowRight } from "lucide-react";
import { mailtoHref } from "@/lib/site";
import { MaskLines, Reveal } from "./reveal";
import { StructureDrawing } from "./structure-drawing";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative mx-auto grid min-h-[100svh] max-w-[90rem] grid-cols-1 content-center gap-x-12 gap-y-10 px-4 pt-28 pb-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:pt-32"
    >
      <div className="min-w-0 lg:col-span-12">
        <Reveal distance={8}>
          <p className="flex items-center gap-2.5 font-mono text-eyebrow tracking-[0.14em] text-muted uppercase">
            <span className="size-2 rounded-full bg-brand" aria-hidden="true" />
            Disponible para nuevos proyectos
          </p>
        </Reveal>

        <h1
          id="hero-title"
          className="font-display mt-6 text-hero leading-[0.95] font-semibold tracking-[-0.045em] text-balance"
        >
          <MaskLines
            delay={0.1}
            lines={[
              "Estructuras",
              "bien calculadas.",
              <span key="l3" className="text-muted">
                Obras sin sorpresas.
              </span>,
            ]}
          />
        </h1>
      </div>

      <div className="min-w-0 lg:col-span-6 lg:self-end">
        <Reveal delay={0.45}>
          <p className="max-w-[38rem] text-lead leading-relaxed text-ink-soft">
            Cálculo, rehabilitación, peritajes y asistencia en obra para
            arquitectos, constructoras y particulares. Más de 20 años
            resolviendo estructuras con el CTE, el Código Estructural y los
            Eurocódigos sobre la mesa.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={mailtoHref} className="btn btn-primary">
              Hablemos de su proyecto
              <ArrowRight className="btn-arrow size-4" aria-hidden="true" />
            </a>
            <a href="#proyectos" className="btn btn-ghost text-ink">
              Ver proyectos
            </a>
          </div>
        </Reveal>
      </div>

      <div className="min-w-0 lg:col-span-6">
        <StructureDrawing className="mx-auto h-auto w-full max-w-[32rem] lg:mr-0" />
      </div>
    </section>
  );
}
