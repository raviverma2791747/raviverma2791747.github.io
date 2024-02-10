import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import assets from "../assets/assets.json";

const Experience = () => {
  return (
    <section className="min-vh-100 text-center">
      <h1 className="text-center mb-3">Experience</h1>
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={8} lg={4}>
          <ul class="timeline">
            {assets.experiences.map((experience, index) => (
              <li key={index} class="timeline-item mb-5">
                <h5 class="fw-bold">{experience.title}</h5>
                <h6 class="fw-bold">{experience.company}</h6>
                <p class="text-muted mb-2 fw-bold">{experience.date}</p>
                <p class="text-muted">{experience.location}</p>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </section>
  );
};

export default Experience;
