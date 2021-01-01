import React from "react";
import styles from "../Css/Banner.module.css";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import code from "../assets/code.svg";
import girl from "../assets/girl.svg";
import smallscreen from "../assets/smallscreen.png";

export default function Banner() {
  return (
    <Jumbotron className={styles.Jumbotron} fluid>
      <br />
      <br />
      <br />
      <Container className={styles.container}>
        <Row>
          <Col md={6} lg={7}>
            <h1 className={styles.heading}>
              Ayudamos a cumplir <br className={styles.align} /> tus
              <span style={{ color: "#008dc8" }}> metas </span>
            </h1>
            <div className={styles.rectangle} />
            <button className={styles.Button}>Quienes Somos</button>
            <br className={styles.set} />
            <br className={styles.align} />
            <br className={styles.align} />
            <button style={{ marginLeft: "80px" }} className={styles.Button}>
              Unete a este equipo
            </button>
          </Col>
          <Col md={6} lg={5}>
            <Image className={styles.code} src={code} alt="code" fluid />
            <Image className={styles.girl} src={girl} alt="girl" fluid />
          </Col>
        </Row>
      </Container>
      <Container className={styles.containersmall} fluid>
        <h1 style={{ textAlign: "center" }} className={styles.heading}>
        Ayudamos a cumplir <br className={styles.align} /> tus
          <span style={{ color: "#008dc8" }}> metas </span>
          <div className={styles.Rectsmall} />
        </h1>
        <Image
          className="justify-content-md-center"
          style={{ maxWidth: "90%" }}
          src={smallscreen}
          alt="girl code"
          fluid
        />
        <br />
        <br />
        <button className={styles.Button}>Quienes Somos</button>
      </Container>
    </Jumbotron>
  );
}
