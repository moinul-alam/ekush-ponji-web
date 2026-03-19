/* ============================================================
   Ekush Ponji — components.js
   Fetches and injects shared navbar and footer into any page.
   Structure:
   1. Component Loader
   2. Active Nav Link Highlighter
============================================================ */


/* ─── 1. COMPONENT LOADER ───────────────────────────────────── */
async function loadComponent(placeholderId, componentPath) {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) return;

  try {
    const response = await fetch(componentPath);
    if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
    const html = await response.text();
    placeholder.outerHTML = html;
  } catch (error) {
    console.error(`Component load error [${placeholderId}]:`, error);
  }
}

// Load navbar and footer, then run post-load setup
Promise.all([
  loadComponent('navbar-placeholder', '/components/navbar.html'),
  loadComponent('footer-placeholder', '/components/footer.html'),
]).then(() => {
  setFooterYear();
  highlightActiveNavLink();
  initNavbarScroll();
});


/* ─── 2. FOOTER YEAR ────────────────────────────────────────── */
function setFooterYear() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}


/* ─── 3. ACTIVE NAV LINK HIGHLIGHTER ───────────────────────── */
// Adds .active class to the nav link matching current page
function highlightActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (currentPath === linkPath) {
      link.classList.add('active');
    }
  });
}


/* ─── 4. NAVBAR SCROLL EFFECT ───────────────────────────────── */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}