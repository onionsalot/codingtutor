import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
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
    setError("");
    const options = {
      url: "/api/token-auth/",
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
      setError("Invalid Credentials");
    }
  }

  async function handleDemo(evt) {
    setError("");
    const options = {
      url: "/api/token-auth/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: "tutor",
        password: "1234567",
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
      setError("Invalid Credentials");
    }
  }

  return (
    <>
      <div className="login">
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
          </button><br/>
        {error}
        </form>
        <div className="login-nav">
            <Link to="/about">About</Link>
          <form onSubmit={handleDemo} autoComplete="off">
          <button class="button-link" type="submit">Login to Demo Account</button>
          </form>
        </div>
        <br />
      </div>
    </>
  );
}
