/**
 * Garmin fēnix 8 - Animations Module
 * Handles scroll triggers, parallax reveals, and dynamic background transitions
 */

(function (window, document) {
  'use strict';

  const Animations = {
    init: function () {
      this.initScrollReveal();
      this.initVideoAutoplay();
    },

    initScrollReveal: function () {
      if (!('IntersectionObserver' in window)) return;

      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.15
      });

      document.querySelectorAll('.fade-in, .show-item, .item').forEach(el => {
        revealObserver.observe(el);
      });
    },

    initVideoAutoplay: function () {
      const videos = document.querySelectorAll('video[autoplay]');
      videos.forEach(v => {
        v.muted = true;
        const playPromise = v.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay with muted fallback
            v.muted = true;
            v.play();
          });
        }
      });
    }
  };

  window.FenixAnimations = Animations;
})(window, document);
