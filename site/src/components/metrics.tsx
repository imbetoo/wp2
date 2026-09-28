"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { MaskLines, Reveal } from "./reveal";

const metrics = [
  { value: 20, label: "Años de ejercicio", desc: "Criterio técnico y solvencia en el sector." },
  { value: 825, label: "Referencias de estructura", desc: "Cálculo y optimización de proyectos." },
  { value: 270, label: "Instalaciones", desc: "Desarrollo y coordinación técnica." },
  { value: 250, label: "Informes y asistencias", desc: "Peritajes, patologías y dirección técnica de obra." },
];

const credentials = [
  { label: "Colegiado", value: site.person.license },
  { label: "Normativa", value: "CTE · Código Estructural · EC1–EC4" },
  { label: "Especialidad", value: "Cálculo · Asistencia técnica · Viabilidad" },
  { label: "Ámbito", value: "España y Europa" },
];

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const reduce = useReducedMotion();
  // Arranca desde el 60 % para que la cifra final llegue pronto.
  const from = Math.round(to * 0.6);
  const [n, setN] = useState(from);
  const started = useRef(false);

  useEffect(() => {
    if (reduce || !inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const duration = 1100;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to, from]);

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">+{reduce ? to : n}</span>
      <span className="sr-only">Más de {to}</span>
    </span>
  );
}

export function Metrics() {
  return (
    <section
      id="experiencia"
      aria-labelledby="metrics-title"
      className="border-t border-line"
    >
      <div className="mx-auto max-w-[90rem] px-4 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="grid gap-6 md:grid-cols-12">
          <p className="font-mono text-eyebrow tracking-[0.14em] text-brand-ink uppercase md:col-span-3">
            Trayectoria
          </p>
          <h2
            id="metrics-title"
            className="font-display text-h2 leading-[1.02] font-semibold tracking-[-0.035em] md:col-span-9"
          >
            <MaskLines animateOnView lines={["Dos décadas", "de estructuras firmadas."]} />
          </h2>
        </div>

        <dl className="mt-16 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4 md:mt-24">
          {metrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.06}
              className="flex flex-col border-b border-line py-8 sm:px-6 sm:[&:nth-child(odd)]:pl-0 lg:border-b-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-8 lg:first:pl-0"
            >
              <dt className="order-2 mt-4 font-medium">{m.label}</dt>
              <dd className="order-1 font-display text-metric leading-none font-medium tracking-[-0.05em]">
                <Counter to={m.value} />
              </dd>
              <dd className="order-3 mt-1.5 max-w-[16rem] text-[0.9375rem] leading-snug text-muted">
                {m.desc}
              </dd>
            </Reveal>
          ))}
        </dl>

        <Reveal className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.label} className="bg-paper-raised px-6 py-5">
              <p className="font-mono text-eyebrow tracking-[0.14em] text-muted uppercase">
                {c.label}
              </p>
              <p className="mt-1.5 font-medium">{c.value}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
