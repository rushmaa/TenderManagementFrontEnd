import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalDialog = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

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
