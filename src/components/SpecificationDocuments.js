import React from "react";
import TitleContainer from "./TitleContainer";
import GetAppIcon from '@material-ui/icons/GetApp';

export const SpecificationDocuments = (props) => {
  const getDocument=(event, filename)=>{
      event.preventDefault();
     fetch("http://localhost:5000/tender/getfile?name=468.pdf")
     .then((response) => response.blob()).then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    })
  }
  var elements= props?.fileList?.split(',')
  return (
    <div class="container-fluid float-left">
    <TitleContainer title={'Specification Documents'} />
    {
        elements?.map(x => <a href='#' rel="noopener noreferrer" target = "_blank" style={{textDecoration:'none', color:'grey'}} onClick={(event)=>{
          getDocument(event, x)
        }}>{x} <GetAppIcon/></a>)
    }
    </div>
  );
};
