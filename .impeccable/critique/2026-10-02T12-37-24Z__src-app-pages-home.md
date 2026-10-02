---
target: home landing / src/app/pages/home
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:c:\\Users\\EZEQUIELROLANDOCHORO\\Desktop\\Work\\Personales\\Frontend\\Angular\\v19\\Quincho el Tata\\quincho\\src\\app\\pages\\home"
timestamp: 2026-10-02T12-37-24Z
slug: src-app-pages-home
closed: true
---
Method: dual-agent (A: 51746637-5115-4228-b1a5-9e46d395743a · B: 1f05861b-350b-42ad-8474-3b6db8a60e35)

#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Formulario OK; sin estado activo en nav; WhatsApp depende del browser |
| 2 | Match System / Real World | 3 | Español local + términos de quincho; hero/About genéricos |
| 3 | User Control and Freedom | 3 | Menú móvil sólido; salida a WhatsApp esperada |
| 4 | Consistency and Standards | 2 | Iconos vs emoji vs bullets; Bootstrap green vs olive de marca |
| 5 | Error Prevention | 2 | Validación de campos sí; fechas pasadas permitidas; popup blocker frágil |
| 6 | Recognition Rather Than Recall | 3 | Nav y CTAs etiquetados; social icon-only con aria |
| 7 | Flexibility and Efficiency | n/a | Landing Persuade — no se esperan aceleradores expert |
| 8 | Aesthetic and Minimalist Design | 2 | Plantilla Bootstrap/Grayscale, ruido en listas, jerarquía plana |
| 9 | Error Recovery | 3 | Errores en español + guía si falla WA |
| 10 | Help and Documentation | n/a | One-pager Persuade |
| **Total** | | **21/32** | **Acceptable (~66%)** |

na_heuristics: 7,10

#### Design Specificity Verdict

**LLM assessment:** Mayormente intercambiable de categoría (plantilla tipo Grayscale + Times New Roman + Bootstrap). Contenido local (capacidad 60, precios ARS, Palpalá, WhatsApp) está atornillado a una shell genérica. No se siente un mundo visual "asado / patio jujeño".

**Deterministic scan:** `detect --json src/app/pages/home` → exit 0, 8 findings (6× broken-image FP por `[src]` Angular; 2× gradient-text reales en masthead h1/h2). Shared: 1× broken-image FP en logo. Browser overlays: no disponibles (sin tools de browser/inyección).

#### Overall Impression
Base funcional sólida (WhatsApp como canal, precios claros, a11y por encima del promedio local). El mayor gap es que la primera impresión y la galería no venden el lugar: se siente plantilla, no Quincho El Tata.

#### What's Working
1. WhatsApp como acción de producto (float + CTAs + form pre-filled).
2. Bloque de precios con "Desde $280.000" y disclaimer orientativo.
3. Andamiaje de accesibilidad (skip-link, focus, trap del menú, aria del form).

#### Priority Issues

**[P1] Hero sub-convierte y sub-marca la marca**
- Why: Viewport 1 es el producto Persuade; subtítulo genérico + CTA "Más información" a #about desperdicia el momento; gradient-text debilita legibilidad (confirmado por detector).
- Fix: Promesa específica (pileta + 60 + Palpalá); CTA primario a WhatsApp o #precios/#contact; tipografía hero de alto contraste sin fade-to-transparent.
- Suggested command: /impeccable typeset + /impeccable clarify (+ layout del hero)

**[P1] Galería con placeholders en el pico de confianza**
- Why: El usuario decide con fotos; el aviso de imágenes provisionales erosiona confianza justo antes de precios.
- Fix: Fotos reales o colapsar a 1–2 shots verificados; quitar disclaimer provisional del path público.
- Suggested command: /impeccable distill (mientras no haya assets) / polish cuando haya fotos

**[P1] Lenguaje visual de plantilla**
- Why: Times New Roman + Grayscale + btn-success hace El Tata intercambiable.
- Fix: Pareja tipográfica y paleta propias (madera/pasto/noche); CTAs en olive de marca; servicios photo-led en vez de zig-zag "projects".
- Suggested command: /impeccable bolder o shape (dirección visual) + /impeccable colorize + /impeccable typeset

**[P2] Servicios como inventario (carga cognitiva alta)**
- Why: 6 bullets + adicionales + opcionales con emoji; checklist cognitiva 6/8 fallos.
- Fix: ≤4 amenities visibles; extras detrás de "Ver más"; iconografía consistente.
- Suggested command: /impeccable distill + /impeccable layout

**[P2] Fricción Contacto / Ubicación**
- Why: Dirección duplicada; Location fuera del nav; cierre emocional débil (mapa + © developer).
- Fix: Una sección Reservar: form + tel: + mapa compacto; cierre con reassurance del anfitrión.
- Suggested command: /impeccable layout + /impeccable clarify

#### Persona Red Flags
**Jordan:** CTA hero no responde "¿cómo alquilo?"; sin "qué pasa después"; galería provisional.
**Casey:** Conversión fuera de thumb zone salvo WA float; Location fuera del menú; formulario largo.
**Riley:** Fechas pasadas; success del form = window.open; placeholders; typo "cuidad"; footer © 2025.

#### Minor Observations
- Phones sin `tel:`; nav omite Ubicación; footer prioriza LinkedIn del developer; About overlay sin estilos; captions de galería desalineados.

#### Questions to Consider
1. ¿El primer viewport identifica pileta + Palpalá sin el logo?
2. ¿Y si el único CTA above-the-fold fuera WhatsApp?
3. ¿Debería existir Galería hasta tener fotos reales?
4. ¿La historia es "Servicios" o "tu domingo con pileta"?
5. ¿Qué cierre emocional reemplaza mapa + crédito de developer?
