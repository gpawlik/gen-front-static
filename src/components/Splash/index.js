import React from 'react';

import Container from './Container';
import Title from './Title';
import SubTitle from './SubTitle';
import { LogoIcon } from 'components/Icons';

const Splash = () => {
  return (
    <Container>
      <div>
        <Title>
          Generation{' '}
          <LogoIcon
            width={80}
            height={80}
            style={{ position: 'relative', bottom: '-15px' }}
          />
        </Title>
        <SubTitle>All the great adventures start with why</SubTitle>
      </div>
    </Container>
  );
};

export default Splash;
