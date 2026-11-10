import { siteConfig } from "../../data/siteConfig";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function Hero() {
  return (
    <section id="inicio" className="pt-20 md:pt-24 pb-10">
      <div className="w-full mx-auto">
        {/* Card horizontal con la foto de fondo */}
        <div className="relative w-full shadow-xl overflow-hidden min-h-125 md:min-h-0 md:aspect-5712/3230">
          <img
            src="/images/Foto Hero 3.webp"
            alt={siteConfig.nombre}
            className="absolute inset-0 w-full h-full object-cover md:object-contain object-center"
          />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/35 to-transparent" />

          {/* Texto encima */}
          <div className="relative z-10 h-full flex flex-col justify-end md:justify-start p-5 md:p-16 md:pt-20">
            <div className="max-w-md text-white">
              <h2 className="font-eslogan text-xl sm:text-2xl md:text-4xl text-justify font-extralight mt-4 md:mt-10">
                {siteConfig.tagline.split("*").map((parte, i) =>
                  i % 2 === 1 ? (
                    <span
                      key={i}
                      className="underline decoration-green-300 decoration-2 md:decoration-4 underline-offset-2 md:underline-offset-4"
                    >
                      {parte}
                    </span>
                  ) : (
                    <span key={i}>{parte}</span>
                  ),
                )}
              </h2>

              <p className="font-eslogan-2 text-sm sm:text-base md:text-xl font-light text-white mt-4 md:mt-10">
                {siteConfig.taglineCita}
              </p>
              {/* Botón de WhatsApp */}
              <div className="mt-5 md:mt-10">
                <WhatsAppButton
                  mensaje="Hola, vengo desde su página web y quisiera agendar una cita."
                  variant="primary"
                  className="text-sm! md:text-base! px-4! md:px-6! py-2! md:py-3!"
                >
                  Agendar cita
                </WhatsAppButton>
              </div>
              {/* Identidad: en desktop absoluta arriba a la derecha, en móvil debajo del texto */}
              <div className="mt-6 flex flex-col items-start gap-1 md:mt-0 md:absolute md:top-24 md:right-18 md:items-end md:text-right">
                <p className="font-eslogan text-lg md:text-xl font-light text-white leading-tight">
                  {siteConfig.nombre}
                </p>
                <p className="text-xs md:text-sm uppercase tracking-wide font-medium text-green-200">
                  {siteConfig.especialidad}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
