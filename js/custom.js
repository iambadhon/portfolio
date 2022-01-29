$(function () {
  //=====================scroll top start=====================//
  $(".scroll_top").click(function () {
    $("html,css").animate({
      scrollTop: 0,
    }, 00);
  });

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop()

    if (scrolling > 100) {
      $(".scroll_top").fadeIn(800);
    } else {
      $(".scroll_top").fadeOut(800);
    }

    if (scrolling > 100) {
      $(".main_nav").addClass("nav_sticky");
    } else {
      $(".main_nav").removeClass("nav_sticky");
    }
  });
  //=====================scroll top end=====================//

  //=====================typed section start=====================//
  $(".typed").typed({
    strings: ["Front-end Developer.", "Designer.", "Freelancer. "],
    stringsElement: null,
    typeSpeed: 40,
    startDelay: 800,
    backSpeed: 40,
    backDelay: 1000,
    loop: true,
    // loopCount: 5,
    showCursor: false,
    cursorChar: "|",
    attr: null,
    contentType: 'html',
  });
  //=====================typed section end=====================//

  //=====================skill section start=====================//
  $('svg.radial-progress').each(function (index, value) {
    $(this).find($('circle.complete')).removeAttr('style');
  });

  $(window).scroll(function () {
    $('svg.radial-progress').each(function (index, value) {
      if (
        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
      ) {
        percent = $(value).data('percentage');
        radius = $(this).find($('circle.complete')).attr('r');
        circumference = 2 * Math.PI * radius;
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        $(this).find($('circle.complete')).animate({
          'stroke-dashoffset': strokeDashOffset
        }, 1250);
      }
    });
  }).trigger('scroll');
  //=====================skill sectiom end=====================//

  //=====================slick slider start=====================//
  $(".service_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    prevArrow: ".service_prev_arrow",
    nextArrow: ".service_next_arrow",
    centerMode: true,
    centerPadding: "0",
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.testimonial_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".testimonial_prev",
    nextArrow: '.testimonial_next',
    autoplay: true,
    autoplaySpeed: 4000,
  });
  //=====================slick slider start=====================//

  //=====================lightbox start=====================//
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': true,
    'showImageNumberLabel': false,
    'positionFromTop': 70,
  })
  //=====================lightbox end=====================//

  //=====================counterup start=====================//
  $('.counter').counterUp({
    delay: 80,
    time: 1500,
  });
  //=====================counterup end=====================//

  //=====================smooth scroll start=====================//
  var html_body = $("html, body");
  $("nav a").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        html_body.animate({
            scrollTop: target.offset().top - 0,
          },
          00
        );
        return false;
      }
    }
  });
  //=====================smooth scroll end=====================//

});