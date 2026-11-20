import { projects } from '../data'
import { Section, pad } from './Section'

export function Projects() {
  return (
    <Section id="projects" title="Projects" note="more on the way">
      <div className="project-grid">
        {projects.map((p, i) => (
          <article className="card" key={p.name}>
            <span className="num">{pad(i)}</span>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <a
              className="card-link"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              Source on GitHub →
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}
