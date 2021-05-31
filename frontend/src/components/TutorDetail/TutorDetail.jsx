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
        .get(`/details/${tutorId.id}/`, {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },
        })

        .then((response) => {
          setTutor(response.data);
          axios
            .get(`/slots/${tutorId.id}/available_slots/`, {
              headers: {
                Authorization: `JWT ${localStorage.getItem("token")}`,
              },
            })
            .then((res) => {
              setSlots(res.data);
            });
        });
    }

    getTutor();
  }, []);

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
            <div className="panel-body">
              <h2> Email: {tutor.email}</h2>
              <br />
              <h2>Bio: {tutor.bio}</h2>
            </div>
            <br />
            <h2>Skills:{tutor.skills}</h2>
            <h2>Rate: {tutor.rate}</h2>
            <h2>Zipcode: {tutor.zipcode}</h2>
            <br />
            <h1>Pick A Time Below</h1>
            <div className="btn btn-success">
              <Link to="/">RETURN TO TUTOR HOMEPAGE</Link>
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
      </div>
    </>
  );
}
