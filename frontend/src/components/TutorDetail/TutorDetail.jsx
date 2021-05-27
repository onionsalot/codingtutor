import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import StudentSlots from "../../components/Slots/StudentSlots";
import axios from "axios";

export default function TutorDetail({user}) {
  const [tutor, setTutor] = useState([]);
  const tutorId = useParams();
  const [slots, setSlots] = useState([])

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
              console.log('tutor available slots =>', res.data);
              setSlots(res.data);
            });
        });
    }

    getTutor();
  }, []);

  const availableSlots = slots.map((slot, idx) => <StudentSlots tutor={tutor} user={user} key={idx} slot={slot}/>);

  return (
    <>
      <div className="default">
        <div>
          <h2>Name:{tutor.first_name} {tutor.last_name} </h2>
          <br />
        </div>
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
      {availableSlots}
    </>
  );
}
