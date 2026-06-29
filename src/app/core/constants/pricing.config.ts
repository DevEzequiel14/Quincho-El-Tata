import { CONTACT_CONFIG } from './contact.config';

export interface PricingPlan {
  name: string;
  description: string;
  priceLabel: string;
  features: readonly string[];
  highlighted?: boolean;
}

export const PRICING_CONFIG = {
  title: 'Precios orientativos',
  subtitle: 'Valores de referencia para planificar tu evento. El presupuesto final se confirma por WhatsApp.',
  disclaimer:
    'Los montos pueden variar según fecha, cantidad de invitados, temporada y servicios adicionales. No incluyen reserva automática.',
  plans: [
    {
      name: 'Medio día',
      description: 'Ideal para reuniones cortas o cumpleaños de tarde.',
      priceLabel: 'Desde $180.000',
      features: [
        'Hasta 4 horas de uso',
        'Quincho, pileta y espacio verde',
        'Vajilla y mobiliario básico',
      ],
    },
    {
      name: 'Día completo',
      description: 'La opción más elegida para festejos familiares y eventos de día.',
      priceLabel: 'Desde $280.000',
      features: [
        'Jornada extendida de uso',
        'Quincho, pileta y espacio verde',
        'Cocina equipada y baños',
        'Asadores techados',
      ],
      highlighted: true,
    },
    {
      name: 'Evento a medida',
      description: 'Catering, barra móvil, parrillero u otros servicios opcionales.',
      priceLabel: 'Consultar',
      features: [
        'Presupuesto personalizado',
        'Asesoramiento según tu evento',
        'Servicios adicionales a convenir',
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
