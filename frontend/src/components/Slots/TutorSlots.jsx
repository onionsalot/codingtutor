import React, { useState } from "react";


export default function TutorSlots() {
  const [form, setForm] = useState({
    hour: " ",
    date: " "
  });

  function handleChange(evt) {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    const options = {
      url: "http://localhost:8000/slots/<int:user_id>/add_slot/", // maybe wrong
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        hour: form.hour,
        date: form.date,
      },
    };
  }


  return(
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>Select A Time</label>
          <select name="hour">
            <option value="12AM">12:00 AM</option>
            <option value="1AM">1:00 AM</option>
            <option value="2AM">2:00 AM</option>
            <option value="3AM">3:00 AM</option>
            <option value="4AM">4:00 AM</option>
            <option value="5AM">5:00 AM</option>
            <option value="6AM">6:00 AM</option>
            <option value="7AM">7:00 AM</option>
            <option value="8AM">8:00 AM</option>
            <option value="9AM">9:00 AM</option>
            <option value="10AM">10:00 AM</option>
            <option value="11AM">11:00 AM</option>
            <option value="12PM">12:00 PM</option>
            <option value="1PM">1:00 PM</option>
            <option value="2PM">2:00 PM</option>
            <option value="3PM">3:00 PM</option>
            <option value="4PM">4:00 PM</option>
            <option value="5PM">5:00 PM</option>
            <option value="6PM">6:00 PM</option>
            <option value="7PM">7:00 PM</option>
            <option value="8PM">8:00 PM</option>
            <option value="9PM">9:00 PM</option>
            <option value="10PM">10:00 PM</option>
            <option value="11PM">11:00 PM</option>
        </select>
        <label> Select A Date </label>
        <input
          type="text"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
      </form>
      <button type="submit"> CONFIRM TIME SLOT </button>
    </div>
  )
}
