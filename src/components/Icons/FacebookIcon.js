import React from 'react';
import PropTypes from 'prop-types';

import { colors } from 'variables';

function FacebookIcon({ width, height, color, style }) {
  return (
    <svg width={width} height={height} style={style} viewBox="0 0 500.933 500.933">
      <path fill={color} d="M401.532 45.9c0-26.917-18.7-45.9-45.617-45.9h-36.833c-9.916 0-17.85 0-25.216.283-32.3 1.133-61.2 12.183-83.867 31.733-22.95 19.833-37.683 47.317-42.5 79.333-2.267 15.3-2.55 30.032-2.55 44.2h-18.133c-6.233 0-22.667 0-35.133 12.75-12.466 12.466-12.466 28.9-12.466 35.132v60.917c0 7.082 0 23.232 13.033 35.982 12.467 12.183 28.9 12.183 35.7 12.183h17.283V333.2c0 39.667-.283 79.617-.283 119.283 0 7.65-.283 23.233 12.183 35.7 12.467 12.75 28.05 12.75 35.7 12.75h58.083c12.467 0 27.767 0 40.233-12.183 12.75-12.467 12.75-28.05 12.75-40.233V313.083h28.05c28.617 0 46.75-18.133 46.75-47.033v-62.617c0-6.233 0-22.383-12.75-34.85-12.467-12.183-28.333-12.467-34.567-12.467-5.1 0-10.484-.85-15.584-.85-3.683 0-7.65-.567-11.333-.567h-.283v-2.834c4.817 0 9.633.283 14.733.283s10.483.282 15.867 0c28.333-.568 46.183-18.134 46.467-45.9V62.33c.568-5.665.568-11.05.285-16.432zm-34 59.783c0 9.633-2.833 12.183-13.033 12.467-13.318.283-26.35 0-39.668.567-16.717.567-23.517 7.65-24.083 24.367-.568 15.583 0 31.45 0 48.45H313.98c7.367 0 15.017-.85 22.383-.85 5.1 0 10.2-.283 15.3-.283 11.05 0 13.6 2.268 13.6 13.318v62.333c0 10.2-2.833 13.034-13.033 13.034H290.465v170.001c0 18.133-.567 18.417-18.983 18.417H213.4c-12.184 0-13.884-1.982-13.884-14.45 0-54.116.283-108.516.283-162.632v-11.333h-51.285c-12.183 0-14.733-2.267-14.733-14.167v-60.633c0-11.617 2.55-14.167 13.883-14.167h51c.283-3.967.283-7.367.567-10.767.567-20.682-.567-41.932 2.55-62.332C209.15 68 245.982 36.55 295.565 34.85c7.933-.282 16.15-.282 24.083-.282 8.783 0 17.567.567 26.35.567 3.4 0 7.083.567 10.483.567h.284c7.933 0 11.617 3.4 11.617 11.333-.565 19.548-.565 38.815-.848 58.648z"/>
    </svg>
  );
}

FacebookIcon.defaultProps = {
  width: 22,
  height: 22,
  color: colors.MIDNIGHT_BLACK
};

FacebookIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default FacebookIcon;

/*
<svg width={width} height={height} viewBox="0 0 112.196 112.196">
  <circle cx="56.098" cy="56.098" r="56.098" fill="#3B5998"/>
  <path d="M70.2 58.294H60.19v36.672H45.026V58.294h-7.213V45.406h7.213v-8.34c0-5.964 2.833-15.303 15.3-15.303l11.235.047v12.51h-8.15c-1.338 0-3.218.668-3.218 3.513v7.585h11.334L70.2 58.294z" fill="#FFF"/>
</svg>
*/
