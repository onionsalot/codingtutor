import { useState, useEffect } from "react";
import axios from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col, CardGroup, CardDeck, CardColumns, Row, Container} from "react-bootstrap";

export default function TutorList({tutor}) {
  
  console.log(tutor)
  return (
    <>
    {/* <h1>TutorList: </h1>
    <h1>{tutor.zipcode}</h1> */}

<Container>
<Col lg={4}>
    <Card >
  <Card.Body>
    <Card.Title>Name:{tutor.first_name} {tutor.last_name}</Card.Title>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Text>
      <button>{tutor.skills}</button>
     <p>Rate: {tutor.rate} per hour</p>
      

    </Card.Text>
    <Link to= '/details'>
    <Button variant="primary">CLICK TO SCHEDULE</Button>
    </Link>

  </Card.Body>
</Card>
</Col>
</Container>
  

    </>
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
  )
}
