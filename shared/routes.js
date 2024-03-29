/* eslint no-unused-vars:0 */
import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import Browse from './container/Browse';
import Summary from './container/user/Summary';
import Inventory from './container/user/Inventory';
import Selling from './container/user/Selling';
import Sold from './container/user/Sold';
import Purchased from './container/user/Purchased';
import About from './container/About';
import Help from './container/Help';

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Browse } />
    <Route path="/help" component={ Help } />
    <Route path="/about" component={ About } />

    <Route path="/browse/:page" component={ Browse } />
    <Route path="/browse/exterior/:exterior/type/:type" component={ Browse } />
    <Route path="/browse/exterior/:exterior/type/:type/page/:page" component={ Browse } />
    <Route path="/browse/exterior/:exterior/type/:type/search/:search" component={ Browse } />
    <Route path="/browse/exterior/:exterior/type/:type/search/:search/page/:page" component={ Browse } />

    <Route path="/profile/summary" component={ Summary } />
    <Route path="/profile/inventory" component={ Inventory } />
    <Route path="/profile/selling" component={ Selling } />
    <Route path="/profile/sold" component={ Sold } />
    <Route path="/profile/purchased" component={ Purchased } />
  </Route>
);

export default routes;
