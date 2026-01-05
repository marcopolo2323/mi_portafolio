# Portfolio Moderno - Next.js

Un portafolio profesional y moderno construido con Next.js, TypeScript y Tailwind CSS. Diseñado con una paleta de colores minimalista y arquitectura modular para máximo rendimiento.

## 🚀 Características

- **Diseño Minimalista**: Paleta de colores neutros y diseño limpio
- **Totalmente Responsivo**: Optimizado para todos los dispositivos
- **Arquitectura Modular**: Componentes reutilizables y código organizado
- **Rendimiento Optimizado**: Carga rápida y experiencia fluida
- **TypeScript**: Tipado estático para mayor confiabilidad
- **Tailwind CSS**: Estilos utilitarios para desarrollo rápido
- **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías

- [Next.js 16](https://nextjs.org/) - Framework de React
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Geist Font](https://vercel.com/font) - Tipografía moderna

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd mi-app
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎨 Personalización

### Información Personal

Edita los siguientes archivos para personalizar tu información:

1. **Hero Section** (`app/components/sections/Hero.tsx`):
   - Cambia "Tu Nombre" por tu nombre real
   - Actualiza la descripción y título profesional
   - Personaliza los textos de presentación

2. **About Section** (`app/components/sections/About.tsx`):
   - Actualiza tu biografía personal
   - Modifica las habilidades técnicas
   - Ajusta las tecnologías que dominas

3. **Projects Section** (`app/components/sections/Projects.tsx`):
   - Reemplaza los proyectos de ejemplo con tus proyectos reales
   - Actualiza las imágenes, descripciones y enlaces
   - Modifica las tecnologías utilizadas

4. **Experience Section** (`app/components/sections/Experience.tsx`):
   - Actualiza tu experiencia laboral
   - Modifica empresas, cargos y fechas
   - Personaliza logros y responsabilidades

5. **Contact Section** (`app/components/sections/Contact.tsx`):
   - Cambia la información de contacto
   - Actualiza email, teléfono y ubicación
   - Modifica los enlaces de redes sociales

### Colores y Estilos

El portafolio utiliza una paleta de colores minimalista basada en grises neutros:

- **Primario**: `neutral-900` (negro suave)
- **Secundario**: `neutral-100` (gris muy claro)
- **Texto**: `neutral-600` (gris medio)
- **Fondo**: `white` y `neutral-50`

Para cambiar los colores, modifica las clases de Tailwind en los componentes.

### Imágenes

1. Reemplaza el avatar en `Hero.tsx` con tu foto
2. Actualiza las imágenes de proyectos en `Projects.tsx`
3. Agrega tus imágenes a la carpeta `public/`

## 📁 Estructura del Proyecto

```
mi-app/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Navegación principal
│   │   │   └── Footer.tsx      # Pie de página
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Sección de presentación
│   │   │   ├── About.tsx       # Sobre mí
│   │   │   ├── Projects.tsx    # Proyectos
│   │   │   ├── Experience.tsx  # Experiencia
│   │   │   └── Contact.tsx     # Contacto
│   │   └── ui/
│   │       ├── Button.tsx      # Componente de botón
│   │       └── Card.tsx        # Componente de tarjeta
│   ├── globals.css             # Estilos globales
│   ├── layout.tsx              # Layout principal
│   └── page.tsx                # Página principal
├── lib/
│   └── utils.ts                # Utilidades
└── public/                     # Archivos estáticos
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. El despliegue se realizará automáticamente

### Netlify

1. Ejecuta `npm run build`
2. Sube la carpeta `.next` a Netlify

### Otros Proveedores

1. Ejecuta `npm run build`
2. Sube los archivos generados a tu proveedor de hosting

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Ejecutar linter

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

¡Hecho con ❤️ y Next.js!
