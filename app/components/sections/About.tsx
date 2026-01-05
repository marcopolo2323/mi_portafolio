import { Card, CardContent, CardHeader } from '@/app/components/ui/Card';
import { SKILLS, PERSONAL_INFO } from '@/lib/constants';

export function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Sobre mí
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Conoce más sobre mi experiencia, habilidades y pasión por el desarrollo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Información personal */}
          <div className="space-y-6">
            <div className="prose prose-lg text-neutral-600">
              <p>
                Soy un desarrollador full stack con más de 3 años de experiencia creando 
                aplicaciones web modernas y escalables. Mi enfoque se centra en escribir 
                código limpio, mantenible y eficiente.
              </p>
              <p>
                Me apasiona aprender nuevas tecnologías y mantenerme actualizado con las 
                últimas tendencias del desarrollo web. Disfruto trabajando en equipo y 
                colaborando en proyectos que generen un impacto positivo.
              </p>
              <p>
                Cuando no estoy programando, me gusta leer sobre tecnología, contribuir 
                a proyectos open source y explorar nuevas herramientas que puedan mejorar 
                mi flujo de trabajo.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">
                🎯 Orientado a resultados
              </span>
              <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">
                🚀 Aprendizaje continuo
              </span>
              <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">
                👥 Trabajo en equipo
              </span>
            </div>
          </div>

          {/* Habilidades técnicas */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
              Habilidades técnicas
            </h3>
            
            <div className="space-y-4">
              {SKILLS.map((skillGroup) => (
                <Card key={skillGroup.category} hover>
                  <CardHeader>
                    <h4 className="text-lg font-semibold text-neutral-900">
                      {skillGroup.category}
                    </h4>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-neutral-50 text-neutral-700 rounded-md text-sm border border-neutral-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}