import React from 'react';

import Container from './Container';
import Wrapper from './Wrapper';
import { LogoIcon } from 'components/Icons';
import Logo from 'components/Logo';
import SocialBox from 'components/Social';

const Header = ({ slug, text }) => {
  return (
    <Container>
      <Wrapper>
        <Logo to="/">
          <LogoIcon />
        </Logo>
        <SocialBox slug={slug} text={text} />
      </Wrapper>
    </Container>
  );
};

export default Header;
