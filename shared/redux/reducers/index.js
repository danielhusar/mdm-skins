import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import user from './user';

const rootReducer = combineReducers({
  user,
  routing,
});

export default rootReducer;
