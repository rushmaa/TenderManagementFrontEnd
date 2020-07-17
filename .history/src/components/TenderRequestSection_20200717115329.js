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
            <Col sm="2"><b>Tender State</b></Col>
            <Col sm>Open</Col>
          </Row>
          <Row>
            <Col sm="2"><b>Tender Code</b></Col>
            <Col sm>DH046241</Col>
          </Row>
          <Row>
            <Col sm="2"><b>Contract Number</b></Col>
            <Col sm>SAH2018-1623</Col>
          </Row>
          <Row>
            <Col sm="2"><b>Category</b></Col>
            <Col sm> <p class="font-weight-light">
              Medical Equipment and Accessories and Supplies - (20%)
            </p>
            <p class="font-weight-light">
              Management and Business Professionals and Administrative Services
              - (80%)
            </p></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TenderRequestSection;
