---
name: Quincho El Tata
description: Patio nocturno jujeño con olive de marca y conversión por WhatsApp
colors:
  brand: "#92a863"
  brand-hover: "#6f8548"
  brand-deep: "#3f5230"
  surface-night: "#12160f"
  surface-night-elevated: "#1c2318"
  surface-day: "#eef1e8"
  surface-day-elevated: "#f7f8f4"
  ink: "#1a2112"
  ink-muted: "#4a5340"
  foam: "#f4f6f0"
  button-ink: "#14190f"
typography:
  display:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.85rem, 4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  display-hero:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.5rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "1.4rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "Source Sans 3, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  lede:
    fontFamily: "Source Sans 3, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 2.4vw, 1.35rem)"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  label:
    fontFamily: "Source Sans 3, Segoe UI, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.04em"
rounded:
  sm: "4px"
  none: "0px"
  pill: "50px"
spacing:
  xs: "0.45rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "1.75rem"
  xl: "2.5rem"
  section: "4rem"
  section-lg: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.button-ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.5rem"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
    textColor: "{colors.button-ink}"
  button-primary-active:
    backgroundColor: "{colors.brand-deep}"
    textColor: "{colors.foam}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foam}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.5rem"
  card-surface:
    backgroundColor: "{colors.surface-day-elevated}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.75rem 1.5rem"
  input-field:
    backgroundColor: "{colors.surface-day-elevated}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 0.75rem"
---

# Design System: Quincho El Tata

## Overview

**Creative North Star: "El Patio Bajo las Higueras"**

El sistema visual es cálido y terrenal: un patio jujeño de noche y de día, no un brochure de resort. Olive de hojas como acento de marca, superficies que alternan noche profunda y día claro, tipografía con carácter (Fraunces) sobre cuerpo legible (Source Sans 3). La atmósfera sostiene hechos —pileta, capacidad, turnos, Palpalá— sin competir con ellos.

La densidad es generosa en aire entre secciones y apretada dentro de grupos (hechos, listas, CTAs). La conversión vive en un único gesto sólido: WhatsApp en olive. Lo demás (ghost, links, redes) se mantiene quieto.

Rechazos confirmados: brochure genérico de “experiencia única”, look dashboard SaaS, métricas en cards, y el cliché purple-gradient / AI landing.

**Key Characteristics:**
- Alternancia tonal noche/día como ritmo de página
- Un acento olive sólido para conversión; secundarios ghost o texto
- Display serif expresivo + sans de lectura cotidiana
- Profundidad por capas tonales y borde fino; sombras excepcionales
- Forma casi sin radio en superficies de contenido; foco olive visible

## Colors

Paleta de patio: olive de hojas sobre tierra nocturna y papel de día.

### Primary
- **Olive de hojas** (`brand` / `#92a863`): CTA sólido, foco, selección, acentos de marca. Es la voz de acción.
- **Olive sombra** (`brand-hover` / `#6f8548`): hover/focus del botón primario.
- **Olive profundo** (`brand-deep` / `#3f5230`): active del botón, bullets, énfasis sobre día.

### Neutral
- **Noche de patio** (`surface-night` / `#12160f`): fondo base y secciones oscuras (hero continuum, galería, contacto).
- **Noche elevada** (`surface-night-elevated` / `#1c2318`): paneles sobre noche (prueba de galería).
- **Día de patio** (`surface-day` / `#eef1e8`): secciones claras (servicios, precios).
- **Día elevada** (`surface-day-elevated` / `#f7f8f4`): cards, paneles de formulario/extras.
- **Tinta** (`ink` / `#1a2112`): texto sobre día.
- **Tinta suave** (`ink-muted` / `#4a5340`): ledes y notas sobre día.
- **Espuma** (`foam` / `#f4f6f0`): texto sobre noche.
- **Tinta de botón** (`button-ink` / `#14190f`): texto del CTA olive sólido.

### Named Rules
**The One Olive Rule.** El olive sólido es la voz de conversión (WhatsApp). No lo uses en acciones secundarias (Instagram, redes, “ver precios”) que compitan con esa conversión.

**The Night/Day Alternation Rule.** Las secciones principales alternan `surface-night` y `surface-day`. No aplanes toda la landing a un solo fondo.

## Typography

**Display Font:** Fraunces (con Georgia / Times New Roman)
**Body Font:** Source Sans 3 (con Segoe UI / system-ui)

**Character:** Display con peso de patio y asado —serio pero cercano—. Body claro y local, hecho para escanear en el celular.

### Hierarchy
- **Display hero** (700, `clamp(2.5rem, 8vw, 6rem)`, lh 1.05): marca/título del masthead. Tope duro 6rem.
- **Display / Headline** (700, `clamp(1.85rem, 4vw, 2.75rem)`, lh ~1.15): títulos de sección.
- **Title** (700, ~1.4rem): nombres de plan, subtítulos de panel.
- **Lede** (400, `clamp(1.125rem, 2.4vw, 1.35rem)`, lh 1.45): frase de apoyo bajo el título; medida ~30–36rem.
- **Body** (400, 1rem, lh 1.55): lectura general; apuntar 65–75ch donde haya párrafos largos.
- **Label** (700, ~0.95rem, tracking 0.04em, a veces uppercase): etiquetas de detalle / summaries.

### Named Rules
**The Brand-First Display Rule.** En el primer viewport, el display lleva el nombre del lugar; ningún headline secundario lo debe opacar.

## Layout

Contenedor Bootstrap (`container` / `px-4 px-lg-5`). Ritmo vertical generoso entre secciones (`~4–8rem`) y grupos internos más compactos (`0.75–1.75rem`). Anclas con `scroll-margin-top: 80px` bajo el header.

Breakpoints observados: menú/móvil ~768px; hero a viewport completo y grillas de dos columnas ~992px. Flujo principalmente lineal (una columna en móvil); mid-funnel usa grid imagen + hechos en desktop.

Hero full-bleed con imagen edge-to-edge y overlay oscuro; sin cards en el primer viewport.

## Elevation & Depth

Sistema **tonal / flat**. La profundidad viene de alternar noche y día y de paneles “elevated” un tono más claros, más un borde fino teñido de olive (`color-mix` ~16–28% con brand/brand-deep). Las sombras no son el idioma del producto; aparecen como excepciones (header sticky suave, menú móvil).

### Shadow Vocabulary
- **Header hairline** (`box-shadow: 0 1px 0 color-mix(... brand-deep 12%)`): separación mínima del header sobre contenido.
- **Mobile menu** (`0 2px 8px rgba(0, 0, 0, 0.1)`): utilidad local del drawer; no reutilizar como elevación de cards.

### Named Rules
**The Flat-By-Default Rule.** Cards y paneles son planos: fondo elevated + borde fino. No apilar sombras multi-capa ni halos sin offset.

## Shapes

Forma casi sin radio en superficies de contenido (pricing card, paneles, botones de marca): esquinas cuadradas / `0`. Radio pequeño (`4px`) solo en controles nativos ligeros (skip-link, inputs Bootstrap). El float de WhatsApp es la excepción pill (`50px`) por convención del canal.

Bordes: 1px (o 1.5px en ghost del hero) con olive mezclado, nunca `border-left` grueso como acento decorativo.

## Components

### Buttons
Sólidos y confiados: un primario olive, el resto se calla.

- **Shape:** sin radio (`0`) en CTAs de marca
- **Primary (`btn-brand`):** fondo olive, texto tinta oscura, padding generoso (`~0.75rem 1.5rem`, min-width ~17.5–20rem en CTAs clave)
- **Hover / Focus:** olive sombra; foco global `outline: 3px solid brand; outline-offset: 2px`
- **Active:** olive profundo + texto espuma
- **Ghost / secondary:** transparente, borde foam, solo sobre noche (hero “Ver precios”)
- **Text link secundario:** underline, sin fondo (IG, redes, “Escribinos” del footer)

### Cards / Containers
- **Corner Style:** cuadrado (`0`)
- **Background:** `surface-day-elevated` sobre día; `surface-night-elevated` sobre noche
- **Shadow Strategy:** ninguno en reposo (ver Elevation)
- **Border:** 1px olive mezclado
- **Internal Padding:** ~1.25–1.75rem
- **Uso:** pricing ancla, paneles `details` (extras, formulario), prueba de galería — no como estructura del hero

### Inputs / Fields
- **Style:** controles Bootstrap sobre panel día elevated; labels Source Sans
- **Focus:** outline olive del sistema
- **Error:** texto peligro + `role="alert"`; mensajes en español local
- **Disabled / loading:** botón submit con `aria-busy` y label “Enviando...”

### Navigation
Header corto (≤4 ítems clave), logo + menú. En móvil, panel full; foco y `inert` cuando cerrado. Sin eyebrows ni chips en nav.

### Signature: WhatsApp CTA
El patrón de marca es el botón olive sólido que abre WhatsApp (hero, about, precios, contacto, float Meta-green aparte). Instagram y redes nunca usan `btn-brand`.

## Do's and Don'ts

### Do:
- **Do** usar un solo CTA olive sólido por zona de decisión; el resto ghost o link.
- **Do** alternar `surface-night` / `surface-day` entre secciones mayores.
- **Do** liderar con hechos (capacidad, turnos, qué incluye, Palpalá) antes que adjetivos.
- **Do** mantener Fraunces en display y Source Sans 3 en cuerpo/UI.
- **Do** preservar foco visible olive y labels/`aria` del formulario.

### Don't:
- **Don't** poner Instagram u otras redes como `btn-brand` compitiendo con WhatsApp.
- **Don't** armar el mid-funnel como grilla de cards métricas o dual-pricing simétrico.
- **Don't** inventar testimonios, ocupación o fotos definitivas que el negocio no aporte.
- **Don't** caer en brochure de resort ni en look purple-gradient / dashboard SaaS.
- **Don't** usar eyebrows, pills decorativas o sombras de moda como lenguaje por defecto.
