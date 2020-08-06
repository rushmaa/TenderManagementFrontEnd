import React from "react";

//Components
import Card from "../components/Card";
import Title from "../components/Title";
import FooterComp from "../components/Footer";

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

         {/*Footer*/} 
         <FooterComp />
      </div>
    </div>
    );
  }
}

export default Contracts;
