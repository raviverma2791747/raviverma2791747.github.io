import { writable } from "svelte/store";

export const person_info_store = writable({
  name: "Ravi Verma",
  title: "Software Engineer",
  desc: "I'm a software engineer with a passion for creating beautiful and functional web applications. I love exploring new ideas and bringing them to life.",
});

export const social_store = writable({
  github: "https://github.com/raviverma",
  linkedin: "https://www.linkedin.com/in/raviverma/",
  twitter: "https://twitter.com/raviverma1107",
  email: "ravivermaj488[at]gmail[dot]com",
  phone: "+91 78307 63507",
});

export const stat_store = writable([
  {
    count: "1.5",
    unit: "Years Experience",
    solid: true,
  },
  {
    count: "3",
    unit: "Internships",
  },
  {
    count: 6,
    unit: "Projects",
  },
  {
    count: "1",
    unit: "Publication",
  },
]);

export const experience_store = writable([
  {
    title: "Fontend Web Developer",
    type: "Internship",
    company: "Helpy Moto",
    location: "India",
    date: "June 2021 - August 2021",
  },
  {
    title: "Frontend Web Developer",
    type: "Internship",
    company: "Roamhome",
    location: "India",
    date: "Feb 2022 - June 2022",
  },
  {
    title: "Frontend Web Developer",
    type: "Internship",
    company: "Roamhome",
    location: "India",
    date: "Aug 2022 - Dec 2022",
  },
  {
    title: "Frontend Engineer",
    type: "Full-time",
    company: "Roamhome",
    location: "India",
    date: "Dec 2022 - Jan 2023",
  },
  {
    title: "Software Engineer",
    type: "Internship",
    company: "uTrade Solutions",
    location: "Chandigarh, India",
    date: "Jan 2023 - June 2023",
  },
  // {
  //   title: "SDE 1",
  //   company: "Tripkite",
  //   location: "India",
  //   date: "August 2023 - Present",
  // },
]);

export const skills_store = writable([]);

export const education_store = writable([]);

export const projects_store = writable([
  {
    title: "BoxIt Real Time Multiplayer Game",
    desc: "BoxIt is a real-time multiplayer game.The game consists of a NxN matrix of dots. The players add an edge between two adjacent dots. The player who completes a box is rewarded 1 point and a bonus move. The player with the highest number of boxes aka points wins the game.",
    url: "https://github.com/raviverma2791747/boxit",
    tech: ["ReactJS", "SocketIO", "ExpressJS", "NodeJS", "Bootstrap"],
  },
  {
    title: "Social Media Web Application",
    desc: "Social networking website for users to share their posts and comments. The website also allows users to create their own profile and to follow other users. The website also allows users to like and comment on other users' posts.",
    url: "https://github.com/raviverma2791747/Social-Media",
    tech: ["ReactJS", "RestAPI", "Django", "Bootstrap"],
  },
  {
    title:
      "Forest Coverage in Aerial/Satellite Imagery using Image segmentation",
    desc: "This project detects forest coverage in satellite images using Deep Learning CNN model U-Net. The model returns the forest coverage in the image as a binary mask. The model is trained on a dataset of satellite images of forest coverages . The model then gives the percentage of forest coverage in the image",
    url: "https://github.com/raviverma2791747/forest-coverage",
    tech: ["Deep Learning", "Tensorflow", "Flask", "Bootstrap"],
  },
  {
    title: "Quiz Application",
    desc: "The application allows creation,deletion,updation and scheduling quiz and it has two user roles admin and normal user. Users can signup and login. Also it allows exporting the results into CSV file.",
    url: "https://github.com/raviverma2791747/Quiz-Application",
    tech: ["Tkinter", "SQLite", "Python", "Json"],
  },
  {
    title: "Landing page for Lavange Pvt. Ltd.",
    desc: "This project is a responsive landing page for Lavange Pvt. Ltd. The project is built using HTML, CSS, JavaScript, Bootstrap, Tailwind ReactJS, NextJS, SvelteKit. or Angular.",
    url: "https://lavange.in",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "ReactJS", "NextJS", "SvelteKit", "Angular"],
    img: "assets/images/projects/lavange.png",
  },
  {
    title: "Businness page for Sunrisers Media Group",
    desc: "This project is a responsive landing page for Sunrisers Media Group. The project is built using HTML, CSS, JavaScript, Bootstrap, Tailwind ReactJS, NextJS, SvelteKit. or Angular.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "ReactJS", "NextJS", "SvelteKit", "Angular"],
    url: "https://www.sunrisersmediagroup.com/",
    img: "assets/images/projects/sunrisersmediagroup.png",
  }
]);

export const services_store = writable([
  {
    title: "Static Website",
    desc: "I will build a static website with the help of HTML, CSS, JavaScript, Bootstrap, Tailwind ReactJS, NextJS, SvelteKit. or Angular",
    price: "65$/page",
    price_desc: "Additional charges may apply",
  },
  {
    title: "Dynamic Website",
    desc: "I will build a dynamic website with the help of HTML, CSS, JavaScript, Bootstrap, Tailwind ReactJS, NextJS, SvelteKit. or Angular. I will also integrate  API.",
    price: "80$/page",
    price_desc: "Additional charges may apply",
  },
  {
    title: "Fullstack Website",
    desc: "I will build a fullstack website with the help of HTML, CSS, JavaScript, Bootstrap, Tailwind ReactJS, NextJS, SvelteKit. or Angular. I will also develope a backend server using Django, NodeJS or ExpressJS.",
    price: "100$/page or more",
    price_desc: "Additional charges may apply",
  },
  {
    title: "Consultation",
    desc: "I will provide consulting services to help you with your website development.",
    price: "100$/hour",
    price_desc: "Additional charges may apply",
  },
]);
