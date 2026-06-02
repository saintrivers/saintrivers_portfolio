import PrintButton from '../PrintButton'

export const metadata = { title: 'CV (한국어) — Dayan Eam' }

const H = 'mb-2 text-[10px] font-bold uppercase tracking-widest text-blue-900 border-b border-blue-200 pb-0.5'

export default function CVKoPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans">
      <div className="mx-auto max-w-4xl px-8 py-10 print:p-0 print:max-w-none">

        {/* Toolbar */}
        <div className="print:hidden mb-6 flex items-center justify-between">
          <a href="/" className="text-sm text-zinc-400 hover:text-zinc-700 transition-colors">← 뒤로</a>
          <div className="flex items-center gap-4">
            <a href="/cv" className="text-sm text-zinc-400 hover:text-zinc-700 transition-colors">English</a>
            <PrintButton />
          </div>
        </div>

        {/* Header */}
        <header className="mb-5 pb-3 border-b-2 border-blue-900">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-[28px] font-bold text-blue-900 leading-none tracking-tight">Dayan Eam</h1>
              <p className="text-sm text-zinc-500 mt-1">소프트웨어 엔지니어</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-zinc-500">
            <span><span className="font-semibold text-zinc-600">위치:</span> 경기도 수원시, 대한민국</span>
            <span><span className="font-semibold text-zinc-600">전화:</span> +82 010 2439 8541</span>
            <a href="https://portfolio.saintrivers.tech" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800">
              <span className="font-semibold text-zinc-600">포트폴리오:</span> portfolio.saintrivers.tech
            </a>
            <a href="https://github.com/saintrivers" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800">
              <span className="font-semibold text-zinc-600">GitHub:</span> github.com/saintrivers
            </a>
            <a href="mailto:eam.dayan@gmail.com" className="hover:text-zinc-800">
              <span className="font-semibold text-zinc-600">이메일:</span> eam.dayan@gmail.com
            </a>
            <a href="https://linkedin.com/in/dayan-eam-5249b93b1" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800">
              <span className="font-semibold text-zinc-600">LinkedIn:</span> linkedin.com/in/dayan-eam-5249b93b1
            </a>
          </div>
        </header>

        {/* Two-column body: 2/5 left sidebar, 3/5 right main */}
        <div className="grid grid-cols-5 gap-x-8 print:gap-x-6">

          {/* LEFT SIDEBAR */}
          <aside className="col-span-2 space-y-5">

            <section>
              <h2 className={H}>기술 스택</h2>
              <div className="space-y-2">
                {[
                  { category: '프로그래밍 언어', skills: ['Kotlin', 'Java', 'Python', 'TypeScript'] },
                  { category: 'Backend', skills: ['Spring Boot', 'WebFlux', 'r2dbc', 'Kafka', 'OAuth2', 'PostgreSQL'] },
                  { category: '인프라', skills: ['Docker', 'GCP', 'DigitalOcean', 'Linux', 'API Gateway'] },
                  { category: 'Frontend', skills: ['React', 'Next.js', 'Angular'] },
                  { category: 'AI & 데이터', skills: ['TensorFlow', 'Claude Code', 'ChatGPT', 'Gemini'] },
                ].map(({ category, skills }) => (
                  <div key={category} className="text-[11px]">
                    <span className="font-semibold text-zinc-700">{category}: </span>
                    <span className="text-zinc-500">{skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={H}>학력</h2>
              <div className="space-y-3">
                {[
                  {
                    name: 'Royal University of Phnom Penh',
                    link: 'https://www.rupp.edu.kh/',
                    degree: '컴퓨터 공학 학사',
                    period: '2018년 11월 – 2022년 9월',
                  },
                  {
                    name: 'Korea Software HRD Center',
                    link: 'https://www.kshrd.com.kh/',
                    degree: 'Blockchain 공학 및 Microservice 아키텍처',
                    period: '2023년 4월 – 2024년 2월',
                  },
                  {
                    name: 'Ajou University',
                    link: 'https://www.ajou.ac.kr/en/index.do',
                    degree: '컴퓨터공학및보안 석사 (재학 중)',
                    period: '2024년 9월 – 현재',
                  },
                ].map(({ name, link, degree, period }) => (
                  <div key={name}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-zinc-800 hover:underline leading-snug block"
                    >
                      {name}
                    </a>
                    <p className="text-[11px] text-zinc-500 leading-snug">{degree}</p>
                    <p className="text-[10px] text-zinc-400">{period}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={H}>연구</h2>
              <div className="space-y-3">
                {[
                  {
                    title: 'A Deep Learning Approach for Affect Detection: Does Biometric Data Improve Fairness?',
                    lab: 'AiCONS Lab, Ajou University',
                    labLink: 'https://sites.google.com/view/iconslab/home',
                    venue: 'IEEE SmartNets2025 — Istanbul, Turkey',
                    doi: '10.1109/SmartNets65254.2025.11106887',
                    status: 'published' as const,
                  },
                  {
                    title: 'Geometry-Guided Multipath IR-UWB Sensing for In-Cabin Localization and Respiration Monitoring',
                    lab: 'AiCONS Lab, Ajou University',
                    labLink: 'https://sites.google.com/view/iconslab/home',
                    status: 'in-preparation' as const,
                  },
                ].map((pub) => (
                  <div key={pub.title}>
                    <p className="text-[11px] font-semibold text-zinc-800 leading-snug">{pub.title}</p>
                    <p className="text-[11px] text-zinc-500">
                      <a href={pub.labLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{pub.lab}</a>
                      {pub.venue && <span> — {pub.venue}</span>}
                    </p>
                    {pub.doi && <p className="text-[10px] text-zinc-400">DOI: {pub.doi}</p>}
                    <span className={`text-[10px] font-medium ${pub.status === 'published' ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {pub.status === 'published' ? '게재 완료' : '작성 중'}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={H}>언어</h2>
              <div className="space-y-1 text-[11px] text-zinc-500">
                <p>크메르어 — 모국어</p>
                <p>한국어 — TOPIK 3급</p>
                <p>영어 — Cambridge C1</p>
              </div>
            </section>

            <section>
              <h2 className={H}>관심사</h2>
              <p className="text-[11px] text-zinc-500">태권도 · 당구 · 탁구</p>
            </section>

          </aside>

          {/* RIGHT MAIN */}
          <main className="col-span-3 space-y-5">

            <p className="text-[12px] leading-relaxed text-zinc-600">
              캄보디아에서 왔으며, 현재 아주대학교 대학원에서 컴퓨터공학을 공부하고 있습니다. 주로 Kotlin과 Java로 Backend 개발을 하며, Python으로 머신러닝도 합니다. 교육 기관에서 강의한 경험이 있어 기술적인 내용을 잘 설명할 수 있습니다. 혼자서도 처음부터 끝까지 개발할 수 있으며, Backend 개발을 중심으로 일할 수 있는 팀에서 함께 하고 싶습니다.
            </p>

            <section>
              <h2 className={H}>경력</h2>
              <div className="space-y-4">
                {[
                  {
                    title: '대학원 연구원',
                    company: 'AiCONS Lab, Ajou University',
                    location: '경기도 수원시 영통구 대한민국',
                    period: '2024년 9월 - 현재',
                    bullets: [
                      'Published paper at IEEE SmartNets2025 on affect detection fairness using biometric data.',
                      'Researched IR-UWB radar for in-cabin vital sign monitoring with AI and signal processing.',
                    ],
                  },
                  {
                    title: 'Freelance Full-Stack 엔지니어',
                    company: 'REGENBOGEN Co., Ltd.',
                    location: '경기도 성남시 대한민국',
                    period: '2025년 4월 - 2025년 12월',
                    bullets: [
                      '혼자서 클라이언트와 직접 소통하고, 모든 기술 결정을 스스로 했습니다. PM 없이 개발을 완료했습니다.',
                      'Spring Boot API, Next.js 프론트엔드, PostgreSQL로 구성된 전체 시스템을 DigitalOcean 위에 Docker Swarm으로 배포했습니다.',
                    ],
                  },
                  {
                    title: 'IT 강사',
                    company: 'Korea Software HRD Center',
                    location: '프놈펜, 캄보디아',
                    period: '2022년 2월 - 2023년 8월',
                    bullets: [
                      'Java, Spring Boot, Spring WebFlux, r2dbc 과목을 교육생들에게 강의했습니다.',
                      'Linux 서버, 네트워크 장비 및 온프레미스 실습 인프라를 관리했습니다.',
                    ],
                  },
                  {
                    title: '기술 지원 인턴',
                    company: 'Cambo Technology (ISP) Co., Ltd.',
                    location: '프놈펜, 캄보디아',
                    period: '2021년 1월 - 2021년 3월',
                    bullets: [
                      'Linux 서버와 MikroTik 네트워크 설치 및 관리를 도왔습니다.',
                    ],
                  },
                ].map((job) => (
                  <div key={job.title + job.company}>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-[12px] font-bold text-zinc-900">{job.title}</span>
                      <span className="text-[10px] text-zinc-400 shrink-0">{job.period}</span>
                    </div>
                    <p className="text-[11px] text-zinc-500">{job.company} · {job.location}</p>
                    <ul className="mt-1 space-y-0.5 pl-3">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="text-[11px] text-zinc-600 leading-relaxed list-disc list-outside">{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={H}>주요 프로젝트</h2>
              <div className="space-y-3">
                {[
                  {
                    name: 'Kafka Full-Stack Template',
                    href: 'https://github.com/saintrivers/kafka_messaging_app',
                    description: 'Designed and built an event-driven full-stack reference architecture from scratch. Used as a teaching reference at Korea Software HRD Center.',
                    tags: ['Angular', 'Spring Boot', 'Kafka', 'Docker', 'Event-Driven Architecture'],
                  },
                  {
                    name: 'Reactive Programming Pipeline',
                    href: 'https://github.com/saintrivers/reactive-class-demo',
                    description: 'A server side application for demonstrating the use of a fully reactive tech stack with PostgreSQL integration.',
                    tags: ['Kotlin', 'Spring WebFlux', 'r2dbc', 'PostgreSQL'],
                  },
                  {
                    name: 'KONG + Keycloak API Gateway',
                    href: 'https://github.com/saintrivers/microservice-template',
                    description: 'API gateway integration template using KONG and Keycloak — covers service routing, and centralized auth enforcement across services.',
                    tags: ['KONG API Gateway', 'Keycloak', 'OAuth2', 'Spring Boot', 'Docker'],
                  },
                ].map((project) => (
                  <div key={project.name}>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] font-semibold text-zinc-800 hover:underline"
                    >
                      {project.name}
                    </a>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">{project.description}</p>
                    <p className="text-[10px] text-zinc-400 mt-0.5">{project.tags.join(' · ')}</p>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  )
}
