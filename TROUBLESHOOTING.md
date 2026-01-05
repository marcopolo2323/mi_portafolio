# Guía de Solución de Problemas

## Errores Comunes y Soluciones

### 1. Error de Hidratación (Hydration Error)

**Problema**: `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties`

**Causas comunes**:
- Uso de `Date.now()`, `Math.random()` o `new Date()` en componentes del servidor
- Diferencias entre renderizado del servidor y cliente
- Extensiones del navegador que modifican el HTML

**Soluciones**:
1. **Usar el componente `ClientOnly`** para contenido que solo debe renderizarse en el cliente:
```tsx
import { ClientOnly } from '@/app/components/ui/ClientOnly';

<ClientOnly fallback="Cargando...">
  {new Date().getFullYear()}
</ClientOnly>
```

2. **Marcar componentes como 'use client'** si necesitan interactividad:
```tsx
'use client';
import { useState } from 'react';
```

3. **Usar `useEffect` para valores dinámicos**:
```tsx
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;
```

### 2. Errores de TypeScript

**Problema**: Errores de tipos en componentes

**Soluciones**:
1. Verificar que todos los tipos estén importados correctamente
2. Usar `getDiagnostics` para ver errores específicos
3. Revisar que las props coincidan con las interfaces definidas

### 3. Problemas de Estilos

**Problema**: Los estilos de Tailwind no se aplican

**Soluciones**:
1. Verificar que `@import "tailwindcss";` esté en `globals.css`
2. Reiniciar el servidor de desarrollo
3. Verificar que las clases estén escritas correctamente

### 4. Errores de Importación

**Problema**: `Module not found` o errores de rutas

**Soluciones**:
1. Verificar que los paths absolutos estén configurados en `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

2. Usar rutas relativas si los paths absolutos fallan
3. Verificar que los archivos existan en las rutas especificadas

### 5. Problemas de Rendimiento

**Problema**: La aplicación carga lentamente

**Soluciones**:
1. Optimizar imágenes usando `next/image`
2. Usar lazy loading para componentes pesados
3. Implementar code splitting con `dynamic` imports
4. Verificar el bundle size con `npm run build`

### 6. Errores de Build

**Problema**: El build falla en producción

**Soluciones**:
1. Ejecutar `npm run build` localmente para reproducir errores
2. Verificar que no haya `console.log` en producción (se eliminan automáticamente)
3. Revisar que todas las dependencias estén instaladas
4. Verificar la configuración de `next.config.ts`

## Comandos Útiles para Debugging

```bash
# Verificar errores de TypeScript
npm run build

# Limpiar caché de Next.js
rm -rf .next

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install

# Verificar versiones
npm list next react react-dom

# Ejecutar en modo de desarrollo con logs detallados
npm run dev -- --turbo
```

## Mejores Prácticas para Evitar Problemas

1. **Separar componentes del servidor y cliente**:
   - Usar `'use client'` solo cuando sea necesario
   - Mantener la lógica del servidor en componentes sin directiva

2. **Manejar estados correctamente**:
   - Usar `useState` solo en client components
   - Inicializar estados con valores que coincidan entre servidor y cliente

3. **Optimizar imports**:
   - Usar imports dinámicos para componentes pesados
   - Importar solo lo que necesitas de las librerías

4. **Testing**:
   - Probar en diferentes navegadores
   - Verificar en modo producción antes de desplegar
   - Usar herramientas de desarrollo de React

## Recursos Adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Guía de Hidratación](https://nextjs.org/docs/messages/react-hydration-error)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Contacto

Si encuentras problemas no cubiertos en esta guía, puedes:
1. Revisar los issues en el repositorio
2. Crear un nuevo issue con detalles del problema
3. Consultar la documentación oficial de las tecnologías utilizadas