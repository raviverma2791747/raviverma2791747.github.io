import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import assets from "../assets/assets.json";

const Education = () => {
  return (
    <section className="text-center min-vh-100">
      <h1 className="text-center mb-3">Education</h1>
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={8} lg={4}>
          <ul class="timeline">
            {assets.educations.map((education, index) => (
              <li key={index} class="timeline-item mb-5">
                <h5 class="fw-bold">{education.institute}</h5>
                <h6 class="fw-bold">{education.qualification}</h6>
                <p class="text-muted mb-2 fw-bold">{education.date}</p>
                <p class="text-muted">{education.location}</p>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </section>
  );
};

export default Education;
