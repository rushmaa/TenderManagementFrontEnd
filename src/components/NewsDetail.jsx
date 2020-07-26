import React, { Component } from "react";

import "../assets/css/theme.css";

class NewsDetail extends React.Component {
  render() {
    return (
      <div className="pt-3">
        <div className="n-title">
          <h2>
            {this.props.tenderName}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="NEWS_DATE">{this.props.tenderDate}</span>
          </h2>
        </div>

        <div>
          <div class="excerpt pt-2">{this.props.tenderDetail}</div>
        </div>
      </div>
    );
  }
}

export default NewsDetail;
