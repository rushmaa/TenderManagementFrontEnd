import React, { Component } from "react";
import {
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "../assets/css/theme.css";
import ComboBox  from "../components/Autcomplete";

export class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Row className="headerRow">
          <Col  className="col-Heading">
            <h1>Aussie Digital Tenders and Contracts Management</h1>
          </Col>
          <Col md={3} className="col-Searching">
            <div>
            <ComboBox/>
            </div>
          </Col>
          <Col md={1} className="col-Searching">
            <div>
              <Button variant="outline-danger">Search</Button>
            </div>
              
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
