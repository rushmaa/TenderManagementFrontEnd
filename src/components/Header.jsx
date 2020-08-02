import React, { Component } from "react";
import {
  Form,
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
          <Col md={{ span: 7, offset: 2 }} className="col-Heading">
            <h1>Aussie Digital Tenders and Contracts Management</h1>
          </Col>
          <Col md={3} className="col-Searching">
            <Form inline>
              <ComboBox/>
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
