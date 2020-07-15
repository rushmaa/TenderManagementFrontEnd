import React from "react";
import "../assets/css/theme.css";
import { Form, Row, Col } from "react-bootstrap";

const InputField = props => {
  return (
    <Form>
    <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="1">
        {props.form-label}
      </Form.Label>
      <Col sm="3">
        <Form.Control type={props.form-type} placeholder={props.form-placeholder} />
      </Col>
    </Form.Group>
  </Form>
  ); 
}  

export default InputField;
