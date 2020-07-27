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
          title="Add Tender"
          text="This page can add your tender and it will show it in Current Tender page."
        />
      </div>
    </div>
    );
  }
}

export default AddTender;
