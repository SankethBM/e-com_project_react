import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap'
import logo from "../assets/logo.png";
import { useNavigate, Link } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();


  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          {/* <LinkContainer to="/"> */}
            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="logo" />
              ProShop
            </Navbar.Brand>
          {/* </LinkContainer> */}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <LinkContainer to="/cart"> */}
                <Nav.Link as={Link} to="/cart">
                  <FaShoppingCart /> Cart
                </Nav.Link>
              {/* </LinkContainer> */}

              {/* <LinkContainer to="/login"> */}
                <Nav.Link as={Link} to="/login">
                  <FaUser /> Sign In
                </Nav.Link>
              {/* </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
