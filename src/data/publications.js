const IMAGES = `assets/images/publications`

let publications = [
  {
    title: 'How I switched careers and got a developer job in 10 months, a true story',
    subtitle: 'This is how I career changed to front-end development at 40, starting with no relevant background experience or degree. Using only self-directed study while working full-time and spending next to nothing.',
    image: {
        src: `${IMAGES}/how-i-got.jpeg`,
        alt: 'A warm Light bulb and a notepad',
    },
    web_link: `https://medium.com/free-code-camp/how-i-switched-careers-and-got-a-developer-job-in-10-months-a-true-story-b8895e855a8b`,
  },
  {
    title: 'The tools and resources that landed me a front-end developer job',
    subtitle: 'Learning front-end development can be a bit overwhelming at times. There are so many resources and tools, and so little time. What should you pick? And what should you focus on?',
    image: {
        src: `${IMAGES}/tools-resources.jpeg`,
        alt: 'An open book',
    },
    web_link: `https://medium.com/free-code-camp/the-tools-and-resources-that-landed-me-a-front-end-developer-job-1314c6f1fa7f`,
  },
  {
    title: 'What in the world is a JavaScript array?',
    subtitle: "A beginner's introduction to JavaScript arrays and data structures. It covers why we need them, and how they fit into the front-end context.",
    image: {
        src: `${IMAGES}/array.jpg`,
        alt: 'A stack of colourful books',
    },
    web_link: `https://www.freecodecamp.org/news/what-in-the-world-is-a-javascript-array/`,
  },
  {
    title: 'What in the world is a JavaScript loop?',
    subtitle: "A beginner's introduction to JavaScript loops. We'll go over why we need them, and how they fit into the front-end context. It’s a bird's eye view of accessing data and doing things to it, covering fundamental every-day concepts for a front-end developer.",
    image: {
        src: `${IMAGES}/loops.jpg`,
        alt: 'Two pencils with a bright yellow background',
    },
    web_link: `https://medium.com/free-code-camp/how-i-switched-careers-and-got-a-developer-job-in-10-months-a-true-story-b8895e855a8b`,
  },
]

export default publications