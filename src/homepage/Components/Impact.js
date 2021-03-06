import React, { useContext } from "react";
import { Jumbotron, Container, Row } from "react-bootstrap";
import ImpactCard from "./ImpactCard";
import styles from "../Css/Impact.module.css";
import { FormattedMessage } from "react-intl";
import { LIGTH } from "../../utils/theme";
import ThemeContext from "../../contexts/ThemeContext";

const Impact=()=> {
  const {theme} = useContext(ThemeContext)
  const background = theme===LIGTH?"#ffffff":"#1d3040"
    return (
      <Jumbotron style={{ backgroundColor: background }}>
        <Container fluid="sm">
          <h1 className={styles.Heading}>
          <FormattedMessage id="impact.creating" />
            <span style={{ color: "#008dc8" }}><FormattedMessage id="impact.impact" /></span>?
          </h1>

          <Row
            className="justify-content-md-center"
            style={{ marginTop: "50px" }}
          >
            <ImpactCard
              impact={{
                name: <FormattedMessage id="oportunities" />,
                imgUrl: "image1.svg",
                para1:<FormattedMessage id="opportunities.para1" />,
                para2:<FormattedMessage id="opportunities.para2" />,
              }}
            />
            <ImpactCard
              impact={{
                name: <FormattedMessage id="path" />,
                imgUrl: "image2.svg",
                para1: <FormattedMessage id="path.para1" />,
                para2:<FormattedMessage id="path.para2" />,
              }}
            />
            <hr className={styles.line1} />
          </Row>
        </Container>
      </Jumbotron>
    );
}

export default Impact;