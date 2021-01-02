import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Image,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import styles from "../Css/QuestionsForm.module.css";
import { FormattedMessage } from "react-intl";
import QuestionImg from "../assets/questions.svg"
import questionImgLigth from "../assets/question2.svg"
import { LIGTH } from "../../utils/theme";

export default class QuestionsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      question: "",
      
    };
    
  }
  

  handleChange = (event) => {
    let itemValue = event.target.value;
    this.setState({
      [event.target.name]: itemValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      question: "",
    });
  };

  render() {
    const { firstName, lastName, email, question } = this.state;
    const {theme} = this.props
    console.log(theme);
   
    return (
      <Jumbotron style={{ paddingTop: "0px", backgroundColor:theme===LIGTH?"#ffffff":"#1d3040" }}>
        <Container fluid="sm">
          <h1 className={styles.Heading}>
            {" "}
            <FormattedMessage id="contact.title1" />{" "}
            <span style={{ color: "#008dc8" }}>
              <FormattedMessage id="contact.title2" />
            </span>
            ?
          </h1>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "50px" }}
          >
            <Col md={"auto"} lg={6}>
              <Image src={theme===LIGTH?questionImgLigth:QuestionImg} alt="QuestionsForm" fluid  />
            </Col>
            <Col lg={5}>
              <Form onSubmit={this.handleSubmit} style={{paddingTop: "20px"}}>
                <Form.Group>
                  <FormattedMessage id="contact.name">
                    {(msg) => (
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={firstName}
                        placeholder={msg}
                        onChange={this.handleChange}
                      />
                    )}
                  </FormattedMessage>
                </Form.Group>
                <Form.Group>
                  <FormattedMessage id="contact.lastname">
                    {(msg) => (
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={lastName}
                        placeholder={msg}
                        onChange={this.handleChange}
                      />
                    )}
                  </FormattedMessage>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <FormattedMessage id="contact.email">
                    {(msg) => (
                      <Form.Control
                      type="email"
                      name="email"
                      value={email}
                      placeholder={msg}
                      onChange={this.handleChange}
                    />
                    )}
                  </FormattedMessage>
                  
                </Form.Group>
                <Form.Group>
                <FormattedMessage id="contact.message">
                    {(msg) => (
                  <Form.Control
                  as="textarea"
                  rows="3"
                  name="question"
                  value={question}
                  placeholder={msg}
                  onChange={this.handleChange}
                />
                    )}
                  </FormattedMessage>
                </Form.Group>
                <Form.Group>
                  <Button className={styles.Button} type="submit">
                    <FormattedMessage id="contact.send" />
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
