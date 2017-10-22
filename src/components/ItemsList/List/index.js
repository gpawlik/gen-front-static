import React from 'react';
import PropTypes from 'prop-types';
import { getRouteProps } from 'react-static';

import Container from './Container';
import Item from 'components/ItemsList/Item';
import EmptyView from 'components/ItemsList/EmptyView';

const List = getRouteProps(({ posts }) => {
  const results = posts.map(({ id, title, featuredImageUrlThumbnail }) => {
    return (
      <Item
        id={id}
        title={title}
        imageUrl={featuredImageUrlThumbnail}
        key={id}
      />
    );
  });

  return (
    <Container>
      {posts.length ? results : <EmptyView />}
    </Container>
  );
});

export default List;
