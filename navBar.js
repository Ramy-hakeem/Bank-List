export default function navBar() {
  // VARIABLES
  const tabsContainer = document.querySelector(`.operations__tab-container`);
  const tabs = document.querySelectorAll(`.operations__tab`);
  const tabsContent = document.querySelectorAll(`.operations__content`);
  const header = document.querySelector(`.header`);
  const nav = document.querySelector(`.nav`);

  // FUNCTIONS
  function handleHover(e) {
    if (e.target.classList.contains(`nav__link`)) {
      const link = e.target;
      const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
      const logo = link.closest(`.nav`).querySelector(`img`);
      [...siblings, logo].forEach(el => {
        if (el !== link) el.style.opacity = this;
      });
    }
  }
  function stickyNav(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      nav.classList.add(`sticky`);
    } else {
      nav.classList.remove(`sticky`);
    }
  }

  // EVENTS
  document.querySelector(`.nav__links`).addEventListener(`click`, e => {
    e.preventDefault();
    if (e.target.classList.contains(`nav__link`)) {
      const id = e.target.getAttribute(`href`);
      document.querySelector(id).scrollIntoView({ behavior: `smooth` });
    }
  });
  tabsContainer.addEventListener(`click`, e => {
    const clicked = e.target.closest(`.operations__tab`);
    if (clicked) {
      tabs.forEach(tab => {
        tab.classList.remove(`operations__tab--active`);
      });
      clicked.classList.add(`operations__tab--active`);
      tabsContent.forEach(content => {
        content.classList.remove(`operations__content--active`);
      });
      document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add(`operations__content--active`);
    }
    return;
  });
  // nav links fade and unfade on hover
  nav.addEventListener(`mouseover`, handleHover.bind(0.5));
  nav.addEventListener(`mouseout`, handleHover.bind(1));

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: -nav.getBoundingClientRect().height + 'px',
  });
  headerObserver.observe(header);
}
