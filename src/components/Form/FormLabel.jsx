import React from "react";

import { Form, Row} from "react-bootstrap";

const FormLabel = props => {
  return (
    <Form.Group as={Row} controlId="formPlaintextPassword">
     <Form.Label column sm="2">
        {props.formLabel}
      </Form.Label>
    </Form.Group>
  ); 
}  

export default FormLabel;
