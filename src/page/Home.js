import React from "react";
import { Container } from "react-bootstrap";
import Intro from "../component/Intro";
import About from "../component/About";
import Projects from "../component/Projects";
import Experience from "../component/Experience";
import Skills from "../component/Skills";
import Contact from "../component/Contact";
import Education from "../component/Education";

function Home() {
  return (
    <Container>
      <Intro />
      <About />
      <Education/>
      <Experience />
      <Projects />
      <Skills />
      <Contact/>
    </Container>
  );
}

export default Home;
