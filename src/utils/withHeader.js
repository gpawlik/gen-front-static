import React, { Component } from 'react';
import Header from 'components/Header';

export const withHeader = BaseComponent => {
  return class extends Component {
    render() {
      console.log('D', this.props);
      return (
        <div>
          <Header {...this.props} />
          <BaseComponent {...this.props} />
        </div>
      );
    }
  };
};
