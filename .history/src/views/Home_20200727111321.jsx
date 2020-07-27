import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FileTextFill, ArrowRightCircleFill } from "react-bootstrap-icons";

//Components
import Card from "../components/Card";
import NewsDetail from "../components/NewsDetail";
import Title from "../components/Title";

class Home extends React.Component {
  render() {
    return (
      <div className="main-container pt-3">
        <div className="container-fluid">
          <Card
            title="Welcome to the Aussie Digital Tenders & Contracts website"
            text="You can register new supplier here."
          />
          <p className="pt-3">
            Welcome to the Aussie Digital Tenders & Contracts website. The
            site provides easy-to-use access to all publicly available bidding
            opportunities within the Australian Government. Electronic
            submissions can be made using the Electronic Lodgement Service. You
            can also view the details of all Australian Government-awarded
            contracts for goods, services and works.
          </p>
          <Title header="Electronic Notification" />
          <p>
            If you are a registered member with ADB Tenders & Contracts, you can
            elect to be notified by e-mail of tenders that may be of interest to
            you. How? You Search the site for the latest tenders that match your
            interests, save the results as a Search Profile and then select the
            Alert option to receive automatic updates by email.
          </p>
          <h4 className="displayInline">Not a registered member: </h4>
          <span className="registrationLink">
            To register as a member click this link
          </span>
          <Title header="Latest News" />
          <Link to="/News/Publish-Tender" className="linkStyle">
            <NewsDetail
              tenderName="Publish a Tender"
              tenderDate=" 29/09/2006"
            />
          </Link>
          <div>
            <p className="displayInline">
              The site is designed for the publication of all Australian
              Public Sector tenders and any associated documentation that can be
              made available for download by registered users of the site.
              Agencies are responsible for the publication of tenders.{" "}
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
              Australian Government Advertisement Required Information V3.doc (54 KB)
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
              Australian Public Sector as required by the DPC Circular
              PC027 'Disclosure of Government Contracts'. To submit a contract
              for publication to the site download the attached document,
              complete the details as requested on the form and return it to ADB
              Tenders & Contracts.{" "}
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

export default Home;
