import React from "react";
import { Button, Row, Col } from "react-bootstrap";
//Components
import FooterComp from "../components/Footer";
import Card from "../components/Card";
import WorkInProgress from "../components/WorkInProgress";

class FAQ extends React.Component {
  render() {
    return (
      <div className="pt-3">
        <div className="container-fluid">
          <Card
            title="Frequently Asked Questions"
            text="This page lists the most frequently asked questions by users of the website, as well as some tips.  If you don't find an answer here, use the request support feature.  If your query relates to a tender then follow up with the designated contact person for that tender."
          />

          {/*FAQ Section*/}
         <WorkInProgress />

          {/*Footer*/}
          <FooterComp />
        </div>
      </div>
    );
  }
}

export default FAQ;
