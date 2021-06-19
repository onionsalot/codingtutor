import "./DashCalendar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Calendar from "react-calendar";
import React, { useState, useEffect } from "react";

export default function DashCalendar({ user }) {
  const [value, onChange] = useState(new Date());

  function onClickDay(value, event) {
    const newDate = value.toLocaleDateString("en-US");
  }

  function onCalChange(value, event) {
    onChange(value);
    const newDate = value.toLocaleDateString("en-US");
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.data)
  }

  function handleChange(e) {}
  //   const tileContent = ({ date, view }) => view === 'month' && slots.find(e => e['date'] === date.toLocaleDateString("en-US")) ? "*" : null;

  const timeChoices = []
  for (let i = 8; i < 21; i++) {
    timeChoices.push(<div id="ck-button">
      <label>
        <input type="checkbox" value={i<10? `0${i}`: `${i}`} />
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
          <select name="hour" onChange={handleChange}>
            <option value="00" selected>
              12:00 AM
            </option>
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
        </div>
      </form>
    </div>
  );
}
