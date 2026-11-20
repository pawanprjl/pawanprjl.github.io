import { whatIDo } from '../data'
import { Section, pad } from './Section'

export function WhatIDo() {
  return (
    <Section id="what-i-do" title="What I do" note="the short version">
      <div className="what-grid">
        {whatIDo.map((item, i) => (
          <div key={item.title}>
            <span className="num">{pad(i)}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
