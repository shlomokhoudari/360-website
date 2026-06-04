// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
  '.pillar, .service-card, .client-item, .location-item, .about-text, .about-pillars, .global-text, .contact-text, .contact-form, .section-header'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Stagger grid children
document.querySelectorAll('.services-grid, .clients-grid, .about-pillars').forEach(grid => {
  Array.from(grid.children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.05}s`;
  });
});

// Contact form — FormSubmit
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const name    = document.getElementById('name').value.trim();
  const company = document.getElementById('company').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const note    = document.getElementById('formNote');
  const btn     = this.querySelector('button[type="submit"]');

  if (!name || !email || !message) {
    note.textContent = 'Please fill in all required fields.';
    note.className = 'form-note error';
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Sending…';
  note.textContent = '';
  note.className = 'form-note';

  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('company', company || '—');
    formData.append('message', message);
    formData.append('_subject', `Inquiry from ${name}${company ? ' – ' + company : ''}`);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    const res = await fetch('https://formsubmit.co/360@360visiondc.com', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' },
    });

    if (res.ok) {
      note.textContent = 'Message sent. We\'ll be in touch shortly.';
      note.className = 'form-note success';
      this.reset();
    } else {
      throw new Error('Submission failed');
    }
  } catch (err) {
    console.error('Form error:', err);
    note.textContent = 'Something went wrong. Please email us directly at 360@360visiondc.com';
    note.className = 'form-note error';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Send Message';
  }
});
