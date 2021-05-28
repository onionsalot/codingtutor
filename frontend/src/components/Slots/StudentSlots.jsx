import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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

export default function StudentSlots({tutor, user, slot}) {
  const history = useHistory();

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
              <Card.Title>Students Sign up Here</Card.Title>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Text>
                <button></button>
                <p>Time Slot: {slot.hour}</p>
              </Card.Text>
              {/* <Link to={handleSubmit}> */}
            {slot.student == null ? (
              <form onSubmit={handleSubmit}>
                <Button type='submit' variant="primary">Submit</Button>
              </form>

            ):(
              <p>Slot not available</p>
            )}

              {/* </Link> */}
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </>
  );
}
