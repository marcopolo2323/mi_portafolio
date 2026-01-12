// Alternativa simple usando mailto: (sin configuración externa)

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmailSimple = (formData: ContactFormData): boolean => {
  try {
    // Crear el contenido del email
    const emailBody = `
Hola Antonich,

Has recibido un nuevo mensaje desde tu portfolio:

👤 Nombre: ${formData.name}
📧 Email: ${formData.email}
📋 Asunto: ${formData.subject}

💬 Mensaje:
${formData.message}

---
Este mensaje fue enviado desde tu portfolio web.
    `.trim();

    // Crear la URL mailto
    const mailtoUrl = `mailto:lloyd01forger@gmail.com?subject=${encodeURIComponent(
      `Nuevo mensaje: ${formData.subject}`
    )}&body=${encodeURIComponent(emailBody)}`;

    // Abrir cliente de email
    window.open(mailtoUrl, '_blank');
    
    return true;
  } catch (error) {
    console.error('Error al abrir cliente de email:', error);
    return false;
  }
};

// Función para validar email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Función para validar formulario
export const validateForm = (formData: ContactFormData): string[] => {
  const errors: string[] = [];

  if (!formData.name.trim()) {
    errors.push('El nombre es requerido');
  }

  if (!formData.email.trim()) {
    errors.push('El email es requerido');
  } else if (!isValidEmail(formData.email)) {
    errors.push('El email no es válido');
  }

  if (!formData.subject.trim()) {
    errors.push('El asunto es requerido');
  }

  if (!formData.message.trim()) {
    errors.push('El mensaje es requerido');
  } else if (formData.message.length < 10) {
    errors.push('El mensaje debe tener al menos 10 caracteres');
  }

  return errors;
};