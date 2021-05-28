import { Link } from "react-router-dom"
import { Card, Button, Col, CardGroup, CardDeck, CardColumns, Row, Container} from "react-bootstrap";

export default function ConfirmationPage({props, tutor, slot}){


    return(
        <>
        <h1>Thank You! Your Tutoring Session Details are Below:</h1>
        <br/>
        <p>Your Tutor:</p>
        <p>Tutor Name:</p>
        <p>Your Time Slot:</p>
        <p>Time Slot</p>
        <div className="btn btn-success">
          <Link to="/">RETURN TO TUTOR HOMEPAGE</Link>
        </div>

       
        </>
    )
}