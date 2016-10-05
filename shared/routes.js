/* eslint no-unused-vars:0 */
import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import Index from './container/Index';
import Inventory from './container/Inventory';
import About from './container/About';
import Profile from './container/Profile';
import Help from './container/Help';

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Index } />
    <Route path="/help" component={ Help } />
    <Route path="/about" component={ About } />
    <Route path="/profile/inventory" component={ Inventory } />
  </Route>
);

export default routes;
