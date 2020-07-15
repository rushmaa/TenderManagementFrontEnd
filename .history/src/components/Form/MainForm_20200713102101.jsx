import React, { Component } from "react";

//Components
import Title from "../Title";
import InputField from "../Form/InputField";
import SelectComp from "../Form/SelectComp";
import FormLabel from "../Form/FormLabel";

const MainForm = props => {
  return (
    <div className="pt-3">
        <div className="container-fluid">
          <Title header="Search Criteria" />
          <InputField
            formLabel="Keywords"
            formType="input"
            formPlaceholder="Keywords"
          />
          <InputField
            formLabel="Tender Code"
            formType="input"
            formPlaceholder="Tender Code"
          />
          <SelectComp />
        </div>
      </div>
  ); 
}  

export default MainForm;
