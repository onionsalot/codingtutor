import { useState, useEffect } from "react";
import axios from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col, CardGroup, CardDeck, CardColumns, Row, Container} from "react-bootstrap";

export default function TutorList({tutor}) {
  
  console.log(tutor)
  return (
   
 <>
<Container>
        <Col lg={4}></Col>
      </Container>

      <Container>
        <Row>
          <Col>
          
            <Card className="mb-4" style={{ width: "20rem" }} >
              <Card.Body>
                <Card.Title>
                  Name:{tutor.first_name} {tutor.last_name}
                </Card.Title>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Text>
                  <button>{tutor.skills}</button>
                  <p>Rate: {tutor.rate} per hour</p>
                </Card.Text>
                <Link to="/details">
                  <Button variant="primary">CLICK TO SCHEDULE</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            {" "}
            <Card>
              <Card.Body>
                <Card.Title>
                  Name:{tutor.first_name} {tutor.last_name}
                </Card.Title>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Text>
                  <button>{tutor.skills}</button>
                  <p>Rate: {tutor.rate} per hour</p>
                </Card.Text>
                <Link to="/details">
                  <Button variant="primary">CLICK TO SCHEDULE</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Body>
                <Card.Title>
                  Name:{tutor.first_name} {tutor.last_name}
                </Card.Title>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Text>
                  <button>{tutor.skills}</button>
                  <p>Rate: {tutor.rate} per hour</p>
                </Card.Text>
                <Link to="/details">
                  <Button variant="primary">CLICK TO SCHEDULE</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </>
);
}