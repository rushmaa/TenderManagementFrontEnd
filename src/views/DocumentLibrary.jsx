import React from "react";

//Components
import Card from "../components/Card";

class DocumentLibrary extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Library Documents"
          text="The library is an access point to documents, policies, user guides and further information on relevant issues relating to SA Tenders & Contracts."
        />
        <h3>Document Library</h3>
      </div>
    </div>
    );
  }
}

export default DocumentLibrary;
