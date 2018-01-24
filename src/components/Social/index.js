import React from 'react';

import Container from './Container';
import SocialItem from './SocialItem';

const Header = () => {
  return (
    <Container>
      <SocialItem
        type="facebook"
        onClick={() =>
          window.open('https://www.facebook.com/whygeneration/', '_blank')}
      />
      <SocialItem
        type="twitter"
        onClick={() =>
          window.open('https://twitter.com/GenerationYwhy', '_blank')}
      />
    </Container>
  );
};

export default Header;
