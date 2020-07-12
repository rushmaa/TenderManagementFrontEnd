import React, { Component } from "react";
import Card from "../components/Card";
import Title from "../components/Title";

class AcrossGovContracts extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Across Government Contracts"
          text="Find contracts that match specified criteria."
        />
         <Title header="Search Result"/>
      </div>
    </div>
    );
  }
}

export default AcrossGovContracts;
