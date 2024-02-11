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
    count: 7,
    unit: "Projects",
  },
  {
    count: "1",
    unit: "Publication",
  },
]);


export const education_store = writable([
  {
    title: "Student 1st to 10th",
    company: "Kendriya Vidyalaya Sector 31",
    location: "Chandigarh, India",
    date: "April 2006 - March 2016",
  },
  {
    title: "Student 11th, 12th",
    company: "Kendriya Vidyalaya Sector 31",
    location: "Chandigarh, India",
    specialization: "Physics, Chemistry, Maths and Computer Science",
    date: "April 2016 - March 2018",
  },
  {
    title: "Student",
    company: "Chandigarh College of Engineering and Technology",
    location: "Chandigarh, India",
    specialization: "B.E. Computer Science Engineering",
    date: "July 2019 - June 2023",
  },
])
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

export const projects_store = writable([
  {
    title: "BoxIt Real Time Multiplayer Game",
    desc: "BoxIt is a real-time multiplayer game.The game consists of a NxN matrix of dots. The players add an edge between two adjacent dots. The player who completes a box is rewarded 1 point and a bonus move. The player with the highest number of boxes aka points wins the game.",
    url: "https://github.com/raviverma2791747/boxit",
    tech: ["ReactJS", "SocketIO", "ExpressJS", "NodeJS", "Bootstrap"],
    img: "assets/images/projects/boxit.png",
  },
  {
    title: "Social Media Web Application",
    desc: "Social networking website for users to share their posts and comments. The website also allows users to create their own profile and to follow other users. The website also allows users to like and comment on other users' posts.",
    url: "https://github.com/raviverma2791747/Social-Media",
    tech: ["ReactJS", "RestAPI", "Django", "Bootstrap"],
    img: "assets/images/projects/social.png",
  },
  {
    title:
      "Forest Coverage in Aerial/Satellite Imagery using Image segmentation",
    desc: "This project detects forest coverage in satellite images using Deep Learning CNN model U-Net. The model returns the forest coverage in the image as a binary mask. The model is trained on a dataset of satellite images of forest coverages . The model then gives the percentage of forest coverage in the image",
    url: "https://github.com/raviverma2791747/forest-coverage",
    tech: ["Deep Learning", "Tensorflow", "Flask", "Bootstrap"],
    img: "assets/images/projects/forest_coverage.png",
  },
  {
    title:
      "Satellite Image to Digital Elevation Model using GAN( cGAN ) Deep Learning",
    desc: "In this project, the aim is to generate Digital Elevation Model using GAN more specifically Conditional GAN (pix2pix) which is a CNN-based deep learning architecture. Digital Elevation model is elevation data of a geographic surface",
    url: "https://github.com/raviverma2791747/satellite-to-dem",
    tech: ["GAN", "Deep Learning", "Tensorflow", "Flask", "Bootstrap"],
    img: "assets/images/projects/satellite2dem.png",
  },
  {
    title: "Quiz Application",
    desc: "The application allows creation, deletion, updation and scheduling quiz and it has two user roles admin and normal user. Users can signup and login. Also it allows exporting the results into CSV file.",
    url: "https://github.com/raviverma2791747/Quiz-Application",
    tech: ["Tkinter", "SQLite", "Python", "Json"],
    img: "assets/images/projects/quiz.png",
  },
  {
    title: "Landing page for Lavange Pvt. Ltd.",
    desc: "This project is a responsive landing page for Lavange Pvt. Ltd. The project is built using HTML, CSS, JavaScript, Bootstrap, Tailwind ReactJS, NextJS, SvelteKit. or Angular.",
    url: "https://lavange.in",
    tech: [
      "Tailwind",
      "SvelteKit",
    ],
    img: "assets/images/projects/lavange.png",
  },
  {
    title: "Business page for Sunrisers Media Group",
    desc: "This project is a responsive landing page for Sunrisers Media Group.",
    tech: [
      "Bootstrap",
      "NextJS",
    ],
    url: "https://www.sunrisersmediagroup.com/",
    img: "assets/images/projects/sunrisersmediagroup.png",
  },
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

export const certificates_store = writable([
  {
    title:
      "Certificate of Participation Innovate India Coding Championship(Round-2)",
    url: "https://students.codingninjas.com/verify/6662e88a29834cb3",
    path: "certificate-1.pdf",
    date: "July 29, 2022",
    org: "Coding Ninjas",
    type: "competition",
  },
  {
    title: "Roadmap to Machine Learning Algorithm",
    url: null,
    path: "certificate-2.pdf",
    date: "September 18, 2021",
    org: "Chandigarh College of Engineering and Technology",
    type: "workshop",
  },
  {
    title: "Certificate of Participation in Level 1: E-Commerce ",
    url: "https://unstop.com/certificate-preview/4a29acc5-fa3b-47d7-ba7b-39fa569f2544?utm_campaign",
    path: "certificate-3.pdf",
    date: "July 31, 2022",
    org: "Unstop",
    type: "competition",
  },
  {
    title:
      "Certificate of Completion JP Morgan Chase and Co. Software Engineering Virtual Experience ",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_ihJcjgyGQ4BeeyzG2_1658938098433_completion_certificate.pdf",
    path: "certificate-4.pdf",
    date: "July 27, 2022",
    org: "Forage",
    type: "virtual experience",
  },
  {
    title:
      "Certificate of Participation Innovate India Coding Championship(Round-1)",
    url: "https://students.codingninjas.com/verify/a62ffa90ec705dfc",
    path: "certificate-5.pdf",
    date: "July 20, 2022",
    org: "Coding Ninjas",
    type: "competition",
  },
  {
    title:
      "Certificate of Participation Future Prospects to Engineering Graduates for Entrepreneurship & Startups",
    url: null,
    path: "certificate-6.pdf",
    date: "August 31, 2021",
    org: "Chandigarh College of Engineering and Technology",
    type: "webinar",
  },
  {
    title: "Python for Everybody Specialization",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/TPLV7NCJF2UM",
    path: "certificate-7.pdf",
    date: "July 3, 2020",
    org: "Coursera",
    type: "course",
  },
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    url: "https://www.coursera.org/account/accomplishments/certificate/XB5KH5CRT5AL",
    path: "certificate-7.pdf",
    date: "July 8, 2020",
    org: "Coursera",
    type: "course",
  },
  {
    title:
      "Certificate of Completion Build a Face Recognition Application using Python",
    url: "https://www.guvi.in/verify-certificate?id=r79PJ36Kw7992p3811",
    path: "certificate-9.pdf",
    date: "April 25, 2021",
    org: "Guvi",
    type: "event",
  },
  {
    title:
      "Certificate of Participation The Guiness World Event - Most users take an online computer programming lesson in 24 hours",
    url: "https://www.guvi.in/verify-certificate?id=r79PJ36Kw7992p3811",
    path: "certificate-10.pdf",
    date: "April 24, 2021",
    org: "Guvi",
    type: "event",
  },
  {
    title: "Django for Everybody Specialization",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/43HQKS4965W5",
    path: "certificate-11.pdf",
    date: "April 24, 2021",
    org: "Coursera",
    type: "course",
  },
  {
    title: "Learn Bootstrap - For Beginners",
    url: "https://www.udemy.com/certificate/UC-093ae36b-ddb7-4aa9-9a5e-54edc09e8d70/",
    path: "certificate-12.pdf",
    date: "January 31, 2022",
    org: "Udemy",
    type: "course",
  },
  {
    title: "File & Folder Management using Powershell",
    url: "https://www.udemy.com/certificate/UC-d3cf2684-0428-42b9-a175-2e2422f040f2/",
    path: "certificate-13.pdf",
    date: "January 23, 2022",
    org: "Udemy",
    type: "course",
  },
  {
    title: "Learn jQuery - For Beginners",
    url: "https://www.udemy.com/certificate/UC-cc185475-a631-4f65-823a-fab660f3e3c7/",
    path: "certificate-14.pdf",
    date: "January 31, 2022",
    org: "Udemy",
    type: "course",
  },
  {
    title: "Triplebyte Engineering Certificate",
    url: "https://triplebyte.com/tb/ravi-verma-qd7glbl/certificate",
    path: null,
    date: "No date",
    org: "Triplebyte",
    type: "assesment",
  },
  {
    title: "Hacktober Fest",
    url: null,
    path: null,
    date: "Feburary 2022",
    org: "DigitalOcean",
    type: "event",
  },
  {
    title: "Python (Basic) Certificate",
    url: "https://www.hackerrank.com/certificates/eab43b44a118",
    path: null,
    date: "Feburary 12, 2022",
    org: "Hackerrank",
    type: "assesment",
  },
  {
    title: "Problem Solving (Basic) Certificate",
    url: "https://www.hackerrank.com/certificates/60e037843713",
    path: null,
    date: "May 16, 2022",
    org: "Hackerrank",
    type: "assesment",
  },
  {
    title: "Java (Basic) Certificate",
    url: "https://www.hackerrank.com/certificates/2432f5619eaf",
    path: null,
    date: "April 30, 2022",
    org: "Hackerrank",
    type: "assesment",
  },
  {
    title: "JavaScript (Basic) Certificate",
    url: "https://www.hackerrank.com/certificates/85169e94d6a6",
    path: null,
    date: "April 27, 2022",
    org: "Hackerrank",
    type: "assesment",
  },
  {
    title: "SQL (Basic) Certificate",
    url: "https://www.hackerrank.com/certificates/639fa32233b2",
    path: null,
    date: "May 03, 2022",
    org: "Hackerrank",
    type: "assesment",
  },
  {
    title: "React (Basic) Certificate",
    url: "https://www.hackerrank.com/certificates/0a06552692f1",
    path: null,
    date: "April 28, 2022",
    org: "Hackerrank",
    type: "assesment",
  },
  {
    title: "Google IT Automation with Python Professional Certificate",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/74YYQJWTY46K",
    path: "certificate-22.pdf",
    date: "July 23, 2022",
    org: "Coursera",
    type: "course",
  },
  {
    title: "Learn Javascript - For Beginners",
    url: "https://www.udemy.com/certificate/UC-4f23bfdb-6475-472b-9708-8ad809d4088c/",
    path: "certificate-23.pdf",
    date: "January 31, 2022",
    org: "Udemy",
    type: "course",
  },
  {
    title: "Learn HTML - For Beginners",
    url: "https://www.udemy.com/certificate/UC-4daecfef-2e53-4bf0-b773-d572c293303f/",
    path: "certificate-24.pdf",
    date: "January 30, 2022",
    org: "Udemy",
    type: "course",
  },
  {
    title: "Learn Css - For Beginners",
    url: "https://www.udemy.com/certificate/UC-d75e1340-5854-4011-bda5-d7a9e9f43da1/",
    path: "certificate-25.pdf",
    date: "January 30, 2022",
    org: "Udemy",
    type: "course",
  },
  {
    title: "MongoDB Bootcamp 2.0",
    url: "https://moonshot.scaler.com/s/sl/aWItRPfSeX",
    path: "certificate-28.pdf",
    date: "August 10, 2022",
    org: "Scaler",
    type: "bootcamp",
  },
  {
    title: "Front End Web Developer",
    url: null,
    path: "certificate-29.pdf",
    date: "June 20, 2021",
    org: "Helpy Moto",
    type: "internship",
  },
]);
