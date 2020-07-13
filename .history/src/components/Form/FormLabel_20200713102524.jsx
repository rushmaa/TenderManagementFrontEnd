import React from "react";

import { Form } from "react-bootstrap";

const FormLabel = props => {
  return (
    <Form>
    <Form.Group>
      <Form.Label column sm="3">
        {props.formLabel}
      </Form.Label>
    </Form.Group>
  </Form>
  ); 
}  

export default FormLabel;
