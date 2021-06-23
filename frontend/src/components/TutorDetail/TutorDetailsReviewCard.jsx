import React from "react";
import Card from "react-bootstrap/Card";

export default function TutorDetailsReviewCard({ review }) {
  return (
    <>
      <Card border="primary" style={{ width: "100%" }}>
        <Card.Header>Student ID: {review.student}</Card.Header>
        <Card.Body>
          <Card.Text>
            Rating: {review.rating}
            <br />
            <p>Comment: {review.comment}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
