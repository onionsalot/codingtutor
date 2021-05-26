import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import StudentSlots from "../../components/Slots/StudentSlots";
import axios from "axios";

export default function TutorDetail({user}) {
  const [tutor, setTutor] = useState();
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

  const availableSlots = slots.map((slot, idx) => <StudentSlots user={user} key={idx} slot={slot}/>);

  return (
    <>
      <div className="default">
        <div>
          <h2>Name: Denise </h2>
          <br />
        </div>
        <br />
        <div className="panel-body">
          <h2>donukwue1@gmail.com</h2>
          <br />
          <h2>This is my name and it is long.</h2>
        </div>
        <br />
        <h2>I am good with Javascript</h2>
        <h2>I charge 1,000,000,000 an hour</h2>
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
