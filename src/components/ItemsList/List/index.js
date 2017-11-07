import React from 'react';
import { getRouteProps } from 'react-static';

import Container from './Container';
import Item from 'components/ItemsList/Item';
import EmptyView from 'components/ItemsList/EmptyView';

const List = getRouteProps(({ posts }) => {
  const results = posts.map(
    ({ id, title, slug, featuredImageUrlThumbnail }) => {
      return (
        <Item
          title={title}
          slug={slug}
          imageUrl={featuredImageUrlThumbnail}
          key={id}
        />
      );
    }
  );

  return <Container>{posts.length ? results : <EmptyView />}</Container>;
});

export default List;
