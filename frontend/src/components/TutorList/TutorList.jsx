import { useState, useEffect } from "react";
import axios from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  Col,
  CardGroup,
  CardDeck,
  CardColumns,
  Row,
  Container,
} from "react-bootstrap";
import "./TutorList.css";
import pin from "../../images/Pin.png"
import placeholder from "../../images/Placeholder.png"

export default function TutorList({ tutor, distance }) {
  const tutorId = `/details/${tutor.user}`;
  const tutorImage = tutor.image === null ? (placeholder) : (tutor.image)
  return (
    <Row>
      <Col lg={12}>
        <Card className="card justify-content-center">
          <Card.Body>
            <Card.Title>
              Name: {tutor.first_name} {tutor.last_name}
            </Card.Title>
            <Card.Img className="img" variant="top" src={tutorImage} />

            <Card.Text>
              <br />
              <h5>Skills: {tutor.skills}</h5>
              <p>Rate: ${tutor.rate}/hour</p>
              <p><span><img src={pin} alt="pin" class="img-distance"></img></span>Distance: {distance.distance.text}</p>
            </Card.Text>
            <Link to={tutorId}>
              <Button variant="primary">CLICK TO SCHEDULE</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
