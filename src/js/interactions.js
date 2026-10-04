/**
 * Garmin fēnix 8 - Interactions Module
 * Handles watch models colorway/size customization, sticky nav scrollspy, and interactive tabs
 */

(function (window, document, $) {
  'use strict';

  const Interactions = {
    init: function () {
      this.initWatchCustomizer();
      this.initBatteryAccordions();
      this.initSmoothScroll();
    },

    initWatchCustomizer: function () {
      // AMOLED Watch color / size switch
      $('.fenix-8-amoled .color-con dd').on('click', function () {
        const index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        const $images = $(this).closest('.pd').find('.product-image-con .products-image');
        $images.removeClass('active').eq(index).addClass('active');

        const $sizes = $(this).closest('.pd').find('.size-con p');
        $sizes.removeClass('active').eq(index).addClass('active');
      });

      $('.fenix-8-amoled .size-con p').on('click', function () {
        const index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        const $images = $(this).closest('.pd').find('.product-image-con .products-image');
        $images.removeClass('active').eq(index).addClass('active');

        const $colors = $(this).closest('.pd').find('.color-con dd');
        $colors.removeClass('active').eq(index).addClass('active');
      });

      // Solar Watch color / size switch
      $('.fenix-8-solar .color-con dd, .fenix-8-solar .size-con p').on('click', function () {
        const index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        const $images = $(this).closest('.pd').find('.product-image-con .products-image');
        $images.removeClass('active').eq(index).addClass('active');
      });
    },

    initBatteryAccordions: function () {
      // Independent persistent battery life accordion toggles
      $(document).off('click', '.battery-title').on('click', '.battery-title', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const $title = $(this);
        const $content = $title.next('.battery-content');

        if ($content.is(':visible')) {
          $title.removeClass('is-open');
          $content.slideUp(200);
        } else {
          $title.addClass('is-open');
          $content.slideDown(200);
        }
      });
    },

    initSmoothScroll: function () {
      $('a[href^="#"]').on('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#' || href.length <= 1) {
          e.preventDefault();
          return;
        }
        try {
          const target = $(href);
          if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
              scrollTop: target.offset().top - 60
            }, 400);
          }
        } catch (err) {}
      });
    }
  };

  window.FenixInteractions = Interactions;
})(window, document, window.jQuery || window.$);
