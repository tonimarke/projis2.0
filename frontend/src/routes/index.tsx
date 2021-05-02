import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import InternalRegistration from '../pages/Internal/InternalRegistration';
import InternalConsultation from '../pages/Internal/InternalConsultation';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/internal_registration" component={InternalRegistration} isPrivate />
      <Route path="/internal_consultation" component={InternalConsultation} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
