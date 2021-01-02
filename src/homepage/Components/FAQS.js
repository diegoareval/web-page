import React, { useState, useContext } from "react";
import FAQCard from "./FAQCard";
import Data from "./FAQData";
import styles from "../Css/FAQS.module.css";
import { Container, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { LIGTH } from "../../utils/theme";
import ThemeContext from "../../contexts/ThemeContext";

const FAQS= () => {
  const [cards, setCards] = useState(Data)
  const {theme} = useContext(ThemeContext)
  const background = theme===LIGTH?"#ffffff":"#1d3040"

  const handleChange = (id) => {
    const oldcards = [...cards];
    const nCards = oldcards.map((c) => {
      const upc = { ...c };
      if (c.id === id) {
        upc.open = !upc.open;
      }
      return upc;
    });
    setCards(nCards)
  }


    const FAQCards = cards.map((item) => (
      <FAQCard key={item.id} item={item} handleChange={handleChange} />
    ));

    return (
      <div style={{ marginBottom: "100px", background: background }}>
        <Container sm="fluid">
          <h1 className={`${styles.head}`}>
            <FormattedMessage id="answer.title1" />
            <span style={{ color: "#008dc8" }}>
              {" "}
              <FormattedMessage id="answer.title2" />
            </span>
          </h1>
          <Row style={{ marginTop: "50px" }}>
            <div>{FAQCards}</div>
          </Row>
        </Container>
      </div>
    );
  }

  export default FAQS

