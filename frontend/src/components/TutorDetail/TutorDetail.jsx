import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'


export default function TutorDetail() {
  const [tutor, setTutor] = useState();
  const tutorId = useParams();

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
          });
        }
    
    getTutor();
  },[])
 


  return (
    <div className="default">
      <div>
        <h2>Name:Denise </h2>
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
  );
}