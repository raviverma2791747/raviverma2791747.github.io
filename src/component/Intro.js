import React from "react";
import { Button } from "react-bootstrap";

const Intro = () => {
  return (
    <section className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1>
          Hi, I'm <span className="text-primary">Ravi</span>.
        </h1>
        <p className="display-6">
          I'm a <span className="text-primary">Front-End Developer</span> with a
          passion for creating beautiful and functional web applications.
        </p>
        <Button className="bg-gradient" >Download CV</Button>
      </div>
    </section>
  );
};

export default Intro;
