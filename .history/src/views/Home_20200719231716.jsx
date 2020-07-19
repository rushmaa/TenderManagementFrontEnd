import React, { Component } from "react";
import { Question } from "react-bootstrap-icons";

//Components
import Card from "../components/Card";

class Home extends React.Component {
  render() {
    return (
      <div className="pt-3">
        <div className="container-fluid">
          <Card
            title="Welcome to the Aussie Digital Tenders & Contracts website"
            text="You can register new supplier here."
          />
          <Question />
        </div>
      </div>
    );
  }
}

export default Home;
