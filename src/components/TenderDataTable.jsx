import React from "react";
import "../assets/css/datatable.css";
import { MDBDataTableV5 } from "mdbreact";
import { Link } from "react-router-dom";
import { Paperclip } from "react-bootstrap-icons";
const TenderDataTable = (props) => {
  const generateRows = (searchCode) => {
    var data = [];

    props.searchCode.forEach((element) => {
      data.push({
        code: (
          <div>
            <div>
              <b>{element.tenderCode}</b>
            </div>
            <div className="tender-row-state ">{element.tenderState}</div>
          </div>
        ),
        details: (
          <React.Fragment>
            <div>
              <Link
                to={{
                  pathname: `/tenders/Current/DisplayTender/${element.tenderCode}`,
                  state: { code: element.code },
                }}
              >
                <span className="tender-link">{element.tenderName}</span>
              </Link>
              <Paperclip color="#173d6e" size={15} />
            </div>
            <div>{element.detailsIssuedBy}</div>
            <div>
              Category 1: Medical Equipment and Accessories and Supplies - 20%
            </div>
          </React.Fragment>
        ),
        date: (
          <React.Fragment>
            <div>closing</div>
            <div className="closing_date">{element.closingdateTo}</div>
          </React.Fragment>
        ),
      });
    });
    return data;
  };
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Code & State",
        field: "code",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Details",
        field: "details",
        width: 270,
      },
      {
        label: "Date",
        field: "date",
        width: 270,
      },
    ],
    rows: generateRows(),
  });

  return (
    <div className="pt-3">
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={datatable}
        striped={true}
        searching={false}
      />
    </div>
  );
};

export default TenderDataTable;
