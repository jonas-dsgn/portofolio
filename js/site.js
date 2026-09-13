function renderSiteShell() {
  const onHomePage = window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('/');
  const inProjectFolder = window.location.pathname.includes('/projects/');
  const rootPrefix = inProjectFolder ? '../' : './';
  const sectionLink = section => onHomePage ? `#${section}` : `${rootPrefix}index.html#${section}`;
  const projectLink = inProjectFolder ? '../projects.html' : './projects.html';
  const currentPage = window.location.pathname.includes('/projects') ? 'projects' : '';

  document.body.insertAdjacentHTML('afterbegin', `
    <header class="site-header">
      <div class="header-inner">
        <a href="${onHomePage ? '#home' : `${rootPrefix}index.html`}" class="logo" aria-label="Jonas Nettel home">
          <img src="${rootPrefix}assets/logos/jonasnettel.svg" alt="Jonas Nettel logo">
          <span>Portofolio</span>
        </a>
        <nav aria-label="Primary navigation">
          <ul class="nav-links">
            <li><a href="${sectionLink('home')}">Home</a></li>
            <li><a href="${projectLink}"${currentPage === 'projects' ? ' aria-current="page"' : ''}>Projects</a></li>
            <li><a href="${sectionLink('about')}">About</a></li>
            <li><a href="${sectionLink('brands')}">Brands</a></li>
            <li><a href="${sectionLink('contact')}">Contact</a></li>
          </ul>
        </nav>
        <button class="hamburger" id="hamburgerBtn" type="button" aria-label="Open navigation menu" aria-controls="mobileMenu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
    <div class="mobile-menu" id="mobileMenu" aria-label="Mobile navigation">
      <a href="${sectionLink('home')}" class="mobile-nav-link">Home</a>
      <a href="${projectLink}" class="mobile-nav-link"${currentPage === 'projects' ? ' aria-current="page"' : ''}>Projects</a>
      <a href="${sectionLink('about')}" class="mobile-nav-link">About</a>
      <a href="${sectionLink('brands')}" class="mobile-nav-link">Brands</a>
      <a href="${sectionLink('contact')}" class="mobile-nav-link">Contact</a>
    </div>
    <div class="menu-overlay" id="menuOverlay"></div>
  `);

  document.body.insertAdjacentHTML('beforeend', `
    <footer class="footer">
      <span>© MINIMAL FASHION — WEBSITE CREATED BY JONAS NETTEL</span>
      <span>𓆝 𓆟 𓆞 𓆝 𓆟</span>
      <span>© 2026 JONAS NETTEL. ALL RIGHTS RESERVED.</span>
    </footer>
  `);
}

renderSiteShell();
