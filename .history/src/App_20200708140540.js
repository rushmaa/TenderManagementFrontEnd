import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";

import {Navbar} from './components/Navbar';
import {Header} from './components/Header';

const App = () => {
  const [toggle, setToggle]=React.useState(true)
  return (
    <Router>
     <Header /> 
      <Navbar />
    </Router>
  );
};

export default App;

