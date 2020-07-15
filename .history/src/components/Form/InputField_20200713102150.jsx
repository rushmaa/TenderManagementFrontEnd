import React from "react";

import { Form } from "react-bootstrap";

const InputField = props => {
  return (
    <Form>
    <Form.Group>
        <Form.Control type={props.formType} placeholder={props.formPlaceholder} />
    </Form.Group>
  </Form>
  ); 
}  

export default InputField;
