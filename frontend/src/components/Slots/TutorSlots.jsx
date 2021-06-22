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
          console.log("tutor available slots =>", res.data);
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

  // useEffect(() => {
  //   if (slots.length === 0) {
  //     return console.log('heh')
  //   }
  //   // const availableSlots = slots.map((slot, idx) => {
  //   //   if (value.toLocaleDateString("en-US") === slot.date) {
  //   //     return (
  //   //       <StudentSlots
  //   //         tutor={tutor}
  //   //         user={user}
  //   //         key={idx}
  //   //         slot={slot}
  //   //         setSlots={setSlots}
  //   //         setError={setError}
  //   //       />
  //   //     );
  //   //   } else {
  //   //     return "";
  //   //   }
  //   // });
  //   // setDisplayedSlots(availableSlots);

  //   const newDate = value.toLocaleDateString("en-US");
  //   const filteredSlots = slots.filter(slot => newDate === slot.date)
  //   const availableSlots = filteredSlots.map((slot, idx) => 
  //       <StudentSlots
  //       tutor={tutor}
  //       user={user}
  //       key={idx}
  //       slot={slot}
  //       setSlots={setSlots}
  //       setError={setError}
  //       />
  //       );

  //     setDisplayedSlots(availableSlots);
  // }, [slots, tutor, user]);


  // async function handleSubmit(evt) {
  //   evt.preventDefault();
  //   const options = {
  //     url: `/api/slots/${tutorId}/add_slot/`,
  //     method: "POST",
  //     headers: {
  //       Authorization: `JWT ${localStorage.getItem("token")}`,
  //     },
  //     data: {
  //       hour: form.hour,
  //       date: form.date,
  //     },
  //   };
  //   try {
  //     await axios(options).then((response) => {
  //       // const availableSlots = (
  //       //   <StudentSlots tutor={tutor} user={user} slot={response.data} />
  //       // );
  //       // setDisplayedSlots([...displayedSlots, availableSlots]);
  //       console.log(response.data)
  //       if (response.data.success === false) {
  //         setError("Unable to add duplicate slot")
  //       } else {

  //         const unsortedSlots= [...slots, response.data]
  //         unsortedSlots.sort(function (a, b) {
  //           return (
  //             a['hour'] -
  //             b['hour']
  //           );
  //         });
  //         setSlots(unsortedSlots)
  //       }
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  function onClickDay(value, event) {
    const newDate = value.toLocaleDateString("en-US");
    setForm({ ...form, date: newDate });
    onChange(value);
    // console.log(buttons[10].props.slot.date)
    const filteredSlots = buttons.filter(slot => newDate === slot.props.slot.date)
    setDisplayedSlots(filteredSlots)
    // console.log(filteredSlots)
    // const availableSlots = filteredSlots.map((slot, idx) => 
    //     <StudentSlots
    //     tutor={tutor}
    //     user={user}
    //     key={idx}
    //     slot={slot}
    //     setSlots={setSlots}
    //     setError={setError}
    //     />
    //     );
    // setDisplayedSlots(availableSlots);
  }

  // function onCalChange(value, event) {
  //   onChange(value);
  //   setDisplayedSlots([]);
  //   const newDate = value.toLocaleDateString("en-US");
  //   const filteredSlots = slots.filter(slot => newDate === slot.date)
  //   const availableSlots = filteredSlots.map((slot, idx) => 
  //       <StudentSlots
  //       tutor={tutor}
  //       user={user}
  //       key={idx}
  //       slot={slot}
  //       setSlots={setSlots}
  //       setError={setError}
  //       />
  //       );

  //     console.log(filteredSlots)
  //     setDisplayedSlots(availableSlots);
  // }

  const tileContent = ({ date, view }) => view === 'month' && slots.find(e => e['date'] === date.toLocaleDateString("en-US")) ? "*" : null;

  return (
    <section className="calContainer">
        <main className="cal">
          <Calendar
            // onChange={onCalChange}
            value={value}
            onClickDay={onClickDay}
            tileContent={tileContent}
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
