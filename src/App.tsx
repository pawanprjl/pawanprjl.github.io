const links = {
  github: 'https://github.com/pawanprjl',
  linkedin: '#', // TODO: LinkedIn profile URL
  contact: '#', // TODO: contact link
  work: '#', // TODO: work/portfolio link
}

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <a className="wordmark" href="/">
          pawan.
        </a>
        <nav className="nav">
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
      </header>

      <main className="hero">
        <div className="title-wrap">
          <p className="tagline">
            In a world full of AI agents,{' '}
            <mark>I am thinking on my own !</mark>
          </p>
          <h1 className="name">Pawan Parajuli</h1>
        </div>
        <p className="intro">
          Technical Lead who designs reliable backend and cloud systems, and
          helps teams turn good ideas into products that hold up.
        </p>
        <div className="actions">
          <a className="btn btn-primary" href={links.contact}>
            Get in touch
          </a>
          <a className="btn btn-outline" href={links.work}>
            See my work
          </a>
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
