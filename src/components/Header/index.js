import React from 'react';

import Container from './Container';
import Wrapper from './Wrapper';
import { LogoIcon } from 'components/Icons';
import Logo from 'components/Logo';
import SocialBox from 'components/Social';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo to="/">
          <LogoIcon />
        </Logo>
        <SocialBox />
      </Wrapper>
    </Container>
  );
};

export default Header;
