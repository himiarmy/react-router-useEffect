import React from "react";
import {Navbar, Container} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation();
    // console.log(location)
    return (
      <Navbar>
        <Container>
          <Link to="/"><Navbar.Brand className={location.pathname === "/" ? "btn btn-success" : "btn btn-light"}>Products</Navbar.Brand></Link>
          <Link to="/add-product"><Navbar.Brand className={location.pathname === "/add-product" ? "btn btn-success" : "btn btn-light"}>Add product</Navbar.Brand></Link>
          <Link to="/edit-product"><Navbar.Brand className={location.pathname === "/edit-product" ? "btn btn-success" : "btn btn-light"}>Edit product</Navbar.Brand></Link>
          <Link to="/contacts"><Navbar.Brand className={location.pathname === "/contacts" ? "btn btn-success" : "btn btn-light"}>Contacts</Navbar.Brand></Link>
          <Link to="/about-us"><Navbar.Brand className={location.pathname === "/about-us" ? "btn btn-success" : "btn btn-light"}>About us</Navbar.Brand></Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

export default Header;
