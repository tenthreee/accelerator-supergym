// Swiper 7.4.1
import './vendor/swiper';

const coachSwiper = new Swiper('.coaches__wrapper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.coaches__control--next',
    prevEl: '.coaches__control--prev',
  },
});

const reviewSwiper = new Swiper('.reviews__wrapper', {
  loop: false,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__control--next',
    prevEl: '.reviews__control--prev',
  },
});
