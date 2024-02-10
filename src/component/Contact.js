import React from "react";
import { Col, Row } from "react-bootstrap";
import assets from "../assets/assets.json";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="m-5">
        <h1 className="text-center">Contact</h1>
        <Row
          className="justify-content-center align-items-center"
          xs={1}
          sm={2}
          md={2}
          lg={2}
        >
          <Col className="text-center p-2">
            <h5>E-mail</h5>
            <p>{assets.contact.email.replace("@", "[at]")}</p>
          </Col>
          <Col className="text-center p-2">
            <h5>Contact</h5>
            <p className="phone"></p>
          </Col>
          <Col className="text-center p-2">
            <a target="_blank" href={assets.contact.linkedin}>
              <BsLinkedin size={30} />
            </a>
          </Col>
          <Col className="text-center p-2">
            <a target="_blank" href={assets.contact.github}>
              <BsGithub size={30} />
            </a>
          </Col>
        </Row>
    </section>
  );
};

export default Contact;
