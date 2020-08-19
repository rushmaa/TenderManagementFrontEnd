import React from "react";

//Components
import Card from "../components/Card";
import Title from "../components/Title";
import MainForm from "../components/Form/MainForm";
import FooterComp from "../components/Footer";

import TenderDataTable from "../components/TenderDataTable";
import { TenderTableData } from "../Data/TenderTableData";

const Future = (props) => {
  const [showTable, setShowTable] = React.useState(true);
  const [searchCode, setsearchCode] = React.useState([]);

  const proxy = (searchCode) => {
    console.log(searchCode);
    console.log("searchcode");
    const results = TenderTableData.filter(
      (element) => element.code === searchCode
    );
    setsearchCode(results);
    setShowTable(!showTable);
  };

  return (
    <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Future Tenders"
          text="This page displays advance notices of possible future tenders. Not all tenders are first shown on this page, nor does listing here imply that the tender will ever be issued."
        />
        <div className="container-fluid pt-3">
          <Title header="Search Result" />
          <div>{showTable && <TenderDataTable searchCode={searchCode} />}</div>

          <Title header="Search Criteria" />
          <MainForm />
          <div className="spacer"></div>
        </div>
        {/*Footer*/}
        <FooterComp />
      </div>
    </div>
  );
};

export default Future;
