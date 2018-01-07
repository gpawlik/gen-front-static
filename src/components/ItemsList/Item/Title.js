import styled from 'styled-components';

import { colors } from 'variables';
import { media } from 'utils/style';

const Title = styled.h3`
  font-size: 40px;
  font-weight: 600;
  line-height: 130%;
  color: ${colors.WHITE};
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${media.tablet`
    font-size: 30px;
  `};
`;

export default Title;
