import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Form } from "react-bootstrap";

//Components
import Card from "../components/Card";
import NewsDetail from "../components/NewsDetail";
import FooterComp from "../components/Footer";
import Title from "../components/Title";

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
          <Title header="Latest News" />
          <Link to="/News/Publish-Tender" className="linkStyle">
            <NewsDetail
              tenderName="Publish a Tender"
              tenderDate=" 29/09/2006"
            />
          </Link>
          <div>
            <p className="displayInline">
              The website is designed to publish all Australian Public Sector
              tenders and any related documents which may be provided available
              for download by registered site users. The agencies are
              responsible for granting of tenders.{" "}
            </p>

            <Link to="/News/Publish-Tender" className="linkStyle">
              Read More <ArrowRightCircleFill color="#003366" />
            </Link>
          </div>
          <div>
            <Link
              to="/Files/PublishTender.docx"
              target="_blank"
              download
              className="linkStyle"
            >
              <FileTextFill className="pr-1" />
              Government Advertisement Required Information V3.doc (54 KB)
            </Link>
          </div>
          <Link to="/News/Publish-Council" className="linkStyle">
            <NewsDetail
              tenderName="Publish a Council Tender "
              tenderDate=" 29/09/2006"
            />
          </Link>
          <div>
            <p className="displayInline">
              Councils may either contact the LGA Electronic Services Program at
              (08) 8224 2000, OR contact ADB Tenders & Contracts Helpdesk on
              1300 784 249 to arrange the Council as a contract issuing
              authority ("Agency") or seek help with the tender.{" "}
            </p>

            <Link to="/News/Publish-Contract" className="linkStyle">
              Read More <ArrowRightCircleFill color="#003366" />
            </Link>
          </div>
          <div>
            <Link
              to="/Files/PublishCouncil.docx"
              target="_blank"
              download
              className="linkStyle"
            >
              <FileTextFill className="pr-1" />
              Local Government Advertisement Required information 20070516.doc
              (188 KB)
            </Link>
          </div>
          <Link to="/News/Publish-Contract" className="linkStyle">
            <NewsDetail
              tenderName="Publish a Contract"
              tenderDate=" 29/09/2006"
            />
          </Link>
          <div>
            <p className="displayInline">
              The site is designed as required by the DPC Circular PC027
              'Disclosure of Government Contracts' to disclose contracts within
              the Australian Public Sector. To send a publication contract to
              the site download the attached document, fill out the specifics as
              needed in the application and submit it to ADB Systems Tenders &
              Contracts.{" "}
            </p>

            <Link to="/News/Publish-Council" className="linkStyle">
              Read More <ArrowRightCircleFill color="#003366" />
            </Link>
          </div>
          <div>
            <Link
              to="/Files/PublishContract.docx"
              target="_blank"
              download
              className="linkStyle"
            >
              <FileTextFill className="pr-1" />
              Contract Disclosure Proforma July 2019.doc (49 KB)
            </Link>
          </div>

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
