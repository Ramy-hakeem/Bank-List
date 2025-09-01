'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Page Navigation
document.querySelector(`.nav__links`).addEventListener(`click`, e => {
  e.preventDefault();
  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});

// const tabContainer = document.querySelector(`.operations__tab-container`);
// tabContainer.addEventListener(`click`, e => {
//   e.preventDefault();
//   if (e.target.classList.contains(`operations__tab`)) {
//     [...tabContainer.children].forEach(element => {
//       element.classList.remove(`operations__tab--active`);
//     });
//     e.target.classList.add(`operations__tab--active`);
//     [...tabContainer.nextElementSibling.children].forEach(ele => {
//       ele.classList.remove(`operations__content--active`);
//       console.log(e.target.dataset.tab);
//       ele.classList.contains(`operations__content--${e.target.dataset.tab}`) &&
//         ele.classList.add(`operations__content--active`);
//     });
//   }
// });
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContent = document.querySelectorAll(`.operations__content`);
tabsContainer.addEventListener(`click`, e => {
  const clicked = e.target.closest(`.operations__tab`);
  console.log(clicked);
  console.log(tabs);
  if (clicked) {
    tabs.forEach(element => {
      element.classList.remove(`operations__tab--active`);
    });
    clicked.classList.add(`operations__tab--active`);
  }
});
