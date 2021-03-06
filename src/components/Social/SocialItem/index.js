import React from 'react';

import { FacebookIcon, TwitterIcon } from 'components/Icons';
import Item from './Item';

const SocialItem = ({ type, onClick }) => {
  let Handler;

  switch (type) {
    case 'facebook':
      Handler = FacebookIcon;
      break;
    case 'twitter':
      Handler = TwitterIcon;
      break;
  }
  return (
    <Item onClick={onClick}>
      <Handler />
    </Item>
  );
};

export default SocialItem;
