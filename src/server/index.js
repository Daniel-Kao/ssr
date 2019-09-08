import express from 'express';
import { render } from './utils';
import { getStore } from '../store';
import { matchRoutes } from 'react-router-config';
import routes from '../Routes';
import proxy from 'express-http-proxy';

const app = express();

app.use(express.static('public'));

app.use(
  '/todos',
  proxy('https://jsonplaceholder.typicode.com', {
    proxyReqPathResolver: function(req) {
      return '/todos' + req.url;
    },
  }),
);

app.get('*', (req, res) => {
  const store = getStore();

  const matchedRoutes = matchRoutes(routes, req.url);

  const promises = [];

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route
          .loadData(store)
          .then(resolve)
          .catch(resolve);
      });
      promises.push(promise);
    }
  });

  Promise.all(promises).then(() => {
    const context = { css: [] };
    const html = render(req, store, routes, context);
    if (context.NOT_FOUND) {
      res.status(404);
      res.send(html);
    } else if (context.action === 'REPLACE') {
      res.redirect(301, path.url);
    } else {
      res.send(html);
    }
  });
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
