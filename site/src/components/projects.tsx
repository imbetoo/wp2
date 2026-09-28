"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { projects, type Project } from "@/data/projects";
import { mailtoHref } from "@/lib/site";
import { MaskLines, Reveal } from "./reveal";
import { ProjectArt } from "./project-art";

const easeOut = [0.23, 1, 0.32, 1] as const;

// Retícula asimétrica: grande / pequeña, pequeña / grande.
const layout = [
  "md:col-span-7",
  "md:col-span-5 md:mt-40",
  "md:col-span-5",
  "md:col-span-7",
];

function Media({ project, index = 0, sizes }: { project: Project; index?: number; sizes: string }) {
  const img = project.images[index];
  if (!img) return <ProjectArt art={project.art} className="size-full" />;
  return <Image src={img.src} alt={img.alt} fill sizes={sizes} className="object-cover" />;
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const reduce = useReducedMotion();
  const meta = [project.location, project.year].filter(Boolean).join(" · ");

  return (
    <li
      className={`group relative min-w-0 rounded-2xl has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-8 has-[:focus-visible]:outline-brand ${layout[index % layout.length]}`}
    >
      <motion.div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl"
        initial={{
          clipPath: reduce ? "inset(0% 0% 0% 0% round 16px)" : "inset(12% 6% 12% 6% round 16px)",
          opacity: reduce ? 0 : 1,
        }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0% round 16px)", opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: reduce ? 0.3 : 0.9, ease: easeOut }}
      >
        <div className="absolute inset-0 transition-transform duration-[250ms] ease-[var(--ease-out)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.03]">
          <Media project={project} sizes="(min-width: 768px) 55vw, 100vw" />
        </div>
        <span className="absolute top-4 left-4 rounded-full bg-night/70 px-3 py-1 font-mono text-xs tracking-wide text-night-text backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </motion.div>
      <Reveal distance={12} className="mt-6 flex items-start justify-between gap-6">
        <div className="min-w-0">
          <p className="font-mono text-eyebrow tracking-[0.14em] text-brand uppercase">
            {project.category}
          </p>
          <h3 className="font-display mt-2 text-h3 leading-tight font-medium tracking-[-0.025em] text-balance">
            <button
              type="button"
              onClick={onOpen}
              aria-haspopup="dialog"
              className="cursor-pointer text-left outline-none after:absolute after:inset-0 after:content-['']"
            >
              {project.title}
            </button>
          </h3>
          {meta && <p className="mt-1 text-night-muted">{meta}</p>}
        </div>
        <span
          aria-hidden="true"
          className="mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-night-line transition-[background-color,border-color,color] duration-200 [@media(hover:hover)_and_(pointer:fine)]:group-hover:border-brand [@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-brand [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-ink"
        >
          <ArrowUpRight className="size-5" />
        </span>
      </Reveal>
    </li>
  );
}

function ProjectDialog({
  project,
  onClose,
  returnFocus,
}: {
  project: Project | null;
  onClose: () => void;
  returnFocus: () => void;
}) {
  const [shown, setShown] = useState<Project | null>(project);
  const [image, setImage] = useState(0);

  // Mantiene el contenido durante la animación de salida.
  if (project && project !== shown) {
    setShown(project);
    setImage(0);
  }

  const total = shown ? Math.max(shown.images.length, 1) : 1;
  const go = (dir: 1 | -1) => setImage((i) => (i + dir + total) % total);

  const onKeyDown = (e: KeyboardEvent) => {
    if (total < 2) return;
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  return (
    <Dialog.Root open={project !== null} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay fixed inset-0 z-50 bg-night/70 backdrop-blur-md" />
        <Dialog.Content
          onKeyDown={onKeyDown}
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            returnFocus();
          }}
          className="dialog-content fixed inset-x-4 top-1/2 z-50 mx-auto max-h-[calc(100svh-2rem)] max-w-3xl -translate-y-1/2 overflow-y-auto rounded-3xl bg-paper text-ink shadow-2xl"
        >
          {shown && (
            <>
              <div className="relative aspect-[16/10] overflow-hidden bg-night-raised">
                <Media project={shown} index={image} sizes="(min-width: 768px) 48rem, 100vw" />
                {total > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      aria-label="Imagen anterior"
                      className="btn absolute top-1/2 left-3 size-11 -translate-y-1/2 bg-paper/85 p-0 backdrop-blur"
                    >
                      <ArrowLeft className="size-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => go(1)}
                      aria-label="Imagen siguiente"
                      className="btn absolute top-1/2 right-3 size-11 -translate-y-1/2 bg-paper/85 p-0 backdrop-blur"
                    >
                      <ArrowRight className="size-5" />
                    </button>
                  </>
                )}
                {total > 1 && (
                <span
                  className="absolute right-4 bottom-4 rounded-full bg-night/70 px-3 py-1 font-mono text-xs text-night-text"
                  aria-live="polite"
                >
                  {image + 1} / {total}
                </span>
                )}
              </div>

              <div className="p-6 sm:p-10">
                <p className="font-mono text-eyebrow tracking-[0.14em] text-brand-ink uppercase">
                  {shown.category}
                </p>
                <Dialog.Title className="font-display mt-2 text-h3 leading-tight font-semibold tracking-[-0.025em]">
                  {shown.title}
                </Dialog.Title>
                <Dialog.Description className="sr-only">
                  Ficha técnica del proyecto
                </Dialog.Description>

                <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-eyebrow tracking-[0.14em] text-muted uppercase">
                      El reto
                    </dt>
                    <dd className="mt-2 leading-relaxed">{shown.challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-eyebrow tracking-[0.14em] text-muted uppercase">
                      La solución
                    </dt>
                    <dd className="mt-2 leading-relaxed">{shown.solution}</dd>
                  </div>
                </dl>

                <a href={mailtoHref} className="btn btn-dark mt-10">
                  Consultar un caso parecido
                  <ArrowRight className="btn-arrow size-4" aria-hidden="true" />
                </a>
              </div>

              <Dialog.Close
                aria-label="Cerrar ficha"
                className="btn absolute top-3 right-3 size-11 bg-paper/85 p-0 backdrop-blur"
              >
                <X className="size-5" />
              </Dialog.Close>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const trigger = useRef<HTMLElement | null>(null);

  return (
    <section
      id="proyectos"
      aria-labelledby="projects-title"
      className="bg-night text-night-text"
    >
      <div className="mx-auto max-w-[90rem] px-4 py-24 sm:px-8 md:py-36 lg:px-12">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="font-mono text-eyebrow tracking-[0.14em] text-brand uppercase">
              Proyectos
            </p>
            <h2
              id="projects-title"
              className="font-display mt-5 text-h2 leading-[1.02] font-semibold tracking-[-0.035em]"
            >
              <MaskLines
                animateOnView
                lines={["De la precisión del cálculo", "a la realidad de la obra."]}
              />
            </h2>
          </div>
          <Reveal className="md:col-span-4" delay={0.2}>
            <p className="max-w-[24rem] leading-relaxed text-night-muted md:ml-auto">
              Obras y resultados propios. Ninguna imagen de catálogo.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 md:mt-24 md:grid-cols-12 md:gap-y-24">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => {
              trigger.current = document.activeElement as HTMLElement | null;
              setOpen(p);
            }} />
          ))}
        </ul>
      </div>

      <ProjectDialog
        project={open}
        onClose={() => setOpen(null)}
        returnFocus={() => trigger.current?.focus()}
      />
    </section>
  );
}
