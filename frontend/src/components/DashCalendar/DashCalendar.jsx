import "./DashCalendar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Calendar from "react-calendar";
import React, { useState, useEffect } from "react";
import MyToast from "../MyToast/MyToast";
import axios from "axios";

export default function DashCalendar({
  user,
  slots,
  setSlots,
  setDateClicked,
}) {
  const [value, onChange] = useState(new Date());
  const [form, setForm] = useState({
    date: value.toLocaleDateString("en-US"),
  });
  const [slotsArray, setSlotsArray] = useState([]);
  const [error, setError] = useState("");
  const [buttons, setButtons] = useState(new Array(13).fill(false));
  const [selectState, setSelectState] = useState(false)
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("")

  function onClickDay(value, event) {
    const newDate = value.toLocaleDateString("en-US");
    setForm({ ...form, date: newDate });
    setDateClicked(newDate);
  }

  function onCalChange(value, event) {
    onChange(value);
    const newDate = value.toLocaleDateString("en-US");
  }

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
        if (slotsArray.length === response.data.length){
          setMsg(<span className="toast-success">All slots successfully added!</span>)
        } else if (slotsArray.length > response.data.length && response.data.length !== 0) {
          setMsg(`${response.data.length} slot added successfully! ${slotsArray.length-response.data.length} slot not added.`)
        } else if (response.data.length === 0) {
          setMsg(<span className="toast-danger">Error adding new slots</span>)
        }

        setSlotsArray([]);
        setButtons(new Array(13).fill(false));
        setSelectState(false)
        if (response.data.length !== 0) {
          setSlots(slots.concat(response.data));
          setDateClicked("");
          const newDate = value.toLocaleDateString("en-US");
          setDateClicked(newDate);
        }
        setShow(true)
        
      });
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(idx, e) {
    const checkedState = buttons.map((button, index) =>
      index === idx ? !button : button
    );
    setButtons(checkedState);
    if (e.target.checked === true) {
      slotsArray.push(e.target.value);
    } else {
      setSlotsArray(slotsArray.filter((i) => i !== e.target.value));
    }
  }

  function handleAll() {
    setButtons(new Array(13).fill(true));
    setSlotsArray(["08","09","10","11","12","13","14","15","16","17","18","19","20"])
    setSelectState(true)
  }
  function handleNone() {
    setButtons(new Array(13).fill(false));
    setSlotsArray([])
    setSelectState(false)
  }

  const tileContent = ({ date, view }) =>
    view === "month" &&
    slots.find(
      (e) =>
        e["date"] === date.toLocaleDateString("en-US") && e["student"] !== null
    )
      ? "**"
      : null;

  const tileClassName = ({ date, view }) =>
    view === "month" &&
    slots.find((e) => e["date"] === date.toLocaleDateString("en-US"))
      ? "highlight"
      : "";

  const timeChoices = [];

  for (let i = 8; i < 21; i++) {
    timeChoices.push(
      <div id="ck-button">
        <label>
          <input
            checked={buttons[i - 8]}
            type="checkbox"
            onChange={(e) => handleChange(i - 8, e)}
            value={i < 10 ? `0${i}` : `${i}`}
          />
          <span>{i < 13 ? `${i} am` : `${i - 12} pm`}</span>
        </label>
      </div>
    );
  }





  return (
    <>
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
        {user.isTutor ? (
          <div className="dashChoices">
          <label>
            <h2>Select A time</h2>
          </label>
          <br />
          {timeChoices}
          <br />
          {selectState ? (
            <Button className="dash-button" onClick={handleNone}> Deselect All </Button>
          ):(
            <Button className="dash-button" onClick={handleAll}> Select All </Button>
          )}
        <br />
          <Button className="dash-submit" type="submit"> CONFIRM TIME SLOT </Button>
        </div>
        ) : (
          null
        )}
      </form>
    </div>
    <MyToast show={show} setShow={setShow} msg={msg}/>
    </>
  );
}
