import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data';
import { Reveal, SectionHead } from './ui';

const sectorColor = (s) =>
  s.startsWith('Apparel') ? 'amber' : s.startsWith('Human') ? 'rose' : 'violet';

export default function Experience() {
  const [active, setActive] = useState(0);
  const cur = experience[active];

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionHead index="03" kicker="Career track record" title="A decade across" accent="three industries.">
          Over 10 years in IT systems — specialising in Microsoft D365, Dynamics AX 2009 / 2012 R2 and business
          process automation.
        </SectionHead>

        <div className="exp-layout">
          <ol className="exp-list">
            {experience.map((e, i) => (
              <Reveal as="li" key={e.org} delay={i * 0.05}>
                <button
                  className={`exp-row ${i === active ? 'is-active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                >
                  <span className="exp-idx">{String(i + 1).padStart(2, '0')}</span>
                  <span className="exp-main">
                    <span className="exp-role">{e.role}</span>
                    <span className="exp-org">{e.org}</span>
                  </span>
                  <span className={`exp-sector c-${sectorColor(e.sector)}`}>{e.sector}</span>
                </button>
              </Reveal>
            ))}
          </ol>

          <div className="exp-panel-wrap">
            <div className="exp-panel">
              <div className="exp-panel-glow" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="exp-panel-inner"
                  initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="exp-panel-num">{String(active + 1).padStart(2, '0')}</div>
                  <div className="exp-panel-logos">
                    {cur.logos.length ? (
                      cur.logos.map((l, i) => <img key={i} src={l} alt="" />)
                    ) : (
                      <span className="exp-mono">{cur.mono}</span>
                    )}
                  </div>
                  <div className={`exp-panel-sector c-${sectorColor(cur.sector)}`}>{cur.sector}</div>
                  <h3 className="exp-panel-role">{cur.role}</h3>
                  <p className="exp-panel-org">{cur.org}</p>
                </motion.div>
              </AnimatePresence>
              <div className="exp-dots">
                {experience.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Role ${i + 1}`}
                    className={i === active ? 'on' : ''}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
