import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {/*<Route path="/" exact component={SignIn} />*/}
      <Route path="/" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
