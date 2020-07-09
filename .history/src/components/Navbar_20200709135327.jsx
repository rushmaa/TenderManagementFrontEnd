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
              <ReactBootStrap.Nav.Link><Link to="/" style={{color: 'white'}}>HOME</Link></ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown title="TENDERS" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item><Link to="/tenders/Current">Current</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/tenders/E-Lodgement">E-Lodgement</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/tenders/Future">Future</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/tenders/Closed">Closed</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/tenders/New-this-week">New this week</Link></ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown title="CONTRACTS" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item><Link to="/contracts/awared">Awared</Link
                ></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/contracts/across-gov-contracts">Across Government Contracts</Link></ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown title="SEARCH" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item><Link to="/search/tenders">Tenders</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/search/contracts">Contracts</Link></ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown title="SEARCH" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item><Link to="/search/tenders">Tenders</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/search/contracts">Contracts</Link></ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.Nav.Link><Link to="/News" style={{color: 'white'}}>News</Link></ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown title="HELP / FAQ" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item><Link to="/HELP/FAQ">FAQ</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/HELP/Request-Support">Request Support</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/HELP/Document-Library">Document Library</Link></ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link><Link to="/Login" style={{color: 'white'}}>Log In</Link></ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

export default Navbar;
