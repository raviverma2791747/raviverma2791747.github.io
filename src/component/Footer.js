import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="container vh-25">
      <hr/>
      <Row className="justify-content-center align-items-center h-100">
        <Col className="text-center">
          <h6>Copyright &copy; 2022 Ravi Verma</h6>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
