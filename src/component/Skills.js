import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import assets from "../assets/assets.json";

const Skills = () => {
  return (
    <section className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1 className="text-center">Skills</h1>
        <Row className="justify-content-center" xs={1} sm={2} md={3} lg={4}>
          {Object.keys(assets.skills).map((category, index) => {
            return (
              <Col key={index}>
                <h4 className="text-capitalize">{category}</h4>
                <ul style={{ listStyle: "none" }}>
                  {assets.skills[category].map((skill, key) => {
                    return (
                      <li>
                        <h5>
                          <Badge key={key}>{skill}</Badge>
                        </h5>
                      </li>
                    );
                  })}
                </ul>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default Skills;
