import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import MainForm from "../components/Form/MainForm";

class Elodgement extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Electronic Lodgement"
          text="This page shows all open tenders that can accept electronic responses. Click on the Respond to Tender icon to submit an electronic response, or click on the tender title to view full tender details."
        />
        <h3>E-Lodgement</h3>
        <Title header="Search Result"/>
        <Title header="Search Criteria"/>
        <MainForm />
      </div>
    </div>
    );
  }
}

export default Elodgement;
