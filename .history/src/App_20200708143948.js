import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";

import {Navbar} from './components/Navbar';
import {Header} from './components/Header';
import UserLogin from "./views/UserLogin";
import Home from "./views/Home";

const App = () => {
  return (
    <Router>
      <Header /> 
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={UserLogin} />
      </Switch>
    </Router>
  );
};

export default App;

