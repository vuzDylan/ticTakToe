import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';
import { Router, browserHistory } from 'react-router';

window.onload = () => {
  ReactDom.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        { routes }
      </Router>
    </Provider>
  );
}

