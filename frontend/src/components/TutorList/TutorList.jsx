import { useState, useEffect } from "react";
import axios from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";

export default function TutorList({tutor}) {
  
  /* //   <Col key={tutor.id} sm={12} md={6} lg={4} xl={3}>
  // <Card style={{ width: "20rem" }}>
  //   {/* <Card.Img variant="top" src="" /> */
  //   <Card.Body>
  //     <Card.Title>Name:{tutors.username}</Card.Title>
  //     <Card.Text>
  //       <p>Bio:{tutors.bio}</p>
  //       <p>Skills:{tutors.skills}</p>
  //       <p>Zipcode: {tutors.zipcode}</p>
  //     </Card.Text>
  //     <Button variant="primary">Pick a TimeSlot</Button>
  //   </Card.Body>
  // </Card>
  // </Col> */}
console.log(tutor)
  return (
    <>
    <h1>TutorList: </h1>
    <h1>{tutor.zipcode}</h1>
    </>
  )
}
