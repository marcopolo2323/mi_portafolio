'use client';

import { Card, CardContent, CardHeader } from '@/app/components/ui/Card';
import { Button } from '@/app/components/ui/Button';
import { ProjectImage } from '@/app/components/ui/ProjectImage';
import { PROJECTS } from '@/lib/constants';

export function Projects() {
  const handleProjectClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="proyectos" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Proyectos destacados
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y significativos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <Card key={project.id} hover className="overflow-hidden">
              {/* Imagen del proyecto */}
              <div className="aspect-video bg-neutral-200 mb-6 rounded-lg overflow-hidden relative">
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  title={project.title}
                />
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-neutral-900 text-white text-xs rounded-full">
                      Destacado
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-neutral-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones de acción */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleProjectClick(project.liveUrl)}
                    disabled={!project.liveUrl || project.liveUrl === '#'}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {project.liveUrl && project.liveUrl !== '#' ? 'Ver proyecto' : 'Próximamente'}
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleProjectClick(project.githubUrl)}
                    disabled={!project.githubUrl || project.githubUrl === '#'}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {project.githubUrl && project.githubUrl !== '#' ? 'Código' : 'Privado'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary" size="lg">
            Ver todos los proyectos
          </Button>
        </div>
      </div>
    </section>
  );
}