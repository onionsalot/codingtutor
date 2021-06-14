import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./StudentSlots.css";

export default function StudentSlots({ tutor, user, slot, setError }) {
  const [buttonState, setButtonState] = useState(true)
  const history = useHistory();
  const [currentSlot, setCurrentSlot] = useState(slot.student)

    // if (slot.student !== null) {
    //   setButtonState(false)
    // }

  async function handleSubmit(evt) {
    const options = {
      url: `/api/slots/${slot.id}/assoc_student/${user.id}/`,
      method: "PUT",
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    };
    evt.preventDefault();
    if (tutor.user === user.id) {
      setError(<p className="error">You can't sign up for your own timeslots, dummy!</p>)
      return
    }
    try {
        await axios(options).then((response) => {
        console.log(response);
        setCurrentSlot({student: user.id})
        setError(<p className="success">Successfully signed up for timeslot. Mark your calendars!</p>)
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="slots">
        {currentSlot == null ? (
          <form onSubmit={handleSubmit}>
            <Button className="slotButton" type="submit" variant="primary">
              {slot.hour}:00
            </Button>
          </form>
        ) : (
          <Button className="slotButton" variant="danger" onClick={() => setError(<p className="error">This slot belongs to another student.</p>)}>{slot.hour}:00</Button>
        )}
      </div>
    </>
  );
}
