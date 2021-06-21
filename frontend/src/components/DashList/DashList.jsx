import "./DashList.css";
import React, { useState, useEffect } from "react";


export default function DashboardPage({ user, slots, displayedSlots }) {
    const [listHour, setListHour] = useState([])
    useEffect(() => {
        const items = displayedSlots.map((s) => {
            return <li>
                {s.hour}: {s.student === null ? "Open slot" : `${s.student.last_name}, ${s.student.first_name}`}
            </li>
        })
        setListHour(items)
    }, [displayedSlots])

  return (
    <>
    <h1>Date Details:</h1>
    {/* <h3>{slots[0].date}</h3> */}
    <ul>
        {listHour}
    </ul>
    </>
  );
}
