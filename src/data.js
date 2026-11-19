import globalexceed from './assets/globalexceed.png';
import itguru from './assets/itguru.png';
import gaps from './assets/gaps.png';
import crystalmartin from './assets/crystalmartin.png';
import hirdaramani from './assets/hirdaramani.png';
import hconnect from './assets/hconnect.png';
import fgl from './assets/fgl.png';
import hone from './assets/hone.png';
import hifashion from './assets/hifashion.png';

export const profile = {
  first: 'Charith',
  last: 'Liyanaarachchi',
  headline: 'Founder & Managing Director',
  company: 'Global Exceed Pvt Ltd',
  roles: [
    'Founder & Managing Director · Global Exceed Pvt Ltd',
    'Founder · IT Guru Global | GAPS',
    'Consultant · Business Process & Transformation',
  ],
  intro:
    'IT Business Solution Specialist and entrepreneur turning a decade of enterprise ERP know-how into ventures that educate, automate and transform.',
  phones: ['+94 71 574 5791', '+94 76 857 2112'],
  email: 'charith@globalexceed.com',
  web: 'www.globalexceed.com',
  social: '@itguruglobal',
  address: '299/7, Perera Road, Kiribathgoda, Sri Lanka',
};

export const stats = [
  { value: 10, suffix: '+', label: 'Years cross-industry' },
  { value: 3, suffix: '', label: 'Ventures founded' },
  { value: 6, suffix: '', label: 'Enterprise roles' },
  { value: 5, suffix: '', label: 'Credentials earned' },
];

export const about = {
  lead:
    'I am an IT Business Solution Specialist, Entrepreneur, and the Founder & Managing Director of Global Exceed Pvt Ltd and IT Guru Global.',
  body: [
    'With over 10 years of cross-industry experience, I have held pivotal roles across the apparel manufacturing, IT solutions, and HR sectors.',
    'Today I lead multiple ventures focused on tech education, custom software solutions, and digital innovation — actively developing systems for the HRM, Facility Management, Digital Privacy and Retail sectors.',
  ],
  expertise: [
    'Microsoft Dynamics 365',
    'Dynamics AX 2009 / 2012 R2',
    'Business Process Automation',
    'ERP Consulting',
    'HRIS',
    'Business Analysis',
    'Digital Transformation',
    'Project Management',
  ],
  building: ['HRM', 'Facility Management', 'Digital Privacy', 'Retail'],
};

export const ventures = [
  {
    name: 'Global Exceed',
    full: 'Global Exceed Pvt Ltd',
    role: 'Founder & Managing Director',
    logo: globalexceed,
    tag: 'Think Global, Exceed Beyond',
    blurb: 'The parent company — custom software solutions and digital innovation for growing businesses.',
    url: 'https://www.globalexceed.com',
    host: 'globalexceed.com',
  },
  {
    name: 'IT Guru Global',
    full: 'IT Guru Global',
    role: 'Founder',
    logo: itguru,
    tag: 'Tech education',
    blurb: 'Hands-on technology education that turns enterprise systems knowledge into real careers.',
    url: 'https://www.itguruglobal.com',
    host: 'itguruglobal.com',
  },
  {
    name: 'GAPS',
    full: 'Global Academy of Professional Studies',
    role: 'Founder',
    logo: gaps,
    tag: 'Professional studies',
    blurb: 'An academy for professional qualifications and the skills modern organisations need.',
    url: 'https://www.gapssi.com',
    host: 'gapssi.com',
  },
];

export const experience = [
  { role: 'Consultant — ERP', org: 'Crystal Martin International', sector: 'Apparel / Manufacturing', logos: [crystalmartin] },
  { role: 'Functional Consultant Specialist', org: 'Hconnect', sector: 'IT Solutions / ERP', logos: [hconnect] },
  { role: 'Manager — Business Process & IT (HRIS)', org: 'IMCS Group', sector: 'Human Resources', logos: [], mono: 'IMCS' },
  { role: 'Solution Consultant', org: 'Hirdaramani Group / FGL — Vietnam', sector: 'Apparel / Manufacturing', logos: [hirdaramani, fgl] },
  { role: 'Jr. / Software Engineer', org: 'H One — Sri Lanka', sector: 'IT Solutions / Apparel', logos: [hone] },
  { role: 'Technical & Sustainability Executive', org: 'HIF — Sri Lanka', sector: 'Apparel / Textile Printing', logos: [hifashion] },
];

export const marqueeLogos = [crystalmartin, hconnect, hirdaramani, fgl, hone, hifashion];

export const certifications = [
  { code: 'MB-300', title: 'Microsoft Dynamics 365', sub: 'Core Finance & Operations', issuer: 'Microsoft', accent: 'violet' },
  { code: 'MB-310', title: 'Microsoft Dynamics 365', sub: 'Finance Functional Consultant', issuer: 'Microsoft', accent: 'violet' },
  { code: 'CBAP', title: 'Certified Business Analysis Professional', sub: 'IIBA', issuer: 'IIBA', accent: 'amber' },
];

export const education = [
  { years: '2020 — 2026', title: 'Microsoft Certifications', place: 'MB-300 · MB-310' },
  { years: '2017 — 2018', title: 'IIBA — CBAP', place: 'International Institute of Business Analysis' },
  { years: '2010 — 2011', title: 'Project Management Diploma', place: 'Institute of Engineering' },
  { years: '2009 — 2012', title: 'Bachelor of Science (Special)', place: 'Sabaragamuwa University' },
];

export { globalexceed, itguru, gaps };
