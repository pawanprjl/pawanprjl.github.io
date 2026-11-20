export const links = {
  github: 'https://github.com/pawanprjl',
  linkedin: 'https://linkedin.com/in/pawanprjl/',
  email: 'pawanparajuli8@gmail.com',
}

export type Item = { title: string; body: string }

export type Job = {
  company: string
  role: string
  period: string
  badge?: string
  points: string[]
}

export type Project = {
  name: string
  description: string
  tags: string[]
  url: string
}

export const whatIDo: Item[] = [
  {
    title: 'Full stack, start to finish',
    body: 'I enjoy owning a feature all the way, from the database and API to the screen people actually use, on web and mobile.',
  },
  {
    title: 'Cloud, kept lean',
    body: "I like infrastructure you can read and rebuild, AWS with Terraform and Docker, that runs fast and doesn't surprise anyone when the bill arrives.",
  },
  {
    title: 'Leading a team of 12',
    body: 'The part I enjoy most is watching people grow, through good planning, honest code reviews and a bit of mentoring along the way.',
  },
]

export const experience: Job[] = [
  {
    company: 'Ujyalo Ventures',
    role: 'Senior Software Engineer, Team Lead',
    period: 'Nov 2022 — Present',
    badge: 'Now',
    points: [
      'Lead a team of 12 through planning, retros, mentoring and code review.',
      'Delivered Lancozen and Elevations Inc. on Spring Boot and Next.js.',
      "Helped modernise BIW's Struts apps to Spring Boot, then Go microservices on AWS EKS.",
      'Introduced Terraform, moved CI/CD to GitHub Actions, and built tooling that cut deployment time by 40%.',
    ],
  },
  {
    company: 'Sanzaal Technology',
    role: 'Founder, Team Lead',
    period: 'Jan 2025 — Present',
    badge: 'Now · part-time',
    points: [
      'Started and run it alongside Ujyalo.',
      'Led FlyNepal end-to-end with a team of 8: a Spring Boot modular monolith with Next.js web and Flutter mobile apps.',
    ],
  },
  {
    company: 'ScaleBuild AI',
    role: 'Full Stack Engineer, Team Lead',
    period: 'Jan 2022 — Nov 2022',
    points: [
      "Re-architected the company's RAG chatbot SaaS for multi-tenancy.",
      'Led Sangria, a project management platform, with a team of 5: Spring Boot microservices on AWS with SOC-ready security controls.',
    ],
  },
  {
    company: 'Sireto Technologies',
    role: 'Intern → Full Stack Developer',
    period: 'Dec 2017 — Dec 2021',
    points: [
      'Led 5 interns on Sajilo Wi-Fi, a delivery that earned the whole team full-time offers.',
      'Sole engineer on Fluidensity, an NFT platform on Spring Boot, React and Ethereum.',
    ],
  },
]

export const education = {
  degree: 'B.E. Electronics & Communication Engineering',
  school: 'Institute of Engineering, Thapathali Campus',
  period: '2017 — 2021',
}

export const projects: Project[] = [
  {
    name: 'nginx-proxy',
    description:
      "Watches running containers and generates Nginx reverse-proxy configs from their metadata, with optional Let's Encrypt SSL.",
    tags: ['Docker', 'Nginx', "Let's Encrypt"],
    url: 'https://github.com/pawanprjl/nginx-proxy',
  },
  {
    name: 'gixy',
    description:
      'A CLI for juggling multiple GitHub accounts. Map a folder to a profile and every repo in it gets the right name, email and SSH key, so no more work-email commits on personal projects.',
    tags: ['Go', 'CLI', 'Git & SSH'],
    url: 'https://github.com/pawanprjl/gixy',
  },
  {
    name: 'jsfuzz',
    description:
      'A Go tool that runs JavaScript in a headless browser to actively scan web apps for prototype pollution.',
    tags: ['Go', 'Headless browser', 'Security'],
    url: 'https://github.com/pawanprjl/jsfuzz',
  },
]
