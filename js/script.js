  // ========== MOBILE MENU ==========
  const hamburgerButton = document.getElementById('hamburgerBtn');
  const mobileMenu  = document.getElementById('mobileMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  let restoreFocus = false;

  function openMobileMenu() {
    mobileMenu.classList.add('active');
    menuOverlay.classList.add('active');
    hamburgerButton.setAttribute('aria-expanded', 'true');
    hamburgerButton.setAttribute('aria-label', 'Close navigation menu');
    document.body.style.overflow = 'hidden';
    mobileMenu.querySelector('.mobile-nav-link').focus();
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    hamburgerButton.setAttribute('aria-expanded', 'false');
    hamburgerButton.setAttribute('aria-label', 'Open navigation menu');
    document.body.style.overflow = '';
    if (restoreFocus) hamburgerButton.focus();
    restoreFocus = false;
  }

  hamburgerButton.addEventListener('click', () => {
    restoreFocus = true;
    mobileMenu.classList.contains('active') ? closeMobileMenu() : openMobileMenu();
  });
  menuOverlay.addEventListener('click', closeMobileMenu);
  document.querySelectorAll('.mobile-nav-link').forEach(link => link.addEventListener('click', closeMobileMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('active')) closeMobileMenu();
  });

  // ========== SMOOTH SCROLL ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mobileMenu.classList.contains('active')) closeMobileMenu();
      }
    });
  });

  // ========== SCROLL REVEAL ==========
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));

  // About section fade-in (separate visible class)
  const aboutTextEl     = document.getElementById('aboutText');
  const aboutPortraitEl = document.getElementById('aboutPortrait');

  if (aboutTextEl && aboutPortraitEl) {
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          aboutObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    aboutObserver.observe(aboutTextEl);
    aboutObserver.observe(aboutPortraitEl);
  }

  // ========== INIT ==========

  // Hero title: split into per-character spans for staggered reveal
  (function splitHeroChars() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    const html = title.innerHTML; // preserve <br>
    const lines = html.split('<br>');
    title.innerHTML = lines.map(line =>
      line.split('').map((ch, i) => {
        if (ch === ' ') return '<span style="display:inline-block;width:0.25em;"> </span>';
        return `<span class="char">${ch}</span>`;
      }).join('')
    ).join('<br>');

    // Assign staggered delays
    title.querySelectorAll('.char').forEach((el, i) => {
      el.style.animationDelay = `${0.05 + i * 0.04}s`;
    });
  })();

  // Section titles without scroll-reveal also need the bar triggered (Brands, Contact handled separately)
  document.querySelectorAll('.section-title:not(.scroll-reveal)').forEach(el => {
    // Trigger bar immediately if already in view (non-scroll-reveal titles)
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('bar-ready'); io.unobserve(e.target); }
      });
    }, { threshold: 0.3 });
    io.observe(el);
  });

  // About name: fire shimmer once when about section becomes visible
  (function initAboutShimmer() {
    const nameEl = document.querySelector('.about-name');
    if (!nameEl) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => nameEl.classList.add('shimmer-run'), 300);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    io.observe(nameEl);
  })();

  // Start the marquee only after both logo sets have stable dimensions.
  const brandsTrack = document.querySelector('.brands-track');
  if (brandsTrack) {
    const brandImages = Array.from(brandsTrack.querySelectorAll('img'));
    Promise.all(brandImages.map(image => image.complete
      ? Promise.resolve()
      : new Promise(resolve => {
          image.addEventListener('load', resolve, { once: true });
          image.addEventListener('error', resolve, { once: true });
        })
    )).then(() => brandsTrack.classList.add('ready'));
  }
