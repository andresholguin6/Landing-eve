import { MapPin } from "lucide-react";
import { siInstagram, siTiktok } from "simple-icons";
import { siteConfig } from "../../data/siteConfig";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contacto" className="relative w-full min-h-112.5 overflow-hidden">
      {/* Foto de fondo */}
      <img
        src="/images/Footer (2).webp"
        alt={siteConfig.nombre}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col justify-center min-h-112.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Columna izquierda: texto y contacto */}
          <div className="max-w-lg text-white">
            <h2 className="font-eslogan-2 text-3xl md:text-4xl font-normal">
              ¿Empezamos?
            </h2>
            <p className="font-eslogan-2 mt-3 text-gray-200">
              Escríbeme y con gusto te acompaño en tu proceso.
            </p>

            <div className="mt-6">
              <WhatsAppButton mensaje="Hola, vengo desde su página web y quisiera más información.">
                Escríbeme por WhatsApp
              </WhatsAppButton>
            </div>

            <p className="font-eslogan-2 mt-8 flex items-center gap-2 text-sm text-gray-200">
              <MapPin className="w-4 h-4" strokeWidth={1.8} />
              {siteConfig.ubicacion}
            </p>

            {/* Redes sociales */}
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white transition hover:opacity-80"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={siInstagram.path} />
                </svg>
              </a>

              <a
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-white transition hover:opacity-80"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={siTiktok.path} />
                </svg>
              </a>
            </div>
          </div>

          {/* Logo a la derecha */}
          <div className="absolute bottom-18 right-6 md:bottom-30 md:right-10 z-10">
            <img
              src="/images/drenalinfa-logo.png"
              alt={`Logo ${siteConfig.nombre}`}
              className="h-24 w-24 md:h-45 md:w-45 object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Copyright: después del contenido */}
      <div className="relative z-10 border-t border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center text-xs text-gray-300">
          © {year} {siteConfig.nombre}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
