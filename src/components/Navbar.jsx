import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/theme.css";
import * as ReactBootStrap from "react-bootstrap";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    const user = this.props.store.getState();
    return (
      <div>
        <ReactBootStrap.Navbar collapseOnSelect expand="lg">
          <ReactBootStrap.Navbar.Brand>
            {" "}
            <img
              src="https://adbsystems.com.au/wp-content/uploads/2017/03/final-logo-HR.jpg"
              alt="logo"
            />
          </ReactBootStrap.Navbar.Brand>

          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link>
                <Link to="/home" className="main-nav">
                  HOME
                </Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown
                title="TENDERS"
                id="collasible-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item>
                  <Link to="/tenders/Current">Present Tender</Link>
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item>
                  <Link to="/tenders/Future">Upcoming Tender</Link>
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item>
                  <Link to="/tenders/Closed">Closed Tender</Link>
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item>
                  <Link to="/tenders/New-this-week">Weekly Tender</Link>
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown
                title="CONTRACTS"
                id="collasible-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item>
                  <Link to="/contracts/awared">Completed</Link>
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item>
                  <Link to="/contracts/across-gov-contracts">
                    Goverment
                  </Link>
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown
                title="SEARCH"
                id="collasible-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item>
                  <Link to="/search/tenders">Advanced Search</Link>
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown
                title="NOTICE"
                id="collasible-nav-dropdown"
              >
                  <ReactBootStrap.NavDropdown.Item>
                <Link to="/Publish-Guildline" className="main-nav">
                  Publish Guidlines
                </Link> 
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item>
                <Link to="/News" className="main-nav">
                  News
                </Link> 
                </ReactBootStrap.NavDropdown.Item>

              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.Nav.Link>
              <Link to="/HELP/FAQ" className="main-nav">
                SUPPORT & FAQ'S
                </Link>
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            {user?.User?.User?.type === "admin" && (
                 <ReactBootStrap.NavDropdown
                 title="ADMIN"
                 id="collasible-nav-dropdown"
               >
                 <ReactBootStrap.NavDropdown.Item>
                   <Link to="/add-tender">Add Tender</Link>
                 </ReactBootStrap.NavDropdown.Item>
               </ReactBootStrap.NavDropdown>
              )}
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link>
                <Link to="/" className="main-nav">
                  <b>{user?.User?.User?.businessName &&
                    "Welcome, " + user?.User?.User?.businessName}</b>
                </Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link>
                <Link
                  to="/Login"
                  onClick={() => {
                    if (user?.User?.User?.businessName) {
                      this.props.setUser({});
                    }
                  }}
                  className="main-nav"
                >
                  {user?.User?.User?.businessName ? "LOG OUT" : "LOG IN"}
                </Link>
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  var data = { User: state.User };
  return data;
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (data) => dispatch({ type: "SET_USER", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
