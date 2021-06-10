import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import TutorList from "../../components/TutorList/TutorList";
import "./HomePage.css";

export default function HomePage({ props, user }) {
  const [tutors, setTutors] = useState([]);
  let newList;

  useEffect(() => {
    async function fetchData() {
      const data = await axios
        .get("/api/all_profiles/", {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setTutors(response.data);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function googleDistance() {
      const placeIds = [];
      tutors.forEach((tutor) => {
        placeIds.push(`place_id:${tutor.place_id}|`);
      });
      const proxyurl = "https://fierce-wildwood-46381.herokuapp.com/";
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=place_id:ChIJowv49br0wokRBi5L14DyqTo&destinations=${placeIds.join('')}&key=${process.env.REACT_APP_GOOGLE_KEY}`;

    }
    googleDistance();
  }, [tutors]);

  // async function googleDistance() {
  //   // const proxyurl = "https://fierce-wildwood-46381.herokuapp.com/";
  //   // const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=place_id:ChIJowv49br0wokRBi5L14DyqTo&destinations=place_id:ChIJexiXUXaJwokRhDBFmm_xXfQ|place_id:${process.env.REACT_APP_GOOGLE_KEY}`;
  //   // await fetch()
  // }
  // googleDistance()
  newList = tutors.map((tutor, idx) => <TutorList key={idx} tutor={tutor} />);
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
