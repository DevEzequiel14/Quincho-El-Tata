---
target: landing home / src/app/pages/home
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:c:\\Users\\EZEQUIELROLANDOCHORO\\Desktop\\Work\\Personales\\Frontend\\Angular\\v19\\Quincho el Tata\\quincho\\src\\app\\pages\\home"
timestamp: 2026-10-05T17-58-25Z
slug: src-app-pages-home
closed: true
---
Method: dual-agent (A: e6e0c98c-c1ab-4b8c-85fd-4da7522cd29f · B: f63ebc62-d8cf-4aa9-8265-4d83797cb7b0)

#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Form con loading artificial; nav sin activo; secciones opacity:0 hasta scroll |
| 2 | Match System / Real World | 4 | Copy local y factual (turnos, capacidad, Palpalá, precios orientativos) |
| 3 | User Control and Freedom | 3 | Menú Escape + focus trap; details colapsables; salida a WA aceptable |
| 4 | Consistency and Standards | 2 | Muro night final; float Meta-green vs olive; nav saltea Qué incluye |
| 5 | Error Prevention | 3 | Validadores y disclaimers; galería provisional sin guardrail visual |
| 6 | Recognition Rather Than Recall | 3 | Hechos visibles; precio no se repite en contacto |
| 7 | Flexibility and Efficiency | n/a | Persuade: sin flujos expertos |
| 8 | Aesthetic and Minimalist Design | 2 | Fatiga de CTAs WhatsApp; cierre nocturno aplanado |
| 9 | Error Recovery | 3 | Errores inline en español; fallback a teléfono |
| 10 | Help and Documentation | n/a | One-pager Persuade; hints del form alcanzan |
| **Total** | | **22/32** | **Aceptable** |

#### Design Specificity Verdict

**LLM assessment**: La landing está autorada para Quincho El Tata — hero brand-first, Fraunces, olive, hechos (pileta, 60, Palpalá), night/day, WhatsApp sin fake social proof. No es un template de event venue intercambiable. Debilita el carácter en mid/end: About con foto inset, captions de galería genéricas, float Meta-green, y muro nocturno contacto+ubicación+footer.

**Deterministic scan**: 33 hallazgos combinados (5 warning, 28 advisory) en home + chrome. Señales reales: 15 `design-system-font-size` fuera de ramp; `#b02a37` error no tokenizado; `rgba(0,0,0,0.8)` en menú. Falsos positivos: 5 `broken-image` por `[src]` de Angular; ~10 `rgb(0,0,0)` heredados; `#25d366` intencional de WhatsApp.

**Visual overlays**: No hay overlay confiable en el browser. Assessment B no encontró automatización de browser en esta sesión; no se inyectó detect.js ni se abrió tab [Human].

#### Overall Impression

Base sólida y específica del producto; el éxito de conversión (hechos → WhatsApp) está claro. Lo que más pesa no es “rediseñar”, sino **distilar CTAs**, **encuadrar la galería provisional** y **endurecer el fade-in** para no esconder contenido. Con eso, el sitio ya sirve para publicar; el resto es mejora de cierre y ritmo.

#### What's Working

1. Hero brand-first con hechos y un primario olive + ghost a precios.
2. Mid-funnel útil: capacidad/turnos, essentials ≤4, extras en details, un solo ancla de precio.
3. Conversión honesta a WhatsApp sin testimonios inventados.

#### Priority Issues

1. **[P1] Fatiga del CTA WhatsApp**
   - **Why**: Olive repetido ~7 veces deja de orientar.
   - **Fix**: Un sólido por zona de decisión; mid-funnel en links; float solo tras scroll/móvil.
   - **Suggested command**: `/impeccable distill`

2. **[P1] Galería provisional como evidencia**
   - **Why**: Pico visual clave erosiona confianza local.
   - **Fix**: Nota/badge en lede o figcaption; o 1 imagen + “pedí fotos por WA”.
   - **Suggested command**: `/impeccable clarify`

3. **[P1] Secciones opacity:0 sin reduced-motion**
   - **Why**: Contenido puede “no existir” si el observer falla; malo en móvil.
   - **Fix**: Visible por defecto; motion como enhancement; `prefers-reduced-motion`.
   - **Suggested command**: `/impeccable harden`

4. **[P2] Muro nocturno final (rompe Night/Day)**
   - **Why**: El ritmo tonal muere en el cierre conversional.
   - **Fix**: Ubicación/mapa a surface-day; contacto noche como último patio.
   - **Suggested command**: `/impeccable layout`

5. **[P2] About inset + nav que saltea Qué incluye**
   - **Why**: Hechos de capacidad/turnos se pierden si saltan por nav.
   - **Fix**: Imagen full-bleed/columna; ancla “Qué incluye” en nav.
   - **Suggested command**: `/impeccable bolder`

#### Persona Red Flags

**Jordan**: Nav “Espacio” → galería, no a capacidad; form “Armar mensaje” ambiguo; “Enviando...” no describe abrir WA.
**Riley**: Galería como set final; loading artificial; opacity:0 sin JS; sin reduced-motion.
**Casey**: Float WA vs CTAs olive; form pide tipeo de más; About con foto reducida en móvil.
**Lucía (organizadora familiar Palpalá)**: Fotos dudosas; precio OK pero no visible en contacto; lede de ubicación genérico.

#### Minor Observations

- Detector: drift de type ramp (0.85–1.2rem, 24px/35px, clamps).
- Class `projects-section` residual de template.
- Instagram correcto como link (One Olive Rule).
- Footer reassurance bueno en texto, apagado visualmente.

#### Questions to Consider

1. Si quitás todos los btn-brand excepto hero + pricing + contact, ¿la conversión baja o sube?
2. ¿La galería debería existir antes de fotos definitivas, o basta 1 imagen + pedir álbum por WA?
3. ¿`#benefits` debería subir arriba de About?
4. Float Meta-green: ¿reconocimiento de canal o traición al olive?
5. ¿El cierre debería ser “día + mapa” en vez de tres noches seguidas?
