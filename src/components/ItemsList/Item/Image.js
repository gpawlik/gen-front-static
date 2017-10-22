import styled from 'styled-components';

const Image = styled.img`
  filter: grayscale(1);
  width: 100%;
  height: 100%;
  opacity: .3;
  object-fit: cover;
  position: relative;
  transition: filter .5s ease-out,
    opacity .5s ease-out,
    transform 3s ease-out;
  transform: scale(1);
  `;

export default Image;
