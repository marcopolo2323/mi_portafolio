import emailjs from '@emailjs/browser';

// Configuración de EmailJS
const EMAILJS_CONFIG = {
  serviceId: 'service_nevx3zg', // Cambiarás esto por tu Service ID
  templateId: 'template_1iik287', // Cambiarás esto por tu Template ID
  publicKey: 'v_suBAPyqL-Wk3UB9', // Cambiarás esto por tu Public Key
};

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Inicializar EmailJS
    emailjs.init(EMAILJS_CONFIG.publicKey);

    // Preparar los datos del template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'lloyd01forger@gmail.com', // Tu email donde recibirás los mensajes
    };

    // Enviar el email
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('Email enviado exitosamente:', response);
    return true;
  } catch (error) {
    console.error('Error al enviar email:', error);
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