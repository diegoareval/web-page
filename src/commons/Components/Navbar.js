import React, {useContext} from "react";
import styles from "../Css/Navbar.module.css";
import { Navbar, Nav } from "react-bootstrap";
import Selector from "../Select";
import {FormattedMessage} from "react-intl"
import ToggleTheme from "../ToggleTheme";
import ThemeContext from "../../contexts/ThemeContext";
import { LIGTH } from "../../utils/theme";


const NavBar = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <Navbar fixed="top" bg="light" expand="lg" className={theme===LIGTH?styles.NavBar: styles.NavBar_dark}>
      <Navbar.Brand className={theme===LIGTH?styles.Logo: styles.Logo_dark}>
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

export default NavBar;
