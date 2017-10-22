import styled from 'styled-components';

import { media } from 'utils/style';

const Flex = styled.div`
  display: flex;

  ${media.tablet`
    flex-direction: column
  `}
`;

export default Flex;
