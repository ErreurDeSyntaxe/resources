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
    const btnLeft = accordion.querySelector('.slider-btn--left');
    const btnRight = accordion.querySelector('.slider-btn--right');
    let activeImage = 0;

    imgs.forEach((img, index) => {
      // add as many dots as there are images
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      dot.innerHTML = '&nbsp;';
      dot.setAttribute('data-index', `${index}`);
      dots.appendChild(dot);

      // hide images to the side for the carousel
      img.style.transform = `translateX(${index * 100}%)`;
      img.style.opacity = '0';
      img.style.transition = 'all 400ms';
    });
    imgs[activeImage].style.opacity = '1';
    dots.firstElementChild.classList.add('slider-dot-active');

    // image slider (carousel) functionality
    const darkenDot = function (targetIndex) {
      console.log(dots.children);
      console.log(dots);
      Array.from(dots.children).forEach((dot, index) => {
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
  });
})();
