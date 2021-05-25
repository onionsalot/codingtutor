import { useState, useEffect } from "react";
import axios from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";

export default function TutorList() {
  const [students, getStudents] = useState([]);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
    zipcode: "",
    skills: "",
  });

  // useEffect(() => {
  //     async function fetchData(){
  //     const data = await axios.get('http://localhost:8000/');
  //         // const {data2} = await axios.get('http://localhost:8000/');
  //         console.log('Data =>', data.data);
  //         // console.log('Data 2 =>', {data2});
  //     }
  //     // Should below be fetiching the tutors
  //     fetchData()
  // }, []);

  return (
      <Col key={students.id} sm={12} md={6} lg={4} xl={3}>
    <Card style={{ width: "20rem" }}>
      {/* <Card.Img variant="top" src="" /> */}
      <Card.Body>
        <Card.Title>Name:{form.username}</Card.Title>
        <Card.Text>
          <p>Bio:{form.bio}</p>
          <p>Skills:{form.skills}</p>
          <p>Zipcode: {form.zipcode}</p>
        </Card.Text>
        <Button variant="primary">Pick a TimeSlot</Button>
      </Card.Body>
    </Card>
    </Col>
    
  );
}
