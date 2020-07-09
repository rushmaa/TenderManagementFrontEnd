import React, { Component } from "react";
import Card from "../components/Card";

class Newthisweek extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Tenders New This Week"
          text="No default summary"
        />
      </div>
    </div>
    );
  }
}

export default Newthisweek;
