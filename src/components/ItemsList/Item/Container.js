import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'variables';

const Container = styled(Link)`
  background-color: ${colors.DOVE_GRAY};
  display: block;
  margin: 30px 0;
  width: 100%;
  height: 500px;
  text-decoration: none;
  overflow: hidden;
  position: relative;

  &:hover img {
    opacity: .8;
    transform: scale(1.1);
    filter: grayscale(0.2);
  }
`;

export default Container;
