import React from 'react';
import DefaultLayout from '../Container';

const Home = React.lazy(() => import('../Components/Home'));
const Second = React.lazy(() => import('../Components/Second'));

const routes = [
  { path: '/', name: 'Main', component: DefaultLayout, exact: true },

  { path: '/home', name: 'Home', component: Home, exact: true },
  { path: '/second', name: 'Second', component: Second, exact: true }
];

export default routes;