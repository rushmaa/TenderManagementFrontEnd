import React, { Component } from "react";
import Card from "../components/Card";

class Closed extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Closed Tenders  "
          text="This page shows all tenders that have closed for responses, and not yet been awarded. The list includes all public tenders, as well as selective tenders to which your business was invited to respond. You must be signed in to see selective tenders."
        />
        <Title header="Search Criteria"/>
      </div>
    </div>
    );
  }
}

export default Closed;
