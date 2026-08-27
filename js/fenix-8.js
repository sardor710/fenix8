 $(function() {

     var windowWidth = $(window).width();
     var windowHeight = $(window).height();

     var ctrl = new ScrollMagic.Controller();
     var triggerHookValue = 0;

     function setupScrollAnimations(selectors, options) {
         selectors.forEach(function(selector) {
             $(selector).each(function() {
                 var opacityElements = $(this).find(".fade-in");
                 opacityElements.each(function() {
                     var opacity = $(this);
                     var opacitySection = new TimelineMax();

                     var animationDuration = selector === '#map' ? 0.5 : 0.3;

                     opacitySection.to(opacity, animationDuration, { opacity: 1, ease: Linear.easeNone });

                     var sceneOptions = {
                         triggerElement: this,
                         triggerHook: triggerHookValue
                     };

                     if (selector === '#map') {
                         sceneOptions.offset = $(window).height() / 4;
                     } else {
                         sceneOptions.offset = -$(window).height() * 0.4;
                     }

                     new ScrollMagic.Scene(sceneOptions)
                         .setTween(opacitySection)
                         .addTo(ctrl);

                     triggerHookValue += 0.1;
                 });
             });
         });
     }

     var triggerHookValue = 0.5; // 或者您想要的初始值
     var ctrl = new ScrollMagic.Controller();

     setupScrollAnimations(['.container', '.container-2', '.link', '#map']);

     // 導覽
     $("#overview .container a").click(function() {
            isScrollEventEnabled = false; 
            $(this).addClass("active");
            $(this).parent().siblings().find('a').removeClass("active");

            var name = $(this).attr('href');
            var id = name;
            var top = $(id).first().offset().top - 50; 

            $('html, body').animate({ scrollTop: top + 10 }, 300, function() {
               isScrollEventEnabled = true; 
            });
        });

     // scroll magic 動畫效果
     var controller = new ScrollMagic.Controller({ });

     $('body').each(function() {

         var scene = new ScrollMagic.Scene({
                 triggerElement: "#hero",
                 offset: $('#hero').height()
             })
             .setTween("#pd-nav", 1, { opacity: 1 }, .5)
             .addTo(controller);


         var scene = new ScrollMagic.Scene({
                 triggerElement: "#hero .container",
                 offset: $('#hero').height() / 1.55,
                 duration: "50%"
             })
             .addTo(controller)
             .on("progress", function(event) {
                 var progress = event.progress;
                 var position = progress * 100; // 從0%到200%
                 $("#hero h2").css("background-position", "0 " + position + "%");
             });

         var scene = new ScrollMagic.Scene({
                 triggerElement: "#device",
                 offset: -$(window).height() / 5
             })
             .setTween("#hero .container", .5, { opacity: 0 }, 1)
             .addTo(controller);

         // 產品
         new ScrollMagic.Scene({
                 triggerElement: "#device",
                 triggerHook: 0,
                 offset: -$(window).height() / 2.5
             })
             .setTween("#device", .3, { opacity: 1 }, .5)
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#device",
                 triggerHook: 0,
                 offset: 0,
                 duration: $('#device').height() * 2
             })
             .setPin("#device")
             .addTo(controller);


         var scene = new ScrollMagic.Scene({
                 triggerElement: "#device",
                 offset: -$(window).height() / 2.5,
                 duration: $(window).height() * 1.3
             })
             .setTween("#device .all-bg", 1, { scale: 1.3 }, .5)
             .addTo(controller);


         var scene = new ScrollMagic.Scene({
                 triggerElement: "#device",
                 offset: $(window).height(),
                 duration: 100
             })
             .setTween("#device .amoled", .1, { opacity: 0,zIndex: 20 }, .1)
             .addTo(controller);

         var scene = new ScrollMagic.Scene({
                 triggerElement: "#device",
                 offset: $(window).height() + 120,
                 duration: 100
             })
             .setTween("#device .solar", .1, { opacity: 1 }, .1)
             .addTo(controller);


         var scene = new ScrollMagic.Scene({
                 triggerElement: "#device",
                 offset: $(window).height() / 2,
                 duration: $('#device').height() * 2
             })
             .setTween("#device .bg", .5, { y: "-1000px" }, .5)
             .addTo(controller);

         // design
         var scene = new ScrollMagic.Scene({
                 triggerElement: "#design",
                 triggerHook: 'onEnter',
                 offset: 0,
                 duration: 0
             })
             .setTween("#design", .1, { opacity: 1 }, .1)
             .addTo(controller);

         var scene = new ScrollMagic.Scene({
                 triggerElement: "#design .container",
                 triggerHook: 'onEnter',
                 offset: 0,
                 duration: $('#design .container').height()
             })
             .setPin("#design .container")
             .addTo(controller);

         // design 第一區塊
         var scene = new ScrollMagic.Scene({
                 triggerElement: "#design .container",
                 triggerHook: 'onEnter',
                 offset: $(window).height() / 1.8,
                 duration: 0
             })
             .setTween("#design .bg", .5, { opacity: 1 }, .5)
             .addTo(controller);

         var scene = new ScrollMagic.Scene({
                 triggerElement: "#design .container",
                 triggerHook: 'onEnter',
                 offset: $(window).height() / 1.8,
                 duration: $(window).height()
             })
             .setTween("#design .content-01", .5, { opacity: 1 }, .5)
             .addTo(controller);


         // 背景變色
         var scene = new ScrollMagic.Scene({
                 triggerElement: "#design .container",
                 triggerHook: 'onEnter',
                 offset: $(window).height() / 1.5,
                 duration: $(window).height() / 8
             })

             .setTween("#design", .5, { backgroundColor: "#dddddd" }, 0.5)
             .addTo(controller);

         // design第二個區塊
         var scene1 = new ScrollMagic.Scene({
                 triggerElement: "#design .container",
                 offset: $(window).height() * 1.2,
                 duration: 200
             })
             .setTween("#design .content-01", .2, { opacity: 0 }, .2)
             .addTo(controller);


         var scene2 = new ScrollMagic.Scene({
                 triggerElement: "#design .container",
                 offset: $(window).height() * 1.8 + 100,
                 duration: 200
             })
             .setTween("#design .content-02", .2, { opacity: 1 }, .2)
             .addTo(controller);


         scene1.on("end", function() {
             scene2.enabled(true);
         });

         scene2.enabled(false);


         var scene = new ScrollMagic.Scene({
                 triggerElement: "#design .container",
                 offset: $(window).height() * 1.6,
                 duration: 0
             })
             .setTween("#design .bg", .5, { y: "-140px" }, .5)
             .addTo(controller);

         //training
         var scene = new ScrollMagic.Scene({
                 triggerElement: "#training",
                 offset: $(window).height() / 1.5,
                 duration: 0
             })
             .setTween("#training .bg-app", .5, { y: "-100px" }, .5)
             .addTo(controller);

        // 創建 ScrollMagic 場景
        var scene = new ScrollMagic.Scene({
             triggerElement: "#flashlight",
             offset: $(window).height() / 3.5 ,
             duration: 300

         })
         .setTween(flashlight()) 
         // .addIndicators({name: "手電筒"}) // 添加指示器
         .addTo(controller);

         // sport
         var scene = new ScrollMagic.Scene({
                 triggerElement: "#sports",
                 offset: 0,
                 duration: $(window).height() * 1.5
             })
             .setTween("#sports .shadow", .5, { y: "-100%" }, .5)
             .addTo(controller);

         var scene = new ScrollMagic.Scene({
                 triggerElement: "#sports",
                 offset: 0,
                 duration: $(window).height() / 2
             })
             .setTween("#sports .container .title", 1, { scale: 1, opacity: 1 }, .5)
             .addTo(controller);

         var scene = new ScrollMagic.Scene({
                 triggerElement: "#sports",
                 offset: 100,
                 duration: $(window).height() / 2
             })
             .setTween("#sports .container .subtitle,#sports .container .subtitle h2", .2, { y: -50, opacity: 1 }, .5)
             .addTo(controller);


         var scene = new ScrollMagic.Scene({
                 triggerElement: "#sports",
                 offset: $('#sports .container').height() / 3,
                 duration: "50%"
             })
             .addTo(controller)
             .on("progress", function(event) {
                 var progress = event.progress;
                 var position = progress * 100; // 從0%到200%
                 $("#sports .container .subtitle h2").css("background-position", "0 " + position + "%");
             });

         var scene = new ScrollMagic.Scene({
                 triggerElement: "#sports",
                 offset: $('#sports').height() / 2,
                 duration: $(window).height() / 2
             })
             .setTween("#sports .container-2 .all-text", .5, { y: -10, opacity: 1 }, .5)
             .addTo(controller);

         var scene = new ScrollMagic.Scene({
                 triggerElement: "#health",
                 offset: -$('#health .container-top').height() / 2,
                 duration: $('#health .container-top').height() * 1.5
             })
             .setTween("#health .container-top img", 0.8, { rotation: -5, opacity: 1 }, 5)
             .addTo(controller);

         var swiper = new Swiper(".mySwiper", {
             slidesPerView: 3,
             spaceBetween: 30,
             freeMode: true,
             pagination: {
                 el: ".swiper-pagination",
                 clickable: true,
             },
             navigation: {
                 nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
             },
         });


         if ($(window).width() > 1025) {

             var scene = new ScrollMagic.Scene({
                     triggerElement: "#hero .container",
                     offset: $(window).height(),
                     duration: $('#hero').height() / 4
                 })
                 .setTween("#hero .container .text p", .5, { y: -150, opacity: 1 }, .5)
                 .addTo(controller);

             var scene = new ScrollMagic.Scene({
                     triggerElement: "#hero .container",
                     offset: $('#hero').height() / 1.5,
                     duration: $('#hero').height() / 8
                 })
                 .setTween("#hero .container .text h2", .2, { y: -100, opacity: 1 }, .5)
                 .addTo(controller);

             // voice 橫移
             var scene = new ScrollMagic.Scene({
                     vertical: false,
                     triggerElement: "#voice",
                     duration: $(window).height(),
                     triggerHook: -1,
                     offset: $('#voice .container').height()
                 })
                 .setPin("#pin-container")
                 .addTo(controller);

             // 創建水平滾動動畫
             scene.on("progress", function(event) {
                 var progress = event.progress;
                 var move = progress * -67; // 移動範圍從0%到-200%
                 $("#pin-container").css("transform", "translateX(" + move + "%)");
             });

             var scene = new ScrollMagic.Scene({
                     triggerElement: "#training",
                     offset: $(window).height() / 2,
                     duration: 0
                 })
                 .setTween("#training .product", 1, { opacity: 1 }, .5)
                 .addTo(controller);

         } else if ($(window).width() <= 1025 && $(window).width() > 599) {


             var scene = new ScrollMagic.Scene({
                     triggerElement: "#hero",
                     offset: $('#hero').height() / 2,
                     duration: 0
                 })
                 .setTween("#hero .container .text p", .3, { opacity: 0 }, .5)
                 .addTo(controller);

             var scene = new ScrollMagic.Scene({
                     triggerElement: "#hero",
                     offset: $('#hero .container').height() / 3,
                     duration: $(window).height() / 9
                 })
                 .setTween("#hero .container .text h2", .2, { y: -100, opacity: 1 }, .5)
                 .addTo(controller);

             var scene = new ScrollMagic.Scene({
                     triggerElement: "#hero",
                     offset: $('#hero .container').height() / 4,
                     duration: "40%"
                 })
                 .addTo(controller)
                 .on("progress", function(event) {
                     var progress = event.progress;
                     var position = progress * 100;
                     $("#hero h2").css("background-position", "0 " + position + "%");
                 });

             var scene = new ScrollMagic.Scene({
                     triggerElement: "#device",
                     offset: -$(window).height() / 6
                 })
                 .setTween("#hero .container", .5, { opacity: 0 }, 1)
                 .addTo(controller);

             new ScrollMagic.Scene({
                     triggerElement: "#device",
                     triggerHook: 0,
                     offset: -$(window).height() / 1.5
                 })
                 .setTween("#device", .3, { opacity: 1 }, .5)
                 .addTo(controller);

         } else if ($(window).width() <= 599) {

                var scene = new ScrollMagic.Scene({
                     triggerElement: "#hero .container",
                     offset: $('#hero').height() / 1.5,
                     duration: $('#hero').height() / 8
                 })
                 .setTween("#hero .container .text h2", .2, { y: 0, opacity: 1 }, .5)
                 .addTo(controller);

             var scene = new ScrollMagic.Scene({
                     triggerElement: "#hero",
                     offset: $('#hero .container').height() / 3,
                     duration: "30%"
                 })
                 .addTo(controller)
                 .on("progress", function(event) {
                     var progress = event.progress;
                     var position = progress * 100;
                     $("#hero h2").css("background-position", "0 " + position + "%");
                 });

             var scene = new ScrollMagic.Scene({
                     triggerElement: "#device",
                     triggerHook: 'onEnter',
                     offset: $(window).height() - 100,
                 })
                 .setTween("#hero", .5, { opacity: 0 }, 1)
                 .addTo(controller);


             new ScrollMagic.Scene({
                     triggerElement: "#device",
                     triggerHook: 0,
                     offset: -$(window).height() / 1.4
                 })
                 .setTween("#device", .3, { opacity: 1 }, .5)
                 .addTo(controller);


             new ScrollMagic.Scene({
                     triggerElement: "#device",
                     triggerHook: 0,
                     offset: -$(window).height() / 3
                 })
                 .setTween("#device", .3, { opacity: 1 }, .5)
                 .addTo(controller);


             var scene = new ScrollMagic.Scene({
                     triggerElement: "#device",
                     offset: -$(window).height() / 2,
                     duration: $(window).height() * 1
                 })
                 .setTween("#device .all-bg", 1, { scale: 1 }, .5)
                 .addTo(controller);

             var scene = new ScrollMagic.Scene({
                     triggerElement: "#design .container",
                     offset: $(window).height() * 1.6,
                     duration: 0
                 })
                 .setTween("#design .bg", .5, { y: "-80px" }, .5)
                 .addTo(controller);

            // 創建 ScrollMagic 場景
             var scene = new ScrollMagic.Scene({
                     triggerElement: "#flashlight",
                     offset: $(window).height() / 5 ,
                     duration: 300

                 })
                 .setTween(flashlight()) 
                 .addTo(controller);

             var scene = new ScrollMagic.Scene({
                     triggerElement: "#training",
                     offset: $(window).height() / 2,
                     duration: 0
                 })
                 .setTween("#training .product", 1, { opacity: 1 }, .5)
                 .addTo(controller);

             var scene = new ScrollMagic.Scene({
                     triggerElement: "#training",
                     offset: $(window).height() / 2,
                     duration: 0
                 })
                 .setTween("#training .bg-app", .5, { y: "-50px" }, .5)
                 .addTo(controller);

             var swiper = new Swiper(".mySwiper", {
                 slidesPerView: 1,         // 每次顯示一個 slide
                 spaceBetween: 30,         // Slide 之間的間距
                 slidesPerGroup: 1,        // 每次滑動一個 slide
                 centeredSlides: true,     // 當前 slide 居中
                 watchSlidesProgress: true,
                 watchSlidesVisibility: true,
                 shortSwipes: true,        // 短滑動也會切換 slide
                 pagination: {
                     el: ".swiper-pagination",
                     clickable: true,
                 },
                 navigation: {
                     nextEl: '.swiper-button-next',
                     prevEl: '.swiper-button-prev',
                 },
                 touchReleaseOnEdges: false,
                 touchRatio: 1,
             });

             $("#overview .container a").click(function() {
                    isScrollEventEnabled = false; 
                    $(this).addClass("active");
                    $(this).parent().siblings().find('a').removeClass("active");

                    var name = $(this).attr('href');
                    var id = name;
                    var top = $(id).first().offset().top - 100; 

                    $('html, body').animate({ scrollTop: top + 10 }, 300, function() {
                       isScrollEventEnabled = true; 
                    });
                });
         }

     })

     // 閃光燈動畫函數
     function flashlight() {
         var tl = new TimelineMax({
             repeat: 0,
         });
         tl.to('#flashlight .button', 5, {
                 transform: "translateX(3px) translateY(1px)",
                 ease: Power2.easeOut,
             })
             .to('#flashlight .button', 5, {
                 transform: "translateX(0px)",
                 ease: Power2.easeOut,
             })
             .to('#flashlight .button', 5, {
                 transform: "translateX(3px) translateY(1px)",
                 ease: Power2.easeOut,
             })
             .to('#flashlight .button', 5, {
                 transform: "translateX(0px)",
                 ease: Power2.easeOut,
             })
             .to('#flashlight .light', 10, {
                 opacity: 0.7,
                 ease: Power2.easeOut,
             });

         return tl;
     }

     var controller = new ScrollMagic.Controller();

     


     // Battery accordion handled in src/js/interactions.js
  });

 document.addEventListener('DOMContentLoaded', function() {
     const items = document.querySelectorAll('#overview .item');

     items.forEach(item => {
         item.addEventListener('mouseenter', () => {
             items.forEach(i => {
                 if (i !== item) {
                     i.classList.add('inactive');
                 }
             });
             item.classList.add('active');
         });

         item.addEventListener('mouseleave', () => {
             items.forEach(i => {
                 i.classList.remove('inactive');
                 i.classList.remove('active');
             });
         });
     });
 });