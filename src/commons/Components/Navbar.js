import React from "react";
import styles from "../Css/Navbar.module.css";
import { Navbar, Nav } from "react-bootstrap";

export default function navbar() {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>
        Devs <span style={{ color: "#008dc8" }}>Software </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link active href="/">
            Inicio
          </Nav.Link>
          <Nav.Link href="/">Quienes somos</Nav.Link>
          <Nav.Link href="/">Que hacemos?</Nav.Link>
          <Nav.Link href="/">Contactanos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
