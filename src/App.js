import React, { Component } from "react";
import Navbar from "./commons/Components/Navbar";
import Banner from "./homepage/Components/Banner";
import AboutUs from "./homepage/Components/AboutUs";
import Impact from "./homepage/Components/Impact";
import Testimonial from "./homepage/Components/Testimonial";
import FAQS from "./homepage/Components/FAQS";
import QuestionsForm from "./homepage/Components/QuestionsForm";
import Footer from "./commons/Components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <AboutUs />
        <Impact />
        <Testimonial />
        <FAQS />
        <QuestionsForm />
        <Footer />
      </div>
    );
  }
}
