// CAROUSEL 1
$(".nav--carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  // responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

// CAROUSEL 2
$(".owl-carousel-opinion").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  // responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
