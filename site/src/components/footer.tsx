import { site } from "@/lib/site";
import { Logo } from "./logo";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-night text-night-muted">
      <div className="mx-auto max-w-[90rem] border-t border-night-line px-4 pt-14 pb-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo className="text-night-text" />
            <p className="mt-3 max-w-[22rem] text-sm leading-relaxed">
              Ingeniería especializada en estructuras, asistencia a pie de obra
              y optimización técnica.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Santiago Zarazo (se abre en una pestaña nueva)"
              className="inline-flex size-11 items-center justify-center rounded-full border border-night-line text-night-text transition-colors duration-200 hover:border-brand hover:text-brand"
            >
              <LinkedInIcon />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de TecnicaIE (se abre en una pestaña nueva)"
              className="inline-flex size-11 items-center justify-center rounded-full border border-night-line text-night-text transition-colors duration-200 hover:border-brand hover:text-brand"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-night-line pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 TecnicaIE · {site.person.name}</p>
          <a href="/legal/" className="link-line self-start text-night-text sm:self-auto">
            Aviso legal y protección de datos
          </a>
        </div>

        <p className="mt-10 text-center text-xs text-night-muted/80">
          Built with Claude Web Builder by{" "}
          <a href="https://tododeia.com" className="underline-offset-2 hover:underline">
            Tododeia
          </a>
        </p>
      </div>
    </footer>
  );
}
