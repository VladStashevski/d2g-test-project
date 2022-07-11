const swiper = new Swiper('.slider', {
  loop: true,
  grabCursor: true,

  pagination: {
    el: '.slider__pagination',
    bulletClass: 'slider__pagination-bullet',
    bulletActiveClass: 'slider__pagination-bullet--active',
    clickable: true,
  },

  navigation: {
    nextEl: '.slider__navigation--next',
    prevEl: '.slider__navigation--prev',
    disabledClass: 'slider__navigation--disabled',
    enabled: true,
  },
});
