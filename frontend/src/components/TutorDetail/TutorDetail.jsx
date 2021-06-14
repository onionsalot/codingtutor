import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./TutorDetail.css";
import placeholder from "../../images/Placeholder.png";

export default function TutorDetail({ user, tutor }) {
  const tutorImage = tutor.image === null ? placeholder : tutor.image;
  return (
    <>
      <div className="container2">
        <div className="panel-body">
          <h2>
            Name:{tutor.first_name} {tutor.last_name}{" "}
          </h2>
          <img className="imgPf" src={tutorImage} alt="tutor profile pic"/>
          <br />
          <h2> Email: {tutor.email}</h2>
          <br />
          <h2>Bio: {tutor.bio}</h2>
          <br />
          <h2>Skills: {tutor.skills}</h2>
          <br />
          <h2>Rate: ${tutor.rate}/hour</h2>
          <br />
          <h2>Zipcode: {tutor.zipcode}</h2>
          <br />
          <br />
          <Link className="btn btn-success" to="/">
            RETURN TO TUTOR HOMEPAGE
          </Link>
        </div>
      </div>
    </>
  );
}
