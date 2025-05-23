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

// ======== Projects Display ==========
const projectsGrid = document.getElementById('projectsGrid');
projects.forEach((project, idx) => {
  const card = document.createElement('div');
  card.className = 'project-card';

  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.title + " preview";
  img.loading = 'lazy';

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

  // Add entrance animation after insertion
  setTimeout(() => {
    card.classList.add('visible');
  }, 230 + idx * 170);
});

// Contact form fake handler
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', e => {
  e.preventDefault();
  formMsg.textContent = "Sending...";
  formMsg.style.color = "#3fa3fe";
  setTimeout(() => {
    formMsg.textContent = "Thank you for reaching out! I'll get back to you soon.";
    formMsg.style.color = "#7be2b2";
    form.reset();
  }, 1500);
});

// ===== SMOOTH SCROLL + NAV ACTIVE HIGHLIGHT =====
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
const navLinks = document.querySelectorAll('nav a[href^="#"]');
function updateNavActive() {
  let scrollY = window.scrollY || window.pageYOffset;
  let offset = window.innerHeight * .19;
  let closest;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if(section) {
      const rect = section.getBoundingClientRect();
      if(rect.top - offset < 0) {
        closest = link;
      }
    }
  });
  navLinks.forEach(link => link.classList.remove('active'));
  if(closest) closest.classList.add('active');
}
window.addEventListener('scroll', updateNavActive);
window.addEventListener('DOMContentLoaded', updateNavActive);

// ====== Animated typing effect for the headline below profile image =======
const roles = [
  "Cybersecurity",
  "Full-Stack Developer",
  "Web App Developer",
  "Mobile App Developer"
];
// Find element
const headlineEl = document.querySelector(".hero-headline");
if (headlineEl) {
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingDelay = 74;
  let erasingDelay = 34;
  let afterWritePause = 1200;
  let afterErasePause = 650;

  function typeRole() {
    const currentRole = roles[roleIdx];
    if(!isDeleting) {
      headlineEl.textContent = currentRole.slice(0, charIdx+1);
      charIdx++;
      if(charIdx === currentRole.length) {
        isDeleting = true;
        setTimeout(typeRole, afterWritePause);
      } else {
        setTimeout(typeRole, typingDelay);
      }
    } else {
      headlineEl.textContent = currentRole.slice(0, charIdx-1);
      charIdx--;
      if(charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(typeRole, afterErasePause);
      } else {
        setTimeout(typeRole, erasingDelay);
      }
    }
  }
  // Start after slight delay
  setTimeout(typeRole, 400);
}

// Animate hero text on page load
window.addEventListener('DOMContentLoaded', () => {
  const heroText = document.querySelector('#hero .hero-text');
  if(heroText) {
    setTimeout(() => {
      heroText.classList.add('animate-in');
    }, 150);
    heroText.animate([
      { boxShadow: "0 0 0px #3fa3fe44" },
      { boxShadow: "0 2px 38px #3fa3fe44" },
      { boxShadow: "0 0 0px #3fa3fe44" },
    ], {
      duration: 2600,
      iterations: 2
    });
  }
});

// ===== PAGE SECTION REVEAL TRANSITIONS =====
function isInViewport(el, offset = 0) {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return (
    rect.top + offset < window.innerHeight &&
    rect.bottom - offset > 0
  );
}
const revealSections = document.querySelectorAll('section, footer');

function revealOnScroll() {
  revealSections.forEach((section, idx) => {
    if (section.classList.contains('section-visible')) return;
    if (isInViewport(section, Math.min(window.innerHeight * 0.20, 105))) {
      section.classList.add('section-visible');
    }
  });
}
revealSections.forEach(section => {
  if (!section.id || section.id !== 'hero') {
    section.classList.add('section-hidden');
  }
});
window.addEventListener('DOMContentLoaded', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// Animate skill badges on reveal
const skillsSection = document.getElementById('skills');
if(skillsSection) {
  window.addEventListener('scroll', animateSkillsListIfVisible);
  window.addEventListener('DOMContentLoaded', animateSkillsListIfVisible);
}
function animateSkillsListIfVisible() {
  if (!skillsSection.classList.contains('section-visible')) return;
  const skills = document.querySelectorAll('.skills-list li');
  skills.forEach((li, i) => {
    setTimeout(() => {
      li.style.transform = 'translateY(0) scale(1)';
      li.style.opacity = '1';
    }, 120 + i*60);
  });
}
document.querySelectorAll('.skills-list li').forEach(li => {
  li.style.transform = 'translateY(32px) scale(0.95)';
  li.style.opacity = '0';
  li.style.transition = 'transform 0.57s cubic-bezier(.52,.13,.39,1.27), opacity 0.44s cubic-bezier(.6,0,.52,1)';
});

// Parallax hover for hero shapes (desktop only)
function heroParallax() {
  const shapes = document.querySelectorAll('.hero-floating-shape');
  if(window.innerWidth < 700) return;
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 32;
    const y = (e.clientY / window.innerHeight - 0.5) * 22;
    shapes.forEach((shape, i) => {
      shape.style.transform = `translate(${x*(i+0.5)}px, ${y*(i+0.8)}px) scale(1.08)`;
    });
  });
}
window.addEventListener('DOMContentLoaded', heroParallax);

// Prevent mobile nav links from forcing focus outlines
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('mousedown', e => { link.blur(); });
});

// Touch-friendly skill badges hover
document.querySelectorAll('.skills-list li').forEach(li => {
  li.addEventListener('touchstart', () => li.classList.add('hover'));
  li.addEventListener('touchend',   () => li.classList.remove('hover'));
});

// ==== Mobile compatibility: adjust touch events for sections if needed ====
// No intrusive code; CSS is already mobile-first. This is just a placeholder for future touch improvements.