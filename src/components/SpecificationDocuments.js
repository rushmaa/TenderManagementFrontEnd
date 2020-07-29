import React from "react";
import TitleContainer from "./TitleContainer";
import * as pdf1 from "../documents/DH046241.pdf";
import GetAppIcon from '@material-ui/icons/GetApp';

export const SpecificationDocuments = () => {
  return (
    <div class="container-fluid float-left">
    <TitleContainer title={'Specification Documents'} />
      <a href = {pdf1} rel="noopener noreferrer" target = "_blank" style={{textDecoration:'none', color:'grey'}}>S.A Tenders Specification part-1 <GetAppIcon/></a>
    </div>
  );
};
