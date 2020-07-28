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

class PublishTender extends React.Component {
  render() {
    return (
      <div className="main-container pt-3">
        <div className="container-fluid">
          <Card
            title="News"
            text="This page displays news items in condensed form with the most recent item on top.  Click on a headline to view the full details of that news item."
          />
          <NewsDetail tenderName="Publish a Tender" tenderDate=" 29/09/2006" />
          <div className="pt-4">
            <Link
              to="/Files/SAGovernment.doc"
              target="_blank"
              download
              className="linkStyle"
            >
              <FileTextFill className="pr-1" />
              Australian Government Advertisement Required Information V3.doc (54 KB)
            </Link>
            <div class="contents">
              <p>
                Only authorised Agencies within the South Australian Public
                Sector can publish tenders to this site.
              </p>

              <p>
                In order to publish a tender Agencies must be registered. For
                further details on this contact the Tender Help Desk, Ph: +61
                (08) 8462 1401.
              </p>

              <p>To submit a tender for publication to this site:</p>

              <ol>
                <li>Download the attached document;</li>
                <li>
                  Complete the document by providing details of your Tender;
                </li>
                <li>Login as an Agency Administrator,</li>
                <li>Select the Administration menu item,select Dashboard</li>
                <li>Select Create Tender from the options available</li>
                <li>
                  Using the information gathered on your document, complete the
                  Tender Wizard
                </li>
                <li>Release the tender.</li>
              </ol>

              <p>
                It is recomended that all tenders are submitted for release on{" "}
                <strong>12:00pm </strong>on Wednesdays.
              </p>

              <p>
                Tenders published via the site go directly on to the site and
                advertisement details (where approved) are forwarded to the
                government media provider for placement in the press. The media
                provider will fax or e-mail a copy of the advertisement to the
                requesting agency for proofreading and confirmation.
              </p>

              <p>If you have any queries on this process, please contact:</p>
              <p>
                <strong>Tenders Help Desk</strong>
                <br />
                Ph: 1300 784 249
                <br />
                Email: info@adbsystems.com.au
              </p>
            </div>

            <Link to="/News" className="linkStyle">
              <ArrowLeftCircleFill color="#003366" /> Return to News
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PublishTender;