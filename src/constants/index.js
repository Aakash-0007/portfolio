import {
  // ABOUT CARD IMPORTS
  mobile,
  backend,
  creator,
  web,

  // TECH IMPORTS FOR 3D CIRCLE
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  threejs,
  git,
  Sql,
  // figma,

  // WORK IMPORTS
  cashies,
  akruti,

  //PROJECT - PROJECT IMAGE IMPORTS
  cashiesproject,
  recipe,
  SpotifyWeb,
  MovieHub,
  RetroSynth,
  GuitarAmp,
  Portfolio,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Responsive Design",
    icon: mobile,
  },
  {
    title: "Accessibility",
    icon: backend,
  },
  {
    title: "Backend",
    icon: creator,
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "SQL",
    icon: Sql,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "typescript",
  //   icon: typescript,
  // },
]

const experiences = [
   {
    title: "Software Developer",
    company_name: "Akruti Concept Studio",
    icon: akruti,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Developed and implemented responsive user interfaces using React.js and Tailwind CSS for a leading architectural firm, creating stunning and interactive designs that effectively showcased the company's portfolio.",
      "Collaborated closely with the director as the primary client, gathering feedback through live screen sharing to align the website with their vision.",
      "Employed reusable components and maintained an efficient code structure, enhancing productivity and optimizing the user experience.",
      "Contributed to the complete software development life cycle, ensuring a seamless website from requirements gathering to deployment.",
      "Demonstrated effective communication skills, presenting technical concepts and incorporating user feedback to exceed client expectations.",
    ],
  }, {
    title: "Freelance Developer",
    company_name: "Cashies",
    icon: cashies,
    iconBg: "#383E56",
    date: "Feb 2023 - April 2023",
    points: [
      "Built a Responsive website for a clothing line startup while paying great attention to detail to provide excellent buying experience.",
      "Feature to respond to all customer inquiries to ensure the highest level of satisfaction and encourage repeat buisness.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Boosted user interactivity on stores social media page by 60%.",
      "Collaborated closely with client to comprehensively understand their unique requirements, effectively incorporating my expertise to deliver a tailored product that precisely aligned with their vision.",
    ],
  },

]

const projects = [
  {
    name: "Cashies",
    description:
      "*Development version* A Clothing brand website named Cashies which I designed for a startup. Cashies was a combination of personal freedom and client taste, suited for various screen sizes. Developed using  HTML, CSS, and JavaScript. This project helped me understand the importance of scalability and efficiency",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: cashiesproject,
    source_code_link:
      "https://github.com/Aakash-0007/projects/tree/main/cashies",
    live_link: "https://aakash-0007.github.io/projects/cashies/",
  },
  {
    name: "Recipe app",
    description:
      "A Recipe app which showcases various food recipes and allows user's the option to search and favorite recipes. Developed using HTML, CSS, and JavaScript, integrating MealDB API to display and manipulate data according to need. This project is of personal importance as it helped cut down our food expenses by reducing take-out.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "mealdb_api",
        color: "orange-text-gradient",
      },
    ],
    image: recipe,
    source_code_link:
      "https://github.com/Aakash-0007/projects/tree/main/recipeapp",
    live_link: "https://aakash-0007.github.io/projects/recipeapp/",
  },
  {
    name: "Spotify Remote",
    description:
      "This responsive web application utilizes the Spotify API and OAuth authentication to access my Spotify account information, enabling me to manage playback across all devices connected to my Spotify account on the same Wi-Fi network. With this project, I gained hands-on experience interacting with a real-world API, handling OAuth requests using a Client token and Client Secret, and effectively accessing and controlling Spotify playlists and songs on any network-connected device.",
    tags: [
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "spotify_api",
        color: "orange-text-gradient",
      },
      {
        name: "OAuth",
        color: "white",
      },
    ],
    image: SpotifyWeb,
    source_code_link:
      "https://github.com/Aakash-0007/projects/tree/main/spotifyclone",
    live_link: "https://aakash-0007.github.io/projects/spotifyclone/",
  },
  {
    name: "MovieHub",
    description:
      "This project is a website I built to showcase trending movies, TV shows, and animes while providing a seamless search experience. By leveraging the TMDB API, it offers up-to-date ratings and overviews for popular films. Users can also conveniently access Wikipedia information, enhancing their exploration of movies. Developed using React, the website ensures fast rendering and utilizes reusable components, resulting in an efficient, responsive, and user-friendly interface. ",
    tags: [
      {
        name: "react",
        color: "react-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "tmdb_api",
        color: "orange-text-gradient",
      },
    ],
    image: MovieHub,
    source_code_link: "https://github.com/Aakash-0007/MovieHub",
    live_link: "https://aakash-0007.github.io/MovieHub/",
  }, {
    name: "Guitar AMP",
    description:
      "The Virtual Guitar AMP Controls is a React-based web application that simulates the functionality of an amplifier for an electric guitar. The application allows users to adjust the volume, bass, mid, and treble levels in real-time and showcase a  sound visualizer using their microphone as an input source. It provides a cost-effective alternative to buying a physical amplifier, making it accessible to guitarists who want to experiment with their sound without investing in additional hardware. ",
    tags: [
      {
        name: "react",
        color: "react-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "web_audio_api",
        color: "orange-text-gradient",
      },
    ],
    image: GuitarAmp,
    source_code_link: "https://github.com/Aakash-0007/Guitar-AMP",
    live_link: "https://aakash-0007.github.io/Guitar-AMP/",
  },
  {
    name: "Retro-Synth",
    description:
      "The Audio Synthesizer is a React-based web application that emulates the functionalities of an electronic synthesizer, allowing users to create and modify electronic sounds in real-time. It is a cost-effective alternative to buying an expensive hardware synthesizer, making it accessible to music enthusiasts who are interested in creating synthwave music and experimenting with various sound parameters. Th  is Project was  fun to work on since it combined my passion for music and software development",
    tags: [
      {
        name: "react",
        color: "react-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "web_audio_api",
        color: "orange-text-gradient",
      },
    ],
    image: RetroSynth,
    source_code_link: "https://github.com/Aakash-0007/Retro-Synth",
    live_link: "https://aakash-0007.github.io/Retro-Synth/",
  },
 
  {
    name: "Portfolio",
    description:
      "My own portfolio website. This project involves creating a personal portfolio website using Vite, Three.js, Tailwind CSS, and React. Vite as built tool, Three.js for interactive 3D graphics, Tailwind CSS as a utility-first CSS framework for efficient styling, and React for building user interface.",
    tags: [
      {
        name: "vite",
        color: "white",
      },
      {
        name: "react",
        color: "react-text-gradient",
      },
      {
        name: "three.js",
        color: "white",
      },
      {
        name: "tailwindcss",
        color: "tailwind-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/",
    live_link: "https://github.com/",
  },
]

export { services, technologies, experiences, projects }
