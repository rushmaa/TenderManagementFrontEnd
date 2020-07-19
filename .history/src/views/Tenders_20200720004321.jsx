import React, { Component } from "react";

//Components
import Card from "../components/Card";
import Title from "../components/Title";
import MainForm from "../components/Form/MainForm";
import DataTable from "../components/DataTable";
import { TenderTableData } from "../Data/TenderTableData";

const Tenders = (props) => {
  const [showTable, setShowTable] = React.useState(false);
  const [searchCode, setsearchCode] = React.useState(TenderTableData);
  
  const proxy = (searchCode) =>{
    setShowTable(!showTable)
  }
  
  return (
    <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Find Tenders"
          text="Find tenders that match a specified criteria.  When signed in, you can also configure saved searches and set up new tender notifications."
        />
        {showTable && <DataTable />}
        <Title header="Search Criteria" />
        <MainForm toggleTable={proxy} />
      </div>
    </div>
  );
};

export default Tenders;
