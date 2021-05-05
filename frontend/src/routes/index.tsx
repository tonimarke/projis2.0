import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import InternalRegistration from '../pages/Internal/InternalRegistration';
import InternalConsultation from '../pages/Internal/InternalConsultation';
import ClientRegistration from '../pages/Client/ClientRegistration';
import ClientConsultation from '../pages/Client/ClientConsultation';
import CounterpartRegistration from '../pages/Counterpart/CounterpartRegistration';
import CounterpartConsultation from '../pages/Counterpart/CounterpartConsultation';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/internal_registration" component={InternalRegistration} isPrivate />
      <Route path="/internal_consultation" component={InternalConsultation} isPrivate />
      <Route path="/client_registration" component={ClientRegistration} isPrivate />
      <Route path="/client_consultation" component={ClientConsultation} isPrivate />
      <Route path="/counterpart_registration" component={CounterpartRegistration} isPrivate />
      <Route path="/counterpart_consultation" component={CounterpartConsultation} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
