import { Briefcase, Cpu, Users, Sparkles } from 'lucide-react';
import portrait from '../assets/portrait.webp';
import { about } from '../data';
import { Reveal, SectionHead } from './ui';

const sectors = [
  { icon: Briefcase, label: 'Apparel Manufacturing' },
  { icon: Cpu, label: 'IT Solutions' },
  { icon: Users, label: 'Human Resources' },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHead index="01" kicker="About me" title="Where enterprise systems" accent="meet entrepreneurship." />

        <div className="about-grid">
          <Reveal className="about-portrait">
            <div className="about-frame">
              <img src={portrait} alt="Charith smiling, arms folded" />
            </div>
            <div className="about-years">
              <span className="about-years-num">10+</span>
              <span className="about-years-txt">years of cross-industry experience</span>
            </div>
          </Reveal>

          <div className="about-copy">
            <Reveal as="p" className="about-lead">
              {about.lead}
            </Reveal>
            {about.body.map((p, i) => (
              <Reveal as="p" key={i} delay={0.1 + i * 0.08} className="about-body">
                {p}
              </Reveal>
            ))}

            <Reveal delay={0.25} className="sector-row">
              {sectors.map(({ icon: Icon, label }) => (
                <div className="sector" key={label}>
                  <Icon size={18} />
                  <span>{label}</span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.3} className="building">
              <div className="building-head">
                <Sparkles size={16} /> Currently building systems for
              </div>
              <div className="building-tags">
                {about.building.map((b) => (
                  <span key={b}>{b}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="expertise">
          <div className="expertise-track">
            {[...about.expertise, ...about.expertise].map((e, i) => (
              <span key={i} className="expertise-item">
                {e}
                <i className="expertise-gem" />
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
