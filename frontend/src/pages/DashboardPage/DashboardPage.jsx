import { Link } from "react-router-dom";
import "./DashboardPage.css";
import Calendar from "react-calendar";
import React, { useState, useEffect } from "react";
import DashCalendar from "../../components/DashCalendar/DashCalendar"

export default function DashboardPage({ user }) {


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
        <DashCalendar user={user} />
      </div>

      <div className="right"></div>
    </div>
  );
}
