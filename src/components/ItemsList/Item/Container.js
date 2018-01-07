import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'variables';
import { media } from 'utils/style';

const Container = styled(Link)`
  background-color: ${colors.DOVE_GRAY};
  display: block;
  margin: 0;
  flex-grow: 1;
  width: 33%;
  height: 500px;
  text-decoration: none;
  overflow: hidden;
  position: relative;

  &:hover img {
    opacity: 0.8;
    transform: scale(1.1);
    filter: grayscale(0.2);
  }

  ${media.tablet`
    width: 50%;
  `};

  ${media.mobile`
    width: 100%;
  `};
`;

export default Container;
