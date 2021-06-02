import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./Navbar.css";

export default function NavBar({ username, loggedIn, setLoggedIn, userID }) {
  function handleLogOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }

  const detailURL = `/details/${userID}/`;

  return (
    <>
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand href="#home">&copy; Coding Tutor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link href="/">Home |</Nav.Link>
          </Nav>
          {loggedIn ? (
            <Nav.Link href={detailURL}> Hello, {username} </Nav.Link>
          ) : (
            <h3>Please Log In</h3>
          )}
          &nbsp; | &nbsp;
          {loggedIn ? <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link> : ""}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
