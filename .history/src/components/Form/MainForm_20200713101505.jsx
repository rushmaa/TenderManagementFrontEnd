import React, { Component } from "react";

//Components
import Title from "../Title";
import InputField from "InputField";

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
        </div>
      </div>
  ); 
}  

export default MainForm;
