import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import * as CONSTANTS from "../Data/Constants";

const ModalDialog = (props) => {
  const erroFlag = props.errorFlag;
  const [show, setShow] = useState(true);

  const history = useHistory();
  const handleClose = () => {
    setShow(false);
    if (!erroFlag) {
      history.push(CONSTANTS.ROUTE_CURRENT_TENDERS);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {erroFlag
              ? "Error while adding tender to DB"
              : " Tender added successfully "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {erroFlag
            ? "This can be due to connection error or database error"
            : "  This tender will be visible in current tenders page"}
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
