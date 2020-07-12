import React, { Component } from "react";
import Card from "../components/Card";
import Title from "../components/Title";

class RequestSupport extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Request Support"
        />
        <Title header="Select Criteria"/>
      </div>
    </div>
    );
  }
}

export default RequestSupport;
