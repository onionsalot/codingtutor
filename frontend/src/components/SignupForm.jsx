import React, { useState } from "react";
import axios from "axios";
import Select from 'react-select'

export default function SignupForm({ setUser, setLoggedIn }) {
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

  function handleSkills(evt) {
    let skillString = ""
    evt.map((e, idx) => {
      if (idx === 0) {
        skillString += e.label
      } else {
        skillString += `, ${e.label}`
      }
    })
    console.log(skillString)
    setForm({ ...form, "skills": skillString});
  }

  // eslint-disable-next-line no-undef
  const options = Choices.pairs('skills')

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
            {/* Inserting the multi select here , hold command to select multiple options */}
            <label> Skills </label>
            <Select
            onChange={handleSkills}
    isMulti
    name="colors"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
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
