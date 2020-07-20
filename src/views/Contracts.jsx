import React from "react";

//Components
import Card from "../components/Card";
import Title from "../components/Title";

class Contracts extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Find Contracts "
          text="Find contracts that match specified criteria."
        />
        <Title header="Search Criteria"/>
        <h3>Contracts</h3>
      </div>
    </div>
    );
  }
}

export default Contracts;
