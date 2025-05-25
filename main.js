// =========== LANGUAGE SWITCHER DATA ===========
const translations = {
  en: {
    'nav.about': 'About Me',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.blogs': 'Blogs',
    'nav.contact': 'Contact',
    'hero.greeting': "Hi, I'm Youssef!",
    'hero.role1': 'Cybersecurity Specialist',
    'hero.role2': 'Full-stack Web & App Developer',
    'hero.intro':
      `I design, secure, and build digital experiences<br>
      that are robust, modern, and visually appealing.<br>
      <span style="color:var(--color-accent-2);font-weight:600;">My passion is creating solutions<br> that are both safe <em>and</em> stunning.</span>`,
    'hero.cta': "See My Work",
    'about.title': "About Me",
    'about.intro': "Cybersecurity Specialist & Full-stack Web/App Developer",
    'about.details': `My mission: <span style="color:var(--color-accent);font-weight:600;">building digital experiences that are both robust and beautiful</span>. 
          I'm devoted to blending <strong>security</strong>, <strong>performance</strong>, and <strong>aesthetics</strong>—from advanced penetration testing, to seamless UI, to scalable back-end architectures.`,
    'about.bullet1': "Defensive Security & Ethical Hacking",
    'about.bullet2': "Modern Web, Mobile, & Cloud Apps",
    'about.bullet3': "System Hardening & Secure DevOps",
    'about.bullet4': "Passionate about user experience",
    'about.details2': "Off the clock, I love challenging puzzles and exploring the latest tech trends.",
    'skills.title': "Skills",
    'projects.title': "Projects",
    'blogs.title': "Upcoming Blogs",
    'blogs.upcoming': "Coming soon…",
    'contact.title': "Contact",
    'contact.name': "Name",
    'contact.email': "Email",
    'contact.message': "Message",
    'contact.submit': "Send",
  },
  fr: {
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.blogs': 'Blogs',
    'nav.contact': 'Contact',
    'hero.greeting': "Salut, je suis Youssef !",
    'hero.role1': 'Spécialiste en cybersécurité',
    'hero.role2': 'Développeur Web & App Full-stack',
    'hero.intro':
      `Je conçois, sécurise et crée des expériences numériques<br>
      qui sont robustes, modernes et esthétiques.<br>
      <span style="color:var(--color-accent-2);font-weight:600;">Ma passion est de créer des solutions<br> à la fois sûres <em>et</em> superbes.</span>`,
    'hero.cta': "Voir mes réalisations",
    'about.title': "À propos",
    'about.intro': "Spécialiste en cybersécurité & Développeur Web/App Full-stack",
    'about.details': `Ma mission : <span style="color:var(--color-accent);font-weight:600;">créer des expériences numériques robustes et élégantes</span>. 
          Je m’engage à allier <strong>sécurité</strong>, <strong>performance</strong> et <strong>esthétique</strong> — des tests d’intrusion avancés à des interfaces UI soignées, en passant par des architectures back-end évolutives.`,
    'about.bullet1': "Sécurité défensive & Hacking éthique",
    'about.bullet2': "Applications Web, mobiles & cloud modernes",
    'about.bullet3': "Hardening système & DevOps sécurisé",
    'about.bullet4': "Passionné par l'expérience utilisateur",
    'about.details2': "En dehors du travail, j’aime les puzzles difficiles et découvrir les dernières tendances tech.",
    'skills.title': "Compétences",
    'projects.title': "Projets",
    'blogs.title': "Blogs à venir",
    'blogs.upcoming': "Bientôt disponible…",
    'contact.title': "Contact",
    'contact.name': "Nom",
    'contact.email': "Email",
    'contact.message': "Message",
    'contact.submit': "Envoyer",
  },
  es: {
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.blogs': 'Blogs',
    'nav.contact': 'Contacto',
    'hero.greeting': "¡Hola, soy Youssef!",
    'hero.role1': 'Especialista en ciberseguridad',
    'hero.role2': 'Desarrollador Web & App Full-stack',
    'hero.intro':
      `Diseño, aseguro y creo experiencias digitales<br>
      que son robustas, modernas y atractivas.<br>
      <span style="color:var(--color-accent-2);font-weight:600;">Mi pasión es crear soluciones<br> que sean seguras <em>y</em> impresionantes.</span>`,
    'hero.cta': "Ver mi trabajo",
    'about.title': "Sobre mí",
    'about.intro': "Especialista en ciberseguridad & Desarrollador Web/App Full-stack",
    'about.details': `Mi misión: <span style="color:var(--color-accent);font-weight:600;">construir experiencias digitales sólidas y bellas</span>.
          Me dedico a mezclar <strong>seguridad</strong>, <strong>rendimiento</strong> y <strong>estética</strong>: desde pruebas de intrusión avanzadas, UIs fluidas, hasta arquitecturas backend escalables.`,
    'about.bullet1': "Seguridad defensiva & Hackeo ético",
    'about.bullet2': "Aplicaciones web, móviles y cloud modernas",
    'about.bullet3': "Hardening de sistemas & DevOps seguro",
    'about.bullet4': "Apasionado por la experiencia de usuario",
    'about.details2': "Fuera del trabajo, me encantan los puzzles y explorar nuevas tendencias tecnológicas.",
    'skills.title': "Habilidades",
    'projects.title': "Proyectos",
    'blogs.title': "Próximos Blogs",
    'blogs.upcoming': "Próximamente…",
    'contact.title': "Contacto",
    'contact.name': "Nombre",
    'contact.email': "Email",
    'contact.message': "Mensaje",
    'contact.submit': "Enviar",
  },
};

// Set default language
let currentLang = 'en';

// Utility: i18n update for elements with data-i18n
function updateI18n(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    let value = translations[lang][key] || translations['en'][key] || '';
    if(el.tagName.toLowerCase() === "input" || el.tagName.toLowerCase() === "textarea") {
      el.setAttribute('placeholder', value);
    } else if(el.tagName.toLowerCase() === "span" && /<br>/.test(value)) {
      el.innerHTML = value;
    } else if(el.classList.contains('about-details') || el.classList.contains('about-intro')) {
      el.innerHTML = value;
    } else {
      el.textContent = value.replace(/<[^>]+>/g, ""); // for simple text
      if (/<[^>]+>/.test(value)) el.innerHTML = value; // allows HTML for hero-intro etc
    }
  });
}

// Language switcher
window.addEventListener('DOMContentLoaded', () => {
  const langSwitcher = document.getElementById('langSwitcher');
  if(langSwitcher) {
    langSwitcher.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        langSwitcher.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        updateI18n(this.dataset.lang);
      });
    });
  }
  updateI18n(currentLang);
});

// Header Title Animation + BG
window.addEventListener('DOMContentLoaded', () => {
  // Header gradient background reveal
  const headerBg = document.querySelector('.header-bg');
  if (headerBg) {
    headerBg.classList.add('header-bg-visible');
  }
  // Title letter grow-in effect
  const siteTitle = document.querySelector('.site-title');
  if (siteTitle) {
    const originalHTML = siteTitle.innerHTML;
    // Split letters for animation except the accent element
    let processed = '';
    for (let node of siteTitle.childNodes) {
      if (node.nodeType === 3) {
        // Text node: animate only alphabetic chars
        const letters = node.textContent.split('');
        letters.forEach((c, i) => {
          if (c.match(/[a-zA-Z]/)) {
            processed += `<span class="title-letter" style="animation-delay:${0.19 + i * 0.045}s">${c}</span>`;
          } else if (c === ' ') {
            processed += `<span class="title-space">${c}</span>`;
          } else {
            processed += c;
          }
        });
      } else {
        processed += node.outerHTML || '';
      }
    }
    siteTitle.innerHTML = processed;
    setTimeout(() => {
      siteTitle.classList.add('animate-title-in');
    }, 160);
  }
  // Animated underline for nav
  const nav = document.querySelector('nav');
  const navLinks = nav.querySelectorAll('ul li a');
  const navUnderline = nav.querySelector('.nav-underline');
  function moveUnderline(e) {
    const link = e.target;
    if (!link || !navUnderline) return;
    const rect = link.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    navUnderline.style.width = rect.width + 'px';
    navUnderline.style.left = (rect.left - navRect.left) + 'px';
    navUnderline.style.opacity = 1;
  }
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', moveUnderline);
    link.addEventListener('focus', moveUnderline);
    link.addEventListener('mouseleave', () => {
      navUnderline.style.opacity = 0;
    });
    link.addEventListener('blur', () => {
      navUnderline.style.opacity = 0;
    });
  });
  // On page load, fade in underline under first item for effect
  setTimeout(() => {
    if (navLinks.length) {
      const evt = { target: navLinks[0] };
      moveUnderline(evt);
      setTimeout(() => { navUnderline.style.opacity = 0; }, 900);
    }
  }, 520);
  const bgSquares = document.querySelector('.bg-squares');
  if(bgSquares) {
    bgSquares.style.opacity = '0';
    setTimeout(() => {
      bgSquares.style.opacity = '0.21';
    }, 140);
  }
});

// List of portfolio projects (customized)
const projects = [
  {
    title: "Portfolio Interactive",
    image: "Portfolio.png",
    description: "An interactive portfolio to showcase my skills and professional journey as a cybersecurity expert and developer.",
    description_fr: "Un portfolio interactif pour présenter mes compétences et mon parcours en cybersécurité et développement.",
    description_es: "Un portafolio interactivo para mostrar mis habilidades y trayectoria como experto en ciberseguridad y desarrollador.",
    link: "https://github.com/You-ssefX/Portfolio.git"
  },
  {
    title: "Mobile App for Association",
    image: "MobilApp.jpeg", 
    description: "Developed a modern mobile application for a non-profit association, featuring member management, secure messaging, and event scheduling.",
    description_fr: "Développement d'une application mobile moderne pour une association, avec gestion des membres, messagerie sécurisée et agenda d'événements.",
    description_es: "Desarrollé una aplicación móvil moderna para una asociación, con gestión de miembros, mensajes seguros y programación de eventos.",
    link: "#" 
  }
];

// Dynamically inject projects into #projectsGrid with i18n support
const projectsGrid = document.getElementById('projectsGrid');
function renderProjects(lang = 'en') {
  projectsGrid.innerHTML = "";
  projects.forEach((project, idx) => {
    const card = document.createElement('div');
    card.className = 'project-card';

    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title + " preview";

    const title = document.createElement('h3');
    title.textContent = project.title;

    const desc = document.createElement('p');
    let descr = project.description;
    if(lang === 'fr' && project.description_fr) descr = project.description_fr;
    if(lang === 'es' && project.description_es) descr = project.description_es;
    desc.textContent = descr;

    const link = document.createElement('a');
    link.href = project.link;
    link.target = "_blank";
    link.rel = "noopener";
    if (project.link && project.link !== "#") {
      link.textContent = {
        en: "View on GitHub",
        fr: "Voir sur GitHub",
        es: "Ver en GitHub"
      }[lang] || "View on GitHub";
    } else {
      link.textContent = {
        en: "Details by request",
        fr: "Détails sur demande",
        es: "Detalles bajo petición"
      }[lang] || "Details by request";
    }

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);

    projectsGrid.appendChild(card);

    // Add entrance animation after insertion (for transition)
    setTimeout(() => {
      card.classList.add('visible');
    }, 220 + idx * 160);
  });
}
// Initial render
renderProjects(currentLang);

// Update projects if language changes
function observeLangForProjects() {
  let memLang = currentLang;
  setInterval(() => {
    if (memLang !== currentLang) {
      renderProjects(currentLang);
      memLang = currentLang;
    }
  }, 400);
}
observeLangForProjects();

// Simple client-side fake contact form handler
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', e => {
  e.preventDefault();
  formMsg.textContent = currentLang === 'fr'
    ? "Merci pour votre message ! Je reviendrai vers vous bientôt."
    : currentLang === 'es'
    ? "¡Gracias por tu mensaje! Me pondré en contacto pronto."
    : "Thank you for reaching out! I'll get back to you soon.";
  setTimeout(() => {
    formMsg.textContent = '';
    form.reset();
  }, 3200);
});

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate hero text in on page load
window.addEventListener('DOMContentLoaded', () => {
  const heroText = document.querySelector('#hero .hero-text');
  if(heroText) {
    setTimeout(() => {
      heroText.classList.add('animate-in');
    }, 140);
    // Subtle glowing effect retained
    heroText.animate([
      { boxShadow: "0 0 0px #3fa3fe44" },
      { boxShadow: "0 2px 38px #3fa3fe44" },
      { boxShadow: "0 0 0px #3fa3fe44" },
    ], {
      duration: 2800,
      iterations: 2
    });
  }
});

// ============== SECTION TRANSITION ON SCROLL ==============

// Utility to check if element is in viewport
function isInViewport(el, offset = 0) {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return (
    rect.top + offset < window.innerHeight &&
    rect.bottom - offset > 0
  );
}

// Animate sections in on scroll
const revealSections = document.querySelectorAll('section, footer');

function revealOnScroll() {
  revealSections.forEach((section, idx) => {
    if (section.classList.contains('section-visible')) return;
    if (isInViewport(section, Math.min(window.innerHeight * 0.18, 90))) {
      section.classList.add('section-visible');
    }
  });
}

// Initial state: hide sections (except hero, which is already in via .animate-in)
revealSections.forEach(section => {
  if (!section.id || section.id !== 'hero') {
    section.classList.add('section-hidden');
  }
});

// Run on page load and scroll
window.addEventListener('DOMContentLoaded', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// ===== ABOUT SECTION CARD ANIMATION =====
(function() {
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  const aboutCard = aboutSection.querySelector('.about-card');
  function animateAboutCard() {
    if (!aboutCard) return;
    if (
      aboutSection.classList.contains('section-visible') &&
      !aboutCard.classList.contains('about-card-in')
    ) {
      // Stagger entrance for a touch of drama
      setTimeout(() => {
        aboutCard.classList.add('about-card-in');
      }, 140);
    }
  }
  // Listen for section becoming visible
  window.addEventListener('scroll', animateAboutCard, { passive: true });
  window.addEventListener('DOMContentLoaded', animateAboutCard);
  // In case section already revealed
  setTimeout(animateAboutCard, 400);
})();

// ============== ENHANCE PROJECT CARD SCROLL REVEAL ==============
/* (already handled by existing .visible class logic on project cards) */