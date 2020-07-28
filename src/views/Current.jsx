import React from "react";
import DataTable from "../components/DataTable";
import Card from "../components/Card";
import "../assets/css/theme.css";
import Title from "../components/Title";
import MainForm from "../components/Form/MainForm";
import { TenderTableData } from "../Data/TenderTableData";
import { connect } from "react-redux";

const Current = (props) => {
  const [showTable, setShowTable] = React.useState(true);
  const [searchCode, setsearchCode] = React.useState(TenderTableData);

  React.useEffect(() => {
    if (props.User.User.type === 'admin') {
      fetch(`http://localhost:5000/user/getunconfirmeduser`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('data.users==', data.users);
          props.setUnconfirmedUserList(data.users);
        });
    }
  }, [])


  const proxy = (searchCode) => {
    console.log(searchCode);
    const results = TenderTableData.filter(
      (element) => element.code === searchCode
    );
    setsearchCode(results);
    setShowTable(!showTable);
  };

if (props?.User?.User?.confirmed === '1') {
  return (
    <div className="main-container pt-3">
      <div className="container-fluid">
        <Card
          title="Current Tenders"
          text="This page shows all open tenders. The list includes all public tenders, as well as selective tenders to which your business can respond. You must be signed in to see selective tenders."
        />
        <div>{showTable && <DataTable searchCode={searchCode} />}</div>
        <Title header="Search Criteria" />
        <MainForm toggleTable={proxy} />
      </div>
    </div>
  );
} else {
  return (
    <div className="main-container pt-3">
      {props.history.push('/NoAccess')}
    </div>
  );
}

};
const mapStateToProps = (state) => {
  var data = { User: state.User }
  return data;
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUnconfirmedUserList: (data) => dispatch({ type: "SET_UNCONFIRMED_USER", payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Current);
