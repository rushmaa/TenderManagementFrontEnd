import React from "react";
import DataTable from "../components/DataTable";
import Card from "../components/Card";
import "../assets/css/theme.css";
import Title from "../components/Title";
import MainForm from "../components/Form/MainForm";
import { TenderTableData } from "../Data/TenderTableData";

const Current = (props) => {
  const [showTable, setShowTable] = React.useState(true);
  const [searchCode, setsearchCode] = React.useState(TenderTableData);

  const proxy = (searchCode) => {
    console.log(searchCode);
    const results = TenderTableData.filter(
      (element) => element.code === searchCode
    );
    setsearchCode(results);
    setShowTable(!showTable);
  };

  return (
    <div className="main-container pt-3">
      <div className="container-fluid">
        <Card
          title="Current Tenders"
          text="This page shows all open tenders. The list includes all public tenders, as well as selective tenders to which your business can respond. You must be signed in to see selective tenders."
        />
        <div>{showTable && <DataTable searchCode={searchCode} />}</div>
        <Title header="Search Criteria" />
        <MainForm toggleTable={proxy} />
      </div>
    </div>
  );
};

export default Current;
