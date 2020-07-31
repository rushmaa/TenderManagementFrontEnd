import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../assets/css/theme.css";
import * as ReactBootStrap from 'react-bootstrap';
import { connect } from "react-redux";
import {BoxArrowDownRight} from "react-bootstrap-icons";
import Signup from "../views/Signup";
class Navbar extends Component {
  
  render() {
    const user=this.props.store.getState();
    return (
      <div>
        <ReactBootStrap.Navbar collapseOnSelect expand="lg">
        <ReactBootStrap.Navbar.Brand> <img src="https://adbsystems.com.au/wp-content/uploads/2017/03/final-logo-HR.jpg" alt="logo"/></ReactBootStrap.Navbar.Brand>
        
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link><Link to="/home" className="main-nav">HOME</Link></ReactBootStrap.Nav.Link>
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
              <ReactBootStrap.Nav.Link><Link to="/News" className="main-nav">NEWS</Link></ReactBootStrap.Nav.Link>
              {
                user?.User?.User?.type === 'admin' && <ReactBootStrap.Nav.Link><Link to="/admin" className="main-nav">ADMIN</Link></ReactBootStrap.Nav.Link>
              }
              <ReactBootStrap.NavDropdown title="HELP / FAQ" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item><Link to="/HELP/FAQ">FAQ</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/HELP/Request-Support">Request Support</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/HELP/Document-Library">Document Library</Link></ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            <ReactBootStrap.Nav.Link><Link to="/add-tender" className="main-nav">ADD TENDER</Link></ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link><Link to="/" className="main-nav">{ user?.User?.User?.businessName && 'Welcome, '+user?.User?.User?.businessName}</Link></ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link><Link to="/Login" className="main-nav">{user?.User?.User?.businessName ? 'LOG OUT': 'LOG IN'}</Link></ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  var data={User: state.User }
  return data;
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (data) => dispatch({ type: "SET_USER", payload:data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
