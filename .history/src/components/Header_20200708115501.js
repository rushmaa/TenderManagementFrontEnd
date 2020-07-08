import React, { Component } from "react";
import "../assets/css/theme.css";

export class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div>
            <img src="#" alt="logo" />
          </div>
          <div>
            <h1>Aussie Digital Tenders and Contracts</h1>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div class="col-sm-3 col-md-3">
    <a href="/">
      <img src="https://adbsystems.com.au/wp-content/uploads/2017/03/final-logo-HR.jpg" alt="home">
    </a>
  </div>
  <div class="col-sm-6 col-md-6 header-title">
    <h1></h1>
  </div> */
}

export default Header;
