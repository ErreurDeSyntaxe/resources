'use strict';

// console.log('Hello, World!');
// const body = document.querySelector('body');
// const smallIcon = document.createElement('img');

// smallIcon.src = './img/odin-logo.svg';

// body.appendChild(smallIcon);

/*
 *
 * Accordion Buttons: Drop down (& put away) the image carousel
 *
 */
(function activateAccordionButton() {
  const buttons = Array.from(document.querySelectorAll('.accordion-button'));
  const icons = Array.from(document.querySelectorAll('.accordion-icon'));
  const contents = Array.from(document.querySelectorAll('.accordion-content'));

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if (icons[i].classList.contains('rotated'))
        icons[i].style.transform = 'rotate(0deg)';
      else {
        icons[i].style.transform = 'rotate(180deg)';
      }
      icons[i].classList.toggle('rotated');
      contents[i].classList.toggle('accordion--active');
    });
  }
})();

/*
 *
 * Carousel Buttons: Slide images & reflect changes on bottom dots
 *
 */
(function activateSliderButtons() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion) => {
    const slider = accordion.querySelector('.slider-images');
    const imgs = slider.querySelectorAll('img');
    const dots = accordion.querySelector('.slider-dots');

    // add as many dots as there are images
    imgs.forEach(() => {
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      dot.innerHTML = '&nbsp;';
      dots.appendChild(dot);
    });
    dots.firstElementChild.classList.add('slider-dot-active');

    // add listener to buttons
    const btnLeft = accordion.querySelector('.slider-btn--left');
    const btnRight = accordion.querySelector('.slider-btn--right');

    btnLeft.addEventListener('click', () => {
      console.log('go left!');
    });
    btnRight.addEventListener('click', () => {
      console.log('go right!');
    });
  });
})();
