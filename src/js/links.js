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
const resourcesIcons = [
  {
    img: {
      src: './src/img/logos/ionicons.png',
      alt: 'Ion Icons logo',
    },
    link: {
      ref: 'https://ionic.io/ionicons',
      text: 'Ion',
      desc: 'Open Source Icon Set',
    },
  },
  {
    img: {
      src: './src/img/logos/feathers.svg',
      alt: 'Feathers Icons logo',
    },
    link: {
      ref: 'https://feathericons.com/',
      text: 'Feathers',
      desc: 'Customizable Icon Set',
    },
  },
  {
    img: {
      src: './src/img/logos/pictogrammers.svg',
      alt: 'Pictogrammers Icons logo',
    },
    link: {
      ref: 'https://pictogrammers.com/library/mdi/',
      text: 'Pictogrammers',
      desc: 'Extensive Icon Set',
    },
  },
  {
    img: {
      src: './src/img/logos/google-fonts.svg',
      alt: 'Google Fonts logo',
    },
    link: {
      ref: 'https://pictogrammers.com/library/mdi/',
      text: 'Google',
      desc: 'Extensive Icon Set',
    },
  },
  {
    img: {
      src: './src/img/logos/phosphor.png',
      alt: 'Phosphor Icons logo',
    },
    link: {
      ref: 'https://phosphoricons.com/',
      text: 'Phosphor',
      desc: 'Customizable Icon Set',
    },
  },
  {
    img: {
      src: './src/img/logos/heroicons.png',
      alt: 'Hero Icons logo',
    },
    link: {
      ref: 'https://heroicons.com/',
      text: 'Hero',
      desc: 'Simple Icon Set',
    },
  },
];
const resourcesImages = [
  {
    img: {
      src: './src/img/logos/unsplash.svg',
      alt: 'Unsplash logo',
    },
    link: {
      ref: 'https://unsplash.com/',
      text: 'Unsplash',
      desc: 'Royalty-Free Images',
    },
  },
  {
    img: {
      src: './src/img/logos/pexels.ico',
      alt: 'Pexels logo',
    },
    link: {
      ref: 'https://pexels.com/',
      text: 'Pexels',
      desc: 'Royalty-Free Images',
    },
  },
  {
    img: {
      src: './src/img/logos/pixabay.png',
      alt: 'Pixabay logo',
    },
    link: {
      ref: 'https://pixabay.com/',
      text: 'Pixabay',
      desc: 'Royalty-Free Images',
    },
  },
  {
    img: {
      src: './src/img/logos/undraw.png',
      alt: 'Undraw logo',
    },
    link: {
      ref: 'https://undraw.co/illustrations/',
      text: 'Undraw',
      desc: 'Royalty-Free Images',
    },
  },
  {
    img: {
      src: './src/img/logos/uifaces.png',
      alt: 'UI Faces logo',
    },
    link: {
      ref: 'https://uifaces.co/',
      text: 'UI Faces',
      desc: 'AI-Generated Profiles',
    },
  },
  {
    img: {
      src: './src/img/logos/userGenerator.png',
      alt: 'User Generator logo',
    },
    link: {
      ref: 'https://randomuser.me/',
      text: 'Random User',
      desc: 'User Generator',
    },
  },
  {
    img: {
      src: './src/img/logos/coverr.png',
      alt: 'Coverr logo',
    },
    link: {
      ref: 'https://coverr.co/',
      text: 'Coverr',
      desc: 'Royalty-Free Videos',
    },
  },
  {
    img: {
      src: './src/img/logos/drawkit.png',
      alt: 'Draw Kit logo',
    },
    link: {
      ref: 'https://drawkit.com/',
      text: 'Draw Kit',
      desc: 'Royalty-Free Illustrations',
    },
  },
  {
    img: {
      src: './src/img/logos/squoosh.ico',
      alt: 'Squoosh logo',
    },
    link: {
      ref: 'https://squoosh.app/',
      text: 'Squoosh',
      desc: 'Image Compressor',
    },
  },
  {
    img: {
      src: './src/img/logos/photoroom.png',
      alt: 'Photoroom logo',
    },
    link: {
      ref: 'https://photoroom.com/tools/background-remover/',
      text: 'Photoroom',
      desc: 'Background Remover',
    },
  },
];
const resourcesGit = [
  {
    img: {
      src: './src/img/logos/learnGit.ico',
      alt: 'Learn Git logo',
    },
    link: {
      ref: 'https://learngitbranching.js.org/',
      text: 'Learn Git Branching',
      desc: 'Branching Practice Website',
    },
  },
];
const resourcesSoftware = [
  {
    img: {
      src: './src/img/logos/odin.svg',
      alt: 'The Odin Project logo',
    },
    link: {
      ref: 'https://www.theodinproject.com/lessons/foundations-setting-up-git/',
      text: 'Git Setup',
      desc: 'Git Setup Guide',
    },
  },
  {
    img: {
      src: './src/img/logos/homebrew.ico',
      alt: 'Homebrew logo',
    },
    link: {
      ref: 'https://docs.brew.sh/Installation#macos-requirements/',
      text: 'Git Setup',
      desc: 'Git Setup Guide',
    },
  },
  {
    img: {
      src: './src/img/logos/google.png',
      alt: 'Homebrew logo',
    },
    link: {
      ref: 'https://www.google.com/chrome/',
      text: 'Google Chrome',
      desc: 'Most Popular Browser',
    },
  },
  {
    img: {
      src: './src/img/logos/firefox.png',
      alt: 'Homebrew logo',
    },
    link: {
      ref: 'https://www.mozilla.org/en-US/firefox/mac/',
      text: 'Mozilla Firefox',
      desc: 'Has-Been Browser',
    },
  },
  {
    img: {
      src: './src/img/logos/vscode.ico',
      alt: 'VS Code logo',
    },
    link: {
      ref: 'https://code.visualstudio.com/download/',
      text: 'VS Code',
      desc: 'Most Popular IDE',
    },
  },
  {
    img: {
      src: './src/img/logos/Xcode.jpg',
      alt: 'X Code logo',
    },
    link: {
      ref: 'https://apps.apple.com/us/app/xcode/id497799835?mt=12/',
      text: 'VS Code',
      desc: 'Most Popular IDE',
    },
  },
  {
    img: {
      src: './src/img/logos/rectangle.png',
      alt: 'Rectangle logo',
    },
    link: {
      ref: 'https://rectangleapp.com/',
      text: 'Rectangle',
      desc: 'Window Management App',
    },
  },
  {
    img: {
      src: './src/img/logos/alt-tab.png',
      alt: 'Atl-Tab logo',
    },
    link: {
      ref: 'https://alt-tab-macos.netlify.app/',
      text: 'Alt-Tab',
      desc: 'Window Management App',
    },
  },
  {
    img: {
      src: './src/img/logos/cheatsheet.png',
      alt: 'Cheat Sheet logo',
    },
    link: {
      ref: 'https://cheatsheet-mac.en.softonic.com/mac/',
      text: 'Cheat Sheet',
      desc: 'Shortcut Tool App',
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
populate(resourcesIcons, 'icons');
populate(resourcesImages, 'images');
populate(resourcesGit, 'git');
populate(resourcesSoftware, 'software');