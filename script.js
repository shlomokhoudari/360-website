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

// Contact form — Web3Forms
const WEB3FORMS_KEY = '77f8e434-c84a-4042-a2b7-1a9ec7983d5f';

document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const name    = this.name.value.trim();
  const company = this.company.value.trim();
  const email   = this.email.value.trim();
  const message = this.message.value.trim();
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
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name,
        email,
        company: company || '—',
        message,
        subject: `Inquiry from ${name}${company ? ' – ' + company : ''}`,
      }),
    });

    const data = await res.json();
    console.log('Web3Forms response:', data);

    if (data.success) {
      note.textContent = 'Message sent. We\'ll be in touch shortly.';
      note.className = 'form-note success';
      this.reset();
    } else {
      throw new Error(data.message || 'Submission failed');
    }
  } catch (err) {
    note.textContent = 'Something went wrong. Please email us directly at 360@360visiondc.com';
    note.className = 'form-note error';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Send Message';
  }
});
