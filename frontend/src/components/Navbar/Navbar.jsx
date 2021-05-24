import { useHistory } from "react-router-dom"

export default function NavBar({username, setUsername, loggedIn, setLoggedIn}) {
  function handleLogOut() {
    localStorage.removeItem("token");
    setLoggedIn(false)
  }
  return (
    // <Navbar bg="light" expand="lg">
    //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#link">Link</Nav.Link>
    //       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">
    //           Another action
    //         </NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">
    //           Separated link
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Form inline>
    //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //       <Button variant="outline-success">Search</Button>
    //     </Form>
    //   </Navbar.Collapse>
    // </Navbar>
    <>
    <h1>Nav Bar</h1>
    {loggedIn ? <h3>Hello, {username}</h3> : <h3>Please Log In</h3>}
    {loggedIn ? <button onClick={handleLogOut}>Log Out</button> : ''}
    </>
  );
}

// import React from 'react';
// import PropTypes from 'prop-types';

// export default function Nav(props) {
//   const logged_out_nav = (
//     <ul>
//       <li onClick={() => props.display_form('login')}>login</li>
//       <li onClick={() => props.display_form('signup')}>signup</li>
//     </ul>
//   );
//   const logged_in_nav = (
//     <ul>
//       <li onClick={props.handle_logout}>logout</li>
//     </ul>
//   );
//   return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
// }
// // export default Nav;
// Nav.propTypes = {
//   logged_in: PropTypes.bool.isRequired,
//   display_form: PropTypes.func.isRequired,
//   handle_logout: PropTypes.func.isRequired
// };
