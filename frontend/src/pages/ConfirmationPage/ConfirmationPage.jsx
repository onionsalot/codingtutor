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

       <Row xs={1} md={2} lg={3} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        {/* {tutor.image} */}
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </>
    )
}