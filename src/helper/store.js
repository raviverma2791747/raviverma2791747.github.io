import { writable } from "svelte/store";

export const person_info_store = writable({
  name: "Ravi Verma",
  title: "Software Engineer",
  desc: "I'm a Front-End Developer with a passion for creating beautiful and functional web applications.",
});

export const social_store = writable({
  github: "https://github.com/raviverma",
  linkedin: "https://www.linkedin.com/in/raviverma/",
  twitter: "https://twitter.com/raviverma",
  email: "ravivermaj488[at]gmail[dot]com",
  phone: "+91 78307 63507"
});

export const stat_store = writable([
  {
    count: "2",
    unit: "Years Experience",
    solid: true,
  },
  {
    count: "3",
    unit: "Internships",
  },
  {
    count: "10+",
    unit: "Projects",
  },
  {
    count: "1",
    unit: "Publication",
  },
]);

export const experience_store = writable([
  {
    title: "Fontend Web Developer Intern",
    company: "Helpy Moto",
    location: "India",
    date: "June 2021 - August 2021",
  },
  {
    title: "Frontend Web Developer Intern",
    company: "Roamhome",
    location: "India",
    date: "Feb 2022 - June 2022",
  },
  {
    title: "Frontend Web Developer Intern",
    company: "Roamhome",
    location: "India",
    date: "Aug 2022 - Dec 2022",
  },
  {
    title: "Frontend Engineer",
    company: "Roamhome",
    location: "India",
    date: "Dec 2022 - Jan 2023",
  },
  {
    title: "Software Engineer",
    company: "uTrade Solutions",
    location: "Chandigarh, India",
    date: "Jan 2023 - June 2023",
  },
  {
    title: "SDE 1",
    company: "Tripkite",
    location: "India",
    date: "August 2023 - Present",
  },
]);

export const skills_store = writable([
  
])

export const education_store = writable([
  
])

export const projects_store = writable([
  
])
