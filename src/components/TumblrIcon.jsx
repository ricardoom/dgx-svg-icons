import React from 'react';
import PropTypes from 'prop-types';

const TumblrIcon = ({
    ariaHidden,
    className,
    height,
    iconId,
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
      <path d="M16.644 0v12.131h11.424v7.534H16.644v12.309a19.61 19.61 0 0 0 .441 5.357 3.664 3.664 0 0 0 1.652 1.895 6.971 6.971 0 0 0 3.656.953 13.194 13.194 0 0 0 7.274-2.37v7.573a28.934 28.934 0 0 1-5.589 2.031 23.648 23.648 0 0 1-5.413.586 18.768 18.768 0 0 1-5.837-.831A12.607 12.607 0 0 1 8.5 44.796a8.592 8.592 0 0 1-2.484-3.273 14.11 14.11 0 0 1-.692-5.023V19.665H0v-6.79a14.235 14.235 0 0 0 4.862-2.634 13.131 13.131 0 0 0 3.247-4.124A18.576 18.576 0 0 0 9.796 0z" />
  </svg>
);

TumblrIcon.propTypes = {
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

TumblrIcon.defaultProps = {
  ariaHidden: true,
  className: 'tumblr-icon',
  height: '47.999',
  preserveAspectRatio: 'xMidYMid meet',
  title: 'Tumblr',
  viewBox: '0 0 29.667 47.999',
  width: '29.667',
};

export default TumblrIcon;
