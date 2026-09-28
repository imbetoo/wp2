"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-200 ease-[var(--ease-out)] ${
        scrolled
          ? "border-b border-line/70 bg-paper/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-4 sm:px-8 lg:px-12">
        <a href="#inicio" aria-label="TecnicaIE, ir al inicio" className="rounded">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-[0.9375rem] text-muted transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn-dark ml-3 min-h-10 px-5 text-[0.9375rem]">
            Contacto
          </a>
        </nav>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-ink md:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="size-6" strokeWidth={1.75} />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="dialog-overlay fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm" />
            <Dialog.Content className="sheet-content fixed inset-y-0 right-0 z-50 flex w-[min(20rem,85%)] flex-col bg-paper px-6 pt-5 pb-8 shadow-2xl">
              <div className="flex items-center justify-between">
                <Dialog.Title asChild>
                  <span>
                    <Logo />
                  </span>
                </Dialog.Title>
                <Dialog.Close
                  className="-mr-2 inline-flex size-11 items-center justify-center rounded-full"
                  aria-label="Cerrar menú"
                >
                  <X className="size-6" strokeWidth={1.75} />
                </Dialog.Close>
              </div>
              <Dialog.Description className="sr-only">
                Navegación principal
              </Dialog.Description>
              <nav aria-label="Móvil" className="mt-12 flex flex-col gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display py-2 text-3xl font-medium tracking-tight"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-auto w-full"
              >
                Hablemos de su proyecto
              </a>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
