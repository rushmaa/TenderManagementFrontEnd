import React from "react";

import { Row, Col } from "react-bootstrap";

const TenderRequestSection = (props) => {
  return (
    <div style={{ width: "100rem" }}>
      <div class="container float-left pt-1 pb-1">
        <div class="row justify-content-md-left pb-2">
          <div class="col col-lg-2 font-weight-bold">Invitation</div>
        </div>
        <Container>
          <Row>
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
          </Row>
          <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row>
        </Container>
        <div class="row justify-content-md-left">
          <Row>
            <col>
              <div class="col col-lg-2">
                <p class="font-weight-bold">Tender State</p>
              </div>
              <div class="col-md-auto">
                <p class="font-weight-light">Open</p>
              </div>
            </col>
          </Row>

          <div class="col col-lg-2">
            <p class="font-weight-bold">Tender Code</p>
          </div>
          <div class="col-md-auto">
            <p class="font-weight-light">DH046241</p>
          </div>

          <div class="col col-lg-2">
            <p class="font-weight-bold">Contract Number</p>
          </div>
          <div class="col-md-auto">
            <p class="font-weight-light">SAH2018-1623</p>
          </div>

          <div class="col col-lg-2">
            <p class="font-weight-bold">Category</p>
          </div>
          <div class="col-md-auto">
            <p class="font-weight-light">
              Medical Equipment and Accessories and Supplies - (20%)
            </p>
            <p class="font-weight-light">
              Management and Business Professionals and Administrative Services
              - (80%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderRequestSection;
