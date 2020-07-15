import React, { Component } from "react";
import Card from "../components/Card";

class Future extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Future Tenders"
          text="This page displays advance notices of possible future tenders. Not all tenders are first shown on this page, nor does listing here imply that the tender will ever be issued."
        />
      </div>
    </div>
    );
  }
}

export default Future;
