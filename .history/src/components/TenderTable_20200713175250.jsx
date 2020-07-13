import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";


const TenderTable = props => {
    const [User, setUsers] = useState([]);
    
    const getUserData = async () => {
      try {
        const data = await axios.get(
          "http://jsonplaceholder.typicode.com/comments"
        );
        console.log(data);
        setUsers(data.data);
      } catch (e) {
        console.log(e);
      }
    };

    const columns = [
      { dataField: "id", text: "Client Id" },
      { dataField: "name", text: "Client Name" },
      { dataField: "email", text: "Client Email" },
    ];

    useEffect(() => {
      getUserData();
    }, []);
    
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-text text-secondary'>{props.text}</p>
      </div>
    </div> 
  ); 
}  

export default TenderTable;
