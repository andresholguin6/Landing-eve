import { Star } from "lucide-react";
import { testimonios } from "../../data/testimonios";

function Estrellas() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export default function Testimonios() {
  if (!testimonios.length) return null;

  return (
    <section id="testimonios" className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-start mb-10">
          <h2 className="font-titles text-3xl md:text-4xl font-normal text-gray-900 relative inline-block">
            Testimonios
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t) => (
            <blockquote
              key={t.id}
              className="bg-white/30 rounded-3xl shadow-xl p-6 flex flex-col"
            >
              <Estrellas />
              <p className="font-eslogan-2 text-gray-700 italic flex-1">"{t.texto}"</p>
              <footer className="mt-4">
                <p className="font-eslogan-2 font-semibold text-gray-900">{t.nombre}</p>
                {t.servicio && (
                  <p className="font-eslogan-2 text-sm text-gray-500">{t.servicio}</p>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
