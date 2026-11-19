import { Phone, Mail, Globe, AtSign, MapPin, Copy, Check } from 'lucide-react';
import { profile } from '../data';
import { Reveal, SectionHead, useCopy } from './ui';

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
        </div>
      </div>
    </section>
  );
}
