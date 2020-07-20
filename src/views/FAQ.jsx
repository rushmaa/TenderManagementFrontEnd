import React from "react";
//Components
import Card from "../components/Card";

class FAQ extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Frequently Asked Questions"
          text="This page lists the most frequently asked questions by users of the website, as well as some tips.  If you don't find an answer here, use the request support feature.  If your query relates to a tender then follow up with the designated contact person for that tender."
        />
        <h3>Frequently Asked Questions</h3>
      </div>
    </div>
    );
  }
}

export default FAQ;
