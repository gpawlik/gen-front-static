import React, { Component } from 'react';
import Header from 'components/Header';

export const withHeader = BaseComponent => {
  return class extends Component {
    render() {
      return (
        <div>
          <Header />
          <BaseComponent {...this.props} />
        </div>
      );
    }
  };
};
