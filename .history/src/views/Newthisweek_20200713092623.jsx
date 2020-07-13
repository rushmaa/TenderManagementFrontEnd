import React, { Component } from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import InputField from "../components/InputField";

class Newthisweek extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Tenders New This Week"
          text="No default summary"
        />
        <Title header="Search Result"/>
        <Title header="Search Criteria"/>
      </div>
    </div>
    );
  }
}

export default Newthisweek;
