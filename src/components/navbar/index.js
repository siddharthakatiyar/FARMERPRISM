import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./index.css";

export default function NavBar() {
  return (
    <Navbar >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            FARMERPRISM
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}