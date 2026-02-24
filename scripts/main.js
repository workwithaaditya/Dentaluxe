/* ===================================================================
   DENTALUXE CLINIC — main.js
   Pure Vanilla JS — no libraries
   =================================================================== */

/* ── DOM Ready ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar Scroll Behaviour ──────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 70);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run on load in case page is already scrolled

  /* ── Hamburger / Mobile Menu ──────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('navMobile');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navMobile.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMobile.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── Hero Slideshow ───────────────────────────────────────────── */
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  let current  = 0;
  let slideTimer;

  function goToSlide(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = ((n % slides.length) + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startSlideshow() {
    slideTimer = setInterval(() => goToSlide(current + 1), 5000);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(slideTimer);
      goToSlide(i);
      startSlideshow();
    });
  });

  startSlideshow();

  /* ── Smooth Scroll (data-scroll targets) ─────────────────────── */
  document.querySelectorAll('[data-scroll]').forEach(el => {
    el.addEventListener('click', e => {
      const target = document.querySelector(el.dataset.scroll);
      if (target) {
        e.preventDefault();
        // Account for fixed navbar height
        const offset = navbar.offsetHeight;
        const top    = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Gallery Lightbox ─────────────────────────────────────────── */
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.querySelector('img').getAttribute('src');
      lightboxImg.src = src;
      lightboxImg.alt = item.querySelector('img').alt || 'Dentaluxe Clinic';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });

  /* ── IntersectionObserver — Fade-up on scroll ─────────────────── */
  const fader = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fader.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => fader.observe(el));

});
