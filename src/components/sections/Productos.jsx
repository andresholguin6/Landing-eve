import { productos } from "../../data/productos";
import ProductCard from "../ui/ProductCard";

export default function Productos() {
  return (
    <section id="productos" className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-start mb-10">
          <h2 className="font-titles text-3xl md:text-4xl font-normal text-gray-900 relative inline-block">
            Productos
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
