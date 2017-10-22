import React, { Component } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'react-static-routes';
import { Router, Link } from 'react-static';
import { Provider } from 'react-redux';

import store from '../store';
import DefaultLayout from 'layouts/DefaultLayout';
import PostList from 'domains/Posts/PostList';
import PostSingle from 'domains/Posts/PostSingle';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IntlProvider locale="en">
          <div>
            <Router>
              <Routes />
            </Router>
          </div>
        </IntlProvider>
      </Provider>
    );
  }
}
