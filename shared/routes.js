/* eslint no-unused-vars:0 */
import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import Index from './container/Index';
import Summary from './container/user/Summary';
import Inventory from './container/user/Inventory';
import Selling from './container/user/Selling';
import Sold from './container/user/Sold';
import Bought from './container/user/Bought';
import About from './container/About';
import Help from './container/Help';

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Index } />
    <Route path="/help" component={ Help } />
    <Route path="/about" component={ About } />
    <Route path="/profile/summary" component={ Summary } />
    <Route path="/profile/inventory" component={ Inventory } />
    <Route path="/profile/selling" component={ Selling } />
    <Route path="/profile/sold" component={ Sold } />
    <Route path="/profile/bought" component={ Bought } />
  </Route>
);

export default routes;
