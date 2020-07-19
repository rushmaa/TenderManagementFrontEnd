import React, { Component } from "react";

//Components
import Card from "../components/Card";

class News extends React.Component {
  render() {
    return (
      <div className="pt-3">
      <div className="container-fluid">
        <Card
          title="News"
          text="This page displays news items in condensed form with the most recent item on top.  Click on a headline to view the full details of that news item."
        />
       </div>
    </div>
    );
  }
}

export default News;
