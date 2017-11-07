import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Container from './Container';
import ItemBox from './ItemBox';
import Item from './Item';

export class RelatedPosts extends Component {
  constructor(props) {
    super(props);

    this.handlePostNavigation = this.handlePostNavigation.bind(this);
  }

  handlePostNavigation(event) {
    const { prevSlug, nextSlug, history } = this.props;
    const { keyCode } = event;

    if (keyCode === 37 && nextSlug) {
      history.push(`/p/${nextSlug}`);
    } else if (keyCode === 39 && prevSlug) {
      history.push(`/p/${prevSlug}`);
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handlePostNavigation, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePostNavigation, false);
  }

  render() {
    const { prevSlug, prevTitle, nextSlug, nextTitle } = this.props;

    return (
      <Container>
        {nextSlug && (
          <ItemBox>
            <Item to={`/p/${nextSlug}`}>
              <span>Previous Story</span>
              {nextTitle}
            </Item>
          </ItemBox>
        )}
        {prevSlug && (
          <ItemBox>
            <Item to={`/p/${prevSlug}`} align="left">
              <span>Next Story</span>
              {prevTitle}
            </Item>
          </ItemBox>
        )}
      </Container>
    );
  }
}

export default withRouter(RelatedPosts);
