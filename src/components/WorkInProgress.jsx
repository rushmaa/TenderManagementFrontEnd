import React from "react";
import "../assets/css/theme.css";
import maintainance from "../assets/img/Maintainance.svg";

const WorkInProgress = props => {
  return (
    <section>
    <div className="spacer"></div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h5 className="text-uppercase small-title">Maintainance</h5>
            <h4 className="mb-3 videoHeading">Work In Progress</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div className="row Imagecontainer">
        <img src={maintainance} className="maintainImage" />
      </div>
    </div>
    <div className="spacer"></div>
  </section>
  ); 
}  

export default WorkInProgress;
