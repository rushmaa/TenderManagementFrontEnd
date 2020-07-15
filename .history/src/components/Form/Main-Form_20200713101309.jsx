import React, { Component } from "react";

//Components
import Card from "../components/Card";
import Title from "../components/Title";
import InputField from "../components/Form/InputField";

onst MainForm = props =>  {
  render() {
    return (
      <div className="pt-3">
        <div className="container-fluid">
          <Card
            title="Current Tenders  "
            text="This page shows all open tenders. The list includes all public tenders, as well as selective tenders to which your business can respond. You must be signed in to see selective tenders."
          />
          <Title header="Search Criteria" />
          <InputField
            formLabel="Keywords"
            formType="input"
            formPlaceholder="Keywords"
          />
        </div>
      </div>
    );
  }
}

export default MainForm;
