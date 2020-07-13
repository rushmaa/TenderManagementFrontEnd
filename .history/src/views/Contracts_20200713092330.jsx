import React, { Component } from "react";
import Card from "../components/Card";

class Contracts extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Find Contracts "
          text="Find contracts that match specified criteria."
        />
        <Title header="Search Criteria"/>
      </div>
    </div>
    );
  }
}

export default Contracts;
