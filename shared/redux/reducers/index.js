import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import inventory from './inventory';
import notification from './notification';
import user from './user';
import selling from './selling';
import browse from './browse';

const rootReducer = combineReducers({
  user,
  inventory,
  browse,
  selling,
  notification,
  routing,
});

export default rootReducer;
