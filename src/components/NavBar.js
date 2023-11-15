import React from 'react'
// import React, { useEffect, useRef, useState } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { removeTokenTimestamp } from '../utils/utils';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const {expanded, setExpanded, ref} = useClickOutsideToggle();

  // const [expanded, setExpanded] = useState(false);
  // const ref = useRef(null);
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       setExpanded(false)
  //     }
  //   }

  //   document.addEventListener('mouseup', handleClickOutside)
  //   return () => {
  //     document.removeEventListener('mouseup', handleClickOutside)
  //   }
  // }, {ref})

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/posts/create"
    >
      <i className="far fa-plus-square"></i>Add post
    </NavLink>
  );
  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/feed"
      >
        <i className="fas fa-stream"></i>Feed
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/liked"
      >
        <i className="fas fa-heart"></i>Liked
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
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
    </>
  );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
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

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// // import React, { useContext } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import logo from "../assets/logo.png";
// import styles from "../styles/NavBar.module.css";
// /** Ensures anchoring for NavLinks */
// import { NavLink } from "react-router-dom";
// // import { CurrentUserContext } from "../App";
// import { useCurrentUser } from "../contexts/CurrentUserContext";

// const NavBar = () => {
//   // was useContext(CurrentUserContext)
//   const currentUser = useCurrentUser();
//   const loggedInIcons = <>{currentUser?.username}</>
//   const loggedOutIcons = (
//     <>
//       <NavLink
//         className={styles.NavLink}
//         activeClassName={styles.Active}
//         to="/signin"
//       >
//         <i className="fas fa-sign-in-alt"></i>Sign in
//       </NavLink>
//       <NavLink
//         to="/signup"
//         className={styles.NavLink}
//         activeClassName={styles.Active}
//       >
//         <i className="fas fa-user-plus"></i>Sign up
//       </NavLink>
//     </>
//   )

//   return (
//     <Navbar className={styles.NavBar} expand="md" fixed="top">
//       <Container>
//         <NavLink to="/">
//           <Navbar.Brand>
//             <img src={logo} alt="logo" height="45" />
//           </Navbar.Brand>
//         </NavLink>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto text-left">
//             <NavLink
//               exact
//               className={styles.NavLink}
//               activeClassName={styles.Active}
//               to="/"
//             >
//               <i className="fas fa-home"></i>Home
//             </NavLink>
            
//             {currentUser ? loggedInIcons : loggedOutIcons}

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;

// // import React from "react";
// // import { Navbar, Container, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
// // import Button from 'react-bootstrap/Button';
// // import logo from '../assets/logo.png'
// // import styles from "../styles/NavBar.module.css";
// // import { NavLink } from "react-router-dom";


// // const NavBar = () => {
// //     /** className={styles.NavBar}  can be in NavBar or Container - wouldnt work in NavBar in NavBar.module.css*/
// //     return <Navbar className={styles.NavBar} bg="light" expand="md" fixed="top">

// //         <Container className={styles.NavBar}>
// //             <NavLink to="/">
// //             <Navbar.Brand><img src={logo} alt="logo" height="45" />Exotic Fruit</Navbar.Brand>
// //             </NavLink>
// //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //             <Navbar.Collapse id="basic-navbar-nav">
// //                 <Nav className="ml-auto">
// //                     <NavLink exact className={styles.NavLink} activeClassStyles={styles.Active} to="/"><i className="fas fa-home"></i> Home</NavLink>
// //                     <NavLink className={styles.NavLink} activeClassStyles={styles.Active} to="/signin"><i className="fas fa-arrow-right"></i> Sign in</NavLink>
// //                     <NavLink className={styles.NavLink} activeClassStyles={styles.Active} to="/signup"><i className="fa-solid fa-check"></i> Sign up</NavLink>
// //                     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
// //                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
// //                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
// //                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
// //                         <NavDropdown.Divider />
// //                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
// //                     </NavDropdown>
// //                 </Nav>
// //                 <Form inline>
// //                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
// //                     <Button variant="outline-success">Search</Button>
// //                 </Form>
// //             </Navbar.Collapse>
// //         </Container>
// //     </Navbar>
// // }

// // export default NavBar;
