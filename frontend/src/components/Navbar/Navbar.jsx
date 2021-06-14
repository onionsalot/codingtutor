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
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">&copy; Coding Tutor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="mr-auto">
          <Nav className="justify-content-center">
            <Nav.Link className="links" href="/">Home |</Nav.Link>
          {loggedIn ? (
            <Nav.Link className="links" href={detailURL}> Hello, {username} &nbsp; | &nbsp;</Nav.Link>
            ) : (
              ""
              )}
          {loggedIn ? <Nav.Link className="links" onClick={handleLogOut}>Log Out</Nav.Link> : ""}
              </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
