export const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        arrows: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        arrows: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: true,
      },
    },
  ],
};
