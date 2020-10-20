const IMAGES = `assets/images/publications`;

let publications = [
  {
    title:
      "How I switched careers and got a developer job in 10 months, a true story",
    subtitle:
      "This is how I career changed to front-end development at 40, starting with no relevant background experience or degree. Using only self-directed study while working full-time and spending next to nothing.",
    image: {
      src: `${IMAGES}/how-i-got.jpeg`,
      alt: "A warm Light bulb and a notepad",
    },
    web_link: `https://medium.com/free-code-camp/how-i-switched-careers-and-got-a-developer-job-in-10-months-a-true-story-b8895e855a8b`,
  },
  {
    title: "The tools and resources that landed me a front-end developer job",
    subtitle:
      "Learning front-end development can be a bit overwhelming at times. There are so many resources and tools, and so little time. What should you pick? And what should you focus on?",
    image: {
      src: `${IMAGES}/tools-resources.jpeg`,
      alt: "An open book",
    },
    web_link: `https://medium.com/free-code-camp/the-tools-and-resources-that-landed-me-a-front-end-developer-job-1314c6f1fa7f`,
  },
  {
    title: "The 10 misconceptions about becoming a programmer",
    subtitle:
      "Do you have what it takes to become a programmer? Chances are, you will base your answer on a bunch of untrue stereotypes and misconceptions. Those are harmful because they stop you from trying out this career path. Let's take a look at some of the things that you do not need to become a programmer.",
    image: {
      src: `${IMAGES}/things-you-dont-need-to-be-a-programmer.jfif`,
      alt: "A mug of coffee on a table, it says: begin",
    },
    web_link: `https://www.blog.sykhoudeib.com/post/2020-03-13-programming-misconceptions`,
  },
  {
    title: "Imposter monster. My first month as a developer",
    subtitle:
      "The worst thing about the imposter syndrome is that it manages to convince you it's real even when you know it's not. Here's how the imposter syndrome affected me in my first month as a developer.",
    image: {
      src: `${IMAGES}/default-hero.jfif`,
      alt: "A mug of coffee on a table, it says: begin",
    },
    web_link: `https://www.blog.sykhoudeib.com/post/2020-03-22-imposter-monster`,
  },
];

export default publications;
