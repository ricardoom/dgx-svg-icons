import React from 'react';
import PropTypes from 'prop-types';

const YoutubeIcon = ({
    ariaHidden,
    className,
    iconId,
    height,
    preserveAspectRatio,
    title,
    viewBox,
    width,
    focusable,
  }) => (
  <svg
    aria-hidden={ariaHidden}
    aria-labelledby={iconId}
    className={`${className} svgIcon`}
    height={height}
    preserveAspectRatio={preserveAspectRatio}
    title={title}
    viewBox={viewBox}
    width={width}
    focusable={focusable}
  >
  <title id={iconId}>{title}</title>
      <path d="M13.746 0l-3.243 6.43L7.259 0H3.123l5.845 10.19.035-.024v7.833h3v-7.833l.032.023L17.882 0zM22.502 6a1.52 1.52 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-3 0v-6a1.518 1.518 0 0 1 1.5-1.5zm0-3a4.512 4.512 0 0 0-4.5 4.5v6a4.5 4.5 0 0 0 9 0v-6a4.512 4.512 0 0 0-4.5-4.5zM36.002 3v11.812c-1.31 1.09-3 1.746-3-2.142V3h-3v10.28h.006c.044 2.481.568 6.946 5.994 3.316v1.403h3V3zM40.501 32.999a1.499 1.499 0 0 0-1.5 1.5v1.5h3v-1.5a1.5 1.5 0 0 0-1.5-1.5zM27.002 34.499v7.874c1.017 1.017 3 1.125 3-.375v-7.03c0-1.5-1.5-1.97-3-.47z" />
      <path d="M47.755 27.26a6.24 6.24 0 0 0-6.135-6.015C38.351 21.085 30.866 21 24.29 21s-14.593.082-17.862.246a6.384 6.384 0 0 0-4.269 1.785 6.383 6.383 0 0 0-1.866 4.23C.1 30.78 0 32.055 0 33.819q0 2.641.293 7.922a6.384 6.384 0 0 0 1.866 4.23 6.398 6.398 0 0 0 4.269 1.784c3.269.161 11.287.243 17.861.243s14.059-.082 17.331-.243a6.239 6.239 0 0 0 6.135-6.014q.246-4.404.246-7.922c0-2.35-.082-3.624-.246-6.56zM9.003 44.998h-3v-15h-3v-3h9v3h-3zm12 0h-3v-1.403c-5.705 3.199-5.95.102-5.995-2.376h-.005v-8.217h3v8.264c0 1.813 1.69 1.638 3 .545V33h3v11.997zm11.999-3.04c0 3.134-3.211 4.048-6 1.61v1.43h-3v-18h3v4.876c3-3 6-1.875 6 1.125zm12-5.96v1.5h-6v3a1.5 1.5 0 0 0 3 0v-1.5h3v1.5a4.5 4.5 0 1 1-9 0v-6a4.5 4.5 0 0 1 9 0z" />
  </svg>
);

YoutubeIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.string,
  iconId: PropTypes.string.isRequired,
  preserveAspectRatio: PropTypes.string,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
  focusable: PropTypes.bool,
};

YoutubeIcon.defaultProps = {
  ariaHidden: true,
  className: 'youtube-icon',
  height: '47.998',
  preserveAspectRatio: 'xMidYMid meet',
  title: 'Youtube',
  viewBox: '0 0 48.001 47.998',
  width: '48.001',
};

export default YoutubeIcon;
