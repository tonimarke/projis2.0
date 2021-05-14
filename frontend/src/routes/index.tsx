import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

import InternalRegistration from '../pages/Internal/InternalRegistration';
import InternalConsultation from '../pages/Internal/InternalConsultation';
import InternalInformation from '../pages/Internal/InternalInformation';

import ClientRegistration from '../pages/Client/ClientRegistration';
import ClientConsultation from '../pages/Client/ClientConsultation';
import ClientInformation from '../pages/Client/ClientInformation';

import CounterpartRegistration from '../pages/Counterpart/CounterpartRegistration';
import CounterpartConsultation from '../pages/Counterpart/CounterpartConsultation';
import CounterpartInformation from '../pages/Counterpart/CounterpartInformation';

import ActionRegistration from '../pages/Action/ActionRegistration';
import ActionConsultation from '../pages/Action/ActionConsultation';
import ActionInformation from '../pages/Action/ActionInformation';

import RecordRegistration from '../pages/Record/RecordRegistration';
import RecordConsultation from '../pages/Record/RecordConsultation';
import RecordInformation from '../pages/Record/RecordInformation';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      
      <Route path="/internal_registration" component={InternalRegistration} isPrivate />
      <Route path="/internal_consultation" component={InternalConsultation} isPrivate />
      <Route path="/internal_information/:id" component={InternalInformation} isPrivate />

      <Route path="/client_registration" component={ClientRegistration} isPrivate />
      <Route path="/client_consultation" component={ClientConsultation} isPrivate />
      <Route path="/client_information/:id" component={ClientInformation} isPrivate />

      <Route path="/counterpart_registration" component={CounterpartRegistration} isPrivate />
      <Route path="/counterpart_consultation" component={CounterpartConsultation} isPrivate />
      <Route path="/counterpart_information/:id" component={CounterpartInformation} isPrivate />

      <Route path="/action_registration" component={ActionRegistration} isPrivate />
      <Route path="/action_consultation" component={ActionConsultation} isPrivate />
      <Route path="/action_information/:id" component={ActionInformation} isPrivate />

      <Route path="/record_registration" component={RecordRegistration} isPrivate />
      <Route path="/record_consultation" component={RecordConsultation} isPrivate />
      <Route path="/record_information/:id" component={RecordInformation} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
