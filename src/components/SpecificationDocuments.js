import React from "react";
import TitleContainer from "./TitleContainer";
import * as pdf1 from "../documents/DH046241.pdf";
import GetAppIcon from '@material-ui/icons/GetApp';

export const SpecificationDocuments = (props) => {
  const getDocument=(event)=>{
      event.preventDefault();
    //  fetch("http://localhost:5000/tender/getfile").then((response) => response.blob()).then((blob) => {
    //   const url = window.URL.createObjectURL(new Blob([blob]));
    //   const link = document.createElement('a');
    //   link.href = url;
    //   link.setAttribute('download', `data.pdf`);
    //   document.body.appendChild(link);
    //   link.click();
    //   link.parentNode.removeChild(link);
    // })
  }
  var elements= props?.fileList?.split(',')
  return (
    <div class="container-fluid float-left">
    <TitleContainer title={'Specification Documents'} />
    {
        elements.map(x => <a href = {pdf1} rel="noopener noreferrer" target = "_blank" style={{textDecoration:'none', color:'grey'}} onClick={(event)=>{
          getDocument(event)
        }}>{x} <GetAppIcon/></a>)
    }
    </div>
  );
};
