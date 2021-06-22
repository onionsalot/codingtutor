import "./DashList.css";
import React, { useState, useEffect } from "react";


export default function DashboardPage({ user, slots, displayedSlots }) {
    const [listHour, setListHour] = useState([])
    const military= {
        "08": "8:00 AM",
        "09": "9:00 AM",
        "10": "10:00 AM",
        "11": "11:00 AM",
        "12": "12:00 PM",
        "13": "1:00 PM",
        "14": "2:00 PM",
        "15": "3:00 PM",
        "16": "4:00 PM",
        "17": "5:00 PM",
        "18": "6:00 PM",
        "19": "7:00 PM",
        "20": "8:00 PM",
    }
    useEffect(() => {
        const items = displayedSlots.map((s) => {
            return <li className={s.student === null ? "open" : "close"}>
                <span className="time_element">{military[`${s.hour}`]}</span> : {s.student === null ? "Open slot" : `${s.student.last_name}, ${s.student.first_name}`}
            </li>
        })
        setListHour(items)
    }, [displayedSlots])

  return (
    <>
    <h1>Date Details:</h1> <br/>
    {/* <h3>{slots[0].date}</h3> */}
    <h3>{displayedSlots.length !== 0 ? `${displayedSlots[0].date}`:`You have not created any timeslots for today!`}</h3>
    <ul className="list_items">
        {listHour}
    </ul>
    </>
  );
}
