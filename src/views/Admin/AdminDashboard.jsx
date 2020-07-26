import React from 'react'
import DataTable  from "./DataTable";
import { connect } from "react-redux";

const AdminDashboard = (props) => {
  var userList=props.User.unconfirmedusers
    if (props.User.User.type === 'admin') {
      console.log(userList);
        return (
            <div>
                <DataTable userList={userList}/>
            </div>
        )
    }else{
        return(
            <div>
                <h3>You are not an admin user!</h3>
            </div>
        )
    }
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
