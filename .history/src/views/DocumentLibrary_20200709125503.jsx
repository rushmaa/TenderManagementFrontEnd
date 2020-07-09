import React, { Component } from "react";

class DocumentLibrary extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="Across Government Contracts"
          text="Find contracts that match specified criteria."
        />
      </div>
    </div>
    );
  }
}

export default DocumentLibrary;
