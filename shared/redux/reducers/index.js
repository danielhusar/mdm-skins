import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import inventory from './inventory';
import user from './user';

const rootReducer = combineReducers({
  user,
  inventory,
  routing,
});

export default rootReducer;
