import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Navbar} from './components/Navbar';
import {Header} from './components/Header';

import UserLogin from "./views/UserLogin";
import Home from "./views/Home";
import Current from "./views/Current";
import Elodgement from "./views/Elodgement";
import Future from "./views/Future";
import Closed from "./views/Closed";
import Newthisweek from "./views/Newthisweek";

const App = () => {
  return (
    <Router>
      <Header /> 
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tenders/Current" component={Current} />
        <Route exact path="/tenders/E-Lodgement" component={Elodgement} />
        <Route exact path="/tenders/Future" component={Future} />
        <Route exact path="/tenders/Closed" component={Closed} />
        <Route exact path="/tenders/New-this-week" component={Newthisweek} />
        
        <Route exact path="/Login" component={UserLogin} />
      </Switch>
    </Router>
  );
};

export default App;

