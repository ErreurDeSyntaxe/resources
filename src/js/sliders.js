'use strict';

// Array with section names
const designSections = [
  'Design Fundamentals',
  'Typography',
  'Colors',
  'Images',
  'Icons',
  'Box Shadow',
  'Border Radius',
  'Whitespace',
  'Visual Hierarchy',
  'User Experience',
  'Components',
];

const buildSections = function (sections) {
  const container = document.querySelector('.accordions');
  // const markup = sections.reduce(() => 'help');
  const markup = sections.reduce(
    (accu, curr, index) =>
      (accu += `
        <div class="accordion">
          <div class="accordion-header">
            <span class="accordion-number">${index + 1}</span>
            <span class="accordion-title">${curr}</span>
            <div class="accordion-button">
              <ion-icon
                name="chevron-down-outline"
                class="accordion-icon"
              ></ion-icon>
            </div>
          </div>

          <div class="accordion-content">
            <button class="slider-btn slider-btn--left">
              <ion-icon
                name="chevron-back-circle-outline"
                class="slider-btn-icon btn-icon-left"
              ></ion-icon>
            </button>
            <button class="slider-btn slider-btn--right">
              <ion-icon
                name="arrow-forward-circle-outline"
                class="slider-btn-icon btn-icon-right"
              ></ion-icon>
            </button>
            <div class="slider-images design-${curr}"></div>
            <div class="slider-dots"></div>
          </div>
        </div>`),
    ''
  );
  container.insertAdjacentHTML('afterbegin', markup);
};
buildSections(designSections);

/**
 * Accordion Buttons: Drop down (& put away) the image carousel
 */
const activateAccordionButton = function () {
  // Make the whole header have the drop down & pull up functionality
  const buttons = Array.from(document.querySelectorAll('.accordion-header'));
  const icons = Array.from(document.querySelectorAll('.accordion-icon'));
  const contents = Array.from(document.querySelectorAll('.accordion-content'));

  // add listeners to each button. not the best.
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if (icons[i].classList.contains('rotated'))
        icons[i].style.transform = 'rotate(0deg)';
      else {
        icons[i].style.transform = 'rotate(180deg)';
      }
      icons[i].classList.toggle('rotated'); // rotates the chevron icon
      contents[i].classList.toggle('accordion--active'); // displays/hides the imgs
      buttons[i].closest('.accordion').classList.toggle('accordion--deployed'); // enlarges/shrinks the imgs
    });
  }
};
// activateAccordionButton();

/**
 * Carousel Buttons: Slide images & reflect changes on bottom dots
 */
const activateSliderButtons = function () {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion) => {
    const slider = accordion.querySelector('.slider-images');
    const imgs = slider.querySelectorAll('img');
    const dotsContainer = accordion.querySelector('.slider-dots');
    const btnLeft = accordion.querySelector('.slider-btn--left');
    const btnRight = accordion.querySelector('.slider-btn--right');
    let activeImage = 0;

    imgs.forEach((img, index) => {
      // remove the left/right arrow button if only one image
      if (imgs.length === 1) {
        btnLeft.remove();
        btnRight.remove();
      }
      // add as many dots as there are images
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      dot.innerHTML = '&nbsp;';
      dot.setAttribute('data-index', `${index}`);
      dotsContainer.appendChild(dot);

      // hide images to the side for the carousel
      img.style.transform = `translateX(${index * 100}%)`;
      img.style.opacity = '0';
      img.style.transition = 'all 400ms';
    });
    imgs[activeImage].style.opacity = '1';
    dotsContainer.firstElementChild.classList.add('slider-dot-active');

    // image slider (carousel) functionality
    const darkenDot = function (targetIndex) {
      Array.from(dotsContainer.children).forEach((dot, index) => {
        dot.classList.remove('slider-dot-active');
        if (index === targetIndex) dot.classList.add('slider-dot-active');
      });
    };
    const slideImage = function () {
      imgs.forEach((img, index) => {
        img.style.transform = `translateX(${(index - activeImage) * 100}%)`;
        img.style.opacity = '1';
      });
      darkenDot(activeImage);
    };

    // slide images left or right
    btnLeft.addEventListener('click', () => {
      activeImage--;
      if (activeImage < 0) activeImage = imgs.length - 1;
      slideImage();
    });
    btnRight.addEventListener('click', () => {
      activeImage++;
      if (activeImage >= imgs.length) activeImage = 0;
      slideImage();
    });
    // slide to a target image through the dots
    dotsContainer.addEventListener('click', (e) => {
      activeImage = e.target.dataset.index;
      slideImage();
    });
  });
};
// activateSliderButtons();