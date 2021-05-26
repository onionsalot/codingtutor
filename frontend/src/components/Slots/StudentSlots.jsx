import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
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

export default function StudentSlots({slot, user}) {
  // const linkId = `http://localhost:8000/slots/14/assoc_student/${slot.id}/`

  async function handleSubmit(evt){
  const options = {
    url: `http://localhost:8000/slots/${slot.id}/assoc_student/${user.id}/`,
    method: 'PUT',
    headers: {
      Authorization: `JWT ${localStorage.getItem("token")}`,
    },
  }
  evt.preventDefault();
    try {
      const user = await axios(options).then((response) => {
        console.log(response);
      });
    } catch(err) {
      console.log(err);
    }
  }

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
              {/* <Link to={handleSubmit}> */}
              <form onSubmit={handleSubmit}>
                <Button type='submit' variant="primary">Submit</Button>
              </form>
              {/* </Link> */}
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </>
  );
}
