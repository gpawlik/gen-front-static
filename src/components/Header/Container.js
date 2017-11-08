import styled from 'styled-components';

import { media } from 'utils/style';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  ${media.tablet`
    background: rgba(255, 255, 255, .8);
  `};
`;

export default Container;
