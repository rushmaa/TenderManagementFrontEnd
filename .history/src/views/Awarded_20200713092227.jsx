import React, { Component } from "react";
import Card from "../components/Card";

class Awarded extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Contracts"
          text="This page displays a list of contracts awarded by the Government of South Australia. Select an Agency to display the summarised view of contracts for that Agency."
        />
        <Title header="Select an Agancy"/>
      </div>
    </div>
    );
  }
}

export default Awarded;
