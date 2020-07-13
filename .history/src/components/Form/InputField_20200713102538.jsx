import React from "react";

import { Form } from "react-bootstrap";

const InputField = props => {
  return (
    <Form>
    <Form.Group  column sm="5">
        <Form.Control type={props.formType} placeholder={props.formPlaceholder} />
    </Form.Group>
  </Form>
  ); 
}  

export default InputField;
