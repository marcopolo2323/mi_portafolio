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
    image: '/api/placeholder/400/250', // Placeholder temporal
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: '#', // Cambia cuando tengas el proyecto desplegado
    githubUrl: '#', // Cambia por tu repo real
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Dashboard meteorológico con pronósticos detallados, gráficos interactivos y alertas climáticas en tiempo real.',
    image: '/api/placeholder/400/250', // Placeholder temporal
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    liveUrl: '#', // Cambia cuando tengas el proyecto desplegado
    githubUrl: '#', // Cambia por tu repo real
    featured: false
  },
  {
    id: 4,
    title: 'Task Manager Pro',
    description: 'Aplicación de gestión de tareas con colaboración en equipo, notificaciones push y seguimiento de progreso.',
    image: '/api/placeholder/400/250', // Placeholder temporal
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
    company: 'Tech Solutions Inc.',
    position: 'Senior Full Stack Developer',
    period: '2022 - Presente',
    description: 'Lidero el desarrollo de aplicaciones web escalables utilizando React, Node.js y AWS. Colaboro con equipos multidisciplinarios para entregar soluciones de alta calidad.',
    achievements: [
      'Mejoré el rendimiento de la aplicación principal en un 40%',
      'Implementé arquitectura de microservicios',
      'Mentoré a 3 desarrolladores junior'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker']
  },
  {
    id: 2,
    company: 'Digital Agency Pro',
    position: 'Frontend Developer',
    period: '2021 - 2022',
    description: 'Desarrollé interfaces de usuario modernas y responsivas para diversos clientes. Trabajé estrechamente con diseñadores UX/UI para crear experiencias excepcionales.',
    achievements: [
      'Desarrollé más de 15 sitios web responsivos',
      'Implementé sistema de design tokens',
      'Reduje el tiempo de carga promedio en 60%'
    ],
    technologies: ['Vue.js', 'Sass', 'Webpack', 'Figma', 'Git']
  },
  {
    id: 3,
    company: 'StartupXYZ',
    position: 'Junior Developer',
    period: '2020 - 2021',
    description: 'Comencé mi carrera profesional contribuyendo al desarrollo de una plataforma SaaS. Aprendí las mejores prácticas de desarrollo y trabajo en equipo.',
    achievements: [
      'Implementé funcionalidades clave del producto',
      'Participé en code reviews y pair programming',
      'Contribuí a la documentación técnica'
    ],
    technologies: ['JavaScript', 'Python', 'Django', 'MySQL', 'Bootstrap']
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