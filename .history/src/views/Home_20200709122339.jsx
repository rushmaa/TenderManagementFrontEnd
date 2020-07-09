import React, { Component } from "react";

import Card from "../components/Card"

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
          <Card title="Home" text="Home page"/>
      </div>
    );
  }
}

export default Home;
