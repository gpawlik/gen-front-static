// style-utils.js
import { css } from 'styled-components';

export const media = {
  tablet: (...args) => css`
    @media (max-width: 899px) {
      ${css(...args)};
    }
  `,
  mobile: (...args) => css`
    @media (max-width: 679px) {
      ${css(...args)};
    }
  `
};
