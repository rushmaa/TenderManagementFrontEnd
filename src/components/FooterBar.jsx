import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../assets/css/theme.css";

const FooterBar = props => {
  return (
    <div class="contactBar">
    <div class="container-fluid footerbar-container">
      <Row>
        <Col>
          <div class="footerbar-spacer"></div>
          <div class="inner">
            <div class="heading-wrap">
              <h3 class="heading">
                Interested in this product? Wait no further and contact
                ADB Systems today!
              </h3>
            </div>
            <div class="button-wrap">
              <Link to="#" class="footerBar-button">
                CONTACT US TODAY
              </Link>
            </div>
          </div>
          <div class="footerbar-spacer"></div>
        </Col>
      </Row>
    </div>
  </div>
  ); 
}  

export default FooterBar;
