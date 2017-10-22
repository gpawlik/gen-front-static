import styled from 'styled-components';

import { colors } from 'variables';

const Title = styled.h3`
  font-size: 50px;
  font-weight: 600;
  color: ${colors.WHITE};
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Title;
