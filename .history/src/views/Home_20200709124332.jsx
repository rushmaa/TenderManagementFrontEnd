import React, { Component } from "react";

import Card from "../components/Card"

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Card title='Welcome to the Aussie Digital Tenders & Contracts website' text='You can register new supplier here.'/>
      </div>
    );
  }
}

export default Home;
