import React, { useState } from "react";
import { useLocation, Route } from "react-router-dom";
import TutorDetail from "../../components/TutorDetail/TutorDetail"




export default function TutorDetailPage(props) {
//   const [tutors, setTutors] = useState(getUser());
//   const {
//     state: {tutor },
//   } = useLocation();

  return (
    <>
      <br />
      <h1>Tutor Details</h1>
      <br />
      <TutorDetail   />
    </>
  );
}