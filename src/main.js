/**
 * Garmin fēnix 8 - Main Application Controller
 * Orchestrates modules, video players, and mobile touch responsive handlers
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
        if (window.scrollY > 80) {
          pdNav.classList.add('fixed');
        } else {
          pdNav.classList.remove('fixed');
        }
      }, { passive: true });
    }

    // Handle touch device video plays
    document.addEventListener('touchstart', function playOnFirstTouch() {
      document.querySelectorAll('video[autoplay]').forEach(function (v) {
        if (v.paused) {
          v.muted = true;
          v.play().catch(function () {});
        }
      });
    }, { once: true, passive: true });

    console.log('[Garmin fēnix 8] Initialization complete.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
