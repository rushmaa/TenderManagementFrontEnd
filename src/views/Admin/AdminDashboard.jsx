import React from 'react'
import DataTable  from "./DataTable";
import { connect } from "react-redux";

const AdminDashboard = (props) => {
  
  const [rowList, setRowList]= React.useState([]);
  var userList=props.User.unconfirmedusers;
  React.useEffect(()=>{
    console.log('in use eff');
  })
  userList && userList.forEach((element) => {
    rowList.push({
      name: element.businessName,
      email: element.email,
    });
  });
  function updateList(data) {
    console.log('received in update list==', data);
    setRowList(data)
  }
  console.log('rowList to pass--',rowList);
    // if (props.User.User.type === 'admin') {
        return (
            <div>
                <DataTable userList={rowList} update={updateList}/>
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
    var data={User: state.User }
    return data;
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      setUser: (data) => dispatch({ type: "SET_USER", payload:data }),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
