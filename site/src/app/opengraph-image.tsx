import { ImageResponse } from "next/og";

export const alt = "TecnicaIE · Ingeniería estructural y asistencia técnica en obra";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f4f3ef",
          color: "#0e0e0c",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700, letterSpacing: -2 }}>
          tecnica<span style={{ color: "#37ca37" }}>ie</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 96, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
          <span>Estructuras bien calculadas.</span>
          <span style={{ color: "#5c5b56" }}>Obras sin sorpresas.</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#5c5b56" }}>
          Cálculo · Rehabilitación · Peritajes · Asistencia en obra
        </div>
      </div>
    ),
    size,
  );
}
