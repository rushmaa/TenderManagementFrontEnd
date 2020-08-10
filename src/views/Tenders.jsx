import React from "react";

//Components
import Card from "../components/Card";
import WorkInProgress from "../components/WorkInProgress";
import FooterComp from "../components/Footer";

const Tenders = (props) => {
  return (
    <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Find Tenders"
          text="Find tenders that match a specified criteria.  When signed in, you can also configure saved searches and set up new tender notifications."
        />
        
        <WorkInProgress />

        {/*Footer*/}
       <FooterComp />
      </div>
    </div>
  );
};

export default Tenders;
