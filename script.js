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
  const slider = document.querySelector('.slider-implementation');
  const dots = document.querySelector('.dots-implementation');

  // add dots
  console.log(slider.children);
  Array.from(slider.children).forEach(() => {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    dot.innerHTML = '&nbsp;';
    dots.appendChild(dot);
  });
  dots.firstChild.classList.add('slider-dot-active');
})();
