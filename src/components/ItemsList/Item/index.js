import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Title from './Title';
import Image from './Image';

const Item = ({ slug, title, imageUrl }) => {
  return (
    <Container to={`/p/${slug}`}>
      <Image src={imageUrl} />
      <Title>{title}</Title>
    </Container>
  );
};

Item.propTypes = {
  title: PropTypes.string
};

Item.defaultProps = {
  title: ''
};

export default Item;
