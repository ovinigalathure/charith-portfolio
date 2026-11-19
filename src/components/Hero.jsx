import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, MapPin } from 'lucide-react';
import portrait from '../assets/portrait-full.webp';
import { profile, stats, marqueeLogos } from '../data';
import { Counter, useTilt } from './ui';

const rise = (d) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: d, ease: [0.2, 0.7, 0.2, 1] },
});

export default function Hero() {
  const tilt = useTilt(8);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="top">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-chevrons" aria-hidden="true">
        <span /> <span /> <span />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.div className="eyebrow" {...rise(0.1)}>
            <span className="pulse-dot" />
            {profile.headline} · {profile.company}
          </motion.div>

          <h1 className="hero-name">
            <motion.span className="hero-first" {...rise(0.2)}>
              {profile.first}
            </motion.span>
            <motion.span className="hero-last" {...rise(0.32)}>
              {profile.last}
            </motion.span>
          </h1>

          <motion.p className="hero-intro" {...rise(0.45)}>
            {profile.intro}
          </motion.p>

          <motion.ul className="hero-roles" {...rise(0.55)}>
            {profile.roles.map((r) => {
              const [title, org] = r.split(' · ');
              return (
                <li key={r}>
                  <span className="role-title">{title}</span>
                  <span className="role-org">{org}</span>
                </li>
              );
            })}
          </motion.ul>

          <motion.div className="hero-actions" {...rise(0.65)}>
            <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
              Start a conversation <ArrowUpRight size={18} />
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo('ventures')}>
              Explore ventures <ArrowDownRight size={18} />
            </button>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <div className="portrait-stage tilt" {...tilt}>
            <div className="portrait-diamond" />
            <div className="portrait-diamond outline" />
            <div className="portrait-orbit" />
            <span className="portrait-gem" />
            <img src={portrait} alt="Charith Liyanaarachchi" className="portrait-img" />
            <div className="portrait-badge badge-a">
              <strong>D365</strong>
              <span>ERP Specialist</span>
            </div>
            <div className="portrait-badge badge-b">
              <MapPin size={14} />
              <span>Sri Lanka</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container">
        <motion.div className="stats" {...rise(0.8)}>
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="marquee" aria-label="Organisations worked with">
        <div className="marquee-label">Experience across</div>
        <div className="marquee-track">
          {[...marqueeLogos, ...marqueeLogos, ...marqueeLogos].map((l, i) => (
            <img key={i} src={l} alt="" className="marquee-logo" />
          ))}
        </div>
      </div>
    </section>
  );
}
