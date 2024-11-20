'use strict';

// Array with section names
const designSections = [
  {
    section: 'Design Fundamentals',
    imgSrc: './src/img/design/aspects/aspectsRule',
    imgAlt: 'Font rules for good web design',
    imgCount: 1,
  },
  {
    section: 'Typography',
    imgSrc: './src/img/design/font/fontRule',
    imgAlt: 'XYZ rules for good web design',
    imgCount: 10,
  },
  {
    section: 'Colors',
    imgSrc: './src/img/design/colors/colorsRule',
    imgAlt: 'Color rules for good web design',
    imgCount: 6,
  },
  {
    section: 'Images',
    imgSrc: './src/img/design/images/imagesRule',
    imgAlt: 'Image rules for good web design',
    imgCount: 11,
  },
  {
    section: 'Icons',
    imgSrc: './src/img/design/icons/iconsRule',
    imgAlt: 'Icon rules for good web design',
    imgCount: 8,
  },
  {
    section: 'Box Shadow',
    imgSrc: './src/img/design/shadows/shadowsRule',
    imgAlt: 'Box Shadow rules for good web design',
    imgCount: 7,
  },
  {
    section: 'Border Radius',
    imgSrc: './src/img/design/radius/radiusRule',
    imgAlt: 'Border Radius rules for good web design',
    imgCount: 3,
  },
  {
    section: 'Whitespace',
    imgSrc: './src/img/design/whitespace/whitespaceRule',
    imgAlt: 'Whitespace rules for good web design',
    imgCount: 9,
  },
  {
    section: 'Visual Hierarchy',
    imgSrc: './src/img/design/hierarchy/hierarchyRule',
    imgAlt: 'Visual Hierarchy rules for good web design',
    imgCount: 15,
  },
  {
    section: 'User Experience',
    imgSrc: './src/img/design/UX/uxRule',
    imgAlt: 'User Experience rules for good web design',
    imgCount: 13,
  },
  {
    section: 'Components',
    imgSrc: './src/img/design/component/componentsRule',
    imgAlt: 'Component rules for good web design',
    imgCount: 8,
  },
  {
    section: 'Personality',
    imgSrc: './src/img/design/personalities/personalitiesRule',
    imgAlt: 'Personallity rules for good web design',
    imgCount: 16,
  },
];

/**
 * Build DOM dynamically
 * @param {Array} sections List of section names
 */
const buildSections = function (sections) {
  const container = document.querySelector('.accordions');
  const markup = sections.reduce((accu, curr, index) => {
    accu += `
      <div class="accordion">
        <div class="accordion-header">
          <span class="accordion-number">${index}</span>
          <span class="accordion-title">${curr.section}</span>
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
          <div class="slider-images design-${curr.section
            .toLowerCase()
            .replace(' ', '-')}">
            <img
              src="./src/img/design/font/fontRule1.jpg"
              alt="Font rules for good web design"
              class="slider-img slider--active"
            />
          </div>
          <div class="slider-dots"></div>
        </div>
      </div>`;

    return accu;
  }, '');
  container.insertAdjacentHTML('afterbegin', markup);
};
buildSections(designSections);

/**
 * Populate the sliders of each design image slider (accordion)
 * @param {Array} sections Sections info (img url, img count, ...)
 */
const populateSliders = function (sections) {
  sections.forEach((section) => {
    const container = document.querySelector(
      `.design-${section.section.toLowerCase().replace(' ', '-')}`
    );

    let markup = '';
    for (let i = 1; i <= section.imgCount; i++) {
      markup += `
        <img
          src="${section.imgSrc}${i}.jpg"
          alt="${section.imgAlt}"
          class="slider-img ${i === 0 ? 'slider--active' : ''}"
        />`;
    }
    container.insertAdjacentHTML('afterbegin', markup);
  });
};
populateSliders(designSections);

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
activateAccordionButton();

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
activateSliderButtons();
