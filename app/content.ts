// ---- Navigation ----

export const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Tech Stack' },
  { id: 'work', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = typeof sections[number]['id']

// ---- Hero ----

export const hero = {
  name: 'Dayan Eam',
  title: 'Backend / Full-Stack Engineer',
  bio: 'Software Engineer focused on backend systems, distributed architectures, and modern web applications.',
  stack: 'Spring Boot • Kotlin/Java • React • PostgreSQL • Docker • Microservices',
}

// ---- About ----

export const about = {
  bio: [
    "I'm mainly focused on backend and infrastructure, but I can readily step into full-stack roles when needed. I also possess expertise in machine learning for applications like recommendation systems, text processing, and radar signal processing.",
    "When I'm not writing code, I like to step away from the screen to train in taekwondo, play billiards, or play table tennis.",
  ],
}

export const aboutInstitutions = [
  {
    src: '/logos/rupp_logo.png',
    alt: 'Royal University of Phnom Penh',
    name: 'Royal University of Phnom Penh',
    link: 'https://www.rupp.edu.kh/',
    container: 'h-16 w-16 rounded-full',
  },
  {
    src: '/logos/kshrd_logo.png',
    alt: 'Korea Software HRD Center',
    name: 'Korea Software HRD Center',
    link: 'https://www.kshrd.com.kh/',
    container: 'h-16 w-16 rounded-full',
  },
  {
    src: '/logos/ajou_logo.png',
    alt: 'Ajou University',
    name: 'Ajou University',
    link: 'https://www.ajou.ac.kr/en/index.do',
    container: 'h-16 w-16 rounded-full bg-white/90', // transparent logo needs light bg
  },
]

// ---- Contact ----

export const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/saintrivers', display: 'github.com/saintrivers' },
  { label: 'Email', href: 'mailto:eam.dayan@gmail.com', display: 'eam.dayan@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dayan-eam-5249b93b1', display: 'linkedin.com/in/dayan-eam-5249b93b1' },
]

export const contactInstitutions = [
  {
    src: '/logos/rupp_logo.png',
    alt: 'Royal University of Phnom Penh',
    name: 'Royal University of Phnom Penh',
    degree: 'B.S. in Computer Science and Engineering',
    link: 'https://www.rupp.edu.kh/',
    container: 'h-12 w-12 rounded-full',
  },
  {
    src: '/logos/kshrd_logo.png',
    alt: 'Korea Software HRD Center',
    name: 'Korea Software HRD Center',
    degree: 'Blockchain Engineering and Microservice Architecture',
    link: 'https://www.kshrd.com.kh/',
    container: 'h-12 w-12 rounded-full',
  },
  {
    src: '/logos/ajou_logo.png',
    alt: 'Ajou University',
    name: 'Ajou University',
    degree: 'M.S. in Computer Engineering and Security',
    link: 'https://www.ajou.ac.kr/en/index.do',
    container: 'h-12 w-12 rounded-full bg-white', // transparent logo needs light bg
  },
]

// ---- Skills ----

export const skillGroups = [
  { category: 'Languages', skills: ['Java', 'Kotlin', 'Python', 'TypeScript'] },
  { category: 'Backend', skills: ['Spring Boot', 'OAuth2', 'PostgreSQL', 'Reactive Systems'] },
  { category: 'Systems & Messaging', skills: ['Microservices', 'Apache Kafka', 'Solace PubSub+'] },
  { category: 'Infrastructure', skills: ['Linux', 'Docker', 'API Gateway', 'Service Discovery'] },
  { category: 'Frontend', skills: ['React', 'Next.js', 'Angular'] },
  { category: 'ML / Data', skills: ['TensorFlow', 'scikit-learn'] },
]

// ---- Work ----

export type ProjectType = 'client' | 'teaching' | 'class'

export type Project = {
  name: string
  description: string
  tags: string[]
  href: string
  type: ProjectType
}

export const projects: Project[] = [
  {
    name: 'Product Showcase Homepage',
    description: 'Independently developed and deployed a showcase/catalogue homepage and admin dashboard for a medical aesthetics client in Pangyo, South Korea.',
    tags: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Docker Swarm'],
    href: 'https://www.iregenbogen.com',
    type: 'client',
  },
  {
    name: 'Kafka Full-Stack Template',
    description: 'Reference architecture for event-driven applications — Angular frontend, Spring Boot services, Kafka messaging, fully containerized with Docker.',
    tags: ['Angular', 'Spring Boot', 'Kafka', 'Docker'],
    href: 'https://github.com/saintrivers/kafka_messaging_app',
    type: 'teaching',
  },
  {
    name: 'REST API with JWT Auth',
    description: 'Full backend reference implementation with JWT authentication, PostgreSQL integration, and clean layered architecture for students to model and replicate.',
    tags: ['Kotlin', 'Spring Boot', 'JWT', 'Spring Data JPA', 'PostgreSQL'],
    href: 'https://github.com/saintrivers/kotlin_springboot_ams',
    type: 'teaching',
  },
  {
    name: 'Keycloak OAuth2 Deployment',
    description: 'Full-stack deployment template demonstrating OAuth2/OIDC security with Keycloak — a reproducible reference for engineers learning auth infrastructure.',
    tags: ['Keycloak', 'OAuth2', 'Spring Boot', 'Docker'],
    href: 'https://github.com/saintrivers/ultimate-keycloak-guide',
    type: 'teaching',
  },
  {
    name: 'KONG + Keycloak API Gateway',
    description: 'API gateway integration template using KONG and Keycloak — covers service routing, and centralized auth enforcement across services.',
    tags: ['KONG API Gateway', 'Keycloak', 'Spring Boot', 'Docker'],
    href: 'https://github.com/saintrivers/microservice-template',
    type: 'teaching',
  },
  {
    name: 'ML Recommendation System',
    description: 'Compared item-based, content-based, and neural-collaborative filtering movie recommendation systems.',
    tags: ['Python', 'Pandas', 'NumPy', 'TensorFlow', 'scikit-learn'],
    href: 'https://github.com/saintrivers/movie_recommendation',
    type: 'class',
  },
]
