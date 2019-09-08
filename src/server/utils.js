import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

export const render = (req, store, routes, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>,
  );

  const cssStr = context.css.length ? context.css.join('\n') : '';

  return `
      <html>
        <head>
          <style>${cssStr}</style>
        </head>
        <body>
          <div id='root'>${content}</div>
          <script>
            window.context = {
              state: ${JSON.stringify(store.getState())}
            }
          </script>
          <script src='index.js'></script>
        </body>
      </html>
    `;
};
