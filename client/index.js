import 'babel-polyfill';
import { configureStore } from '../shared/redux/store/configureStore';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';
import routes from '../shared/routes';
import '../css/style.scss';

const store = configureStore(browserHistory, window.__INITIAL_STATE__); // eslint-disable-line
const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={ store }>
    <Router history={ history } routes={ routes } />
  </Provider>
  )
 , document.getElementById('root'));
