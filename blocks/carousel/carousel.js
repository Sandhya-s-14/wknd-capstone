export default function decorate(block) {
  const slides = [...block.children];

  let index = 0; // moved to top

  const wrapper = document.createElement('div');
  wrapper.className = 'carousel-wrapper';

  const track = document.createElement('div');
  track.className = 'carousel-track';

  slides.forEach((row) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';

    [...row.children].forEach((div) => {
      if (div.querySelector('picture')) {
        div.className = 'carousel-image';
      } else {
        div.className = 'carousel-content';
      }
      slide.append(div);
    });

    track.append(slide);
  });

  const navWrapper = document.createElement('div');
  navWrapper.className = 'carousel-nav-wrapper';

  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'carousel-dots';

  const arrowsContainer = document.createElement('div');
  arrowsContainer.className = 'carousel-arrows';
  arrowsContainer.innerHTML = `
    <button class="carousel-btn prev">&#8592;</button>
    <button class="carousel-btn next">&#8594;</button>
  `;

  navWrapper.append(dotsContainer, arrowsContainer);
  wrapper.append(track, navWrapper);
  block.replaceChildren(wrapper);

  const totalSlides = slides.length;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;

    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'carousel-dot';

    if (i === 0) dot.classList.add('active');

    dot.addEventListener('click', () => {
      index = i;
      updateCarousel();
    });

    dotsContainer.append(dot);
  });

  navWrapper.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
  });

  navWrapper.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });
}
