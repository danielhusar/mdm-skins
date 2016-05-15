/* eslint no-unused-vars:0 */
import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import Index from './container/Index';

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Index } />
  </Route>
);

export default routes;
