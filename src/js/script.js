'use strict';

// Arrays of resources with img and url info
const resourcesHTML = [
  {
    img: {
      src: './src/img/logos/w3c.ico',
      alt: 'W3C logo',
    },
    link: {
      ref: 'https://validator.w3.org/#validate_by_input',
      text: 'Validator',
      desc: 'HTML Tool to Spot Mistakes',
    },
  },
  {
    img: {
      src: './src/img/logos/css-tricks.svg',
      alt: 'CSS Tricks logo',
    },
    link: {
      ref: 'https://css-tricks.com/snippets/html/glyphs/',
      text: 'HTML Entities',
      desc: 'Special Characters List',
    },
  },
  {
    img: {
      src: './src/img/logos/CANiUSE.png',
      alt: 'Can I Use logo',
    },
    link: {
      ref: 'https://caniuse.com/',
      text: 'Can I Use?',
      desc: 'Browser Compatibility Chart',
    },
  },
];
const resourcesCSS = [
  {
    img: {
      src: './src/img/logos/css-cheatsheet.png',
      alt: 'CSS Cheatsheet logo',
    },
    link: {
      ref: 'https://htmlcheatsheet.com/css/',
      text: 'CSS Cheat Sheet',
      desc: 'CSS Generator',
    },
  },
  {
    img: {
      src: './src/img/logos/css-tricks.svg',
      alt: 'CSS Tricks logo',
    },
    link: {
      ref: 'https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/#using-picture',
      text: 'Responsive Images CSS',
      desc: 'Responsive Image Code',
    },
  },
  {
    img: {
      src: './src/img/logos/flex-malven.png',
      alt: "Malven's Flexbox logo",
    },
    link: {
      ref: 'https://flexbox.malven.co/',
      text: 'Flexbox',
      desc: 'Cheat Sheet',
    },
  },
  {
    img: {
      src: './src/img/logos/grid-malven.png',
      alt: "Malven's Grid logo",
    },
    link: {
      ref: 'https://grid.malven.co/',
      text: 'CSS Grid',
      desc: 'Cheat Sheet',
    },
  },
  {
    img: {
      src: './src/img/logos/CSSdiner.png',
      alt: 'CSS Diner logo',
    },
    link: {
      ref: 'https://flukeout.github.io/',
      text: 'Selectors',
      desc: 'Gamified Selector Practice',
    },
  },
  {
    img: {
      src: './src/img/logos/frog-green.svg',
      alt: 'Flexbox Froggy logo',
    },
    link: {
      ref: 'https://flexboxfroggy.com/',
      text: 'Flex Froggy',
      desc: 'Gamified Flexbox Practice',
    },
  },
  {
    img: {
      src: './src/img/logos/carrots.svg',
      alt: 'CSS Grid Garden logo',
    },
    link: {
      ref: 'https://cssgridgarden.com/',
      text: 'Grid Garden',
      desc: 'Gamified Grid Practice',
    },
  },
  {
    img: {
      src: './src/img/logos/css-tricks.svg',
      alt: 'CSS Tricks logo',
    },
    link: {
      ref: 'https://css-tricks.com/',
      text: 'CSS Tricks',
      desc: 'Overall CSS Masters',
    },
  },
  {
    img: {
      src: './src/img/logos/css-layout.png',
      alt: 'CSS Layout logo',
    },
    link: {
      ref: 'https://learnlayout.com/',
      text: 'float: right or wrong?',
      desc: 'Stone Age Layout',
    },
  },
];
const resourcesJS = [
  {
    img: {
      src: './src/img/logos/jstutorial.png',
      alt: 'JavaScript Tutorial logo',
    },
    link: {
      ref: 'https://www.javascripttutorial.net/javascript-dom/',
      text: 'DOM Manipulation',
      desc: 'A JavaScript Tutorial',
    },
  },
  {
    img: {
      src: './src/img/logos/jquery.ico',
      alt: 'jQuert logo',
    },
    link: {
      ref: 'https://youmightnotneedjquery.com/',
      text: 'You Might Not Need jQuery',
      desc: 'A list of ways to avoid jQuery',
    },
  },
  {
    img: {
      src: './src/img/logos/github.svg',
      alt: 'GitHub logo',
    },
    link: {
      ref: 'https://github.com/airbnb/javascript',
      text: 'Air BnB',
      desc: 'A Respected JavaScript Guide',
    },
  },
  {
    img: {
      src: './src/img/logos/github.svg',
      alt: 'GitHub logo',
    },
    link: {
      ref: 'https://github.com/rwaldron/idiomatic.js',
      text: 'Idiomatic JS',
      desc: 'Another JavaScript Guide',
    },
  },
  {
    img: {
      src: './src/img/logos/dev-logo.png',
      alt: 'DEV logo',
    },
    link: {
      ref: 'https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769',
      text: 'Array Methods',
      desc: 'Array Methods Cheat Sheet',
    },
  },
  {
    img: {
      src: './src/img/logos/webpack.ico',
      alt: 'Webpack logo',
    },
    link: {
      ref: 'https://webpack.js.org/guides/getting-started/',
      text: 'Webpack',
      desc: 'A Guide on Pulling Your Own Teeth',
    },
  },
  {
    img: {
      src: './src/img/logos/build-outline.svg',
      alt: 'Wrench logo',
    },
    link: {
      ref: 'https://www.ayweb.dev/blog/building-a-house-from-the-inside-out',
      text: 'Building a House',
      desc: 'A Guide on Approchaing Problem Solving',
    },
  },
];
const resourcesFonts = [
  {
    img: {
      src: './src/img/logos/google-fonts.svg',
      alt: 'JavaScript Tutorial logo',
    },
    link: {
      ref: 'https://fonts.google.com/',
      text: 'Google Fonts',
      desc: 'Font Library',
    },
  },
  {
    img: {
      src: './src/img/logos/squirrel.png',
      alt: 'Font Squirrel logo',
    },
    link: {
      ref: 'https://fonts.google.com/',
      text: 'Font Squirrel',
      desc: 'Font Library',
    },
  },
  {
    img: {
      src: './src/img/logos/creative.svg',
      alt: 'Creative Blog logo',
    },
    link: {
      ref: 'https://www.creativebloq.com/graphic-design-tips/best-free-fonts-for-designers-1233380',
      text: 'Top 100',
      desc: 'Best Free Fonts Article',
    },
  },
  {
    img: {
      src: './src/img/logos/typescale.svg',
      alt: 'Type Scale logo',
    },
    link: {
      ref: 'https://typescale.com/',
      text: 'Type Scale',
      desc: 'Font Size Scaling Tool',
    },
  },
  {
    img: {
      src: './src/img/logos/word-counter.ico',
      alt: 'Word Counter logo',
    },
    link: {
      ref: 'https://wordcounter.net/character-count',
      text: '75 Characters Per Line',
      desc: 'Character Counter',
    },
  },
];
const resourcesColors = [
  {
    img: {
      src: './src/img/logos/open-colors.ico',
      alt: 'Open Colors logo',
    },
    link: {
      ref: 'https://fonts.google.com/',
      text: 'Open Colors',
      desc: 'Open Source Color Scheme',
    },
  },
  {
    img: {
      src: './src/img/logos/tailwind.png',
      alt: 'Tailwind logo',
    },
    link: {
      ref: 'https://tailwindcss.com/docs/customizing-colors',
      text: 'Tailwind',
      desc: 'Tailwind Color Scheme',
    },
  },
  {
    img: {
      src: './src/img/logos/color-hunt.svg',
      alt: 'Color Hunt logo',
    },
    link: {
      ref: 'https://www.colorhunt.co/',
      text: 'Color Hunt',
      desc: 'Color Palette Tool',
    },
  },
  {
    img: {
      src: './src/img/logos/tintsAndShades.png',
      alt: 'Tints and Shades logo',
    },
    link: {
      ref: 'https://maketintsandshades.com/',
      text: 'Make Tints & Shades',
      desc: 'Tints & Shades Tool',
    },
  },
  {
    img: {
      src: './src/img/logos/coolors.png',
      alt: 'Coolors logo',
    },
    link: {
      ref: 'https://coolors.co/',
      text: 'Coolors',
      desc: 'Swiss Army Knife of Colors',
    },
  },
];

/**
 * Dynamically populate the DOM
 * @param {Array} arr Objects containing resource info (img src, img alt, href)
 * @param {String} section Identifier of target div
 */
const populate = function (arr, section) {
  const container = document.querySelector(`.resource-${section}`);
  const markup = arr.reduce(
    (accu, curr) =>
      (accu += `
      <div class="resource">
        <img
          src="${curr.img.src}"
          alt="${curr.img.alt}"
          class="resource-logo"
        />
        <p>
          <a
            href="${curr.link.ref}"
            class="resource-link"
            >${curr.link.text}</a
          >
        </p>
        <p class="resource-description">${curr.link.desc}</p>
      </div>`),
    ''
  );
  container.insertAdjacentHTML('beforeend', markup);
};
populate(resourcesHTML, 'html');
populate(resourcesCSS, 'css');
populate(resourcesJS, 'js');
populate(resourcesFonts, 'fonts');
populate(resourcesColors, 'colors');

/**
 * Accordion Buttons: Drop down (& put away) the image carousel
 */
(function activateAccordionButton() {
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
})();

/**
 * Carousel Buttons: Slide images & reflect changes on bottom dots
 */
(function activateSliderButtons() {
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
})();
