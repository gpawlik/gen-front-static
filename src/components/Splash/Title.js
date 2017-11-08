import styled from 'styled-components';

import { colors } from 'variables';
import { media } from 'utils/style';

const Title = styled.h1`
  color: ${colors.MIDNIGHT_BLACK};
  font-size: 70px;
  text-align: center;
  padding: 0 20px;
  position: relative;
  z-index: 9;

  ${media.tablet`
    font-size: 45px;
  `};
`;

export default Title;
