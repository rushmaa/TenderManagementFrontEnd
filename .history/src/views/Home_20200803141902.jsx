import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FileTextFill, ArrowRightCircleFill } from "react-bootstrap-icons";
import { Button, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";

//Components
import Card from "../components/Card";
import NewsDetail from "../components/NewsDetail";
import Title from "../components/Title";

import "../assets/css/theme.css";

class Home extends React.Component {
  render() {
    return (
      <div className="main-container pt-3">
        <div className="container-fluid">
          <Card title="Welcome to the ADB Systems website" />
          <p className="pt-3">
            Welcome to the ADB Systems website. The site offers convenient
            access to all procurement opportunities open to the public within
            the Australian Government. You may make online submissions using the
            Online Lodgement System. You will also access the list of all goods
            , facilities, and works contracts issued by the Australian
            Government.
          </p>
          <Title header="Electronic Notification" />
          <p>
            If you're an ADB Systems Tenders & Contracts registered member, you
            may choose to be informed of tenders that might be of interest to
            you via e-mail. How? You check online for the latest tenders that
            suit your preferences, save the results as a search profile and then
            choose the Notification option to receive automatic email updates.
          </p>
          <h4 className="displayInline">Not a registered member: </h4>
          <span className="registrationLink">
            To register as a member click this link
          </span>
          <div className="pt-3">
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
                tenders and any related documents which may be provided
                available for download by registered site users. The agencies
                are responsible for granting of tenders.{" "}
              </p>

              <Link to="/News/Publish-Tender" className="linkStyle">
                Read More <ArrowRightCircleFill color="#003366" />
              </Link>
            </div>
            <div>
              <Link
                to="/Files/AGovernment.doc"
                target="_blank"
                download
                className="linkStyle"
              >
                <FileTextFill className="pr-1" />
                Australian Government Advertisement Required Information V3.doc
                (54 KB)
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
                Councils may either contact the LGA Electronic Services Program
                at (08) 8224 2000, OR contact ADB Tenders & Contracts Helpdesk
                on 1300 784 249 to arrange the Council as a contract issuing
                authority ("Agency") or seek help with the tender.{" "}
              </p>

              <Link to="/News/Publish-Contract" className="linkStyle">
                Read More <ArrowRightCircleFill color="#003366" />
              </Link>
            </div>
            <div>
              <Link
                to="/Files/LocalGovernment.doc"
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
                'Disclosure of Government Contracts' to disclose contracts
                within the Australian Public Sector. To send a publication
                contract to the site download the attached document, fill out
                the specifics as needed in the application and submit it to ADB
                Systems Tenders & Contracts.{" "}
              </p>

              <Link to="/News/Publish-Council" className="linkStyle">
                Read More <ArrowRightCircleFill color="#003366" />
              </Link>
            </div>
            <div>
              <Link
                to="/Files/ContractDisclosure.doc"
                target="_blank"
                download
                className="linkStyle"
              >
                <FileTextFill className="pr-1" />
                Contract Disclosure Proforma July 2019.doc (49 KB)
              </Link>
            </div>
          </div>
        </div>

        {/*Video and Context*/}
        <div className="container-fluid videoContainer">
          <div
            className="spacer"
            data-desktop="80"
            data-mobi="60"
            data-smobi="60"
          ></div>
          <Row>
            <Col md={6}>
              <div className="videoHeight">
                <h2 className="videoHeading">
                  WE HAVE A WIDE BREADTH OF EXPERIENCE
                </h2>
                <div className="decorator"></div>
                <p className="sub-heading">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="videoHeight">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=ap9PvIr9RTg"
                  className="video"
                />
              </div>
            </Col>
          </Row>
          <div
            className="spacer"
            data-desktop="80"
            data-mobi="60"
            data-smobi="60"
          ></div>
        </div>

        <div class="contactBar">
          <div class="container">
            <Row>
              <Col>
                <div class="spacer"></div>
                <div class="inner">
                  <div class="heading-wrap">
                    
                      <h3 class="heading">
                        If You are interst in this Product, Contact ADB System
                      </h3>
                   
                  </div>
                  <div class="button-wrap">
                    <a
                      href="#"
                      class="footerBar-button"
                    >
                      CONTACT US TODAY
                    </a>
                  </div>
                </div>
                <div class="spacer"></div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
