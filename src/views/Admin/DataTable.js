import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Button } from 'react-bootstrap';
var selectedList=[];
export default function DataTable() {

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        sort:'asc',
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Email',
        field: 'email',
        width: 270,
      }
    ],
    rows: [
      {
        name: 'Cara Stevens',
        email:'cara@gmail.com'
      },
      {
        name: 'Hermione Butler',
        email:'hermoine@gmail.com'
      },
    ],
  });
  const [checkbox1, setCheckbox1] = React.useState([]);
  
  const showLogs2 = (e) => {
    setCheckbox1(e);
    if (e.checked) {
      selectedList.push(e.email)
    } else {
      for (let index = 0; index < selectedList.length; index++) {
        const element = selectedList[index];
        if (e.email === element.email) {
          selectedList.splice(index, 1)
        }
      }
    }
    
  };

  return (
    <>
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={datatable}
        checkbox
        headCheckboxID='id6'
        bodyCheckboxID='checkboxes6'
        getValueCheckBox={(e) => {
          showLogs2(e);
        }}
        getValueAllCheckBoxes={(e) => {
          console.log('getValueAllCheckBoxes==',e)
          showLogs2(e);
        }}
        style={{marginTop:100}}
        multipleCheckboxes
      />

    </>
  );
}