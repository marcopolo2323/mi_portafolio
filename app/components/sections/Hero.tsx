'use client';

import { Button } from '@/app/components/ui/Button';
import { PERSONAL_INFO } from '@/lib/constants';

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="space-y-8">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-32 h-32 bg-neutral-300 rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src="/myself.jpeg" 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Título principal */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Hola, soy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-neutral-900">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 max-w-2xl mx-auto">
              {PERSONAL_INFO.description}
            </p>
          </div>

          {/* Descripción */}
          <p className="text-lg text-neutral-500 max-w-3xl mx-auto leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToProjects}>
              Ver mis proyectos
            </Button>
            <Button variant="secondary" size="lg" onClick={scrollToContact}>
              Contactar
            </Button>
          </div>

          {/* Indicador de scroll */}
          <div className="pt-16">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-neutral-400 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}