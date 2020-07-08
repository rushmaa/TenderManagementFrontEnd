import React from "react";

import "./App.css";
import { Button } from "reactstrap";
import { IoIosLock, IoMdPerson } from "react-icons/io";

import {Navbar} from './components/Navbar';

const App = () => {
  const [toggle, setToggle]=React.useState(true)
  return (
       <Navbar />
  );
};

export default App;
