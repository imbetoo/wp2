import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal y protección de datos | TecnicaIE",
  description: `Aviso legal y protección de datos de TecnicaIE — ${site.person.name}, ${site.person.role}.`,
  alternates: { canonical: "/legal" },
  robots: { index: false, follow: true },
};

export default function LegalPage() {
  return (
    <main className="mx-auto max-w-[48rem] px-4 py-16 sm:px-8 md:py-24">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" aria-label="TecnicaIE, volver al inicio">
          <Logo />
        </Link>
        <Link
          href="/"
          className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-ink"
        >
          <ArrowLeft
            className="size-4 transition-transform duration-200 ease-[var(--ease-out)] group-hover:-translate-x-1"
            aria-hidden="true"
          />
          Volver al inicio
        </Link>
      </div>

      <h1 className="font-display mt-20 text-h2 leading-[1.02] font-semibold tracking-[-0.035em]">
        Aviso legal y protección de datos
      </h1>

      <section className="mt-14 border-t border-line pt-10" aria-labelledby="propiedad">
        <h2 id="propiedad" className="font-display text-h3 font-medium tracking-[-0.025em]">
          Aviso de propiedad
        </h2>
        <div className="mt-4 space-y-4 text-lead leading-relaxed text-ink-soft">
          <p>
            Todo el contenido de esta web y todos sus archivos adjuntos son
            producto y propiedad de {site.person.name} y, en su caso, tienen el
            permiso verbal de los propietarios intelectuales de los proyectos y
            del resultado de los mismos para su inclusión en este medio.
          </p>
          <p>Puede disentir de ese permiso contactándonos.</p>
          <p>
            No está permitido replicar la información y datos de esta web salvo
            indicación expresa.
          </p>
        </div>
      </section>

      <section className="mt-14 border-t border-line pt-10" aria-labelledby="lopd">
        <h2 id="lopd" className="font-display text-h3 font-medium tracking-[-0.025em]">
          Protección de datos (LOPD)
        </h2>
        <div className="mt-4 space-y-4 text-lead leading-relaxed text-ink-soft">
          <p>No se recopilarán ni compartirán datos personales de ningún tipo.</p>
          <p>
            Existe un fichero de gestión de datos personales según LOPD.
            Contáctenos en{" "}
            <a href={`mailto:${site.email}`} className="text-brand-ink underline underline-offset-4">
              {site.email}
            </a>{" "}
            en caso de alguna duda o requerimiento al respecto.
          </p>
        </div>
      </section>
    </main>
  );
}
