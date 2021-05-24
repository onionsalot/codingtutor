import React, { useState } from "react";
import axios from "axios";

export default function SignupForm({ setUsername, setLoggedIn }) {
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
      url: "http://localhost:8000/users/",
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
        console.log(response);
        localStorage.setItem("token", response.data.token);
        setUsername(form.username);
        setLoggedIn(localStorage.getItem("token"));
      });
    } catch {
      setError("Sign Up Failed");
    }
  }

  return (
    <div>
      <h4> Sign Up </h4>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label> Username </label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit"> SIGN UP </button>
      </form>
    </div>
  );
}
