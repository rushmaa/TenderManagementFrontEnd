import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Navbar from "./components/Navbar";
import { Header } from "./components/Header";
import history from "./history";

import Reducer from "./store/reducers/Reducer";

import FAQ from "./views/FAQ";
import RequestSupport from "./views/RequestSupport";
import DisplayTender from "./views/DisplayTender";
import DocumentLibrary from "./views/DocumentLibrary";
import UserLogin from "./views/UserLogin";
import Current from "./views/Current";
import Elodgement from "./views/Elodgement";
import Future from "./views/Future";
import Closed from "./views/Closed";
import Newthisweek from "./views/Newthisweek";
import Awarded from "./views/Awarded";
import AcrossGovContracts from "./views/AcrossGovContracts";
import Tenders from "./views/Tenders";
import Contracts from "./views/Contracts";
import News from "./views/News";
import Home from "./views/Home";
import AddTender from "./views/AddTender";
import AdminDashboard from "./views/Admin/AdminDashboard";
import Signup from "./views/Signup";
import PublishCouncil from "./views/PublishCouncil";
import PublishContract from "./views/PublishContract";
import PublishTender from "./views/PublishTender";
import NoAccess from "./views/NoAccess";
import PublishGuildlines from "./views/PublishGuidline";

const App = () => {
  const store = createStore(Reducer);
  return (
    <Provider store={store}>
      <Router history={history}>
          <Header />
           <Navbar store={store} />
        <Switch>
           
          <Route exact path="/NoAccess" component={NoAccess} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={UserLogin} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/tenders/Current" component={Current} />
          <Route
            path="/tenders/Current/DisplayTender"
            component={DisplayTender}
          />
          <Route exact path="/tenders/E-Lodgement" component={Elodgement} />
          <Route exact path="/tenders/Future" component={Future} />
          <Route exact path="/tenders/Closed" component={Closed} />
          <Route exact path="/tenders/New-this-week" component={Newthisweek} />
          <Route exact path="/contracts/awared" component={Awarded} />
          <Route
            exact
            path="/contracts/across-gov-contracts"
            component={AcrossGovContracts}
          />
          <Route exact path="/search/tenders" component={Tenders} />
          <Route exact path="/search/contracts" component={Contracts} />
          <Route exact path="/News" component={News} />
          <Route exact path="/Publish-Guildline" component={PublishGuildlines} />
          <Route exact path="/News/Publish-Council" component={PublishCouncil} />
          <Route exact path="/News/Publish-Contract" component={PublishContract} />
          <Route exact path="/News/Publish-Tender" component={PublishTender} />
          <Route exact path="/HELP/FAQ" component={FAQ} />
          <Route
            exact
            path="/HELP/Request-Support"
            component={RequestSupport}
          />
          <Route
            exact
            path="/HELP/Document-Library"
            component={DocumentLibrary}
          />
          <Route exact path="/add-tender" component={AddTender} />
          <Route exact path="/Login" component={UserLogin} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
