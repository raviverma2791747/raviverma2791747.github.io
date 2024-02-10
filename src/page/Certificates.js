import React from "react";
import { Container, Col, Row, Card, Form } from "react-bootstrap";
import assets from "../assets/assets.json";

export default function Certificates() {
  const [certificateCategories, setCertificateCategories] = React.useState([
    ...new Set(assets.certificates.map((item) => item.type)),
  ]);

  const [selectedCategory, setSelectedCategory] = React.useState("any");

  return (
    <Container className="mt-3 min-vh-100">
      <Row xs={2} sm={2} md={4} lg={6} xl={6} className="justify-content-end">
        <Col>
          <Form.Group className="mb-3">
            <Form.Select
              className="text-capitalize"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              defaultValue="any"
            >
              <option value="any">Any</option>
              {certificateCategories.map((item, key) => (
                <option key={key} className="text-capitalize" value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row xs={1} sm={2} md={12} lg={4} className="g-4">
        {assets.certificates
          .filter(
            (item) =>
              item.type === selectedCategory || selectedCategory === "any"
          )
          .map((certificate, index) => (
            <Col key={index}>
              <Card  bg="dark" className="rounded-3 h-100" >
                <Card.Body className="d-flex flex-column justify-content-between text-center">
                  <Card.Title>{certificate.title}</Card.Title>
                  <Card.Text className="text-capitalize">{certificate.type}</Card.Text>
                  <Card.Text>{certificate.org}</Card.Text>
                  <Card.Text>{certificate.date}</Card.Text>
                  <div>
                    {certificate.path && (
                      <Card.Link
                        target="_blank"
                        className="btn btn-primary "
                        href={
                          process.env.PUBLIC_URL +
                          "/assets/certificates/" +
                          certificate.path
                        }
                      >
                        View
                      </Card.Link>
                    )}
                    {certificate.url && (
                      <Card.Link
                        target="_blank"
                        className="btn btn-outline-primary "
                        href={certificate.url}
                      >
                        Verify
                      </Card.Link>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
