import { useState } from 'react';
import { Phone, Mail, Globe, AtSign, MapPin, Copy, Check, RotateCw } from 'lucide-react';
import { profile, globalexceed, itguru, gaps } from '../data';
import { Reveal, SectionHead, DiamondMark, useCopy, useTilt } from './ui';

function Row({ icon: Icon, label, value, href, copyKey, copy, copied }) {
  return (
    <div className="c-row">
      <span className="c-icon">
        <Icon size={18} />
      </span>
      <span className="c-text">
        <span className="c-label">{label}</span>
        {href ? (
          <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="c-value">
            {value}
          </a>
        ) : (
          <span className="c-value">{value}</span>
        )}
      </span>
      <button className="c-copy" onClick={() => copy(value, copyKey)} aria-label={`Copy ${label}`}>
        {copied === copyKey ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
}

function FlipCard() {
  const [flipped, setFlipped] = useState(false);
  const tilt = useTilt(10);
  return (
    <div className="flip-scene">
      <div className="flip-tilt tilt" {...tilt}>
        <button
          className={`flip-card ${flipped ? 'is-flipped' : ''}`}
          onClick={() => setFlipped((f) => !f)}
          aria-label="Flip business card"
        >
          {/* FRONT */}
          <div className="card-face card-front">
            <span className="card-sheen" />
            <span className="card-chev" />
            <div className="card-top">
              <span className="card-mini">MEMBERSHIP</span>
              <span className="card-mini dim">CARD</span>
            </div>
            <DiamondMark size={64} className="card-mark" />
            <div className="card-name">CHARITH LIYANAARACHCHI</div>
            <div className="card-title">FOUNDER &amp; MANAGING DIRECTOR</div>
            <div className="card-rule">
              <i />
            </div>
            <div className="card-bottom">
              <div className="card-co">
                <b>Global Exceed Pvt Ltd</b>
                <span>Sri Lanka</span>
              </div>
              <div className="card-info">
                <span>{profile.phones[0]}</span>
                <span>{profile.email}</span>
                <span className="o">{profile.web}</span>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div className="card-face card-back">
            <span className="card-sheen" />
            <span className="card-chev" />
            <img src={globalexceed} alt="" className="card-back-logo" />
            <div className="card-word">
              <span className="o">G</span>LOBAL<span className="o">E</span>XCEED
            </div>
            <div className="card-tagline">Think Global, Exceed Beyond</div>
            <div className="card-rule">
              <i />
            </div>
            <div className="card-subs">
              <div>
                <span className="card-sub-plate">
                  <img src={itguru} alt="IT Guru Global" />
                </span>
                <span>itguruglobal.com</span>
              </div>
              <div>
                <span className="card-sub-plate">
                  <img src={gaps} alt="GAPS" />
                </span>
                <span>gapssi.com</span>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="flip-hint">
        <RotateCw size={14} /> Tap the card to flip
      </div>
    </div>
  );
}

export default function Contact() {
  const { copied, copy } = useCopy();
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHead index="05" kicker="Get in touch" title="Let's build" accent="what's next.">
          Feel free to call or email if you need any further information — I&rsquo;d be glad to talk about your next
          system, programme or transformation.
        </SectionHead>

        <div className="contact-grid">
          <Reveal className="contact-list">
            <Row icon={Phone} label="Phone" value={profile.phones[0]} href={`tel:${profile.phones[0].replace(/\s/g, '')}`} copyKey="p1" copy={copy} copied={copied} />
            <Row icon={Phone} label="Mobile" value={profile.phones[1]} href={`tel:${profile.phones[1].replace(/\s/g, '')}`} copyKey="p2" copy={copy} copied={copied} />
            <Row icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} copyKey="em" copy={copy} copied={copied} />
            <Row icon={Globe} label="Website" value={profile.web} href={`https://${profile.web}`} copyKey="web" copy={copy} copied={copied} />
            <Row icon={AtSign} label="Social" value={profile.social} copyKey="so" copy={copy} copied={copied} />
            <Row icon={MapPin} label="Office" value={profile.address} copyKey="ad" copy={copy} copied={copied} />
          </Reveal>

          <Reveal delay={0.15}>
            <FlipCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
