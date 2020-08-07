import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Form } from "react-bootstrap";

//Components
import Card from "../components/Card";
import NewsDetail from "../components/NewsDetail";
import FooterComp from "../components/Footer";

import "../assets/css/theme.css";
import { FileTextFill, ArrowRightCircleFill } from "react-bootstrap-icons";

class PublishGuildlines extends React.Component {
  render() {
    return (
      <div className="pt-3">
        <div className="container-fluid">
          <Card
            title="Publishing Guidelines"
            text="This page has guidelines for publishing your organisation's documents on our website."
          />
          <section id="services">
            <div className="spacer"></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="text-center mb-5">
                    <h5 className="text-uppercase small-title">Guilde</h5>
                    <h4 className="mb-3 videoHeading">How we Guilde</h4>
                    <p>
                      It will be as simple as occidental in fact, it will be
                      Occidental.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-sm-6">
                  <div className="text-center p-4 mt-3">
                    <div className="avatar-md mx-auto mb-4">
                      <span className="avatar-title rounded-circle bg-soft-primary">
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
                          className="feather feather-grid icon-dual-primary"
                        >
                          <rect x="3" y="3" width="7" height="7"></rect>
                          <rect x="14" y="3" width="7" height="7"></rect>
                          <rect x="14" y="14" width="7" height="7"></rect>
                          <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                      </span>
                    </div>
                    <h5>Lorem Ipsum</h5>
                    <p class="mb-0">
                      To an English person, it will seem like English as
                      skeptical.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="text-center p-4 mt-3">
                    <div className="avatar-md mx-auto mb-4">
                      <span className="avatar-title rounded-circle bg-soft-primary">
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
                          className="feather feather-grid icon-dual-primary"
                        >
                          <rect x="3" y="3" width="7" height="7"></rect>
                          <rect x="14" y="3" width="7" height="7"></rect>
                          <rect x="14" y="14" width="7" height="7"></rect>
                          <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                      </span>
                    </div>
                    <h5>Lorem Ipsum</h5>
                    <p className="mb-0">
                      If several languages coalesce, the grammar of the
                      language.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="text-center p-4 mt-3">
                    <div className="avatar-md mx-auto mb-4">
                      <span className="avatar-title rounded-circle bg-soft-primary">
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
                          className="feather feather-grid icon-dual-primary"
                        >
                          <rect x="3" y="3" width="7" height="7"></rect>
                          <rect x="14" y="3" width="7" height="7"></rect>
                          <rect x="14" y="14" width="7" height="7"></rect>
                          <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                      </span>
                    </div>
                    <h5>Lorem Ipsum</h5>
                    <p className="mb-0">
                      The languages only differ in their grammar their
                      pronunciation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer"></div>
          </section>

          <div className="newsletterContainer">
            <div class="container">
              <Row>
                <Col md={{ span: 10, offset: 2 }} className="m-auto">
                  <h3 className="videoHeading">
                    Subscribe to our Newsletter for latest news.
                  </h3>
                  <form class="newsletterForm">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="newletterInput"
                    />
                    <button className="submit-newsletter cardBtn">
                      {" "}
                      Subscribe
                    </button>
                  </form>
                </Col>
              </Row>
            </div>
          </div>

          {/*Footer*/}
          <FooterComp />
        </div>
      </div>
    );
  }
}

export default PublishGuildlines;
