import React, { Component } from "react";
import { Form, Row, Col, Button, Table } from "react-bootstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Search, Calendar3, Paperclip } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import Card from "../components/Card";
import "../assets/css/theme.css";
import Title from "../components/Title";
import MainForm from "../components/Form/MainForm";
import TenderStaticTable from "../components/TenderStaticTable";

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
              <TenderStaticTable 
              tenderCode = "DH046241"
              tenderCode = "DPC042814"
              />
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
