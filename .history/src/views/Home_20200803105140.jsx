import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FileTextFill, ArrowRightCircleFill } from "react-bootstrap-icons";

//Components
import Card from "../components/Card";
import NewsDetail from "../components/NewsDetail";
import Title from "../components/Title";

import "../assets/css/theme.css";

class Home extends React.Component {
  render() {
    return (
      <div className="main-container pt-3">
        <div className="container-fluid">
          <Card title="Welcome to the ADB Systems website" />
          <p className="pt-3">
            Welcome to the ADB Systems website. The site offers convenient
            access to all procurement opportunities open to the public within
            the Australian Government. You may make online submissions using the
            Online Lodgement System. You will also access the list of all goods
            , facilities, and works contracts issued by the Australian
            Government.
          </p>
          <Title header="Electronic Notification" />
          <p>
            If you're an ADB Systems Tenders & Contracts registered member, you
            may choose to be informed of tenders that might be of interest to
            you via e-mail. How? You check online for the latest tenders that
            suit your preferences, save the results as a search profile and then
            choose the Notification option to receive automatic email updates.
          </p>
          <h4 className="displayInline">Not a registered member: </h4>
          <span className="registrationLink">
            To register as a member click this link
          </span>
          <div className="pt-3">
            <Title header="Latest News" />
            <Link to="/News/Publish-Tender" className="linkStyle">
              <NewsDetail
                tenderName="Publish a Tender"
                tenderDate=" 29/09/2006"
              />
            </Link>
            <div>
              <p className="displayInline">
                The website is designed to publish all Australian Public Sector
                tenders and any related documents which may be provided
                available for download by registered site users. The agencies
                are responsible for granting of tenders.{" "}
              </p>

              <Link to="/News/Publish-Tender" className="linkStyle">
                Read More <ArrowRightCircleFill color="#003366" />
              </Link>
            </div>
            <div>
              <Link
                to="/Files/AGovernment.doc"
                target="_blank"
                download
                className="linkStyle"
              >
                <FileTextFill className="pr-1" />
                Australian Government Advertisement Required Information V3.doc
                (54 KB)
              </Link>
            </div>
            <Link to="/News/Publish-Council" className="linkStyle">
              <NewsDetail
                tenderName="Publish a Council Tender "
                tenderDate=" 29/09/2006"
              />
            </Link>
            <div>
              <p className="displayInline">
                Councils may either contact the LGA Electronic Services Program
                at (08) 8224 2000, OR contact ADB Tenders & Contracts Helpdesk
                on 1300 784 249 to arrange the Council as a contract issuing
                authority ("Agency") or seek help with the tender.{" "}
              </p>

              <Link to="/News/Publish-Contract" className="linkStyle">
                Read More <ArrowRightCircleFill color="#003366" />
              </Link>
            </div>
            <div>
              <Link
                to="/Files/LocalGovernment.doc"
                target="_blank"
                download
                className="linkStyle"
              >
                <FileTextFill className="pr-1" />
                Local Government Advertisement Required information 20070516.doc
                (188 KB)
              </Link>
            </div>
            <Link to="/News/Publish-Contract" className="linkStyle">
              <NewsDetail
                tenderName="Publish a Contract"
                tenderDate=" 29/09/2006"
              />
            </Link>
            <div>
              <p className="displayInline">
                The site is designed as required by the DPC Circular PC027
                'Disclosure of Government Contracts' to disclose contracts
                within the Australian Public Sector. To send a publication
                contract to the site download the attached document, fill out
                the specifics as needed in the application and submit it to ADB
                Systems Tenders & Contracts.{" "}
              </p>

              <Link to="/News/Publish-Council" className="linkStyle">
                Read More <ArrowRightCircleFill color="#003366" />
              </Link>
            </div>
            <div>
              <Link
                to="/Files/ContractDisclosure.doc"
                target="_blank"
                download
                className="linkStyle"
              >
                <FileTextFill className="pr-1" />
                Contract Disclosure Proforma July 2019.doc (49 KB)
              </Link>
            </div>
          </div>
        </div>

        <div class="container">
          <div
            class="themesflat-spacer clearfix"
            data-desktop="104"
            data-mobi="60"
            data-smobi="60"
           
          ></div>
          <div class="row equalize sm-equalize-auto">
            <div class="col-md-6" >
              <div
                class="themesflat-spacer clearfix"
                data-desktop="33"
                data-mobi="0"
                data-smobi="0"
               
              ></div>

              <div class="themesflat-headings style-1 clearfix">
                <h2 class="heading letter-spacing--09px clearfix">
                  WE HAVE A WIDE BREADTH OF EXPERIENCE
                </h2>
                <div class="sep clearfix"></div>
                <p class="sub-heading clearfix">
                  The breadth of knowledge and experience at Financial Group
                  assures our clients that we have the skills necessary to focus
                  on their important financial matters.
                </p>
              </div>

              <div
                class="themesflat-spacer clearfix"
                data-desktop="20"
                data-mobi="20"
                data-smobi="20"
                
              ></div>
              <h3 class="title-video">
                We are independent and free from third party influence.
              </h3>
              <div
                class="themesflat-spacer clearfix"
                data-desktop="21"
                data-mobi="20"
                data-smobi="20"
               
              ></div>
              <a href="#" class="themesflat-button blue">
                WATCH MORE VIDEO
              </a>
              <div
                class="themesflat-spacer clearfix"
                data-desktop="28"
                data-mobi="60"
                data-smobi="60"
               
              ></div>
            </div>

            <div
              class="col-md-6 half-background style-1"
              
            >
              <div class="themesflat-icon style-1 clearfix background">
                <a
                  class="icon-wrap popup-video"
                  href="https://www.youtube.com/watch?v=LQpedLhpQsk"
                >
                  <span class="icon">
                    <i class="finance-icon-playbutton"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            class="themesflat-spacer clearfix"
            data-desktop="80"
            data-mobi="60"
            data-smobi="60"
          ></div>
          <div class="border-h-1 dark"></div>
        </div>
      </div>
    );
  }
}

export default Home;
