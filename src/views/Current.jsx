import React, { Component } from "react";
import { Form, Row, Col, Button, FormControl } from "react-bootstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Search, Calendar3, Arrow} from "react-bootstrap-icons";
import Card from "../components/Card";
import "../assets/css/theme.css";
import Title from "../components/Title";
import MainForm from "../components/Form/MainForm";
import TenderTable from "../components/TenderTable";
import Card from "../components/Card";
import TenderRequestSection from "../components/TenderRequestSection";
import Description from "../components/Description";
import { Enquiries } from "../components/Enquiries";
import { Contacts } from "../components/Contacts";
import { SpecificationDocuments } from "../components/SpecificationDocuments";
import { Responses } from "../components/Responses";
import { TenderTitle } from "../components/TenderTitle";


class Current extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
      rightOpen: true,
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
          <TenderTitle/>
          <TenderRequestSection />
          <Enquiries />
          <Contacts/>
          <Description/>
          <SpecificationDocuments/>
          <Responses />
        </div>
      </div>
    );
  }
}

export default Current;
