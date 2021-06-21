import { Link } from "react-router-dom";
import "./DashboardPage.css";
import Calendar from "react-calendar";
import React, { useState, useEffect } from "react";
import DashCalendar from "../../components/DashCalendar/DashCalendar"
import DashList from "../../components/DashList/DashList"
import axios from "axios";

export default function DashboardPage({ user }) {
  const [slots, setSlots] = useState([])
  const [displayedSlots, setDisplayedSlots] = useState([]);
  const [dateClicked, setDateClicked] = useState("")

  useEffect (() => {
    async function getSlots() {
      axios
      .get(`/api/dashboard/${user.id}/`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log("tutor available slots =>", res.data);
        setSlots(res.data);
        const availableSlots = res.data.filter(slot => new Date().toLocaleDateString("en-US") === slot.date)
        setDisplayedSlots(availableSlots);
      });
    }
    getSlots()
  }, [user])

  useEffect(() => {
    if (slots.length === 0) {
      console.log('heh')
    }
    const availableSlots = slots.filter(slot => dateClicked === slot.date)
    console.log(availableSlots)
    setDisplayedSlots(availableSlots);
  }, [dateClicked]);
  //   const tileContent = ({ date, view }) => view === 'month' && slots.find(e => e['date'] === date.toLocaleDateString("en-US")) ? "*" : null;
  return (
    <div className="Dashboard">
      <div className="header">
        <h1>User Dashboard</h1>
        <p>
          This page is currently under construction! For now, TUTOR accounts
          will be able to manage their time slots and find out who signed up for
          their services while STUDENT accounts are only able to view the days
          and times for their appointments.
        </p>
      </div>

      <div className="details">
        <DashCalendar user={user} slots={slots} setSlots={setSlots} setDateClicked={setDateClicked}/>
      </div>

      <div className="right">
        <DashList user={user} slots={slots} displayedSlots={displayedSlots}/>
      </div>
    </div>
  );
}
