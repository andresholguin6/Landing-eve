import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#productos", label: "Productos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (!abierto) return;

    const cerrarAlScroll = () => setAbierto(false);

    window.addEventListener("scroll", cerrarAlScroll);

    return () => window.removeEventListener("scroll", cerrarAlScroll);
  }, [abierto]);

  return (
    <header className="fixed top-0 w-full bg-green/50 backdrop-blur z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src="/images/drenalinfa-logo.png"
            alt={`Logo ${siteConfig.nombre}`}
            className="h-16 w-16 md:h-20 md:w-20 object-contain"
          />
        </a>

        {/* Links desktop */}
        <ul className="font-eslogan-2 hidden md:flex gap-6 text-sm text-gray-700">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-gray-700 hover:text-green-700 transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={() => setAbierto(!abierto)}
          className="md:hidden text-gray-700 p-2"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        >
          {abierto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden overflow-hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${
          abierto ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setAbierto(false)}
                className="block text-gray-700 hover:text-green-700 transition-colors text-base"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
