import React from "react";

import { Row, Col, Container } from "react-bootstrap";

const TenderRequestSection = (props) => {
  return (
    <div style={{ width: "100rem" }}>
      <div class="container float-left pt-1 pb-1">
        <div class="row justify-content-md-left pb-2">
          <div class="col col-lg-2 font-weight-bold">Invitation</div>
        </div>
        <Container>
          <Row>
            <Col sm="2">
              <b>Tender State</b>
            </Col>
              <Col sm>{props.tenderState}</Col>
          </Row>
          <Row>
            <Col sm="2">
              <b>Tender Code</b>
            </Col>
            <Col sm>{props.tenderCode}</Col>
          </Row>
          <Row>
            <Col sm="2">
              <b>Contract Number</b>
            </Col>
          <Col sm>{props.contractNumber}</Col>
          </Row>
          <Row>
            <Col sm="2">
              <b>Category</b>
            </Col>
            <Col sm>
              {props.category}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TenderRequestSection;
