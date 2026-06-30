# Quincho El Tata

[![CI](https://github.com/DevEzequiel14/quincho/actions/workflows/ci.yml/badge.svg)](https://github.com/DevEzequiel14/quincho/actions/workflows/ci.yml)

Landing page de **Quincho El Tata** — alquiler de quincho con pileta para eventos en Palpalá, Jujuy. Incluye formulario de consulta (WhatsApp), galería, precios orientativos y SEO local.

**Demo:** [https://quinchoeltata.netlify.app/](https://quinchoeltata.netlify.app/)

## Requisitos

- **Node.js 20 LTS** (recomendado; mínimo 18.19 para Angular 19)
- **npm** 9+

## Instalación

```bash
git clone https://github.com/DevEzequiel14/quincho.git
cd quincho
npm ci
```

## Desarrollo

```bash
npm start
```

Abre [http://localhost:4200](http://localhost:4200). El servidor recarga al guardar cambios.

Puerto alternativo:

```bash
npx ng serve --port 5000
```

## Build de producción

```bash
npm run build
```

Salida en `dist/quincho/` (`browser/` + `server/`). El build incluye **SSR** y **prerender** de la ruta principal.

## SSR en local

Tras un build de producción:

```bash
npm run serve:ssr:quincho
```

Servidor en [http://localhost:4000](http://localhost:4000).

Para probar el flujo cercano a Netlify (con [Netlify CLI](https://docs.netlify.com/cli/get-started/) instalada globalmente):

```bash
npm run build
netlify serve
```

## Tests y calidad

| Comando | Descripción |
|---------|-------------|
| `npm test` | Tests unitarios (Karma + Jasmine) |
| `npm test -- --watch=false --browsers=ChromeHeadless` | Suite headless (como en CI) |
| `npm run e2e` | Tests E2E con Playwright (build + SSR en `:4000`) |
| `npm run e2e:ui` | Playwright en modo interactivo |
| `npm run lint` | ESLint (Angular + TypeScript) |
| `npm run format` | Prettier en `src/` |
| `npm run format:check` | Verificar formato sin escribir |

La primera vez que corras E2E:

```bash
npx playwright install chromium
```

## Deploy en Netlify

El sitio se despliega en Netlify con **Angular SSR** usando [`@netlify/angular-runtime`](https://www.npmjs.com/package/@netlify/angular-runtime).

Configuración versionada en [`netlify.toml`](netlify.toml):

- **Build:** `npm run build`
- **Publish:** `dist/quincho/browser`
- **Node:** 20

Pasos típicos:

1. Conectar el repo [github.com/DevEzequiel14/quincho](https://github.com/DevEzequiel14/quincho) en Netlify.
2. Netlify detecta `netlify.toml` y el runtime de Angular.
3. Deploy automático en cada push a la rama de producción.

No commitear variables de entorno ni secretos en el repositorio. Si necesitás configuración sensible, usá el panel de Netlify (Environment variables).

## CI (GitHub Actions)

Workflow: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

| Job | Pasos |
|-----|--------|
| **ci** | `npm ci` → `build` → tests unitarios headless → `lint` |
| **e2e** | `npm ci` → `build` → Playwright (Chromium) |

Se ejecuta en push y PR hacia `main` / `master`.

Ver [CONTRIBUTING.md](CONTRIBUTING.md) para convenciones y cómo reproducir CI en local.

## Estructura relevante

```
public/              # Assets estáticos (icons, robots.txt, sitemap.xml)
src/app/
  core/constants/    # contact, SEO, precios, galería, imágenes
  pages/home/        # Landing (secciones)
  shared/            # Header, footer, directivas
e2e/                 # Playwright
```

## Contacto del proyecto

Consultas sobre el repositorio: ezequielchorolque14@gmail.com

Reservas del quincho: WhatsApp y redes publicadas en el sitio.
