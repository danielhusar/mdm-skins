import appState from '../lib/appState';
import { renderError, renderPage } from '../views/Content';

const Content = (req, res, next) => {
  global.__user = req.user;

  appState(req.url).then(data => {
    const view = data.view;
    const state = data.state;

    if (data.err) {
      return next();
    }

    // if (!state.landing.page && !state.serie.page && !state.article.page && !state.search.results) {
    //   return res.status(404).end(renderPage(view, state));
    // }

    res.status(200).end(renderPage(view, state));
  }).catch(err => {
    res.status(500).end(renderError(err));
  });
};

export default Content;
