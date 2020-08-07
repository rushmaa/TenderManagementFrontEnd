
import React from "react";
import Card from "../components/Card";
import TenderRequestSection from "../components/TenderRequestSection";
import Description from "../components/Description";
import { Enquiries } from "../components/Enquiries";
import { Contacts } from "../components/Contacts";
import { SpecificationDocuments } from "../components/SpecificationDocuments";
import { Responses } from "../components/Responses";
import { TenderTitle } from "../components/TenderTitle";

// import { TenderData } from "../Data/TenderTableData";
import jsPDF from "jspdf";

const DisplayTender = (props) => {
  /*var pdf = new jsPDF("p", "pt", "a1");
  pdf.addHTML(document.body, function () {
    pdf.save(`${element.tenderCode}.pdf`);
  })*/
  const element = props.location.state.tender;
  return (
    <div className="main-container pt-3">
      <div className="container-fluid">
        <Card
          title="Current Tenders"
          text="This page shows all open tenders. The list includes all public tenders, as well as selective tenders to which your business can respond. You must be signed in to see selective tenders."
        />
        <TenderTitle
          issuedByHeader={element?.issuedByHeader}
          issuedBy={element?.issuedBy}
        />
        <TenderRequestSection
          tenderState={element?.tenderState}
          contractNumber={element?.contractNumber}
          category={element?.category}
          tenderCode={element?.tenderCode}
        />
        <Enquiries enquiry={element?.enquiry} />
        <Contacts name={element?.name} email={element?.email} />
        <Description
          descriptionLevel1={element?.descriptionLevel1}
          descriptionListItem1={element?.descriptionListItem1}
          descriptionListItem2={element?.descriptionListItem2}
        />
        <SpecificationDocuments
          fileList={element?.fileList}
        />
        <Responses responsesItem1={element?.responsesItem1} />
      </div>
    

    </div>
  );
};

export default DisplayTender;