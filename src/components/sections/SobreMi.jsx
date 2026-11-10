import { siteConfig } from "../../data/siteConfig";
import {
  GraduationCap,
  Stethoscope,
  Briefcase,
  BookOpen,
  BadgeCheck,
} from "lucide-react";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        {/* <h2 className="font-titles text-3xl md:text-4xl font-bold text-emerald-950 text-start mb-10 drop-shadow-sm">
          Sobre mí
        </h2> */}
        <h2 className="font-titles text-3xl md:text-4xl font-normal text-gray-900 text-start mb-10 relative">
          Sobre mí
          <svg
            className="absolute -bottom-3 left-0 w-40 h-3 items-start text-green-500"
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

        {/* Card con foto y texto */}
        <div className="bg-white/30 rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-[1fr_1.2fr]">
          {/* Foto */}
          <div className="relative">
            <img
              src="/images/Sobre Mi.webp"
              alt={siteConfig.nombre}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Texto */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <p className="font-eslogan-2 text-lg text-gray-800 font-medium text-justify">
              Hola! soy Evelin Márquez, fisioterapeuta y linfodrenajista con más
              de 12 años de experiencia.
            </p>
            <p className="font-eslogan-2 text-gray-600 mt-3 leading-relaxed text-justify">
              Mi especialidad es el acompañamiento personalizado para el
              bienestar, el cuidado del sistema linfático y la recuperación de
              tu movimiento. Integro técnicas profesionales, atención
              individualizada y educación para el autocuidado, siempre con una
              práctica responsable y segura.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <GraduationCap
                  className="w-4 h-4 text-green-600 shrink-0"
                  strokeWidth={1.8}
                />
                Fisioterapeuta — Universidad Santiago de Cali
              </li>
              <li className="flex items-center gap-2">
                <Stethoscope
                  className="w-4 h-4 text-green-600 shrink-0"
                  strokeWidth={1.8}
                />
                Linfodrenajista certificada
              </li>
              <li className="flex items-center gap-2">
                <Briefcase
                  className="w-4 h-4 text-green-600 shrink-0"
                  strokeWidth={1.8}
                />
                +12 años de experiencia profesional
              </li>
              <li className="flex items-center gap-2">
                <BookOpen
                  className="w-4 h-4 text-green-600 shrink-0"
                  strokeWidth={1.8}
                />
                Diplomado de técnicas de terapia física en el tratamiento del
                linfedema, FOSCAL-2013
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck
                  className="w-4 h-4 text-green-600 shrink-0"
                  strokeWidth={1.8}
                />
                Drenaje Linfático Manual, FUNDALINFA-2012
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
