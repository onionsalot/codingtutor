import React from "react";
import './TutorDetailsReviewCard.css'
import Card from 'react-bootstrap/Card'

export default function TutorDetailsReviewCard({review}) {

    return(
        // <fieldset>
        //     <legend>{review.user}</legend>
        //     <p>Rating: {review.rating}</p>
        //     <p>Comment: {review.comment}</p>
        // </fieldset>
        <>
  <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>Student ID/Name: {review.student}</Card.Header>
    <Card.Body>
      <Card.Text>
      Rating: {review.rating}<br/>
      <p>Comment: {review.comment}</p>
      </Card.Text>
    </Card.Body>
  </Card>

        </>
    )
}