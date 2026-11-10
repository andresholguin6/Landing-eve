import WhatsAppButton from "./WhatsAppButton";

export default function ProductCard({ producto }) {
  const mensaje = `Hola, me interesa el producto "${producto.nombre}". ¿Está disponible?`;

  return (
    <article className="bg-white/30 rounded-3xl shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1">
      <div className="overflow-hidden">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full aspect-square object-cover object-center transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-eslogan-2 text-lg font-semibold text-gray-900">{producto.nombre}</h3>
        <p className="font-eslogan-2 text-sm text-gray-600 mt-2 flex-1">{producto.descripcion}</p>
        <div className="mt-4">
          <WhatsAppButton mensaje={mensaje} variant="primary" className="w-full text-sm">
            Me interesa
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}