import { isProduction } from '../../helpers/config';
import layout from './layout';

export function renderMessage(err) {
  const messages = {
    404: 'File not found',
    500: 'Something went wrong',
  };

  return layout(messages[err] || messages[404], err);
}

export function renderError(err) {
  if (isProduction()) {
    return renderMessage(500);
  }

  return layout(`:<pre style="color:red"> &#32;&#32;&#32;&#32; ${err.stack.replace(/\n/g, '<br>&#32;&#32;&#32;&#32;')} </pre>`);
}

export function renderPage(html, initialState) {
  return layout(`
      <div id="root">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
      </script>
    `);
}
