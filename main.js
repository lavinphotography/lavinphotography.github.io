(() => {
  // ── MOBILE MENU ─────────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── HERO BG PARALLAX & LOAD ANIMATION ────────────────
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    setTimeout(() => heroBg.classList.add('loaded'), 100);
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroBg.style.transform = `scale(1) translateY(${y * 0.3}px)`;
    }, { passive: true });
  }

  // ── SCROLL REVEAL ────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));

  // ── LIGHTBOX ─────────────────────────────────────────
  const lightbox = document.querySelector('.lightbox-overlay');
  const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', () => {
      if (!lightbox || !lightboxImg) return;
      lightboxImg.src = el.dataset.lightbox;
      lightbox.classList.add('open');
    });
  });
  if (lightbox) {
    lightbox.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.classList.remove('open'));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
  }

  // ── WILDLIFE FILTER PILLS ────────────────────────────
  const pills = document.querySelectorAll('.pill[data-filter]');
  if (pills.length) {
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const filter = pill.dataset.filter;
        document.querySelectorAll('[data-category]').forEach(item => {
          const show = filter === 'all' || item.dataset.category === filter;
          item.style.opacity = show ? '1' : '0.15';
          item.style.pointerEvents = show ? 'auto' : 'none';
          item.style.transform = show ? 'scale(1)' : 'scale(0.97)';
          item.style.transition = 'opacity 0.35s, transform 0.35s';
        });
      });
    });
  }

  // ── CONTACT FORM ─────────────────────────────────────
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type=submit]');
      btn.textContent = 'Message Sent';
      btn.style.background = '#3b6d11';
      btn.style.borderColor = '#3b6d11';
      btn.style.color = '#eaf3de';
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.style.color = '';
        contactForm.reset();
      }, 3000);
    });
  }

  // ── ACTIVE NAV LINK ───────────────────────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header nav a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
