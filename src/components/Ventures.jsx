import { ArrowUpRight } from 'lucide-react';
import { ventures } from '../data';
import { Reveal, SectionHead, useTilt } from './ui';

function VentureCard({ v, i }) {
  const tilt = useTilt(7);
  return (
    <Reveal delay={i * 0.1} className="venture-wrap">
      <a href={v.url} target="_blank" rel="noreferrer" className={`venture tilt ${i === 0 ? 'is-flagship' : ''}`} {...tilt}>
        <span className="venture-sheen" />
        <div className="venture-top">
          <span className="venture-num">0{i + 1}</span>
          <span className="venture-role">{v.role}</span>
        </div>
        <div className="venture-logo">
          <img src={v.logo} alt={v.full} />
        </div>
        <h3 className="venture-name">{v.full}</h3>
        <p className="venture-tag">{v.tag}</p>
        <p className="venture-blurb">{v.blurb}</p>
        <div className="venture-link">
          <span>{v.host}</span>
          <ArrowUpRight size={18} />
        </div>
      </a>
    </Reveal>
  );
}

export default function Ventures() {
  return (
    <section className="section ventures" id="ventures">
      <div className="container">
        <SectionHead index="02" kicker="Ventures" title="Three companies," accent="one vision.">
          Building across tech education, custom software and digital innovation — under one roof.
        </SectionHead>
        <div className="venture-grid">
          {ventures.map((v, i) => (
            <VentureCard key={v.name} v={v} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
