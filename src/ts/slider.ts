const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".production__button--next",
    prevEl: ".production__button--prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 5
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    425: {
      slidesPerView: 2
    }
  }
});
