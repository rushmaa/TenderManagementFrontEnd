import React from "react";
//Components
import Card from "../components/Card";
import Title from "../components/Title";
import FooterComp from "../components/Footer";
import WorkInProgress from "../components/WorkInProgress";


class Awarded extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Contracts"
          text="This page displays a list of contracts awarded by the Government of South Australia. Select an Agency to display the summarised view of contracts for that Agency."
        />
         <WorkInProgress />

         {/*Footer*/} 
         <FooterComp />
      </div>
    </div>
    );
  }
}

export default Awarded;
