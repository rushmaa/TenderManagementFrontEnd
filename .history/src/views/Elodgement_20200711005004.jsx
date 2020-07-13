import React, { Component } from "react";
import Card from "../components/Card";

class Elodgement extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Electronic Lodgement"
          text="This page shows all open tenders that can accept electronic responses. Click on the Respond to Tender icon to submit an electronic response, or click on the tender title to view full tender details."
        />
      </div>
    </div>
    );
  }
}

export default Elodgement;
