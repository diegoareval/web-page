import React, { Component } from "react";
import KnowAboutCard from "./KnowAboutCard";
import styles from "../Css/KnowAbout.module.css";

export default class KnowAbout extends Component {
  render() {
    return (
      <div>
        <KnowAboutCard />
        <KnowAboutCard />
        <KnowAboutCard />
        <KnowAboutCard />
        <KnowAboutCard />
        <KnowAboutCard />
      </div>
    );
  }
}
