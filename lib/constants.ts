import { Project, Experience, Skill, ContactInfo, NavigationItem } from '@/types';

// Información personal
export const PERSONAL_INFO = {
  name: 'Antonich Lloyd Marin Alejo',
  title: 'Desarrollador Full Stack',
  description: 'Desarrollador Full Stack especializado en crear experiencias digitales excepcionales',
  bio: 'Apasionado por la tecnología y el diseño, me dedico a construir aplicaciones web modernas que combinan funcionalidad, rendimiento y una experiencia de usuario excepcional.',
  email: 'lloyd01forger@gmail.com',
  phone: '+51 934819598',
  location: 'Pucallpa, Perú',
  website: 'https://tu-portfolio.com'
};

// Navegación
export const NAVIGATION: NavigationItem[] = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Contacto', href: '#contacto' },
];

// Habilidades técnicas
export const SKILLS: Skill[] = [
  {
    category: 'Frontend',
    technologies: ['React', 'React Native', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap']
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Python', 'Flask', 'PostgreSQL', 'MongoDB', 'Express']
  },
  {
    category: 'Herramientas',
    technologies: ['Git', 'Docker', 'Figma', 'Vercel']
  }
];

// Proyectos
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Sistema de Notas',
    description: 'Plataforma de gestión de notas con panel de administración completo. Permite crear, editar y organizar notas de manera eficiente.',
    image: '/sistema_notas.png', // Esta imagen ya existe
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: '#', // Cambia por tu URL real cuando la tengas
    githubUrl: 'https://github.com/Nicko-rgb/client_notas',
    featured: true
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y gestión de inventario.',
    image: '/ecomerce.jpeg', // Placeholder temporal
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: '#', // Cambia cuando tengas el proyecto desplegado
    githubUrl: '#', // Cambia por tu repo real
    featured: true
  },
  {
    id: 3,
    title: 'Sistema Gestión de Planta de Agua',
    description: 'Dashboard de ventas diarias con gráficos interactivos, reportes y alertas en tiempo real.',
    image: '/gestion_de_planta_de_agua.png',
    technologies: ['React', 'Chart.js', 'Node.js', 'Tailwind CSS'],
    liveUrl: 'https://www.aquayara.vercel.app', // ✅ Con https://
    githubUrl: 'https://github.com/marcopolo2323/administrar_planta_agua',
    featured: false
  },
  {
    id: 4,
    title: 'plataforma de multiservicios',
    description: 'Aplicación de gestión de multiservicios, notificaciones push y seguimiento de progreso.',
    image: '/amazon_group.jpeg', // Placeholder temporal
    technologies: ['React Native', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: '#', // Cambia cuando tengas el proyecto desplegado
    githubUrl: '#', // Cambia por tu repo real
    featured: false
  }
];

// Experiencia laboral
export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: 'Aquayara.',
    position: 'Full Stack Developer',
    period: '2025/09/01 - 2025-12-01',
    description: 'Lidero el desarrollo de aplicaciones web escalables utilizando React, Node.js y AWS. Colaboro con equipos multidisciplinarios para entregar soluciones de alta calidad.',
    achievements: [
      'Mejoré el rendimiento de la aplicación principal en un 40%',
      'Implementé arquitectura de microservicios',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker']
  }
];

// Información de contacto
export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: '📧',
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`
  },
  {
    icon: '📱',
    label: 'Teléfono',
    value: PERSONAL_INFO.phone,
    href: `tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`
  },
  {
    icon: '📍',
    label: 'Ubicación',
    value: PERSONAL_INFO.location,
    href: '#'
  }
];

// Enlaces sociales
export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tu-perfil',
    icon: 'linkedin'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/marcopolo2323',
    icon: 'github'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/tu-usuario',
    icon: 'twitter'
  }
];