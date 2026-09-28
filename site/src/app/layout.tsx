import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Sora } from "next/font/google";
import { jsonLd, site } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: site.name,
    title: "TecnicaIE | Ingeniería estructural y asistencia técnica",
    description:
      "Cálculo, rehabilitación y peritajes con cumplimiento del CTE, el Código Estructural y los Eurocódigos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TecnicaIE | Ingeniería estructural y asistencia técnica",
    description:
      "Cálculo, rehabilitación y peritajes con cumplimiento del CTE, el Código Estructural y los Eurocódigos.",
  },
  appleWebApp: { title: site.name },
};

export const viewport: Viewport = {
  themeColor: "#f4f3ef",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
