import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
/** Ensures anchoring for NavLinks */
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signin"
            >
              <i className="fas fa-sign-in-alt"></i>Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fas fa-user-plus"></i>Sign up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// import React from "react";
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import logo from '../assets/logo.png'
// import styles from "../styles/NavBar.module.css";
// import { NavLink } from "react-router-dom";


// const NavBar = () => {
//     /** className={styles.NavBar}  can be in NavBar or Container - wouldnt work in NavBar in NavBar.module.css*/
//     return <Navbar className={styles.NavBar} bg="light" expand="md" fixed="top">

//         <Container className={styles.NavBar}>
//             <NavLink to="/">
//             <Navbar.Brand><img src={logo} alt="logo" height="45" />Exotic Fruit</Navbar.Brand>
//             </NavLink>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                     <NavLink exact className={styles.NavLink} activeClassStyles={styles.Active} to="/"><i className="fas fa-home"></i> Home</NavLink>
//                     <NavLink className={styles.NavLink} activeClassStyles={styles.Active} to="/signin"><i className="fas fa-arrow-right"></i> Sign in</NavLink>
//                     <NavLink className={styles.NavLink} activeClassStyles={styles.Active} to="/signup"><i className="fa-solid fa-check"></i> Sign up</NavLink>
//                     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                     </NavDropdown>
//                 </Nav>
//                 <Form inline>
//                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                     <Button variant="outline-success">Search</Button>
//                 </Form>
//             </Navbar.Collapse>
//         </Container>
//     </Navbar>
// }

// export default NavBar;
