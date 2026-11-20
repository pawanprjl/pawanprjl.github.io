import type { ReactNode } from 'react'

type Props = {
  id: string
  title: string
  note: string
  children: ReactNode
}

export function Section({ id, title, note, children }: Props) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section-head">
        <h2 id={`${id}-title`}>{title}</h2>
        <p className="note">{note}</p>
      </div>
      {children}
    </section>
  )
}

export const pad = (n: number) => String(n + 1).padStart(2, '0')
