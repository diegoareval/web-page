import React from "react";
import styles from "../Css/Navbar.module.css";
import { Navbar, Nav } from "react-bootstrap";
import Selector from "../Select";
import {FormattedMessage} from "react-intl"
import ToggleTheme from "../ToggleTheme";

const navbar = () => {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>
        Devs <span style={{ color: "#008dc8" }}>Software </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav.Item style={{width: "150px"}}>
        <Selector/>
        </Nav.Item>
        <Nav.Item style={{width: "100px", marginTop: "10px"}}>
        <ToggleTheme/>
        </Nav.Item>
        <Nav className="ml-auto">
          <Nav.Link active href="/">
            <FormattedMessage id="nav.home" />
          </Nav.Link>
          <Nav.Link href="/"><FormattedMessage id="nav.we" /></Nav.Link>
          <Nav.Link href="/"><FormattedMessage id="nav.do" /></Nav.Link>
          <Nav.Link href="/"><FormattedMessage id="nav.contact" /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
