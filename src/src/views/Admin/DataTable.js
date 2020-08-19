import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Button } from "react-bootstrap";

var selectedList = [];
export default function DataTable(props) {
const [listitems, setListItems] = React.useState([]);
  function accept() {
    selectedList.forEach(element => {
      fetch(`http://tmback.nithiresearch.com/user/update`, {
      method: "post",
      body: JSON.stringify({ email: element }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('in succ',props?.userList);
        var outcome=props?.userList;
        for (let index = 0; index < props?.userList.length; index++) {
          const item = props?.userList[index];
          outcome.splice(index, 1);
        }
        // var outcome=props?.userList.filter(row => row.email !== element);
        console.log('outcome==',outcome)
        setListItems(outcome)
        props.update(outcome)
      });
    });
    
  }

  function reject() {
    selectedList.forEach(element => {
      fetch(`http://tmback.nithiresearch.com/user/reject`, {
      method: "post",
      body: JSON.stringify({ email: element }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('in succ',props?.userList);
      });
    });
  }

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Name",
        field: "name",
        width: 150,
        sort: "asc",
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Email",
        field: "email",
        width: 270,
      },
    ],
    rows: props?.userList,
  });
  const [checkbox1, setCheckbox1] = React.useState([]);

  const showLogs2 = (e) => {
    setCheckbox1(e);
    if (e.checked) {
      selectedList.push(e.email);
    } else {
      for (let index = 0; index < selectedList.length; index++) {
        const element = selectedList[index];
        if (e.email === element) {
          selectedList.splice(index, 1);
        }
      }
    }
  };
console.log('rendering===',props?.userList)
  return (
    <>
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={datatable}
        checkbox
        headCheckboxID="id6"
        bodyCheckboxID="checkboxes6"
        getValueCheckBox={(e) => {
          showLogs2(e);
        }}
        getValueAllCheckBoxes={(e) => {
          console.log("getValueAllCheckBoxes==", e);
          showLogs2(e);
        }}
        style={{ marginTop: 100 }}
        multipleCheckboxes
      />
      <div className="row justify-content-md-center">
        <Button variant="danger" className={"w-25 m-5"} active onClick={()=>{accept()}}>
          Reject
        </Button>
        <Button variant="success" className={"w-25 m-5"} active onClick={()=>{accept()}}>
          Accept
        </Button>
      </div>
    </>
  );
}
