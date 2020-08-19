import React from "react";
import "../assets/css/theme.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const Footer = (props) => {
  return (
    <div className="footerContainer">
      <div className="container">
        <Row>
          <Col md={4}>
            <div>
              <h5 class="mb-4 footerTitle">About ADB System</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.{" "}
              </p>
            </div>
          </Col>
          <Col md={{ span: 2, offset: 2 }}>
            <div>
              <h5 class="mb-4 footerTitle">More Info</h5>
              <ul class="list-unstyled footerMenu">
                <li>
                  <Link to="/tenders/Current" className="footerLink">Tender</Link>
                </li>
                <li>
                  <Link to="/search/tenders" className="footerLink">Advanced Search</Link>
                </li>
                <li>
                  <Link to="/Publish-Guildline" className="footerLink">
                    Publish Guidlines
                  </Link>
                </li>
                <li>
                  <Link to="/News" className="footerLink">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/HELP/FAQ" className="footerLink">
                    SUPPORT & FAQ'S
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <h5 className="mb-4 footerTitle">Contact</h5>

              <div>
                <div className="footerMedia">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="footerIcon mt-1 mr-2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div className="footerMediaBody">
                    <p>Level 9, 227 Collins Street, Melbourne, VIC – 3000 </p>
                  </div>
                </div>
                <div class="footerMedia">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="footerIcon mt-1 mr-2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <div class="footerMediaBody">
                    <p>info@adbsystems.com.au</p>
                  </div>
                </div>
                <div className="footerMedia">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="footerIcon mt-1 mr-2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div className="footerMediaBody">
                    <p>1300 784 249</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
