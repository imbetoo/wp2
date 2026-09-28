import { ArrowRight, ArrowUpRight } from "lucide-react";
import { mailtoHref, site } from "@/lib/site";
import { CopyButton } from "./copy-button";
import { MaskLines, Reveal } from "./reveal";

export function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="bg-night text-night-text"
    >
      <div className="mx-auto max-w-[90rem] border-t border-night-line px-4 py-24 sm:px-8 md:py-36 lg:px-12">
        <p className="font-mono text-eyebrow tracking-[0.14em] text-brand uppercase">
          Contacto
        </p>
        <h2
          id="contact-title"
          className="font-display mt-6 text-display leading-[0.95] font-semibold tracking-[-0.045em]"
        >
          <MaskLines
            animateOnView
            lines={[
              "¿Tiene una obra",
              <span key="l2">
                entre manos<span className="text-brand">?</span>
              </span>,
            ]}
          />
        </h2>

        <div className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="max-w-[32rem] text-lead leading-relaxed text-night-muted">
              Cuéntenos qué necesita calcular, reforzar o revisar. El correo ya
              va con unas preguntas preparadas para que no se le escape nada.
            </p>
            <a href={mailtoHref} className="btn btn-primary mt-8 min-h-14 px-8 text-lg">
              Escribir a Santiago
              <ArrowRight className="btn-arrow size-5" aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <dl className="divide-y divide-night-line border-y border-night-line">
              <div className="flex items-center justify-between gap-4 py-4">
                <div className="min-w-0">
                  <dt className="font-mono text-eyebrow tracking-[0.14em] text-night-muted uppercase">
                    Email
                  </dt>
                  <dd className="mt-1 truncate text-lg">
                    <a href={`mailto:${site.email}`} className="link-line">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <CopyButton value={site.email} label="Copiar email" />
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <div className="min-w-0">
                  <dt className="font-mono text-eyebrow tracking-[0.14em] text-night-muted uppercase">
                    Teléfono
                  </dt>
                  <dd className="mt-1 text-lg">
                    <a href={`tel:${site.phone}`} className="link-line">
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <CopyButton value={site.phoneDisplay} label="Copiar teléfono" />
              </div>
              <div className="py-4">
                <dt className="font-mono text-eyebrow tracking-[0.14em] text-night-muted uppercase">
                  Técnico titular
                </dt>
                <dd className="mt-1 text-lg">{site.person.name}</dd>
                <dd className="text-night-muted">
                  {site.person.role} ·{" "}
                  <a
                    href={site.person.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line inline-flex items-center gap-1 text-night-text"
                  >
                    {site.person.license}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    <span className="sr-only">(se abre en una pestaña nueva)</span>
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
