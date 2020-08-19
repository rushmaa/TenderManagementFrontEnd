import React from "react";

//Components
import Card from "../components/Card";
import Title from "../components/Title";
import MainForm from "../components/Form/MainForm";
import FooterComp from "../components/Footer";
import TenderDataTable from "../components/TenderDataTable";
import { TenderTableData } from "../Data/TenderTableData";

const Closed = (props) => {
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
          title="Closed Tenders  "
          text="This page shows all tenders that have closed for responses, and not yet been awarded. The list includes all public tenders, as well as selective tenders to which your business was invited to respond. You must be signed in to see selective tenders."
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

export default Closed;
