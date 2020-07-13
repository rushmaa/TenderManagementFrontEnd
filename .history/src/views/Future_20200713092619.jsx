import React, { Component } from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import InputField from "../components/InputField";

class Future extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Future Tenders"
          text="This page displays advance notices of possible future tenders. Not all tenders are first shown on this page, nor does listing here imply that the tender will ever be issued."
        />
        <Title header="Search Result"/>
        <Title header="Search Criteria"/>
      </div>
    </div>
    );
  }
}

export default Future;
