import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export function configureStore(history, initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk, routerMiddleware(history)));
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers'); // eslint-disable-line
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
