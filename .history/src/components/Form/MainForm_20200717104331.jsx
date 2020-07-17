import React, { Component } from "react";

import { Row } from "react-bootstrap";

//Components
import Title from "../Title";
import InputField from "../Form/InputField";
import SelectComp from "../Form/SelectComp";
import FormLabel from "../Form/FormLabel";

const MainForm = props => {
  return (
    <div className="pt-3">
        <div className="container-fluid">
        <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="4">
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="4">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Tender State
              </Form.Label>
              <Col sm="4">
                <select className="form-control">
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Tender Type
              </Form.Label>
              <Col sm="4">
                <select className="form-control">
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
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
              <Form.Label column sm="2">
                Issued By
              </Form.Label>
              <Col sm="4">
                <select className="form-control">
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
                <Form.Check
                  type="radio"
                  label=" "
                  name="Radios1"
                  id="Radios1"
                />
                <Form.Group as={Row}>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>From</InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder=" " />
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
                      <Input placeholder=" " />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          {" "}
                          <Calendar3 size={15} />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Form.Group>

                <Form.Check
                  type="radio"
                  label="This Week (Monday - Sunday)"
                  name="Radios1"
                  id="Radios2"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Closing Date
              </Form.Label>
              <Col sm={4}>
                <Form.Check type="radio" label="" name="Radios1" id="Radios1" />
                <Form.Group as={Row}>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>From</InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder=" " />
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
                      <Input placeholder=" " />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          {" "}
                          <Calendar3 size={15} />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Form.Group>
                <Form.Check
                  type="radio"
                  label="This Week (Monday - Sunday)"
                  name="Radios1"
                  id="Radios2"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Grouping
              </Form.Label>
              <Col sm="4">
                <select className="form-control">
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </Col>
            </Form.Group>
            <div className="btnPosition">
              <Button as="input" icon="Search" type="submit" value="Submit" />{" "}
              <Button as="input" type="reset" value="Reset" />
            </div>
          </Form>
        </div>
      </div>
  ); 
}  

export default MainForm;
