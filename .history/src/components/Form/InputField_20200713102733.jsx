import React from "react";

import { Form, Row, Col, Label } from "react-bootstrap";

const InputField = props => {
  return (
    <Form>
    <Form.Group as={Row}>
      <Form.Label column sm="3">
        {props.formLabel}
      </Form.Label>
      <Col sm="3">
        <Form.Control type={props.formType} placeholder={props.formPlaceholder} />
      </Col>
    </Form.Group>
  </Form>
  ); 
}  

export default InputField;
