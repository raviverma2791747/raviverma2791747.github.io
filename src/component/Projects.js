import React from "react";
import { Card, Col, Row,Badge } from "react-bootstrap";
import assets from "../assets/assets.json";

const Projects = () => {
  return (
    <section className="min-vh-100 mb-5">
      <h1 className="text-center mb-3">Projects</h1>
      <Row className="justify-content-center g-4" xs={1} md={2}  lg={3}>
        {assets.projects.map((project, index) => (
          <Col key={index}>
            <Card  bg="dark" className="rounded-3 h-100">
              <Card.Body className="d-flex flex-column justify-content-between text-center">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="truncate-text" >{project.desc}</Card.Text>
                <Card.Text>
                  {
                    project.tech.map((item, index) => (
                      <Badge key={index} bg="secondary me-1">{item}</Badge>
                    ))
                  }
                </Card.Text>
                <div>
                {project.url && (
                  <Card.Link
                    target="_blank"
                    className="btn btn-outline-primary "
                    href={project.url}
                  >
                    Source
                  </Card.Link>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Projects;
