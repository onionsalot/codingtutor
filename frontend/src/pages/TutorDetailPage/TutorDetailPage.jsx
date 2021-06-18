import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TutorDetail from "../../components/TutorDetail/TutorDetail";
import axios from "axios";
import TutorSlots from "../../components/Slots/TutorSlots";
import TutorDetailsReview from "../../components/TutorDetail/TutorDetailsReviews";
import "./TutorDetailPage.css";

export default function TutorDetailPage({ user }) {
  const [reviews, setReviews] = useState([]);
  const [tutor, setTutor] = useState([]);
  const tutorId = useParams();

  useEffect(() => {
    async function getTutor() {
      axios
        .get(`/api/details/${tutorId.id}/`, {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },
        })

        .then(async (response) => {
          setTutor(response.data);
          await axios
        .get(`/api/details/user_reviews/${tutorId.id}`, {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setReviews(response.data);
        });
        });
    }

    getTutor();
  }, [tutorId]);

  return (
      <div className="holder">
        <div className="header">
          <h1>Tutor Details</h1>
        </div>
        <div className="details">
          <TutorDetail user={user} tutor={tutor} />
          <hr />
          <div className="reviews">
          <TutorDetailsReview userId={user.id} tutorId={tutorId.id} reviews={reviews} setReviews={setReviews}/>
          </div>
        </div>

        <div className="calendar">
          <TutorSlots
            tutorId={tutorId.id}
            tutor={tutor}
            user={user}
          />
        </div>
      </div>
  );
}
