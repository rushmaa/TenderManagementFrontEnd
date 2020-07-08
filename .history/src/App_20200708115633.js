import React from "react";

import "./App.css";
import { Button } from "reactstrap";
import { IoIosLock, IoMdPerson } from "react-icons/io";

import {Navbar} from './components/Navbar';
import {Header} from './components/Header';

const App = () => {
  const [toggle, setToggle]=React.useState(true)
  return (
    <div></div>
       <Header /> 
       <Navbar />
  );
};

export default App;
