import axios from "axios";
import React, { useState } from "react";
import Calendar from 'react-calendar'
import './TutorSlots.css'
import StudentSlots from './StudentSlots'

export default function TutorSlots({slots, setSlots, tutorId, tutor, user}) {
  const [value, onChange] = useState(new Date());
  const [displayedSlots, setDisplayedSlots] = useState([])
  const [form, setForm] = useState({
    hour: " ",
    date: " "
  });

  function handleChange(evt) {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  }


  async function handleSubmit(evt) {
    console.log(tutorId)
    evt.preventDefault();
    const options = {
      url: `http://localhost:8000/slots/${tutorId}/add_slot/`, 
      method: "POST",
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`,
      },
      data: {
        hour: form.hour,
        date: form.date,
      },
    }
    try{
      await axios(options).then((response) => {
        console.log(response);
      })
    } catch(err) {
      console.log(err)
    }
  }

  function onClickDay(value, event) {
    const newDate = value.toLocaleDateString("en-US")
    setForm({ ...form, date: newDate});
  }

  function onCalChange(value, event) {
    console.log('bloop')
    onChange(value)
    const newDate = value.toLocaleDateString("en-US")
    const availableSlots = slots.map((slot, idx) => {
      if (newDate === slot.date) {
    return <StudentSlots tutor={tutor} user={user} key={idx} slot={slot}/>
      } else {
        return ""
      }
    });
    setDisplayedSlots(availableSlots)
  }


  return(
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
      <label> Select A Date </label>

      <div>
      <Calendar
        onChange={onCalChange}
        value={value}
        onClickDay={onClickDay}
      />
    </div>
        <label>Select A Time</label>
          <select name="hour" onChange={handleChange}>
            <option value="00">12:00 AM</option>
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
        {/* <label> Select A Date </label>
        <input
          type="text"
          name="date"
          value={form.date}
          onChange={handleChange}
        /> */}
      <button type="submit"> CONFIRM TIME SLOT </button>
      </form>

      {displayedSlots}
    </div>
  )
}
