const GITHUB = `https://github.com/Syknapse`
const SYKNAPSE = `https://syknapse.github.io`
const IMAGES = `assets/images`

const projects = [
  {
    key: 'pixel',
    title: 'Pixel Art Maker',
    subtitle: 'A web app to draw pixelated art',
    image: {
      src: `${IMAGES}/pixel.PNG`,
      alt: 'Screenshot of Pixel Art Maker',
    },
    highlights: [
      'Intuitive and simple to use',
      'Dynamically create grid',
      'Draw/erase by click or click and drag',
      'Final project for the Udacity Google Challenge scholarship',
    ],
    technologies: [
      'Javascript',
      'jQuery',
      'CSS'
    ],
    web_link: `${SYKNAPSE}/Pixel-art-maker`,
    github_link: `${GITHUB}/Pixel-art-maker`,
  },
  {
    key: 'contribute',
    title: 'Contribute To This Project',
    subtitle: 'A tutorial to help first-timers make their first open source contribution on GitHub',
    image: {
      src: `${IMAGES}/contribute.PNG`,
      alt: 'Screenshot of Contribute to this Project',
    },
    highlights: [
      'A self-initiated project to help fellow learners',
      'A Readme with a detailed step-by-step tutorial',
      'A live page where contributors see their contribution',
    ],
    technologies: [
      'GitHub',
      'Markdown',
      'PR management'
    ],
    web_link: `${SYKNAPSE}/Contribute-To-This-Project`,
    github_link: `${GITHUB}/Contribute-To-This-Project`,
  },
  {
    key: 'tycho',
    title: 'Tycho\'s Supernova',
    subtitle: 'Tribute to a star that changed the world',
    image: {
      src: `${IMAGES}/tycho.jpg`,
      alt: 'Screenshot of Tycho\'s Supernova',
    },
    highlights: [
      'Parallax effect',
      'Visual effects to aid the narrative',
      'An alternative mobile version',
    ],
    technologies: [
      'HTML',
      'CSS',
      'parallax'
    ],
    web_link: `${SYKNAPSE}/Tychos-Supernova`,
    github_link: `${GITHUB}/Tychos-Supernova`,
  },
  {
    key: 'background',
    title: 'Interactive portfolio',
    subtitle: 'An interactive page with personal background information',
    image: {
      src: `${IMAGES}/background.jpg`,
      alt: 'Project screenshot',
    },
    highlights: [
      'Fully responsive without libraries',
      'Interactive menu, highlights on select or scroll',
      'Waypoints that trigger animations and actions on scroll',
      'Grid design with central "screen" areas that display info on click',
    ],
    technologies: [
      'HTML5',
      'CSS3',
      'jQuery',
      'CSS grid/flex-box'
    ],
    web_link: `${SYKNAPSE}/syk-background`,
    github_link: `${GITHUB}/syk-background`,
  },
  {
    key: 'photoGrid',
    title: 'Dynamic Photo Grid',
    subtitle: 'A photo slide-show done with jQuery and CSS grid',
    image: {
      src: `${IMAGES}/photoGrid.jpg`,
      alt: 'Screenshot of photo grid',
    },
    highlights: [
      'A collaborative project using Github',
      'Multiple photo panels, dynamic movement',
      'Slide-show effects done only with jQuery and JavaScript',
    ],
    technologies: [
      'HTML',
      'CSS',
      'jQuery',
      'grid'
    ],
    web_link: `${SYKNAPSE}/Dynamic-Photo-Grid`,
    github_link: `${GITHUB}/Dynamic-Photo-Grid`,
  },
  {
    key: 'tempConv',
    title: 'Temperature converter',
    subtitle: 'A fully functional, responsive Celsius-Fahrenheit conversion app',
    image: {
      src: `${IMAGES}/tempConv.jpg`,
      alt: 'Screenshot of temperature converter',
    },
    highlights: [
      'Self-initiated and self-directed project',
      'Background image changes depending on the temperature',
      'Javascript logic converts to a single decimal, and limits input',
      'A reset button',
      'Responsive to any device size'
    ],
    technologies: [
      'CSS',
      'jQuery',
      'JavaScript'
    ],
    web_link: `${SYKNAPSE}/Celsius-Fahrenheit-Converter`,
    github_link: `${GITHUB}/Celsius-Fahrenheit-Converter`,
  },
  {
    key: 'patatap',
    title: 'Patatap clone',
    subtitle: 'A clone of patatap.com, pressing the letters on the keyboard produces sounds and animations',
    image: {
      src: `${IMAGES}/patatap.jpg`,
      alt: 'Screenshot of Patatap project',
    },
    highlights: [
      'Vanilla JS logic',
      'Uses Peper.js &amp; Howler.js',
      'Color changing circles and a sound for each keyboard letter',
      'Animated circles appear at a random location on the visible screen<',
    ],
    technologies: [
      'Javascript'
    ],
    web_link: `${SYKNAPSE}/Patatap-Clone`,
    github_link: `${GITHUB}/Patatap-Clone`,
  },
  {
    key: 'rgb-game',
    title: 'RGB Color Guessing Game',
    subtitle: 'Guess the color that corresponds to the RGB code. A fully playable colour guessing game',
    image: {
      src: `${IMAGES}/rgb.jpg`,
      alt: 'Screenshot of RGB game',
    },
    highlights: [
      'Vanilla js logic: randomly select an RGB code, generate random colors to choose from, recognise correct answer and change colors',
      'Easy and hard modes',
      'Reset and change colors options',
    ],
    technologies: [
      'Javascript'
    ],
    web_link: `${SYKNAPSE}/RGB-Color-Changing-Game`,
    github_link: `${GITHUB}/RGB-Color-Changing-Game`,
  },
  {
    key: 'responsive-grid',
    title: 'Responsive grid',
    subtitle: 'An experiment in using CSS grid to create highly responsive layouts with ease and flexibility',
    image: {
      src: `${IMAGES}/responsiveGrid.jpg`,
      alt: 'Screenshot of responsive grid project',
    },
    highlights: [
      'A self-initiated project to explore the possibilities of CSS3 grid',
      'A grid and flexbox design with three different responses to screen size',
      'A completely independent grid set-up for each screen size',
    ],
    technologies: [
      'CSS',
      'Grid'
    ],
    web_link: `${SYKNAPSE}/Dynamic-Grid`,
    github_link: `${GITHUB}/Dynamic-Grid`,
  },
  {
    key: 'todo',
    title: 'To-do List',
    subtitle: 'A to-do list that allows adding new items, crossing off, and deleting items',
    image: {
      src: `${IMAGES}/todo.jpg`,
      alt: 'Screenshot of to do list',
    },
    highlights: [
      'Grab information from user input dynamically',
      'Add this information to a list',
      'Show a hidden delete icon on hover',
      'Delete, cross off, and add item functions<',
    ],
    technologies: [
      'Javascript',
      'jQuery'
    ],
    web_link: `${SYKNAPSE}/To-Do-List`,
    github_link: `${GITHUB}/To-Do-List`,
  },
  {
    key: 'clock',
    title: 'Clock',
    subtitle: 'A working javascript clock with CSS design',
    image: {
      src: `${IMAGES}/clock.jpg`,
      alt: 'Screenshot of clock project',
    },
    highlights: [
      'JS ES6 features',
      'Analog-style hands using JS controlled CSS animations',
    ],
    technologies: [
      'Javascript',
      'ES6'
    ],
    web_link: `${SYKNAPSE}/Clock`,
    github_link: `${GITHUB}/Clock`,
  },
  {
    key: 'type-ahead',
    title: 'City/state search',
    subtitle: 'Type-ahead search by US city or state name, see population',
    image: {
      src: `${IMAGES}/typeAhead.jpg`,
      alt: 'Screenshot of type ahead',
    },
    highlights: [
      'An exercise in search functions',
      'Shows results as user types, highlighting typed letters',
      'Ajax, API, JSON',
      'Filter(), map(), Regex',
    ],
    technologies: [
      'Javascript',
      'ES6'
    ],
    web_link: `${SYKNAPSE}/Ajax-Type-Ahead`,
    github_link: `${GITHUB}/Ajax-Type-Ahead`,
  },
]

export default projects