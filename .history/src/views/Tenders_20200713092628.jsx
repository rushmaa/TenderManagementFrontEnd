import React, { Component } from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import InputField from "../components/InputField";

class Tenders extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Find Tenders"
          text="Find tenders that match a specified criteria.  When signed in, you can also configure saved searches and set up new tender notifications."
        />
        <Title header="Search Criteria"/>
      </div>
    </div>
    );
  }
}

export default Tenders;
