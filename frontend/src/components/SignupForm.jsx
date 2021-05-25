import React, { useState } from "react";
import axios from "axios";

export default function SignupForm({ setUsername, setLoggedIn }) {
  const [signUpTutor, setSignUpTutor] = useState(true);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
    zipcode: "",
    skills: "",
    rate: "",
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
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
        bio: form.bio,
        zipcode: form.zipcode,
        skills: form.skills,
        rate: form.rate,
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
        <label> First Name </label>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
        <label> Last Name </label>
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
        <label> Email </label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <label> Password </label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <label> Short Bio </label>
        <input
          type="text"
          name="bio"
          value={form.bio}
          onChange={handleChange}
        />
        <label> Zipcode </label>
        <input
          type="number"
          name="zipcode"
          value={form.zipcode}
          onChange={handleChange}
        />
        {signUpTutor ? (
          <>
            <label> Skills </label>
            <input
              type="text"
              name="skills"
              value={form.skills}
              onChange={handleChange}
            />
            <label> Rate Per Hour </label>
            <input
              type="number"
              name="rate"
              value={form.rate}
              onChange={handleChange}
            />
          </>
        ) : (
          <h1></h1>
        )}
        <button type="submit"> SIGN UP </button>
        <div>
          <button onClick={() => setSignUpTutor(!signUpTutor)}>
            {signUpTutor
              ? "CLICK IF YOU ARE A STUDENT"
              : "CLICK IF YOU ARE A TUTOR"}
          </button>
        </div>
      </form>
    </div>
  );
}
