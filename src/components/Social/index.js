import React from 'react';

import Container from './Container';
import SocialItem from './SocialItem';

import socialShare from 'utils/socialShare';

const Header = ({ slug, text }) => {
  return (
    <Container>
      <SocialItem
        type="facebook"
        onClick={() => socialShare('fb', slug, text)}
      />
      <SocialItem
        type="twitter"
        onClick={() => socialShare('tw', slug, text)}
      />
    </Container>
  );
};

export default Header;
