import React, { Component } from 'react';

import Container from './Container';
import SocialItem from './SocialItem';

import socialShare from 'utils/socialShare';

class Header extends Component {
  render() {
    return (
      <Container>
        <SocialItem
          type="facebook"
          onClick={() => socialShare('fb')}
        />
        <SocialItem
          type="twitter"
          onClick={() => socialShare('tw')}
        />
      </Container>
    );
  }
}

export default Header;
