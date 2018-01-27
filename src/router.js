import React from "react";
import { Route, Switch } from "react-router-dom";

//COMPONENTS
import Landing from "./components/Landing/Landing";
import NotFound from "./components/NotFound/NotFound";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="*" component={NotFound} />
  </Switch>
);
