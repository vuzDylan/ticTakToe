import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import TicTakToe from './containers/TicTakToe';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={TicTakToe} />
  </Route>
)
