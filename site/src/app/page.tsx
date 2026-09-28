import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="btn btn-dark fixed top-3 left-3 z-50 -translate-y-24 focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Metrics />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
