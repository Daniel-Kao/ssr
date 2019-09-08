import Home from './containers/Home';
import Login from './containers/Login';
import App from './App';
import PageNotFound from './components/PageNotFound';

export default [
  {
    path: '/',
    component: App,
    key: 'app',
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home',
      },
      {
        path: '/login',
        component: Login,
        key: 'login',
      },
      {
        component: PageNotFound,
      },
    ],
  },
];
