import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import * as CONSTANTS from "../Data/Constants";

const ModalDialog = (props) => {
  const [show, setShow] = useState(true);
  const history = useHistory();
  const handleClose = () => {
    setShow(false);
    history.push(CONSTANTS.ROUTE_CURRENT_TENDERS);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Tender added successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This tender will be visible in current tenders page
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalDialog;
