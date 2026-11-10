import { buildWhatsAppUrl } from "../../hooks/useWhatsApp";

export default function WhatsAppButton({
  mensaje,
  children = "Escríbeme por WhatsApp",
  variant = "primary",
  className = " ",
}) {
  const url = buildWhatsAppUrl(mensaje);

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold font-eslogan-2 transition px-6 py-3";

  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary:
      "bg-white text-green-700 border-2 border-green-600 hover:bg-green-50",
    floating:
      "fixed bottom-6 right-6 z-50 bg-green-600 text-white shadow-lg hover:bg-green-700 p-4 rounded-full",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
      aria-label="Contactar por WhatsApp"
    >
      {children}
    </a>
  );
}
