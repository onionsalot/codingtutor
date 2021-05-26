import axios from "axios";
import React, { useState } from "react";


export default function TutorSlots({user}) {
  const [form, setForm] = useState({
    hour: " ",
    date: " "
  });

  function handleChange(evt) {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    console.log(user)
    const options = {
      url: `http://localhost:8000/slots/${user.id}/add_slot/`, 
      method: "POST",
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`,
      },
      data: {
        hour: form.hour,
        date: form.date,
      },
    }
    evt.preventDefault();
    try{
      await axios(options).then((response) => {
        console.log(response);
      })
    } catch(err) {
      console.log(err)
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
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
        <label> Select A Date </label>
        <input
          type="text"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
      <button type="submit"> CONFIRM TIME SLOT </button>
      </form>
    </div>
  )
}
