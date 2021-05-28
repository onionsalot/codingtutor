import React, { useState, useEffect } from "react";
import axios from "axios";
import TutorDetailsReviewCard from "./TutorDetailsReviewCard";

export default function TutorDetailsReviews({ userId, tutorId }) {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    rating: "",
    comment: "",
  });

  useEffect(() => {
    async function fetchData() {
      const data = await axios
        .get(`http://localhost:8000/details/user_reviews/${tutorId}`, {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setReviews(response.data);
        });
    }
    fetchData();
  }, []);

  const newReviews = reviews.map((review, idx) => (
    <TutorDetailsReviewCard key={idx} review={review} />
  ));

  function handleChange(evt) {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const options = {
      url: `http://localhost:8000/details/${tutorId}/add_review/${userId}/`,
      method: "POST",
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
      data: {
        form,
      },
    };

    try {
      const user = await axios(options).then((response) => {
        setReviews([...reviews, response.data]);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {newReviews}
      <h1>Reviews</h1>
      <form onSubmit={handleSubmit}>
        <p> Rating: </p>

        <input type="radio" name="rating" value="1" onChange={handleChange} />
        <label for="1">1</label>
        <br />

        <input type="radio" name="rating" value="2" onChange={handleChange} />
        <label for="2">2</label>
        <br />

        <input type="radio" name="rating" value="3" onChange={handleChange} />
        <label for="3">3</label>
        <br />

        <input type="radio" name="rating" value="4" onChange={handleChange} />
        <label for="4">4</label>
        <br />


        <label for="5">5</label>
        <br />

        <textarea
          name="comment"
          rows="5"
          cols="60"
          placeholder="WRITE REVIEW HERE"
          onChange={handleChange}
        ></textarea>
        <br />
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
