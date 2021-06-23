import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./Navbar.css";

export default function NavBar({ username, loggedIn, setLoggedIn, userID }) {
  function handleLogOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }

  const detailURL = `/details/${userID}/`;
  const dashboardURL = `/dashboard/`;

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>&copy; Coding Tutor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="mr-auto">
          <Nav className="justify-content-center">
            <Link className="links" to="/">&nbsp;Home &nbsp;</Link>
          {loggedIn ? (
            <>
            <span className="spaces">&nbsp; | &nbsp;</span>
            <Link className="links" to={detailURL}>&nbsp; Hello, {username} &nbsp; </Link>
            <span className="spaces">&nbsp; | &nbsp;</span>
            <Link className="links" to={dashboardURL}>&nbsp; Dashboard &nbsp; </Link>
            <span className="spaces">&nbsp; | &nbsp;</span>
            </>
            ) : (
              ""
              )}
          {loggedIn ? <Link className="links" onClick={handleLogOut}>Log Out</Link> : ""}
              </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
    //    <>
    //    <Navbar bg="light" expand="lg">
    //      <Navbar.Brand href="/">&copy; Coding Tutor</Navbar.Brand>
    //      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //      <Navbar.Collapse id="mr-auto">
    //        <Nav className="justify-content-center">
    //          <Nav.Link className="links" href="/">Home |</Nav.Link>
    //        {loggedIn ? (
    //          <Nav.Link className="links" href={detailURL}> Hello, {username} &nbsp; | &nbsp;</Nav.Link>
    //          ) : (
    //            ""
    //            )}
    //        {loggedIn ? <Nav.Link className="links" onClick={handleLogOut}>Log Out</Nav.Link> : ""}
    //            </Nav>
    //      </Navbar.Collapse>
    //    </Navbar>
    //  </>
  );
}
