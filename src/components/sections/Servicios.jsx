import { Droplets, HeartPulse, Dumbbell, Flower2 } from "lucide-react";
import { servicios } from "../../data/servicios";
import WhatsAppButton from "../ui/WhatsAppButton";

// Mapeo de íconos por id de servicio
const iconos = {
  "drenaje-linfatico": Droplets,
  "terapia-descongestiva": HeartPulse,
  "descarga-muscular": Dumbbell,
  aromatouch: Flower2,
};

export default function Servicios() {
  return (
    <section id="servicios" className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título con subrayado decorativo */}
        <div className="text-start mb-10">
          <h2 className="font-titles text-3xl md:text-4xl font-normal text-gray-900 relative text-start inline-block">
            Servicios
            <svg
              className="absolute -bottom-3 left-0 w-full h-3 text-green-500"
              viewBox="0 0 200 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 8 Q 50 2, 100 6 T 198 4"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </h2>
        </div>

        {/* Card: foto a la derecha, servicios a la izquierda */}
        <div className="bg-white/30 rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-[1.2fr_1fr]">
          {/* Lista de servicios */}
          <div className="p-8 md:p-10 flex flex-col justify-center gap-6">
            {servicios.map((servicio) => {
              const Icono = iconos[servicio.id] || Droplets;
              return (
                <div
                  key={servicio.id}
                  className="flex gap-4 items-start border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <Icono
                      className="w-5 h-5 text-green-600"
                      strokeWidth={1.8}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {servicio.titulo}
                    </h3>
                    <p className="font-eslogan-2 text-sm text-gray-600 mt-1 leading-relaxed">
                      {servicio.descripcion}
                    </p>
                    <div className="mt-3">
                      <WhatsAppButton
                        mensaje={servicio.mensajeWhatsApp}
                        variant="primary"
                        className="text-xs px-4 py-1.5"
                      >
                        Agendar
                      </WhatsAppButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Foto a la derecha */}
          <div className="relative min-h-100 md:min-h-full">
            <img
              src="/images/Servicios.webp"
              alt="Servicios"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
