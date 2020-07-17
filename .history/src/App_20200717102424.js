import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import {Header} from './components/Header';

import UserLogin from "./views/UserLogin";
import Home from "./views/Home";
import Current from "./views/Current";
import Current2 from "./views/Current2";
import Elodgement from "./views/Elodgement";
import Future from "./views/Future";
import Closed from "./views/Closed";
import Newthisweek from "./views/Newthisweek";

import Awarded from "./views/Awarded";
import AcrossGovContracts from "./views/AcrossGovContracts";

import Tenders from "./views/Tenders";
import Contracts from "./views/Contracts";
import News from "./views/News";
import history from './history';
import FAQ from "./views/FAQ";
import RequestSupport from "./views/RequestSupport";
import DocumentLibrary from "./views/DocumentLibrary";
import { Provider } from 'react-redux'
import { createStore } from "redux";
import Reducer from "./store/reducers/Reducer";
import {MyDocument} from "./views/MyDocument";
const App = () => {
  const store = createStore(Reducer);
  return (
    <Provider store={store}>
    <Router history={history}>
      <Header /> 
      <Navbar store={store}/>
      <Switch >
        <Route exact path="/" component={Home} />
        
        <Route exact path="/tenders/Current" component={Current} />
        <Route exact path="/tenders/Current/DH046241" component={Current2} />
        <Route exact path="/tenders/E-Lodgement" component={Elodgement} />
        <Route exact path="/tenders/Future" component={Future} />
        <Route exact path="/tenders/Closed" component={Closed} />
        <Route exact path="/tenders/New-this-week" component={Newthisweek} />

        <Route exact path="/contracts/awared" component={Awarded} />
        <Route exact path="/contracts/across-gov-contracts" component={AcrossGovContracts} />

        <Route exact path="/search/tenders" component={Tenders} />
        <Route exact path="/search/contracts" component={Contracts} />

        <Route exact path="/News" component={News} />

        <Route exact path="/HELP/FAQ" component={FAQ} />
        <Route exact path="/HELP/Request-Support" component={RequestSupport} />
        <Route exact path="/HELP/Document-Library" component={DocumentLibrary} />
        <Route exact path="/download" component={MyDocument} />

        <Route exact path="/Login" component={UserLogin} />
      </Switch>
    </Router>
    </Provider>
  );
};

export default App;

