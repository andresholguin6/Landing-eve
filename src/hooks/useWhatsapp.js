import { siteConfig } from "../data/siteConfig";

export function buildWhatsAppUrl(mensaje) {
  const texto = encodeURIComponent(
    mensaje || siteConfig.whatsappMensajeGeneral,
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${texto}`;
}
