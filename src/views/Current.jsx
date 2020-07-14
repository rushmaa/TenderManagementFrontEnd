import React from "react";
import Card from "../components/Card";
import TenderRequestSection from "../components/TenderRequestSection";
import Description from "../components/Description";
import { Enquiries } from "../components/Enquiries";
import { Contacts } from "../components/Contacts";
import { SpecificationDocuments } from "../components/SpecificationDocuments";
import { Responses } from "../components/Responses";
import { TenderTitle } from "../components/TenderTitle";

class Current extends React.Component {
  render() {
    return (
      <div className="pt-3">
        <div className="container-fluid">
          <Card
            title="Current Tenders"
            text="This page shows all open tenders. The list includes all public tenders, as well as selective tenders to which your business can respond. You must be signed in to see selective tenders."
          />
          <TenderTitle/>
          <TenderRequestSection />
          <Enquiries />
          <Contacts/>
          <Description/>
          <SpecificationDocuments/>
          <Responses />
        </div>
      </div>
    );
  }
}

export default Current;
