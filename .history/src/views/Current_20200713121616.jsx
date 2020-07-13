import React, { Component } from "react";

//Components
import Card from "../components/Card";
import Title from "../components/Title";
import MainForm from "../components/Form/MainForm";
import { Form, Row, Col, Button } from "react-bootstrap";
import {Search} from "react-bootstrap-icons";

class Current extends React.Component {
  render() {
    return (
      <div className="pt-3">
        <div className="container-fluid">
          <Card
            title="Current Tenders  "
            text="This page shows all open tenders. The list includes all public tenders, as well as selective tenders to which your business can respond. You must be signed in to see selective tenders."
          />
           <Title header="Search Criteria" />
          <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="1">
                Email
              </Form.Label>
              <Col sm="4">
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="1">
                Password
              </Form.Label>
              <Col sm="4">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="1">
               Tender State
              </Form.Label>
              <Col sm="4">
              <select class="form-control">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="1">
               Tender Type
              </Form.Label>
              <Col sm="4">
              <select class="form-control">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="1">
                Category
              </Form.Label>
              <Col sm="4" className="pr-0">
                <Form.Control type="Category" placeholder="Category" />
              </Col>
              <Col sm="1" className="pl-1">
                <Search color="#173d6e" size={25} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="1">
               Issued By
              </Form.Label>
              <Col sm="4">
              <select class="form-control">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="1">
               Grouping
              </Form.Label>
              <Col sm="4">
              <select class="form-control">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="1">
               
              </Form.Label>
              <Col sm="2">
               <Button as="input" type="search" value="Search" />
              </Col>
              <Col sm="2">
               <Button as="input" type="reset" value="Reset" />
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default Current;
