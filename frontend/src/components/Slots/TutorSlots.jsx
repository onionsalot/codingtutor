import axios from "axios";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./TutorSlots.css";
import StudentSlots from "./StudentSlots";
import { Button } from "react-bootstrap";

export default function TutorSlots({ tutorId, tutor, user }) {
  const [value, onChange] = useState(new Date());
  const [displayedSlots, setDisplayedSlots] = useState([]);
  const [form, setForm] = useState({
    hour: "00",
    date: value.toLocaleDateString("en-US"),
  });
  const [error, setError] = useState("");
  const [slots, setSlots] = useState([]);
  const [buttons, setButtons] = useState([])

  useEffect(() => {
    async function getSlots() {
      axios
        .get(`/api/slots/${tutorId}/available_slots/`, {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setSlots(res.data);
        });
    }
    getSlots();
  }, [tutorId]);

  useEffect(() => {
    const availableSlots = slots.map((slot, idx) => 
    <StudentSlots
    tutorId={tutorId}
    user={user}
    key={idx}
    slot={slot}
    setSlots={setSlots}
    setError={setError}
    />
    );
  setButtons(availableSlots);
  }, [slots, tutorId, user])

  useEffect(() => {
    const newDate = value.toLocaleDateString("en-US");
    const filteredSlots = buttons.filter(slot => newDate === slot.props.slot.date)
    setDisplayedSlots(filteredSlots)
  }, [buttons])

  

  function onClickDay(value, event) {
    const newDate = value.toLocaleDateString("en-US");
    setForm({ ...form, date: newDate });
    onChange(value);
    const filteredSlots = buttons.filter(slot => newDate === slot.props.slot.date)
    setDisplayedSlots(filteredSlots)
    
  }


  const tileClassName = ({ date, view }) =>
    view === "month" &&
    slots.find((e) => e["date"] === date.toLocaleDateString("en-US"))
      ? "highlight"
      : "";
  return (
    <section className="calContainer">
        <main className="cal">
          <Calendar
            // onChange={onCalChange}
            value={value}
            onClickDay={onClickDay}
            tileClassName={tileClassName}
          />
        </main>
      <div className="slotHolder">
        <h2 className="slotTop">Available Time Slots</h2>
        <div className="slotBot">{displayedSlots}</div>
      </div>
      {error}
    </section>
  );
}
