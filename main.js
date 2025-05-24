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
    link: "https://github.com/You-ssefX/Portfolio.git"
  },
  {
    title: "Mobile App for Association",
    image: "MobilApp.jpeg", 
    description: "Developed a modern mobile application for a non-profit association, featuring member management, secure messaging, and event scheduling.",
    link: "#" 
  }
];

// Dynamically inject projects into #projectsGrid
const projectsGrid = document.getElementById('projectsGrid');
projects.forEach((project, idx) => {
  const card = document.createElement('div');
  card.className = 'project-card';

  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.title + " preview";

  const title = document.createElement('h3');
  title.textContent = project.title;

  const desc = document.createElement('p');
  desc.textContent = project.description;

  const link = document.createElement('a');
  link.href = project.link;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = (project.link && project.link !== "#") ? "View on GitHub" : "Details by request";

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

// Simple client-side fake contact form handler
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', e => {
  e.preventDefault();
  formMsg.textContent = "Sending...";
  setTimeout(() => {
    formMsg.textContent = "Thank you for reaching out! I'll get back to you soon.";
    form.reset();
  }, 1500);
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
document.addEventListener('DOMContentLoaded', () => {
  // Your existing code here...

  // Animated role text
  const roles = [
    "Full-Stack Developer 💻",
    "Cybersecurity Specialist 🛡️",
    "Web & App Developer 📱",
    "Linux & Bash Enthusiast 🐧"
  ];

  const roleTextEl = document.getElementById('roleText');
  let roleIndex = 0;

  function showRole() {
    if (!roleTextEl) return;

    // Fade out current text
    roleTextEl.classList.remove('visible');

    setTimeout(() => {
      // Change text after fade out
      roleTextEl.textContent = roles[roleIndex];
      // Fade in new text
      roleTextEl.classList.add('visible');

      // Next role index
      roleIndex = (roleIndex + 1) % roles.length;
    }, 600);
  }

  // Initially show first role
  if(roleTextEl){
    roleTextEl.textContent = roles[0];
    roleTextEl.classList.add('visible');
  }

  // Cycle roles every 3 seconds
  setInterval(showRole, 3000);
});
