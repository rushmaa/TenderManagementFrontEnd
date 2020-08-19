import React from 'react'
import DataTable  from "./DataTable";
import { connect } from "react-redux";
import MUIDataTable from "mui-datatables";
import { Button } from "@material-ui/core";

const AdminDashboard = (props) => {
  
var [rowList, setRowList] = React.useState();
  var userList = props.User.unconfirmedusers;
  var selectedRows;

  const Reject = () => {
    var newArray = Object.create(rowList)
    selectedRows.forEach(element => {
      var item = newArray[element.index];
      sendRejectRequest(item[1])
      newArray.splice(element.index, 1)
    });
    setRowList(newArray)
  }

  const Accept = () => {
    var newArray = Object.create(rowList)
    selectedRows.forEach(element => {
      var item = newArray[element.index];
      sendAcceptRequest(item[1])
      newArray.splice(element.index, 1)
    });
    console.log('new rowList==', rowList)
    setRowList(newArray)
  }

  const sendAcceptRequest = (data) => {
    fetch(`http://tmback.nithiresearch.com/user/update/`, {
      method: "post",
      body: JSON.stringify({ email: data }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(' in succ for', data);
      });
  }

  const sendRejectRequest = (data) => {
    fetch(`http://tmback.nithiresearch.com/user/reject/`, {
      method: "post",
      body: JSON.stringify({ email: data }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(' in succ for', data);
      });
  }

  React.useEffect(() => {
    var item = []
    userList && userList.forEach((element) => {
      item.push([element.businessName, element.email]);
      setRowList(item)
    });
  }, [])


  const columns = ["Name", "Email"];
  const options = {
    filterType: "checkbox",
    selectableRows: true,
    selectableRowsOnClick: true,
    onRowClick: (rowData, rowState) => {
      console.log("selected row== rowData==", rowData, "rowState==", rowState);
    },
    onRowsSelect: (curRowSelected, allRowsSelected) => {
      selectedRows = allRowsSelected;
    },
  }

  if (props.User.User.type === 'admin') {
    return (
      <div>
        <React.Fragment>
          <MUIDataTable
            title={"Employee List"}
            data={rowList}
            columns={columns}
            options={options}
          />
          <div style={{ margin: 'auto', flexDirection: 'row', width: '45rem' }}>
            <Button variant="contained" color="primary" style={{ backgroundColor: '#93c297', flex: 0.5, width: '20rem', margin: 20 }} onClick={() => { Accept() }} >
              Accept
         </Button>
            <Button variant="contained" color="primary" style={{ backgroundColor: '#c96768', flex: 0.5, width: '20rem', margin: 20 }} onClick={() => { Reject() }}>
              Reject
          </Button>
          </div>
        </React.Fragment>
      </div>
    )
  } else {
    return (
      <div>
        <h3>You are not an admin user!</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  var data = { User: state.User }
  return data;
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (data) => dispatch({ type: "SET_USER", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
