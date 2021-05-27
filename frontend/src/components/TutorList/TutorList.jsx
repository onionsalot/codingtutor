import { useState, useEffect } from "react";
import axios from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col, CardGroup, CardDeck, CardColumns, Row, Container} from "react-bootstrap";
import './TutorList.css'

export default function TutorList({tutor}) {
  
  console.log(tutor)
  const tutorId = `/details/${tutor.user}`
  return (

      <Container>
        <Row>
         <Col sm={3}>
          
            <Card className=" grid mb-4" style={{ width: "20rem" }} >
              <Card.Body>
                <Card.Title>
                  Name:{tutor.first_name} {tutor.last_name}
                </Card.Title>
                <Card.Img variant="top" src={tutor.image} />
                
                <Card.Text>
                  <button>{tutor.skills}</button>
                  <p>Rate: {tutor.rate} per hour</p>
                </Card.Text>
                <Link to={tutorId}>
                  <Button variant="primary">CLICK TO SCHEDULE</Button>
                </Link>
              </Card.Body>
            </Card>
         

            </Col>
        </Row>
      </Container>
   
);
}