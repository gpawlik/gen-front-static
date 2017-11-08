import styled from 'styled-components';

import { media } from 'utils/style';

const Container = styled.div`
  margin: 100px auto 50px;
  padding: 0 70px;
  max-width: 900px;

  ${media.mobile`
    padding: 0 25px;
    margin-top: 70px;
  `};
`;

export default Container;
