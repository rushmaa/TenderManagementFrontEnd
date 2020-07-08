import React, { Component } from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';

import "./App.css";

import {Navbar} from './components/Navbar';
import {Header} from './components/Header';

const App = () => {
  const [toggle, setToggle]=React.useState(true)
  return (
    <>
    
    </>
    <BrowserRouter>
    <div className="App">
    <Header /> 
    <Navbar />
     <Switch>
     <Route exact path='/' component={Home} />
   </Switch>

   </div>
   </BrowserRouter>
  );
};

export default App;
