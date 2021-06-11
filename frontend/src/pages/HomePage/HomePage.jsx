import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import TutorList from "../../components/TutorList/TutorList";
import "./HomePage.css";

export default function HomePage({ user }) {
  const [tutors, setTutors] = useState([]);
  const [tutorDisplay, setTutorDisplay] = useState([]);
  const [error, setError] = useState("")
  useEffect(() => {
    async function fetchData() {
      const data = await axios
        .get("/api/all_profiles/", {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          // alteredResponse takes the response and only gathers the ones that have a rate AKA is an instructor
          const alteredResponse = response.data.filter(res => res.rate !== null)
          setTutors(alteredResponse);
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

      try{
        await fetch(proxyurl + url)
        .then(response => response.json())
        .then(async (contents) => {
          if (contents.status === "OK") {
            const distances = contents.rows[0].elements
            const unorderedTutors = []
            tutors.forEach((tutor, idx) => {
              if(user.id !== tutor.user) {
                unorderedTutors.push(<TutorList key={idx} tutor={tutor} distance={distances[idx]}/>)  
              }
            })
            unorderedTutors.sort(function(a, b) { 
              return a.props.distance.distance.value - b.props.distance.distance.value;
            });
            setTutorDisplay(unorderedTutors)

          } 
          // else {
          //   console.log(contents.status)
          //   console.log('else triggered')
          //   setError("There seems to be an issue with google's location matrix... Distance features have been disabled temporarily. We apologize for the inconvenience")
          //   setTutorDisplay(tutors.map((tutor, idx) => <TutorList key={idx} userId={user.id} tutor={tutor} distance={0}/>))
          // }
        }
        )
      } catch {
        console.log('catch triggered')
        setError("There seems to be an issue with google's location matrix... Distance features have been disabled temporarily. We apologize for the inconvenience")
      }
    }
    googleDistance();
  }, [tutors, user.id]);
  

  return (
    <>
      <br />
      <h1>All Tutors in your Area</h1>
      <br />
      {error}
      <div className="home">{tutorDisplay}</div>
      <br /> <br />
    </>
  );
}
