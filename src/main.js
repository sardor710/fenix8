/**
 * Garmin fēnix 8 - Main Application Controller
 * Orchestrates modules, video players, and responsive handlers
 */

(function () {
  'use strict';

  function onReady() {
    console.log('[Garmin fēnix 8] Initializing modular subsystems...');

    if (window.FenixAnimations && typeof window.FenixAnimations.init === 'function') {
      window.FenixAnimations.init();
    }

    if (window.FenixInteractions && typeof window.FenixInteractions.init === 'function') {
      window.FenixInteractions.init();
    }

    // Handle sticky navigation state
    const pdNav = document.getElementById('pd-nav');
    if (pdNav) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
          pdNav.classList.add('fixed');
        } else {
          pdNav.classList.remove('fixed');
        }
      }, { passive: true });
    }

    console.log('[Garmin fēnix 8] Initialization complete.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
