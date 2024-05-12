'use strict';

// console.log('Hello, World!');
// const body = document.querySelector('body');
// const smallIcon = document.createElement('img');

// smallIcon.src = './img/odin-logo.svg';

// body.appendChild(smallIcon);

(function activateButtons() {
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
