import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import inventory from './inventory';
import notification from './notification';
import user from './user';
import selling from './selling';

const rootReducer = combineReducers({
  user,
  inventory,
  selling,
  notification,
  routing,
});

export default rootReducer;
