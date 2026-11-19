import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Ventures from './components/Ventures';
import Experience from './components/Experience';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import { DiamondMark } from './components/ui';
import { profile } from './data';

export default function App() {
  // Soft spotlight that follows the cursor
  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty('--cx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cy', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <>
      <div className="spotlight" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <DiamondMark size={26} />
            <span>
              {profile.first} {profile.last}
            </span>
          </div>
          <div className="footer-tag">Think Global, Exceed Beyond</div>
          <div className="footer-copy">© {new Date().getFullYear()} Global Exceed Pvt Ltd</div>
        </div>
      </footer>
    </>
  );
}
