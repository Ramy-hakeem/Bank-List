export default function revealEvent() {
  // VARIABLES
  const allSections = document.querySelectorAll('.section');
  const imgTargets = document.querySelectorAll(`img[data-src]`);

  // FUNCTIONS
  function revelSection(entries, observer) {
    entries.forEach(entry => {
      console.log(entry.isIntersecting);
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    });
  }
  function loadImg(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    // replace src with data-src
    entry.target.src = entry.target.dataset.src;
    const loadEnvent = entry.target.addEventListener('load', e => {
      entry.target.classList.remove('lazy-img');
    });
    removeEventListener('load', loadEnvent);
    observer.unobserve(entry.target);
  }

  // HANDLE REVEALS SECTIONS
  const sectionObserver = new IntersectionObserver(revelSection, {
    root: null,
    threshold: 0.15,
  });
  allSections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
  });
  // LAZY LOADING THE IMAGES
  const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: `30px`,
  });
  imgTargets.forEach(img => imgObserver.observe(img));
}
