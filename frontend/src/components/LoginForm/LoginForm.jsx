import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./LoginForm.css";

export default function LoginForm({ setUser, setLoggedIn }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(evt) {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    const options = {
      url: "/token-auth/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: form.username,
        password: form.password,
      },
    };
    evt.preventDefault();

    try {
      const user = await axios(options).then((response) => {
        localStorage.setItem("token", response.data.token);
        setUser({
          id: response.data.id,
          username: response.data.username,
        });
        setLoggedIn(localStorage.getItem("token"));
      });
    } catch {
      setError("Sign Up Failed");
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <h4> LOG IN </h4>
          {/* <img src="../../images/logo.png"></img> */}
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <br />

          <input
            placeholder="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <br />
          <button class="btn btn-primary" type="submit">
            {" "}
            LOG IN{" "}
          </button>
        </form>
        <br />
      </div>
    </>
  );
}
