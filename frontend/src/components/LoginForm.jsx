import React, { useState } from "react";
import axios from "axios";

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
        console.log(response);
        localStorage.setItem("token", response.data.token);
        setUser({
          "id" : response.data.id,
          "username" : response.data.username
      });
        setLoggedIn(localStorage.getItem("token"));
      });
    } catch {
      setError("Sign Up Failed");
    }
  }

  return (
    <div>
      <h4> LOG IN </h4>
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
        <button type="submit"> LOG IN </button>
      </form>
    </div>
  );
}
