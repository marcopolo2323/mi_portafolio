import { Card, CardContent, CardHeader } from '@/app/components/ui/Card';
import { EXPERIENCES } from '@/lib/constants';

export function Experience() {
  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Experiencia profesional
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Mi trayectoria profesional y los logros más significativos
          </p>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Línea de tiempo */}
              {index !== EXPERIENCES.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-neutral-200 -z-10" />
              )}
              
              <div className="flex items-start space-x-6">
                {/* Punto de la línea de tiempo */}
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {index + 1}
                  </span>
                </div>

                {/* Contenido */}
                <Card hover className="flex-1">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-900">
                          {experience.position}
                        </h3>
                        <p className="text-lg text-neutral-600 font-medium">
                          {experience.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium">
                        {experience.period}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-neutral-600 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Logros */}
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        Logros principales:
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-neutral-600">
                            <span className="text-neutral-400 mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tecnologías */}
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        Tecnologías utilizadas:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-neutral-50 text-neutral-700 text-sm rounded-md border border-neutral-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}