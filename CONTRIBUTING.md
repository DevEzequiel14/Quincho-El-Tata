# Contribuir

Gracias por interesar en **quincho**. Guía breve para mantener el mismo estándar que CI.

## Antes de abrir un PR

1. Creá una rama desde `main`.
2. Hacé cambios acotados (un tema por PR cuando sea posible).
3. Corré la checklist local (abajo).
4. Describí qué cambiaste y cómo probarlo.

## Convenciones

| Área | Convención |
|------|------------|
| **Lenguaje** | TypeScript estricto; templates en español (contenido del negocio) |
| **Componentes** | Standalone, prefijo `app`, selector kebab-case |
| **Estilos** | SCSS; Bootstrap parcial en `src/bootstrap-custom.scss` |
| **Config** | Datos editables en `src/app/core/constants/*.config.ts` (no hardcode disperso) |
| **Tests** | Spec junto al componente/servicio; E2E solo para flujos críticos en `e2e/` |
| **Formato** | `npm run format` antes del PR; ESLint sin errores |
| **Commits** | Mensajes claros en español o inglés, imperativo (`fix:`, `feat:`, `docs:`) |

No incluir secretos, `.env` con tokens, ni credenciales en el código o en commits.

## Correr CI en local

Equivalente al job **ci**:

```bash
npm ci
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
npm run lint
```

Equivalente al job **e2e** (requiere Chromium de Playwright):

```bash
npm ci
npm run build
npx playwright install chromium
CI=true npm run e2e
```

Opcional — verificar formato:

```bash
npm run format:check
```

## Node

Usá **Node 20 LTS** (misma versión que GitHub Actions y Netlify). Con `nvm`:

```bash
nvm use 20
```

## Dudas

Abrí un issue en el repo o escribí a ezequielchorolque14@gmail.com.
