import React from "react";
//Components
import Card from "../components/Card";
import FooterComp from "../components/Footer";

class RequestSupport extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Request Support"
        />
        <h3>Request Support</h3>

         {/*Footer*/} 
         <FooterComp />
      </div>
    </div>
    );
  }
}

export default RequestSupport;
