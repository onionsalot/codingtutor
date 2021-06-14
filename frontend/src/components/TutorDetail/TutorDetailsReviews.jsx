import React, { useState, useEffect } from "react";
import axios from "axios";
import TutorDetailsReviewCard from "./TutorDetailsReviewCard";
import "./TutorDetailsReviews.css";

export default function TutorDetailsReviews({ userId, tutorId }) {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    rating: "",
    comment: "",
  });

  useEffect(() => {
    async function fetchData() {
      const data = await axios
        .get(`/api/details/user_reviews/${tutorId}`, {
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
      url: `/api/details/${tutorId}/add_review/${userId}/`,
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
      <h1>Reviews</h1>
      <div className="reviewCards">
      {newReviews}
      </div>
      <h1>Add Review</h1>
      <form onSubmit={handleSubmit}>
        <p> Rating: </p>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rating" id="inlineRadio1" value="1" onChange={handleChange} />
          <label class="form-check-label" for="inlineRadio1">1</label>
        </div>


        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rating" id="inlineRadio2" value="2" onChange={handleChange} />
          <label class="form-check-label" for="inlineRadio2">2</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rating" id="inlineRadio3" value="3" onChange={handleChange} />
          <label class="form-check-label" for="inlineRadio3">3</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rating" id="inlineRadio4" value="4" onChange={handleChange} />
          <label class="form-check-label" for="inlineRadio4">4</label>
        </div>


        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="rating" id="inlineRadio5" value="5" onChange={handleChange} />
          <label class="form-check-label" for="inlineRadio5">5</label>
        </div>

        <textarea
          name="comment"
          rows="5"
          cols="60"
          placeholder="WRITE REVIEW HERE"
          onChange={handleChange}
          className="reviewArea"
        ></textarea>
        <br />
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
