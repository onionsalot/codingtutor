import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import "./SignupForm.css";

export default function SignupForm({ setUser, setLoggedIn }) {
  axios.defaults.xsrfCookieName = 'csrftoken'
  axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  axios.defaults.withCredentials = false
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
    setForm({ ...form, [evt.target.name]: evt.target.value });
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
        skills: form.skills,
        rate: form.rate,
        image: form.image,
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

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "xdgkaefq");
    axios
      .post("https://api.cloudinary.com/v1_1/dq8yhiefg/image/upload", {
        method: "POST",
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: {
          formData
        }
      } )
        
      .then((response) => {
        setForm({ ...form, image: response.data.url });
      });
  };

  return (
    <div>
      <br />
      <label>Add an Image</label>
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
      <br />

      <form onSubmit={handleSubmit} autoComplete="off">
        <h4> Sign Up </h4>

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
        />
        <br />
        <input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
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

        <input
          placeholder="Zipcode"
          type="number"
          name="zipcode"
          value={form.zipcode}
          onChange={handleChange}
        />
        <br />
        {signUpTutor ? (
          <>
            <label> Skills </label>
            <Select
              onChange={handleSkills}
              isMulti
              name="colors"
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
            />
            <br />
            <label> Rate Per Hour </label>
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
        <button class="btn btn-primary" type="submit">
          {" "}
          SIGN UP{" "}
        </button>
        <div>
          <button
            class="btn btn-success"
            onClick={() => setSignUpTutor(!signUpTutor)}
          >
            {signUpTutor
              ? "CLICK IF YOU ARE A STUDENT"
              : "CLICK IF YOU ARE A TUTOR"}
          </button>
        </div>
      </form>
    </div>
  );
}
