import { getImagePath } from './helpers';

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img:  getImagePath("/b1.svg"),
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img:  getImagePath("/grid.svg"),
    spareImg:  getImagePath("/b4.svg"),
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img:  getImagePath("/b5.svg"),
    spareImg:  getImagePath("/grid.svg"),
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Sushiman",
    des: "Explore the Japanese app and taste some different different varieties of sushi's using ReactJS and AOS for scroll animation.",
    img:  getImagePath("/p1.png"),
    iconLists:  ["/re.svg", "/vitejs.svg", "/html.svg", "/css.svg"].map(getImagePath),
    link: "https://ankitkumar024.github.io/SushimanWeb/",
  },
  {
    id: 2,
    title: "Hoobank",
    des: "The next generation payment method. You do the business, we'll handle the money.",
    img:  getImagePath("/p2.png"),
    iconLists:  ["/re.svg", "/html.svg", "/css.svg"].map(getImagePath),
    link: "https://ankitkumar024.github.io/Modern-ui-ux-project2-hoobank/",
  },
  {
    id: 3,
    title: "GPT-3",
    des: "The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.",
    img:  getImagePath("/p3.png"),
    iconLists:  ["/re.svg", "/tail.svg", "/html.svg", "/vitejs.svg"].map(getImagePath),
    link: "https://ankitkumar024.github.io/Modern-ui-ux-project-gpt/",
  },
  {
    id: 4,
    title: "Game Vortex",
    des: "Game Vortex is a website dedicated to gaming enthusiasts, providing a platform to discover, explore, and engage with various gaming content.",
    img:  getImagePath("/p4.png"),
    iconLists:  ["/re.svg", "/vitejs.svg", "/html.svg", "/css.svg"].map(getImagePath),
    link: "https://ankitkumar024.github.io/game-vortex-project/",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: getImagePath("/git.svg"),
    link: "https://github.com/ankitkumar024",
  },
  {
    id: 3,
    img: getImagePath("/link.svg"),
    link: "www.linkedin.com/in/ankit-kumar-550b06229" ,
  },
];
