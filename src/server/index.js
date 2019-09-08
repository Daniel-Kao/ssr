import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import getStore from '../store';
import Routes from '../Routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const content = renderToString(
    <Provider store={getStore()}>
      <StaticRouter location={req.url} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>,
  );

  res.send(`
    <html>
      <head></head>
      <body>
        <div id='root'>${content}</div>
        <script src='index.js'></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
