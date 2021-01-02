import React, {useContext} from "react";
import styles from "../Css/Banner.module.css";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import imgCoding from "../assets/coding.svg"
import Codeboy from "../assets/code1.svg"
import ThemeContext from "../../contexts/ThemeContext";
import { LIGTH } from "../../utils/theme";

const Banner =() =>{
  const {theme} = useContext(ThemeContext)
  return (
    <Jumbotron className={theme===LIGTH?styles.Jumbotron:styles.Jumbotron_dark} fluid>
      <br />
      <br />
      <br />
      <Container className={styles.container}>
        <Row>
          <Col md={6} lg={7}>
            <h1 className={styles.heading}>
            <FormattedMessage id="banner.help1" /> <br className={styles.align} /> <FormattedMessage id="banner.help2" />
              <span style={{ color: "#008dc8" }}> <FormattedMessage id="banner.help3" /> </span>
            </h1>
            <div className={styles.rectangle} />
            <button className={styles.Button}>
              <FormattedMessage id="nav.we" />
            </button>
            <br className={styles.set} />
            <br className={styles.align} />
            <br className={styles.align} />
            <button style={{ marginLeft: "80px" }} className={styles.Button}>
              <FormattedMessage id="banner.join" />
            </button>
          </Col>
          <Col md={6} lg={5}>
            <Image className={styles.code} src={imgCoding} alt="code" fluid />
            <Image className={styles.girl} src={Codeboy} alt="girl" fluid />
          </Col>
        </Row>
      </Container>
      <Container className={styles.containersmall} fluid>
        <h1 style={{ textAlign: "center" }} className={styles.heading}>
        <FormattedMessage id="banner.help1" /> <br className={styles.align} /> <FormattedMessage id="banner.help2" />
          <span style={{ color: "#008dc8" }}> <FormattedMessage id="banner.help3" /> </span>
          <div className={styles.Rectsmall} />
        </h1>
        <Image
          className="justify-content-md-center"
          style={{ maxWidth: "90%" }}
          src={imgCoding}
          alt="smart"
          fluid
        />
        <br />
        <br />
        <button className={styles.Button}><FormattedMessage id="nav.we" /></button>
      </Container>
    </Jumbotron>
  );
}

export default Banner
