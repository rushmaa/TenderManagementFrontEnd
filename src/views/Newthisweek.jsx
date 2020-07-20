import React  from "react";

//Components
import Card from "../components/Card";
import Title from "../components/Title";
import MainForm from "../components/Form/MainForm";

class Newthisweek extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Tenders New This Week"
          text="No default summary"
        />
        <Title header="Search Result"/>
        <Title header="Search Criteria"/>
        <h3>NEW THIS WEEK Tenders</h3>
        <MainForm />
      </div>
    </div>
    );
  }
}

export default Newthisweek;
