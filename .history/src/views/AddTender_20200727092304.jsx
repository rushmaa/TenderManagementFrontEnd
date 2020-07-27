import React from "react";
//Components
import Card from "../components/Card";
import Title from "../components/Title";
class AddTender extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Contracts"
          text="This page displays a list of contracts awarded by the Government of South Australia. Select an Agency to display the summarised view of contracts for that Agency."
        />
        <Title header="Select an Agency"/>
        <h3>Awarded Tenders</h3>
      </div>
    </div>
    );
  }
}

export default AddTender;
