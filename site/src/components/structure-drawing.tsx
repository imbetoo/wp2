import type { CSSProperties } from "react";

/**
 * Pórtico biempotrado con carga repartida y su diagrama de momentos.
 * Cada trazo usa pathLength=1 para que la animación .draw funcione con cualquier longitud.
 */
const d = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

export function StructureDrawing({ className = "" }: { className?: string }) {
  const arrows = Array.from({ length: 11 }, (_, i) => 90 + i * 42);

  return (
    <svg
      viewBox="0 0 600 460"
      fill="none"
      role="img"
      aria-labelledby="structure-title"
      className={className}
    >
      <title id="structure-title">
        Esquema de un pórtico con carga repartida y su diagrama de momentos flectores
      </title>

      {/* Retícula de fondo */}
      <g stroke="var(--line)" strokeWidth="1" className="draw-fill" style={d(0)}>
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="460" />
        ))}
        {Array.from({ length: 10 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="600" y2={i * 50} />
        ))}
      </g>

      {/* Pilares y dintel */}
      <g stroke="var(--ink)" strokeWidth="3" strokeLinecap="square">
        <path pathLength={1} className="draw" style={d(200)} d="M90 380 V150" />
        <path pathLength={1} className="draw" style={d(350)} d="M510 380 V150" />
        <path pathLength={1} className="draw" style={d(500)} d="M90 150 H510" />
      </g>

      {/* Empotramientos */}
      <g stroke="var(--ink)" strokeWidth="1.5" className="draw-fill" style={d(900)}>
        <line x1="60" y1="380" x2="120" y2="380" />
        <line x1="480" y1="380" x2="540" y2="380" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <line x1={64 + i * 12} y1="380" x2={56 + i * 12} y2="392" />
            <line x1={484 + i * 12} y1="380" x2={476 + i * 12} y2="392" />
          </g>
        ))}
      </g>

      {/* Carga repartida q */}
      <g stroke="var(--brand-ink)" strokeWidth="1.5" className="draw-fill" style={d(1100)}>
        <line x1="90" y1="80" x2="510" y2="80" />
        {arrows.map((x) => (
          <g key={x}>
            <line x1={x} y1="80" x2={x} y2="140" />
            <path d={`M${x - 4} 132 L${x} 140 L${x + 4} 132`} />
          </g>
        ))}
      </g>
      <text
        x="520"
        y="72"
        className="draw-fill font-mono"
        style={d(1200)}
        fill="var(--brand-ink)"
        fontSize="15"
      >
        q
      </text>

      {/* Diagrama de momentos */}
      <path
        pathLength={1}
        className="draw"
        style={d(1400)}
        d="M90 150 L90 118 Q300 330 510 118 L510 150"
        stroke="var(--brand)"
        strokeWidth="2"
        strokeDasharray="1"
      />
      <path
        className="draw-fill"
        style={d(2100)}
        d="M90 150 L90 118 Q300 330 510 118 L510 150 Z"
        fill="var(--brand)"
        fillOpacity="0.12"
      />
      <g className="draw-fill font-mono" style={d(2200)} fontSize="13" fill="var(--muted)">
        <text x="306" y="248">M⁺ máx</text>
        <text x="20" y="114">M⁻</text>
      </g>

      {/* Cota */}
      <g stroke="var(--muted)" strokeWidth="1" className="draw-fill" style={d(1700)}>
        <line x1="90" y1="420" x2="510" y2="420" />
        <line x1="90" y1="412" x2="90" y2="428" />
        <line x1="510" y1="412" x2="510" y2="428" />
      </g>
      <text
        x="300"
        y="446"
        textAnchor="middle"
        className="draw-fill font-mono"
        style={d(1800)}
        fontSize="13"
        fill="var(--muted)"
      >
        L = 12,00 m
      </text>
    </svg>
  );
}
