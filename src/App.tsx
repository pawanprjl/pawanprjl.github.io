import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { WhatIDo } from './components/WhatIDo'
import { links } from './data'

export default function App() {
  return (
    <div className="page">
      <div className="landing">
        <header className="header">
          <a className="wordmark" href="/">
            pawan.
          </a>
          <nav className="nav">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </nav>
        </header>
        <Hero />
      </div>

      <main>
        <div className="container">
          <WhatIDo />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>

      <footer className="footer">
        <span>Ujyalo Ventures</span>
        <span>Founder, Sanzaal Technology</span>
        <span>Kathmandu, Nepal</span>
      </footer>
    </div>
  )
}
