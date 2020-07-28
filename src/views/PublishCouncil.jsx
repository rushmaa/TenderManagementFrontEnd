import React, { Component } from "react";
import { Link } from "react-router-dom";

//Components
import Card from "../components/Card";
import NewsDetail from "../components/NewsDetail";

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
            title="News"
            text="This page displays news items in condensed form with the most recent item on top.  Click on a headline to view the full details of that news item."
          />
          <NewsDetail
            tenderName="Publish a Council Tender "
            tenderDate=" 29/09/2006"
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
              Councils can either contact the Electronic Services Program at the
              LGA on <strong>(08) 8224 2000</strong>, email{" "}
              <a href="mailto:dcw_support@lga.sa.gov.au">
                dcwsupport@lga.sa.gov.au
              </a>{" "}
              or visit{" "}
              <a
                href="http://www.lga.sa.gov.au/goto/satenders"
                class="external"
              >
                http://www.lga.sa.gov.au/goto/satenders
              </a>{" "}
              <strong>OR</strong> contact ADB Tenders &amp; Contracts Helpdesk on
              (<strong>08) 84621401</strong>, email{" "}
              <a href="mailto:satendersandcontracts@sharedservices.sa.gov.au">
                satendersandcontracts@sharedservices.sa.gov.au
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
                <a href="mailto:dcw_support@lga.sa.gov.au">
                  dcw_support@lga.sa.gov.au
                </a>
                &nbsp;or&nbsp;
                <a href="mailto:satendersandcontracts@sharedservices.sa.gov.au">
                  satendersandcontracts@sharedservices.sa.gov.au
                </a>
              </li>
            </ol>
          </div>

          <Link to="/News" className="linkStyle">
            <ArrowLeftCircleFill color="#003366" /> Return to News
          </Link>
        </div>
      </div>
    );
  }
}

export default PublishCouncil;