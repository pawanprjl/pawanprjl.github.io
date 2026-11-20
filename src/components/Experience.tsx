import { education, experience } from '../data'
import { Section } from './Section'

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      note="building things since 2017"
    >
      {experience.map((job) => (
        <article className="row" key={job.company}>
          <div className="row-meta">
            <span>{job.period}</span>
            {job.badge && <span className="badge">{job.badge}</span>}
          </div>
          <div>
            <h3 className="company">{job.company}</h3>
            <p className="role">{job.role}</p>
            <ul className="points">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
      <div className="row row-edu">
        <div className="row-meta">Education</div>
        <p>
          <strong>{education.degree}</strong> · {education.school} ·{' '}
          {education.period}
        </p>
      </div>
    </Section>
  )
}
