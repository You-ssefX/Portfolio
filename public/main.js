// main.js - This script handles all client-side interactions and dynamic content updates for the portfolio website.

// =========================================================================
//                           LANGUAGE SWITCHER DATA
// =========================================================================

// 'translations' object: Stores all translatable text strings for the website.
// Each key (e.g., 'en', 'fr', 'es') represents a language.
// Under each language, keys like 'nav.about' map to the translated text.
const translations = {
  en: { // English translations
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
  fr: { // French translations
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
  es: { // Spanish translations
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

// 'currentLang': Keeps track of the currently active language, defaults to English.
let currentLang = 'en';

// 'updateI18n' function: Core utility for translating page content.
// It iterates through all elements having a 'data-i18n' attribute and updates their text content
// based on the 'translations' object for the given 'lang'.
function updateI18n(lang) {
  currentLang = lang; // Update the global current language
  document.documentElement.lang = lang; // Set the HTML lang attribute for better accessibility and SEO
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n'); // Get the translation key from the element's attribute
    // Get the translated value; fallback to English if translation is missing, then to empty string
    let value = translations[lang][key] || translations['en'][key] || '';

    // Handle different element types and content types
    if(el.tagName.toLowerCase() === "input" || el.tagName.toLowerCase() === "textarea") {
      // For input and textarea, set the 'placeholder' attribute
      el.setAttribute('placeholder', value);
    } else if(el.tagName.toLowerCase() === "span" && /<br>/.test(value)) {
      // For span elements that contain <br> tags (like hero.intro), set innerHTML to preserve HTML
      el.innerHTML = value;
    } else if(el.classList.contains('about-details') || el.classList.contains('about-intro')) {
      // For specific about section elements that might contain HTML (like strong tags), set innerHTML
      el.innerHTML = value;
    } else {
      // For most other elements, set textContent (strips HTML)
      el.textContent = value.replace(/<[^>]+>/g, "");
      // However, if the value originally contained HTML (e.g., strong, em tags), use innerHTML to render it
      if (/<[^>]+>/.test(value)) el.innerHTML = value;
    }
  });
}

// Language switcher initialization: Runs when the DOM is fully loaded.
window.addEventListener('DOMContentLoaded', () => {
  const langSwitcher = document.getElementById('langSwitcher'); // Get the language switcher container
  if(langSwitcher) { // Check if the language switcher exists on the page
    langSwitcher.querySelectorAll('.lang-btn').forEach(btn => { // Loop through all language buttons
      btn.addEventListener('click', function() { // Add click listener to each button
        // Remove 'active' class from all language buttons
        langSwitcher.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        // Add 'active' class to the clicked button
        this.classList.add('active');
        // Update the content to the selected language
        updateI18n(this.dataset.lang);
      });
    });
  }
  // Initially update content to the default language (or saved preference)
  updateI18n(currentLang);
});

// =========================================================================
//                           HEADER TITLE ANIMATION + BACKGROUND EFFECTS
// =========================================================================

// Runs animations and effects on the header when the DOM is fully loaded.
window.addEventListener('DOMContentLoaded', () => {
  // Header gradient background reveal: Makes the background visible after a slight delay.
  const headerBg = document.querySelector('.header-bg');
  if (headerBg) {
    headerBg.classList.add('header-bg-visible'); // CSS transition handles the reveal effect
  }

  // Title letter grow-in effect: Animates individual letters of the site title.
  const siteTitle = document.querySelector('.site-title');
  if (siteTitle) {
    const originalHTML = siteTitle.innerHTML; // Store original HTML to reconstruct
    let processed = ''; // String to build animated HTML
    // Iterate through child nodes (text nodes and other HTML elements like 'span')
    for (let node of siteTitle.childNodes) {
      if (node.nodeType === 3) { // If it's a text node (plain text)
        const letters = node.textContent.split(''); // Split text into individual characters
        letters.forEach((c, i) => {
          if (c.match(/[a-zA-Z]/)) { // If character is an alphabet letter
            // Wrap in a span with 'title-letter' class and staggered animation delay
            processed += `<span class="title-letter" style="animation-delay:${0.19 + i * 0.045}s">${c}</span>`;
          } else if (c === ' ') {
            processed += `<span class="title-space">${c}</span>`; // Preserve spaces
          } else {
            processed += c; // Keep other characters as is
          }
        });
      } else {
        processed += node.outerHTML || ''; // For existing HTML elements, append their outer HTML
      }
    }
    siteTitle.innerHTML = processed; // Replace original HTML with animated letters
    setTimeout(() => {
      siteTitle.classList.add('animate-title-in'); // Trigger overall title animation
    }, 160);
  }

  // Animated underline for navigation links: Provides a hover/focus effect.
  const nav = document.querySelector('nav');
  const navLinks = nav.querySelectorAll('ul li a'); // Select all navigation anchor links
  const navUnderline = nav.querySelector('.nav-underline'); // Get the underline element

  // 'moveUnderline' function: Positions the underline beneath the active link.
  function moveUnderline(e) {
    const link = e.target; // The link that triggered the event
    if (!link || !navUnderline) return; // Exit if elements are missing
    const rect = link.getBoundingClientRect(); // Dimensions and position of the link
    const navRect = nav.getBoundingClientRect(); // Dimensions and position of the navigation container
    navUnderline.style.width = rect.width + 'px'; // Set underline width to link width
    navUnderline.style.left = (rect.left - navRect.left) + 'px'; // Position underline relative to nav container
    navUnderline.style.opacity = 1; // Make underline visible
  }

  // Add event listeners for hover and focus on nav links
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', moveUnderline); // When mouse enters
    link.addEventListener('focus', moveUnderline);     // When link is focused (keyboard nav)
    link.addEventListener('mouseleave', () => {         // When mouse leaves
      navUnderline.style.opacity = 0; // Fade out underline
    });
    link.addEventListener('blur', () => {             // When link loses focus
      navUnderline.style.opacity = 0; // Fade out underline
    });
  });

  // On page load, fade in underline under first item for a brief effect.
  setTimeout(() => {
    if (navLinks.length) {
      const evt = { target: navLinks[0] }; // Simulate an event on the first nav link
      moveUnderline(evt); // Position underline under the first link
      setTimeout(() => { navUnderline.style.opacity = 0; }, 900); // Fade it out after a delay
    }
  }, 520);

  // Background squares fade-in effect.
  const bgSquares = document.querySelector('.bg-squares');
  if(bgSquares) {
    bgSquares.style.opacity = '0'; // Start invisible
    setTimeout(() => {
      bgSquares.style.opacity = '0.21'; // Fade in to desired opacity
    }, 140);
  }
});

// =========================================================================
//                           PROJECTS SECTION
// =========================================================================

// 'projects': An array of objects, each representing a portfolio project.
// Contains data like title, image path, descriptions (for i18n), and a link.
const projects = [
  {
    title: "Portfolio Interactive",
    image: "Portfolio.png", // Image path (relative to the public directory)
    description: "An interactive portfolio to showcase my skills and professional journey as a cybersecurity expert and developer.",
    description_fr: "Un portfolio interactif pour présenter mes compétences et mon parcours en cybersécurité et développement.",
    description_es: "Un portafolio interactivo para mostrar mis habilidades y trayectoria como experto en ciberseguridad y desarrollador.",
    link: "https://github.com/You-ssefX/Portfolio.git" // Link to GitHub or project details
  },
  {
    title: "Mobile App for Association",
    image: "MobilApp.jpeg",
    description: "Developed a modern mobile application for a non-profit association, featuring member management, secure messaging, and event scheduling.",
    description_fr: "Développement d'une application mobile moderne pour une association, avec gestion des membres, messagerie sécurisée et agenda d'événements.",
    description_es: "Desarrollé una aplicación móvil moderna para una asociación, con gestión de miembros, mensajes seguros y programación de eventos.",
    link: "#" // Placeholder link if project is not public or details are by request
  }
  // Add more projects here as needed
];

// Get the container where project cards will be rendered.
const projectsGrid = document.getElementById('projectsGrid');

// 'renderProjects' function: Dynamically creates and injects project cards into the DOM.
// Supports language switching for descriptions and link text.
function renderProjects(lang = 'en') {
  projectsGrid.innerHTML = ""; // Clear existing projects to prevent duplicates on language change
  projects.forEach((project, idx) => { // Loop through each project in the 'projects' array
    const card = document.createElement('div'); // Create a new div element for the project card
    card.className = 'project-card'; // Assign CSS class for styling

    const img = document.createElement('img'); // Create image element
    img.src = project.image; // Set image source
    img.alt = project.title + " preview"; // Set alt text for accessibility

    const title = document.createElement('h3'); // Create title element
    title.textContent = project.title; // Set project title

    const desc = document.createElement('p'); // Create description paragraph
    let descr = project.description; // Default to English description
    if(lang === 'fr' && project.description_fr) descr = project.description_fr; // Use French if available and lang is 'fr'
    if(lang === 'es' && project.description_es) descr = project.description_es; // Use Spanish if available and lang is 'es'
    desc.textContent = descr; // Set the (translated) description

    const link = document.createElement('a'); // Create link element
    link.href = project.link; // Set link URL
    link.target = "_blank"; // Open link in a new tab
    link.rel = "noopener"; // Security best practice for target="_blank"

    // Set link text based on language and whether a valid link is provided
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

    // Append created elements to the project card
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);

    // Append the complete card to the projects grid container
    projectsGrid.appendChild(card);

    // Add a delayed entrance animation for a staggered reveal effect
    setTimeout(() => {
      card.classList.add('visible'); // Adds a CSS class to trigger the animation
    }, 220 + idx * 160); // Stagger delay based on project index
  });
}
// Initial call to render projects when the script loads.
renderProjects(currentLang);

// 'observeLangForProjects' function: Periodically checks if the language has changed
// and re-renders projects to update their descriptions.
function observeLangForProjects() {
  let memLang = currentLang; // Store the current language
  // Use setInterval to periodically check for language changes.
  // A more efficient approach for production might involve a custom event listener
  // or a MutationObserver on document.documentElement.lang.
  setInterval(() => {
    if (memLang !== currentLang) { // If the global 'currentLang' variable has changed
      renderProjects(currentLang); // Re-render projects with the new language
      memLang = currentLang; // Update the stored language
    }
  }, 400); // Check every 400 milliseconds
}
observeLangForProjects(); // Start observing language changes

// =========================================================================
//                           CONTACT FORM LOGIC (CRITICAL FOR YOUR EMAIL FUNCTIONALITY)
// =========================================================================

// Get references to the form elements
const form = document.getElementById('contactForm'); // The contact form itself
const formMsg = document.getElementById('formMsg'); // Element to display success/error messages
const submitButton = form.querySelector('button[type="submit"]'); // The form's submit button

// 'csrfToken': Variable to store the CSRF token fetched from the backend.
// This token is essential for protecting against Cross-Site Request Forgery attacks.
let csrfToken = null;

// 'fetchCsrfToken' function: Asynchronously fetches the CSRF token from the backend.
async function fetchCsrfToken() {
  try {
    const response = await fetch('/api/csrf-token'); // Send GET request to the CSRF token endpoint
    if (!response.ok) { // If the HTTP response status is not 2xx (e.g., 404, 500)
      throw new Error('Failed to fetch CSRF token.'); // Throw an error
    }
    const data = await response.json(); // Parse the JSON response
    return data.csrfToken; // Return the token
  } catch (error) {
    console.error('CSRF Token fetch error:', error); // Log the error to the console
    // Display a user-friendly error message on the form
    formMsg.textContent = {
      en: "Could not initialize form. Please try again.",
      fr: "Impossible d'initialiser le formulaire. Veuillez réessayer.",
      es: "No se pudo inicializar el formulario. Inténtalo de nuevo."
    }[currentLang];
    formMsg.style.color = 'var(--color-error)'; // Set message color to red/error
    return null; // Return null if token fetch failed
  }
}

// Event Listener: Fetch CSRF token when the page loads (DOMContentLoaded).
// This ensures the form is ready for submission as soon as possible.
window.addEventListener('DOMContentLoaded', async () => {
  csrfToken = await fetchCsrfToken(); // Attempt to fetch the token
  if (csrfToken) {
    console.log('CSRF Token fetched successfully.'); // Confirm token fetched
  } else {
    // If token fetch fails, disable the submit button to prevent form submission errors
    submitButton.disabled = true;
  }
});

// Event Listener: Re-fetch CSRF token if the form receives focus after a long time.
// This is a safeguard against expired tokens, especially if the user leaves the page open for a long period.
form.addEventListener('focusin', async () => {
  if (!csrfToken) { // Only re-fetch if a token is not currently available
    csrfToken = await fetchCsrfToken(); // Attempt to fetch
    if (csrfToken) {
      submitButton.disabled = false; // Re-enable button if token is fetched
    }
  }
}, { once: true }); // '{ once: true }' means this listener will only trigger once on the first focusin event

// Event Listener: Handles the form submission process.
form.addEventListener('submit', async e => {
  e.preventDefault(); // Prevent the browser's default form submission (which would cause a page reload)

  // Disable the submit button and show a loading message
  submitButton.disabled = true;
  submitButton.textContent = {
    en: "Sending...",
    fr: "Envoi...",
    es: "Enviando..."
  }[currentLang];
  formMsg.textContent = ''; // Clear any previous success/error messages

  // Critical: Check if CSRF token is available before attempting submission.
  if (!csrfToken) {
    formMsg.textContent = {
      en: "Form not ready. Please refresh the page.",
      fr: "Formulaire non prêt. Veuillez rafraîchir la page.",
      es: "Formulario no listo. Actualiza la página."
    }[currentLang];
    formMsg.style.color = 'var(--color-error)';
    submitButton.disabled = false; // Re-enable button
    submitButton.textContent = translations[currentLang]['contact.submit']; // Restore original text
    return; // Stop the submission process
  }

  // Get form data and convert it to a plain JavaScript object.
  const formData = new FormData(form); // Creates a FormData object from the form
  const data = Object.fromEntries(formData.entries()); // Converts FormData entries to a plain object { name: "...", email: "...", message: "..." }

  // Important Security Step: Add the CSRF token to the data payload.
  // The backend will validate this token against the one stored in the user's session.
  data._csrf = csrfToken;

  try {
    const response = await fetch('/api/contact', { // Send a POST request to the contact API endpoint
      method: 'POST', // HTTP method
      headers: {
        'Content-Type': 'application/json', // Tell the server we're sending JSON
      },
      credentials: 'include', // Important: Ensures cookies (which hold the CSRF token) are sent with the request
      body: JSON.stringify(data), // Convert the JavaScript object to a JSON string for the request body
    });

    const result = await response.json(); // Parse the JSON response from the server

    if (response.ok) { // If the HTTP response status is 2xx (e.g., 200 OK)
      // Display success message
      formMsg.textContent = {
        en: "Thank you for your message! I'll get back to you soon.",
        fr: "Merci pour votre message ! Je reviendrai vers vous bientôt.",
        es: "¡Gracias por tu mensaje! Me pondré en contacto pronto."
      }[currentLang];
      formMsg.style.color = 'var(--color-success)'; // Set message color to green/success
      form.reset(); // Clear the form fields after successful submission
      // Re-fetch a new CSRF token for the next submission to prevent re-use attacks.
      csrfToken = await fetchCsrfToken();
    } else {
      // If the server responded with an error status (e.g., 400, 403, 500)
      // Display the error message provided by the server, or a generic one if not available.
      formMsg.textContent = result.error || {
        en: "Failed to send message. Please try again later.",
        fr: "Échec de l'envoi du message. Veuillez réessayer plus tard.",
        es: "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde."
      }[currentLang];
      formMsg.style.color = 'var(--color-error)';
    }
  } catch (error) {
    // This 'catch' block handles network errors or other unexpected issues during the fetch operation.
    console.error('Contact form submission error:', error);
    formMsg.textContent = {
      en: "An unexpected error occurred. Please try again later.",
      fr: "Une erreur inattendue est survenue. Veuillez réessayer plus tard.",
      es: "Ocurrió un error inesperado. Inténtalo de nuevo más tarde."
    }[currentLang];
    formMsg.style.color = 'var(--color-error)';
  } finally {
    // This 'finally' block always executes, regardless of success or failure.
    submitButton.disabled = false; // Re-enable the submit button
    submitButton.textContent = translations[currentLang]['contact.submit']; // Restore original button text
    // Clear the message after a few seconds
    setTimeout(() => {
      formMsg.textContent = ''; // Clear message
      formMsg.style.color = ''; // Reset color
    }, 5000); // Message disappears after 5 seconds
  }
});
// --- END CONTACT FORM MODIFICATION ---

// =========================================================================
//                           SMOOTH SCROLL FOR NAV LINKS
// =========================================================================

// Adds smooth scrolling behavior when navigation links pointing to sections (e.g., #about) are clicked.
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => { // Selects all nav links whose href starts with '#'
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default jump behavior
    const target = document.querySelector(this.getAttribute('href')); // Get the target section element
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the target section
    }
  });
});

// =========================================================================
//                           HERO SECTION ANIMATION
// =========================================================================

// Animates the hero text to fade/slide in on page load.
window.addEventListener('DOMContentLoaded', () => {
  const heroText = document.querySelector('#hero .hero-text'); // Get the hero text element
  if(heroText) {
    setTimeout(() => {
      heroText.classList.add('animate-in'); // Add class to trigger CSS animation
    }, 140); // Small delay for effect
    // Subtle glowing effect (CSS animation on box-shadow)
    heroText.animate([
      { boxShadow: "0 0 0px #3fa3fe44" },
      { boxShadow: "0 2px 38px #3fa3fe44" },
      { boxShadow: "0 0 0px #3fa3fe44" },
    ], {
      duration: 2800, // Animation duration
      iterations: 2 // Number of times to repeat
    });
  }
});

// =========================================================================
//                           SECTION TRANSITION ON SCROLL
// =========================================================================

// 'isInViewport' utility: Checks if an element is currently within the viewport.
// 'offset' allows defining a margin from the viewport edges.
function isInViewport(el, offset = 0) {
  if (!el) return false; // Return false if element is null
  const rect = el.getBoundingClientRect(); // Get element's size and position
  return (
    rect.top + offset < window.innerHeight && // Element's top is above bottom of viewport + offset
    rect.bottom - offset > 0                // Element's bottom is below top of viewport - offset
  );
}

// 'revealSections': NodeList of all sections and the footer that should be revealed on scroll.
const revealSections = document.querySelectorAll('section, footer');

// 'revealOnScroll' function: Adds a 'section-visible' class to sections as they enter the viewport.
function revealOnScroll() {
  revealSections.forEach((section, idx) => {
    if (section.classList.contains('section-visible')) return; // Skip if already visible
    // Check if section is in viewport with a dynamic offset (max 90px, or 18% of window height)
    if (isInViewport(section, Math.min(window.innerHeight * 0.18, 90))) {
      section.classList.add('section-visible'); // Add class to trigger CSS reveal animation
    }
  });
}

// Initial state: Hide sections (except the hero section, which animates in separately).
revealSections.forEach(section => {
  if (!section.id || section.id !== 'hero') { // If it's not the hero section
    section.classList.add('section-hidden'); // Add class to hide it initially
  }
});

// Attach event listeners to run 'revealOnScroll' on page load and on scroll events.
window.addEventListener('DOMContentLoaded', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// =========================================================================
//                           ABOUT SECTION CARD ANIMATION
// =========================================================================

// Self-executing anonymous function to encapsulate about section logic.
(function() {
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return; // Exit if about section not found
  const aboutCard = aboutSection.querySelector('.about-card');

  // 'animateAboutCard' function: Triggers the animation for the about card.
  function animateAboutCard() {
    if (!aboutCard) return; // Exit if card not found
    // If about section is visible and card hasn't animated yet
    if (
      aboutSection.classList.contains('section-visible') &&
      !aboutCard.classList.contains('about-card-in')
    ) {
      setTimeout(() => {
        aboutCard.classList.add('about-card-in'); // Add class to trigger CSS animation
      }, 140); // Staggered delay
    }
  }
  // Listen for scroll and DOMContentLoaded to trigger animation
  window.addEventListener('scroll', animateAboutCard, { passive: true });
  window.addEventListener('DOMContentLoaded', animateAboutCard);
  // Fallback/immediate check in case section is already revealed on quick load
  setTimeout(animateAboutCard, 400);
})();

// =========================================================================
//                           ENHANCE PROJECT CARD SCROLL REVEAL
// =========================================================================
// This was initially a placeholder comment. The project card reveal logic is already
// handled within the 'renderProjects' function using 'setTimeout' to add the 'visible' class,
// providing a staggered entrance animation. No additional code is needed here.