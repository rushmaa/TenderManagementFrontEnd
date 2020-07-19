import React, { Component } from "react";
import { Form, Row, Col, Button, Table } from "react-bootstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Search, Calendar3, Paperclip } from "react-bootstrap-icons";
import {Link} from 'react-router-dom';
import DataTable from "../components/DataTable";
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
          <DataTable/>
          <Title header="Search Criteria" /> 
          <MainForm />
        </div>
      </div> 
    );
  }
}

export default Current;
