import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Search, Calendar3 } from "react-bootstrap-icons";
import axios from "axios";
//Components
import Card from "../components/Card";
import Title from "../components/Title";

class AddTender extends React.Component {
  onChange(e) {
    let files = e.target.files;
    console.warn("data files", files);
  }

  handleClick(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/tender/addNewTender", {
        tenderCode: event.target.tenderCode.value,
        tenderState: event.target.tenderState.value,
        tenderName: event.target.tenderName.value,
        category: event.target.tenderCategory.value,
        issuedBy: event.target.tenderIssuedby.value,
        openingdateFrom: event.target.openingDateFrom.value,
        openingdateTo: event.target.openingDateTo.value,
        closingdateFrom: event.target.closingDateFrom.value,
        closingdateTo: event.target.closingDateTo.value,
        grouping: event.target.tenderGrouping.value,
      })
      .then(
        (response) => {
          console.log(response);
          if (response.data) {
            if (response.data === "Successfully Added Tender") {
              console.log("SuccessFull redirecting");
              //TODO: redirect to another page
            } else {
              console.log("Unsucessfull");
              //TODO: show message
            }
          } else {
            console.log("No data received");
            //TODO: show message
          }
        },
        (error) => {
          console.log(error);
          //TODO: show message
        }
      );
  }
  render() {
    return (
      <div className="pt-3">
        <div className="container-fluid">
          <Card
            title="Add Tender"
            text="This page can add your tender and it will show it in Current Tender page."
          />

          <div className="pt-3 main-container">
            <Form onSubmit={this.handleClick} noValidate>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Tender Code
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    id="tenderCode"
                    type="Tender Code"
                    placeholder="Tender Code"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Tender State
                </Form.Label>
                <Col sm="4">
                  <select id="tenderState" className="form-control">
                    <option value="Any">Any</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                    <option value="AdvanceNotice">Advance Notice</option>
                    <option value="Awarded">Awarded</option>
                    <option value="NotAwarded">Not Awarded</option>
                  </select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Tender Name
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    id="tenderName"
                    type="Tender Name"
                    placeholder="Tender Name"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Category
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    id="tenderCategory"
                    type="Category"
                    placeholder="Category"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Issued By
                </Form.Label>
                <Col sm="4">
                  <select id="tenderIssuedby" className="form-control">
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                  </select>
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Opening Date
                </Form.Label>
                <Col sm={4}>
                  <Form.Group as={Row}>
                    <Col sm={6}>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>From</InputGroupText>
                        </InputGroupAddon>
                        <Input id="openingDateFrom" placeholder=" " />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            {" "}
                            <Calendar3 size={15} />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                    <Col sm={6}>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>To</InputGroupText>
                        </InputGroupAddon>
                        <Input id="openingDateTo" placeholder=" " />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            {" "}
                            <Calendar3 size={15} />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Form.Group>
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Closing Date
                </Form.Label>
                <Col sm={4}>
                  <Form.Group as={Row}>
                    <Col sm={6}>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>From</InputGroupText>
                        </InputGroupAddon>
                        <Input id="closingDateFrom" placeholder=" " />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            {" "}
                            <Calendar3 size={15} />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                    <Col sm={6}>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>To</InputGroupText>
                        </InputGroupAddon>
                        <Input id="closingDateTo" placeholder=" " />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            {" "}
                            <Calendar3 size={15} />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Form.Group>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Grouping
                </Form.Label>
                <Col sm="4">
                  <select id="tenderGrouping" className="form-control">
                    <option value="None">None</option>
                    <option value="Buyer">Buyer</option>
                    <option value="Categories">Categories</option>
                    <option value="Status">Status</option>
                    <option value="Type">Type</option>
                  </select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Upload Documents
                </Form.Label>
                <Col sm="4">
                  <input
                    type="file"
                    name="file"
                    onChange={(e) => this.onChange(e)}
                  />
                </Col>
              </Form.Group>

              <div className="btnPosition">
                <Button variant="primary" value="Submit" type="submit">
                  Add Tender
                </Button>{" "}
                <Button variant="primary" type="reset" value="Reset">
                  Clear
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTender;
