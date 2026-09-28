import type { ProjectArt as Art } from "@/data/projects";

/**
 * Dibujo técnico de la tipología. Se usa mientras el proyecto no tenga fotos.
 */
export function ProjectArt({ art, className = "" }: { art: Art; className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={`bg-night-raised ${className}`}
    >
      <g stroke="var(--night-line)" strokeWidth="1">
        {Array.from({ length: 21 }, (_, i) => (
          <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="300" />
        ))}
        {Array.from({ length: 16 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 20} x2="400" y2={i * 20} />
        ))}
      </g>
      <g stroke="var(--night-text)" strokeWidth="2" strokeLinecap="square">
        {art === "truss" && (
          <>
            <path d="M40 220 L200 110 L360 220 Z" />
            <path d="M80 220 L120 165 L160 220 L200 110 L240 220 L280 165 L320 220" />
            <path d="M120 165 L280 165" strokeOpacity="0.5" />
            <path d="M40 220 V260 M360 220 V260" />
          </>
        )}
        {art === "frame" && (
          <>
            <path d="M80 250 V90 H320 V250" />
            <path d="M80 170 H320" />
            <path d="M200 90 V250" strokeOpacity="0.5" />
            <path d="M60 250 H100 M300 250 H340" />
          </>
        )}
        {art === "slab" && (
          <>
            <path d="M40 120 H360 M40 136 H360" />
            <path d="M40 200 H360 M40 216 H360" />
            <path d="M70 136 V200 M330 136 V200 M200 136 V200" />
            <path d="M70 216 V270 M330 216 V270 M200 216 V270" />
            <path d="M100 116 Q200 104 300 116" stroke="var(--brand)" strokeDasharray="6 6" />
          </>
        )}
        {art === "crack" && (
          <>
            <path d="M60 60 H340 V250 H60 Z" />
            <path d="M60 110 H340 M60 160 H340 M60 210 H340" strokeOpacity="0.35" />
            <path d="M150 60 V110 M250 110 V160 M150 160 V210 M250 210 V250" strokeOpacity="0.35" />
            <path
              d="M210 70 L196 104 L214 128 L190 170 L206 196 L186 240"
              stroke="var(--brand)"
              strokeWidth="2.5"
            />
          </>
        )}
      </g>
    </svg>
  );
}
