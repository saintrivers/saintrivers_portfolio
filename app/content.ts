// ---- Navigation ----

export const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Tech Stack' },
  { id: 'work', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = typeof sections[number]['id']

// ---- Hero ----

export const hero = {
  name: 'Dayan Eam',
  title: 'Full-Stack Software Developer',
  bio: 'Full-stack engineer with hands-on experience in event-driven systems, reactive programming, and scalable deployments — capable of delivering web applications end-to-end, from frontend UI to backend services and production infrastructure.',
  stack: 'Kotlin • Spring Boot • Kafka • PostgreSQL • WebFlux • Docker',
  phone: '+82-010-2439-8541',
  location: 'Suwon, Gyeonggi, Republic of Korea',
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
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=iYF2_SwAAAAJ', display: 'scholar.google.com/citations?user=iYF2_SwAAAAJ' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dayan-eam-5249b93b1', display: 'linkedin.com/in/dayan-eam-5249b93b1' },
]

export const contactInstitutions = [
  {
    src: '/logos/rupp_logo.png',
    alt: 'Royal University of Phnom Penh',
    name: 'Royal University of Phnom Penh',
    degree: 'B.S. in Computer Science and Engineering',
    period: 'Nov 2018 - Sep 2022',
    link: 'https://www.rupp.edu.kh/',
    container: 'h-12 w-12 rounded-full',
  },
  {
    src: '/logos/kshrd_logo.png',
    alt: 'Korea Software HRD Center',
    name: 'Korea Software HRD Center',
    degree: 'Short Courses on Web Development and Microservices',
    period: 'Apr 2023 - Feb 2024',
    link: 'https://www.kshrd.com.kh/',
    container: 'h-12 w-12 rounded-full',
  },
  {
    src: '/logos/ajou_logo.png',
    alt: 'Ajou University',
    name: 'Ajou University',
    degree: 'M.S. in Computer Engineering and Security (In Progress)',
    period: 'Sep 2024 - Aug 2026',
    link: 'https://www.ajou.ac.kr/en/index.do',
    container: 'h-12 w-12 rounded-full bg-white', // transparent logo needs light bg
  },
]

// ---- Work Experience ----

export type WorkExperience = {
  title: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export const workExperience: WorkExperience[] = [
  {
    title: 'Graduate Researcher',
    company: 'AiCONS Lab, Ajou University',
    location: 'Suwon, Gyeonggi, Republic of Korea',
    period: 'Sep 2024 - Aug 2026',
    bullets: [
      'Published paper at IEEE SmartNets2025 on affect detection fairness using biometric data.',
      'Researched IR-UWB radar for in-cabin vital sign monitoring with AI and signal processing.',
    ],
  },
  {
    title: 'Freelance Full-Stack Engineer',
    company: 'REGENBOGEN Co., Ltd.',
    location: 'Seongnam, Gyeonggi, Republic of Korea',
    period: 'Apr 2025 – Dec 2025',
    bullets: [
      'Sole engineer — self-defined requirements directly with the client, owned all technical decisions, and delivered end-to-end with no PM involvement.',
      'Owned end-to-end delivery: Spring Boot API, Next.js frontend, PostgreSQL, deployed via Docker Swarm on DigitalOcean.',
    ],
  },
  {
    title: 'IT Instructor',
    company: 'Korea Software HRD Center',
    location: 'Phnom Penh, Cambodia',
    period: 'Feb 2022 – Aug 2023',
    bullets: [
      'Delivered backend training in Java, Spring Boot, Spring WebFlux, and r2dbc to trainees.',
      'Maintained Linux servers, networking equipment, and on-premise lab infrastructure.',
    ],
  },
  {
    title: 'Tech Support Intern',
    company: 'Cambo Technology (ISP) Co., Ltd.',
    location: 'Phnom Penh, Cambodia',
    period: 'Jan 2021 – Mar 2021',
    bullets: [
      'Assisted in deployment and maintenance of Linux servers and MikroTik networking infrastructure.',
    ],
  },
]

// ---- Skills ----

export const skillGroups = [
  { category: 'Languages', skills: ['Kotlin', 'Java', 'Python', 'TypeScript', 'JavaScript'] },
  { category: 'Backend', skills: ['Spring Boot', 'WebFlux', 'Kafka', 'Solace PubSub+', 'OAuth2', 'PostgreSQL'] },
  { category: 'Infrastructure', skills: ['Docker', 'GCP', 'Linux', 'Microservices'] },
  { category: 'Frontend', skills: ['React', 'Next.js', 'Angular'] },
  { category: 'AI & Data', skills: ['TensorFlow'] },
]

// ---- Research ----

export type PublicationStatus = 'published' | 'in-preparation'

export type Publication = {
  title: string
  lab: string
  labLink: string
  venue?: string
  doi?: string
  status: PublicationStatus
}

export const publications: Publication[] = [
  {
    title: 'A Deep Learning Approach for Affect Detection: Does Biometric Data Improve Fairness?',
    lab: 'AiCONS Lab, Ajou University',
    labLink: 'https://sites.google.com/view/iconslab/home',
    venue: 'IEEE SmartNets2025 — Istanbul, Turkey',
    doi: '10.1109/SmartNets65254.2025.11106887',
    status: 'published',
  },
  // {
  //   title: 'Geometry-Guided Multipath IR-UWB Sensing for In-Cabin Localization and Respiration Monitoring',
  //   lab: 'AiCONS Lab, Ajou University',
  //   labLink: 'https://sites.google.com/view/iconslab/home',
  //   status: 'in-preparation',
  // },
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
    name: 'Reactive Programming Pipeline',
    description: 'A server side application for demonstrating the use of a fully reactive tech stack with PostgreSQL integration.',
    tags: ['Kotlin', 'Spring WebFlux', 'r2dbc', 'PostgreSQL'],
    href: 'https://github.com/saintrivers/reactive-class-demo',
    type: 'teaching',
  },
  {
    name: 'ML Recommendation System',
    description: 'Compared item-based, content-based, and neural-collaborative filtering movie recommendation systems.',
    tags: ['Python', 'Pandas', 'NumPy', 'TensorFlow', 'scikit-learn'],
    href: 'https://github.com/saintrivers/movie_recommendation',
    type: 'class',
  },
  {
    name: 'Kafka Full-Stack Template',
    description: 'Designed and built an event-driven full-stack reference architecture from scratch. Used as a teaching reference at Korea Software HRD Center.',
    tags: ['Angular', 'Spring Boot', 'Kafka', 'Docker', 'Event-Driven Architecture'],
    href: 'https://github.com/saintrivers/kafka_messaging_app',
    type: 'teaching',
  },
  {
    name: 'KONG + Keycloak API Gateway',
    description: 'API gateway integration template using KONG and Keycloak — covers service routing, and centralized auth enforcement across services.',
    tags: ['KONG API Gateway', 'Keycloak', 'OAuth2', 'Spring Boot', 'Docker'],
    href: 'https://github.com/saintrivers/microservice-template',
    type: 'teaching',
  },
  {
    name: 'REST API with JWT Auth',
    description: 'Full backend reference implementation with JWT authentication, PostgreSQL integration, and clean layered architecture for students to model and replicate.',
    tags: ['Kotlin', 'Spring Boot', 'JWT', 'Spring Data JPA', 'PostgreSQL'],
    href: 'https://github.com/saintrivers/kotlin_springboot_ams',
    type: 'teaching',
  },
]
