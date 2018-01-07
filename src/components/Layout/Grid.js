import styled from 'styled-components';

import { colors } from 'variables';

const Grid = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-left: 1px solid ${colors.DOVE_GRAY};
  border-right: 1px solid ${colors.DOVE_GRAY};
  position: relative;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    content: '';
    width: 100%;
  }

  &:before {
    left: 0;
    transform: translateX(33.333333%);
    border-left: 1px solid ${colors.DOVE_GRAY};
  }

  &:after {
    right: 0;
    transform: translateX(-33.33333%);
    border-right: 1px solid ${colors.DOVE_GRAY};
  }
`;

export default Grid;
