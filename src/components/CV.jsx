import { useEffect } from 'react';
import { Download, X, Phone, Mail, Globe, MapPin } from 'lucide-react';
import portrait from '../assets/portrait-full.webp';
import { profile, about, ventures, experience, certifications, education } from '../data';

function CVDocument() {
  return (
    <article className="cv-page" id="cv">
      <header className="cv-head">
        <div className="cv-banner">
          <span>Curriculum Vitae</span>
        </div>
        <div className="cv-identity">
          <img src={portrait} alt={`${profile.first} ${profile.last}`} />
          <h1>
            {profile.first} {profile.last}
          </h1>
          <p className="cv-title">IT Business Solution Specialist &amp; Entrepreneur</p>
          <p className="cv-company">{profile.headline} · {profile.company}</p>
        </div>
        <ul className="cv-contact">
          <li><Mail size={12} /> {profile.email}</li>
          <li><Phone size={12} /> {profile.phones.join(' · ')}</li>
          <li><Globe size={12} /> {profile.web}</li>
          <li><MapPin size={12} /> {profile.address}</li>
        </ul>
      </header>

      <section className="cv-summary cv-section">
        <h2>Profile</h2>
        <p>{about.lead}</p>
        {about.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </section>

      <div className="cv-content">
        <aside>
          <section className="cv-section">
            <h2>Core Expertise</h2>
            <ul className="cv-skills">
              {about.expertise.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
          <section className="cv-section">
            <h2>Education</h2>
            {education.map((item) => (
              <div className="cv-item" key={item.title}>
                <strong>{item.title}</strong>
                <p className="cv-detail">{item.place}</p>
                <p className="cv-detail">{item.years}</p>
              </div>
            ))}
          </section>
          <section className="cv-section">
            <h2>Certifications</h2>
            {certifications.map((item) => (
              <div className="cv-item" key={item.code}>
                <strong>{item.code}</strong>
                <p className="cv-detail">{item.title} — {item.sub}</p>
              </div>
            ))}
          </section>
        </aside>
        <div>
          <section className="cv-section">
            <h2>Professional Experience</h2>
            {experience.map((item) => (
              <div className="cv-item" key={item.role + item.org}>
                <strong>{item.role}</strong>
                <p className="cv-detail cv-employer">{item.org}</p>
                <p className="cv-detail">{item.sector}</p>
              </div>
            ))}
          </section>
          <section className="cv-section">
            <h2>Ventures &amp; Leadership</h2>
            {ventures.map((venture) => (
              <div className="cv-item" key={venture.name}>
                <strong>{venture.role}</strong>
                <p className="cv-detail cv-employer">{venture.full}</p>
                <p className="cv-detail">{venture.blurb}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </article>
  );
}

export default function CVModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.body.classList.add('cv-open');
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('cv-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const download = () => {
    const prev = document.title;
    document.title = `${profile.first}_${profile.last}_CV`;
    window.print();
    document.title = prev;
  };

  return (
    <div className="cv-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Curriculum Vitae">
      <div className="cv-toolbar" onClick={(e) => e.stopPropagation()}>
        <span>Curriculum Vitae preview</span>
        <div>
          <button className="btn btn-primary" onClick={download}>
            <Download size={16} /> Download PDF
          </button>
          <button className="cv-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>
      </div>
      <div className="cv-scroll" onClick={(e) => e.stopPropagation()}>
        <CVDocument />
      </div>
    </div>
  );
}
