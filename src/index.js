import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// Your top level component
import App from './domains/App';

// Import CSS reset and Global Styles
import './styles';

// Export your top level component as JSX (for static rendering)
export default <App />;

// Render your app
if (typeof document !== 'undefined') {
  const render = Comp => {
    ReactDOM.hydrate(
      <AppContainer>
        <Comp />
      </AppContainer>,
      document.getElementById('root')
    );
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./domains/App', () => {
      render(require('./domains/App').default);
    });
  }
}
