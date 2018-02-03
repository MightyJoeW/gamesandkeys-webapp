import React from "react";
import { Route, Switch } from "react-router-dom";

//COMPONENTS
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import Downloads from "./components/Downloads/Downloads";
import Requests from "./components/Requests/Requests";
import About from "./components/About/About";
import Help from "./components/Help/Help";
import NotFound from "./components/NotFound/NotFound";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/downloads" component={Downloads} />
    <Route path="/requests" component={Requests} />
    <Route path="/about" component={About} />
    <Route path="/help" component={Help} />
    <Route path="*" component={NotFound} />
  </Switch>
);
