import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {Card } from "react-bootstrap"
import StudentSlots from "../../components/Slots/StudentSlots";
import axios from "axios";
import TutorSlots from "../Slots/TutorSlots";
import TutorDetailsReview from "./TutorDetailsReviews";
import "./TutorDetail.css";

export default function TutorDetail({ user }) {
  const [tutor, setTutor] = useState([]);
  const tutorId = useParams();
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    async function getTutor() {
      axios
        .get(`http://localhost:8000/details/${tutorId.id}/`, {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },
        })

        .then((response) => {
          console.log(response);
          setTutor(response.data);
          axios
            .get(`http://localhost:8000/slots/${tutorId.id}/available_slots/`, {
              headers: {
                Authorization: `JWT ${localStorage.getItem("token")}`,
              },
            })
            .then((res) => {
              console.log("tutor available slots =>", res.data);
              setSlots(res.data);
            });
        });
    }

    getTutor();
  }, []);

  // const availableSlots = slots.map((slot, idx) => <StudentSlots tutor={tutor} user={user} key={idx} slot={slot}/>);

  return (
    <>
    <div className="container1">
      <div className="row">
        <div className="column">
          <div>
            <h2>
              Name:{tutor.first_name} {tutor.last_name}{" "}
            </h2>
            <Card.Img className="img"variant="top" src={tutor.image}/>
            <br />
          </div>
          <br />
          <div className="panel-body">
            <h2> Email: {tutor.email}</h2>
            <br />
            <h2>Bio: {tutor.bio}</h2>
          </div>
          <br />
          <h2>Skills: {tutor.skills}</h2>
          <br />
          <h2>Rate: ${tutor.rate}/hour</h2>
          <br />
          <h2>Zipcode: {tutor.zipcode}</h2>
          <br />
         
          <br />
          <div className="btn btn-success">
            <Link className="btn"to="/">RETURN TO TUTOR HOMEPAGE</Link>
          </div>
        </div>
        <div className="column">
          <TutorSlots
            slots={slots}
            setSlots={setSlots}
            tutorId={tutorId.id}
            tutor={tutor}
            user={user}
          />
        </div>
      </div>
    </div>
    <div className="container2">
      <TutorDetailsReview userId={user.id} tutorId={tutorId.id} />
    </div>
    </>
  );
}
