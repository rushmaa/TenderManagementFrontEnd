import React from 'react'
import { connect } from "react-redux";
import MUIDataTable from "mui-datatables";
import { Button } from "@material-ui/core";
const AdminDashboard = (props) => {

  var [rowList, setRowList] = React.useState();
  var userList = props.User.unconfirmedusers;
  var selectedRows;

  const Accept = () => {
    var newArray = Object.create(rowList)
    selectedRows.forEach(element => {
      var item=newArray[element.index];
      sendRequest(item[1])
      newArray.splice(element.index, 1)
    });
    console.log('new rowList==', rowList)
    setRowList(newArray)
  }

  const sendRequest=(data)=>{
    fetch(`http://localhost:5000/user/update/`, {
      method: "post",
      body: JSON.stringify({ email: data}),
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
    userList && userList.forEach((element) => {
      var item = []
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

  // rowList=[]
  console.log('rowList to pass--', rowList);
  // if (props.User.User.type === 'admin') {
  return (
    <div>
      <React.Fragment>
        <MUIDataTable
          title={"Employee List"}
          data={rowList}
          columns={columns}
          options={options}
        />
        <Button variant="contained" color="primary" onClick={() => { Accept() }}>
          Accept
      </Button>
      </React.Fragment>
    </div>
  )
  // }else{
  //     return(
  //         <div>
  //             <h3>You are not an admin user!</h3>
  //         </div>
  //     )
  // }
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
