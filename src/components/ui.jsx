import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

/* Fade-and-rise on scroll */
export function Reveal({ children, delay = 0, y = 28, className, as = 'div' }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </M>
  );
}

/* The diamond monogram — echoes the G-mark on the card */
export function DiamondMark({ size = 36, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="dm-v" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b39bff" />
          <stop offset="1" stopColor="#6a45e0" />
        </linearGradient>
      </defs>
      <path
        d="M32 12 L52 32 L32 52 L12 32 Z M32 22 L22 32 L32 42 L42 32 L37 32 L32 37 L27 32 L32 27 Z"
        fill="url(#dm-v)"
        fillRule="evenodd"
      />
      <rect x="28" y="2" width="8" height="8" transform="rotate(45 32 6)" fill="#ff8a1f" />
    </svg>
  );
}

export function SectionHead({ index, kicker, title, accent, children }) {
  return (
    <div className="section-head">
      <Reveal className="kicker">
        <span className="kicker-num">{index}</span>
        <span className="kicker-line" />
        <span>{kicker}</span>
      </Reveal>
      <Reveal as="h2" delay={0.08} className="section-title">
        {title} {accent && <em>{accent}</em>}
      </Reveal>
      {children && (
        <Reveal delay={0.16} className="section-sub">
          {children}
        </Reveal>
      )}
    </div>
  );
}

/* Animated number counter */
export function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);
  return (
    <span ref={ref}>
      {String(n).padStart(2, '0')}
      <span className="counter-suffix">{suffix}</span>
    </span>
  );
}

/* Mouse-driven 3D tilt with a moving sheen */
export function useTilt(max = 10) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--rx', `${(0.5 - py) * max}deg`);
    el.style.setProperty('--ry', `${(px - 0.5) * max}deg`);
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };
  return { ref, onMouseMove: onMove, onMouseLeave: onLeave };
}

/* Copy-to-clipboard with graceful fallback */
export function useCopy() {
  const [copied, setCopied] = useState(null);
  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  };
  return { copied, copy };
}
