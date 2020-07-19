import React, { Component } from "react";

//Components
import Card from "../components/Card";
import Title from "../components/Title";
import MainForm from "../components/Form/MainForm";
import DataTable from "../components/DataTable";


const Tenders = (props) =>  {


  
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Find Tenders"
          text="Find tenders that match a specified criteria.  When signed in, you can also configure saved searches and set up new tender notifications."
        />
         {this.state.showTable && <DataTable />}
        <Title header="Search Criteria"/>
        <MainForm toggleTable={this.proxy}/>
      </div>
    </div>
    );
  }

export default Tenders;
