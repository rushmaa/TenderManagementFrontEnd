import React from "react";
import { Table } from "react-bootstrap";
import { Paperclip } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import "../assets/css/theme.css";

const TenderStaticTable = (props) => {
  return (
    <div className="header-body pt-4">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Code & State</th>
            <th>Details</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <b>{props.tenderCode}</b>
              </div>
              <div className="tender-row-state ">Open</div>
            </td>
            <td>
              <div>
                <Link to="/tenders/Current/DH046241">
                  <span className="tender-link">
                    SA Health Professional Services Panel
                  </span>
                </Link>
                <Paperclip color="#173d6e" size={15} />
              </div>
              <div>Issued by SA Health</div>
              <div>
                Category 1: Medical Equipment and Accessories and Supplies - 20%
              </div>
              <div>
                Category 2: Management and Business Professionals and
                Administrative Services - 80%
              </div>
            </td>
            <td>
              <div>closing</div>
              <div className="closing_date">15 Apr, 2024</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <b>{props.tenderCode}</b>
              </div>
              <div className="tender-row-state ">Open</div>
            </td>
            <td>
              <div>
                <Link to="/tenders/Current/DH046241">
                  <span className="tender-link">
                    SA Health Professional Services Panel
                  </span>
                </Link>
                <Paperclip color="#173d6e" size={15} />
              </div>
              <div>Issued by SA Health</div>
              <div>
                Category 1: Medical Equipment and Accessories and Supplies - 20%
              </div>
              <div>
                Category 2: Management and Business Professionals and
                Administrative Services - 80%
              </div>
            </td>
            <td>
              <div>closing</div>
              <div className="closing_date">15 Apr, 2024</div>
            </td>
          </tr>
          <tr>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TenderStaticTable;
