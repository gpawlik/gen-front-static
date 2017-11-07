import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchSingle } from './actions';
import { selectIsLoading } from './selector';

import Content from './Content';
import Preloader from 'components/Preloader';

export class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.onPostFetch(nextProps.match.params.id);
    }
    window.scrollTo(0, 0);
  }

  render() {
    const { isLoading } = this.props;

    return (
      <div>
        {isLoading && <Preloader />}
        <Content />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading()
});

export const mapDispatchToProps = dispatch => {
  return {
    onPostFetch: postId => {
      dispatch(fetchSingle(postId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
