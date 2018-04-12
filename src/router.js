// External Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Internal Dependencies
// import Landing from './components/Landing/Landing';
import Dashboard from './pages/Dashboard';
import Downloads from './pages/Downloads';
import Requests from './pages/Requests/Requests';
import About from './pages/About';
import Help from './pages/Help';
import NotFound from './pages/NotFound/NotFound';

export default (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/downloads' component={Downloads} />
    <Route path='/requests' component={Requests} />
    <Route path='/about' component={About} />
    <Route path='/help' component={Help} />
    <Route path='*' component={NotFound} />
  </Switch>
);
