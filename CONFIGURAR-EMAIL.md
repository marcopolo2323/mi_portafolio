# 📧 Configurar Formulario de Contacto con EmailJS

## 🚀 **Paso 1: Crear Cuenta en EmailJS**

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz click en **"Sign Up"**
3. Crea tu cuenta (es gratis hasta 200 emails/mes)
4. Confirma tu email

## ⚙️ **Paso 2: Configurar Servicio de Email**

### **2.1 Crear un Servicio:**
1. En el dashboard, ve a **"Email Services"**
2. Click **"Add New Service"**
3. Selecciona tu proveedor de email:
   - **Gmail** (recomendado)
   - **Outlook**
   - **Yahoo**
   - Otros...

### **2.2 Configurar Gmail (Recomendado):**
1. Selecciona **"Gmail"**
2. Click **"Connect Account"**
3. Autoriza EmailJS a usar tu Gmail
4. Copia el **Service ID** (ejemplo: `service_abc123`)

## 📝 **Paso 3: Crear Template de Email**

### **3.1 Crear Template:**
1. Ve a **"Email Templates"**
2. Click **"Create New Template"**
3. Usa este template:

```html
Asunto: Nuevo mensaje de {{subject}} - Portfolio

Hola Antonich,

Has recibido un nuevo mensaje desde tu portfolio:

👤 Nombre: {{from_name}}
📧 Email: {{from_email}}
📋 Asunto: {{subject}}

💬 Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu portfolio web.
```

### **3.2 Configurar Variables:**
- `{{from_name}}` - Nombre del remitente
- `{{from_email}}` - Email del remitente  
- `{{subject}}` - Asunto del mensaje
- `{{message}}` - Contenido del mensaje

### **3.3 Guardar Template:**
1. Click **"Save"**
2. Copia el **Template ID** (ejemplo: `template_xyz789`)

## 🔑 **Paso 4: Obtener Public Key**

1. Ve a **"Account"** → **"General"**
2. Encuentra **"Public Key"**
3. Copia la clave (ejemplo: `abcdef123456`)

## 🛠️ **Paso 5: Configurar en tu Proyecto**

### **5.1 Actualizar emailService.ts:**

Abre `mi-app/lib/emailService.ts` y reemplaza:

```typescript
const EMAILJS_CONFIG = {
  serviceId: 'service_abc123',    // ← Tu Service ID
  templateId: 'template_xyz789',  // ← Tu Template ID
  publicKey: 'abcdef123456',      // ← Tu Public Key
};
```

### **5.2 Ejemplo con datos reales:**
```typescript
const EMAILJS_CONFIG = {
  serviceId: 'service_gmail_123',
  templateId: 'template_contact_456', 
  publicKey: 'user_AbCdEf123456',
};
```

## 🧪 **Paso 6: Probar el Formulario**

1. **Guarda** los cambios
2. **Recarga** tu portafolio
3. **Llena** el formulario de contacto
4. **Envía** un mensaje de prueba
5. **Revisa** tu email (puede tardar 1-2 minutos)

## ✅ **Verificar que Funciona**

### **Señales de éxito:**
- ✅ Mensaje "¡Mensaje enviado exitosamente! 🎉"
- ✅ Formulario se limpia automáticamente
- ✅ Recibes email en tu bandeja de entrada

### **Si hay errores:**
- ❌ Revisa que los IDs sean correctos
- ❌ Verifica que el servicio esté conectado
- ❌ Checa la consola del navegador (F12)

## 🎯 **Funcionalidades Incluidas**

### **✅ Validación completa:**
- Campos requeridos
- Formato de email válido
- Mensaje mínimo de 10 caracteres

### **✅ Estados visuales:**
- Loading spinner mientras envía
- Mensaje de éxito verde
- Errores en rojo con detalles

### **✅ Experiencia de usuario:**
- Formulario se deshabilita mientras envía
- Se limpia automáticamente al enviar
- Placeholders informativos

## 🔧 **Personalizar el Email**

### **Cambiar el asunto:**
En el template de EmailJS:
```
Asunto: 🚀 Nuevo proyecto - {{subject}}
```

### **Agregar más campos:**
1. Agrega campo en el formulario
2. Actualiza `ContactFormData` en `emailService.ts`
3. Agrega variable en template EmailJS

### **Cambiar destinatario:**
En `emailService.ts`:
```typescript
to_email: 'tu-nuevo-email@gmail.com',
```

## 💡 **Consejos Pro**

### **Límites gratuitos:**
- 200 emails/mes gratis
- Después $20/mes por 1000 emails

### **Seguridad:**
- Las claves son públicas (está bien)
- EmailJS maneja la seguridad
- No expones credenciales sensibles

### **Backup:**
- Configura auto-respuesta
- Guarda mensajes en base de datos (opcional)
- Integra con Slack/Discord (avanzado)

## 🎉 **¡Listo!**

Tu formulario ahora envía emails reales a tu bandeja de entrada. Los visitantes pueden contactarte directamente desde tu portafolio.

**Próximos pasos:**
1. Configura EmailJS con tus credenciales
2. Prueba enviando un mensaje
3. ¡Disfruta recibiendo mensajes de clientes potenciales!

---

**¿Necesitas ayuda?** Revisa la consola del navegador (F12) para ver errores específicos.