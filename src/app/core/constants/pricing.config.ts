import { CONTACT_CONFIG } from './contact.config';

export interface PricingPlan {
  name: string;
  description: string;
  priceLabel: string;
  features: readonly string[];
}

export const PRICING_CONFIG = {
  title: 'Precios orientativos',
  subtitle: 'Referencia para planificar. El presupuesto final se confirma por WhatsApp.',
  priceReferenceNote: 'Precio de referencia; puede variar según fecha, invitados y temporada.',
  nightConsultNote: 'Noche (20:00–05:00): consultar por WhatsApp.',
  customNote:
    'Evento a medida (catering, barra móvil, parrillero u otros extras): consultanos y lo armamos según tu festejo.',
  plans: [
    {
      name: 'Día completo',
      description: 'Alquiler del quincho para festejos familiares y eventos de día (11:00–20:00).',
      priceLabel: 'Desde $280.000',
      features: [
        'Jornada extendida de uso',
        'Quincho, pileta y espacio verde',
        'Cocina equipada y baños',
        'Asadores techados',
      ],
    },
  ] satisfies readonly PricingPlan[],
  cta: {
    label: 'Consultar precio y disponibilidad por WhatsApp',
    message:
      'Hola, quisiera consultar precios orientativos y disponibilidad para un evento en Quincho El Tata. ¡Gracias!',
  },
} as const;

export function getPricingWhatsAppUrl(): string {
  const number = CONTACT_CONFIG.phones[0].replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(PRICING_CONFIG.cta.message)}`;
}
