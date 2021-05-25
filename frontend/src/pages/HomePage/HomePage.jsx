import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import TutorList from "../../components/TutorList/TutorList";

export default function HomePage({ props, user }) {
  const [tutors, setTutors] = useState([]);
  let tutorList = [];

  useEffect(() => {
    async function fetchData() {
      const data = await axios
        .get("http://localhost:8000/all_profiles", {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          tutorList = response.data;
          console.log("This is the user", tutorList);
          setTutors(tutorList)
        });
    }
    fetchData();
  }, []);
  const newList = tutors.map((tutor,idx) => <TutorList key={idx} tutor={tutor} />);
  console.log(newList)
  return (
    <>
      <br />
      <h1>All Tutors in your Area</h1>
      <h3>Zipcode :</h3>
      {/* <TutorList /> */}
      <br /> <br />
      {newList}
      {/* <div> 
        {data.map((tutor) =>
            <TutorList
              tutor={tutor}
              key={user._id}
             /> 
         )}
      </div> */}
    </>
  );
}
