import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import "./SignupForm.css";

export default function SignupForm({ setUser, setLoggedIn }) {
  axios.defaults.xsrfHeaderName = "X-CSRFToken";
  
  const [signUpTutor, setSignUpTutor] = useState(true);
  const [image, setImage] = useState("");
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
    zipcode: "",
    skills: "",
    rate: "",
    image: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    if (evt.target.files) {
      setImage(evt.target.files[0])
      setForm({ ...form, [evt.target.name]: evt.target.files[0] });
    } else {
      setForm({ ...form, [evt.target.name]: evt.target.value });
    }
  }

  function handleSkills(evt) {
    let skillString = "";
    evt.map((e, idx) => {
      if (idx === 0) {
        skillString += e.label;
      } else {
        skillString += `, ${e.label}`;
      }
    });
    setForm({ ...form, skills: skillString });
  }

  // eslint-disable-next-line no-undef
  const options = Choices.pairs("skills");

  async function handleSubmit(evt) {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("upload_preset", "xdgkaefq");
    const proxyurl = "https://fierce-wildwood-46381.herokuapp.com/";
    const url = `https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${form.zipcode}|country:USA&key=${process.env.REACT_APP_GOOGLE_KEY}`; 
    
    evt.preventDefault();
    if (form.rate === "" || form.skills === "") {
      if (signUpTutor === true) {
        setError("As a tutor, please list skills and set rate!")
        return
      }
    }
    setError("")
    try {
      await fetch(proxyurl + url)
      .then(response => response.json())
      .then(async (contents) => {
        if (contents.status === "ZERO_RESULTS") {
          setError("Invalid Zipcode")
        } else if (contents.status === "OK"){
          setError("")
          setForm({ ...form, place_id: contents.results[0].place_id });
          const options = {
            url: "/api/users/",
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
              place_id: contents.results[0].place_id,
              skills: form.skills,
              rate: form.rate,
              // image: form.image,
            },
          };
          console.log(options)
          await axios(options).then(async (response) => {
            console.log(response)
            localStorage.setItem("token", response.data.token);
            setUser({
              id: response.data.id,
              username: response.data.username,
              place_id: response.data.place_id
            });
            if (image === "" || image === null || image === undefined) {
              console.log('no image')
              setLoggedIn(localStorage.getItem("token"));
            } else {
              await axios.put("/api/users/image/", formData, {
                headers: {
                  Authorization: `JWT ${localStorage.getItem("token")}`,
                  'content-type': 'multipart/form-data'
                }
              }).then((res) => {
                console.log(res)
                setLoggedIn(localStorage.getItem("token"));
              })
            }
          });
        }
      })

    } catch {
      setError("Sign Up Failed");
    }
  }

  return (
    <div>
      <br />
      {/* <label>Add an Image</label>
      <input
        className="image"
        type="file"
        onChange={(event) => {
          setImage(event.target.files[0]);
        }}
      />
      <button className="upload" onClick={uploadImage}>
        Upload Image
      </button>
      <br />
      <p>
        {form.image === ""
          ? "Upload image before submitting!"
          : "Upload Success!!"}
      </p>
      <br /> */}

      <form onSubmit={handleSubmit} autoComplete="off">
        <h4> Sign Up </h4>
        <label>Add an Image</label>
      <input
        className="image"
        type="file"
        onChange={(event) => {
          setImage(event.target.files[0]);
        }}
      />
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
          placeholder="First Name"
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={form.email}
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
        <input
          placeholder="Bio"
          type="text"
          name="bio"
          value={form.bio}
          onChange={handleChange}
        />
        <br />

        {error === "Invalid Zipcode" ? (<span class="text-danger">* </span>) : ("")}<input
          placeholder="Zipcode"
          type="number"
          name="zipcode"
          value={form.zipcode}
          onChange={handleChange}
          required
        />
        <br />
        {signUpTutor ? (
          <>
            <label> {error === "As a tutor, please list skills and set rate!" ? (<span class="text-danger">* </span>) : ("")}Skills </label>
            <Select
              onChange={handleSkills}
              isMulti
              name="colors"
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
            />
            <br />
            <label> {error === "As a tutor, please list skills and set rate!" ? (<span class="text-danger">* </span>) : ("")}Rate Per Hour </label>
            <br />
            <input
              type="number"
              name="rate"
              value={form.rate}
              onChange={handleChange}
            />
            <br />
          </>
        ) : (
          <h1></h1>
        )}
        <br />
        <p class="text-danger">{error}</p>
        <br />
        <button class="btn btn-primary" type="submit">
          {" "}
          SIGN UP{" "}
        </button>
        <div>
          <span
            class="btn btn-success"
            onClick={() => {
              setForm({ ...form, skills: "", rate: "" });
              setSignUpTutor(!signUpTutor)
            }}
          >
            {signUpTutor
              ? "CLICK IF YOU ARE A STUDENT"
              : "CLICK IF YOU ARE A TUTOR"}
          </span>
        </div>
        <br />
      </form>
    </div>
  );
}
