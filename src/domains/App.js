import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import Routes from 'react-static-routes';
import { Router, Head } from 'react-static';
import { Provider } from 'react-redux';

import store from '../store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IntlProvider locale="en">
          <Head>
            <meta charSet="utf-8" />
          </Head>
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
