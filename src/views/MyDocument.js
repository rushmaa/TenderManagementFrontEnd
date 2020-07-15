import React, {Fragment} from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    textAlign: "center",
    fontSize: 30,
  },
  section: {
    margin: 10,
    paddingLeft: "40%",
    backgroundColor: "red",
    flexGrow: 1,
    textAlign: "center",
  },
});

// Create Document Component
export const MyDocument = () => {
  var pdf = new jsPDF('p', 'pt', 'a1');
  pdf.addHTML(document.body, function() {
    pdf.save('page.pdf');
  });
    return(
        <Fragment>
        <div className="container-fluid">
          <section className="invoice-body">
            <div className="invoice-header">
              <h2>Invoice</h2>
              <h4>Sep 02, 2018 - Sep 14, 2018</h4>
            </div>
            <div className="mtb-2">
              <p>Your name</p>
              <p>Street #, Street name</p>
              <p>City, province</p>
              <p>Country, Postal code</p>
            </div>
            <div className="mt-8 row">
              <div className="col-lg-4">
                <h5 className="text-grey"> Billed to</h5>
                <p>Your name</p>
                <p>Street #, Street name</p>
                <p>City, province</p>
                <p>Country, Postal code</p>
              </div>
              <div className="col-lg-4">
                <h5 className="text-grey">Invoice Posted</h5>
                <p>Sep 02,2019</p>
              </div>
              <div className="col-lg-4">
                <h5 className="text-grey">Payment Due</h5>
                <p>Sep 15,2019</p>
              </div>
            </div>
            <div className="mt-8">
            </div>
          </section>
        </div>
      </Fragment>
)};
