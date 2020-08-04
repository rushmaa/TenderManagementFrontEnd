import React, { Component } from "react";
import { Link } from "react-router-dom";

//Components
import Card from "../components/Card";
import NewsDetail from "../components/NewsDetail";

import "../assets/css/theme.css";
import { FileTextFill, ArrowLeftCircleFill } from "react-bootstrap-icons";

class PublishContract extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    window.location.href = `mailto:${this.props.email}`;
  }

  render() {
    return (
      <div className="main-container pt-3">
        <div className="container-fluid">
          <Card
            title="Publishing Guidelines"
          />
          <NewsDetail
            tenderName="Publish a Contract"
          />
          <div className="pt-4">
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

          <div class="contents">
            <p>
              The attached document&nbsp;is used to supply information on
              Contracts as required by the DPC Circular PC027 'Disclosure of
              Government Contracts'
            </p>

            <ol>
              <li>Download the attached document;</li>
              <li>
                Complete the&nbsp;document by providing details of
                the&nbsp;Contract;
              </li>
              <li>
                <p>
                  Return the completed document&nbsp;to{" "}
                  <Link className="linkStyle" onClick={this.onClick}>
                    info@adbsystems.com.au
                  </Link>
                </p>
              </li>
            </ol>

            <p>To submit a Contract&nbsp;for publication to the site:</p>

            <p>
              To ensure that the contract information is displayed on the
              website in a timely fashion, public authorities&nbsp; are asked to
              provide all the documentation&nbsp;five(5) working days before it
              is to be displayed. &nbsp;In addition, public authorities&nbsp;
              are required to obtain all the appropriate approvals from within
              their agencies to display the contract information before the
              documentation is released.
            </p>

            <p>
              For more information on the disclosure requirements which apply to
              Contracts please refer to DPC Circular PC027, a copy of which is
              posted at our Current Tenders page.
            </p>

            <p>
              <strong>Tenders Help Desk</strong>
              <br />
              Ph: 1300 784 249
              <br />
              Email:{" "}
              <Link className="linkStyle" onClick={this.onClick}>
                info@adbsystems.com.au
              </Link>
            </p>

            <p>
              &nbsp;If you have any queries on this process, please contact:
            </p>
          </div>

          <Link to="/News" className="linkStyle">
            <ArrowLeftCircleFill color="#003366" /> Return to Publishing Guidelines
          </Link>
        </div>
      </div>
    );
  }
}

export default PublishContract;