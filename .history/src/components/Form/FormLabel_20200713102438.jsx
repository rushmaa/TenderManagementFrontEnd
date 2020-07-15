import React from "react";

import { Form } from "react-bootstrap";

const FormLabel = props => {
  return (
    <Form>
    <Form.Group>
      <Form.Label>
        {props.formLabel}
      </Form.Label>
    </Form.Group>
  </Form>
  ); 
}  

export default FormLabel;
