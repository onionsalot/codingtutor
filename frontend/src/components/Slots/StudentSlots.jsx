import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import {
  Card,
  Button,
  Col,
  CardGroup,
  CardDeck,
  CardColumns,
  Row,
  Container,
} from "react-bootstrap";
import "./StudentSlots.css";

export default function StudentSlots({ tutor, user, slot }) {
  const history = useHistory();

  async function handleSubmit(evt) {
    const options = {
      url: `/slots/${slot.id}/assoc_student/${user.id}/`,
      method: "PUT",
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    };
    evt.preventDefault();
    try {
      const user = await axios(options).then((response) => {
        console.log(response);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="overflow">
        {slot.student == null ? (
          <form onSubmit={handleSubmit}>
            <Button type="submit" variant="primary">
              {slot.hour}:00
            </Button>
          </form>
        ) : (
          <Button variant="danger">{slot.hour}:00</Button>
        )}
      </div>
    </>
  );
}
