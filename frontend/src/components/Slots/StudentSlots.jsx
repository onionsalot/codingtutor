import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./StudentSlots.css";

export default function StudentSlots({ tutor, user, key, slot, setSlots, setError }) {
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
      data: {
        tutorId: tutor.id,
      },
    };
    evt.preventDefault();
    if (tutor.user === user.id) {
      setError(<p className="error">You can't sign up for your own timeslots, dummy!</p>)
      return
    }
    try {
        await axios(options).then((response) => {
        console.log(response.data);
        // setCurrentSlot({student: user.id})
        setSlots([])
        setError(<p className="success">Successfully signed up for timeslot. Mark your calendars!</p>)
        setSlots(response.data)
      });
    } catch (err) {
      console.log(err);
    }
  }

  function makeButton() {
    if (currentSlot === null) {
      return(<form onSubmit={handleSubmit}>
        <Button className="slotButton" type="submit" variant="primary">
          {slot.hour}:00
        </Button>
      </form>)
    } else if(currentSlot === user.id) {
      return(<Button className="slotButton" variant="success" onClick={() => setError(<p className="error">You currently have this slot held.</p>)}>{slot.hour}:00</Button>)
    } else {
      return(<Button className="slotButton" variant="danger" onClick={() => setError(<p className="error">This slot belongs to another student.</p>)}>{slot.hour}:00</Button>)
    }
  }

  const buttonDisplay = makeButton()
  return (
    <>
      <div className="slots">
        {buttonDisplay}
        {/* {currentSlot == null ? (
          <form onSubmit={handleSubmit}>
            <Button className="slotButton" type="submit" variant="primary">
              {slot.hour}:00
            </Button>
          </form>
        ) : (
          <Button className="slotButton" variant="danger" onClick={() => setError(<p className="error">This slot belongs to another student.</p>)}>{slot.hour}:00</Button>
        )} */}
      </div>
    </>
  );
}
