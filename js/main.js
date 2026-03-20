/* ── PARTICLE CANVAS ──────────────────────── */
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');
let particles = [];
let animFrame;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  const count = Math.floor((window.innerWidth * window.innerHeight) / 14000);
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const maxDist = 120;

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(247, 0, 255, ${p.opacity})`;
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const dx = p.x - q.x;
      const dy = p.y - q.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(247, 0, 255, ${0.05 * (1 - dist / maxDist)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  animFrame = requestAnimationFrame(drawParticles);
}

window.addEventListener('resize', () => {
  resize();
  createParticles();
});

resize();
createParticles();
drawParticles();

/* ── NAVIGATION ───────────────────────────── */
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

if (hamburger) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── SMOOTH SCROLL ────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── SCROLL REVEAL ────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── TYPING ANIMATION ─────────────────────── */
function typeText(el, text, speed = 45) {
  let i = 0;
  el.textContent = '';
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

const typingObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lines = entry.target.querySelectorAll('.t-cmd');
      lines.forEach((line, i) => {
        const text = line.dataset.text || line.textContent;
        line.dataset.text = text;
        setTimeout(() => typeText(line, text), i * 600);
      });
      typingObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const terminal = document.querySelector('.about-terminal');
if (terminal) typingObserver.observe(terminal);

/* ── COUNTER ANIMATION ────────────────────── */
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1800;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-count]').forEach(animateCount);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) counterObserver.observe(heroStats);

/* ── THEME TOGGLE ─────────────────────────── */
const THEME_KEY = 'mcs-theme';
const htmlEl = document.documentElement;

function applyTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

(function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
})();

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

/* ── SIGN-UP MODAL ────────────────────────── */
const modal = document.getElementById('signup-modal');

function openModal() {
  if (!modal) return;
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  const firstInput = modal.querySelector('input:not([type="hidden"]):not([tabindex="-1"])');
  if (firstInput) firstInput.focus();
}

function closeModal() {
  if (!modal) return;
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

document.querySelectorAll('#open-signup, #open-signup-hero').forEach(btn => {
  btn.addEventListener('click', () => {
    openModal();
    if (typeof plausible !== 'undefined') plausible('Signup Modal Opened');
  });
});

const closeBtn = document.getElementById('close-signup');
if (closeBtn) closeBtn.addEventListener('click', closeModal);

if (modal) {
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
  });
}

/* ── FORM HELPERS ─────────────────────────── */
function validateField(input, errorId, message) {
  const err = document.getElementById(errorId);
  if (!input.value.trim() || (input.type === 'email' && !input.checkValidity())) {
    if (err) err.textContent = message;
    input.classList.add('invalid');
    return false;
  }
  if (err) err.textContent = '';
  input.classList.remove('invalid');
  return true;
}

function setSubmitState(btn, state) {
  if (state === 'sending') {
    btn.textContent = 'Sending…';
    btn.disabled = true;
  } else if (state === 'success') {
    btn.textContent = 'Sent ✓';
    btn.style.background = '#28c840';
    btn.style.boxShadow = '0 4px 20px rgba(40, 200, 64, 0.4)';
    btn.disabled = true;
  } else if (state === 'error') {
    btn.textContent = 'Try Again';
    btn.style.background = '';
    btn.style.boxShadow = '';
    btn.disabled = false;
  } else {
    btn.textContent = btn.dataset.original;
    btn.style.background = '';
    btn.style.boxShadow = '';
    btn.disabled = false;
  }
}

/* Replace with your actual Formspree endpoint IDs from formspree.io */
const CONTACT_ENDPOINT  = 'https://formspree.io/f/YOUR_CONTACT_FORM_ID';
const SIGNUP_ENDPOINT   = 'https://formspree.io/f/YOUR_SIGNUP_FORM_ID';

if (CONTACT_ENDPOINT.includes('YOUR_') || SIGNUP_ENDPOINT.includes('YOUR_')) {
  console.warn('[Mecasimetra] Formspree endpoints are not configured. Replace YOUR_CONTACT_FORM_ID and YOUR_SIGNUP_FORM_ID in js/main.js with real IDs from formspree.io.');
}

async function submitToFormspree(endpoint, formEl, btn) {
  if (!btn.dataset.original) btn.dataset.original = btn.textContent;
  setSubmitState(btn, 'sending');

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(formEl)
    });

    if (res.ok) {
      setSubmitState(btn, 'success');
      setTimeout(() => {
        setSubmitState(btn, 'reset');
        formEl.reset();
      }, 3500);
      return true;
    } else {
      throw new Error('Server error');
    }
  } catch {
    setSubmitState(btn, 'error');
    return false;
  }
}

/* ── CONTACT FORM ─────────────────────────── */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();

    const nameOk  = validateField(contactForm.querySelector('#name'),    'err-name',    'Name is required.');
    const emailOk = validateField(contactForm.querySelector('#email'),   'err-email',   'A valid email is required.');
    const msgOk   = validateField(contactForm.querySelector('#message'), 'err-message', 'Please describe your project.');

    if (!nameOk || !emailOk || !msgOk) return;

    const btn = document.getElementById('contact-submit');
    const ok = await submitToFormspree(CONTACT_ENDPOINT, contactForm, btn);
    if (ok && typeof plausible !== 'undefined') plausible('Contact Form Submitted');
  });
}

/* ── SIGNUP FORM ──────────────────────────── */
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', async e => {
    e.preventDefault();

    const nameOk  = validateField(signupForm.querySelector('#su-name'),  'err-su-name',  'Name is required.');
    const emailOk = validateField(signupForm.querySelector('#su-email'), 'err-su-email', 'A valid email is required.');

    if (!nameOk || !emailOk) return;

    const btn = document.getElementById('signup-submit');
    const ok = await submitToFormspree(SIGNUP_ENDPOINT, signupForm, btn);
    if (ok) {
      if (typeof plausible !== 'undefined') plausible('Sign Up Completed');
      setTimeout(closeModal, 3500);
    }
  });
}

/* ── FOOTER YEAR ──────────────────────────── */
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── ACTIVE NAV LINK ──────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
}, { passive: true });

