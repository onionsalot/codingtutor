import React, { useState } from "react";
import { useLocation, Route } from "react-router-dom";
import TutorDetail from "../../components/TutorDetail/TutorDetail";

export default function TutorDetailPage({ user }) {
  return (
    <>
      <br />
      <h1>Tutor Details</h1>
      <br />
      <TutorDetail user={user} />
    </>
  );
}
