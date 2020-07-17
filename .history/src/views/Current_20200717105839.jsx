import React, { Component } from "react";
import { Form, Row, Col, Button, Table } from "react-bootstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Search, Calendar3, Paperclip } from "react-bootstrap-icons";
import {Link} from 'react-router-dom';

import Card from "../components/Card";
import "../assets/css/theme.css";
import Title from "../components/Title";
import MainForm from "../components/Form/MainForm";

class Current extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
    };
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  };

  render() {
    let leftOpen = this.state.leftOpen ? "open" : "closed";

    return (
      <div className="main-container pt-3">
        <div className="container-fluid">
          <Card
            title="Current Tenders"
            text="This page shows all open tenders. The list includes all public tenders, as well as selective tenders to which your business can respond. You must be signed in to see selective tenders."
          />
          <div id="layout">
            <div id="left" className={leftOpen}>
              <div className="icon" onClick={this.toggleSidebar}>
                &equiv;
              </div>
              <div className={`sidebar ${leftOpen}`}>
                <div className="header">
                  <h3 className="title">Left header</h3>
                </div>
                <div className="content">
                  <h3>Left content</h3>
                  <p>links</p>
                </div>
              </div>
            </div>
            <div id="main">
              <h3
                className={`
                      title
                      ${"left-" + leftOpen}
                  `}
              >
                <Title header="Currently showing All results. Please select a group from the summary panel on the left hand side." />
              </h3>
              <p>
                If you cannot find your tender, please use the keywords field on
                the form below{" "}
              </p>
              <div>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Code & State</th>
                      <th>Details</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div><b>DH046241</b></div>
                        <div className="tender-row-state ">Open</div>
                      </td>
                      <td>
                        <div><Link to="/tenders/Current/DH046241"><span  className="tender-link">SA Health Professional Services Panel</span></Link>
                        <Paperclip color="#173d6e" size={15} />
                        </div>
                        <div>Issued by SA Health</div>
                        <div>
                          Category 1: Medical Equipment and Accessories and
                          Supplies - 20%
                        </div>
                        <div>
                          Category 2: Management and Business Professionals and
                          Administrative Services - 80%
                        </div>
                      </td>
                      <td>
                        <div>closing</div>
                        <div className="closing_date">15 Apr, 2024</div>
                      </td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <Title header="Search Criteria" />
          <MainForm />
        </div>
      </div> 
    );
  }
}

export default Current;
