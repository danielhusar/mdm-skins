import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export function configureStore(history, initialState) {
  const middlewareWithDevtools = compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  const store = createStore(rootReducer, initialState, middlewareWithDevtools);
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers'); // eslint-disable-line
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
