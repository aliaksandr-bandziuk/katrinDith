'use strict';

// Инициализируем Swiper
const swiper = new Swiper('.swiper-container', {
  
  effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true
  },
  autoplay: {
    delay: 4000,
  },

});