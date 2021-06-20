import "./DashCalendar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Calendar from "react-calendar";
import React, { useState, useEffect } from "react";

export default function DashCalendar({ user }) {
  const [value, onChange] = useState(new Date());
  const [form, setForm] = useState({
    date: value.toLocaleDateString("en-US"),
  });
  const [slotsArray, setSlotsArray] = useState([])

  function onClickDay(value, event) {
    const newDate = value.toLocaleDateString("en-US");
    setForm({ ...form, date: newDate });
  }

  function onCalChange(value, event) {
    onChange(value);
    const newDate = value.toLocaleDateString("en-US");

  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
    console.log(slotsArray)
  }

  function handleChange(e) {
    if (e.target.checked === true) {
      slotsArray.push(e.target.value)
    } else {
      setSlotsArray(slotsArray.filter(i => i !== e.target.value))
    }
  }

  //   const tileContent = ({ date, view }) => view === 'month' && slots.find(e => e['date'] === date.toLocaleDateString("en-US")) ? "*" : null;

  const timeChoices = []
  for (let i = 8; i < 21; i++) {
    timeChoices.push(<div id="ck-button">
      <label>
        <input type="checkbox" onChange={handleChange} value={i<10? `0${i}`: `${i}`} />
        <span>{i<13? `${i} am`:`${i-12} pm`}</span>
      </label>
    </div>)
  }
  return (
    <div className="DashCalendar">
      <form onSubmit={handleSubmit} autoComplete="off">
        <main className="dashCal">
          <Calendar
            onChange={onCalChange}
            value={value}
            onClickDay={onClickDay}
            // tileContent={tileContent}
          />
        </main>
        <div className="dashChoices">
          <label><h2>Select A time</h2></label><br/>
          {timeChoices}
          <br />
          <Button type="submit"> CONFIRM TIME SLOT </Button>
        </div>
      </form>
    </div>
  );
}
