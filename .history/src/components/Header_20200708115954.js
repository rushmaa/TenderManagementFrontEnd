import React, { Component } from "react";
import "../assets/css/theme.css";

export class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div>
            <img src="https://adbsystems.com.au/wp-content/uploads/2017/03/final-logo-HR.jpg" alt="logo" />
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
