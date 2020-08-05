/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";

export default function ComboBox(props) {
  // setTenderContent
  const getalltenders = ()=>{
    axios.get("http://localhost:5000/tender/getalltenders").then(
      (response) => {
        console.log(response);
        if (response.data.tenders) {
          response.data.tenders.forEach(element => {
            var categories = element.categories.split(',');
            categories.forEach(category => {
              TenderSearchData.push({tenderCode: element.tenderCode,  keywords:category , tenderContent:element})
            });
          });
        } else {
          console.log("No data received");
        }
      },
      (error) => {
        console.log(error);
        //TODO: show message
      }
    );
  }

const [value, setValue] = React.useState();
getalltenders()
  return (
    <Autocomplete
      id="combo-box-demo"
      options={TenderSearchData}
      getOptionLabel={(option) => option.keywords}
      style={{ width: 300 }}
      onSubmit={(e)=>{
        e.preventDefault()
      }}
      onChange={(event, newValue) => {
        event.preventDefault();
        setValue(newValue);
        props.setTenderContent(newValue)
      }}
      renderInput={(params) => <TextField {...params} label="Search Tenders" variant="outlined" />}
    />
  );
}

var TenderSearchData = [];
