/* eslint no-unused-vars:0 */
import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import Index from './container/Index';
import Inventory from './container/Inventory';
import About from './container/About';

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Index } />
    <Route path="/inventory" component={ Inventory } />
    <Route path="/about" component={ About } />
  </Route>
);

export default routes;
