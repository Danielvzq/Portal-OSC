# OSC NL — Portal (React + Vite + Tailwind)

Recreación moderna del sitio público de Organizaciones de la Sociedad Civil de Nuevo León
(actualmente en Google Sites), con la misma información pero con una interfaz más ordenada:
nav fija, tarjetas por tema, y los mismos colores/identidad por sección del sitio original.

## Requisitos

- Node.js 18 o superior

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Build de producción

```bash
npm run build
npm run preview   # para probar el build localmente
```

## Deploy en Vercel

**Opción A — desde la web de Vercel**
1. Sube esta carpeta a un repositorio de GitHub (o arrástrala directo si usas "Deploy" > "Upload").
2. En [vercel.com](https://vercel.com), New Project → importa el repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Deploy.

**Opción B — desde la terminal**
```bash
npm install -g vercel
vercel        # sigue las instrucciones (primera vez)
vercel --prod # para producción
```

El archivo `vercel.json` ya incluye el rewrite necesario para que las rutas internas
(`/registro`, `/programa-de-fomento/tramites`, etc.) funcionen al recargar la página.

## Estructura

```
src/
  components/   Navbar, Footer, Hero, TopicCard, Layout — piezas reutilizables
  data/         nav.js (menú) y documentos.js (documentos legales + directorio de muestra)
  pages/        una página por cada ruta del sitio
```

## Pendientes de contenido (marcados en el código con notas)

Estas secciones quedaron con contenido de ejemplo porque el sitio original solo mostraba
imágenes (sin texto extraíble) en esos puntos. Búscalos y reemplázalos:

- **Registro → directorio**: la tabla usa una muestra de 5 organizaciones
  (`src/data/documentos.js` → `DIRECTORIO_MUESTRA`). Sustitúyela por el CSV/API real cuando
  esté disponible (por ejemplo, exportando el Google Sheet publicado como CSV).
- **Registro → formulario**: el enlace actual apunta al link de "edición" del Google Form
  original (`.../edit`). Verifica si existe una URL pública (`.../viewform`) y actualízala en
  `src/pages/Registro.jsx`.
- **Comité / Consejo**: falta la lista de integrantes (nombre y cargo).
- **Contáctanos**: falta teléfono, correo y dirección oficiales; el formulario no está
  conectado a ningún backend todavía.
- **Multimedia**: Material de Apoyo y Videos OSC's están vacíos, listos para recibir
  contenido.
- **Convocatorias y Resultados / Eventos Externos**: contenido de encabezado real, pero sin
  convocatorias/eventos específicos publicados aún.

## Paleta e identidad

- Naranja `#F2811D`, rosa `#EC1E79`, morado `#8B7FE8`, verde `#3EBD7E`, azul `#5FA8E0`,
  amarillo `#F2BB3D` — un color por tema, igual que en el sitio original.
- Tipografía: "Baloo 2" para títulos (conserva el estilo redondeado del logo/wordmark
  original) e "Inter" para texto.
- Botón píldora con contorno ("Haz clic aquí" en el sitio original) como gesto de llamada a
  la acción reutilizado en todo el sitio.
