/* ============================================================
   Ekush Ponji — main.js
   Structure:
   1. Footer Year
   2. Privacy Policy Date
   3. Navbar Scroll Effect
   4. Scroll Reveal
   5. Analytics Placeholder
============================================================ */


/* ─── 1. FOOTER YEAR ────────────────────────────────────────── */
// Automatically keeps copyright year current
const yearEl = document.getElementById('footer-year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


/* ─── 2. PRIVACY POLICY DATE ────────────────────────────────── */
// TODO: Update this date whenever the privacy policy is revised
const privacyDateEl = document.getElementById('privacy-date');
if (privacyDateEl) {
  privacyDateEl.textContent = 'March 2026';
}


/* ─── 3. NAVBAR SCROLL EFFECT ───────────────────────────────── */
// Adds .scrolled class to navbar when user scrolls down
const navbar = document.getElementById('navbar');

if (navbar) {
  const handleNavbarScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
}


/* ─── 4. SCROLL REVEAL ──────────────────────────────────────── */
// Reveals elements with .reveal class as they enter the viewport
const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger sibling reveals slightly
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}


/* ─── 5. ANALYTICS PLACEHOLDER ─────────────────────────────── */
// TODO: Uncomment and configure once Google Analytics is set up
// Replace G-XXXXXXXXXX in index.html with your Measurement ID
//
// Custom event tracking example (use after GA is configured):
//
// function trackEvent(category, action, label) {
//   if (typeof gtag === 'function') {
//     gtag('event', action, {
//       event_category: category,
//       event_label: label,
//     });
//   }
// }
//
// Example usage:
// document.querySelector('#play-store-btn')?.addEventListener('click', () => {
//   trackEvent('Conversion', 'click', 'Play Store Download');
// });