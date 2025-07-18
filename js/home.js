jQuery(function ($) {
  $(".hm_project__list").slick({
    infinite: true,
    slidesToShow: 2,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 2000,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
