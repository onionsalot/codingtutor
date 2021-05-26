import React from "react";
import { Link } from "react-router-dom";


export default function TutorDetail() {
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