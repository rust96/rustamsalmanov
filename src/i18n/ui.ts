import type { Lang } from './routes';

export interface UI {
  meta: { title: string; description: string; ogAlt: string };
  skip: string;
  nav: { services: string; why: string; process: string; about: string; contact: string; menu: string; langLabel: string };
  hero: { role: string; h1: string; sub: string; cta: string; secondary: string; facts: string[] };
  services: {
    h2: string; intro: string; vat: string; from: string;
    items: { title: string; price: string; unit: string; desc: string; points: string[] }[];
  };
  why: { h2: string; items: { title: string; text: string }[] };
  process: { h2: string; intro: string; steps: { title: string; text: string }[] };
  about: { h2: string; paragraphs: string[]; langs: string; langsList: string };
  contact: { h2: string; intro: string; whatsapp: string; whatsappText: string; phone: string };
  footer: { legal: string; privacy: string; cookies: string; rights: string; tagline: string };
  legalBack: string;
}

export const ui: Record<Lang, UI> = {
  es: {
    meta: {
      title: 'Desarrollo web Barcelona para autónomos | Rustam Salmanov',
      description:
        'Desarrollo web en Barcelona: diseño web para autónomos y pequeños negocios, webs rápidas, tiendas online y mantenimiento web mensual. Presupuesto cerrado. Español, catalán e inglés.',
      ogAlt: 'Rustam Salmanov — Desarrollo web en Barcelona',
    },
    skip: 'Saltar al contenido',
    nav: { services: 'Servicios', why: 'Por qué yo', process: 'Cómo trabajo', about: 'Sobre mí', contact: 'Contacto', menu: 'Menú', langLabel: 'Idioma' },
    hero: {
      role: 'Desarrollador web senior · Freelance (trabajador autónomo)',
      h1: 'Webs rápidas y profesionales para autónomos y pequeños negocios en Barcelona',
      sub: 'Desarrollo web, diseño y mantenimiento con un único interlocutor, precio cerrado y una velocidad de carga que ayuda a que te encuentren y te contacten.',
      cta: 'Pide presupuesto',
      secondary: 'Ver servicios',
      facts: ['Desarrollo web desde 2018', 'Autónomo en Barcelona desde mayo de 2024', 'Español · Català · English'],
    },
    services: {
      h2: 'Servicios de desarrollo web, mantenimiento y consultoría',
      intro: 'Precios orientativos. Cada proyecto se cierra con un presupuesto fijo después de una primera reunión.',
      vat: 'IVA no incluido',
      from: 'Desde',
      items: [
        {
          title: 'Desarrollo web a medida',
          price: '1.500 €',
          unit: '',
          desc: 'Tu web corporativa, tu tienda online o tu aplicación web, diseñada para ti.',
          points: ['Web corporativa, tienda online o aplicación web', 'Adaptada a móvil', 'SEO básico', 'Reservas o pagos online'],
        },
        {
          title: 'Mantenimiento web y soporte',
          price: '90 €',
          unit: '/mes',
          desc: 'Tu web siempre al día, segura y con alguien a quien acudir.',
          points: ['Hosting', 'Copias de seguridad', 'Actualizaciones de seguridad', 'Pequeños cambios de contenido'],
        },
        {
          title: 'Consultoría técnica',
          price: '60 €',
          unit: '/hora',
          desc: 'Una mirada senior sobre tu código, tu rendimiento o tu equipo.',
          points: ['Auditorías de código y rendimiento', 'Arquitectura frontend (React, TypeScript)', 'Apoyo a equipos de desarrollo'],
        },
      ],
    },
    why: {
      h2: 'Por qué trabajar conmigo',
      items: [
        { title: 'Nivel senior a tarifas de freelance', text: 'Trabajas directamente con un desarrollador senior, sin capas intermedias ni costes de agencia.' },
        { title: 'Carga rápida como estándar', text: 'La velocidad no es un extra: forma parte de cada proyecto desde el primer día.' },
        { title: 'Un único interlocutor', text: 'Del diseño al mantenimiento hablas siempre con la misma persona.' },
        { title: 'Precio fijo por proyecto', text: 'Sabes lo que vas a pagar antes de empezar. Sin sorpresas.' },
        { title: 'En español, catalán e inglés', text: 'Te atiendo en el idioma que prefieras, y tu web puede ser multilingüe.' },
      ],
    },
    process: {
      h2: 'Cómo trabajo',
      intro: 'Un proceso claro en cinco pasos, de la primera conversación al mantenimiento.',
      steps: [
        { title: 'Reunión inicial y presupuesto cerrado', text: 'Hablamos de tu negocio y de lo que necesitas. Recibes un presupuesto con precio fijo.' },
        { title: 'Propuesta de diseño', text: 'Te presento el diseño de tu web para que lo revises y lo ajustemos antes de programar.' },
        { title: 'Desarrollo y pruebas (2–6 semanas)', text: 'Construyo la web y la pruebo en distintos dispositivos. El plazo depende del alcance del proyecto.' },
        { title: 'Lanzamiento y formación', text: 'Publico la web y te enseño a gestionarla por tu cuenta.' },
        { title: 'Mantenimiento mensual', text: 'Si lo deseas, me ocupo del hosting, las copias, las actualizaciones y los cambios pequeños.' },
      ],
    },
    about: {
      h2: 'Sobre mí',
      paragraphs: [
        'Soy Rustam Salmanov, desarrollador web senior afincado en Barcelona. Trabajo en desarrollo web desde 2018 y, desde mayo de 2024, ejerzo como trabajador autónomo (IAE 763).',
        'Me dedico a crear webs rápidas, claras y fáciles de mantener para autónomos y pequeños negocios, y a ayudar a equipos técnicos con consultoría de frontend y rendimiento.',
      ],
      langs: 'Idiomas de servicio',
      langsList: 'Español, catalán e inglés',
    },
    contact: {
      h2: 'Pide presupuesto',
      intro: 'Cuéntame por WhatsApp qué necesitas y te respondo con una propuesta.',
      whatsapp: 'Escribir por WhatsApp',
      whatsappText: 'Hola Rustam, me gustaría pedir presupuesto para una web.',
      phone: 'Número de WhatsApp',
    },
    footer: {
      legal: 'Aviso legal',
      privacy: 'Política de privacidad',
      cookies: 'Política de cookies',
      rights: 'Todos los derechos reservados.',
      tagline: 'Desarrollo web en Barcelona',
    },
    legalBack: '← Volver al inicio',
  },

  ca: {
    meta: {
      title: 'Desenvolupament web Barcelona per a autònoms | Rustam Salmanov',
      description:
        'Desenvolupament web a Barcelona: disseny web per a autònoms i petits negocis, webs ràpides, botigues en línia i manteniment web mensual. Pressupost tancat. Castellà, català i anglès.',
      ogAlt: 'Rustam Salmanov — Desenvolupament web a Barcelona',
    },
    skip: 'Saltar al contingut',
    nav: { services: 'Serveis', why: 'Per què jo', process: 'Com treballo', about: 'Sobre mi', contact: 'Contacte', menu: 'Menú', langLabel: 'Idioma' },
    hero: {
      role: 'Desenvolupador web sènior · Freelance (treballador autònom)',
      h1: 'Webs ràpides i professionals per a autònoms i petits negocis a Barcelona',
      sub: 'Desenvolupament web, disseny i manteniment amb un únic interlocutor, preu tancat i una velocitat de càrrega que ajuda que et trobin i et contactin.',
      cta: 'Demana pressupost',
      secondary: 'Veure serveis',
      facts: ['Desenvolupament web des del 2018', 'Autònom a Barcelona des del maig de 2024', 'Español · Català · English'],
    },
    services: {
      h2: 'Serveis de desenvolupament web, manteniment i consultoria',
      intro: 'Preus orientatius. Cada projecte es tanca amb un pressupost fix després d’una primera reunió.',
      vat: 'IVA no inclòs',
      from: 'Des de',
      items: [
        {
          title: 'Desenvolupament web a mida',
          price: '1.500 €',
          unit: '',
          desc: 'La teva web corporativa, la teva botiga en línia o la teva aplicació web, dissenyada per a tu.',
          points: ['Web corporativa, botiga en línia o aplicació web', 'Adaptada a mòbil', 'SEO bàsic', 'Reserves o pagaments en línia'],
        },
        {
          title: 'Manteniment web i suport',
          price: '90 €',
          unit: '/mes',
          desc: 'La teva web sempre al dia, segura i amb algú a qui recórrer.',
          points: ['Hosting', 'Còpies de seguretat', 'Actualitzacions de seguretat', 'Petits canvis de contingut'],
        },
        {
          title: 'Consultoria tècnica',
          price: '60 €',
          unit: '/hora',
          desc: 'Una mirada sènior sobre el teu codi, el teu rendiment o el teu equip.',
          points: ['Auditories de codi i rendiment', 'Arquitectura frontend (React, TypeScript)', 'Suport a equips de desenvolupament'],
        },
      ],
    },
    why: {
      h2: 'Per què treballar amb mi',
      items: [
        { title: 'Nivell sènior a tarifes de freelance', text: 'Treballes directament amb un desenvolupador sènior, sense capes intermèdies ni costos d’agència.' },
        { title: 'Càrrega ràpida com a estàndard', text: 'La velocitat no és un extra: forma part de cada projecte des del primer dia.' },
        { title: 'Un únic interlocutor', text: 'Del disseny al manteniment parles sempre amb la mateixa persona.' },
        { title: 'Preu fix per projecte', text: 'Saps què pagaràs abans de començar. Sense sorpreses.' },
        { title: 'En castellà, català i anglès', text: 'T’atenc en l’idioma que prefereixis, i la teva web pot ser multilingüe.' },
      ],
    },
    process: {
      h2: 'Com treballo',
      intro: 'Un procés clar en cinc passos, de la primera conversa al manteniment.',
      steps: [
        { title: 'Reunió inicial i pressupost tancat', text: 'Parlem del teu negoci i del que necessites. Rebs un pressupost amb preu fix.' },
        { title: 'Proposta de disseny', text: 'Et presento el disseny de la teva web perquè el revisis i l’ajustem abans de programar.' },
        { title: 'Desenvolupament i proves (2–6 setmanes)', text: 'Construeixo la web i la provo en diferents dispositius. El termini depèn de l’abast del projecte.' },
        { title: 'Llançament i formació', text: 'Publico la web i t’ensenyo a gestionar-la pel teu compte.' },
        { title: 'Manteniment mensual', text: 'Si ho vols, m’encarrego de l’hosting, les còpies, les actualitzacions i els canvis petits.' },
      ],
    },
    about: {
      h2: 'Sobre mi',
      paragraphs: [
        'Sóc en Rustam Salmanov, desenvolupador web sènior establert a Barcelona. Treballo en desenvolupament web des del 2018 i, des del maig de 2024, exerceixo com a treballador autònom (IAE 763).',
        'Em dedico a crear webs ràpides, clares i fàcils de mantenir per a autònoms i petits negocis, i a ajudar equips tècnics amb consultoria de frontend i rendiment.',
      ],
      langs: 'Idiomes de servei',
      langsList: 'Castellà, català i anglès',
    },
    contact: {
      h2: 'Demana pressupost',
      intro: 'Explica’m per WhatsApp què necessites i et respondré amb una proposta.',
      whatsapp: 'Escriure per WhatsApp',
      whatsappText: 'Hola Rustam, m’agradaria demanar pressupost per a una web.',
      phone: 'Número de WhatsApp',
    },
    footer: {
      legal: 'Avís legal',
      privacy: 'Política de privacitat',
      cookies: 'Política de cookies',
      rights: 'Tots els drets reservats.',
      tagline: 'Desenvolupament web a Barcelona',
    },
    legalBack: '← Tornar a l’inici',
  },

  en: {
    meta: {
      title: 'Web Development in Barcelona for Freelancers & Small Businesses | Rustam Salmanov',
      description:
        'Web development in Barcelona: fast websites, online stores and monthly website maintenance for freelancers and small businesses. Fixed-price quotes. Spanish, Catalan and English.',
      ogAlt: 'Rustam Salmanov — Web development in Barcelona',
    },
    skip: 'Skip to content',
    nav: { services: 'Services', why: 'Why me', process: 'How I work', about: 'About', contact: 'Contact', menu: 'Menu', langLabel: 'Language' },
    hero: {
      role: 'Senior web developer · Freelancer (self-employed)',
      h1: 'Fast, professional websites for freelancers and small businesses in Barcelona',
      sub: 'Web development, design and maintenance with a single point of contact, a fixed price and the kind of loading speed that helps people find and contact you.',
      cta: 'Request a quote',
      secondary: 'See services',
      facts: ['Web development since 2018', 'Self-employed in Barcelona since May 2024', 'Español · Català · English'],
    },
    services: {
      h2: 'Web development, maintenance and consulting services',
      intro: 'Indicative prices. Every project is closed with a fixed quote after an initial meeting.',
      vat: 'excl. VAT',
      from: 'From',
      items: [
        {
          title: 'Custom web development',
          price: '€1,500',
          unit: '',
          desc: 'Your corporate website, online store or web app, designed around you.',
          points: ['Corporate website, online store or web app', 'Mobile-ready', 'Basic SEO', 'Online bookings or payments'],
        },
        {
          title: 'Maintenance and support',
          price: '€90',
          unit: '/month',
          desc: 'Your site kept up to date, secure, and with someone to turn to.',
          points: ['Hosting', 'Backups', 'Security updates', 'Small content changes'],
        },
        {
          title: 'Technical consulting',
          price: '€60',
          unit: '/hour',
          desc: 'A senior pair of eyes on your code, your performance or your team.',
          points: ['Code and performance audits', 'Frontend architecture (React, TypeScript)', 'Support for development teams'],
        },
      ],
    },
    why: {
      h2: 'Why work with me',
      items: [
        { title: 'Senior expertise at freelancer rates', text: 'You work directly with a senior developer, with no middle layers and no agency overhead.' },
        { title: 'Fast loading as standard', text: 'Speed is not an add-on: it is part of every project from day one.' },
        { title: 'One point of contact', text: 'From design to maintenance, you always talk to the same person.' },
        { title: 'Fixed price per project', text: 'You know what you will pay before we start. No surprises.' },
        { title: 'Spanish, Catalan and English', text: 'I work in the language you prefer, and your website can be multilingual.' },
      ],
    },
    process: {
      h2: 'How I work',
      intro: 'A clear five-step process, from the first conversation to ongoing maintenance.',
      steps: [
        { title: 'Initial meeting and fixed quote', text: 'We talk about your business and what you need. You receive a quote with a fixed price.' },
        { title: 'Design proposal', text: 'I present the design of your website so you can review it and we can adjust it before any code is written.' },
        { title: 'Development and testing (2–6 weeks)', text: 'I build the site and test it on different devices. The timeline depends on the scope of the project.' },
        { title: 'Launch and client training', text: 'I put the site live and show you how to manage it yourself.' },
        { title: 'Monthly maintenance', text: 'If you want, I take care of hosting, backups, updates and small changes.' },
      ],
    },
    about: {
      h2: 'About me',
      paragraphs: [
        'I’m Rustam Salmanov, a senior web developer based in Barcelona. I have worked in web development since 2018 and, since May 2024, I have been registered as a self-employed professional (IAE 763).',
        'I build fast, clear and easy-to-maintain websites for freelancers and small businesses, and I help technical teams with frontend and performance consulting.',
      ],
      langs: 'Service languages',
      langsList: 'Spanish, Catalan and English',
    },
    contact: {
      h2: 'Request a quote',
      intro: 'Tell me what you need on WhatsApp and I will reply with a proposal.',
      whatsapp: 'Message on WhatsApp',
      whatsappText: 'Hi Rustam, I would like to request a quote for a website.',
      phone: 'WhatsApp number',
    },
    footer: {
      legal: 'Legal notice',
      privacy: 'Privacy policy',
      cookies: 'Cookie policy',
      rights: 'All rights reserved.',
      tagline: 'Web development in Barcelona',
    },
    legalBack: '← Back to home',
  },
};
