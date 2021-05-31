import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import TutorList from "../../components/TutorList/TutorList";
import "./HomePage.css";

export default function HomePage({ props, user }) {
  const [tutors, setTutors] = useState([]);
  let tutorList = [];

  useEffect(() => {
    async function fetchData() {
      const data = await axios
        .get("/all_profiles/", {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          tutorList = response.data;
          setTutors(tutorList);
        });
    }
    fetchData();
  }, []);
  const newList = tutors.map((tutor, idx) => (
    <TutorList key={idx} tutor={tutor} />
  ));

  return (
    <>
      <br />
      <h1>All Tutors in your Area</h1>
      <br />
      <div className="home">{newList}</div>
      <br /> <br />
    </>
  );
}
