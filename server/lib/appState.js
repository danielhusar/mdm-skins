import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from '../../shared/redux/store/configureStore';
import routes from '../../shared/routes';

function fetchComponentData(dispatch, components, params) {
  const needs = components.reduce((prev, current) => {
    return (current.need || [])
      .concat((current.WrappedComponent && (current.WrappedComponent.need !== current.need) ? current.WrappedComponent.need : []) || [])
      .concat(prev);
  }, []);
  const promises = needs.map(need => dispatch(need(params)));
  return Promise.all(promises);
}

export default function (url) {
  const memoryHistory = createMemoryHistory(url);
  const store = configureStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  return new Promise((resolve, reject) => {
    match({ history, routes, location: url }, (err, redirectLocation, renderProps) => {
      if (!renderProps) {
        return resolve({ err: 404 });
      }

      fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
        .then(() => {
          const view = renderToString(
            <Provider store={ store }>
              <RouterContext { ...renderProps } />
            </Provider>
          );

          const state = store.getState();
          resolve({ view, state });
        }).catch(reject);
    });
  });
}
