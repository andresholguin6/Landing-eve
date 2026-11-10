import NavBar from "./components/layout/NavBar";
import Hero from "./components/sections/Hero";
import Estadisticas from "./components/sections/Estadisticas";
import SobreMi from "./components/sections/SobreMi";
import Servicios from "./components/sections/Servicios";
import Testimonios from "./components/sections/Testimonios";
import Footer from "./components/layout/Footer";
import Productos from "./components/sections/Productos";

export default function App() {
  return (
    <div className="min-h-screen bg-green-50">
      <NavBar />
      <main>
        <Hero />
        <Estadisticas />
      </main>
      {/* Franja de cierre del Hero, ancho completo */}
      <div className="w-full bg-green-950 py-20 px-6">
        <div className="mx-auto text-center">
          <p className="font-eslogan-2 text-2xl md:text-4xl font-bold text-green-100 leading-snug">
            "Tu salud y bienestar merecen una atención cercana y personalizada"
          </p>
        </div>
      </div>
      <SobreMi />
      <Servicios />
      <Productos />
      <Testimonios />
      <Footer />
    </div>
  );
}

{
  /* <NavBar />
      <main className="pt-20 px-6">
        <section id="inicio" className="h-screen">Inicio</section>
        <section id="sobre-mi" className="h-screen">Sobre mí</section>
        <section id="servicios" className="h-screen">Servicios</section>
        <section id="productos" className="h-screen">Productos</section>
        <section id="contacto" className="h-screen">Contacto</section>
      </main> */
}
