import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetch } from './actions';
import { selectPosts, selectIsLoading } from './selector';

import Header from 'components/Header';
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
    const { isLoading } = this.props;

    return (
      <Grid>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Generation Y</title>
          <description>All The Great Adventures Start With Why</description>
          <meta
            property="og:title"
            content="All The Great Adventures Start With Why"
          />
          <meta
            property="og:description"
            content="Changement de vie ou simple changement de direction, ils se posent des questions, font des choix, prennent des décisions, ont des doutes, des peurs, vivent des joies, des déceptions ou des satisfactions. Le tout, poussé par une raison primordiale : être en phase avec eux mêmes et leurs aspirations."
          />
        </Helmet>
        {isLoading && <Preloader />}
        <Header />
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
