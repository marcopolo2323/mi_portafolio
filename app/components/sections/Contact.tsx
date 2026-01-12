'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/app/components/ui/Card';
import { Button } from '@/app/components/ui/Button';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { SocialIcon } from '@/app/components/ui/SocialIcon';
import { sendEmail, validateForm, type ContactFormData } from '@/lib/emailService';

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar formulario
    const validationErrors = validateForm(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors([]);
    setSubmitStatus('idle');

    try {
      const success = await sendEmail(formData);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrors(['Error al enviar el mensaje. Por favor, intenta de nuevo.']);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrors(['Error inesperado. Por favor, intenta de nuevo más tarde.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Limpiar errores cuando el usuario empiece a escribir
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Contacto
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Hablemos
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Estoy siempre abierto a discutir nuevas oportunidades, proyectos interesantes 
                o simplemente charlar sobre tecnología. No dudes en contactarme.
              </p>
            </div>

            {/* Información de contacto */}
            <div className="space-y-4">
              {CONTACT_INFO.map((info) => (
                <div key={info.label} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">{info.icon}</span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">{info.label}</p>
                    <a
                      href={info.href}
                      className="text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Redes sociales */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-4">
                Sígueme en redes sociales
              </h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-neutral-100 hover:bg-neutral-900 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
                    aria-label={social.name}
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-neutral-900">
                Envíame un mensaje
              </h3>
            </CardHeader>
            <CardContent>
              {/* Mensajes de estado */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    ¡Mensaje enviado exitosamente! 🎉
                  </p>
                  <p className="text-green-600 text-sm mt-1">
                    Te contactaré pronto. Gracias por tu mensaje.
                  </p>
                </div>
              )}

              {errors.length > 0 && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium mb-2">
                    Por favor, corrige los siguientes errores:
                  </p>
                  <ul className="text-red-600 text-sm space-y-1">
                    {errors.map((error, index) => (
                      <li key={index}>• {error}</li>
                    ))}
                  </ul>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent disabled:bg-neutral-100 disabled:cursor-not-allowed"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent disabled:bg-neutral-100 disabled:cursor-not-allowed"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent disabled:bg-neutral-100 disabled:cursor-not-allowed"
                    placeholder="¿De qué quieres hablar?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none disabled:bg-neutral-100 disabled:cursor-not-allowed"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando mensaje...
                    </>
                  ) : (
                    'Enviar mensaje'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}