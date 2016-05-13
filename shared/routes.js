/* eslint no-unused-vars:0 */
import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import Login from './container/Login';
import Books from './container/Books';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Login} />
    <Route path="/books" component={Books} />
  </Route>
);

export default routes;
