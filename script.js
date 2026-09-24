/* ============================================
   ProductividadIA - script.js
   Menú móvil + banner de cookies (RGPD)
   ============================================ */

(function () {
  'use strict';

  // Menú móvil
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Cerrar al hacer clic en un enlace
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Banner de cookies (RGPD / AdSense ready)
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const rejectBtn = document.getElementById('cookie-reject');

  function getCookieConsent() {
    try {
      return localStorage.getItem('cookie_consent');
    } catch (e) {
      return null;
    }
  }

  function setCookieConsent(value) {
    try {
      localStorage.setItem('cookie_consent', value);
    } catch (e) {}
  }

  function showBanner() {
    if (banner && !getCookieConsent()) {
      banner.classList.add('show');
    }
  }

  function hideBanner() {
    if (banner) {
      banner.classList.remove('show');
    }
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      setCookieConsent('accepted');
      hideBanner();
      // Aquí se puede cargar AdSense de forma diferida si se desea
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener('click', function () {
      setCookieConsent('rejected');
      hideBanner();
    });
  }

  // Mostrar banner tras un pequeño delay
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(showBanner, 800);
    });
  } else {
    setTimeout(showBanner, 800);
  }
})();
