// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 0,
  slideToClickedSlide: true,
  grabCursor: true,
  autoHeight: true,
  speed: 500,

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    slideShadows: false,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
