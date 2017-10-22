import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Title from './Title';
import Image from './Image';

const Item = ({ id, title, imageUrl }) => {
  return (
    <div>
      <Container to={`/post/${id}`}>
        <Image src={imageUrl} />
        <Title>{title}</Title>
      </Container>
    </div>
  );
};

Item.propTypes = {
  title: PropTypes.string
};

Item.defaultProps = {
  title: ''
};

export default Item;
