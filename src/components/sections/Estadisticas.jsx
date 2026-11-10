import { Star, Users, BadgeCheck } from "lucide-react";

const estadisticas = [
  {
    id: "experiencia",
    valor: "+12",
    label: "+12 Años de experiencia",
    Icono: Star,
  },
  {
    id: "pacientes",
    valor: "+70",
    label: "+70 Pacientes atendidos",
    Icono: Users,
  },
  {
    id: "certificado",
    valor: "Certificado",
    label: "Consultorio avalado",
    Icono: BadgeCheck,
  },
];

export default function Estadisticas() {
  return (
    <section className="pb-10 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {estadisticas.map(({ id, valor, label, Icono }) => (
          <div
            key={id}
            className="bg-white/30 rounded-xl shadow-sm p-4 flex items-center justify-center gap-2 text-center"
          >
            <Icono
              className="w-6 h-6 text-green-600 shrink-0"
              strokeWidth={1.5}
            />
            {/* <p className="text-xl md:text-2xl font-bold text-gray-900 leading-none">
        {valor}
      </p> */}
            <p className="text-md uppercase font-bold tracking-wide text-green-950">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
