# 🔗 Guía para URLs Correctas en Proyectos

## ❌ **Problema que tenías:**
```typescript
liveUrl: 'www.aquayara.vercel.app'  // ❌ SIN protocolo
```

**Resultado**: `http://localhost:3000/www.aquayara.vercel.app` (URL rota)

## ✅ **Solución correcta:**
```typescript
liveUrl: 'https://www.aquayara.vercel.app'  // ✅ CON protocolo
```

**Resultado**: Se abre correctamente en nueva pestaña

## 📝 **Formatos Correctos de URLs**

### **Para proyectos desplegados:**
```typescript
// ✅ Vercel
liveUrl: 'https://mi-proyecto.vercel.app'

// ✅ Netlify  
liveUrl: 'https://mi-proyecto.netlify.app'

// ✅ GitHub Pages
liveUrl: 'https://tu-usuario.github.io/mi-proyecto'

// ✅ Dominio personalizado
liveUrl: 'https://www.mi-sitio.com'

// ✅ Heroku
liveUrl: 'https://mi-app.herokuapp.com'
```

### **Para repositorios de GitHub:**
```typescript
// ✅ Repositorio público
githubUrl: 'https://github.com/tu-usuario/nombre-repo'

// ✅ Sin .git al final
githubUrl: 'https://github.com/marcopolo2323/administrar_planta_agua'
```

### **Para proyectos sin URL:**
```typescript
// ✅ Proyecto futuro/privado
liveUrl: '#'     // Muestra "Próximamente"
githubUrl: '#'   // Muestra "Privado"
```

## 🚀 **Tus URLs Actuales (Corregidas):**

```typescript
// ✅ Sistema de Notas
liveUrl: '#'  // Próximamente
githubUrl: 'https://github.com/Nicko-rgb/client_notas'

// ✅ Sistema de Planta de Agua  
liveUrl: 'https://www.aquayara.vercel.app'  // ← CORREGIDO
githubUrl: 'https://github.com/marcopolo2323/administrar_planta_agua'

// ✅ Otros proyectos
liveUrl: '#'  // Próximamente
githubUrl: '#'  // Privado
```

## 🔧 **Cómo Probar que Funciona:**

1. **Guarda** los cambios en `constants.ts`
2. **Recarga** la página del portafolio
3. **Haz click** en "Ver proyecto"
4. **Debe abrir** en nueva pestaña la URL correcta

## ⚠️ **Errores Comunes:**

```typescript
// ❌ Sin protocolo
liveUrl: 'www.mi-sitio.com'
liveUrl: 'mi-proyecto.vercel.app'

// ❌ Protocolo incorrecto  
liveUrl: 'http://mi-sitio-seguro.com'  // Usar https://

// ❌ Con .git al final
githubUrl: 'https://github.com/usuario/repo.git'

// ✅ Correcto
liveUrl: 'https://www.mi-sitio.com'
liveUrl: 'https://mi-proyecto.vercel.app'  
githubUrl: 'https://github.com/usuario/repo'
```

## 🎯 **Regla Simple:**

**SIEMPRE incluye `https://` al inicio de URLs externas**

- ✅ `https://mi-proyecto.com`
- ❌ `www.mi-proyecto.com`
- ❌ `mi-proyecto.com`

¡Ahora tus enlaces funcionarán perfectamente! 🚀