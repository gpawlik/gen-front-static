import React from 'react';

import { LogoIcon } from 'components/Icons';
import Logo from 'components/Logo';
import SocialBox from 'components/Social';
import { Container, Wrapper } from './styles';

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
