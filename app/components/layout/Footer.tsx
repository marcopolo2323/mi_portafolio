import { ClientOnly } from '@/app/components/ui/ClientOnly';
import { PERSONAL_INFO, NAVIGATION, SOCIAL_LINKS } from '@/lib/constants';
import { SocialIcon } from '@/app/components/ui/SocialIcon';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Información personal */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{PERSONAL_INFO.name}</h3>
            <p className="text-neutral-300 leading-relaxed">
              {PERSONAL_INFO.description}
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces rápidos</h4>
            <nav className="flex flex-col space-y-2">
              {NAVIGATION.map((item) => (
                <a key={item.name} href={item.href} className="text-neutral-300 hover:text-white transition-colors">
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Sígueme</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-neutral-800 hover:bg-neutral-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
            <p className="text-neutral-400 text-sm">
              Disponible para proyectos freelance
            </p>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © <ClientOnly fallback="2024">{new Date().getFullYear()}</ClientOnly> {PERSONAL_INFO.name}. Todos los derechos reservados.
            </p>
            <p className="text-neutral-400 text-sm">
              Hecho con dedicación
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}