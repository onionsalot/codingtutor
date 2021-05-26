import React, { useState } from "react";
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

export default function StudentSlots({slot}) {
  

  return (
    <>
      <h1>Students sign up for slots here</h1>
      <Container>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Students Sign up Here </Card.Title>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Text>
                <button></button>
                <p>Time Slot: {slot.hour}</p>
              </Card.Text>
              <Link to="/">
                <Button variant="primary">Submit</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </>
  );
}
