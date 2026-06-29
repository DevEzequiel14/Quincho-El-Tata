# Quincho El Tata

[![CI](https://github.com/DevEzequiel14/quincho/actions/workflows/ci.yml/badge.svg)](https://github.com/DevEzequiel14/quincho/actions/workflows/ci.yml)

**Quincho El Tata** es una landing page optimizada para la promoción y reserva de un quincho para eventos y festejos.  

## 🚀 Tecnologías Utilizadas  
- **Angular 19** - Framework principal  
- **Bootstrap** - Estilos modernos y responsivos  
- **SEO Optimizado** - Meta etiquetas para mejorar el posicionamiento  
- **Netlify** - Hosting y despliegue automático  

## 🎯 Características  
✅ Diseño responsive y atractivo  
✅ Información detallada sobre el quincho  
✅ Integración con redes sociales (Instagram y Facebook)  
✅ SEO optimizado para mejorar visibilidad  
✅ Desplegado en Netlify  

## 📂 Instalación y Uso  
1. Clonar el repositorio:  
   ```sh   
   git clone https://github.com/tuusuario/Quincho-El-Tata.git
   cd Quincho-El-Tata

2. Instalar dependencias
   npm install

4. Ejecutar en modo desarrollo
   ng serve 

5. Abrir en el navegador
   http://localhost:4200

🌍 Demo
🔗 https://quinchoeltata.netlify.app/

## CI (GitHub Actions)

Cada push o pull request hacia `main`/`master` ejecuta el workflow [`.github/workflows/ci.yml`](.github/workflows/ci.yml):

1. **Checkout** del código
2. **Node.js 20 LTS** con cache de `npm`
3. **`npm ci`** — instalación reproducible desde `package-lock.json`
4. **`npm run build`** — build de producción (Angular + SSR)
5. **`npm test -- --watch=false --browsers=ChromeHeadless`** — tests unitarios en Chrome headless
6. **`npm run lint`** — ESLint (Angular + TypeScript)

No hay deploy automático en este pipeline; el sitio en Netlify se gestiona por separado.

Para reproducir localmente los mismos pasos:

```sh
npm ci
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
npm run lint
```

📬 Contacto
📩 Para consultas sobre el proyecto, puedes contactarme en ezequielchorolque14@gmail.com
