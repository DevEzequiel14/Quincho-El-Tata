# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Personas en Palpalá y alrededores (Jujuy) que organizan un festejo o reunión y buscan un lugar listo para usar.

- **Primario (igual peso):** familias (cumpleaños, bautismos, reuniones familiares) y grupos de amigos (asados, findes, celebraciones informales).
- **Situación:** necesitan un espacio con pileta y área verde, sin armar todo desde cero, y quieren confirmar disponibilidad y presupuesto por un canal rápido.
- **Trabajo a hacer:** entender qué incluye el alquiler, ver si el lugar les cierra, y consultar precio/disponibilidad por WhatsApp.

## Product Purpose

Landing de **Quincho El Tata** para alquilar un quincho con pileta, parrilla techada y espacio verde para eventos de día o de noche.

**Éxito:** el visitante entiende la oferta con claridad y abre una consulta por WhatsApp (o usa el formulario que prepara ese mensaje) para pedir precio y disponibilidad.

## Positioning

Lo que un vecino genérico no puede copiar tal cual:

- Un solo lugar con pileta, espacio verde y equipamiento completo (cocina, asadores techados, baños, mobiliario).
- Flexibilidad de turnos día/noche y servicios extras a convenir (catering, barra móvil, parrillero).
- Trato cercano y familiar: la reserva se conversa por WhatsApp con las personas del lugar.

## Operating Context

- El visitante evalúa en el celular o escritorio, a menudo desde redes o búsqueda local.
- La conversión real ocurre fuera del sitio, en WhatsApp.
- Datos operativos confirmados en el producto: capacidad hasta 60 personas; eventos de día 11:00–20:00; eventos de noche 20:00–05:00; ubicación C. Puerto Argentino 1789, Palpalá, Jujuy.
- Precios en la web son de referencia; el presupuesto final se confirma por WhatsApp según fecha, invitados, temporada y extras.

## Capabilities and Constraints

**Capacidades confirmadas**

- Landing one-page: presentación, servicios, galería, precios orientativos, contacto, ubicación.
- Consulta por WhatsApp (botón flotante, CTAs y formulario que arma el mensaje).
- SEO local y datos de negocio (dirección, teléfonos, redes).

**Restricciones**

- No hay reserva automática ni checkout en el sitio.
- No inventar testimonios, ocupación (“lleno todos los fines”) ni pruebas sociales no aportadas.
- Galería actual marcada como provisional; no presentar placeholders como evidencia fotográfica definitiva.
- Mantener la estructura de secciones existente en el rediseño en curso (hero → about → servicios → galería → precios → contacto → ubicación), salvo decisión explícita posterior.
- Stack existente: Angular (SSR/prerender), deploy en Netlify.

**Abiertos / no decididos**

- Tiempo de respuesta prometido por WhatsApp.
- Reglas de seña, cancelación u otras políticas de reserva (no afirmar hasta confirmarlas).

## Brand Commitments

- **Nombre:** Quincho El Tata.
- **Personalidad confirmada para el trabajo actual:** cálida, familiar y cercana al patio/asado jujeño (sin receta visual aquí).
- **Voz:** español rioplatense/local, clara y concreta; evitar brochure genérico (“experiencia única”) cuando se pueda decir el hecho (pileta, capacidad, turnos, Palpalá).
- **Canal de marca en conversión:** WhatsApp e Instagram/Facebook del negocio.

## Evidence on Hand

- Copy y datos operativos en el código (`seo`, `pricing`, `contact`, about/benefits).
- Imágenes de sitio y OG en `public/`; galería bajo `public/icons/gallery/` con ítems marcados `placeholder: true` — tratarlas como provisionales.
- Demo en producción: https://quinchoeltata.netlify.app/
- **Ausencias que no se deben fabricar:** testimonios reales, casos de clientes, métricas de ocupación, fotos definitivas de galería hasta que el dueño las aporte.

## Product Principles

1. **WhatsApp es el producto de conversión** — cada pantalla debe acercar a una consulta clara, no a un embudo inventado.
2. **Hechos antes que adjetivos** — capacidad, pileta, turnos, ubicación y qué está incluido pesan más que frases vacías.
3. **Confianza local** — no exagerar con prueba social o fotos que el negocio no respalda.
4. **Orientativo, no engañoso** — precios y condiciones se muestran como referencia; el cierre es conversación humana.
5. **Un solo lugar, una historia** — familia y amigos comparten la misma promesa: un patio listo para celebrar.

## Accessibility & Inclusion

Sin estándar formal fijado por el negocio. Preservar y no degradar el andamiaje ya presente (skip-link, foco visible, menú accesible, labels/`aria` del formulario). Apuntar a uso cómodo en móvil, que es el contexto habitual de consulta.
