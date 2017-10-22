import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Item = styled(Link)`
  padding: 15px;
  display: flex;
  font-size: 16px;
  text-decoration: none;
  justify-content: ${({ align }) => align === 'left' ? 'flex-end' : 'flex-start'};
  text-align: ${({ align }) => align === 'left' ? 'right' : 'left'};
  flex-direction: column;
  color: #666;

  > span {
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: #999;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

export default Item;
