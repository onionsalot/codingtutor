import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TutorDetail from "../../components/TutorDetail/TutorDetail";
import axios from "axios";
import TutorSlots from "../../components/Slots/TutorSlots";
import TutorDetailsReview from "../../components/TutorDetail/TutorDetailsReviews";
import "./TutorDetailPage.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PopupOverlay from "../../components/PopupOverlay/PopupOverlay";

export default function TutorDetailPage({ user }) {
  const [reviews, setReviews] = useState([]);
  const [tutor, setTutor] = useState([]);
  const tutorId = useParams();
  const [show, setShow] = useState(false);
  const [showSlots, setShowSlots] = useState()

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
          console.log('bloop')
          setReviews(response.data);
          setShowSlots(<TutorSlots
            tutorId={tutorId.id}
            tutor={tutor}
            user={user}
          />)
        });
        });
    }

    getTutor();
  }, [tutorId]);

  // const showSlotss = (function() {
  //   console.log('wooooo')
  //   setShowSlots(<TutorSlots
  //   tutorId={tutorId.id}
  //   tutor={tutor}
  //   user={user}
  // />)
  // })();
  
  return (
    <>
      <div className={tutor.rate ? "holder":""}>
        <div className="header">
        <h1>User Details <PopupOverlay tutor={user.isTutor} details={true}/></h1>
        </div>
        <div className="details">
          <TutorDetail user={user} tutor={tutor} />
          {tutor.rate ? (
            <>
              <Button variant="danger" className="showButton" onClick={() => setShow(true)}>Schedule an appointment</Button>
              <hr />
              <div className="reviews">
                <TutorDetailsReview userId={user.id} tutorId={tutorId.id} reviews={reviews} setReviews={setReviews}/>
              </div>
            </>
          ) : (
            null
          )}
        </div>

        <div className="calendar">
          {tutor.rate ? showSlots:null}
        </div>
      </div>


      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Pick a timeslot
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showSlots}
        </Modal.Body>
      </Modal>
    </>
  );
}
