'use strict';

// Инициализируем Swiper
const swiper = new Swiper('.swiper', {
  // effect: 'flip',
  // flipEffect: {
  //   slideShadows: false,
  // },
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
  loop: true,
});

const headerListItems = document.querySelectorAll('.header-list__item');

const addActiveClass = () => {
  
  headerListItems.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
      item.classList.toggle('header-list__item-active');
    })
    item.addEventListener('mouseout', () => {
      item.classList.toggle('header-list__item-active');
    })
  })

}

addActiveClass();


// кнопка открытия окна
const modalOpen = document.querySelector('.modal__open');
// все полностью модальное окно
const modalWindow = document.querySelector('.modal');
// подложка модального окна
const modalOverlay = document.querySelector('.modal__overlay');
// модальное окно
const modaDialog = document.querySelector('.modal__dialog');
// кнопка закрытия окна
const modalClose = document.querySelector('.modal__close');

const openModalWindow = () => {

  modalOverlay.classList.remove('hidden');
  modaDialog.classList.remove('hidden');
  disableScroll();
}

const closeModalWindow = () => {

  modalOverlay.classList.add('hidden');
  modaDialog.classList.add('hidden');
  enableScroll();
  // e.preventDefault();
}

modalOpen.addEventListener('click', () => {

  openModalWindow();

})

modalWindow.addEventListener('click', (event) => {

  const target = event.target;

  if (target.classList.contains('modal__overlay') ||
      target.classList.contains('modal__close-img')) {
        closeModalWindow();
      }

})

// Это надо куда-то запихать, чтобы не скроллилось при закрытии
// modalClose.addEventListener('click', e => {
//   e.preventDefault();
// })


const disableScroll = () => {

  document.body.dataset.scrollY = window.scrollY;

  // вычисляю ширину скролла справа. ширину экрана отнимаю от ширины браузера
  // innerWidth - ширина экрана устройства
  // offsetWidth - ширина браузера
  const scrollWidth = window.innerWidth - document.body.offsetWidth;

  document.body.style.cssText = `
    position:fixed;
    top: -${window.scrollY}px;
    left:0;
    width:100%;
    overflow:100vh;
    padding-right: ${scrollWidth};
  `;

}

const enableScroll = () => {

  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dataset.scrollY
  })

}

// mobile menu
const mobileMenu = document.querySelector('.mobile-menu'),
      mobileMenuList = document.querySelector('.mobile-menu__list');

const toggleMenu = () => mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu__close');
  mobileMenuList.classList.toggle('mobile-menu__list-hidden');
})

toggleMenu();


// Form
// const form =  document.getElementById('form');
// const formButton = document.querySelector('.form-button');
// console.log('formButton: ', formButton);

// form.addEventListener('submit', formSend);

//   async function formSend(e) {
//     e.preventDefault();

//     let error = formValidate(form);

//     const formValidate = (form) => {

//       let error = 0;
//       let formReq = document.querySelectorAll('._req');

//       for (let index = 0; index < formReq.length; index++) {
//         const input = formReq[index];
        

        
//       }

//     }

//   }