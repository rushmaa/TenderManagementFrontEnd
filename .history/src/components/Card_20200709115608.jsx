import React, { Component } from "react";
import "../assets/css/theme.css";

export class Card extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row rowHeader logo">
          <div className="col-sm-3 col-md-3">
            <img src="https://adbsystems.com.au/wp-content/uploads/2017/03/final-logo-HR.jpg" alt="logo" />
          </div>
          <div className="col-sm-6 col-md-6 header-title">
            <h1>Aussie Digital Tenders and Contracts</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
