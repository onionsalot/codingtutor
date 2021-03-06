import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import TutorList from "../../components/TutorList/TutorList";
import "./HomePage.css";

export default function HomePage({ user }) {
  const [tutors, setTutors] = useState([]);
  const [tutorDisplay, setTutorDisplay] = useState([]);
  const [error, setError] = useState("");
  const previousVals = useRef({ tutors, user }); // useRef for making sure tutors AND users have both loaded
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
          const alteredResponse = response.data.filter(
            (res) => res.rate !== null
          );

          setTutors(alteredResponse);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function googleDistance() {
      if (
         // useRef for making sure tutors AND users have both loaded
        previousVals.current.tutors !== tutors &&
        Object.keys(user).length !== 0
      ) {
        console.log("Geocode run");
        const placeIds = [];
        for(let i=0; i<25; i++) { // Google geocode allows max of 25 items per request. Solve this with pagination
          if (tutors[i] !== undefined) {
            placeIds.push(`place_id:${tutors[i].place_id}|`);
          }
        }
        // tutors.forEach((tutor) => {
        //   placeIds.push(`place_id:${tutor.place_id}|`);
        // });
        const proxyurl = "https://fierce-wildwood-46381.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=place_id:${user.place_id}&destinations=${placeIds.join(
          ""
        )}&key=${process.env.REACT_APP_GOOGLE_KEY}`;

        try {
          await fetch(proxyurl + url)
            .then((response) => response.json())
            .then(async (contents) => {
              if (contents.status === "OK") {
                const distances = contents.rows[0].elements;
                const unorderedTutors = [];
                for(let i=0; i<25; i++) { // Google geocode allows max of 25 items per request. Solve this with pagination
                  if (tutors[i] !== undefined) {
                    if (user.id !== tutors[i].user) {
                      unorderedTutors.push(
                              <TutorList
                              key={i}
                              tutor={tutors[i]}
                              distance={distances[i]}
                              />
                              );
                            }
                  }
                  }
                
                // tutors.forEach((tutor, idx) => {
                //   if (user.id !== tutor.user) {
                //     unorderedTutors.push(
                //       <TutorList
                //       key={idx}
                //       tutor={tutor}
                //       distance={distances[idx]}
                //       />
                //       );
                //     }
                //   });
                  unorderedTutors.sort(function (a, b) {
                    return (
                      a.props.distance.distance.value -
                      b.props.distance.distance.value
                      );
                    });
                setTutorDisplay(unorderedTutors);
              }
            });
        } catch {
          console.log("catch triggered");
          setError(
            "There seems to be an issue with google's location matrix... Distance features have been disabled temporarily. We apologize for the inconvenience"
          );
        }
        previousVals.current = { tutors, user };
      }
    }
    googleDistance();
  }, [tutors, user]);

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
