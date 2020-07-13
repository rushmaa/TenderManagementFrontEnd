import React, { Component } from "react";

import { Row } from "react-bootstrap";

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
          <Row>
          <FormLabel 
            formLabel="Keywords" /> 
          <InputField
            formType="input"
            formPlaceholder="Keywords"
          />
          </Row>  

          <Row>
          <FormLabel 
            formLabel="Tender Code" /> 
          <InputField
            formType="input"
            formPlaceholder="Tender Code"
          />
          </Row>         
      
           
          <SelectComp />
        </div>
      </div>
  ); 
}  

export default MainForm;
