import React, { Component } from "react";

//Components
import Card from "../components/Card";
import Title from "../components/Title";
import MainForm from "../components/Form/MainForm";
import DataTable from "../components/DataTable";

class Tenders extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Find Tenders"
          text="Find tenders that match a specified criteria.  When signed in, you can also configure saved searches and set up new tender notifications."
        />
         {true && <DataTable />}
        <Title header="Search Criteria"/>
        <MainForm />
      </div>
    </div>
    );
  }
}

export default Tenders;
