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
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          {loggedIn ? <h5>Hello, {username}</h5> : <h3>Please Log In</h3>}
          &nbsp; | &nbsp;
          {loggedIn ? <button onClick={handleLogOut}>Log Out</button> : ""}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
