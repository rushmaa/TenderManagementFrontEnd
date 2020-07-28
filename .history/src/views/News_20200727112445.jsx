import React, { Component } from "react";
import { Link } from "react-router-dom";

//Components
import Card from "../components/Card";
import NewsDetail from "../components/NewsDetail";

import "../assets/css/theme.css";
import { FileTextFill } from "react-bootstrap-icons";

class News extends React.Component {
  render() {
    return (
      <div className="main-container pt-3">
        <div className="container-fluid">
          <Card
            title="News"
            text="This page displays news items in condensed form with the most recent item on top.  Click on a headline to view the full details of that news item."
          />
          <Link to="/News/Publish-Tender" className="linkStyle">
            <NewsDetail
              tenderName="Publish a Tender"
              tenderDate=" 29/09/2006"
            />
          </Link>
          <div>
            <p className="displayInline">
              The site is designed for the publication of all Australian Public
              Sector tenders and any associated documentation that can be made
              available for download by registered users of the site. Agencies
              are responsible for the publication of tenders.{" "}
            </p>

            <Link to="/News/Publish-Tender" className="linkStyle">
              Read More <ArrowRightCircleFill color="#003366" />
            </Link>
          </div>
          <div>
            <Link
              to="/Files/SAGovernment.doc"
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
              Councils can either contact the Electronic Services Program at the
              LGA on (08) 8224 2000, OR contact ADB Tenders & Contracts Helpdesk
              on (08) 84621401to set up your Council as a tender issuing
              authority (Agency) or receive help with placing your tender.{" "}
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
              The site is designed for the publication of contracts within the
              Australian Public Sector as required by the DPC Circular PC027
              'Disclosure of Government Contracts'. To submit a contract for
              publication to the site download the attached document, complete
              the details as requested on the form and return it to ADB Tenders
              & Contracts.{" "}
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
    );
  }
}

export default News;
