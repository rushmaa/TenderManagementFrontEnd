import React, { Component } from "react";
import { Link } from "react-router-dom";

//Components
import Card from "../components/Card";
import NewsDetail from "../components/NewsDetail";
import FooterComp from "../components/Footer";

import "../assets/css/theme.css";
import {
  FileTextFill,
  ArrowRightCircleFill,
  ArrowLeftCircleFill,
} from "react-bootstrap-icons";

class PublishCouncil extends React.Component {
  render() {
    return (
      <div className="main-container pt-3">
        <div className="container-fluid">
          <Card
            title="Publishing Guidelines"
          />
          <NewsDetail
            tenderName="Publish a Council Tender "
          />
          <div className="pt-4">
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

          <div className="contents pt-3">
            <p>
              Councils can contact ADB Tenders &amp; Contracts Helpdesk on
              <strong> 1300 784 249</strong>, email{" "}
              <a href="info@adbsystems.com.au">
                info@adbsystems.com.au
              </a>{" "}
              to set up your Council as a tender issuing authority ("Agency") or
              receive help with placing your tender.
            </p>

            <p>
              All tenders need to be submitted by <strong>12:00pm </strong>on
              the Wednesday preceding the newspaper advertisement of the tender.
            </p>

            <p>To submit a tender for publication to the site:</p>
            <ol>
              <li>Download the attached document;</li>
              <li>
                Complete the document&nbsp;by providing details of your Tender;
              </li>
              <li>
                Return this document together with an electronic copy of the
                tender specification to{" "}
                <a href="mailto:info@adbsystems.com.au">
                  dcw_support@lga.sa.gov.au
                </a>
              </li>
            </ol>
          </div>

          <Link to="/News" className="linkStyle">
            <ArrowLeftCircleFill color="#003366" /> Return to Publishing Guidelines
          </Link>
        </div>
     
      {/*Footer*/} 
      <FooterComp />
      </div>
    );
  }
}

export default PublishCouncil;