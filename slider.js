export default function slider() {
  //VARIABLES
  const slides = document.querySelectorAll('.slide');
  const rightSliderBtn = document.querySelector(`.slider__btn--right`);
  const leftSliderBtn = document.querySelector(`.slider__btn--left`);
  const dotContainer = document.querySelector(`.dots`);
  let currentSlide = 0;
  let maxSlide = slides.length - 1;

  // FUNCTIONS
  function createDots() {
    // adding the dots to the DOM
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        `beforeend`,
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });

    dotContainer.addEventListener('click', e => {
      const slideNo = e.target.getAttribute('data-slide');
      if (slideNo) {
        currentSlide = +slideNo;
        goToSlide(currentSlide);
      }
    });
  }
  function goToSlide(currentSlide) {
    const dots = document.querySelectorAll(`.dots__dot`);
    slides.forEach((slide, indx) => {
      // go to slide
      slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
      // active dots
      if (+dots[indx].dataset.slide === currentSlide) {
        dots[indx].classList.add('dots__dot--active');
      } else {
        dots[indx].classList.remove('dots__dot--active');
      }
    });
  }

  // EXECUTE THE CODE AND ENVENTS
  createDots();
  goToSlide(0);

  rightSliderBtn.addEventListener(`click`, () => {
    if (currentSlide >= maxSlide) return;
    currentSlide++;
    goToSlide(currentSlide);
  });
  leftSliderBtn.addEventListener(`click`, () => {
    if (currentSlide <= 0) return;
    currentSlide--;
    goToSlide(currentSlide);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') {
      if (currentSlide <= 0) return;
      currentSlide--;
      goToSlide(currentSlide);
    } else if (e.key === `ArrowRight`) {
      if (currentSlide >= maxSlide) return;
      currentSlide++;
      goToSlide(currentSlide);
    }
  });
}
