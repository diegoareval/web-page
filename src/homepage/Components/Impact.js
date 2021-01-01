import React, { Component } from "react";
import { Jumbotron, Container, Row } from "react-bootstrap";
import ImpactCard from "./ImpactCard";
import styles from "../Css/Impact.module.css";

export default class Impact extends Component {
  render() {
    return (
      <Jumbotron style={{ backgroundColor: "#ffffff" }}>
        <Container fluid="sm">
          <h1 className={styles.Heading}>
            Como estamos creando{" "}
            <span style={{ color: "#008dc8" }}>Impacto</span>?
          </h1>

          <Row
            className="justify-content-md-center"
            style={{ marginTop: "50px" }}
          >
            <ImpactCard
              impact={{
                name: "Oportunidades",
                imgUrl: "image1.svg",
                para1: "Conocer las oportunidades idoneas",
                para2: "en el momento adecuado!",
              }}
            />
            <ImpactCard
              impact={{
                name: "Ruta",
                imgUrl: "image2.svg",
                para1: "Aprender todo",
                para2: "de la forma adecuada!",
              }}
            />
            <hr className={styles.line1} />
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
