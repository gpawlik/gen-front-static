import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetch } from './actions';
import { selectPosts, selectIsLoading } from './selector';

import ItemsList from 'components/ItemsList/List';
import Splash from 'components/Splash';
import Preloader from 'components/Preloader';
import Grid from 'components/Layout/Grid';

export class PostList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { posts, onPostsFetch } = this.props;

    if (!posts.length) {
      // onPostsFetch();
    }
    window.scrollTo(0, 0);
  }

  render() {
    const { posts, isLoading } = this.props;

    return (
      <Grid>
        {isLoading && <Preloader />}
        <Splash />
        <ItemsList />
      </Grid>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  posts: selectPosts(),
  isLoading: selectIsLoading()
});

export const mapDispatchToProps = dispatch => {
  return {
    onPostsFetch: () => {
      dispatch(fetch());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
