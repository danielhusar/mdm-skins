import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import inventory from './inventory';
import notification from './notification';
import user from './user';
import selling from './selling';
import browse from './browse';
import browseSettings from './browseSettings';

const rootReducer = combineReducers({
  user,
  inventory,
  browse,
  browseSettings,
  selling,
  notification,
  routing,
});

export default rootReducer;
