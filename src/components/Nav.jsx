import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { DiamondMark } from './ui';

const links = [
  ['about', 'About'],
  ['ventures', 'Ventures'],
  ['experience', 'Experience'],
  ['credentials', 'Credentials'],
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    document.querySelectorAll('section[id]').forEach((s) => obs.observe(s));
    return () => {
      window.removeEventListener('scroll', onScroll);
      obs.disconnect();
    };
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#top" className="nav-brand" onClick={go('top')}>
          <DiamondMark size={30} />
          <span>
            CHARITH<b>.</b>
          </span>
        </a>
        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={go(id)} className={active === id ? 'active' : ''}>
              {label}
            </a>
          ))}
          <a href="#contact" onClick={go('contact')} className="nav-cta">
            Let&rsquo;s talk
          </a>
        </nav>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>
    </>
  );
}
