import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import inventory from './inventory';
import notification from './notification';
import user from './user';

const rootReducer = combineReducers({
  user,
  inventory,
  notification,
  routing,
});

export default rootReducer;
