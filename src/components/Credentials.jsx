import { Award, GraduationCap } from 'lucide-react';
import { certifications, education } from '../data';
import { Reveal, SectionHead, useTilt } from './ui';

function CertBadge({ c, i }) {
  const tilt = useTilt(12);
  return (
    <Reveal delay={i * 0.1}>
      <div className={`cert tilt accent-${c.accent}`} {...tilt}>
        <span className="venture-sheen" />
        <div className="cert-gem">
          <Award size={22} />
        </div>
        <div className="cert-code">{c.code}</div>
        <div className="cert-title">{c.title}</div>
        <div className="cert-sub">{c.sub}</div>
        <div className="cert-issuer">{c.issuer}</div>
      </div>
    </Reveal>
  );
}

export default function Credentials() {
  return (
    <section className="section credentials" id="credentials">
      <div className="container">
        <SectionHead index="04" kicker="Education & certifications" title="Always" accent="learning." />

        <div className="cred-layout">
          <div className="cert-grid">
            {certifications.map((c, i) => (
              <CertBadge key={c.code} c={c} i={i} />
            ))}
          </div>

          <div className="edu">
            <Reveal className="edu-head">
              <GraduationCap size={20} /> Academic path
            </Reveal>
            <ol className="edu-line">
              {education.map((e, i) => (
                <Reveal as="li" key={e.title} delay={i * 0.08} className="edu-item">
                  <span className="edu-node" />
                  <span className="edu-years">{e.years}</span>
                  <span className="edu-title">{e.title}</span>
                  <span className="edu-place">{e.place}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
