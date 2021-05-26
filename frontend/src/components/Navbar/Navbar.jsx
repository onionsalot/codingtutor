import { Navbar, Nav, Button } from "react-bootstrap";

export default function NavBar({
  username,
  loggedIn,
  setLoggedIn,
}) {
  function handleLogOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">&copy; Coding Tutor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link href="/">Home |</Nav.Link>
          </Nav>
          {loggedIn ?  <Nav.Link> Hello, {username} </Nav.Link> : <h3>Please Log In</h3>}
          &nbsp; | &nbsp;
          {loggedIn ? <Nav.Link  onClick={handleLogOut}>Log Out</Nav.Link> : ""}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
