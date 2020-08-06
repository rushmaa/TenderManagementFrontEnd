import React from "react";
//Components
import Card from "../components/Card";
import Title from "../components/Title";
import FooterComp from "../components/Footer";

class AcrossGovContracts extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Across Government Contracts"
          text="Find contracts that match specified criteria."
        />
         <Title header="Search Result"/>
         <h3>Across Government Tenders</h3>

           {/*Footer*/} 
           <FooterComp />
      </div>
    </div>
    );
  }
}

export default AcrossGovContracts;
