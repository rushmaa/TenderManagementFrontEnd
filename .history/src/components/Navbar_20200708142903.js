import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../assets/css/theme.css";
import * as ReactBootStrap from 'react-bootstrap';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="danger">
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto" color="#fff">
              <ReactBootStrap.Nav.Link><Link to="/">HOME</Link></ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown title="TENDERS" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item><Link to="/">Current</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/">E-Lodgement</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/">Future</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/">Closed</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/">New this week</Link></ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown title="CONTRACTS" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">Awared</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">Across Government Contracts</ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown title="SEARCH" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">Trnders</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">Contracts</ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.Nav.Link href="#pricing">News</ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown title="HELP / FAQ" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  Another action
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                  Something
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link><Link to="/Login">Log In</Link></ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

export default Navbar;
