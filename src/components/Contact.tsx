import { links } from '../data'

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <p className="note">got an idea?</p>
      <h2 id="contact-title">Let’s build something.</h2>
      <p className="contact-text">
        Whether it's a system that needs a rethink, a team that needs a lead,
        or a product that needs building, I'm happy to talk.
      </p>
      <a className="contact-email" href={`mailto:${links.email}`}>
        {links.email}
      </a>
      <div className="contact-actions">
        <a
          className="btn btn-outline-light"
          href={links.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="btn btn-outline-light"
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
