import axios from "axios";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./TutorSlots.css";
import StudentSlots from "./StudentSlots";
import { Button } from "react-bootstrap";

export default function TutorSlots({ slots, setSlots, tutorId, tutor, user }) {
  const [value, onChange] = useState(new Date());
  const [displayedSlots, setDisplayedSlots] = useState([]);
  const [form, setForm] = useState({
    hour: "00",
    date: value.toLocaleDateString("en-US"),
  });
  const [error, setError] = useState("");
  
  function handleChange(evt) {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const options = {
      url: `/api/slots/${tutorId}/add_slot/`,
      method: "POST",
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
      data: {
        hour: form.hour,
        date: form.date,
      },
    };
    try {
      await axios(options).then((response) => {
        const availableSlots = (
          <StudentSlots tutor={tutor} user={user} slot={response.data} />
        );
        setDisplayedSlots([...displayedSlots, availableSlots]);
      });
    } catch (err) {
      console.log(err);
    }
  }

  function onClickDay(value, event) {
    const newDate = value.toLocaleDateString("en-US");
    setForm({ ...form, date: newDate });
  }

  function onCalChange(value, event) {
    onChange(value);
    const newDate = value.toLocaleDateString("en-US");
    const availableSlots = slots.map((slot, idx) => {
      if (newDate === slot.date) {
        return <StudentSlots tutor={tutor} user={user} key={idx} slot={slot} setError={setError}/>;
      } else {
        return "";
      }
    });
    setDisplayedSlots(availableSlots);
  }
  return (
    <section className="calContainer">
          <form onSubmit={handleSubmit} autoComplete="off">
            <main className="cal">
            
            <Calendar
              onChange={onCalChange}
              value={value}
              onClickDay={onClickDay}
            />
            </main>
            <div className="timeSlots">
            {user.id == tutorId ? (
              <>
                <label>Select A Time</label>
                <select name="hour" onChange={handleChange}>
                  <option value="00" selected>12:00 AM</option>
                  <option value="01">1:00 AM</option>
                  <option value="02">2:00 AM</option>
                  <option value="03">3:00 AM</option>
                  <option value="04">4:00 AM</option>
                  <option value="05">5:00 AM</option>
                  <option value="06">6:00 AM</option>
                  <option value="07">7:00 AM</option>
                  <option value="08">8:00 AM</option>
                  <option value="09">9:00 AM</option>
                  <option value="10">10:00 AM</option>
                  <option value="11">11:00 AM</option>
                  <option value="12">12:00 PM</option>
                  <option value="13">1:00 PM</option>
                  <option value="14">2:00 PM</option>
                  <option value="15">3:00 PM</option>
                  <option value="16">4:00 PM</option>
                  <option value="17">5:00 PM</option>
                  <option value="18">6:00 PM</option>
                  <option value="19">7:00 PM</option>
                  <option value="20">8:00 PM</option>
                  <option value="21">9:00 PM</option>
                  <option value="22">10:00 PM</option>
                  <option value="23">11:00 PM</option>
                </select>
                <br />
                <Button type="submit"> CONFIRM TIME SLOT </Button>
              </>
            ) : (
              <h3>Log in as this user to add time slots!</h3>
            )}
            </div>
          </form>
          <div className="slotHolder">
            <h2 className="slotTop">Available Time Slots</h2>
            <div className="slotBot">{displayedSlots}</div>
          </div>
          {error}
    </section>
  );
}
