import "./DashCalendar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Calendar from "react-calendar";
import React, { useState, useEffect } from "react";
import axios from "axios";


export default function DashCalendar({ user, slots, setDateClicked }) {
  const [value, onChange] = useState(new Date());
  const [form, setForm] = useState({
    date: value.toLocaleDateString("en-US"),
  });
  const [slotsArray, setSlotsArray] = useState([])
  const [error, setError] = useState("")
  const [buttons, setButtons] = useState(
    new Array(13).fill(false)
);

  function onClickDay(value, event) {
    const newDate = value.toLocaleDateString("en-US");
    setForm({ ...form, date: newDate });
    setDateClicked(newDate)
  }

  function onCalChange(value, event) {  
    onChange(value);
    const newDate = value.toLocaleDateString("en-US");

  }

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   console.log(form)
  //   console.log(slotsArray)
    
  // }
  async function handleSubmit(evt) {
    evt.preventDefault();
    const options = {
      url: `/api/slots/${user.id}/add_slot/`,
      method: "POST",
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
      data: {
        hour: slotsArray,
        date: form.date,
      },
    };
    try {
      await axios(options).then((response) => {
        // const availableSlots = (
        //   <StudentSlots tutor={tutor} user={user} slot={response.data} />
        // );
        // setDisplayedSlots([...displayedSlots, availableSlots]);
        console.log(response.data)
        setSlotsArray([])
        setButtons(new Array(13).fill(false))
        // if (response.data.success === false) {
        //   setError("Unable to add duplicate slot")
        // } else {

        //   const unsortedSlots= [...slots, response.data]
        //   unsortedSlots.sort(function (a, b) {
        //     return (
        //       a['hour'] -
        //       b['hour']
        //     );
        //   });
        //   setSlots(unsortedSlots)
        // }
      });
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(idx, e) {
    const checkedState = buttons.map((button, index) => index === idx ? !button : button
    );
    setButtons(checkedState);
    if (e.target.checked === true) {
      slotsArray.push(e.target.value)
    } else {
      setSlotsArray(slotsArray.filter(i => i !== e.target.value))
    }
  }

    const tileContent = ({ date, view }) => view === 'month' && slots.find(e => e['date'] === date.toLocaleDateString("en-US") && e['student'] !== null) ? "**" : null;

    const tileClassName = ({ date, view }) => view === 'month' && slots.find(e => e['date'] === date.toLocaleDateString("en-US")) ? "highlight" : "";
  const timeChoices = []
  for (let i = 8; i < 21; i++) {
    timeChoices.push(<div id="ck-button">
      <label>
        <input checked={buttons[i-8]} type="checkbox" onChange={(e)=>handleChange(i-8, e)} value={i<10? `0${i}`: `${i}`} />
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
            tileContent={tileContent}
            tileClassName={tileClassName}
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
