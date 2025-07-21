jQuery(function ($) {
  $(".hm_project__list").slick({
    infinite: true,
    slidesToShow: 2,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 2000,
      autoplaySpeed: 2000,
    dots: false,
     autoplay: true,
    pauseOnHover: true,
    cssEase: "ease-in-out",
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

