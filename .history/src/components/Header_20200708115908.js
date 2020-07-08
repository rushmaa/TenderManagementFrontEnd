import React, { Component } from "react";
import "../assets/css/theme.css";

export class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div>
            <img src="./assets/img/logo.jpg" alt="logo" />
          </div>
          <div>
            <h1>Aussie Digital Tenders and Contracts</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
